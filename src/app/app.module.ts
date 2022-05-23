import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LottieModule.forRoot({ player: () => import('lottie-web') }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
