import {Component, OnDestroy} from '@angular/core';
import { MessageService} from './messages.service';
import {Subscription} from 'rxjs';


@Component(
    {
        selector: 'app-recipient',
        templateUrl: './recipient.component.html'
    })

export class RecipientComponent implements OnDestroy {

    message: string;
    subscription: Subscription;

    constructor(private messageService: MessageService) {
        // subscribe to messages, available through the service
        this.subscription = this.messageService.getMessage().subscribe( message => {this.message = message; });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
