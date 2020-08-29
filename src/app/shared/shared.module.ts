import {NgModule} from '@angular/core';
import {LoadingSpinnerComponent} from './loading-spinners/loading-spinner.component';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';

@NgModule({
 declarations:[
    LoadingSpinnerComponent,
    AlertComponent
 ],
 imports:[
     CommonModule
 ],
 exports:[
    LoadingSpinnerComponent,
    AlertComponent,
    CommonModule
 ]

})

export class SharedModule{}