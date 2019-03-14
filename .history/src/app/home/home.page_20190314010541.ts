import { Component } from '@angular/core';
import { BasicServiceService } from '../basic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


// npm install --save @ionic/storage (already installed)

export class HomePage {

  constructor(private service: BasicServiceService){
    console.log('HomePage constructor called');

  }
}
