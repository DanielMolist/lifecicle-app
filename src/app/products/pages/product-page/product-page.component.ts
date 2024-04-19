import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public productIsVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Componente Padre: constructor')
  }

  ngOnInit(): void {
    console.log('Componente Padre: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Padre: ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Componente Padre: ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Componente Padre: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Componente Padre: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Componente Padre: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Componente Padre: ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Componente Padre: ngOnDestroy');
  }


  increasePrice(): void{
    this.currentPrice++;
  }

}
