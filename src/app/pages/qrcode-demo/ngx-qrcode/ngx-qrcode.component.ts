import { Component, OnInit } from '@angular/core';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-ngx-qrcode',
  templateUrl: './ngx-qrcode.component.html',
  styleUrls: ['./ngx-qrcode.component.css', '../qrcode-demo.component.css'],
})
export class NgxQrcodeComponent implements OnInit {
  showQRCode: boolean = false;
  qrCodeParameter: NgxQRCodeParameter = {
    elementType: NgxQrcodeElementTypes.IMG,
    value: '',
    errorCorrectionLevel: NgxQrcodeErrorCorrectionLevels.MEDIUM,
    cssClass: '',
  };
  constructor() {}

  ngOnInit(): void {}

  generateQRCode(e: any) {
    this.qrCodeParameter = {
      elementType: e.imgType,
      value: e.dataValue,
      errorCorrectionLevel: e.errorLevel,
      cssClass: e.className,
    };
    this.showQRCode = true;
  }
}

type NgxQRCodeParameter = {
  elementType: NgxQrcodeElementTypes;
  value: string;
  errorCorrectionLevel: NgxQrcodeErrorCorrectionLevels;
  cssClass: string;
};
