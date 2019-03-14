import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  private MY_KEY = 'my-key';
  private MY_STORED_VALUE = '';

// the service is using the storage module so in the service class so..
// "import { Storage } from '@ionic/storage';" ...
// and inject it in to the constructor for use

/*
Basic example ...
  // set a key/value
  storage.set('name', 'Max');

  // Or to get a key/value pair
  storage.get('age').then((val) => {
    console.log('Your age is', val);
  });
}

*/

  constructor(private storage: Storage) {
    console.log('Service constructor called');
    storage
      .ready()
      .then(() => storage.get(this.MY_KEY))
      .then(result => (
        this.MY_STORED_VALUE = result, console.log('result: ' +  this.MY_STORED_VALUE )
        ));

  }

  setLocalStorageValue() {
    this.storage.set(this.MY_KEY, 'This is a test value string');
  }
}
