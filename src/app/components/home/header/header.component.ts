import { trigger, transition, query, style, stagger, animate } from "@angular/animations";
import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations:[
      trigger("animateMenu",[
        transition(":enter",[
          query("*", [
            style({opacity: 0, transform: "translateY(-50%)"}),
            stagger(50,[
              animate(
                "250ms cubic-bezier(0.35, 0, 0.25, 1)",
                style({opacity: 1, transform: "none"}))
            ])
          ])
        ])
      ])
    ]
  })

  export class HeaderComponent implements OnInit{
    pageYPosition: number = 0;

  constructor(){}

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition() {
      this.pageYPosition=window.pageYOffset
  }

  ngOnInit(){
    console.log(document.querySelector('.navbar-toggler'))
  }
  }