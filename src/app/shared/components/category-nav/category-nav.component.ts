import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  categories = [
    {
      link: "#",
      classList: ["card-nav-link__image"],
      title: "Headphones"
    },
    {
      link: "#",
      classList: ["card-nav-link__image", "card-nav-link__image--Speakers"],
      title: "Speakers"
    },
    {
      link: "#",
      classList: ["card-nav-link__image", "card-nav-link__image--Earphones"],
      title: "Earphones"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
