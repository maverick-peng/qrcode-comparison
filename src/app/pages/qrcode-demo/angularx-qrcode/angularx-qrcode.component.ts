import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularx-qrcode',
  templateUrl: './angularx-qrcode.component.html',
  styleUrls: [
    './angularx-qrcode.component.css',
    '../qrcode-demo.component.css',
  ],
})
export class AngularxQrcodeComponent implements OnInit {
  showQRCode: boolean = false;
  qrCodeParameter: angularxQrcodeParam = {
    qrdata: '',
    width: 256,
    errorCorrectionLevel: 'M',
    elementType: 'img',
    margin: 4,
    colorDark: '#000000',
    colorLight: '#ffffff',
  };

  constructor() {}

  ngOnInit(): void {}

  generateQRCode(e: any) {
    this.qrCodeParameter = {
      qrdata: e.dataValue,
      width: e.size,
      errorCorrectionLevel: e.errorLevel,
      elementType: e.imgType,
      margin: e.borderSpace,
      colorDark: e.colorDark,
      colorLight: e.colorLight,
    };
    this.showQRCode = true;
  }
}

type angularxQrcodeParam = {
  qrdata: string;
  width: number;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  elementType: 'canvas' | 'img' | 'svg';
  margin: number;
  colorDark: string;
  colorLight: string;
};
