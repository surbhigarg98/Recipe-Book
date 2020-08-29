import {Recepie} from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recepie>();
    recipeChanged = new EventEmitter<Recepie[]>();
 // private recepie:Recepie[] = [
   //     new Recepie('A Test Name',
     //   'This description is to simply test',
       // 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
     // [  new Ingredient('mango',20),
       //   new Ingredient('orange',100)
      //]),
        //new Recepie('A sample Name','This description is to simply test','https://p0.pikist.com/photos/751/226/fast-food-pizza-chili-menu-food-pizzeria-restaurant-recipe-cafe.jpg',
        //[
          //  new Ingredient('papaya',20),
            //new Ingredient('Salt',100)  
        //])
      //];
      private recepie:Recepie[] = [];
      constructor(private shoppingService:ShoppingService){}
      
      getRecepie(){
          return this.recepie.slice()
      }
      getSingleRecipe(index:number){
          return this.recepie[index];
      }
      setRecipe(recipes:Recepie[]){
          this.recepie = recipes;
          this.recipeChanged.emit(this.recepie.slice())
      }

      onIngredientToShoppinglist(ingredients:Ingredient[]){
          this.shoppingService.addIngredent(ingredients);
      }

      addNewRecipe(recipe:Recepie){
          this.recepie.push(recipe);
          this.recipeChanged.emit(this.recepie.slice())
      }
      updateRecipe(index:number,newRecipe:Recepie){
          this.recepie[index]=newRecipe;
          this.recipeChanged.emit(this.recepie.slice())
      }
      deleteRecipe(index:number){
          this.recepie.splice(index,1)
          this.recipeChanged.emit(this.recepie.slice())
      }
};