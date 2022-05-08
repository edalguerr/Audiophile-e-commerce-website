import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if(this.dataBtn.link.length < 1){
      this.dataBtn.link = this.router.routerState.snapshot.url;
      this.dataBtnAlt.link = this.router.routerState.snapshot.url;

      this.router.events.subscribe((event:any)=>{        
        this.dataBtn.link = event.url;
        this.dataBtnAlt.link = event.url;
      })
      
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

