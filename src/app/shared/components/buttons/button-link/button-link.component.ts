import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {

  @Input() dataBtn = {
    text: "See product",
    link: "#",
    class: ["btn"]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
