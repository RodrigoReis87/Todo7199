import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public user: any = {
    name: "",
    picture: "",
  }

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((data) => {
      this.user.name = data?.displayName;
      this.user.picture = data?.photoURL;
    });
  }

  logout() {
    this.afAuth.signOut();
  }

}
