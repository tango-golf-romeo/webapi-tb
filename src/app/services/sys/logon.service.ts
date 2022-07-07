import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../../include/base/classes/primal/constants';
import {ActionResultHttp} from '../../include/base/classes/rcv/action-result-http';

import {IXmtLoginItem} from '../../include/xmt/interfaces/ixmt-login-item';
import {IRcvUserDataResponseItem} from '../../include/rcv/interfaces/ircv-user-data-response-item';
import {IRcvMessagesLoginResponse} from '../../include/rcv/interfaces/ircv-messages-login-response';
import {IRcvMessagesSessionResponse} from '../../include/rcv/interfaces/ircv-messages-session-response';
import {IAppBaseMessagesResponse} from '../../include/app/base/interfaces/iapp-base-messages-response';
import {XmtLoginItem} from 'src/app/include/xmt/classes/xmt-login-item';
import {RcvUserDataResponseItem} from 'src/app/include/rcv/classes/rcv-user-data-response-item';
import {AppBaseMessagesResponse} from 'src/app/include/app/base/classes/app-base-messages-response';
import {RcvMessagesLoginResponse} from 'src/app/include/rcv/classes/rcv-messages-login-response';
import {RcvMessagesSessionResponse} from 'src/app/include/rcv/classes/rcv-messages-session-response';

@Injectable
({
  providedIn: 'root'
})
export class LogonService
{
  constructor (private session:SessionService, private comms:TransportService)
  {
  }

	public logon (usr:string, pwd:string): Observable<boolean>
	{
	const data:XmtLoginItem = new XmtLoginItem(usr,pwd);

		return this.comms.invokePost<RcvUserDataResponseItem,AppBaseMessagesResponse>(ApiServices.Login,'CreateLogin',data).pipe
		(
			map((res:ActionResultHttp<RcvUserDataResponseItem|AppBaseMessagesResponse>) =>
			{
				if (res?.result)
				{
					if (res?.payload)
					{
					const usr:RcvUserDataResponseItem = res?.payload as RcvUserDataResponseItem;
					const usrid = usr.profile?.userID ?? '';
						//do anything with usr
					}
					
					return res?.result;
				}
				else
				{
				const badLogin:RcvMessagesLoginResponse = res?.payload as RcvMessagesLoginResponse;
					//do something with bad login

				const badSession:RcvMessagesSessionResponse = res?.payload as RcvMessagesSessionResponse;
					//do something with bad session

					return false;
				}
			}),
			catchError(this.handleError<boolean>())
		);
	}

	public logoff (): Observable<boolean>
	{
		return this.comms.invokeGet<void,void>(ApiServices.Logout,null,{noredirect:true}).pipe
		(
			map((res:ActionResultHttp<void|void>) =>
			{
				return res?.result ?? false;
			}),
			catchError(this.handleError<boolean>())
		);
	}

	private handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<boolean> =>
		{
			console.error(err);
			return of(false);
		};
	}
}
