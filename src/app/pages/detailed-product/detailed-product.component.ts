import { Location } from '@angular/common';
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

  productFeature = {
    features: `Experience unrivalled stereo sound thanks to innovative acoustic technology. 
      With improved ergonomics designed for full day wearing, these revolutionary earphones have 
      been finely crafted to provide you with the perfect fit, delivering complete comfort all day 
      long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless 
      Earphones features customizable controls for volume, music, calls, and voice assistants built into 
      both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, 
      giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available 
      in an all new white and grey color scheme as well as the popular classic black.`,
    items: [
      {
        quantity: 2,
        name: "Earphone unit"
      },
      {
        quantity: 6,
        name: "Multi-size earplugs"
      },
      {
        quantity: 1,
        name: "User manual"
      },
      {
        quantity: 1,
        name: "USB-C charging cable"
      },
      {
        quantity: 1,
        name: "Travel pouch"
      }
    ]
  }

  constructor(private location:Location) { }

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

  goBackNav() {
    this.location.back();
  }
}
