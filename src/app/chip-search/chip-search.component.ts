import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-search',
  templateUrl: './chip-search.component.html',
  styleUrls: ['./chip-search.component.css']
})
export class ChipSearchComponent implements OnInit {

  myItem:string ="";

  selectedList:any = [];

  list:any= []

  lastSelected:boolean = false;
  constructor() { }

  ngOnInit() {
    this.list = ["John", "Allen", "Gracy", "Nicole"]
  }
  deleteItem(event:any,a,b){
    if (this.myItem==""){
    if (!this.lastSelected)
      this.lastSelected =true;
    else
      this.removeItem(b,a);
    }
  }
  appendToList(itm,i){
    if (this.selectedList.indexOf(itm)<0){
      this.selectedList.push(itm);
      this.list.splice(i,1);
    }
  }

  removeItem(i,itm){
    this.selectedList.splice(i,1);
    this.list.push(itm);
    this.lastSelected =false;
  }

}
