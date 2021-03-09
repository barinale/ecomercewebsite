
import * as ProductsJs from './JsonObject/JsonObject.js'

const ItemProduct = document.createElement('template');
ItemProduct.innerHTML =`
<style>
.ItemProduct{
  width:250px;
  background:#EEEEEE;
  display:inline-block;
  margin-top:10px;
}
.ItemProduct .ItemProductImage{

   padding:0.7em;
   height:320px;
    position:relative;
}
.ItemProduct .ItemProductImage .Img{

  width:100%;
position:relative;
height:320px;
}

.ItemProduct .ItemProductImage .Img img{
  width:100%;
  height:100%;
}
.ItemProduct .ItemProductImage .ToolsItemProduct ul{
  list-style:none;
  position:absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  margin:0;
  padding:0;}
.ItemProduct .ItemProductImage .ToolsItemProduct ul li{
      display:table;
      margin:10px 0;
  }
  .ItemProduct .ItemProductImage .ToolsItemProduct ul li span{
  display: table-cell;
  }
.ItemProduct .ItemProductImage .ToolsItemProduct ul li span:nth-of-type(1){
  height:30px;
  width:30px;
  background:black;
  margin:10px;
  padding:0.5em;
  box-sizing: border-box;
}
.ItemProduct .ItemProductImage .ToolsItemProduct ul li span:nth-of-type(1) svg{
width:20px;
color:white;
}
.ItemProduct .ItemProductImage .ToolsItemProduct ul li span:nth-of-type(2){
  box-sizing: border-box;
  background:black;
  height:30px;
  width:150px;
  vertical-align: middle;
  text-transform:uppercase;
  padding:0em 0.3em;
  overflow: hidden;
  white-space:nowrap;
  display:none;
  animation:animationButton .5s;
  color:white;
  animation-fill-mode:forwards;
}
.ItemProduct .ItemProductImage .ToolsItemProduct ul li span:nth-of-type(1):hover +
span:nth-of-type(2){
    display:table-cell;
}

@keyframes animationButton {
  0%{opacity:0;}
  100%{opacity:1;}
}
.ItemProduct .ItemProductImage .QuiceView{
  position:absolute;
  left:50%;
  transform: translateX(-50%);
  background:black;
  padding:0.2em;
  border-radius:2px;
  bottom:0;
}
.ItemProduct .ItemProductImage .QuiceView span{
  color:white;
}
.ItemProduct .ItemProductInfo{
  text-align:center;
}
.ItemProduct .ItemProductInfo h3{
  font-size:0.8em;
}
#ShowPanelQk{
  display:none;
  position:fixed;
  height:600px;
  width:100%;
  background:red;
  z-index:99;
}
</style>

<div class="ItemProduct">
  <div class="ItemProductImage">
    <div class="Img">
        <img src=""/>

        <div class="ToolsItemProduct">
          <ul>
              <li id="AddToItem"><span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.64 93.5"><defs><style>.cls-1{fill:#fff;}</style></defs><title>IconShopping</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_3" data-name="Layer 3"><path class="cls-1" d="M102.41,67.12c.62,1.06.64,2.61,0,4.78l-8,39c-.28,1.89-1.4,3-3.56,3.57l-66,7c-.1,0-2.49.3-3.4,1.86a3.08,3.08,0,0,0,0,2.84c1.58,3.7,6.9,2.46,7.54,2.3l61.66-3L92.36,128l-1.74,3.48c-4.5.26-59.49,3.46-65.64,3a10.23,10.23,0,0,1-9.54-8.57c-.47-3.25,2.86-7.58,2.9-7.62l.16-.21L1.63,65.5H99.88A3.81,3.81,0,0,1,102.41,67.12ZM88.7,93.92,93.06,74H14.76l6.18,19.57v.33h.11l6,19.14,58.4-6,.36,0Z" transform="translate(-0.25 -64.5)"/><polygon class="cls-1" points="88.38 25.4 88.38 29.4 87.44 29.4 88.31 25.4 88.38 25.4"/><polygon class="cls-1" points="88.31 25.4 87.44 29.4 69.93 29.4 69.93 25.4 88.31 25.4"/><ellipse class="cls-1" cx="80.19" cy="84" rx="10.5" ry="9.5"/><polygon class="cls-1" points="69.93 43.08 69.93 43.79 65.93 43.79 65.93 43.49 69.93 43.08"/><polygon class="cls-1" points="69.93 29.4 69.93 43.08 65.93 43.49 65.93 29.4 69.93 29.4"/><rect class="cls-1" x="65.93" y="25.4" width="4" height="4"/><rect class="cls-1" x="65.93" y="10.5" width="4" height="14.9"/><rect class="cls-1" x="65.93" y="10" width="4" height="0.5"/><polygon class="cls-1" points="65.93 25.4 65.93 29.4 43.64 29.4 43.52 25.4 65.93 25.4"/><polygon class="cls-1" points="44.16 45.74 44.18 46.35 41.19 46.44 41.18 46.05 44.16 45.74"/><polygon class="cls-1" points="43.64 29.4 44.16 45.74 41.18 46.05 40.65 29.4 43.64 29.4"/><polygon class="cls-1" points="43.52 25.4 43.64 29.4 40.65 29.4 40.52 25.4 43.52 25.4"/><polygon class="cls-1" points="43.05 10.5 43.52 25.4 40.52 25.4 40.04 10.5 43.05 10.5"/><polygon class="cls-1" points="43.03 9.95 43.05 10.5 40.04 10.5 40.03 10.05 43.03 9.95"/><polygon class="cls-1" points="40.52 25.4 40.65 29.4 21.84 29.4 20.69 25.77 20.69 25.4 40.52 25.4"/><ellipse class="cls-1" cx="22.19" cy="84" rx="10.5" ry="9.5"/><polygon class="cls-1" points="27.54 47.46 41.18 46.05 41.19 46.44 44.18 46.35 44.16 45.74 65.93 43.49 65.93 43.79 69.93 43.79 69.93 43.08 84.78 41.54 87.44 29.4 88.38 29.4 88.45 29.42 85.6 42.46 85.24 42.5 26.84 48.54 20.8 29.4 21.84 29.4 27.54 47.46"/><polygon class="cls-1" points="20.69 25.77 21.84 29.4 20.8 29.4 20.69 29.07 20.69 25.77"/><polygon class="cls-1" points="20.8 29.4 20.69 29.4 20.69 29.07 20.8 29.4"/><polygon class="cls-1" points="20.69 29.07 14.51 9.5 92.81 9.5 88.45 29.42 88.38 29.4 88.38 25.4 88.31 25.4 91.57 10.5 69.93 10.5 69.93 10 65.93 10 65.93 10.5 43.05 10.5 43.03 9.95 40.03 10.05 40.04 10.5 15.87 10.5 20.69 25.77 20.69 29.07"/><path class="cls-1" d="M24.9,135.5a11.2,11.2,0,0,1-10.46-9.43c-.46-3.26,2.24-7.2,2.94-8.16L.25,64.5h99.8a4.83,4.83,0,0,1,3.22,2.11c.77,1.3.82,3.1.15,5.51l-8,39c-.33,2.25-1.75,3.69-4.36,4.38L25,122.5s-2,.24-2.65,1.37a2.13,2.13,0,0,0,.06,1.93c1.31,3.06,6.36,1.73,6.41,1.72l.11,0,62.28-3L93.52,128l-2.26,4.52-.29,0c-2.26.13-52,3.05-64,3.05C26,135.55,25.35,135.53,24.9,135.5Zm-6.56-17.19s-3.37,4.37-2.9,7.62A10.23,10.23,0,0,0,25,134.5c6.15.48,61.14-2.72,65.64-3L92.36,128l-1.68-2.53L29,128.5c-.64.16-6,1.4-7.54-2.3a3.08,3.08,0,0,1,0-2.84c.91-1.56,3.3-1.85,3.4-1.86l66-7c2.16-.58,3.28-1.68,3.56-3.57l8-39c.6-2.17.58-3.72,0-4.78a3.81,3.81,0,0,0-2.53-1.62H1.63L18.5,118.1Z" transform="translate(-0.25 -64.5)"/></g></g></svg>
              </span> <span>add to cart</span></li>
            <li><span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.5 78.5"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:10px;}</style></defs><title>iconRefrech_1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_4" data-name="Layer 4"><polygon class="cls-1" points="0 78.5 0 47.5 47 47.5 0 78.5"/><polygon class="cls-1" points="70.5 31 117.5 31 117.5 0 70.5 31"/><path class="cls-2" d="M21.5,62s15,14,41,11,44-22,44-22"/><path class="cls-2" d="M96.5,18s-13-13-40-11-45,22-45,22"/></g></g></svg>
            </span> <span>add to favorite</span> </li>
            <li><span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.01 117.02"><defs><style>.cls-1{fill:none;stroke:#f7f7f7;stroke-miterlimit:10;stroke-width:10px;}</style></defs><title>iconStart</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M5,45c.5-2.5,71.5-2.5,75-5s30.5-35.5,35-35,34,33,34,33,75.5,3.5,76,7-51.5,25.5-53,28,16.5,34.5,13,37-66.5-16.5-70-16-65.5,18.5-68,18,13.5-36.5,13-39S4.5,47.51,5,45Z"/></g></g></svg>
            </span> <span>Refrench</span> </li>
          </ul>
          <div class="QuiceView">
            <span>quick view</span>
          </div>
        </div>
    </div>
  </div>
  <div class="ItemProductInfo">
    <div class="starts">

    </div>
    <h3><slot name="name"/></h3>
    <span><slot name="prix"/></span>
  </div>
  <div id="ShowPanelQk">
   </div>
</div>
`;

export default class item extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(ItemProduct.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src=this.getAttribute("image")
  }
  connectedCallback(){
    this.shadowRoot.querySelector("#AddToItem").addEventListener("click",()=>this.AddToItem())
  }
  disconnectedCallback(){

  }
  AddToItem(){
    document.querySelector("#ForPanelItem ul").innerHTML+=`
    <li>
      <span class="image"><img src="${ProductsJs.default[this.getAttribute("NumberId")-1].Info.imgUrl}"/></span>
      <span class="NameOfProduct">${ProductsJs.default[this.getAttribute("NumberId")-1].nameProduct}</span>
      <span class="NumberOfProduct" >1</span>
      <span id="totolPrix">${ProductsJs.default[this.getAttribute("NumberId")-1].Price}</span>
    </li>
    `;
    console.log(document.body.querySelector(".NumberOfProduct").textContent);
  }

}
window.customElements.define('item-show',item);


const Postion = document.querySelector('.RecommendedProduct');
/************/

/*For display item depending on type**/
