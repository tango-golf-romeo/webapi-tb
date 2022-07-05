import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

import {HostedComponent} from '../hosted/hosted.component';
import {LogonService} from 'src/app/services/logon.service';
import {TestService} from 'src/app/services/test.service';
import {bootstrapApplication} from '@angular/platform-browser';
import {publishBehavior} from 'rxjs';

@Component
({
  selector: 'app-module-tests',
  templateUrl: './module-tests.component.html',
  styleUrls: ['./module-tests.component.css']
})
export class ModuleTestsComponent extends HostedComponent implements OnInit
{
private static readonly Name:string = 'Module Tests';

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg: MatDialog, private test:TestService)
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

 		const pb:Promise<boolean> = this.test.testMosaicStatePanel();

		this.showProgress = false;

		/*this.test.testMosaicStatePanel().subscribe
		({
			next: res =>
			{
				if (res)
          this.flashError('Test succesfull.');
				else
					this.flashError('Test failed.');
			},
			error: (err:any) => {console.error(err)},
			complete: () =>
			{
				this.showProgress = false;
			}
		});*/
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
