import {Component,OnInit} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';
import {MatInput} from '@angular/material/input';

import {Constants} from 'src/app/include/base/classes/primal/constants';
import {RegularBaseComponent} from 'src/app/include/base/classes/ui/regular-base/regular-base.component';

import {LogonService} from '../../services/sys/logon.service';
import {ConfigService} from 'src/app/services/sys/config.service';
import {TargetAddress} from 'src/app/classes/target-address';

@Component
({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent extends RegularBaseComponent implements OnInit
{
target:string = '';

ctrlTarget:FormControl = new FormControl('');

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog, private config:ConfigService)
  {
    super(rt,svcLogon,ctrlBottomSheet,dlg);
  }

  ngOnInit (): void
  {
    this.resetTarget();
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