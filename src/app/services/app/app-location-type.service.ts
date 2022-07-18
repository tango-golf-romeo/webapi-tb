import {Injectable} from '@angular/core';

import {RcvLocationTypeResponseItem} from 'src/app/include/rcv/classes/rcv-location-type-response-item';
import {IXmtLocationTypeItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-location-type-item-finder';
import {IXmtLocationTypeSetItem} from 'src/app/include/xmt/interfaces/ixmt-location-type-set-item';
import {ApiServices} from 'src/app/include/base/classes/primal/constants';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppLocationTypeService extends AppFrontBaseService<IXmtLocationTypeSetItem,IXmtLocationTypeItemFinder,RcvLocationTypeResponseItem,void>
{
	protected get path (): ApiServices
	{
		return ApiServices.LocationType;
	}
}
