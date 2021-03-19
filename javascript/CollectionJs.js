
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

    this.pageName =this.GetUrlQuery();
    this.Item = this.getItem();
    this.eventToTitleOfPage();
    this.AddEventP();
    this.calculPage();
    this.eventToNumberofPage();
    this.DisplayItemOnPaGE(this.NumberOfPrudct.value,0);
  }
  /*get how Product should show*/

  /*Get only product deping on page name*/
  getItem(){
    let arrItem=[];
    this.Products.forEach((item, i) => {
        if(item.Gendre==this.pageName)
          arrItem.push(item);
      });
      return arrItem;
  }
  /*calcule how many page should exist**/
   calculPage(){
    let numberofPage = Math.ceil(this.Item.length / this.NumberOfPrudct.value);
    this.ParentButton.innerHTML =``;
    for(let i =0;i<numberofPage;i++){
      this.ParentButton.innerHTML +=`<li>${i+1}</li>`;
    }

  }
  /*Get from where we come**/
      /*Function to get url query*/
        GetUrlQuery(){
          let url = window.location.href;
          /*get Index of ?*/
          let Index = url.indexOf("?");
          let queryfirst = url.substr(Index);
          let Index2 = queryfirst.indexOf("=")+1;
          let querySecound = queryfirst.substr(Index2);
          return querySecound
        }
        /*add event to hannd name of page*/
        eventToTitleOfPage(){
          document.querySelectorAll("#NameOfPage").forEach((item, i) => {
          item.innerText=this.pageName;

          });
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
     for(let i =0;i<Number && i+lastProductIndex<this.Item.length;i++){
       this.ParentItem.innerHTML +=`<item-show image="${this.Item[i+lastProductIndex].Info.imgUrl}" NumberId="${this.Item[i+lastProductIndex].id}">
       <h3 slot="name">${this.Item[i+lastProductIndex].nameProduct}</h3>
       <span slot="prix">${this.Item[i+lastProductIndex].Price}</span>
       </item-show>`;
     }
   }

}
    /*FIN cLASS */
import * as texst from './JsonObject/JsonObject.js'

const DisplayItemC = new DisplayItem(NumberOfP,ShortByP,ParentItemForProductMenu,texst.default,ParentButton);
