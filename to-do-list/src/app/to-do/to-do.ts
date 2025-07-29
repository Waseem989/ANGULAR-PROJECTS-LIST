import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  task: string;
}
@Component({
  selector: 'app-to-do',
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css'
})


export class ToDo {
 todos: Todo[] = [];        //  1sabhi tasks ka list (initially empty)
  newTask: string = '';      //1 ye variable new task input store karta hai
todoo:any[]=[];    // 2 todolist
 task:string='';    // 2 task get from 

  addTask() {
    // Check karta hai ke user ne kuch likha hai ya nahi
    if (this.newTask.trim()) {
      // Agar likha hai to usko todos list me push karo
      this.todos.push({
        id: Date.now(),            // unique id banate hain current time se
        task: this.newTask        // task ka naam
      });
      this.newTask = '';           // input field ko khali kar dete hain
    }
 
  }

  
  deleteTask(id: number) {
    // filter se wo task hata dete hain jiska id match karta hai
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

addt(){
 
  if(this.task.trim()){
    this.todoo.push({ task:this.task});
    this.task='';
  }
  
}
del(){
 this.todoo.pop();
  
}
}
