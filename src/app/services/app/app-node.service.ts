import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {IRcvMessagesResponse} from 'src/app/include/rcv/interfaces/rcv-messages-response';
import {IXmtNodeSetItem} from 'src/app/include/xmt/interfaces/ixmt-node-set-item';
import {IRcvNodeResponseItem} from 'src/app/include/rcv/interfaces/ircv-node-response-item';

import {TransportService} from '../transport.service';

@Injectable
({
  providedIn: 'root'
})
export class AppNodeService
{
  constructor (private comms:TransportService)
  {
  }

	public invoke_apply (obj:IXmtNodeSetItem): Observable<IRcvNodeResponseItem|IRcvMessagesResponse|null>
	{
	const data:IXmtNodeSetItem = obj;

		return this.comms.invokePost<IRcvNodeResponseItem,IRcvMessagesResponse>(ApiServices.Node,'Apply',data).pipe
		(
			map((res:ActionResultHttp<IRcvNodeResponseItem|IRcvMessagesResponse>) =>
			{
        return res.payload;
			}),
			catchError(this.handleError<IRcvNodeResponseItem|null>(null))
		);
	}

	public invokeApply (obj:IXmtNodeSetItem): Observable<IRcvNodeResponseItem|null>
	{
		return this.invoke_apply(obj).pipe
		(
			map((res:IRcvNodeResponseItem|IRcvMessagesResponse|null) =>
			{
			const fail:IRcvMessagesResponse = res as IRcvMessagesResponse;
			const ret:IRcvNodeResponseItem = res as IRcvNodeResponseItem;
				return ret;
			}),
			catchError(this.handleError<IRcvNodeResponseItem|null>(null))
		);
	}

	public invokeDelete (id:number): Observable<boolean|IRcvMessagesResponse|null>
	{
		return this.comms.invokeDelete<boolean,IRcvMessagesResponse>(ApiServices.Node,'Delete',id.toString()).pipe
		(
			map((res:ActionResultHttp<boolean|IRcvMessagesResponse>) =>
			{
        return res.result;
			}),
			catchError(this.handleError<IRcvNodeResponseItem|null>(null))
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
