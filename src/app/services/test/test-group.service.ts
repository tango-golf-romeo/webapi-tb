import {Injectable} from '@angular/core';
import {RcvGroupResponseItem} from 'src/app/include/rcv/classes/rec-group-response-item';
import {XmtGroupItemFinder} from 'src/app/include/xmt/classes/find/xmt-group-item-finder';

import {XmtGroupSetItem} from 'src/app/include/xmt/classes/xmt-group-set-item';

import {AppGroupService} from '../app/app-group.service';

@Injectable
({
  providedIn: 'root'
})
export class TestGroupService
{
  constructor (private group:AppGroupService)
  {
  }

	public async createGroupAsync (): Promise<number>
	{
	const si:XmtGroupSetItem = new XmtGroupSetItem('tgu 1','tgu test group 1');
	
	const res = await this.group.applyAsync(si);
    return res.success?.groupID ?? -1;
	}

  public async recreateGroupAsync (): Promise<number>
  {
	const si:XmtGroupSetItem = new XmtGroupSetItem('tgu 1','tgu test group 1');
    si.groupID = 54;
	
	const res = await this.group.applyAsync(si);
    return res.success?.groupID ?? -1;
  }

  public async deleteGroupAsync (grpId:number): Promise<boolean>
  {
  const res = await this.group.deleteAsync(grpId);
    return res?.result ?? false;
  }

  public async testGroupAsync (): Promise<boolean>
  {
  const grpId:number = await this.recreateGroupAsync();
  const res:boolean = await this.deleteGroupAsync(grpId);
    return res;
  }

  public async getAllGroupsAsync (): Promise<RcvGroupResponseItem[]>
  {
  const fnd:XmtGroupItemFinder = new XmtGroupItemFinder();
  const res = await this.group.findAsync(fnd);
    return res?.success ?? [];
  }

  public async getAllAccesssibleGroupsAsync (): Promise<RcvGroupResponseItem[]>
  {
  const fnd:XmtGroupItemFinder = new XmtGroupItemFinder();
    fnd.isAccessible = true;

  const res = await this.group.findAsync(fnd);
    return res?.success ?? [];
  }
}
