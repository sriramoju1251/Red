import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {

  constructor(private messageservice: MessageService) { }

  ngOnInit(): void {
    
  }
  sendMessage(message:any){
    this.messageservice.sendMessage(message);
  }
}
