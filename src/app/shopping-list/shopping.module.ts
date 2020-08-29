import {NgModule} from '@angular/core';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        ShoppingListComponent,
    ShoppingEditComponent,
    ],
    imports:[
    
     FormsModule,
     RouterModule.forChild([
        {path:'',component:ShoppingListComponent},  
     ]),
     SharedModule

    ]

})
export class ShoppingModule{}