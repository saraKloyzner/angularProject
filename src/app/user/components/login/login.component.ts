import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { FormControl, FormGroup, Validators, Form, ReactiveFormsModule, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
[x: string]: any;
  public addForm!: FormGroup;
  matcher = new MyErrorStateMatcher();
  nameError!: any;
  isCorrectPassword=true;

  constructor(private router:Router, private _userService: UserService, private fb: FormBuilder) { }
  ngOnInit(): void {
  
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

async save() {
  const name = this.addForm.value.name;
  const password = this.addForm.value.password;



  try {
    const user = await this._userService.getUserByName(name).toPromise();
    if (user && user.password === password) {
      //this.router.navigate(['login/all-recipes']);
       this.router.navigate(['/recipe']);
       sessionStorage.setItem(user.userId.toString(), user.userName);

      const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      toast.fire({
        icon: 'success',
        title: 'Successfully connection!',
      });
    } else {
      this.addForm.value.password='' // Reset the password field
      const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      toast.fire({
        icon: 'error',
        title: 'The password is wrong! try again!',
      });
    }
  } catch (err) {
    console.error(err);
    this.router.navigate(['/register']);
    Swal.fire("Go ahead and register!");
  }
}


}










