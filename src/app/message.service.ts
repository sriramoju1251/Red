import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
 public subject = new BehaviorSubject<string>('Hello');
  constructor() { }
  sendMessage(message:string){
    this.subject.next(message);
  }

  receiveMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
