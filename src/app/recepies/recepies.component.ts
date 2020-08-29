import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import {RecipeService} from './recipe.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  
})
export class RecepiesComponent implements OnInit {
 
  

  ngOnInit(): void {
    
    }
  }


