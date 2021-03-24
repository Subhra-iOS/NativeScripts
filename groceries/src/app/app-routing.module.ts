import { ListComponent } from './app-modules/list/list.component';
import { LoginComponent } from './app-modules/login/login.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
