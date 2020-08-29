import { Component, OnInit, OnDestroy,  } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service'
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  isAuthenticated =  false;
  
  
 constructor(private dataService:DataStorageService,private authService:AuthService){

 }
 ngOnInit(){
  this.authService.user.subscribe(user=>{
   this.isAuthenticated = !user ? false : true;
   })
 }
 onSaveData(){
   this.dataService.storeRecipes()
 }
 onFetchData(){
  this.dataService.fetchRecipe().subscribe();
 }
 onLogOut(){
   this.authService.logOut();
 }
 
}
