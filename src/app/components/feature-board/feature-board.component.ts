import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatDialog} from '@angular/material/dialog';

import {LogonService} from 'src/app/services/sys/logon.service';

import {FeatureComponent} from 'src/app/include/base/classes/ui/feature/feature.component';

@Component
({
  selector: 'app-feature-board',
  templateUrl: './feature-board.component.html',
  styleUrls: ['./feature-board.component.css']
})
export class FeatureBoardComponent extends FeatureComponent implements OnInit
{
private static readonly Name:string = 'Dashboard';

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg:MatDialog)
	{
		super(rt,svcLogon,ctrlBottomSheet,dlg);
	}

  ngOnInit (): void
	{
		this.setTitle(FeatureBoardComponent.Name);
  }

	onClickFeature (event:any, code:string): void
	{
		this.loadFeature(code);
	}
}