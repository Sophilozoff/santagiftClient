export class User {

  id: number;
  username: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  role: string;


  constructor(id: number, username: string, email: string, password: string, avatar: string, address: string, role: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.address = address;
    this.role = role;
  }
}
