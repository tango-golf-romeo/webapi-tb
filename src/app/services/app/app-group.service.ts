import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {IXmtGroupSetItem} from 'src/app/include/xmt/interfaces/ixmt-group-set-item';
import {IXmtGroupItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-group-item-finder';
import {RcvGroupResponseItem} from 'src/app/include/rcv/classes/rec-group-response-item';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppGroupService extends AppFrontBaseService<IXmtGroupSetItem,IXmtGroupItemFinder,RcvGroupResponseItem,void>
{
	protected get path (): ApiServices
	{
		return ApiServices.Group;
	}
}
