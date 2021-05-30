import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ms-toolbar',
  templateUrl: './ms-toolbar.component.html',
  styleUrls: ['./ms-toolbar.component.css']
})
export class MsToolbarComponent implements OnInit {

  constructor(
    public r: Router,
  ) { }



  ngOnInit(): void {
    
  }

}
