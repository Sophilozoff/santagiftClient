import {Timestamp} from "rxjs";

export class Gift {

  name: string;
  url: string;
  child: string;
  santa: string;
  isBooked: boolean;
  createdAt!: Timestamp<any>;

  constructor(name: string, url: string, child: string, santa: string, isBooked: boolean, createdAt: Timestamp<any>) {
    this.name = name;
    this.url = url;
    this.child = child;
    this.santa = santa;
    this.isBooked = isBooked;
    this.createdAt = createdAt;
  }
}
