import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsMasterComponent } from './skills-master/skills-master.component';
import { SkillDetailComponent } from './skill-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsMasterComponent,
    SkillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
