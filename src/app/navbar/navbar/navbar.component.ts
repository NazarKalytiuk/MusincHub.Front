import { Subject } from 'rxjs/Rx';
import { MdSidenav } from '@angular/material';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarService } from "app/navbar/_services/navbar.service";
@Component({
  selector: 'navbar-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title: string = "Alma - Requiem";
  public showButton: boolean = true;
  constructor(private _navbarSerivce: NavbarService) {
  }

  onClick() {
  }

  ngOnInit(): void {
    console.log("onInit")
    this._navbarSerivce.getMessage().subscribe(message => {
      this.title = message.text;
      console.log(message)
    });
  }

  @Input() leftsidenav: MdSidenav;
}
