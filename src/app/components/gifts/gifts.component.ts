import { Component, OnInit } from '@angular/core';
import {GiftService} from "../../services/gift.service";

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  gifts: any[] = [];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.getGifts();
  }

  private getGifts(): void {
    this.giftService.findAll().subscribe(gifts => this.gifts = gifts);
  }
}
