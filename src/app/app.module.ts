import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsComponent } from './cars/cars.component';
import { BusComponent } from './bus/bus.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CarsComponent,
    BusComponent,
    HeroesComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  
    RouterModule.forRoot([
      {path:'cars',component:CarsComponent},
      {path:'products',component:ProductsComponent},
      {path:'home',component:AppComponent},
  ]),
],
  providers: [],
   bootstrap: [AppComponent]
  //  bootstrap: [ProductsComponent,CarsComponent]
  // bootstrap: [CarsComponent]
})
export class AppModule { }
