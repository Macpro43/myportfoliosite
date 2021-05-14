import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
body{
  background: ${themes.light.backgroundColor};  
@media (prefers-color-scheme:dark){
  background:${themes.dark.backgroundColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
}

@media only (min-width: 768px){

.my-portrait{

position:absolute;
right:0;
bottom:0;
width:56%;
z-index:0;

}

}

@media (min-width: 320px) {


  .my-portrait{

position:absolute;
right:0px;
bottom:0;
width:65%;
z-index:0;
M

}




}



.index-company-section{
  margin-top:74px;
}

.index-company-title{
font-size:18px;
font-weight:600;  
}



.index-company-title span{
font-size:18px;
font-weight:300;  
}


.work-section-1{
margin-top: 24px;  
display:grid;
grid-template-columns: 1fr;
gap:24px;

}

.work-section-2{
margin-top: 24px;  
display:grid;
grid-template-columns: 1fr 1fr;
gap:24px;

}

.work-section-3-1{
margin-top: 24px;  
display:grid;
grid-template-columns: 3fr 2fr;
gap:24px;

}

//Index Page images  

#MR-index-img{
  background: lightblue url("/images/homepage/colorist-app-index.jpg") no-repeat  center;
  background-size:100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#Auction-Rebrand-index-img{
  background: lightblue url("/images/homepage/Auction-rebrand-index.png") no-repeat  center ;
  background-size:100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}


#Auction-TPS-index-img{
  background: lightblue url("/images/homepage/TPS-index-long.png") no-repeat center;
  background-size:100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#Ten-x-offerselect-index-img{

  background: lightblue url("/images/homepage/Offer-select-long.png") no-repeat  center;

  background-size:100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


}


#Auction-index-android-app-img{

  background: lightblue url("/images/homepage/Auction-android-long.png") no-repeat center;

  background-size:60%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


}

#chimecard-index-img{

  background: lightblue url("/images/homepage/chimecard-index-long.png") no-repeat  center;

  background-size:100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

#Movoto-index-img{

  background: lightblue url("/images/homepage/movoto-index-long.png") no-repeat center;
  background-size:100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}




.project-container{
  background:#fff;
  height: 300px;
  box-shadow: 0px 45px 100px rgba(0, 0, 0, .4);
  cursor: pointer;
  border-radius: 12px;
  transition: .10s ease-in-out;
  position:relative;
  overflow:hidden;



.view-project{
  font-size:20;
  position:absolute;
  color:#fff;
  right:120px;
  bottom:-30px;
  font-weight:900;
}

.view-project-arrow{
  position:absolute;
  width:40px;
  height:40px;
  right:-45px;
  bottom:43%;
  transition: .10s ease-in-out;
    z-index:3;
}

.hover-overlay{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:#000;
  z-index:2;
  opacity:0;
  transition: .10s ease-in-out;
  border-radius: 12px;
}





}

.project-container:hover{

  height: 300px;
  box-shadow: 
  0px 12px 32px rgba(0, 0, 0, .2);

  .view-project{
  position:absolute;
  right:120px;
  bottom:48%;
  z-index:4;
}

.view-project-arrow{
  position:absolute;
  right:54px;


}

.hover-overlay{

  width:100%;
  height:100%;
  position:absolute;
  top:0;  
  left:0;
  background-color:#FF2565;
  z-index:2;
  opacity:.8;
}




}

.project-container{
  position:relative;
}

.index-project-info{
  position:absolute;
  bottom: 32px;
  left: 32px;
  z-index:4;
}

.index-project-info h2{
  color:#fff;
  font-weight:900;
  font-size:16px;
  background-color:#000;
  width:75%;
  padding:8px 1px 1px 8px;

}

.index-project-info p{
color:#fff;
background-color:#000;
font-size:30px;
font-weight:300;
padding:4px 4px 4px 8px;
}





/* --   ----- ----  Product Style Sheet ---- - - --- - */



.backHome{
  font-size:14px;
  padding-top:62px;
  display:flex;
  align-items:center;
  color:#ccc;

}
.backArrow{
width:24px;
margin-right:12px;
}

.backHome:hover{

color:#333;



.backArrow{
width:24px;
margin-right:12px;
}



}




ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  font-size:18px;
}
ol li {
  counter-increment: my-awesome-counter;
 padding-top:24px;
}
ol li::before {
  content: counter(my-awesome-counter) ". ";
  color: #000;
  font-weight: 900;
  font-size:24px;
 
}

ul {
  list-style-type: disc;
  padding-left: 32px;
}


img{
width:100%;

}

.one-image-layout{
 
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  height:100%;
}

.two-image-layout{
  max-width:960px;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  height:100%;

  gap:24px;
}

.two-three-image-layout{
  max-width:1024px;
  display:grid;
  grid-template-columns: 2fr 4fr;
  height:100%;

  gap:32px;
}

.three-two-image-layout{
  max-width:1024px;
  display:grid;
  grid-template-columns: 3fr 2fr;
  height:100%;
  align-items:center;
  gap:32px;
}


.2fr-3fr-image-layout{}


.content-space-80px{
height:80px;

}





.project-header{
max-width:1024px;
display:grid;
grid-template-columns: 2fr 3fr;
gap:24px;

padding: 140px 0px 60px 0px;

}

.project-title{

}


.project-title h2{
font-size:16px;
font-weight:800;
color: darkgray;

}

.project-title p{
padding-top:12px;  
font-size:28px;
font-weight:300;
}


.project-blurb{
  line-height: 1.2;

}

.project-role{
  padding-top:16px;  
}

.project-role span{
font-weight:800;

}


.project-hero-image{
height:500px;

}

#auction-product-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/Auction_rebrand-product-hero.png") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}


#colorsit-app-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/madison-reed/colorist-app-header.jpg") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#auction-tps-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/TPS-index-product-hero.jpg") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#offer-select-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/Offer-select-product-hero.jpg") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}


#auction-android-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/Auction-android-product-hero.jpg") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#chimecard-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/chimecard-index-long.jpg") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#movoto-hero{
  background-size:100%;
  background: lightblue url("/images/productpages/movoto-product-hero.jpg") ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}



.sectionTitle{
text-align:center;

}




.the-problem{
display:grid;
grid-template-columns: 2fr 3fr;

}




.sectionBlurb{
width:50%;
margin-right: auto;
margin-left: auto;
line-height: 1.2;
}



`
