import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './recepies/recipe.service';
import{AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

import{AuthInterceptorService} from './auth/auth-interceptor.service';

import{SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
   
    

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ShoppingService,RecipeService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
