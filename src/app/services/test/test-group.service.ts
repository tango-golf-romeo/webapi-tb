import {Injectable} from '@angular/core';

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
}
