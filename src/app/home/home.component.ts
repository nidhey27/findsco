import { Component, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    merge: true,
    autoplay: false,
    // center:true,
    stagePadding: 50,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    // nav: true,
    // navText: ["<span class='fa fa-chevron-left'><span>", "<span class='fa fa-chevron-right arrows-fa'><span>"],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    // nav: true
  }


  products: any = []

  @ViewChild('video', { static: true }) video!: ElementRef;
  constructor(private _httpClient: HttpClient) {
    // this.video.nativeElement.play()
    window.scroll(0, 0)

    this._httpClient.get("https://nidhey27.github.io/findsco/src/assets/products.json").subscribe((resp: any) => {
      this.products = resp;
      this.products = this.shuffle(this.products)
    });
    
  }

  shuffle(arr: any) {
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }

    return arr;
  }

}
