import { Component } from '@angular/core';
import { Product } from './components/models/product.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg=true;

  products:Product[]=[
    {

        id:'1',
        name:'El mejor juguete',
        image:'../../../assets/images/imagen.jpg',
        price:565.00
    },
    {

      id:'2',
      name:'Bicicleta casi nueva',
      image:'../../../assets/images/my-hero-academia-quirks-1557833813.jpg',
      price:1250.00
  },
  {

    id:'3',
    name:'Colección de albumes',
    image:'../../../assets/images/my-hero-academia-quirks-1557833813.jpg',
    price:1100.00
  },
  {

    id:'4',
    name:'Serie de novelas',
    image:'../../../assets/images/my-hero-academia-quirks-1557833813.jpg',
    price:800.00
  },
  {

    id:'5',
    name:'Lentes para disfrutar',
    image:'../../../assets/images/my-hero-academia-quirks-1557833813.jpg',
    price:100.00
  },
  {

    id:'6',
    name:'casa de muñecas',
    image:'../../../assets/images/my-hero-academia-quirks-1557833813.jpg',
    price:2300.00
  },


  ];

  onLoaded(img:string){
    console.log('Load padre', img);
  }
  toggleImg(){
    this.showImg=!this.showImg;
  }
}
