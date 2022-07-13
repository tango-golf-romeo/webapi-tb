import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvUserResponseItem} from 'src/app/include/rcv/classes/rcv-user-response-item';
import {IXmtUserItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-user-item-finder';
import {IXmtUserSetItem} from 'src/app/include/xmt/interfaces/ixmt-user-set-item';

import {AppFrontBaseService} from './app-front-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppUserService extends AppFrontBaseService<IXmtUserSetItem,IXmtUserItemFinder,RcvUserResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.User;
	}
}
