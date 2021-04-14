import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import { Country } from '../model/country';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  belgium: Country;
  brazil: Country;
  usa: Country;

  constructor(private countryService: CountryService) {
    this.belgium = new Country();
    this.brazil = new Country();
    this.usa = new Country();

    countryService.getCountry("belgium")
      .subscribe(data => {
        this.belgium.name = data[0].name;
        this.belgium.flag = data[0].flag;
        this.belgium.region = data[0].region;
        this.belgium.alpha3Code = data[0].alpha3Code;
        this.belgium.capital = data[0].capital;
      });

      countryService.getCountry("brazil")
      .subscribe(data => {
        this.brazil.name = data[0].name;
        this.brazil.flag = data[0].flag;
        this.brazil.region = data[0].region;
        this.brazil.alpha3Code = data[0].alpha3Code;
        this.brazil.capital = data[0].capital;
      });

      countryService.getCountry("usa")
      .subscribe(data => {
        this.usa.name = data[0].name;
        this.usa.flag = data[0].flag;
        this.usa.region = data[0].region;
        this.usa.alpha3Code = data[0].alpha3Code;
        this.usa.capital = data[0].capital;
      });
  }

  ngOnInit(): void {
  }

}
