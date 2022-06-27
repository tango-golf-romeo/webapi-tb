import {Component,OnInit,Inject} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {Constants} from 'src/app/include/base/classes/primal/constants';

@Component
({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit
{
private m_sTitle:string = Constants.Name;
private m_sMessage:string = '';

  constructor (@Inject(MAT_DIALOG_DATA) private data: string)
	{
		this.message = data;
	}

  ngOnInit (): void
	{
  }

	public get title (): string
	{
		return this.m_sTitle;
	}

	public get message (): string
	{
		return this.m_sMessage;
	}

	private set message (val:string)
	{
		this.m_sMessage = (val ?? '').trim();
	}
}