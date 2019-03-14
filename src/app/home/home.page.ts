import { Component } from '@angular/core';
import { BasicServiceService } from '../basic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// More info here .. https://ionicframework.com/docs/building/storage

// npm install --save @ionic/storage (already installed)
// app.module => "import { IonicStorageModule } from '@ionic/storage';" and under imports "IonicStorageModule.forRoot()"



export class HomePage {

  constructor(private service: BasicServiceService){
    console.log('HomePage constructor called');

  }

  public storeValue() {
    this.service.setLocalStorageValue();
  }
}
