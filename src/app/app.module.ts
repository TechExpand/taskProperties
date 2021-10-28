import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApproveComponent } from './approve/approve.component';
import { TasklistapproveComponent } from './tasklistapprove/tasklistapprove.component';
import { RouterModule, Routes } from '@angular/router';
import { HomrComponent } from './homr/homr.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComComponent } from './dialog-com/dialog-com.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomrComponent},
  { path: 'approve/:property', component: ApproveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    ApproveComponent,
    TasklistapproveComponent,
    HomrComponent,
    DialogComComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'vmg-html'), // Required for everything
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
