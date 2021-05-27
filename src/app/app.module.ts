import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  ComponentExampleRootComponent
} from './examples/component-example/component-example-root/component-example-root.component';
import { LoadingComponent } from './examples/component-example/components/loading/loading.component';
import { ExampleViewComponent } from './shared/components/example-view/example-view.component';
import { ControlsComponent } from './shared/components/controls/controls.component';
import { StructuralDirectiveExampleRootComponent } from './examples/structural-directive-example/structural-directive-example-root/structural-directive-example-root.component';
import { AttributeDirectiveExampleRootComponent } from './examples/attribute-directive-example/attribute-directive-example-root/attribute-directive-example-root.component';
import { LoadingTemplateComponent as LoadingTemplateAttributeComponent } from './examples/attribute-directive-example/components/loading-template/loading-template.component';
import { LoadingTemplateComponent as LoadingTemplateStructuralComponent } from './examples/structural-directive-example/components/loading-template/loading-template.component';
import { LoadingDirective as LoadingAttributeDirective } from './examples/attribute-directive-example/directives/laoding/loading.directive';
import { LoadingDirective as LoadingStructuralDirective } from './examples/structural-directive-example/directives/laoding/loading.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoadingAttributeDirective,
    LoadingStructuralDirective,
    LoadingComponent,
    ComponentExampleRootComponent,
    ExampleViewComponent,
    ControlsComponent,
    StructuralDirectiveExampleRootComponent,
    AttributeDirectiveExampleRootComponent,
    LoadingTemplateAttributeComponent,
    LoadingTemplateStructuralComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
