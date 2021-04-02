
import item from './itemProduct.js'
/**For DisplayItem DEPING IN VALUU OF TOOL pAR*/
const NumberOfP = document.querySelector("#ShowProductNumber");
const ShortByP = document.querySelector("#ShortBy");
const ParentItemForProductMenu = document.querySelector("#SectionItemProduct .SectionItemProductItems");
const ParentButton = document.querySelector("#PageNumber");
const ViewOption = "ViewCard"
const ViewOptionCard = document.querySelector("#ViewCard")
const ViewOptionFull = document.querySelector("#ViewFull")

function eventForShowViewOption(item1,item2){
  item1.classList.add("active");
  item1.style.background="black";
  item2.classList.remove("active");
  item2.style.background="#eeeeee";
}
    /*class for display Product**/
 class DisplayItem{
  constructor(NumberOfPrudct,ShortBy,ParentItem,Products,ParentButton,ButtonViewFull,ButtonViewCard){
    this.NumberOfPrudct = NumberOfPrudct;
    this.ShortBy =ShortBy;
    this.ParentItem = ParentItem;
    this.ParentButton = ParentButton;
    this.Products = Products;
    this.ButtonViewFull = ButtonViewFull;
    this.ButtonViewCard=ButtonViewCard;
    this.ViewOption;
    this.EventForOptionView();
    this.eventForShowViewOption(ButtonViewCard,ButtonViewFull);
    this.pageName =this.GetUrlQuery();
    this.Item = this.getItem();
    this.eventToTitleOfPage();
    this.AddEventP();
    this.calculPage();
    this.eventToNumberofPage();
    this.DisplayItemOnPaGE(this.NumberOfPrudct.value,0);
  }

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
    /*AddEVENTlSITENNET TO VIEW oOption*/
    EventForOptionView(){
      ViewOptionCard.addEventListener("click",()=>{
        if(!ViewOptionCard.classList.contains("active"))
              eventForShowViewOption(ViewOptionCard,ViewOptionFull);
              this.ViewOption = "ViewCard";
              this.DisplayItemOnPaGE(this.NumberOfPrudct.value,0);

      })
      ViewOptionFull.addEventListener("click",()=>{
        if(!ViewOptionFull.classList.contains("active"))
          eventForShowViewOption(ViewOptionFull,ViewOptionCard);
              this.ViewOption = "ViewFull";
              this.DisplayItemOnPaGE(this.NumberOfPrudct.value,0);

      })
    }
    eventForShowViewOption(item1,item2){
      item1.classList.add("active");
      item1.style.background="black";
      item2.classList.remove("active");
      item2.style.background="#eeeeee";
    }
  /*Display ITEM on Page*/
  DisplayItemOnPaGE(Number,lastProductIndex){
     this.ParentItem.innerHTML =``;
     for(let i =0;i<Number && i+lastProductIndex<this.Item.length;i++){
       this.ParentItem.innerHTML +=`<item-show ViewOption="${this.ViewOption}"image="${this.Item[i+lastProductIndex].Info.imgUrl}" NumberId="${this.Item[i+lastProductIndex].id}">
       <h3 slot="name">${this.Item[i+lastProductIndex].nameProduct}</h3>
       <span slot="prix">${this.Item[i+lastProductIndex].Price}</span>
       </item-show>`;
     }
   }

}
    /*FIN cLASS */
import * as texst from './JsonObject/JsonObject.js'

const DisplayItemC = new DisplayItem(NumberOfP,ShortByP,ParentItemForProductMenu,texst.default,ParentButton,ViewOptionFull,ViewOptionCard);
let arrButtonsForNav = ["#CollectionMenButton","#CollectionWomenButton","#CollectionKidsButton","#CollectionAccessoiresButton"]
let arrButtonValues = ["Men","Women","Kids","accesoires"]


arrButtonsForNav.forEach((item, i) => {
  // document.querySelector(item).getAttribute("href").innerText +="dd";
document.querySelector(item).href+="?type="+arrButtonValues[i];
});
