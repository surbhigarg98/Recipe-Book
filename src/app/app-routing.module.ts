import {NgModule} from '@angular/core';
import{Routes, RouterModule, PreloadAllModules} from '@angular/router';


import { from } from 'rxjs';
import { ErrorPageComponent } from './error-page/error-page.component';




const appRoutes:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
{path:'recipes',
 loadChildren:()=> import('./recepies/recipe.module').then(m=>m.RecipeModule)},
{path:'shopping-list',
loadChildren:()=>import('./shopping-list/shopping.module').then(n=>n.ShoppingModule)},
{path:'auth',
loadChildren:()=>import('./auth/auth.module').then(z=>z.AuthModule)},

{path:'not-found',component:ErrorPageComponent,data:{message:'Page is not found.'}},
{path:'**',redirectTo:'not-found'}
]

@NgModule({
 imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
 exports:[RouterModule]
})
export class AppRoutingModule{

}