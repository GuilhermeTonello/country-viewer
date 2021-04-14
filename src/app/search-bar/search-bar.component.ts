import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryPageComponent } from '../country-page/country-page.component';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchCountryForm: FormGroup;

  constructor(private countryService: CountryService, private router: Router) {
    this.searchCountryForm =  new FormGroup({
      countryName: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let countryName: string = this.searchCountryForm.get('countryName').value;
    this.countryService.getCountry(countryName)
      .subscribe(data => {
        let countryCode = data[0].alpha3Code;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([`/${countryCode}`]);
      }, error => {
        this.router.navigateByUrl('/404');
      });
  }

}
