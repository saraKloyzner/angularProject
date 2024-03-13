import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';

// @NgModule({
//   declarations: [AllRecipesComponent],
//   imports: [
//     CommonModule,UserRoutingModule,LoginComponent
//   ]
// })
// export class UserModule { }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,UserRoutingModule,LoginComponent
  ]
})
export class UserModule { }
