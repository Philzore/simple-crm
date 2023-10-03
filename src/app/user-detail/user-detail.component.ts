import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userId = '';
  user: User = new User;

  constructor(private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async (paramMap) => {
      this.userId = paramMap.get('id');
      console.log('Current User Id', this.userId);
      await this.getUser();
    });

  }

  async getUser() {
    const docRef = doc(this.firestore, "users", this.userId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    this.user = new User(docSnap.data());
  }

  editUserDetail() {
    this.dialog.open(DialogEditUserComponent);
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user ;
  }

}
