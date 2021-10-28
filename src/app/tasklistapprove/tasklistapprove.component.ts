import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasklistapprove',
  templateUrl: './tasklistapprove.component.html',
  styleUrls: ['./tasklistapprove.component.scss']
})
export class TasklistapproveComponent implements OnInit {
  property: string;
  tasks: any = [];
  constructor(private taskService: TaskService, private actRoute: ActivatedRoute) {
    this.property = this.actRoute.snapshot.params.property;
   }


  
  


  ngOnInit(): void {
    this.taskService.getPoliciesFilter(this.property).subscribe(data => {
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

update(policy: any, id: any) {
  this.taskService.updatePolicy(policy, id);
}

delete(id: string) {
  this.taskService.deletePolicy(id);
}

}
