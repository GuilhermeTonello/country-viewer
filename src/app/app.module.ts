import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    CountryPageComponent,
    FooterComponent,
    HeaderComponent,
    SearchBarComponent,
    MainPageComponent,
    NotFoundComponent,
    AllCountriesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: '404', component: NotFoundComponent},
      {path: 'countries', component: AllCountriesComponent},
      {path: ':countryCode', component: CountryPageComponent},
      {path: '**', redirectTo: '/404'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
