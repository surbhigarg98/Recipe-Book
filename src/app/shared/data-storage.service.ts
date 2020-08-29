import{Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { from } from 'rxjs';
import {map, tap, take, exhaustMap} from 'rxjs/operators'
import {RecipeService} from '../recepies/recipe.service';
import {Recepie} from '../recepies/recepie.model'; 
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.mode';
@Injectable({providedIn:'root'})
export class DataStorageService{
  constructor(private http:HttpClient,private recipeService:RecipeService, private authService:AuthService){}

storeRecipes(){
 const recipes = this.recipeService.getRecepie();
 this.http.put('https://ng-project-recipe-212da.firebaseio.com/recipes.json',recipes).subscribe(response=>{
     console.log(response);
 })
}
fetchRecipe(){
 
 return this.http.get<Recepie[]>('https://ng-project-recipe-212da.firebaseio.com/recipes.json').pipe(map(recipes=>{
    return recipes.map(recipes => {
        return{...recipes,ingredients:recipes.ingredients?recipes.ingredients:[]};
    });
}),
tap(recipes=>{
    this.recipeService.setRecipe(recipes);
}));
 
    
    
    
}
}