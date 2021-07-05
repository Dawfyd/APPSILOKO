import { Component, Input,ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  @Output() newFormValue = new EventEmitter<FormInputsDto>();
  @Input() showSecondPlaceholder: boolean = true;
  @Input() titleForm: string = "";
  @Input() firstPlaceholder: string = "";
  @Input() secondPlaceholder: string = "";
  @Input() buttonForm: string = "";


  hide = false;
  firstInput = new FormControl('', [Validators.required]);
  secondInput = new FormControl('', [Validators.required]);

  ngOnInit() {
    if(this.buttonForm == "Entrar"){
      this.hide = true;
    }
  }
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
  sendForm(firstValueForm: string, secondValueForm: string) {
    let formInputs : FormInputsDto;
    formInputs = {
      firstValue: firstValueForm,
      secondValue: secondValueForm,
    }
    this.newFormValue.emit(formInputs);
  }
}