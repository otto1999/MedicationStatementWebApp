import { FormGroup } from '@angular/forms';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ms } from './../../shared/MedicationStatementInterfaces';
import { MsService } from './../../services/ms.service';

import { addMedicationStatementForm } from 'src/app/forms/addmsForm';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ms-add',
  templateUrl: './ms-add.component.html',
  styleUrls: ['./ms-add.component.css']
})
export class MsAddComponent implements OnInit {

  constructor(
    private sn: MatSnackBar,
    private s: MsService
  ) { }

  addForm!: FormGroup;

  matcher = new MyErrorStateMatcher();

  // MedicatioStatement objektum
  medState: ms = {
    basedOn: [],
    partOf: [],
    status: "",
    statusReason: [],
    medication: "",
    subject: "",
    effective!: {
      beginTime: new Date(),
      endTime: new Date()
    },
    reasonCode: [],
    reasonReferenc: [],
    note: [],

  }

  // A fomrból kapott adatokat belepakolja egy tömbbe!
  putIn(array: string[],data: string){
    array.push(data)
    console.log(array)
  }

  addMS(){
    this.medState.basedOn?.push(this.addForm.value.basedOn);
    this.medState.partOf?.push(this.addForm.value.partOf);
    this.medState.status = this.addForm.value.status;
    this.medState.statusReason?.push(this.addForm.value.statusReason);
    this.medState.category = this.addForm.value.category;
    this.medState.medication = this.addForm.value.medication;
    this.medState.subject = this.addForm.value.subject;
    this.medState.effective!.beginTime = this.addForm.value.effective.beginTime;
    this.medState.effective!.endTime = this.addForm.value.effective.endTime;
    this.medState.reasonCode!.push(this.addForm.value.reasonCode);
    this.medState.reasonReferenc!.push(this.addForm.value.reasonReferenc);
    this.medState.informationSource! = this.addForm.value.informationSource;
    this.medState.note!.push(this.addForm.value.note);
    
  
    console.log(this.medState)

    this.s.add('Medications',this.medState)

    this.sn.open("Sikeresen feltöltve", "", { duration: 1000 })

  }

  ngOnInit(): void {
     // FormGroup
    this.addForm = addMedicationStatementForm();
  }

  ngOnDestroy(): void {

  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
