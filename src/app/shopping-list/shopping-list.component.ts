import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import{ShoppingService} from './shopping.service';

import { from, Subscription } from 'rxjs';
import { RecipeService } from '../recepies/recipe.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
 
  ingredients:Ingredient[];
  private getSub:Subscription
  constructor(private shoppingService:ShoppingService, private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingService.getIngredient();
   this.getSub= this.shoppingService.ingredientAdded.subscribe((ingredients:Ingredient[])=>{
       this.ingredients=ingredients;
   
       
    });
    
  }
  onEditItems(index:number){
    this.shoppingService.editingItems.next(index);
  }
  ngOnDestroy(){
  this.getSub.unsubscribe();
  }
  
}
