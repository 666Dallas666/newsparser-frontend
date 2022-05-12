import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component'
import {MainpageComponent} from 'src/app/components/mainpage/mainpage.component';
const routes: Routes = [
  {path: "b", component: AppComponent},
  {path: "a", component: HeaderComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() { };
  ngOnInit(): void {

  
  }

}
