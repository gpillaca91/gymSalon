import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styles: []
})

export class WrapperComponent implements OnInit {
@Input() tittle:any;
  constructor() { }

  ngOnInit() {
  }

}
