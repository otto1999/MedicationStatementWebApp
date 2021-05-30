import { MsChoiceComponent } from './../ms-choice/ms-choice.component';
import { Component, ViewChild, OnInit, EventEmitter } from '@angular/core';
import { ms } from './../../shared/MedicationStatementInterfaces';
import { MsService } from './../../services/ms.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-ms-list-item',
  templateUrl: './ms-list-item.component.html',
  styleUrls: ['./ms-list-item.component.css']
})
export class MsListItemComponent implements OnInit {

  constructor(
    private s: MsService,
    private d: MatDialog,
    
  ) { }


  docs = new MatTableDataSource<any>();

  medState: ms = {
      status: "",
      medication: "",
      subject: "",
  }


  displayedColumns: string[] = ['medication','subject','status']

  ngOnInit(): void {
    this.s.get().subscribe(data => {
      this.docs = new MatTableDataSource(data);
    })
  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.docs.filter = filterValue.trim().toLowerCase();

    if (this.docs.paginator) {
      this.docs.paginator.firstPage();
    }
  }
  
  onClick(id: string){
    const dialogRef = this.d.open(MsChoiceComponent, {
      width:'fit-content',
      height: 'fit-content',
      data:{ id: id , fromList: true }
    });
  }

}



