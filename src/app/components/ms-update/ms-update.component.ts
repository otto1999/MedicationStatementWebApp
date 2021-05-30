import { Validators } from '@angular/forms';
import { MsService } from './../../services/ms.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ms-update',
  templateUrl: './ms-update.component.html',
  styleUrls: ['./ms-update.component.css']
})
export class MsUpdateComponent implements OnInit {

  constructor(
    public sn: MatSnackBar,
    public s: MsService,
    public dialogRef: MatDialogRef<MsUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  valami = new FormGroup({
    ez: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }


  onClick(){
    this.dialogRef.close(this.valami.value.ez)
    if(this.data.isAdd){
      this.sn.open("Sikeresen hozzáadva", "", { duration: 1000 })
    } else{
      this.sn.open("Sikeresen frissítve", "", { duration: 1000 })
    }
  }

}
