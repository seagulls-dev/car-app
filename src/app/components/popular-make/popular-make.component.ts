import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';


@Component({
  selector: 'app-popular-make',
  templateUrl: './popular-make.component.html',
  styleUrls: ['./popular-make.component.scss']
})
export class PopularMakeComponent implements OnInit {

  latestData = [];

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => 
      {
        this.latestData = res['popular_makes']
      }
    )
  }

}
