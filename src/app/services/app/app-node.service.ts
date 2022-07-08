import {Injectable} from '@angular/core';
import {catchError,lastValueFrom,map,Observable} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';

import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {IXmtNodeSetItem} from 'src/app/include/xmt/interfaces/ixmt-node-set-item';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {IXmtNodeItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-node-item-finder';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppNodeService extends AppFrontBaseService<IXmtNodeSetItem,IXmtNodeItemFinder,RcvNodeResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.Node;
	}

	//in this example we define additional methods, don't know if it's good
	public clearCache (): Observable<AppActionResult<void,RcvMessagesResponse>>
	{
		return this.comms.invokeGet<void,RcvMessagesResponse>(this.path,'ClearCache').pipe
		(
			map((res:ActionResultHttp<void|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<void,RcvMessagesResponse> = new AppActionResult<void,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async clearCacheAsync (): Promise<AppActionResult<void,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.clearCache());
	}
}