import { CurrentChallengeComponent } from './challenges/current-challenges/current-challenge/current-challenge.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";


const routes: Routes = [
    { path: "", redirectTo: "/challenges", pathMatch: "full" },
    { path: "challenges", component: CurrentChallengeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
