import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  private MY_KEY = 'my-key';

  constructor(private storage: Storage) {
    storage
      .ready()
      .then(() => storage.get(this.MY_KEY))
      .then(result => (console.log(result)));

  }
}
