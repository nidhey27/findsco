import { Component,ViewChild, ElementRef  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    merge:true,
    autoplay: false,
    // center:true,
    stagePadding: 50,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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


  products = [
    {
      image: "https://m.media-amazon.com/images/I/51yW2HeFTkL._UX679_.jpg",
      price: "447",
      name: "HSR Women Stylish Sleeveless High Mock Neck Stretchable Knit Regular Fit Tank Top (Free Size)",
      url:"https://www.amazon.in/HSR-Stylish-Sleeveless-Stretchable-Regular/dp/B0B2PL22B7/ref=sr_1_20?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486549&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-20&amp;th=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=17adc89918e3400a80f0d250468cdbb4&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/514ff8s7bTL.jpg",
      price: "449",
      name: "ELEVANTO Women's Latest Round Neck Stylish Criss Cross Back Tie Backless Crop Top Bardot Blouse/Tops for Summer/Basis Tshirt Maroon",
      url:"https://www.amazon.in/dp/B09STY8YTQ/ref=syn_sd_offsite_desktop_50?ie=UTF8&amp;psc=1&amp;aaxitk=qUKelUqaRH2BPP-E&amp;sp_csd=d2lkZ2V0TmFtZT1zZF9vZmZzaXRlX2Rlc2t0b3A&amp;tag=dradisplayi0a-21&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=a5fa698bf3ea9552b8afa8dd9ed83d67&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/61cPXhdCT0L._UY879_.jpg",
      price: "610",
      name: "Miss Chase Women's Cotton Full Sleeve Collared Top",
      url:"https://www.amazon.in/Miss-Chase-Womens-Regular-MCAW17TP08-97-62-06_Black_X-Large/dp/B07L93Y7QS/ref=sr_1_67?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486664&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-67&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=a91d1a50158ad9551e43773979ebffb8&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/61FvJKJ7vkL._UX679_.jpg",
      price: "419",
      url: "https://www.amazon.in/Harpa-Striped-GR5672-Multi_-Medium/dp/B07KT7NVRP/ref=sr_1_74?crid=3BNX3SWZ57WAY&keywords=tops%252Bfor%252Bwomen%252Bwestern%252Bwear&qid=1681486963&s=apparel&sprefix=tops%252Capparel%252C276&sr=1-74&th=1&psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=5ad37651f1343c582b67c5f3b5496ff8&camp=3638&creative=24630",
      name: "Harpa Striped Regular Fit Top",
    },
    
    {
      image: "https://m.media-amazon.com/images/I/81rc8aUwufL._UY879_.jpg",
      price: "847",
      name: "Janasya Women's White Georgette Digital Print Flared Top",
      url:"https://www.amazon.in/Janasya-Womens-Georgette-Digital-JNE4045-TP-XXXL/dp/B0BRFT9MVP/ref=sr_1_117?crid=3BNX3SWZ57WAY&amp;keywords=tops%252Bfor%252Bwomen%252Bwestern%252Bwear&amp;qid=1681486991&amp;s=apparel&amp;sprefix=tops%252Capparel%252C276&amp;sr=1-117&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=c5ef23ef7bf71a459865769b25202f53&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/61WG5Gl3KbL._UY879_.jpg",
      price: "399",
      name: "Shasmi Women's White Square Neck Short Puff Sleeve Ruched Bust Solid Tops for Women/Tops for Girls (Shree Top 27)",
      url:"https://www.amazon.in/Shasmi-Womens-Square-Tops-Women/dp/B09V88Z1PH/ref=sr_1_25?crid=3BNX3SWZ57WAY&amp;keywords=tops%252Bfor%252Bwomen%252Bwestern%252Bwear&amp;qid=1681486784&amp;s=apparel&amp;sprefix=tops%252Capparel%252C276&amp;sr=1-25&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=cbff5aebb78b9a7fe9e39c11cf20d853&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/41vlZT2JVWL.jpg",
      price: "439",
      name: "Mirana Crew Neck Front Pleat Detail Women Top with Long Sleeves for Office Wear, Casual Wear, Top for Women/Girls Top",
      url:"https://www.amazon.in/Mirana-Detail-Sleeves-Office-Casual/dp/B0BTTFDV85/ref=sr_1_17?crid=3BNX3SWZ57WAY&amp;keywords=tops%252Bfor%252Bwomen%252Bwestern%252Bwear&amp;qid=1681486784&amp;s=apparel&amp;sprefix=tops%252Capparel%252C276&amp;sr=1-17&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=ee0afe3ddcf81fe381379ef7b09baeab&camp=3638&creative=24630"
    },
    
    {
      image: "https://m.media-amazon.com/images/I/81-OiPWQYeL._UY879_.jpg",
      price: "229",
      name: "SIRIL Women's Crepe Slim Fit Digital Printed Top",
      url:"https://www.amazon.in/SIRIL-Womens-Regular-Crop-215TK113-XL_Multi/dp/B09ZHW8CRP/ref=sr_1_54?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486664&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-54&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=c56874ff105ef3966f4886d954d00b60&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/71TNhGWphrL._UY879_.jpg",
      price: "279",
      name: "SIRIL Women's Polyester Crop Printed Top",
      url:"https://www.amazon.in/SIRIL-Womens-Crepe-Printed-299TK164-M_Multi/dp/B09RZTRBZL/ref=sr_1_51?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486549&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-51&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=8b8a1a8125aca1a9f83cdf57bd02504f&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/71gAlld6UHL._UX679_.jpg",
      price: "419",
      name: "Harpa Women Round Neck Solid Top",
      url:"https://www.amazon.in/Harpa-Womens-Plain-Regular-GR5691_Pink_Large/dp/B07NGDR7WT/ref=sr_1_43?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486549&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-43&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=c33c7bc1c2fc0f0a14e81d352c7fc128&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/51p2Hfedo9L._UY879_.jpg",
      price: "269",
      name: "Selvia Women's Poly Viscose Solid Regular Fit Shirt",
      url:"https://www.amazon.in/Selvia-Womens-Solid-Regular-329TKN259-M_Lavender/dp/B0B2RX1DZ6/ref=sr_1_34?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486549&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-34&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=412a179bf935297090df5d254e3f9632&camp=3638&creative=24630"
    },
    {
      image: "https://m.media-amazon.com/images/I/71D71aU1zxL._UY879_.jpg",
      price: "349",
      name: "GRECIILOOKS Women's Casual Ruffle Sleeve V-Neck Rayon Printed Tops for Girls| Long Formal Women Tops",
      url:"https://www.amazon.in/Greciilooks-Womens-Stylish-Sleeves-X-Large/dp/B09YP548TR/ref=sr_1_30?crid=1P6A4KS4OH8BU&amp;keywords=tops&amp;qid=1681486549&amp;s=apparel&amp;sprefix=tops%252Capparel%252C233&amp;sr=1-30&amp;th=1&amp;psc=1&_encoding=UTF8&tag=findsco-21&linkCode=ur2&linkId=a00bd53ad20fd7089b83b8500c2b51e7&camp=3638&creative=24630"
    },
   
    
  ]

  @ViewChild('video', { static: true }) video!: ElementRef;
  constructor(){
      // this.video.nativeElement.play()
      window.scroll(0,0)
  }

}
