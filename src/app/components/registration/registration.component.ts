import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roleList = [
    {libelle:"Enfant"},
    {libelle:"Père-Noël"},
    {libelle:"Modérateur"},
  ];

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      username: "",
      password: "",
      email: "",
      avatar: "",
      address: "",
      roles: this.formBuilder.array(
        [ this.formBuilder.group({
          libelle: ""
        })])
    })
  }

  ngOnInit(): void {
  }

  get f() { return this.userForm.controls; }

  onSubmit(): void {
    this.authService.register(this.userForm.value)
      .subscribe(
        (data) => {
          this.isSuccessful = true;
          this.router.navigate(['/login']);
        },
        err => {
          this.isSuccessful = false;
          this.errorMessage = err.errorMessage;
        }
      )
  }
}

