import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  btnHamburguerIconClassList = ["btn-menu__icon"];
  modalClassList = ["modal"];

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    
    if(this.btnHamburguerIconClassList.includes("btn-menu__icon--type_close")){      
      let index = this.btnHamburguerIconClassList.indexOf("btn-menu__icon--type_close");
      this.btnHamburguerIconClassList.splice(index, 1);

      index = this.modalClassList.indexOf("modal--active");
      this.modalClassList.splice(index, 1);
      return;
    }
    
    this.btnHamburguerIconClassList.push("btn-menu__icon--type_close");
    this.modalClassList.push("modal--active");
  }


}
