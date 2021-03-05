
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

}
.ItemProduct .ItemProductImage .Img{
  height:320px;
  width:100%;
  background:var(--main-color);
    position:relative;
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
}
.ItemProduct .ItemProductImage .ToolsItemProduct ul li span:nth-of-type(2){
  box-sizing: border-box;
  background:yellow;
  height:30px;
  width:150px;
  vertical-align: middle;
  text-transform:uppercase;
  padding:0em 0.3em;
  overflow: hidden;
  white-space:nowrap;
  display:none;
  animation:animationButton .5s;

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
</style>

<div class="ItemProduct">
  <div class="ItemProductImage">
    <div class="Img">
          <img src="" alt="">

        <div class="ToolsItemProduct">
          <ul>
            <li><span></span> <span>add to cart</span></li>
            <li><span></span> <span>add to favorite</span> </li>
            <li><span></span> <span>Refrench</span> </li>
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
    <h3>Wonderful Women's T-Shirt</h3>
    <span>$200</span>
  </div>
</div>
`;

export default class item extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(ItemProduct.content.cloneNode(true));

  }
}
window.customElements.define('item-show',item);


const Postion = document.querySelector('.RecommendedProduct');
/************/

/*For display item depending on type**/
