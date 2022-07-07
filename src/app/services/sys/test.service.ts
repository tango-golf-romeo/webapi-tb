import {Injectable, SimpleChange } from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry, lastValueFrom} from 'rxjs';

import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../../include/base/classes/primal/constants';
import {ActionResultHttp} from '../../include/base/classes/rcv/action-result-http';

import {IXmtProcSetItem} from '../../include/xmt/interfaces/xmt-proc-set-item';
import {IRcvProcResponseItem} from '../../include/rcv/interfaces/rcv-proc-response-item';
import {IRcvMessagesResponse} from '../../include/rcv/interfaces/ircv-messages-response';
import {AppStatePanelService} from '../app/app-state-panel.service';
import {AppNodeService} from '../app/app-node.service';
import {XmtNodeSetItem} from '../../include/xmt/classes/xmt-node-set-item';
import {XmtStatePanelSetItem} from 'src/app/include/xmt/classes/xmt-state-panel-set-item';

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

	private async createStatePanels (): Promise<string[]>
	{
	const si1:XmtStatePanelSetItem = new XmtStatePanelSetItem('tgu sp 1','tgu state panel 1');
	const si2:XmtStatePanelSetItem = new XmtStatePanelSetItem('tgu sp 2','tgu state panel 2');
	const si3:XmtStatePanelSetItem = new XmtStatePanelSetItem('tgu sp 3','tgu state panel 3');
	
	const res1 = await this.statePanel.applyAsync(si1);
	const res2 = await this.statePanel.applyAsync(si2);
	const res3 = await this.statePanel.applyAsync(si3);

	const ret = new Array();
		ret.push(0);
		if (res1?.result) ret.push(res1.success?.statePanelID);
		if (res2?.result) ret.push(res1.success?.statePanelID);
		if (res3?.result) ret.push(res1.success?.statePanelID);

		return ret;
	}

	private async deleteStatePanels (ids:string[]): Promise<void>
	{
		ids.forEach(async id => 
		{
			await this.statePanel.deleteAsync(id);
		});
	}

	private async testStatePanels (): Promise<void>
	{
	const ids:string[] = await this.createStatePanels();
		await this.deleteStatePanels(ids);		
	}

	private async createNodes (): Promise<number[]>
	{
	const xmtNode1:XmtNodeSetItem = new XmtNodeSetItem(800,'tgu 800','tgu node 800');
	const xmtNode2:XmtNodeSetItem = new XmtNodeSetItem(801,'tgu 801','tgu node 801');
	const xmtNode3:XmtNodeSetItem = new XmtNodeSetItem(802,'tgu 802','tgu node 802');
	
	const res1 = await this.node.applyAsync(xmtNode1);
	const res2 = await this.node.applyAsync(xmtNode2);
	const res3 = await this.node.applyAsync(xmtNode3);

	const ret = new Array();
		ret.push(0);
		if (res1?.result) ret.push(res1.success?.nodeID);
		if (res2?.result) ret.push(res1.success?.nodeID);
		if (res3?.result) ret.push(res1.success?.nodeID);

		return ret;
	}

	private async deleteNodes (ids:number[]): Promise<void>
	{
		ids.forEach(async id => 
		{
			await this.node.deleteAsync(id);
		});
	}

	private async testNodes (): Promise<void>
	{
	const ids:number[] = await this.createNodes();
		await this.deleteNodes(ids);		
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
