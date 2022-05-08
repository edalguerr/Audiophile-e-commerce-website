import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.css']
})
export class DetailedProductComponent implements OnInit {
  
  imgSrc = "assets/images/category-headphones/" + this.getResponsiveScreen();
  currentProductData = {
    title: "XX99 Mark II Headphones",
    description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines 
                      your premium headphone experience by reproducing the balanced depth and precision 
                      of studio-quality sound.`,
    link: "",
    img: `${this.imgSrc}/image-xx99-mark-two.jpg`,
    price: 4500,
    new: true,
    classList: "product-card",
    cardShop: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  getResponsiveScreen() {
    if (window.matchMedia) {
      if(window.matchMedia('(max-width: 768px)').matches){
        return 'mobile';
      } else if(window.matchMedia('(max-width: 1200px)').matches) {
        return 'tablet';
      }

      return 'desktop'
    }

    console.log("match media don't supported")
    return null;
  }

}
