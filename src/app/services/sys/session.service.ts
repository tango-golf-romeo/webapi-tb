import {Injectable} from '@angular/core';

@Injectable
({
  providedIn: 'root'
})
export class SessionService
{
private m_sId:string = '';

  constructor ()
  {
  }

	public get id (): string
	{
		return this.m_sId;
	}

	public set id (sVal:string|null|undefined)
	{
		this.m_sId = (sVal ?? '').trim();
	}
}
