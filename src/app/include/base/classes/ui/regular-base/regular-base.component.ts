import {Router} from '@angular/router';

import {MatBottomSheet,MatBottomSheetConfig} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';

import {LogonService} from 'src/app/services/logon.service';

import {AlertSlideupComponent} from '../../../../../components/alert-slideup/alert-slideup.component';

export class RegularBaseComponent
{
private m_bShowProgress:boolean = false;

  constructor (private router:Router, protected logon:LogonService, private bottomSheet:MatBottomSheet,
		protected dialog:MatDialog)
	{
	}

	public get showProgress (): boolean
	{
		return this.m_bShowProgress;
	}

	protected set showProgress (val:boolean)
	{
		this.m_bShowProgress = val;
	}

	protected navigate (cmd:string)
	{
	const s:string = (cmd ?? '').trim();
		if (!s.length) return;

		this.router.navigate([s],{skipLocationChange:true,replaceUrl:false,preserveFragment:true});
	}

	protected flashError (msg:string)
	{
	const cfg:MatBottomSheetConfig<string> = new MatBottomSheetConfig();
		cfg.data = (msg ?? '').trim();
		this.bottomSheet.open(AlertSlideupComponent,cfg);
	}
}