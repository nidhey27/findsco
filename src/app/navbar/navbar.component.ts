import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  public isCollapsed = true;
  private lastPoppedUrl!: string;
  private yScrollStack: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    
  }
  
}
