import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public hide_text: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeHideStatus(): void {
    setTimeout(() => this.hide_text = !this.hide_text, 0)
  }
}
