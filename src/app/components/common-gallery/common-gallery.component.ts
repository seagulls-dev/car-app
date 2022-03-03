import { Component, OnInit, Input } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-common-gallery',
  templateUrl: './common-gallery.component.html',
  styleUrls: ['./common-gallery.component.scss']
})
export class CommonGalleryComponent implements OnInit {

  latestData = [];

  @Input('key') keyName = '';

  constructor(private service: CarService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(res => 
      {
        this.latestData = res[this.keyName]
      }
    )
  }

}
