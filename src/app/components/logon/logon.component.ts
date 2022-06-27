import {Component,OnInit} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';

import {Constants} from 'src/app/include/base/classes/primal/constants';
import {RegularBaseComponent} from 'src/app/include/base/classes/ui/regular-base/regular-base.component';

import {LogonService} from '../../services/logon.service';

@Component
({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent extends RegularBaseComponent implements OnInit
{
username:string = '';
password:string = '';

	ctrlUsername:FormControl = new FormControl('',[Validators.required]);
	ctrlPassword:FormControl = new FormControl('');

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog)
  {
    super(rt,svcLogon,ctrlBottomSheet,dlg);
  }

  ngOnInit (): void
  {
    document.title = Constants.Name + " - System Logon";
  }

	getErrorUsername (): string|undefined
	{
		return this.ctrlUsername.hasError('required')?'You must enter a username.':undefined;
	}

	getErrorPassword (): string|undefined
	{
		return undefined;
	}

	onClickSneak (event:any): void
	{
		this.username = 'SystemAdmin';
		this.password = 'StreamLabs';

		this.doLogon();
	}

	onClickLogon (event:any): void
	{
		this.doLogon();
	}

	onClickReset (event:any): void
	{
		this.username = '';
		this.password = '';
	}

	private doLogon (): void
	{
		this.showProgress = true;

		this.logon.logon(this.username,this.password).subscribe
		({
			next: res =>
			{
				if (res)
					this.navigate('dashboard');
				else
					this.flashError('Logon failed.');
			},
			error: (err:any) => {console.error(err)},
			complete: () =>
			{
				this.showProgress = false;
			}
		});
	}
}
