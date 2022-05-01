import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-products-grid',
  templateUrl: './main-products-grid.component.html',
  styleUrls: ['./main-products-grid.component.css']
})
export class MainProductsGridComponent implements OnInit {

  dataBtn1 = {
    text: "See product",
    link: "#",
    class: ["btn", "btn--color_black"]
  }

  dataBtn2 = {
    text: "See product",
    link: "#",
    class: ["btn", "btn--color_transparent"]
  }

  dataBtn3 = {
    text: "See product",
    link: "#",
    class: ["btn", "btn--color_transparent"]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
