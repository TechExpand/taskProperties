import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistapproveComponent } from './tasklistapprove.component';

describe('TasklistapproveComponent', () => {
  let component: TasklistapproveComponent;
  let fixture: ComponentFixture<TasklistapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistapproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
