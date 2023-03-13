import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoDirectiveComponent } from './components/exo-directive/exo-directive.component';
import { ExoDirectiveStructComponent } from './components/exo-directive-struct/exo-directive-struct.component';
import { RandomColorDirective } from './directives/random-color.directive';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ConvertSecPipe } from './pipes/convert-sec.pipe';
import { ExoRoutingModule } from './exo-routing.module';



@NgModule({
  declarations: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    RandomColorDirective,
    ConvertSecPipe,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ],
  exports: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    RandomColorDirective,
    ConvertSecPipe,
    ChronoComponent
  ]
})
export class ExoModule { }