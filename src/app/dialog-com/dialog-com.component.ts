import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-dialog-com',
  templateUrl: './dialog-com.component.html',
  styleUrls: ['./dialog-com.component.scss']
})
export class DialogComComponent implements OnInit {

  City: any = ['Bear House', 'Turtle House', 'Road Runner', 'Rancho Del Sol', 'Casa Alegre', 'Bella Vista']


  ngOnInit(): void {
  }

  constructor(private taskService: TaskService , private http: HttpClient, public dialog: MatDialog) { }
  form = new FormGroup({
    price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    property: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });


  get f(){
    return this.form.controls;
  }

  create(policy: any){
    this.taskService.createPolicy(policy);
}


successNotification(){
  Swal.fire('GOOD', 'Form submited successfully!', 'success')
}

email: any = 'bigtee@gmail.com'

sendMail(){
  const miliseconds = String(this.form.value.date);
  const date = new Date(miliseconds).toLocaleString("en", { month: "long"  })+ ' ' + new Date(miliseconds).toLocaleString("en", {day: "numeric"  }) + ', '+  new Date(miliseconds).toLocaleString("en", { year: "numeric"  });

  this.taskService.sendGetRequest(
    this.email,
    `GOOD DAY SIR/MA'AM: YOU HAVE THE FOLLOWING REQUESTS OF    
    PROPERTY: ${this.form.value.property}, \n JOB TITLE: ${this.form.value.title}, \n JOB DESCRIPTION: ${this.form.value.description}, \n JOB PRICE: $${this.form.value.price}, \n JOB DATE: ${date}`,
    `${this.form.value.property}`
  ).subscribe((data: any)=>{
    console.log(data);
  })  
}

  
  submit(){  
   if(this.form.invalid){
    return;
   }else{
    const miliseconds = String(this.form.value.date);
    const date = new Date(miliseconds).toLocaleString("en", { month: "long"  })+ ' ' + new Date(miliseconds).toLocaleString("en", {day: "numeric"  }) + ', '+  new Date(miliseconds).toLocaleString("en", { year: "numeric"  });
      this.create({
      property: this.form.value.property,
      title: this.form.value.title,
      desc: this.form.value.description,
      price: this.form.value.price,
      date: date,
      mode: 'false',
    });

    this.sendMail()
    this.successNotification()
    this.form.reset()

    return true;
   }

 
    
    
  }
}
