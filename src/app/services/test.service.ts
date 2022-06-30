import {Injectable, SimpleChange } from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../include/base/classes/primal/constants';
import {ActionResultHttp} from '../include/base/classes/rcv/action-result-http';

import {IXmtProcSetItem} from '../include/xmt/interfaces/xmt-proc-set-item';
import {IRcvProcResponseItem} from '../include/rcv/interfaces/rcv-proc-response-item';
import {IRcvMessagesResponse} from '../include/rcv/interfaces/rcv-messages-response';

@Injectable
({
  providedIn: 'root'
})
export class TestService
{
  constructor (private comms:TransportService)
  {
  }

	public update (procId:number, maxSizeLogs:number, maxRows:number): Observable<boolean>
	{
	const data:IXmtProcSetItem = {ProcID:procId,MaxSizeLogs:maxSizeLogs,MaxRows:maxRows};

		return this.comms.invokePut<IRcvProcResponseItem,IRcvMessagesResponse>(ApiServices.Proc,'Update',data).pipe
		(
			map((res:ActionResultHttp<IRcvProcResponseItem|IRcvMessagesResponse>) =>
			{
				if (res?.result)
				{
				const usr:IRcvProcResponseItem = res?.payload as IRcvProcResponseItem;
					return true;
				}
				else
				{
				const bad:IRcvMessagesResponse = res?.payload as IRcvMessagesResponse;
					return false;
				}
			}),
			catchError(this.handleError<boolean>(false))
		);

    return of(true);
	}

	private handleError<T> (res?:T): OperatorFunction<T,any>
	{
		return (err:any): Observable<T> =>
		{
			console.error(err);
			return of(res as T);
		};
	}
}
