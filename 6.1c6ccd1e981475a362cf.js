(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{fYYf:function(t,e,n){"use strict";n.r(e),n.d(e,"ProductsForCategoryModule",function(){return b});var i=n("ofXK"),a=n("PCNd"),o=n("tyNb"),r=n("fXoL"),c=n("Cnwi"),s=n("kWhK"),d=n("Pt52");function p(t,e){1&t&&(r.Lb(0,"p",8),r.dc(1," New Product "),r.Kb())}let u=(()=>{class t{constructor(){this.productData={title:"",description:"",link:"",img:"",new:!1,classList:"product-card"},this.dataBtn={text:"See product",link:this.productData.link,class:["btn"]}}ngOnInit(){console.log(this.productData)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-full-product-card"]],inputs:{productData:"productData"},decls:10,vars:6,consts:[[3,"ngClass"],[1,"product-card-image"],["alt","Product image",1,"product-card-image__image",3,"src"],[1,"product-card-description"],["class","product-card-description__new-stock",4,"ngIf"],[1,"product-card-description__title"],[1,"product-card-description__description"],[3,"dataBtn"],[1,"product-card-description__new-stock"]],template:function(t,e){1&t&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Jb(2,"img",2),r.Kb(),r.Lb(3,"div",3),r.cc(4,p,2,0,"p",4),r.Lb(5,"h3",5),r.dc(6),r.Kb(),r.Lb(7,"p",6),r.dc(8),r.Kb(),r.Jb(9,"app-button-link",7),r.Kb(),r.Kb()),2&t&&(r.Ub("ngClass",e.productData.classList),r.zb(2),r.Ub("src",e.productData.img,r.Zb),r.zb(2),r.Ub("ngIf",e.productData.new),r.zb(2),r.fc(" ",e.productData.title," "),r.zb(2),r.fc(" ",e.productData.description," "),r.zb(1),r.Ub("dataBtn",e.dataBtn))},directives:[i.h,i.j,d.a],styles:[".product-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.product-card--style_reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.product-card-image[_ngcontent-%COMP%]{width:48%}.product-card-image__image[_ngcontent-%COMP%]{width:100%;border-radius:10px}.product-card-description[_ngcontent-%COMP%]{width:38%}.product-card-description__new-stock[_ngcontent-%COMP%]{font-size:.9rem;text-transform:uppercase;letter-spacing:.6rem;color:var(--accent)}.product-card-description__title[_ngcontent-%COMP%]{width:80%;font-size:1.8rem;letter-spacing:0;text-transform:uppercase;color:var(--black)}.product-card-description__description[_ngcontent-%COMP%]{margin-bottom:2rem;font-size:.9rem;line-height:1.5rem}@media screen and (max-width:1200px){.product-card[_ngcontent-%COMP%]{flex-direction:column}.product-card-image[_ngcontent-%COMP%]{width:100%}.product-card-description[_ngcontent-%COMP%]{display:flex;width:100%;margin-top:1rem;flex-direction:column;align-items:center;text-align:center}.product-card-description__title[_ngcontent-%COMP%]{width:50%;margin:.5rem}.product-card-description__description[_ngcontent-%COMP%]{width:80%}}@media screen and (max-width:768px){.product-card-image[_ngcontent-%COMP%]{width:90%}.product-card-description__title[_ngcontent-%COMP%]{width:70%}}"]}),t})();var l=n("faXT");function g(t,e){if(1&t&&r.Jb(0,"app-full-product-card",5),2&t){const t=e.$implicit,n=r.Tb();r.Ub("productData",t)("ngsReveal",n.ngsRevealOptions)}}const h=[{path:"",component:(()=>{class t{constructor(t){this.activatedRoute=t,this.categories={headphones:"headphones",earphones:"earphones",speakers:"speakers"},this.products=[{title:"",description:"",link:"",img:"",new:!1,classList:[]}],this.imgRoute="assets/images/",this.ngsRevealOptions={delay:300,duration:500,easing:"ease-in-out"}}ngOnInit(){this.category=this.activatedRoute.snapshot.params.category,this.activatedRoute.params.subscribe(t=>{this.category=t.category,this.loadProducts()})}loadProducts(){let t="";this.category.toLowerCase()==this.categories.headphones||this.category.toLocaleLowerCase()==this.categories.earphones||this.category.toLowerCase(),t=this.imgRoute+"category-headphones/"+this.getResponsiveScreen();let e=["product-card"],n=["product-card","product-card--style_reverse"];this.products=[{title:"XX99 Mark II Headphones",description:"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines \n                      your premium headphone experience by reproducing the balanced depth and precision \n                      of studio-quality sound.",link:"",img:`${t}/image-xx99-mark-two.jpg`,new:!0,classList:e},{title:"XX99 Mark I Headphones",description:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and \n                      accurate audio reproduction for audiophiles, mixing engineers, and music aficionados \n                      alike in studios and on the go.",link:"",img:`${t}/image-xx99-mark-one.jpg`,new:!1,classList:n},{title:"XX99 Mark II Headphones",description:"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines \n                      your premium headphone experience by reproducing the balanced depth and precision \n                      of studio-quality sound.",link:"",img:`${t}/image-xx59.jpg`,new:!1,classList:e},{title:"XX59 Headphones",description:"Enjoy your audio almost anywhere and customize it to your specific tastes with the \n                      XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant \n                      companion at home or on the move.",link:"",img:`${t}/image-xx59.jpg`,new:!1,classList:n}]}getResponsiveScreen(){return window.matchMedia?window.matchMedia("(max-width: 768px)").matches?"mobile":window.matchMedia("(max-width: 1200px)").matches?"tablet":"desktop":(console.log("match media don't supported"),null)}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(o.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-products-for-category"]],decls:8,vars:2,consts:[[1,"header-container"],[1,"category-product"],[1,"category-product__title"],[1,"main-container"],[3,"productData","ngsReveal",4,"ngFor","ngForOf"],[3,"productData","ngsReveal"]],template:function(t,e){1&t&&(r.Lb(0,"div",0),r.Lb(1,"header",1),r.Lb(2,"h1",2),r.dc(3),r.Kb(),r.Kb(),r.Kb(),r.Lb(4,"main",3),r.cc(5,g,1,2,"app-full-product-card",4),r.Jb(6,"app-category-nav"),r.Jb(7,"app-mission"),r.Kb()),2&t&&(r.zb(3),r.ec(e.category),r.zb(2),r.Ub("ngForOf",e.products))},directives:[i.i,c.a,s.a,u,l.a],styles:['.header-container[_ngcontent-%COMP%]:after{content:"";height:344px;position:absolute;top:0;left:0;right:0;z-index:-1;background:var(--black)}.category-product[_ngcontent-%COMP%]{display:flex;height:250px;justify-content:center;align-items:center}.category-product__title[_ngcontent-%COMP%]{width:100%;font-size:2.4rem;text-transform:uppercase;text-align:center;letter-spacing:.1rem;color:var(--white)}.main-container[_ngcontent-%COMP%]{display:flex;padding:8rem 0;flex-direction:column;gap:8rem}@media screen and (max-width:768px){.header-container[_ngcontent-%COMP%]:after{height:200px}.category-product[_ngcontent-%COMP%]{height:110px}.category-product__title[_ngcontent-%COMP%]{font-size:1.8rem}.main-container[_ngcontent-%COMP%]{padding:5rem 0;gap:7rem}}']}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({imports:[[o.d.forChild(h)],o.d]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({imports:[[i.b,m,a.a,o.d,l.b]]}),t})()}}]);