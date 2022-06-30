import {Component,OnInit,AfterViewInit,ComponentRef,ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import {MatDrawer} from '@angular/material/sidenav';
import {CdkPortalOutlet,ComponentPortal,Portal,CdkPortalOutletAttachedRef} from '@angular/cdk/portal';

import {Constants} from 'src/app/include/base/classes/primal/constants';

import {LogonService} from 'src/app/services/logon.service';
import {FeatureBoardComponent} from '../feature-board/feature-board.component';
import {FeatureComponent} from 'src/app/include/base/classes/ui/feature/feature.component';
import {FaultLogComponent} from '../fault-log/fault-log.component';
import {EventLogComponent} from '../event-log/event-log.component';
import {DialogComponent} from '../dialog/dialog.component';
import {HostedComponent} from '../hosted/hosted.component';
import {ModuleTestsComponent} from '../module-tests/module-tests.component';

@Component
({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends HostedComponent implements OnInit, AfterViewInit 
{
	private static readonly Name:string = 'Dashboard';

	@ViewChild('drawer')
	private drawer!: MatDrawer;

	feature!:Portal<any>;

	private m_sTitle:string = Constants.Name + ' - ' + DashboardComponent.Name;

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog)
	{
		super(rt,svcLogon,ctrlBottomSheet,dlg);
	}

  ngOnInit (): void
	{
		this.subscribeToEmits(this);

	const cmp:Portal<any> = new ComponentPortal(FeatureBoardComponent);
		this.feature = cmp;
  }

  ngAfterViewInit()
	{
  }

	public get title (): string
	{
		return this.m_sTitle;
	}

	private set title (val:string)
	{
		this.m_sTitle = (val ?? '').trim();
	}

	onFeatureAttached (ref:CdkPortalOutletAttachedRef)
	{
		this.subscribeToFeatureCommands(ref);
	}

	onClickDashboardToggle (event:any): void
	{
		if (this.drawer.opened)
			this.drawer.close();
		else
			this.drawer.open();
	}

	onClickHome (event:any): void
	{
	const cmp:Portal<any> = new ComponentPortal(FeatureBoardComponent);
		this.feature = cmp;
	}

	onClickSettings (event:any): void
	{
		this.showNotImplementedDialog();

	/*const cfg:MatDialogConfig<string> = new MatDialogConfig();
		cfg.data = 'Not implemented.';

	const dref:MatDialogRef<DialogComponent,boolean> = this.dialog.open(DialogComponent,cfg);
		dref.afterClosed().subscribe(res => console.log(res));*/
	}

	onClickLogout (event:any): void
	{
		this.showProgress = true;

		this.logon.logoff().subscribe
		({
			next: (res:boolean) => {console.log('logoff: ' + res);},
			error: (err:any) => {console.error(err);},
			complete: () =>
			{
				this.showProgress = false;
			}
		});
		
		this.navigate('logon');
	}

	onClickFeature (event:any, code:string): void
	{
		this.drawer.close();
		this.loadFeature(code);
	}

	private subscribeToFeatureCommands (ref:CdkPortalOutletAttachedRef): void
	{
	const cref:ComponentRef<FeatureComponent> = ref as ComponentRef<FeatureComponent>;
		this.subscribeToEmits(cref?.instance);
	}

	private subscribeToEmits (fc:FeatureComponent): void
	{
		this.subscribeToLoad(fc);
		this.subscribeToSetTitle(fc);
	}

	private subscribeToLoad (fc:FeatureComponent): void
	{
		fc?.subscribeToEmitLoad((value:string) =>
		{
		const s:string = (value ?? '').trim().toLowerCase();
			if (s == 'fault-log')
			{
				this.flashNotImplemented();
				return;

			const cmp:Portal<any> = new ComponentPortal(FaultLogComponent);
				this.feature = cmp;
			}
			else if (s == 'event-log')
			{
				this.flashNotImplemented();
				return;

			const cmp:Portal<any> = new ComponentPortal(EventLogComponent);
				this.feature = cmp;
			}
			else if ((s == 'dashboard') || (s == 'applications'))
			{
			const cmp:Portal<any> = new ComponentPortal(FeatureBoardComponent);
				this.feature = cmp;
			}
			else if (s == 'module-tests')
			{
			const cmp:Portal<any> = new ComponentPortal(ModuleTestsComponent);
				this.feature = cmp;
			}
			else
				this.flashNotImplemented();
		});
	}

	private subscribeToSetTitle (fc:FeatureComponent): void
	{
		fc?.subscribeToEmitSetTitle((value:string) =>
		{
		const s:string = (value ?? '').trim();
		let sTitle:string = Constants.Name;
			if (s.length) sTitle += ' - ' + s;

			this.title = sTitle;
			document.title = this.title;
		});
	}

	private flashNotImplemented (): void
	{
	const cfg:MatDialogConfig<string> = new MatDialogConfig();
		cfg.data = 'Not implemented.';

	const dref:MatDialogRef<DialogComponent,boolean> = this.dialog.open(DialogComponent,cfg);
		dref.afterClosed().subscribe(res => console.log(res));
	}
}