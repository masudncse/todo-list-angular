import {Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'App: Todo List - by Angular';

  tasks: any[] = [{
    name: 'Client meeting',
    status: false
  }, {
    name: 'Plan webinar',
    status: false
  }, {
    name: 'Email newsletter',
    status: false
  }];
  task = {
    name: '',
    status: false
  };
  taskCount: number = this.tasks.length;
  isUpdate: boolean = false;
  editIndex: number = null;

  addTask(): void {
    if (this.task.name !== '') {
      this.tasks.push(this.task);
      this.taskCount = this.tasks.length;
      $('.modal-close').trigger('click');
      this.task = {
        name: '',
        status: false
      }
    }
  }

  removeTask(index) {
    if(confirm("Are you sure?")) {
      this.tasks.splice(index, 1);
      this.taskCount = this.tasks.length;
    }
  }

  editTask(index) {
    this.task = this.tasks[index];
    this.isUpdate = true;
    this.editIndex = index;
    $('.modal-trigger').trigger('click');

  }

  updateTask() {
    this.tasks[this.editIndex] = this.task;
    $('.modal-close').trigger('click');
    this.isUpdate = false;
    this.editIndex = null;
    this.task = {
      name: '',
      status: false
    }
  }

  updateChangeCheckbox(index){
    let taskObj = this.tasks[index];
    taskObj.status = !taskObj.status;
    this.tasks[index] = taskObj;
  }
}
