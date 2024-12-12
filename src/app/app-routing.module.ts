import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'form',
    pathMatch:'full'
  },
  {
    path:'form',
    component:FormComponent,
  },
  {
    path:'response',
    component:ResponseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
