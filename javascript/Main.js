/*Web Compenent**/
import item from './itemProduct.js'

/*Main Slider*/
import SliderMain from './MainSlider.js'
const SliderParent = document.querySelector("#SliderSection .sliderItem")
const SliderButtonLeft = document.querySelector("#ArrowSection .ArrowLef ")
const SliderButtonRight = document.querySelector("#ArrowSection .ArrowRight ")
const Slider = new SliderMain(SliderParent,SliderButtonLeft,SliderButtonRight)
/*Fin Main Slider*/
/*Make Slider go ByHimSelf*/
  /*And If A event Happing in Buutton wait for 9secound beofre come back to Work ByHimSelf*/
let Count = 0;

setInterval(()=>{
  if(Slider.drop){
    Count++;
    if(Count>=3){
      Count=0;
      Slider.drop = false;
    }
  }
  if(!Slider.drop)
    Slider.LeftMove();
},3000)

/*for displat item depeing on menu Select**/
const NewProduct = document.querySelector('.NewProduct');
const ProductShow = NewProduct.querySelector('.NewProductItem');
NewProduct.querySelector('ul').addEventListener("click",(e)=>{
  e.preventDefault();

  if(e.target.tagName == 'A'){
    console.log(e.target)
    for(let i =0;i<ProductShow.children.length;i++)
      {
        if(ProductShow.children[i].getAttribute('type')!=e.target.text && e.target.text !='All' ){
          ProductShow.children[i].style.display='none';
        }
        else {
          ProductShow.children[i].style.display='inline-block';

        }
      }

  }

})
/*Display item on New Product Section**/
    /*import JS File*/
import * as ProductsJs from './JsonObject/JsonObject.js'

const NewProductSection = document.querySelector("#SectionProduct .NewProduct .NewProductItem")
const ProductsJsObject = ProductsJs.default;
      /*For GETTING nUMBER Betwwin 0 and length of products*/
            function getRandomInt(min, max) {
                                              min = Math.ceil(min);
                                              max = Math.floor(max);
                                              return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
                                            }


for(let i= 0;i<12;i++){
      let NumberRandom=  getRandomInt(0,ProductsJsObject.length);

  NewProductSection.innerHTML += `<item-show type="${ProductsJsObject[NumberRandom].Gendre}"
    image="${ProductsJsObject[NumberRandom].Info.imgUrl}" NumberId="${ProductsJsObject[NumberRandom].id}">
    <h3 slot="name">${ProductsJsObject[NumberRandom].nameProduct} </h3>
    <span slot="prix">${ProductsJsObject[NumberRandom].Price} $</span>
    </item-show>`;


}


/*tgenerate page of products depending on user click **/
let arrButtonsForNav = ["#CollectionMenButton","#CollectionWomenButton","#CollectionKidsButton","#CollectionAccessoiresButton"]
let arrButtonValues = ["Men","Women","Kids","accesoires"]


arrButtonsForNav.forEach((item, i) => {
  // document.querySelector(item).getAttribute("href").innerText +="dd";
document.querySelector(item).href+="?type="+arrButtonValues[i];
});
/*For Read LocalStorage**/
// const SqurePanel = document.querySelector("#ItemAddList")
// function ReadLocalStorage(){
// let keys = Object.keys(localStorage);
//
//
// }
// ReadLocalStorage();
//
//
// function AddToPanel(Arry){
//   for(let i =0;i<Arry.length;i++){
//
//   }
// }
