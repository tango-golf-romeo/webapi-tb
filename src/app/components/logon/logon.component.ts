import {Component,OnInit,ViewChild} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';
import {MatInput} from '@angular/material/input';

import {Constants} from 'src/app/include/base/classes/primal/constants';
import {RegularBaseComponent} from 'src/app/include/base/classes/ui/regular-base/regular-base.component';

import {LogonService} from '../../services/sys/logon.service';
import {ConfigService} from 'src/app/services/sys/config.service';

@Component
({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent extends RegularBaseComponent implements OnInit
{
@ViewChild('txtUsername') txtUsername!: MatInput;

username:string = '';
password:string = '';
target:string = '';

fc_txtTarget:FormControl = new FormControl('');
fc_txtUsername:FormControl = new FormControl('',[Validators.required]);
fc_txtPassword:FormControl = new FormControl('');

private ignoreInvalidUsername:boolean = false;

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog, private config:ConfigService)
  {
    super(rt,svcLogon,ctrlBottomSheet,dlg);
  }

  ngOnInit (): void
  {
    document.title = Constants.Name + " - System Logon";

	const obj:any = this.txtUsername;
		obj?.nativeElement?.focus();
  }

	ngAfterViewInit (): void
	{
	const obj:any = this.txtUsername;
		obj?.nativeElement?.focus();
	}

	getErrorUsername (): string|undefined
	{
		return (this.fc_txtUsername.hasError('required') && !this.ignoreInvalidUsername)?'You must enter a username.':undefined;
	}

	getErrorPassword (): string|undefined
	{
		return undefined;
	}

	onClickSneak (event:any): void
	{
		this.username = Constants.Username;
		this.password = Constants.Password;

		this.doLogon();
	}

	onClickLogon (event:any): void
	{
		this.doLogon();
	}

	onClickReset (event:any): void
	{
		this.fc_txtUsername.reset();
		this.fc_txtPassword.reset();
	}

	onClickRetarget (event:any): void
	{
		this.ignoreInvalidUsername = true;
		this.navigate('target');
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
