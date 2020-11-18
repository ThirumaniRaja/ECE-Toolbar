import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ToolbarComponent],
  entryComponents: [ToolbarComponent]
})
export class ToolbarModule { }
