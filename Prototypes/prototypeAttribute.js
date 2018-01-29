function Items(){
    this.fruit="Mango";
}

//here  we created property veggie  for items with  prototype which has access to all that created by items()
 Items.prototype.veggie ="tomato"

const sweetFruit =new Items();

sweetFruit.fruit="Straw Berry"
    


console.log(sweetFruit.fruit);//here fruit look first in Items object and then to new defined sweetfruit prints  gives "Straw Berry "in console
console.log(sweetFruit.veggie);//here all the access of items will be accesed by sweetFruit so that it gives tomato  
                                              
