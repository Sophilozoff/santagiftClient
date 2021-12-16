export class User {

  username: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  role: string;

  constructor(username: string, email: string, password: string, avatar: string, address: string, role: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.address = address;
    this.role = role;
  }
}
