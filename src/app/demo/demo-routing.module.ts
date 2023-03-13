import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoBindingComponent } from "./components/demo-binding/demo-binding.component";
import { DemoDirectivesComponent } from "./components/demo-directives/demo-directives.component";
import { DemoPipeComponent } from "./components/demo-pipe/demo-pipe.component";


const routes: Routes = [
    { path:'binding', component: DemoBindingComponent},
    { path:'directive', component: DemoDirectivesComponent},
    { path:'pipe', component: DemoPipeComponent},
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})
export class DemoRoutinModule{

}