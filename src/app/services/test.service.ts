import {Injectable, SimpleChange } from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry, lastValueFrom} from 'rxjs';

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
import {IXmtNodeSetItem} from '../include/xmt/interfaces/ixmt-node-set-item';
import {AppNodeService} from './app/app-node.service';
import {IRcvNodeResponseItem} from '../include/rcv/interfaces/ircv-node-response-item';

@Injectable
({
  providedIn: 'root'
})
export class TestService
{
  constructor (private comms:TransportService, private statePanel:AppStatePanelService, private node:AppNodeService)
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

	public async testMosaicStatePanel (): Promise<boolean>
	{
	const sp1:IXmtStatePanelSetItem = {name:'my panel 1',description:'my set panel 1'};
	const sp2:IXmtStatePanelSetItem = {name:'my panel 2',description:'my set panel 2'};
	const sp3:IXmtStatePanelSetItem = {name:'my panel 3',description:'my set panel 3'};
	
	let b = await lastValueFrom (this.statePanel.invokeApply(sp1));
		b = await lastValueFrom (this.statePanel.invokeApply(sp1));
		b = await lastValueFrom (this.statePanel.invokeApply(sp1));

		return true;
	}

	private async createNodes (): Promise<IRcvNodeResponseItem[]>
	{
	const xmtNode1:IXmtNodeSetItem = {name:'node 1',description:'my node 1',nodeType:'multiScreen',ipAddress:'127.0.0.1'};
	const xmtNode2:IXmtNodeSetItem = {name:'node 2',description:'my node 2',nodeType:'multiScreen',ipAddress:'127.0.0.1'};
	const xmtNode3:IXmtNodeSetItem = {name:'node 3',description:'my node 3',nodeType:'multiScreen',ipAddress:'127.0.0.1'};

	const rcvNode1:IRcvNodeResponseItem|null = await lastValueFrom(this.node.invokeApply(xmtNode1));
	const rcvNode2:IRcvNodeResponseItem|null = await lastValueFrom(this.node.invokeApply(xmtNode2));
	const rcvNode3:IRcvNodeResponseItem|null = await lastValueFrom(this.node.invokeApply(xmtNode3));

	const ret = new Array();
		if (rcvNode1) ret.push(rcvNode1);
		if (rcvNode2) ret.push(rcvNode2);
		if (rcvNode3) ret.push(rcvNode3);

		return ret;
	}

	private async deleteNodes (ids:IRcvNodeResponseItem[]): Promise<void>
	{
		ids.forEach(async n => 
		{
			await lastValueFrom(this.node.invokeDelete(n.nodeID));
		});
	}

	private async testNodes (): Promise<void>
	{
	const nodes:IRcvNodeResponseItem[] = await this.createNodes();
		await this.deleteNodes(nodes);		
	}

	public async doTest (): Promise<boolean>
	{
		try
		{
			await this.testNodes();
		}
		catch (x)
		{
			console.log(x);
		}
		
		return true;
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
