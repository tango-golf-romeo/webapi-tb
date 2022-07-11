import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvLocationResponseItem} from 'src/app/include/rcv/classes/rcv-location-response-item';
import {IXmtLocationItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-location-item-finder';
import {IXmtLocationSetItem} from 'src/app/include/xmt/interfaces/ixmt-location-set-item';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppLocationService extends AppFrontBaseService<IXmtLocationSetItem,IXmtLocationItemFinder,RcvLocationResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.Location;
	}
}