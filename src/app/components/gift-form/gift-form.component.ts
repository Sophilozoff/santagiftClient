import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {GiftService} from "../../services/gift.service";
import {User} from "../../models/user";
import {TokenStorageService} from "../../services/token-storage.service";
import {Gift} from "../../models/gift";

@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.css']
})
export class GiftFormComponent implements OnInit {
  giftForm!: FormGroup;
  isSuccessful = false;
  errorMessage = '';
  currentUser!: User;

  constructor(private giftService: GiftService,  private tokenStorage: TokenStorageService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.initCurrentUser();
    this.giftForm = this.formBuilder.group({
      name: '',
      url: '',
      child: this.formBuilder.group({
        id: this.currentUser.id
      })
    })
  }

  get f() { return this.giftForm.controls; }

  initCurrentUser(){
    this.currentUser = this.tokenStorage.getUser();
    console.log(this.currentUser);
  }

  onSubmit(): void {
    this.giftService.addGift(this.giftForm.value)
      .subscribe(
        (data) => {
          this.isSuccessful = true;
          this.router.navigate(['/allgifts']);
        },
        err => {
          this.isSuccessful = false;
          this.errorMessage = err.errorMessage;
        }
      )
  }

}
