import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get document(): Document {
    return this._document;
  }
  public set document(value: Document) {
    this._document = value;
  }
  title = 'findsco';
  constructor(@Inject(DOCUMENT)
  private _document: Document) { }
  @HostListener('window:scroll', [])

  onWindowScroll() {
    console.log("poir");
    
    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      // console.log('called')
      document?.getElementById('navbar-main')?.classList.add('shadow');
      document?.getElementById('navbar-main')?.classList.add('bg-dark-my');

    } else {
      document?.getElementById('navbar-main')?.classList.remove('shadow');
      document?.getElementById('navbar-main')?.classList.remove('bg-dark-my');
    }

  }

  ngOnInit() {
    const section1 = document.body
    section1.classList.add("dark-theme")
  }
}
