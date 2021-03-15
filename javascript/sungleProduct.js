/**Displai revew or description*/
{
  let boxDesction = document.querySelector("#descriptionFiled").checked =true;
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
     document.querySelector("#prixProdcut").innerText =this.product.Price;
     document.querySelector("#Gendre").innerText  =this.product.Gendre;
     document.querySelector("#TypeC").innerText  =this.product.typeC;
     document.querySelector("#seller").innerText  =this.product.Info.seller;
     document.querySelectorAll("#image").forEach((item, i) => {
       item.src = this.product.Info.imgUrl;
     });

   }




}

const ss = new displayProduct(ProductsJs.default);























































/**/
