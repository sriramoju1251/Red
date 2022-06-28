import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.css']
})
export class WhiteComponent implements OnInit {

tableData = [  
  {  
    "id": 1,  
    "name": "Jack",  
    "email": "jack@gmail.com",  
    "gender": "male"
  },  
  {  
    "id": 2,  
    "name": "Peter",  
    "email": "peter@gmail.com",  
    "gender": "male"  
  },
  {
    "id": 3,
    "name": "Mary", 
    "email": "mary@gmail.com",  
    "gender": "female" 
  },
  {  
    "id": 4,  
    "name": "Smith",  
    "email": "smith@gmail.com",  
    "gender": "male"  
  },  
  {  
    "id": 5,  
    "name": "John",  
    "email": "john@gmail.com",  
    "gender": "male"  
  }
];

  message: string | undefined;
  showtable:boolean =false;
  elements: any =[];
  constructor(private messageService:MessageService) { }
  
  ngOnInit(): void {
    this.messageService.subject.subscribe((d)=>{
      this.message = d;
    })
    for (let i = 1; i <= 11; i++) {
      this.elements.push({
        id: i,
        first: {nick: 'Nick ' + i, name: 'Name ' + i},
        last: 'Name ' + i,
        handle: 'Handle ' + i
      });
    }
  }

  show(){
    this.showtable =! this.showtable;
  } 
}
