import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-control',
    standalone: true,
    imports: [],
    templateUrl: './control.component.html',
    styleUrl: './control.component.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'control',
        '(click)': 'onClick()'
    }
})
export class ControlComponent {
    // Optional interaction with host
    // @HostBinding('class') className = 'control';
    // @HostListener('click') onClick() {
    //     console.log('Clicked!');
    // };
    private el = inject(ElementRef);

    controlLabel = input.required<string>();

    onClick(){
        console.log('Clicked!');
        console.log(this.el);
    }
}
