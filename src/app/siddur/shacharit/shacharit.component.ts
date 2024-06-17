import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shacharit',
  templateUrl: './shacharit.component.html',
  styleUrls: ['./shacharit.component.scss'],
})
export class ShacharitComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  gotoAnchor(id:string) {
    document!.getElementById(id)!.scrollIntoView({behavior: 'smooth'});
  }
}
