import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {IRcvMessagesResponse} from 'src/app/include/rcv/interfaces/rcv-messages-response';
import {IRcvStatePanelResponseItem} from 'src/app/include/rcv/interfaces/rcv-state-panel-response-item';
import {IXmtStatePanelSetItem} from 'src/app/include/xmt/interfaces/xmt-state-panel-set-item';

import {TransportService} from '../transport.service';

@Injectable
({
  providedIn: 'root'
})
export class AppStatePanelService
{
  constructor (private comms:TransportService)
  {
  }

	public invoke_apply (obj:IXmtStatePanelSetItem): Observable<IRcvStatePanelResponseItem|IRcvMessagesResponse|null>
	{
	const data:IXmtStatePanelSetItem = obj;

		return this.comms.invokePost<IRcvStatePanelResponseItem,IRcvMessagesResponse>(ApiServices.StatePanel,'Apply',data).pipe
		(
			map((res:ActionResultHttp<IRcvStatePanelResponseItem|IRcvMessagesResponse>) =>
			{
        return res.payload;
			}),
			catchError(this.handleError<IRcvStatePanelResponseItem|null>(null))
		);
	}

	public invokeApply (obj:IXmtStatePanelSetItem): Observable<IRcvStatePanelResponseItem|null>
	{
		return this.invoke_apply(obj).pipe
		(
			map((res:IRcvStatePanelResponseItem|IRcvMessagesResponse|null) =>
			{
			const fail:IRcvMessagesResponse = res as IRcvMessagesResponse;
			const ret:IRcvStatePanelResponseItem = res as IRcvStatePanelResponseItem;
				return ret;
			}),
			catchError(this.handleError<IRcvStatePanelResponseItem|null>(null))
		);
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
