import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  searchText:string=''

  setSearchText(value:string){
this.searchText=value
  }
}



//   addToCart:number=0;
//   name:string='john doe';
// products:any ={
//   name: 'iphone 13',
//   price: 999,
//   color:'red',
//   discount:8.9,
//   inStock:7,
//   pImage:'/assets/iphone_files/iphone.png'
// }
// getDiscountedPrice(){
//   let a = this.products.price-(this.products.price * this.products.discount/100)
//   return a.toFixed(0)
// }
// onNameChange(event:any){
// this.name=event.target.value

// }
// decrementCartValue(){
//   if(this.addToCart>0){
//     this.addToCart--;
//   }

// }
// incrementCartValue(){
// if(this.addToCart<this.products.inStock)
// this.addToCart++;
// }