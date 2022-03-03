import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-latest-ads',
  templateUrl: './latest-ads.component.html',
  styleUrls: ['./latest-ads.component.scss']
})
export class LatestAdsComponent implements OnInit {

  latestData = [];

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => 
      {
        this.latestData = res['latest_ads']
      }
    )
  }

}
