import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry, lastValueFrom} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';
import {IXmtMosaicSetItem} from 'src/app/include/xmt/interfaces/ixmt-mosaic-set-item';
import {RcvMosaicResponseItem} from 'src/app/include/rcv/classes/rcv-mosaic-response-item';

import {TransportService} from '../sys/transport.service';

@Injectable
({
  providedIn: 'root'
})
export class AppMosaicService
{
  constructor (private comms:TransportService)
  {
  }

	public apply (obj:IXmtMosaicSetItem): Observable<AppActionResult<RcvMosaicResponseItem,RcvMessagesResponse>>
	{
	const data:IXmtMosaicSetItem = obj;

		return this.comms.invokePost<RcvMosaicResponseItem,RcvMessagesResponse>(ApiServices.Mosaic,'Apply',data).pipe
		(
			map((res:ActionResultHttp<RcvMosaicResponseItem|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<RcvMosaicResponseItem,RcvMessagesResponse> =
				new AppActionResult<RcvMosaicResponseItem,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async applyAsync (obj:IXmtMosaicSetItem): Promise<AppActionResult<RcvMosaicResponseItem,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.apply(obj));
	}

	public delete (id:string): Observable<AppActionResult<void,RcvMessagesResponse>>
	{
		return this.comms.invokeDelete<void,RcvMessagesResponse>(ApiServices.Mosaic,'Delete',id.toString()).pipe
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
