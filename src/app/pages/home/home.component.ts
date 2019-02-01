import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { ServiceApiService } from '../../services/serivce-api/service-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private seviceApi: ServiceApiService
  ) { }

  ngOnInit() {
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  loginFacebook() {
    this.signInWithFB()
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.user.photoUrl = "https://graph.facebook.com/" + this.user.id + "/picture?width=2000&height=2000"
      console.log("datalogin Facebook : ", this.user);
      window.localStorage.setItem('@user', JSON.stringify(this.user));
      this.loggedIn = (user != null);

    });
  }
  saveUser() {
    try {
      let dataUser = JSON.parse(window.localStorage.getItem('@user'));
      let data = {
        username: dataUser.email ? dataUser.email : dataUser.firstName + dataUser.lastName,
        password: 'P@ssw0rd'
      }
      let user: any = this.seviceApi.saveUser(data);
      console.log('login')
      if (!user) {
        console.log('regis');
        let dataRegis = {
          username:  dataUser.email ? dataUser.email : dataUser.firstName + dataUser.lastName ,
          password: 'P@ssw0rd',
          firstname: dataUser.firstName,
          lastname: dataUser.lastName,
          email: dataUser.email ? dataUser.email : dataUser.firstName + dataUser.lastName + '@hotmail.com'
        }
        this.seviceApi.sigup(dataRegis)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
