import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ClickeventComponent } from './components/clickevent/clickevent.component';
import { DatapassInputComponent } from './components/datapass-input/datapass-input.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgonchangehookComponent } from './components/ngonchangehook/ngonchangehook.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwichComponent } from './directives/ng-swich/ng-swich.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgModelComponent } from './directives/ng-model/ng-model.component';
import { CustomDirective } from './directives/custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ClickeventComponent,
    DatapassInputComponent,
    TwoWayBindingComponent,
    NgonchangehookComponent,
    NgforComponent,
    NgIfComponent,
    NgSwichComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    CustomDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
