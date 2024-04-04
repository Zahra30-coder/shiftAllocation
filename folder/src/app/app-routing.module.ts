import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AddComponent } from './features/add/add.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { EditComponent } from './features/edit/edit.component';
import { DeletedShiftsComponent } from './deleted-shifts/deleted-shifts.component';

const routes: Routes = [
  {
    path:'',
    component:BlogComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    
    path:'edit/:Id',
    component: EditComponent
  },
  {
    
    path:'cancel/:Id',
    component: DeletedShiftsComponent
  },

  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
