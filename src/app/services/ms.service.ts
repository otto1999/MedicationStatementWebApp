import { ms } from './../shared/MedicationStatementInterfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MsService {

  constructor(private db: AngularFirestore) { }
  
  // Adat lekérése id szerint
  getById(id: string , col: string){
     return this.db.collection(col, ref => ref.where('id', '==' , id));
  }

  // Adat lekérése a szerverről aszinkron módon....
  get(){
    return this.db.collection('Medications').valueChanges();
  }

  // Adat hozzáadása aszinkron módon...
  async add(collectionName: string, data: ms, id?: string): Promise<string> {
    const dataID = id ? id: this.db.createId();
    data.id = dataID
    await this.db.collection(collectionName).doc(dataID).set(data)
    return dataID
  }

  // Adat frissítése aszinkron módon..
  update(collectionName: string,data: ms){
    console.log(data.id)
    this.db.collection(collectionName).doc(data.id).update(data);
  }

  // Adat törlése..
  delete(collectionName: string,id: string){
    this.db.collection(collectionName).doc(id).delete();
  }
}
