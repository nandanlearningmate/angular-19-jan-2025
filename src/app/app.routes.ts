import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

export const routes: Routes = [
    {
        path: "",
        component: HeaderComponent
    },
    {
        path: "",
        component: FooterComponent
    },
    {
        path:"signup",
        component: ReactiveFormComponent
    },
    {
        path: "form-demo",
        component: FormDemoComponent
    },
    {
        path:"details/:id",
        component: UserDetailsComponent
    }
];