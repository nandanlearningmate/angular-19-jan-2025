import { Component } from '@angular/core';
import { MainMenuComponent } from "../main-menu/main-menu.component";

@Component({
  selector: 'app-header',
  imports: [MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
