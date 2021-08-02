import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { QRCodeDemoComponent } from './pages/qrcode-demo/qrcode-demo.component';
import { NgxQrcodeComponent } from './pages/qrcode-demo/ngx-qrcode/ngx-qrcode.component';
import { AngularxQrcodeComponent } from './pages/qrcode-demo/angularx-qrcode/angularx-qrcode.component';
import { QRCodeControlComponent } from './shared/components/qrcode-control/qrcode-control.component';
import { NgQrcodeComponent } from './pages/qrcode-demo/ng-qrcode/ng-qrcode.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'qrcode-demo',
    component: QRCodeDemoComponent,
    children: [
      {
        path: 'angularx-qrcode',
        component: AngularxQrcodeComponent,
      },
      {
        path: 'ng-qrcode',
        component: NgQrcodeComponent,
      },
      {
        path: 'ngx-qrcode',
        component: NgxQrcodeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    AngularxQrcodeComponent,
    QRCodeDemoComponent,
    QRCodeControlComponent,
    NgxQrcodeComponent,
    NgQrcodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule,
    QrCodeModule,
    NgxQRCodeModule,
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
