import item from './itemProduct.js'
/**For DisplayItem DEPING IN VALUU OF TOOL pAR*/
const NumberOfP = document.querySelector("#ShowProductNumber");
const ShortByP = document.querySelector("#ShortBy");
const ParentItemForProductMenu = document.querySelector("#SectionItemProduct .SectionItemProductItems");
const ParentButton = document.querySelector("#PageNumber");
    /*class for display Product**/
class DisplayItem{
  constructor(NumberOfPrudct,ShortBy,ParentItem,Products,ParentButton){
    this.NumberOfPrudct = NumberOfPrudct;
    this.ShortBy =ShortBy;
    this.ParentItem = ParentItem;
    this.ParentButton = ParentButton;
    this.Products = Products;
    this.DisplayItemOnPaGE(this.NumberOfPrudct.value,0);
    this.AddEventP();
    this.calculPage();
    this.eventToNumberofPage();
  }
  /*calcule how many page should exist**/
   calculPage(){
    let numberofPage = Math.ceil(this.Products.length / this.NumberOfPrudct.value);
    this.ParentButton.innerHTML =``;
    for(let i =0;i<numberofPage;i++){
      this.ParentButton.innerHTML +=`<li>${i+1}</li>`;
    }

  }
  /*add addEventListener for SHow Number of product**/
    AddEventP(){
      this.NumberOfPrudct.addEventListener("change",()=>{
        this.calculPage();
        this.DisplayItemOnPaGE(this.NumberOfPrudct.value,0);
        this.eventToNumberofPage();
      })
    }
    /*add eventListinner to page Number*/

    eventToNumberofPage(){

        for(let i =0;i<this.ParentButton.children.length;i++){
          this.ParentButton.children[i].addEventListener("click",()=>{
            this.DisplayItemOnPaGE(this.NumberOfPrudct.value,i*this.NumberOfPrudct.value)
          })
        }
    }
  /*Display ITEM on Page*/
  DisplayItemOnPaGE(Number,lastProductIndex){
    this.ParentItem.innerHTML =``;
    for(let i =0;i<Number && i+lastProductIndex<this.Products.length;i++){
      this.ParentItem.innerHTML +=`<item-show image="${this.Products[i+lastProductIndex].Info.imgUrl}">
      <h3 slot="name">${this.Products[i+lastProductIndex].nameProduct}</h3>
      <span slot="prix">${this.Products[i+lastProductIndex].Price}</span>
      </item-show>`;
    }
  }

}
    /*FIN cLASS */
import * as texst from './JsonObject/JsonObject.js'

const DisplayItemC = new DisplayItem(NumberOfP,ShortByP,ParentItemForProductMenu,texst.default,ParentButton);
