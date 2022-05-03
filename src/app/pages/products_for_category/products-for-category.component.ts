import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-for-category',
  templateUrl: './products-for-category.component.html',
  styleUrls: ['./products-for-category.component.css']
})
export class ProductsForCategoryComponent implements OnInit {
  
  categories = { headphones: "headphones", earphones: "earphones", speakers: "speakers" };
  category:String;
  products = [{
    title: "",
    description: "",
    link: "",
    img: "",
    new: false,
    classList: []
  }];
  imgRoute = "assets/images/";
  ngsRevealOptions = { delay:300, duration:500, easing: 'ease-in-out'};

  constructor(private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {

    this.category = this.activatedRoute.snapshot.params.category;
    this.activatedRoute.params.subscribe((params:Params) => {
      this.category = params.category;
      this.loadProducts();
    });
  }

  loadProducts() {
    let imgSrc = "";

    if(this.category.toLowerCase() == this.categories.headphones){
           
    } else if (this.category.toLocaleLowerCase() == this.categories.earphones){

    } else if (this.category.toLowerCase() == this.categories.speakers){

    }

    //TODO: to do that for each category
    imgSrc = this.imgRoute + "category-headphones/" + this.getResponsiveScreen(); 
    let classListPar = ["product-card"];
    let classListImpar = ["product-card", "product-card--style_reverse"];
    this.products = [
      {
        title: "XX99 Mark II Headphones",
        description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines 
                      your premium headphone experience by reproducing the balanced depth and precision 
                      of studio-quality sound.`,
        link: "",
        img: `${imgSrc}/image-xx99-mark-two.jpg`,
        new: true,
        classList: classListPar
      },
      {
        title: "XX99 Mark I Headphones",
        description: `As the gold standard for headphones, the classic XX99 Mark I offers detailed and 
                      accurate audio reproduction for audiophiles, mixing engineers, and music aficionados 
                      alike in studios and on the go.`,
        link: "",
        img: `${imgSrc}/image-xx99-mark-one.jpg`,
        new: false,
        classList: classListImpar
      },
      {
        title: "XX99 Mark II Headphones",
        description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines 
                      your premium headphone experience by reproducing the balanced depth and precision 
                      of studio-quality sound.`,
        link: "",
        img: `${imgSrc}/image-xx59.jpg`,
        new: false,
        classList: classListPar
      },
      {
        title: "XX59 Headphones",
        description: `Enjoy your audio almost anywhere and customize it to your specific tastes with the 
                      XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant 
                      companion at home or on the move.`,
        link: "",
        img: `${imgSrc}/image-xx59.jpg`,
        new: false,
        classList: classListImpar
      }
    ]
    
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
}
