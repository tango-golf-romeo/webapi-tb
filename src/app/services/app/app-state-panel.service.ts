import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry, lastValueFrom} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {RcvStatePanelResponseItem} from 'src/app/include/rcv/classes/rcv-state-panel-response-item';
import {IXmtStatePanelSetItem} from 'src/app/include/xmt/interfaces/ixmt-state-panel-set-item';

import {TransportService} from '../sys/transport.service';

@Injectable
({
  providedIn: 'root'
})
export class AppStatePanelService
{
  constructor (private comms:TransportService)
  {
  }

	public apply (obj:IXmtStatePanelSetItem): Observable<AppActionResult<RcvStatePanelResponseItem,RcvMessagesResponse>>
	{
	const data:IXmtStatePanelSetItem = obj;

		return this.comms.invokePost<RcvStatePanelResponseItem,RcvMessagesResponse>(ApiServices.StatePanel,'Apply',data).pipe
		(
			map((res:ActionResultHttp<RcvStatePanelResponseItem|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<RcvStatePanelResponseItem,RcvMessagesResponse> =
				new AppActionResult<RcvStatePanelResponseItem,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async applyAsync (obj:IXmtStatePanelSetItem): Promise<AppActionResult<RcvStatePanelResponseItem,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.apply(obj));
	}

	public delete (id:string): Observable<AppActionResult<void,RcvMessagesResponse>>
	{
		return this.comms.invokeDelete<void,RcvMessagesResponse>(ApiServices.Node,'Delete',id).pipe
		(
			map((res:ActionResultHttp<void|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<void,RcvMessagesResponse> = new AppActionResult<void,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async deleteAsync (id:string): Promise<AppActionResult<void,RcvMessagesResponse>>
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
