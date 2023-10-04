import { Component, OnInit, inject } from '@angular/core';
import { Firestore, doc, getDoc, onSnapshot } from '@angular/fire/firestore';
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
  user: User = new User();

  constructor(private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async (paramMap) => {
      this.userId = paramMap.get('id');
      console.log('Current User Id', this.userId);
      await this.getUser();
    });

  }

  async getUser() {
    const unsub = onSnapshot(doc(this.firestore,'users',this.userId),(doc) => {
      console.log('Daten sind' ,doc.data()) ;
      this.user = new User(doc.data());
    });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()) ; //erstellt Kopie von User und übergibt eine Kopie des nutzers als Objekt
    dialog.componentInstance.userId = this.userId ;
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()) ; 
    dialog.componentInstance.userId = this.userId ;
  }

}
