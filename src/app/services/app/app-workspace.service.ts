import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvWorkspaceResponseItem} from 'src/app/include/rcv/classes/rcv-workspace-response-item';
import {IXmtWorkspaceItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-workspace-item-finder';
import {IXmtWorkspaceSetItem} from 'src/app/include/xmt/interfaces/ixmt-workspace-set-item';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppWorkspaceService extends AppFrontBaseService<IXmtWorkspaceSetItem,IXmtWorkspaceItemFinder,RcvWorkspaceResponseItem,void>
{
	protected get path (): ApiServices
	{
		return ApiServices.Workspace;
	}
}
