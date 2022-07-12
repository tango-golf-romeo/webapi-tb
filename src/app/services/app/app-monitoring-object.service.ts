import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvMonitoringObjectResponseItem} from 'src/app/include/rcv/classes/rcv-monitoring-object-response-item';
import {IXmtMonitoringObjectItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-monitoring-object-item-finder';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppMonitoringObjectService extends AppFrontBaseService<void,IXmtMonitoringObjectItemFinder,RcvMonitoringObjectResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.MonitoringObject;
	}
}
