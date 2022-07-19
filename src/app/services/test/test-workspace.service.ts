import {Injectable} from '@angular/core';

import {XmtWorkspaceItemFinder} from 'src/app/include/xmt/classes/find/xmt-workspace-item-finder';
import {RcvWorkspaceResponseItem} from 'src/app/include/rcv/classes/rcv-workspace-response-item';

import {AppWorkspaceService} from '../app/app-workspace.service';
import {RcvWorkspaceContentResponseItem} from 'src/app/include/rcv/classes/rcv-workspace-content-response-item';

@Injectable
({
  providedIn: 'root'
})
export class TestWorkspaceService
{
  constructor (private workspace: AppWorkspaceService)
  {
  }

  public async getAllWorkspacesAsync (): Promise<RcvWorkspaceResponseItem[]>
  {
  const fnd:XmtWorkspaceItemFinder = new XmtWorkspaceItemFinder();
  const res = await this.workspace.findAsync(fnd);
    return res.success ?? [];
  }

  public async getContentAsync (id:string): Promise<RcvWorkspaceContentResponseItem|null>
  {
  const res = await this.workspace.getContentAsync(id);
    return res.success;
  }
}