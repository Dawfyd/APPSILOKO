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
  firstInput = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  secondInput = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]);

  ngOnInit() {
    if(this.buttonForm == "Entrar"){
      this.hide = true;
    }
  }
  getErrorMessageFirstInput() {
    if (this.firstInput.hasError('required')) {
      return 'Ingresa el campo '+ this.firstPlaceholder;
    } else if (this.firstInput.hasError('minlength')){
      return "El campo requiere como minimo 5 caracteres";
    } else if (this.firstInput.hasError('maxlength')) {
      return "El campo requiere al menos 10 caracteres";
    }
    return this.firstInput.hasError(this.firstPlaceholder) ? 'Not a valid'+ this.firstPlaceholder : '';
  }
  getErrorMessageSecondInput() {
    if (this.secondInput.hasError('required')) {
      return 'Ingresa el campo ' + this.secondPlaceholder;
    }else if (this.secondInput.hasError('minlength')){
      return "El campo requiere como minimo 5 caracteres";
    } else if (this.secondInput.hasError('maxlength')) {
      return "El campo requiere al menos 8 caracteres";
    }
    return this.secondInput.hasError(this.secondPlaceholder) ? 'Not a valid'+ this.secondPlaceholder : '';
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