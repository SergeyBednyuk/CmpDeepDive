import {
    afterNextRender,
    afterRender,
    AfterViewInit,
    Component,
    ContentChild,
    contentChild,
    ElementRef, EventEmitter,
    OnInit, output, Output,
    viewChild,
    ViewChild
} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
    // Old way to template variable
    // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    // Angular 17.3v+
    private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    add = output<{ title: string; text: string }>();

    constructor() {
        afterRender(() => {
            console.log('AFTER RENDER');
        });
        afterNextRender(() => {
            console.log('AFTER NEXT RENDER');
        });
    }

    onSubmit(title: string, ticketText: string) {
        this.add.emit({ title: title, text: ticketText });
        this.form().nativeElement.reset();
    }

    ngOnInit() {
        console.log('ON INIT');
        console.log(this.form().nativeElement)
    }

    ngAfterViewInit(): void {
        console.log('AFTER VIEW INIT');
        console.log(this.form().nativeElement)
    }
}
