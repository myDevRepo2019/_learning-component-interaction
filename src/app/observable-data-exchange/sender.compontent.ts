import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService} from './messages.service';


@Component({
    selector: 'app-sender',
    templateUrl: './sender.component.html'
})

export class SenderComponent {

    displayedText: string;
    constructor(private messageService: MessageService) {
        // nothing
        this.displayedText = 'initial text';
    }

    sendMessage() {
        this.messageService.sendMessage('Message from Sender Component to Recipient Component');
    }

    sendEnteredText(passedEvent: any) {
        this.messageService.sendMessage(passedEvent.target.value);
        this.displayedText = passedEvent.target.value ;
        // console.log(passedEvent.target.value);
    }

    clearMessage() {
        this.messageService.clearMessage();
    }

}
