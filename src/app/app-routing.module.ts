import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {LogonComponent} from './components/logon/logon.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FaultLogComponent} from './components/fault-log/fault-log.component';
import {EventLogComponent} from './components/event-log/event-log.component';
import {ModuleTestsComponent} from './components/module-tests/module-tests.component';

const routes: Routes =
[
  {path:'logon', component:LogonComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'fault-log', component:FaultLogComponent},
  {path:'event-log', component:EventLogComponent},
  {path:'module-tests', component:ModuleTestsComponent},
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
