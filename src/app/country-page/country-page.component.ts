import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Country } from '../model/country';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  country: Country;

  constructor(private countryService: CountryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    let routeParams = this.activatedRoute.snapshot.paramMap;
    let countryCode = String(routeParams.get('countryCode'));
    this.countryService.getCountryByAlphaCode(countryCode)
      .subscribe(country => {
        this.country = country;
      }, error => {
        this.router.navigateByUrl('/404');
      });
  }

}
