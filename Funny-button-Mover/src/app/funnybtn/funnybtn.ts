import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-funnybtn',
  imports: [CommonModule,FormsModule],
  templateUrl: './funnybtn.html',
  styleUrl: './funnybtn.css'
})
export class Funnybtn {
 inputValue: string = '';
 // ye is ki initial positon bta rha hai k butn ki position kha hai is waqt
  buttonStyle = {  
    position: 'relative',
    left: '0px',
    top: '0px'
  };

  submit() {
    if (!this.inputValue.trim()) {
      alert('Write something first bro!');
    } else{
      return alert('You are cute ')
    }
  }

  onHover() {
    if (!this.inputValue.trim()) {
      const randomX = Math.floor(Math.random() * 200+10 );
      const randomY = Math.floor(Math.random() * 200 );
      this.buttonStyle = {
        ...this.buttonStyle,
        left: `${randomX}px`,
        top: `${randomY}px`
      };
    } else {
      this.buttonStyle = {
        position: 'relative',
        left: '0px',
        top: '0px'
      };
      
    }
  }

}
