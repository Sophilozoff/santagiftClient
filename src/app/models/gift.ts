import {Timestamp} from "rxjs";
import {User} from "./user";

export class Gift {

  name: string;
  url: string;
  child: User;
  santa: User;
  isBooked: boolean;
  createdAt!: Timestamp<any>;

  constructor(name: string, url: string, child: User, santa: User, isBooked: boolean, createdAt: Timestamp<any>) {
    this.name = name;
    this.url = url;
    this.child = child;
    this.santa = santa;
    this.isBooked = isBooked;
    this.createdAt = createdAt;
  }
}
