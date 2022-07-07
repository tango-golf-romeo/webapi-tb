import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

import {HostedComponent} from '../hosted/hosted.component';
import {LogonService} from 'src/app/services/sys/logon.service';

@Component
({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.css']
})
export class EventLogComponent extends HostedComponent implements OnInit
{
  private static readonly Name:string = 'Event Log';

  constructor (rt:Router, svcLogon:LogonService, ctrlBottomSheet:MatBottomSheet, dlg: MatDialog)
	{
		super(rt,svcLogon,ctrlBottomSheet,dlg);
	}

  ngOnInit (): void
	{
		this.setTitle(EventLogComponent.Name);
  }
}