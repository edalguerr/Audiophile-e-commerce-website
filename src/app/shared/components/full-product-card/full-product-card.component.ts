import { Component, Input, OnInit } from '@angular/core';

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
    new: false,
    classList: "product-card"
  }

  dataBtn = {
    text: "See product",
    link: this.productData.link,
    class: ["btn"]
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.productData)
  }

}
