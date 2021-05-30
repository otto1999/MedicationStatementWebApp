import { MsService } from './../../services/ms.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ms-sure',
  templateUrl: './ms-sure.component.html',
  styleUrls: ['./ms-sure.component.css']
})
export class MsSureComponent implements OnInit {

  constructor(
    private s: MsService,
    public dialogRef: MatDialogRef<MsSureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onDelete(){
    console.log(this.data.inputDataId)
    this.s.delete('Medications',this.data.inputDataId)
    this.dialogRef.close(true)
  }
  onClose(){
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
