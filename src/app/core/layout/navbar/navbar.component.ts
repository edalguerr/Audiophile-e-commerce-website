import { Component, OnInit } from '@angular/core';
import { RouterLinkActive  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  linkActiveOption = { exact: true };
  btnHamburguerIconClassList = ["btn-menu__icon"];
  modalClassList = ["modal", "modal--inactive"];

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    
    if(this.btnHamburguerIconClassList.includes("btn-menu__icon--type_close")){      
      let index = this.btnHamburguerIconClassList.indexOf("btn-menu__icon--type_close");
      this.btnHamburguerIconClassList.splice(index, 1);

      index = this.modalClassList.indexOf("modal--active");
      this.modalClassList.splice(index, 1);
      this.modalClassList.push("modal--inactive");
      return;
    }
    
    let index = this.modalClassList.indexOf("modal--inactive");
    this.modalClassList.splice(index, 1);
    this.btnHamburguerIconClassList.push("btn-menu__icon--type_close");
    this.modalClassList.push("modal--active");
  }

  hideModal() {
    console.log("ejecutado")
    if(this.btnHamburguerIconClassList.includes("btn-menu__icon--type_close")){      
      let index = this.btnHamburguerIconClassList.indexOf("btn-menu__icon--type_close");
      this.btnHamburguerIconClassList.splice(index, 1);     
    }    

    if(this.modalClassList.includes("modal--active")){      
      let index = this.modalClassList.indexOf("modal--active");
      this.modalClassList.splice(index, 1);      
    }

    this.modalClassList.push("modal--inactive");
  }

}
