/**Displai revew or description*/
const boxDesction = document.querySelector("#descriptionFiled")
const BoxReview1 = document.querySelector("#ReviewFiled");
{
  boxDesction.checked=true;
   backgroundChance1 (document.querySelector("#labelDes li"),document.querySelector("#labelRev li"))
}
boxDesction.addEventListener("click",()=>backgroundChance1(document.querySelector("#labelDes li"),document.querySelector("#labelRev li")));
BoxReview1.addEventListener("click",()=>backgroundChance1(document.querySelector("#labelRev li"),document.querySelector("#labelDes li")));
function backgroundChance1 (itemlabel1,itemlabel2){
  itemlabel1.style.background="var(--main-color)";
  itemlabel2.style.background="none";

}


/**DISPLAY pRODUCT DEPENDING IN URL ID*/
/*Function to get url query*/
      /**import Fichies Json*/
      import * as ProductsJs from './JsonObject/JsonObject.js'


class displayProduct{
  constructor(prodcuts){
    this.id= this.GetUrlQuery();
    this.prodcuts = prodcuts;
    this.product = this.FindProduct();
    this.displayProduct();
    this.TitleOFpage();
  }

  GetUrlQuery(){
     let url = window.location.href;
     /*get Index of ?*/
     let Index = url.indexOf("?");
     let queryfirst = url.substr(Index);
     let Index2 = queryfirst.indexOf("=")+1;
     let querySecound = queryfirst.substr(Index2);
     return querySecound
   }
   FindProduct(){
     /*Need optimization because all the time we do Worst cas o(n)*/
     let ObjectsFind;
     this.prodcuts.forEach((item, i) => {
       if(item.id == this.id){
         ObjectsFind = item;
       }
     });
     console.log(ObjectsFind)
     return ObjectsFind;
   }
   displayProduct(){
     document.querySelector("#NameProduct").innerText = this.product.nameProduct;
     document.querySelector("#prixProdcut").innerText =this.product.Price+"$";
     document.querySelector("#Gendre").innerText  =this.product.Gendre;
     document.querySelector("#TypeC").innerText  =this.product.typeC;
     document.querySelector("#seller").innerText  =this.product.Info.seller;
     document.querySelectorAll("#image").forEach((item, i) => {
       item.src = this.product.Info.imgUrl;
     });

   }

   TitleOFpage(){
     document.querySelectorAll("#nameOfPage").forEach((item, i) => {
       item.innerText = this.product.Gendre;
     });
     document.querySelector("#nameOfProduct").innerText=this.product.nameProduct;
   }


}

const ss = new displayProduct(ProductsJs.default);






let arrButtonsForNav = ["#CollectionMenButton","#CollectionWomenButton","#CollectionKidsButton","#CollectionAccessoiresButton"]
let arrButtonValues = ["Men","Women","Kids","accesoires"]
for(let i =0;i<arrButtonsForNav.length;i++){

  document.querySelector(arrButtonsForNav[i]).addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="Collection.html?type="+arrButtonValues[i];
  })

}
















































/**/
