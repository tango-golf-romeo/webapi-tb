import {Component,OnInit, ViewChild} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';

import {RegularBaseComponent} from 'src/app/include/base/classes/ui/regular-base/regular-base.component';

import {LogonService} from '../../services/sys/logon.service';
import {ConfigService} from 'src/app/services/sys/config.service';
import {TargetAddress} from 'src/app/classes/target-address';
import {MatInput} from '@angular/material/input';

@Component
({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent extends RegularBaseComponent implements OnInit
{
@ViewChild('txtTarget') txtTarget!: MatInput;

target:string = '';

fc_txtTarget:FormControl = new FormControl('',[Validators.required]);
fc_cbxTarget:FormControl = new FormControl('');

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog, private config:ConfigService)
  {
    super(rt,svcLogon,ctrlBottomSheet,dlg);
  }

  ngOnInit (): void
  {
    this.resetTarget();
  }

	ngAfterViewInit (): void
	{
	const obj:any = this.txtTarget;
		obj?.nativeElement?.focus();
	}

	getErrorTarget (): string|undefined
	{
		return this.fc_txtTarget.hasError('required')?'You must enter a valid URL to server.':undefined;
	}

	onClickTarget (event:any): void
	{
		this.assignTarget();
	}

	onClickReset (event:any): void
	{
    this.resetTarget();
	}

  private assignTarget (): void
  {
    try
    {
      this.showProgress = true;

      if (this.config.config.targetAddress.url != this.target)
      {
        this.config.config.targetAddress = new TargetAddress(this.target);
        this.config.config.save();
      }
    }
    catch
    {
      this.flashError('Could not set new target.');
    }
    finally
    {
      this.showProgress = false;
      this.navigate('logon');
    }
  }

  private resetTarget (): void
  {
    this.target = this.config.config.targetAddress.url;
  }
}