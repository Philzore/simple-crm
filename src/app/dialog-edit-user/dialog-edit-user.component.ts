import { Component,inject } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user: User ;
  loading = false ;
  birthDate: Date;
  userId:string;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {

  }

  async saveUser() {
    const updateRef = doc(this.firestore, 'users', this.userId);
    this.loading = true ;
    await updateDoc(updateRef, {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      birthDate: this.user.birthDate
    }).then(() => {
      this.loading = false ;
      this.dialogRef.close();
    });
  } 
}
