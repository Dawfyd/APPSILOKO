import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Client } from 'src/app/services/models/client.interface';
import { ClientService } from 'src/app/services/client.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/models/product.interface';
import { Credit } from 'src/app/services/models/credit.interface';
import { CreditService } from 'src/app/services/credit.service';
import { CreditPostDto } from 'src/app/services/dto/credit-post.dto';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.scss']
})
export class CreditRequestComponent {
  loginTitle: string = "Solicitar Financiación de Electrodoméstico";
  user: string = "Cedula de Ciudadanía";
  password: string = "Código de Artículo";
  button: string = "Solicitar";
  client: Client;
  product: Product;
  credit: Credit;
  conditionCredit: boolean = false;

  constructor(
    private clientService: ClientService, private productService: ProductService, private creditService: CreditService) { }


  createCredit(newData: FormInputsDto) {
    this.conditionCredit = false;
    //Obtener cliente con la cédula de ciudadanía
    this.clientService.getClient(newData.firstValue).subscribe((dataClient: Client) => {
      //Verificar que existe un cliente con la cédula de ciudadanía dada
      if (dataClient[0] == null) {
        Swal.fire({
          title: "El cliente con el numero de cédula "+newData.firstValue + " no se encontro.",
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK!'
        })
      } else {
        this.client = dataClient[0];
        //Obtener electrodomestico con el codigo de articulo
        this.productService.getProduct(newData.secondValue).subscribe((dataProduct: Product) => {
          //Verificar que existe un electrodomestico con el codigo de articulo dado
          if (dataProduct == null) {
            Swal.fire({
              title: "El artículo con el código "+newData.secondValue + " no se encontro.",
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK!'
            })
          } else {
            this.product = dataProduct;
            let newCreditPostDto: CreditPostDto;
            newCreditPostDto = {
              cupoId: this.client.cupo.id,
              electrodomesticoId: dataProduct.id
            }
            //Se envia el DTO anteriormente mapeado a el servicio para que haga POST de el credito.
            this.creditService.createCredit(newCreditPostDto).subscribe((dataCredit: Credit) => {
              //Se guarda el credito creado para mostrarlo
              this.credit = dataCredit;
              this.conditionCredit = true;
            });
          }
        });
      }
    });
  }
}
