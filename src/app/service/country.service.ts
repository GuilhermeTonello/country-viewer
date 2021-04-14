import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public getCountry(countryName: string): Observable<Country> {
    return this.httpClient.get<Country>(`https://restcountries.eu/rest/v2/name/${countryName}`);
  }

  public getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  public getCountryByAlphaCode(countryCode: string): Observable<Country> {
    return this.httpClient.get<Country>(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
  }
  
}
