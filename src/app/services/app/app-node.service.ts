import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {IRcvMessagesResponse} from 'src/app/include/rcv/interfaces/ircv-messages-response';
import {IXmtNodeSetItem} from 'src/app/include/xmt/interfaces/ixmt-node-set-item';
import {IRcvNodeResponseItem} from 'src/app/include/rcv/interfaces/ircv-node-response-item';

import {TransportService} from '../transport.service';
import {XmtNodeSetItem} from 'src/app/include/xmt/classes/xmt-node-set-item';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {ActionResultPayload} from 'src/app/include/base/classes/rcv/action-result-payload';

@Injectable
({
  providedIn: 'root'
})
export class AppNodeService
{
  constructor (private comms:TransportService)
  {
  }

	public apply (obj:IXmtNodeSetItem): Observable<ActionResultPayload<RcvNodeResponseItem|RcvMessagesResponse>>
	{
	const data:IXmtNodeSetItem = obj;

		return this.comms.invokePost<RcvNodeResponseItem,RcvMessagesResponse>(ApiServices.Node,'Apply',data).pipe
		(
			map((res:ActionResultHttp<RcvNodeResponseItem|RcvMessagesResponse>) =>
			{
        return res;
			}),
			catchError(this.handleError<ActionResultPayload<any>>())
		);
	}

	/*public invokeApply (obj:IXmtNodeSetItem): Observable<RcvNodeResponseItem|null>
	{
		return this.invoke_apply(obj).pipe
		(
			map((res:RcvNodeResponseItem|RcvMessagesResponse|null) =>
			{
				if (res instanceof RcvNodeResponseItem)
				{
				const ret:RcvNodeResponseItem = res as RcvNodeResponseItem;
					return ret;
				}

				if (res instanceof RcvMessagesResponse)
				{
				const ret:RcvMessagesResponse = res as RcvMessagesResponse;
					return null;
				}
			
				return null;
			}),
			catchError(this.handleError<ActionResultPayload<any>>())
		);
	}*/

	public invokeDelete (id:number): Observable<ActionResultPayload<boolean|RcvMessagesResponse>>
	{
		return this.comms.invokeDelete<boolean,RcvMessagesResponse>(ApiServices.Node,'Delete',id.toString()).pipe
		(
			map((res:ActionResultHttp<boolean|RcvMessagesResponse>) =>
			{
        return res;
			}),
			catchError(this.handleError<ActionResultPayload<any>>())
		);
	}

	private handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<ActionResultPayload<any>> =>
		{
			console.error(err);

		const ret:ActionResultPayload<any> = new ActionResultPayload(false,err);
			return of(ret);
		};
	}
}
