import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') clickMethod(evenData: Event) {
        this.isOpen = !this.isOpen;
    }

}