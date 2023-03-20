import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input()img:string='';
  @Output() loaded = new EventEmitter<string>();
  imageDefault='../../../assets/images/imagen.jpg';

  counter=15;
  counterfn:number | undefined;


  constructor(){
    //after render
    //no async --Once time
    console.log('constructor','imgValue=>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //BEFORE RENDER
    //CHANGE UNPUTS --items
    console.log('ngOnchanges','imgValue=>',this.img)
  }

  ngOnInit(): void {
    //BEFORE render
    //async - fetch --once time
    console.log('ngOnInit','imgValue=>',this.img)
    this.counterfn = window.setInterval(()=>{
      this.counter -=1;
      console.log('Run counter');
    }, 1000);
  }

  ngAfterViewInit(): void {
      //AFTER render
      //handler children
      console.log('ngAfterViewInit','imgValue=>',this.img)
  }

  ngOnDestroy(): void {
      //only when delete
      console.log('ngOnDestroy','imgValue=>',this.img)
      window.clearInterval(this.counterfn)
  }


  imgError(){
    this.img=this.imageDefault;
  }
  imgLoaded(){
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
