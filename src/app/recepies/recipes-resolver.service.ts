import{Injectable} from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Recepie} from './recepie.model';
import {DataStorageService} from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recepie[]>{

    constructor(private dataService:DataStorageService,private recipeService:RecipeService){}

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const recipes = this.recipeService.getRecepie();
    if(recipes.length === 0){
        return this.dataService.fetchRecipe();
    }else{
        return recipes;
    }
        
    }

}