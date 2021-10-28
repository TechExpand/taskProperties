import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TaskService } from '../task.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComComponent } from '../dialog-com/dialog-com.component';

@Component({
  selector: 'app-homr',
  templateUrl: './homr.component.html',
  styleUrls: ['./homr.component.scss']
})
export class HomrComponent implements OnInit {


 ngOnInit(): void {
    
  }
  constructor(public dialog: MatDialog) { }
 


  openDialog() {
    const dialogRef = this.dialog.open(DialogComComponent, {
      height: '400px',
      width: '600px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}
