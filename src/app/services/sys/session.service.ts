import {Injectable} from '@angular/core';
import {catchError,map,Observable,of,OperatorFunction} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';

import {TransportService} from './transport.service';

@Injectable
({
  providedIn: 'root'
})
export class SessionService
{
private m_sId:string = '';

  constructor (private comms:TransportService)
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

	public probe (): Observable<boolean>
	{
		return this.comms.invokeGet<void,void>(ApiServices.Dummy,'GetObjectStateItem').pipe
		(
			map((res:ActionResultHttp<void|void>) =>
			{
				return res?.result ?? false;
			}),
			catchError(this.handleError<boolean>())
		);
	}

	private handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<boolean> =>
		{
			console.error(err);
			return of(false);
		};
	}
}
