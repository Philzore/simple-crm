import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date;
  loading = false ;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime() ;
    console.log('Current user is', this.user) ;
    this.loading = true ;
    const setUser = this.user.toJSON();

    await addDoc(collection(this.firestore,'users'),{
      setUser ,
    }).then((result) => {
      console.log('Adding user finished', result) ;
      this.loading = false ;
      this.dialogRef.close();
    }) ;
  }
}
