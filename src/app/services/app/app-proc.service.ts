import {Injectable} from '@angular/core';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {RcvProcResponseItem} from 'src/app/include/rcv/classes/rcv-proc-response-item';
import {IXmtProcItemFinder} from 'src/app/include/xmt/interfaces/find/ixmt-proc-item-finder';
import {IXmtProcSetItem} from 'src/app/include/xmt/interfaces/ixmt-proc-set-item';

import {AppSystemBaseService} from './app-system-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppProcService extends AppSystemBaseService<IXmtProcSetItem,IXmtProcItemFinder,RcvProcResponseItem>
{
	protected get path (): ApiServices
	{
		return ApiServices.Proc;
	}
}
