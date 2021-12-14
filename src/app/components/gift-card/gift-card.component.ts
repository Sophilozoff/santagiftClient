import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GiftService} from "../../services/gift.service";

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  gift: any;
  id: number;

  constructor(private route: ActivatedRoute, private giftService: GiftService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getGift();
  }

  getGift(): void{
    this.giftService.findById(this.id).subscribe(data =>
      this.gift = data);
  }

  goUrl(): void {
    
  }

}
