import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvScriptResponseItem} from 'src/app/include/rcv/classes/rcv-script-response-item';
import {IXmtScriptItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-script-item-finder';
import {IXmtScriptSetItem} from 'src/app/include/xmt/interfaces/ixmt-script-set-item';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppScriptService extends AppFrontBaseService<IXmtScriptSetItem,IXmtScriptItemFinder,RcvScriptResponseItem,void>
{
	protected get path (): ApiServices
	{
		return ApiServices.Script;
	}
}