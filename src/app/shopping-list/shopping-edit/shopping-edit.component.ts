import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';

import { from, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscript:Subscription;
  editMode = false;
  editIndex:number;
  editItem:Ingredient;

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.subscript=this.shoppingService.editingItems.subscribe((index:number)=>{
        this.editMode = true;
        this.editIndex = index;
        this.editItem = this.shoppingService.getIngred(index)
        this.slForm.setValue({
          'name':this.editItem.name,
          'amount':this.editItem.amount
        })
    })

  
  }
  onSubmit(form:NgForm){
  const value = form.value;
  const ingredient = new Ingredient(value.name,value.amount);
  if(this.editMode){
    this.shoppingService.updateIngredient(this.editIndex,ingredient)
  }else{
  this.shoppingService.addingIngredient(ingredient);
}
this.editMode=false;
form.reset()
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
}
onDelete(){
  this.shoppingService.deleteItems(this.editIndex);
  this.onClear()
}
ngOnDestroy(){
  this.subscript.unsubscribe();
}

}
