import { Component, OnInit } from '@angular/core';
import { Tasks } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tasks: any = [];
  constructor(private taskService: TaskService) { }


  ngOnInit(): void {
    this.taskService.getPolicies().subscribe(data => {
      this.tasks = data.map(e => {
        return {
          id: e.payload.doc.id,
         data: e.payload.doc.data()
        };
      })
    });
  }


  create(policy: any){
    this.taskService.createPolicy(policy);
}

// update(policy: any) {
//   this.taskService.updatePolicy(policy);
// }

delete(id: string) {
  this.taskService.deletePolicy(id);
}

}
