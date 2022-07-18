import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {IXmtMosaicSetItem} from 'src/app/include/xmt/interfaces/ixmt-mosaic-set-item';
import {RcvMosaicResponseItem} from 'src/app/include/rcv/classes/rcv-mosaic-response-item';
import {IXmtMosaicItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-mosaic-item-finder';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppMosaicService extends AppFrontBaseService<IXmtMosaicSetItem,IXmtMosaicItemFinder,RcvMosaicResponseItem,void>
{
	protected get path (): ApiServices
	{
		return ApiServices.Mosaic;
	}
}