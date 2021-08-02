import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-qrcode-control',
  templateUrl: './qrcode-control.component.html',
  styleUrls: ['./qrcode-control.component.css'],
})
export class QRCodeControlComponent {
  // page title
  @Input('formTitle') title: string = '';

  // QRCode parameters
  @Input('errorLevels') errorLevels: string[] = [];
  @Input('hasSizeValue') hasSizeValue: boolean = false;
  @Input('imgTypes') imgTypes: string[] = [];
  @Input('hasBorderSpace') hasBorderSpace: boolean = false;
  @Input('cssClasses') cssClasses: string[] = [];
  @Input('hasCenterImg') hasCenterImg: boolean = false;
  @Input('canChangeColor') canChangeColor: boolean = false;

  @Output() generateQRCode: EventEmitter<any> = new EventEmitter();

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.generateQRCode.emit(f.value);
  }
}
