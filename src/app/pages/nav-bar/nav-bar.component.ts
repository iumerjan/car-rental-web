import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUrl: any;
  constructor( private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    // finding the route which exists to highlight.
    this.currentUrl = this.activatedRoute.snapshot.url[0].path;
   
  }

}
