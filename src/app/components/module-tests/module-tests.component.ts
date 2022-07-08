import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';

import {HostedComponent} from '../hosted/hosted.component';

import {LogonService} from 'src/app/services/sys/logon.service';
import {TestService} from 'src/app/services/sys/test.service';
import {TestMosaicService} from 'src/app/services/test/test-mosaic.service';

@Component
({
  selector: 'app-module-tests',
  templateUrl: './module-tests.component.html',
  styleUrls: ['./module-tests.component.css']
})
export class ModuleTestsComponent extends HostedComponent implements OnInit
{
private static readonly Name:string = 'Module Tests';

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg: MatDialog,
		private test:TestService, private testMosaic:TestMosaicService)
  {
    super(rt,svcLogon,ctrlBottomSheet,dlg);
  }

  ngOnInit (): void
  {
    this.setTitle(ModuleTestsComponent.Name);
  }

	onClickTest (event:any): void
	{
		this.showProgress = true;

 		const test:Promise<boolean> = this.testMosaic.findMosaicsAsync();
		test.then(success =>
		{
			console.log(success);
		})
		.catch(err =>
		{
			console.log(err)
		})
		.finally(() =>
		{
			this.showProgress = false;
		});
	}

	onClickTest2 (event:any): void
	{
		this.showProgress = true;

		this.test.update(2151103,22,220000).subscribe
		({
			next: res =>
			{
				if (res)
          this.flashError('Method succesfull.');
				else
					this.flashError('Method failed.');
			},
			error: (err:any) => {console.error(err)},
			complete: () =>
			{
				this.showProgress = false;
			}
		});
	}
}
