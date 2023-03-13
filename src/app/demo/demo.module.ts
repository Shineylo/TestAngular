import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { FormsModule } from '@angular/forms';
import { MiMajPipe } from './pipes/mi-maj.pipe';
import { DemoRoutinModule } from './demo-routing.module';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    MiMajPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutinModule
  ],
  exports: [
    DemoBindingComponent,
    DemoDirectivesComponent,
    DemoPipeComponent,
    MiMajPipe
  ]
})
export class DemoModule { }
