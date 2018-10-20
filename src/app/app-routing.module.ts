import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsMasterComponent } from './skills-master/skills-master.component';

const routes: Routes = [
  { path: 'skills', component: SkillsMasterComponent},
  { path: 'build/:id', component: SkillsMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
