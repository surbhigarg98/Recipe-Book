import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError,tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import {User} from './user.mode';
import { Router } from '@angular/router';



interface AuthServiceData{
    idToken	:string,
    email: string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    kind:string,
    registered?:boolean
}
@Injectable({providedIn:'root'})
export class AuthService{

    constructor (private http:HttpClient,private router:Router){ }
    private tokenExpirationDuration:any

    user = new BehaviorSubject<User>(null);

    autoLogIn(){
        const userData:{
            email:string,
            id:string,
            _token:string,
        _tokenExpirationDate : string
        } = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        )
        if(loadedUser.token){
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -  new Date().getTime();
            this.autoLogOut(expirationDuration);

        }

    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationDuration){
            clearTimeout(this.tokenExpirationDuration)
        }
        this.tokenExpirationDuration = null;
    }

    autoLogOut(expirationDuration:number){
      this.tokenExpirationDuration= setTimeout(()=>{
         this.logOut();
      },expirationDuration)
    }

    signUp(email:string,password:string){
      return  this.http.post<AuthServiceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrxT1ym6LAw_bB5wRjmmQF3ufXB-lOGoU',{
         email:email,
         password:password,
         returnSecureToken:true
        }).pipe(catchError(this.errorHandler),tap(resData=>{
           this.userHandler(resData.localId,resData.email,resData.idToken,+resData.expiresIn)
        }));
    }

    logIn(email:string,password:string){
        return this.http.post<AuthServiceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrxT1ym6LAw_bB5wRjmmQF3ufXB-lOGoU',{
            email:email,
            password:password,
            returnSecureToken:true  
        }).pipe(catchError(this.errorHandler),tap(resData=>{
            this.userHandler(resData.localId,resData.email,resData.idToken,+resData.expiresIn)
         }))
    }

private errorHandler(errorRes:HttpErrorResponse){
    let errorMessage = "An error Occured";
    if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage)
    }switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
            errorMessage = "This email already exists"
            break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = " This email is not found"
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "This password is invalid"
                break;
            
    }
    return throwError(errorMessage)
}

private userHandler(
    email:string,
    localId:string,
    idToken:string,
    expiresIn:number){
    const expiration = new Date(new Date().getTime() + expiresIn *1000)
    const user = new User(
        email,
        localId,
        idToken,
        expiration
    );
    this.user.next(user);
    this.autoLogOut(expiresIn*1000)
    localStorage.setItem('userData',JSON.stringify(user));
}

}