import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import * as json from './animations/rocket.json';
import { jsDocComment } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  public options: AnimationOptions;
  public animationStatus: any;
  public fromUrl: boolean;

  constructor() {
    this.fromUrl = false;
  }
  ngOnInit(): void {
    this.getAnimFromUrl(
      'https://assets9.lottiefiles.com/packages/lf20_lzpnnin5.json'
    );
  }

  animationCreated(animation: AnimationItem): void {
    this.animationStatus = animation;
  }

  stopAnimation() {
    this.animationStatus.stop();
  }

  triggerAnimation() {
    this.animationStatus.play();
  }
  getAnimFromUrl(data: string): AnimationOptions {
    this.options = { path: data };
    return this.options;
  }

  getAnimFromDirectoryJson(data: Object): AnimationOptions {
    this.options = { animationData: data };
    return this.options;
  }

  chooseAnimationSource(): void {
    this.fromUrl = !this.fromUrl;
    this.fromUrl
      ? this.getAnimFromDirectoryJson(json)
      : this.getAnimFromUrl(
          'https://assets9.lottiefiles.com/packages/lf20_lzpnnin5.json'
        );
  }
}
