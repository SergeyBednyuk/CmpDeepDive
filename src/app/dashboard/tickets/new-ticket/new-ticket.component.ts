import { Component, ContentChild, contentChild, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    imports: [
        ButtonComponent,
        ControlComponent,
        FormsModule
    ],
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
    // Old way to template variable
    // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    // Angular 17.3v+
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

    onSubmit(title: string, ticketText: string) {
        console.log('TITLE TEXT: ' + title);
        console.log('TICKET TEXT: ' + ticketText);
        this.form().nativeElement.reset();
    }
}
