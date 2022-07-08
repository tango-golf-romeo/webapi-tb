import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {IXmtNodeSetItem} from 'src/app/include/xmt/interfaces/ixmt-node-set-item';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {IXmtNodeItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-node-item-finder';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppNodeService extends AppFrontBaseService<IXmtNodeSetItem,IXmtNodeItemFinder,RcvNodeResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.Node;
	}
}