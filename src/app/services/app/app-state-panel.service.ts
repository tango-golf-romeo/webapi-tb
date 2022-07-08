import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {IXmtStatePanelSetItem} from 'src/app/include/xmt/interfaces/ixmt-state-panel-set-item';
import {RcvStatePanelResponseItem} from 'src/app/include/rcv/classes/rcv-state-panel-response-item';
import {IXmtStatePanelItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-state-panel-item-finder';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppStatePanelService extends AppFrontBaseService<IXmtStatePanelSetItem,IXmtStatePanelItemFinder,RcvStatePanelResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.StatePanel;
	}
}