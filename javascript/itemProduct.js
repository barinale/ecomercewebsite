console.log('test')
const ItemProduct = document.createElement('template');
ItemProduct.innerHTML =`
<style>
.ItemProduct{
  width:250px;
  height:430px;
  background:#EEEEEE;
  display:inline-block;
}
.ItemProduct .ItemProductImage{
  position:relative;
   padding:0.7em;
   height:320px;

}
.ItemProduct .ItemProductImage .Img{
  height:320px;
  width:100%;
  background:var(--main-color);
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
  height:30px;
  width:30px;
  background:yellow;
  margin:10px;
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
</style>

<div class="ItemProduct">
  <div class="ItemProductImage">
    <div class="Img">
      <img src="" alt="">
    </div>
    <div class="ToolsItemProduct">
      <ul>
        <li><span></span> </li>
        <li><span></span> </li>
        <li><span></span> </li>
      </ul>
      <div class="QuiceView">
        <span>quick view</span>
      </div>
    </div>
  </div>
  <div class="ItemProductInfo">
    <div class="starts">

    </div>
    <h3>Wonderful Women's T-Shirt</h3>
    <span>$200</span>
  </div>
</div>
`;

class item extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(ItemProduct.content.cloneNode(true));
    this.innerHTML =`<h1>hello </h1>`

  }
}
window.customElements.define('item-show',item);


const Postion = document.querySelector('.RecommendedProduct');
