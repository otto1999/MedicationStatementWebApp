import { environment } from './../environments/environment';

// Modulok
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'


// Komponensek
import { AppComponent } from './app.component';
import { MsListItemComponent } from './components/ms-list-item/ms-list-item.component';
import { MsToolbarComponent } from './components/ms-toolbar/ms-toolbar.component';
import { MsAddComponent } from './components/ms-add/ms-add.component';
import { MsDetailsComponent } from './components/ms-details/ms-details.component';
import { MsUpdateComponent } from './components/ms-update/ms-update.component';
import { MsChoiceComponent } from './components/ms-choice/ms-choice.component';
import { MsSureComponent } from './components/ms-sure/ms-sure.component';


@NgModule({
  declarations: [
    AppComponent,
    MsListItemComponent,
    MsToolbarComponent,
    MsAddComponent,
    MsDetailsComponent,
    MsUpdateComponent,
    MsChoiceComponent,
    MsSureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
