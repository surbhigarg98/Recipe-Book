import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {RecepiesComponent} from './recepies.component';
import {SelectRecipeComponent} from './select-recipe/select-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecepiesDetailComponent} from './recepies-detail/recepies-detail.component';
import {RecipeResolverService} from './recipes-resolver.service';
import {AuthGuard} from '../auth/auth-guard.service';
import { from } from 'rxjs';

const routes:Routes=[
    {path:'',component:RecepiesComponent,canActivate:[AuthGuard],children:[
        {path:'',component:SelectRecipeComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecepiesDetailComponent,resolve:[RecipeResolverService]},
        {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolverService]}
        
    ]},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class RecipeRoutingModule{}