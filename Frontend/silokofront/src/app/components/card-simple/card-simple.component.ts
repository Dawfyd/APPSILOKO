import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent implements OnInit {

  @Input() titleCard: string = "";
  @Input() firstLabel: string = "";
  @Input() secondLabel: string = "";
  @Input() thirdLabel: string = "";

  @Input() firstInput: string = "";
  @Input() secondInput: string = "";
  @Input() thirdInput: string = "";

//prueba put
  postId: number;
  errorMessage: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const body = { id: 2,  cupoMaximo: 8000000, estadoCupo: true};
    this.http.put<any>('http://localhost:8888/cupos/update', body)
        .subscribe({
            next: data => {
                this.postId = data.id;
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        });
  }
}