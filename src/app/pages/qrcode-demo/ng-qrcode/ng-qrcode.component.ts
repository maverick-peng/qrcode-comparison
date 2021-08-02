import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-qrcode',
  templateUrl: './ng-qrcode.component.html',
  styleUrls: ['./ng-qrcode.component.css', '../qrcode-demo.component.css'],
})
export class NgQrcodeComponent implements OnInit {
  showQRCode: boolean = false;
  qrCodeParameter: NgQrcodeParameter = {
    value: '',
    size: 256,
    errorCorrectionLevel: 'M',
  };
  constructor() {}

  ngOnInit(): void {}

  generateQRCode(e: any) {
    console.log(e);
    this.qrCodeParameter = {
      value: e.dataValue,
      size: e.size,
      errorCorrectionLevel: e.errorLevel,
      centerImageSize: e.centerImgSize,
      centerImageSrc: e.centerImg,
    };
    this.showQRCode = true;
  }
}

type NgQrcodeParameter = {
  value: string;
  size: string | number;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  centerImageSrc?: string;
  centerImageSize?: string | number;
};
