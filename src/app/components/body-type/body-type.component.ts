import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.scss']
})
export class BodyTypeComponent implements OnInit {

  latestData = [];

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => 
      {
        this.latestData = res['body_types']
      }
    )
  }

}
