import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { CountriesProvider } from "../../services/countries";
import { RegisterPage } from "../register/register";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";


@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: CountriesProvider,
    public nav: NavController,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
    this.getCountries();
  }

  countries: any;
  errorMessage: string;

  country: {
    name: string,
    capital: string
  }

  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

  goLoginPage() {
    this.nav.push(LoginPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  /* // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  } */
  goRegisterPage(){
    this.nav.push(RegisterPage);
  }
}
