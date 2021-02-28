/*Web Compenent**/
import item from './itemProduct.js'
/*Main Slider*/
import SliderMain from './MainSlider.js'
const SliderParent = document.querySelector("#SliderSection .sliderItem")
const SliderButtonLeft = document.querySelector("#ArrowSection .ArrowLef ")
const SliderButtonRight = document.querySelector("#ArrowSection .ArrowRight ")
const Slider = new SliderMain(SliderParent,SliderButtonLeft,SliderButtonRight)
/*Fin Main Slider*/



/*for displat item depeing on menu Select**/
const NewProduct = document.querySelector('.NewProduct');
const ProductShow = NewProduct.querySelector('.NewProductItem');
NewProduct.querySelector('ul').addEventListener("click",(e)=>{
  e.preventDefault();

  if(e.target.tagName == 'A'){

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
