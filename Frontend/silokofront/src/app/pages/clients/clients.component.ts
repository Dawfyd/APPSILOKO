import { Component, OnInit } from '@angular/core';
import { MassiveProcessDto } from 'src/app/services/dto/massive-process.dto';
import { QuotaService } from 'src/app/services/quota.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  conditionCard: boolean = false;
  massiveProcessDto: MassiveProcessDto;
  constructor(private quotaService: QuotaService) { }

  ngOnInit() {
  }
  runProcess() {
    this.conditionCard = false;
    this.quotaService.runMassiveProcess().subscribe((data: MassiveProcessDto) => {
      this.massiveProcessDto = data;
      console.log(data);
      this.conditionCard = true;
    });
  }
}
