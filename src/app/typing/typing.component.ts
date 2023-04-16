import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements AfterViewInit{
  @ViewChild("textElement") textElement: ElementRef;
  @ViewChild("blinkElement") blinkElement: ElementRef;

  @Input() wordArray: string[] = [
    "Keep scrolling to find your new obsession!",
    "The best things are just a scroll away...",
    "Discover the products you can't live without!",
    "Your next favorite thing is waiting for you - keep scrolling!",
    "Find the product that will change your life - keep scrolling!",
    "Don't miss out on the hottest products - keep scrolling!",
    "Scroll down to see what's trending!",
    "Keep scrolling to uncover hidden gems!",
    "Find your next must-have item - keep scrolling!",
    "Discover something new and amazing - keep scrolling!"
  ];
  @Input() textColor = "white";
  @Input() fontSize = "1.5rem";
  @Input() blinkWidth = "12px";
  @Input() typingSpeedMilliseconds = 100;
  @Input() deleteSpeedMilliseconds = 100;

  private i = 0;

  constructor(private renderer: Renderer2) {
    this.textElement = new ElementRef(document.querySelector('#textElement'));
    this.blinkElement = new ElementRef(document.querySelector('#blinkElement'));
  }
  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "color",
      this.textColor
    );
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "font-size",
      this.fontSize
    );
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");

    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-color",
      this.textColor
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "font-size",
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        if (this.wordArray.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
      return
    };
    loopDeleting();
    return; // add this line to remove the error message
  }
}
