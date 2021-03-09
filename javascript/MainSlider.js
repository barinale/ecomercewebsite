export default class SliderMain{
  constructor(parent,LeftButton,RightButton){
  this.parent = parent;
  this.LeftButton = LeftButton;
  this.RightButton = RightButton;
  this.makeEventForButton();
  this.MkDisNone();
   this.parent.children[0].style.display="block";
  this.position =0;
  this.drop = false;
  }
  MkDisNone(){
    for(let i =0;i<this.parent.children.length;i++){
      this.parent.children[i].style.display="none";
    }


  }
  makeEventForButton(){
    this.LeftButton.addEventListener("click",(e)=>{
      this.drop=true;
      this.LeftMove();

    })
    this.RightButton.addEventListener("click",(e)=>{
      this.drop=true;
      this.RightMove();

    })
  }
  LeftMove(){
    if(this.position==0){
      this.showSlider(this.parent.children.length-1);
      this.position=this.parent.children.length-1;
    }
    else{
      this.position--;
        this.showSlider(this.position);
    }
  }
  RightMove(){
    if(this.position == this.parent.children.length-1 ){
      this.position =0;
      this.showSlider(this.position);
    }else{
      this.position++;
      this.showSlider(this.position);
    }
  }
  showSlider(Position){
    this.MkDisNone();
    this.parent.children[Position].style.display="block";
  }
}
