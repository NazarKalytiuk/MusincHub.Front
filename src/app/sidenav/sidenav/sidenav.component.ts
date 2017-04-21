import { MdSidenav } from '@angular/material';
import { MenuItem } from '../_model/menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/sidenav/_services/menu.service";

@Component({
  selector: 'sidenav-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public element: HTMLElement;
  public menu: Array<MenuItem> = new Array<MenuItem>();
  arrowIcon: string = "keyboard_arrow_down";
  constructor(private _menuservice : MenuService, private _l: MdSidenav) { }

  ngOnInit() {
    this._menuservice.getMenu().subscribe(message => this.menu = message);
    this._menuservice.getMenu().subscribe(message => this.menu = message);
    window.addEventListener("resize", this.resize.bind(this))
  }

  resize() {
    if (window.innerWidth < 800) {
      this._l.opened = false;
      this._l.mode = "over";
    } else {
      this._l.opened = true;
      this._l.mode = "side";
    }
  }
  changeMenu() {
    if (this.arrowIcon == "keyboard_arrow_down") {
      this._menuservice.getSecondaryMenu().subscribe(message => this.menu = message);
      this.arrowIcon = "keyboard_arrow_up";
    } else {
      this._menuservice.getMenu().subscribe(message => this.menu = message);
      this.arrowIcon = "keyboard_arrow_down";
    }
  }

}
