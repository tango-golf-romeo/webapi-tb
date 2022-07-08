import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientXsrfModule,HTTP_INTERCEPTORS,HttpXsrfTokenExtractor} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

import {AuthInterceptor,HttpXsrfCookieExtractor} from './interceptors/auth.interceptor';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogonComponent} from './components/logon/logon.component';
import {AlertSlideupComponent} from './components/alert-slideup/alert-slideup.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {EventLogComponent} from './components/event-log/event-log.component';
import {FaultLogComponent} from './components/fault-log/fault-log.component';
import {FeatureBoardComponent} from './components/feature-board/feature-board.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ModuleTestsComponent} from './components/module-tests/module-tests.component';

@NgModule
({
  declarations:
  [
    AppComponent,
    LogonComponent,
    AlertSlideupComponent,
    DialogComponent,
    EventLogComponent,
    FaultLogComponent,
    FeatureBoardComponent,
    DashboardComponent,
    ModuleTestsComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HttpClientXsrfModule.withOptions(
		{
			cookieName: 'access_token',
			headerName: 'X-XSRF-TOKEN'
		}),
    BrowserAnimationsModule,
		PortalModule,
		ScrollingModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatBottomSheetModule,
		MatSelectModule,
		MatProgressBarModule,
		MatToolbarModule,
		MatMenuModule,
		MatSidenavModule,
		MatListModule,
		MatGridListModule,
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatExpansionModule,
		MatTooltipModule
  ],
  providers:
	[
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
		{provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor}
	],
  bootstrap: [AppComponent]
})
export class AppModule {}
