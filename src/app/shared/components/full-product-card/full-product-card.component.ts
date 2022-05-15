import { Component, Input, OnInit } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-full-product-card',
  templateUrl: './full-product-card.component.html',
  styleUrls: ['./full-product-card.component.css']
})
export class FullProductCardComponent implements OnInit {
  @Input() productData = {
    title: "",
    description: "",
    link: "",
    img: "",
    price: 4500,
    new: false,
    classList: "product-card",
    cardShop: false
  }

  dataBtn = {
    text: "See product",
    link: this.productData.link,
    class: ["btn"]
  }

  dataBtnAlt = {  
    ...this.dataBtn,
    text: "Add to cart"
  }

  counter = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.productData.cardShop){
      this.dataBtn.link = this.router.routerState.snapshot.url;
      this.dataBtnAlt.link = this.router.routerState.snapshot.url;
     /* this.router.events.subscribe((event:any)=>{        
        this.dataBtn.link = event.url;
        this.dataBtnAlt.link = event.url;
      })*/
      
    } else {
      this.dataBtn.link = this.productData.link;
      this.dataBtnAlt.link = this.productData.link;
    }

  }


  counterDown() {
    if(this.counter < 1){
      return;
    }

    this.counter--;
  }

  counterUp(){
    this.counter++;
  }

}

