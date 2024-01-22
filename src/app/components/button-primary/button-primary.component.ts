import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type } from 'os';

type ButtonVariants = "primary" | "secondary";

@Component({
  selector: 'button-primary',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  @Input('buttonText') buttonText: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: ButtonVariants = "primary";

  @Output('submit') onSubmit = new EventEmitter();

  submit(): void {
    this.onSubmit.emit();
  }
}
