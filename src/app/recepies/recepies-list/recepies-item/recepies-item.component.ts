import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recepie, } from 'src/app/recepies/recepie.model';
import {Input} from '@angular/core';
import { from } from 'rxjs';
import { RecipeService } from 'src/app/recepies/recipe.service';
@Component({
  selector: 'app-recepies-item',
  templateUrl: './recepies-item.component.html',
  styleUrls: ['./recepies-item.component.css']
})
export class RecepiesItemComponent implements OnInit {
  
  @Input() recepie:Recepie; 
  @Input() index:number;
  

  ngOnInit(): void {
  }
 
}
