import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from '../app/components/notas/notas.component';
import { HomeComponent } from '../app/components/home/home.component';

const routes: Routes = [
  {path:'notas',component:NotasComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
