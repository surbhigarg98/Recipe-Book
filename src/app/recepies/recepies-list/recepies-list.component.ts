import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecipeService } from '../recipe.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  
  recepie:Recepie[];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  
   this.recipeService.recipeChanged.subscribe((recepie:Recepie[])=>{
     this.recepie= recepie;
     
   });
   this.recepie = this.recipeService.getRecepie();
  }
  onNewEdit(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
