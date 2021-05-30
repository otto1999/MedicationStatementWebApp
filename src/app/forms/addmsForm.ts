import { FormGroup, FormControl ,FormArray, Validators} from "@angular/forms";

export function addMedicationStatementForm(): FormGroup {
    return new FormGroup({
        basedOn: new FormControl(''),
        partOf: new FormControl(''),
        status: new FormControl('',[
            Validators.required,
            Validators.pattern('')
        ]),
        statusReason: new FormControl(''),
        category: new FormControl(''),
        medication: new FormControl('',[
            Validators.required,
            Validators.pattern('')
        ]),
        subject: new FormControl('',[
            Validators.required,
            Validators.pattern('')
        ]),
        dateAsserted: new FormControl(''),
        effective: new FormGroup({
            beginTime: new FormControl(''),
            endTime: new FormControl('')
        }),
        reasonCode: new FormControl(''),
        reasonReferenc: new FormControl(''),
        informationSource: new FormControl(''),
        note: new FormControl('')
    });
}