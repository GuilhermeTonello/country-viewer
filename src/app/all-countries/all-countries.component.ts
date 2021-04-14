import { Component, OnInit } from '@angular/core';

import { Country } from '../model/country';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) {
    this.countries = [];
    countryService.getAllCountries()
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          let country = new Country();
          country.name = data[i].name;
          country.alpha3Code = data[i].alpha3Code;
          this.countries.push(country);
        }
      });
  }

  ngOnInit(): void {
  }

}
