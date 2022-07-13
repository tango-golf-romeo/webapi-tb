import {Injectable} from '@angular/core';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {RcvNodeSettingsResponseItem} from 'src/app/include/rcv/classes/rcv-node-settings-response-item';
import {XmtNodeItemFinder} from 'src/app/include/xmt/classes/find/xmt-node-item-finder';
import {XmtNodeSetItem} from 'src/app/include/xmt/classes/xmt-node-set-item';

import {AppNodeService} from '../app/app-node.service';

@Injectable
({
  providedIn: 'root'
})
export class TestNodeService
{
  constructor (private node:AppNodeService)
  {
  }

  public async updateZeroNodeAsync (): Promise<boolean>
  {
  const si:XmtNodeSetItem = new XmtNodeSetItem(0,'Database Server','tgu node 801');
  const res = await this.node.applyAsync(si);
    return res.result;
  }

  public async getAllNodesAsync (): Promise<RcvNodeResponseItem[]>
  {
  const fnd:XmtNodeItemFinder = new XmtNodeItemFinder();
  const ret = await this.node.findAsync(fnd);
    return ret.success ?? [];
  }

  public async getSettingsAsync (id:number): Promise<RcvNodeSettingsResponseItem|null>
  {
  const res = await this.node.getSettingsAsync(id);
    return res?.success;
  }

  public async getSettingsOfAllNodesAsync (ids:number[]): Promise<RcvNodeSettingsResponseItem[]>
  {
    if (!ids || (ids.length < 1)) return [];

  let ret:RcvNodeSettingsResponseItem[] = [];

    for (const id of ids)
    {
    const res = await this.node.getSettingsAsync(id);
      if (res.result && res.haveSuccess) ret.push(res.success!);
    }
    
    return ret;
  }
}
