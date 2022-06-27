import {EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';

import {LogonService} from 'src/app/services/logon.service';

import {RegularBaseComponent} from '../regular-base/regular-base.component';
import {Observable,Observer,Subscription} from 'rxjs';

export class FeatureComponent extends RegularBaseComponent
{
private emitLoad:EventEmitter<string> = new EventEmitter(true);
private emitSetTitle:EventEmitter<string> = new EventEmitter(true);

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog)
	{
		super(rt,svcLogon,ctrlBottomSheet,dlg);
	}

	protected loadFeature (s:string): void
	{
		this.emitLoad.emit(s);
	}

	protected setTitle (s:string): void
	{
		this.emitSetTitle.emit(s);
	}

	public subscribeToEmitLoad (next?: (val:string) => void): Subscription
	{
		return this.emitLoad.subscribe(
		{
			next: next,
			error: (err:any) => {console.log(err);},
			complete: () => {}
		});
	}

	public subscribeToEmitSetTitle (next?: (val:string) => void): Subscription
	{
		return this.emitSetTitle.subscribe(
		{
			next: next,
			error: (err:any) => {console.log(err);},
			complete: () => {}
		});
	}
}