import {Component} from "@angular/core";
import {NavController,AlertController} from "ionic-angular";
import {LoginPage} from "../login/login";
//import {HomePage} from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../model/user";
import { HomePage } from "../home/home";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user = {} as User;

  constructor(public nav: NavController,private fire: AngularFireAuth,public alertCtrl: AlertController) {
  
  }

  // register and go to home page
  register() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.email ,this.user.password)
    .then(data => {
      console.log('got data ', data);
     // this.alert('Registered!');
    })
    .catch(error => {
      console.log('got an error ', error);
      //new Alert(error.message);
    });
    console.log('Would register user with ', this.user.email, this.user.password);
    
    this.nav.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
