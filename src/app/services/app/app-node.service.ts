import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry, lastValueFrom} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {IXmtNodeSetItem} from 'src/app/include/xmt/interfaces/ixmt-node-set-item';

import {TransportService} from '../sys/transport.service';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';

@Injectable
({
  providedIn: 'root'
})
export class AppNodeService
{
  constructor (private comms:TransportService)
  {
  }

	public apply (obj:IXmtNodeSetItem): Observable<AppActionResult<RcvNodeResponseItem,RcvMessagesResponse>>
	{
	const data:IXmtNodeSetItem = obj;

		return this.comms.invokePost<RcvNodeResponseItem,RcvMessagesResponse>(ApiServices.Node,'Apply',data).pipe
		(
			map((res:ActionResultHttp<RcvNodeResponseItem|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<RcvNodeResponseItem,RcvMessagesResponse> =
				new AppActionResult<RcvNodeResponseItem,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async applyAsync (obj:IXmtNodeSetItem): Promise<AppActionResult<RcvNodeResponseItem,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.apply(obj));
	}

	public delete (id:number): Observable<AppActionResult<void,RcvMessagesResponse>>
	{
		return this.comms.invokeDelete<void,RcvMessagesResponse>(ApiServices.Node,'Delete',id.toString()).pipe
		(
			map((res:ActionResultHttp<void|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<void,RcvMessagesResponse> = new AppActionResult<void,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async deleteAsync (id:number): Promise<AppActionResult<void,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.delete(id));
	}

	private handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<AppActionResult<void,any>> =>
		{
			console.error(err);

		const ret:AppActionResult<void,any> = new AppActionResult<void,any>(null,err);
			return of(ret);
		};
	}
}
