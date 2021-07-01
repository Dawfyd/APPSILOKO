import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent {

  @Input() showSecondPlaceholder: boolean = false;
  @Input() titleForm: string = "";
  @Input() firstPlaceholder: string = "";
  @Input() secondPlaceholder: string = "";
  @Input() buttonForm: string = "";



  hide = true;
  firstInput = new FormControl('', [Validators.required]);
  secondInput = new FormControl('', [Validators.required]);

  getErrorMessageFirstInput() {
    if (this.firstInput.hasError('required')) {
      return 'Ingresa el campo '+ this.firstPlaceholder;
    }

    return this.firstInput.hasError(this.firstPlaceholder) ? 'Not a valid'+ this.firstPlaceholder : '';
  }
  getErrorMessageSecondInput() {
    if (this.secondInput.hasError('required')) {
      return 'Ingresa el campo ' + this.secondPlaceholder;
    }

    return this.secondInput.hasError( this.secondPlaceholder) ? 'Not a valid'+this.secondPlaceholder : '';
  }
}