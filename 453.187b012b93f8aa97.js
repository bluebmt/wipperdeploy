"use strict";(self.webpackChunkstorefront=self.webpackChunkstorefront||[]).push([[453],{2453:(io,h,n)=>{n.r(h),n.d(h,{HomeTwoModule:()=>ao});var c=n(9808),d=n(8995),_=n(3361),r=n(6157),b=n(9646),A=n(1135),v=n(515),Z=n(5963),y=n(9300),g=n(8505),f=n(3900),B=n(5577),o=n(5e3),T=n(4098),C=n(5947),L=n(2722),w=n(7579),O=n(9602),k=n(9529),U=n(1264);function E(t,l){if(1&t&&(o.TgZ(0,"span",13),o._uU(1),o.qZA()),2&t){const e=o.oxw(2).$implicit;o.xp6(1),o.Oqu(e.offer)}}function S(t,l){if(1&t&&(o.TgZ(0,"a",6),o._UZ(1,"span",7),o._UZ(2,"span",8),o.YNc(3,E,2,1,"span",9),o._UZ(4,"span",10),o._UZ(5,"span",11),o.TgZ(6,"span",12),o._uU(7),o.qZA(),o.qZA()),2&t){const e=o.oxw().$implicit;o.Q6J("routerLink",e.url),o.xp6(1),o.Udp("background-image","url("+e.desktopImage+")"),o.xp6(1),o.Udp("background-image","url("+e.mobileImage+")"),o.xp6(1),o.Q6J("ngIf",e.offer),o.xp6(1),o.Q6J("innerHTML",e.title,o.oJD),o.xp6(1),o.Q6J("innerHTML",e.details,o.oJD),o.xp6(2),o.Oqu(e.buttonLabel)}}function x(t,l){1&t&&o.YNc(0,S,8,9,"ng-template",5)}function D(t,l){if(1&t&&(o.TgZ(0,"div",2),o.TgZ(1,"owl-carousel-o",3),o.YNc(2,x,1,0,void 0,4),o.qZA(),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("options",e.carouselOptions),o.xp6(1),o.Q6J("ngForOf",e.slides)}}let $=(()=>{class t{constructor(e,s){this.language=e,this.cd=s,this.destroy$=new w.x,this.showCarousel=!0,this.slides=[],this.classBlock=!0,this.classBlockSlideshow=!0}ngOnInit(){this.initOptions(),this.language.directionChange$.pipe((0,f.w)(()=>(0,Z.H)(250)),(0,L.R)(this.destroy$)).subscribe(()=>{this.initOptions(),this.showCarousel=!1,this.cd.detectChanges(),this.showCarousel=!0})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}initOptions(){this.carouselOptions={items:1,dots:!0,loop:!0,rtl:this.language.isRTL()}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(O.T),o.Y36(o.sBO))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-block-slideshow"]],hostVars:4,hostBindings:function(e,s){2&e&&o.ekj("block",s.classBlock)("block-slideshow",s.classBlockSlideshow)},inputs:{slides:"slides"},decls:2,vars:1,consts:[[1,"container"],["class","block-slideshow__carousel",4,"ngIf"],[1,"block-slideshow__carousel"],["appOwlPreventClick","",3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[1,"block-slideshow__item",3,"routerLink"],[1,"block-slideshow__item-image","block-slideshow__item-image--desktop","reflect-rtl"],[1,"block-slideshow__item-image","block-slideshow__item-image--mobile","reflect-rtl"],["class","block-slideshow__item-offer",4,"ngIf"],[1,"block-slideshow__item-title",3,"innerHTML"],[1,"block-slideshow__item-details",3,"innerHTML"],[1,"block-slideshow__item-button"],[1,"block-slideshow__item-offer"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0),o.YNc(1,D,3,2,"div",1),o.qZA()),2&e&&(o.xp6(1),o.Q6J("ngIf",s.showCarousel))},directives:[c.O5,k.Fy,U.p,c.sg,k.Mp,r.yS],styles:[""]}),t})();var M=n(9886),N=n(772);function P(t,l){if(1&t&&(o.TgZ(0,"div",3),o.TgZ(1,"div",6),o.TgZ(2,"div",7),o._uU(3),o._UZ(4,"app-decor",8),o.qZA(),o.qZA(),o.qZA()),2&t){const e=o.oxw();o.xp6(3),o.hij(" ",e.blockTitle," ")}}function J(t,l){if(1&t&&(o.TgZ(0,"li"),o.TgZ(1,"a",17),o._uU(2),o.qZA(),o.qZA()),2&t){const e=l.$implicit,s=o.oxw(2);o.xp6(1),o.Q6J("routerLink",s.url.category(e)),o.xp6(1),o.Oqu(e.name)}}function H(t,l){if(1&t&&(o.TgZ(0,"div",9),o.TgZ(1,"div",10),o.TgZ(2,"div",11),o.TgZ(3,"div",12),o.TgZ(4,"a",13),o._UZ(5,"img",14),o.qZA(),o.qZA(),o.TgZ(6,"div",15),o.TgZ(7,"div",16),o.TgZ(8,"a",17),o._uU(9),o.qZA(),o.qZA(),o.TgZ(10,"ul",18),o.YNc(11,J,3,2,"li",19),o.qZA(),o.TgZ(12,"div",20),o.TgZ(13,"a",21),o._uU(14),o.ALo(15,"translate"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t){const e=l.$implicit,s=o.oxw();o.xp6(4),o.Q6J("routerLink",s.url.category(e)),o.xp6(1),o.Q6J("src",e.image,o.LSH),o.xp6(3),o.Q6J("routerLink",s.url.category(e)),o.xp6(1),o.Oqu(e.name),o.xp6(2),o.Q6J("ngForOf",s.children[e.slug]),o.xp6(2),o.Q6J("routerLink",s.url.category(e)),o.xp6(1),o.hij(" ",o.lcZ(15,7,"LINK_SHOP_ALL")," ")}}let R=(()=>{class t{constructor(e){this.url=e,this.children={},this.blockTitle="",this.categories=[],this.classBlock=!0,this.classBlockCategories=!0}ngOnChanges(e){e.categories&&(this.children={},this.categories.forEach(s=>{var a;this.children[s.slug]=(null===(a=s.children)||void 0===a?void 0:a.slice(0,5))||[]}))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(M.i))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-block-categories"]],hostVars:4,hostBindings:function(e,s){2&e&&o.ekj("block",s.classBlock)("block-categories",s.classBlockCategories)},inputs:{blockTitle:"blockTitle",categories:"categories"},features:[o.TTD],decls:6,vars:2,consts:[["class","container",4,"ngIf"],[1,"block-categories__body"],["type","bottom",1,"block-categories__body-decor"],[1,"container"],[1,"block-categories__list"],["class","block-categories__item category-card category-card--layout--classic",4,"ngFor","ngForOf"],[1,"block-categories__header"],[1,"block-categories__title"],["type","center",1,"block-categories__title-decor"],[1,"block-categories__item","category-card","category-card--layout--classic"],[1,"category-card__body"],[1,"category-card__content"],[1,"category-card__image","image","image--type--category"],[1,"image__body",3,"routerLink"],["alt","",1,"image__tag",3,"src"],[1,"category-card__info"],[1,"category-card__name"],[3,"routerLink"],[1,"category-card__children"],[4,"ngFor","ngForOf"],[1,"category-card__actions"],[1,"category-card__link",3,"routerLink"]],template:function(e,s){1&e&&(o.YNc(0,P,5,1,"div",0),o.TgZ(1,"div",1),o._UZ(2,"app-decor",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.YNc(5,H,16,9,"div",5),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.Q6J("ngIf",s.blockTitle),o.xp6(5),o.Q6J("ngForOf",s.categories))},directives:[c.O5,N.O,c.sg,r.yS],pipes:[d.X$],styles:[""]}),t})();var F=n(2548);let I=(()=>{class t{constructor(){this.classBlock=!0,this.classBlockBanners=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-block-banners"]],hostVars:4,hostBindings:function(e,s){2&e&&o.ekj("block",s.classBlock)("block-banners",s.classBlockBanners)},decls:28,vars:18,consts:[[1,"container"],[1,"block-banners__list"],["routerLink","/",1,"block-banners__item","block-banners__item--style--one"],[1,"block-banners__item-image"],["src","assets/images/banners/banner1.jpg","alt","",1,"reflect-rtl"],[1,"block-banners__item-image","block-banners__item-image--blur"],[1,"block-banners__item-title"],[1,"block-banners__item-details",3,"innerHTML"],[1,"block-banners__item-button","btn","btn-primary","btn-sm"],["routerLink","/",1,"block-banners__item","block-banners__item--style--two"],["src","assets/images/banners/banner2.jpg","alt","",1,"reflect-rtl"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"a",2),o.TgZ(3,"span",3),o._UZ(4,"img",4),o.qZA(),o.TgZ(5,"span",5),o._UZ(6,"img",4),o.qZA(),o.TgZ(7,"span",6),o._uU(8),o.ALo(9,"translate"),o.qZA(),o._UZ(10,"span",7),o.ALo(11,"translate"),o.TgZ(12,"span",8),o._uU(13),o.ALo(14,"translate"),o.qZA(),o.qZA(),o.TgZ(15,"a",9),o.TgZ(16,"span",3),o._UZ(17,"img",10),o.qZA(),o.TgZ(18,"span",5),o._UZ(19,"img",10),o.qZA(),o.TgZ(20,"span",6),o._uU(21),o.ALo(22,"translate"),o.qZA(),o._UZ(23,"span",7),o.ALo(24,"translate"),o.TgZ(25,"span",8),o._uU(26),o.ALo(27,"translate"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(8),o.Oqu(o.lcZ(9,6,"TEXT_BANNER_ONE_TITLE")),o.xp6(2),o.Q6J("innerHTML",o.lcZ(11,8,"TEXT_BANNER_ONE_SUBTITLE"),o.oJD),o.xp6(3),o.Oqu(o.lcZ(14,10,"TEXT_BANNER_ONE_BUTTON")),o.xp6(8),o.Oqu(o.lcZ(22,12,"TEXT_BANNER_TWO_TITLE")),o.xp6(2),o.Q6J("innerHTML",o.lcZ(24,14,"TEXT_BANNER_TWO_SUBTITLE"),o.oJD),o.xp6(3),o.Oqu(o.lcZ(27,16,"TEXT_BANNER_TWO_BUTTON")))},directives:[r.yS],pipes:[d.X$],styles:[""]}),t})();var Q=n(553),j=n(8849),q=n(4442),X=n(433);const W=function(){return{url:"/shop",desktopImage:"assets/images/finder.jpg",mobileImage:"assets/images/finder.jpg",offer:"30% OFF",title:"When Buying Parts <br>With Installation",details:"Installation of parts in the services of <br>our partners.",buttonLabel:"Shop Now"}},G=function(){return{url:"/shop",desktopImage:"assets/images/slides/slide-2.jpg",mobileImage:"assets/images/slides/slide-2-mobile.jpg",title:"Not enough <br>spare parts?",details:"We have everything you need \u2013 replacement parts, <br>performance parts, accessories, oil & fluids, <br>tools and much more...",buttonLabel:"Shop Now"}},K=function(){return{url:"/shop",desktopImage:"assets/images/slides/slide-1.jpg",mobileImage:"assets/images/slides/slide-1-mobile.jpg",offer:"30% OFF",title:"Big Choice Of <br>Wheel Tires",details:"Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.",buttonLabel:"Shop Now"}},u=function(t,l,e){return[t,l,e]},i=function(){return[]},oo=function(){return{label:"Special Offers",url:"/blog"}},eo=function(){return{label:"New Arrivals",url:"/blog"}},to=function(){return{label:"Reviews",url:"/blog"}},m=function(t,l){return{title:t,products:l}},so=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(e,s){this.shopApi=e,this.blogApi=s,this.brands$=(0,b.of)([]),this.popularCategories$=(0,b.of)([])}ngOnInit(){this.brands$=this.shopApi.getBrands({limit:16}),this.popularCategories$=this.shopApi.getCategories({slugs:["headlights-lighting","fuel-system","body-parts","interior-parts","tires-wheels","engine-drivetrain"],depth:1}),this.featuredProducts=this.makeCarouselData([{label:"All",products$:this.shopApi.getFeaturedProducts(null,8)},{label:"Power Tools",products$:this.shopApi.getFeaturedProducts("power-tools",8)},{label:"Hand Tools",products$:this.shopApi.getFeaturedProducts("hand-tools",8)},{label:"Plumbing",products$:this.shopApi.getFeaturedProducts("plumbing",8)}]),this.blockSale=this.makeDeferredData(this.shopApi.getSpecialOffers(8)),this.latestPosts=this.makeDeferredData(this.blogApi.getLatestPosts(8)),this.columnTopRated$=this.shopApi.getTopRatedProducts(null,3),this.columnSpecialOffers$=this.shopApi.getSpecialOffers(3),this.columnBestsellers$=this.shopApi.getPopularProducts(null,3)}groupChange(e,s){e.subject$.next(s)}makeCarouselData(e){const s=new A.X(e[0]),a={subject$:s,products$:s.pipe((0,y.h)(p=>null!==p),(0,g.b)(()=>a.loading=!0),(0,f.w)(p=>p.products$),(0,g.b)(()=>a.loading=!1)),loading:!0,groups:e};return a}makeDeferredData(e){const s={loading:!0,data$:v.E};return s.data$=(0,Z.H)(0).pipe((0,B.z)(()=>e.pipe((0,g.b)(()=>s.loading=!1)))),s}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(T.MR),o.Y36(T.Uc))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-page-two"]],decls:29,vars:75,consts:[["layout","divider-xs"],[3,"slides"],["layout","divider-nl"],[3,"blockTitle","categories"],["layout","grid-5",3,"blockTitle","rows","loading","products","groups","changeGroup"],[3,"loading","products"],["layout","list",3,"label","loading","posts","links"],["layout","divider-nl",1,"d-xl-block","d-none"],[3,"columns"],["layout","bottom-strip"]],template:function(e,s){1&e&&(o._UZ(0,"app-block-space",0),o._UZ(1,"app-block-slideshow",1),o._UZ(2,"app-block-space",2),o._UZ(3,"app-block-categories",3),o.ALo(4,"translate"),o.ALo(5,"async"),o._UZ(6,"app-block-space",2),o.TgZ(7,"app-block-products-carousel",4),o.NdJ("changeGroup",function(p){return s.groupChange(s.featuredProducts,p)}),o.ALo(8,"translate"),o.ALo(9,"async"),o.qZA(),o._UZ(10,"app-block-space",2),o._UZ(11,"app-block-banners"),o._UZ(12,"app-block-space",2),o._UZ(13,"app-block-sale",5),o.ALo(14,"async"),o._UZ(15,"app-block-space",2),o._UZ(16,"app-block-posts-carousel",6),o.ALo(17,"translate"),o.ALo(18,"async"),o._UZ(19,"app-block-space",7),o._UZ(20,"app-block-products-columns",8),o.ALo(21,"translate"),o.ALo(22,"async"),o.ALo(23,"translate"),o.ALo(24,"async"),o.ALo(25,"translate"),o.ALo(26,"async"),o._UZ(27,"app-block-space",2),o._UZ(28,"app-block-features",9)),2&e&&(o.xp6(1),o.Q6J("slides",o.kEZ(44,u,o.DdM(41,W),o.DdM(42,G),o.DdM(43,K))),o.xp6(2),o.Q6J("blockTitle",o.lcZ(4,15,"HEADER_POPULAR_CATEGORIES"))("categories",o.lcZ(5,17,s.popularCategories$)||o.DdM(48,i)),o.xp6(4),o.Q6J("blockTitle",o.lcZ(8,19,"HEADER_FEATURED_PRODUCTS"))("rows",1)("loading",s.featuredProducts.loading)("products",o.lcZ(9,21,s.featuredProducts.products$)||o.DdM(49,i))("groups",s.featuredProducts.groups),o.xp6(6),o.Q6J("loading",s.blockSale.loading)("products",o.lcZ(14,23,s.blockSale.data$)||o.DdM(50,i)),o.xp6(3),o.Q6J("label",o.lcZ(17,25,"HEADER_LATEST_NEWS"))("loading",s.latestPosts.loading)("posts",o.lcZ(18,27,s.latestPosts.data$)||o.DdM(51,i))("links",o.kEZ(55,u,o.DdM(52,oo),o.DdM(53,eo),o.DdM(54,to))),o.xp6(4),o.Q6J("columns",o.kEZ(71,u,o.WLB(60,m,o.lcZ(21,29,"HEADER_TOP_RATED"),o.lcZ(22,31,s.columnTopRated$)||o.DdM(59,i)),o.WLB(64,m,o.lcZ(23,33,"HEADER_SPECIAL_OFFERS"),o.lcZ(24,35,s.columnSpecialOffers$)||o.DdM(63,i)),o.WLB(68,m,o.lcZ(25,37,"HEADER_BESTSELLERS"),o.lcZ(26,39,s.columnBestsellers$)||o.DdM(67,i)))))},directives:[C.r,$,R,F.z,I,Q.H,j.Y,q.B,X.Q],pipes:[d.X$,c.Ov],styles:[""]}),t})()}];let lo=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(so)],r.Bz]}),t})();var no=n(6803);let ao=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,d.aw.forChild(),_.v,lo,no.m]]}),t})()}}]);