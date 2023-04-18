import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any = []

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
