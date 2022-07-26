import {Injectable} from '@angular/core';

import {AppScriptMeasureContentItem} from 'src/app/include/app/base/classes/app-script-measure-content-item';
import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvScriptMeasureResponseItem} from 'src/app/include/rcv/classes/rcv-script-measure-response-item';
import {IXmtScriptMeasureItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-script-measure-item-finder';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppScriptMeasureService extends AppFrontBaseService<void,IXmtScriptMeasureItemFinder,RcvScriptMeasureResponseItem,AppScriptMeasureContentItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.ScriptMeasure;
	}
}
