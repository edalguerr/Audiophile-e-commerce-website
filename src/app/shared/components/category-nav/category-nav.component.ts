import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  @Input() ngsRevealOptions = { delay:700, duration:1000, easing: 'ease-in-out'};
  @Input() categoryContainerClassList = ["category-container"];
  @Output() changeCategory = new EventEmitter();
  categories = [
    {
      link: "/headphones",
      classList: ["card-nav-link__image"],
      title: "Headphones"
    },
    {
      link: "/speakers",
      classList: ["card-nav-link__image", "card-nav-link__image--Speakers"],
      title: "Speakers"
    },
    {
      link: "/earphones",
      classList: ["card-nav-link__image", "card-nav-link__image--Earphones"],
      title: "Earphones"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    this.changeCategory.emit();
  }
  
}
