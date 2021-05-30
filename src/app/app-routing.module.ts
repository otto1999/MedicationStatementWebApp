import { MsDetailsComponent } from './components/ms-details/ms-details.component';
import { MsListItemComponent } from './components/ms-list-item/ms-list-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsAddComponent } from './components/ms-add/ms-add.component';

const routes: Routes = [
  { path: 'list', component: MsListItemComponent },
  { path: 'add', component: MsAddComponent },
  { path: 'detail/:id' , component: MsDetailsComponent },
  { path: '', redirectTo:'/list' , pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
