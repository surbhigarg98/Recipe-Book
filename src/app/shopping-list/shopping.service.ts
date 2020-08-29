import {Ingredient} from '../shared/ingredient.model';
import { from, Subject } from 'rxjs'
import { EventEmitter } from '@angular/core';
export class ShoppingService{
  ingredientAdded = new Subject <Ingredient[]>();
  editingItems = new Subject<number>();
  private  ingredients:Ingredient[]=[
        new Ingredient('Apple',87),
        new Ingredient('Red Chilli',90),
        new Ingredient('Turmeri',47),
        new Ingredient('Oats',190),
      ]
getIngredient(){
    return this.ingredients.slice();
}
getIngred(index:number){
    return this.ingredients[index]
}
addingIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientAdded.next(this.ingredients.slice())
}
    addIngredent(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }
updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice())
}
deleteItems(index:number){
 this.ingredients.splice(index,1);
 this.ingredientAdded.next(this.ingredients.slice())
}

}