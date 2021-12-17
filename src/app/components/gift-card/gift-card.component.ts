import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GiftService} from "../../services/gift.service";
import {Gift} from "../../models/gift";
import {User} from "../../models/user";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  private roles!: string[];
  isShowToSanta = false;
  isHidden: boolean = false;

  @Input() gift!: Gift;
  id: number;

  constructor(private route: ActivatedRoute, private tokenStorage: TokenStorageService, private giftService: GiftService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getGift();
    const currentUser = this.tokenStorage.getUser();
    this.roles = currentUser.roles;
    this.isShowToSanta = this.roles.includes('ROLE_SANTA');
    console.log(this.gift)
  }

  getGift(): void{
    this.giftService.findById(this.id).subscribe(data =>
      this.gift = data);
  }

  bookAGift(gift: Gift): void {
    this.gift.isBooked = true;
    this.isHidden = true;
    this.gift.santa = this.tokenStorage.getUser();
    this.giftService.bookAGift(gift);
  }

  cancelTheBooking(): void {
    this.gift.isBooked = false;
    this.isHidden = false;
  }



}
