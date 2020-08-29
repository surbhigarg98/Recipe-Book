import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model' ;

import { from } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css'],
  
})
export class RecepiesDetailComponent implements OnInit {
 recpie:Recepie;
 id:number;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recpie=this.recipeService.getSingleRecipe(this.id);
    });
  }

  onAddToList(){
    this.recipeService.onIngredientToShoppinglist(this.recpie.ingredients);
  }
  onEdit(){
  this.router.navigate(['edit'],{relativeTo:this.route})
  //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})  
}
onDelete(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipes'],{relativeTo:this.route})
}
}
