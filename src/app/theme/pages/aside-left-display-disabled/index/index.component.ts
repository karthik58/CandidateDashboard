import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {

  sortDir = 1;//1= 'ASE' -1= DSC
  users = [
    {
      fname: 'Seeds PO 0',
      lname: 1041910419,
      handle: 'Green',
      progress: 50
    },
    {
      fname: 'Seeds PO 1',
      lname: 1041910420,
      'handle': '@fat',
      progress: 35
    },
    {
      fname: 'Seeds PO 2',
      lname: 1041910421,
      handle: '@Demo',
      progress: 90
    },
    {
      fname: 'Seeds PO 3',
      lname: 1041910422,
      handle: '@twitter',
      progress: 75
    }];

  constructor(private _script: ScriptLoaderService) {
    this.sortArr('fname');
  }

  onSortClick(event) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir = -1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir = 1;
    }
    this.sortArr('fname');
  }

  sortArr(colName: any) {
    this.users.sort((a, b) => {
      //   a= a[colName].toLowerCase();
      //   b= b[colName].toLowerCase();
      //   console.log('console A: ', a.fname)
      //   console.log('console B: ', b)
      //   return a.localeCompare(b) * this.sortDir;
      let x = a[colName].toLowerCase();
      let y = b[colName].toLowerCase();
      return x.localeCompare(y) * this.sortDir;

    });
  }

  doSomethingWithCurrentValue(event) {
    console.log(event)
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this._script.loadScripts('app-index',
      ['assets/app/js/dashboard.js']);

    Helpers.bodyClass('m-page--boxed m-body--fixed m-header--static m-aside--offcanvas-default');

  }

}