import {Injectable, SimpleChange } from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry, lastValueFrom} from 'rxjs';

import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../include/base/classes/primal/constants';
import {ActionResultHttp} from '../include/base/classes/rcv/action-result-http';

import {IXmtProcSetItem} from '../include/xmt/interfaces/xmt-proc-set-item';
import {IRcvProcResponseItem} from '../include/rcv/interfaces/rcv-proc-response-item';
import {IRcvMessagesResponse} from '../include/rcv/interfaces/ircv-messages-response';
import {AppStatePanelService} from './app/app-state-panel.service';
import {IXmtStatePanelSetItem} from '../include/xmt/interfaces/xmt-state-panel-set-item';
import {IRcvStatePanelResponseItem} from '../include/rcv/interfaces/rcv-state-panel-response-item';
import {IXmtNodeSetItem} from '../include/xmt/interfaces/ixmt-node-set-item';
import {AppNodeService} from './app/app-node.service';
import {IRcvNodeResponseItem} from '../include/rcv/interfaces/ircv-node-response-item';
import {XmtNodeSetItem} from '../include/xmt/classes/xmt-node-set-item';

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
	const xmtNode1:XmtNodeSetItem = new XmtNodeSetItem(2000,'tgu 2000','tgu node 40000');
	const xmtNode2:XmtNodeSetItem = new XmtNodeSetItem(2001,'tgu 2001','tgu node 40001');
	const xmtNode3:XmtNodeSetItem = new XmtNodeSetItem(2002,'tgu 2002','tgu node 40002');
	
	const res1 = await lastValueFrom(this.node.apply(xmtNode1));
	const res2 = await lastValueFrom(this.node.apply(xmtNode2));
	const res3 = await lastValueFrom(this.node.apply(xmtNode3));

	const ret = new Array();
		if (res1?.result) ret.push(res1.payload);
		if (res2?.result) ret.push(res1.payload);
		if (res3?.result) ret.push(res1.payload);

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
