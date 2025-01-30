import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceCrudComponent } from './service-crud/service-crud.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, FormDemoComponent, ReactiveFormComponent,ServiceCrudComponent, DataTableComponent, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-jan-2025';
}
