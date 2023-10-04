import { Component,inject } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user: User ;
  loading = false ;
  userId:string;
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  async saveUser() {
    const updateRef = doc(this.firestore, 'users', this.userId);
    this.loading = true ;
    await updateDoc(updateRef, {
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city,
    }).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
