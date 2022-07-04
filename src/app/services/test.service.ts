import {Injectable, SimpleChange } from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../include/base/classes/primal/constants';
import {ActionResultHttp} from '../include/base/classes/rcv/action-result-http';

import {IXmtProcSetItem} from '../include/xmt/interfaces/xmt-proc-set-item';
import {IRcvProcResponseItem} from '../include/rcv/interfaces/rcv-proc-response-item';
import {IRcvMessagesResponse} from '../include/rcv/interfaces/rcv-messages-response';
import {AppStatePanelService} from './app/app-state-panel.service';
import {IXmtStatePanelSetItem} from '../include/xmt/interfaces/xmt-state-panel-set-item';
import {IRcvStatePanelResponseItem} from '../include/rcv/interfaces/rcv-state-panel-response-item';

@Injectable
({
  providedIn: 'root'
})
export class TestService
{
  constructor (private comms:TransportService, private statePanel:AppStatePanelService)
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
	}

	public testStatePanel (): Observable<boolean>
	{
	const sp:IXmtStatePanelSetItem = {name:'my panel',description:'my set panel'};
		return this.statePanel.apply(sp).pipe
		(
			map((res:IRcvStatePanelResponseItem|IRcvMessagesResponse|null) =>
			{
			const newSp:IRcvStatePanelResponseItem = res as IRcvStatePanelResponseItem;
				if (newSp)
				{
					return true;
				}

				return false;
			}),
			catchError(this.handleError<boolean>(false))
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
