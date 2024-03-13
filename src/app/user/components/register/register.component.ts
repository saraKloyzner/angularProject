
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../user';

// import { FormControl, FormGroup, Validators, Form, ReactiveFormsModule, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule
    , ReactiveFormsModule,
    CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  userExists = false;
  registeruser!: User;
  private timerInterval: any;
  private timer: any;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  



  register() {
    this._userService.addUser(this.registerForm.value).subscribe({
      next: (res) => {
        this.registeruser = res;
        console.log(this.registeruser)
        sessionStorage.setItem(this.registeruser.userId.toString(), this.registeruser.userName);
        Swal.fire({
          title: 'הרשמה הסתיימה בהצלחה!',
          html: 'מעביר אותך להצגת המתכונים...',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading(null);
            this.timer = Swal
            this.timerInterval = setInterval(() => {
              this.timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(this.timerInterval);
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
        });
        this.router.navigate(["recipe"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}

// async register() {
//   if (this.registerForm.invalid) {
//     return;
//   }

//   const user = this.registerForm.value as User;

//   try {
//     const existingUser = await this.userService.getUserByName(user.name).toPromise();
//     if (existingUser) {
//       this.userExists = true;
//       return;
//     }

//     const newUser=await this.userService.addUser(user).toPromise();
//      console.log("new user------------",newUser)
//     this.router.navigate(['/all-recipes']);
//     Swal.fire({
//       icon: 'success',
//       title: 'Registration successful!'
//     });
//   } catch (err) {
//     console.log("------------------------------------------------")
//     console.error(err);
//     Swal.fire({
//       icon: 'error',
//       title: 'Registration failed!'
//     });
//   }
// }
