import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/** Tambahan */
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser'
/** --- */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scannedQrCode = null;

  constructor(public navCtrl: NavController,
    public barcodeScanner : BarcodeScanner,
    public inAppBrowser : InAppBrowser) {

  }

  // menscan qrdata
  scanQRCode() : void{
    this.barcodeScanner.scan()
      .then(barcodeData => {
        this.scannedQrCode = barcodeData.text;
      }, (error) => {
        console.log('Scan Error : ', error);
      });
  }

  linkUrl() : void {
    const openBrowser = this.inAppBrowser.create(
      this.scannedQrCode,
      '_self', // atau _self
      'location=yes'
    );
    openBrowser.show();
  }

}
