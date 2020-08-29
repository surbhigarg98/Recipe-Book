import {NgModule} from '@angular/core';
import {RecepiesComponent} from './recepies.component';
import {RecepiesDetailComponent} from './recepies-detail/recepies-detail.component';
import {RecepiesListComponent} from './recepies-list/recepies-list.component';
import {RecepiesItemComponent} from './recepies-list/recepies-item/recepies-item.component';
import {SelectRecipeComponent} from './select-recipe/select-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {RecipeRoutingModule} from './recipe-routingg.module'
@NgModule({
   declarations:[
    RecepiesComponent,
    RecepiesDetailComponent,
    RecepiesListComponent,
    RecepiesItemComponent,
    
    SelectRecipeComponent,
    RecipeEditComponent,
   ],
   imports:[
       RouterModule,
       ReactiveFormsModule,
       SharedModule,
       RecipeRoutingModule


   ]
})
export class RecipeModule{}