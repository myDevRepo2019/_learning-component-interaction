import {Observable, Subject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(message: string) {

        this.subject.next(message);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    clearMessage() {
        this.subject.next();
    }
}
