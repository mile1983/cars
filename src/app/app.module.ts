import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  {
    path:'',
    redirectTo: '/cars',
    pathMatch:'full'
  },
  {
    path:'cars',
    component: CarsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
