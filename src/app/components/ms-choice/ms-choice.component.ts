
import { MsSureComponent } from './../ms-sure/ms-sure.component';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA , MatDialog } from '@angular/material/dialog';
import { MsUpdateComponent } from '../ms-update/ms-update.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ms-choice',
  templateUrl: './ms-choice.component.html',
  styleUrls: ['./ms-choice.component.css']
})
export class MsChoiceComponent implements OnInit {

  constructor(
    private s: MatSnackBar,
    private d: MatDialog,
    public dialogRef: MatDialogRef<MsChoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  // Megnyitja az Update Dialogot
  onAdd(isAdd: boolean){
    const dialogRef = this.d.open(MsUpdateComponent, {
      width: 'fit-content',
      height: 'fit-content',
      data:{ inputData: this.data.inputData , inputDataType: this.data.inputDataType , isAdd: isAdd }
    });
    
    dialogRef.afterClosed().subscribe(result =>{
      // Ha hozzá akarunk adni
      if(result && isAdd){
        this.dialogRef.close([result,true])
      }
      // Ha teljesen új üres tömböt szeretnénk
      else if(result && !isAdd){
        this.dialogRef.close([result,false])
      }else{
        this.dialogRef.close()
      }
    })
  }

  // Törlés esetén Megynit egy dialogot , ami rákérdez a törlésre
  onSure(){
    const dialogRef = this.d.open(MsSureComponent, {
      width: 'fit-content',
      height: 'fit-content',
      data:{ inputDataId: this.data.id }
    });
    dialogRef.afterClosed().subscribe( ref => {
      this.s.open("Sikeresen tötrölve", "", { duration: 1000 })
      this.dialogRef.close()
    })
    
  }

  onRoute(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
