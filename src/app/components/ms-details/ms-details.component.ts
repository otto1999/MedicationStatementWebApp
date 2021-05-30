import { MsChoiceComponent } from './../ms-choice/ms-choice.component';
import { ms } from './../../shared/MedicationStatementInterfaces';
import { MsService } from './../../services/ms.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-ms-details',
  templateUrl: './ms-details.component.html',
  styleUrls: ['./ms-details.component.css']
})
export class MsDetailsComponent implements OnInit {

  constructor(
    private s: MsService,
    private r: ActivatedRoute,
    private d: MatDialog
  ) { }

  currentMs: ms = {
    basedOn: new Array<string>(),
    partOf: new Array<string>(),
    subject: '',
    status: '',
    statusReason: new Array<string>(),
    category: '',
    medication: '',
    effective: {
      beginTime: new Date(), 
      endTime: new Date()
    },
    reasonCode: new Array<string>(),
    reasonReferenc: new Array<string>(),
    informationSource:'',
    note: new Array<string>()
    
  }

  randomArray: any[] = []

  ngOnInit(): void {
    //A Routból kapott ID segítségével lekérjük az adatB - ből az adatokat
    this.s.getById(this.getMsId(),'Medications').get().subscribe( s => {
      s.docs.forEach((doc) =>{
        this.currentMs = doc.data() as ms;
      })
    })
  }

  ngOnDestroy(): void {
    
  }

  // Kinyeri a routból az ID -t
  getMsId(): string{
    const dataID = String(this.r.snapshot.paramMap.get('id'))
    return dataID
  }

  // Kattintásra megnyitunk egy dialógat , ami adott esetben választási lehetőséget kínál fel
  openMatDialog(data: any, dataType: string){
    const dialogRef = this.d.open(MsChoiceComponent, {
      width: 'fit-content',
      height: 'fit-content',
      data:{ inputData: data  , isArray:(data instanceof Array), inputDataType: dataType}
    });
    dialogRef.afterClosed().subscribe( result =>{
      const somKey = dataType as keyof ms;
        // Ha az adattag amihez hozzáadtunk tömb
        if(data instanceof Array && result){
          
          // Ha hozzá akarunk adni
          if(result[1]){
            this.randomArray = this.currentMs[somKey] as any[]
            this.randomArray.push(result[0])
          // Ha teljesen új tömböt akarunk készíteni
          } else if(!result[1]){
            this.randomArray = this.currentMs[somKey] as any[]
            this.randomArray.length = 0;
            this.randomArray.push(result[0])
          }
        // Ha nem tömbről van szó
        }else if (result){
          this.currentMs[somKey] = result[0]
        }
      this.s.update('Medications',this.currentMs)
    })
  }
  

}
