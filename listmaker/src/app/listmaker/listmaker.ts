import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface list{
  id: number;
  name: string;
  quantity: string;
  price:string;
}

@Component({
  selector: 'app-listmaker',
  imports: [CommonModule,FormsModule],
  templateUrl: './listmaker.html',
  styleUrl: './listmaker.css'
})
export class Listmaker {
lists: list[]=[];
nameI:string='';
quantityI:string='';
priceI:string='';

add(){
  this.lists.push({
  id: Date.now(),
  name: this.nameI,
  quantity: this.quantityI,
  price: this.priceI,
  });
  this.nameI='';
  this.quantityI='';
  this.priceI='';
}
del( index: number){
this.lists.splice(index, 1);
}



}
