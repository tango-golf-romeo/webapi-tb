import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {IXmtMosaicSetItem} from 'src/app/include/xmt/interfaces/ixmt-mosaic-set-item';
import {RcvMosaicResponseItem} from 'src/app/include/rcv/classes/rcv-mosaic-response-item';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppMosaicService extends AppFrontBaseService<IXmtMosaicSetItem,RcvMosaicResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.Mosaic;
	}
}