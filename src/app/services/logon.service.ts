import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../include/base/classes/primal/constants';
import {ActionResultHttp} from '../include/base/classes/rcv/action-result-http';

import {IXmtLoginItem} from '../include/xmt/interfaces/xmt-login-item';
import {IRcvUserDataResponseItem} from '../include/rcv/interfaces/rcv-user-data-response-item';
import {IRcvBaseMessagesResponse} from '../include/rcv/interfaces/rcv-base-messages-response';
import {IRcvMessagesLoginResponse} from '../include/rcv/interfaces/rcv-messages-login-response';
import {IRcvMessagesSessionResponse} from '../include/rcv/interfaces/rcv-messages-session-response';

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
	const data:IXmtLoginItem = {login:usr,password:pwd,target:''};

		return this.comms.invokePost<IRcvUserDataResponseItem,IRcvBaseMessagesResponse>(ApiServices.Login,'CreateLogin',data).pipe
		(
			map((res:ActionResultHttp<IRcvUserDataResponseItem|IRcvBaseMessagesResponse>) =>
			{
				if (res?.result)
				{
				const cookies:string[]|null|undefined = res.response?.headers?.getAll('Set-Cookie:');
				const usr:IRcvUserDataResponseItem = res?.payload as IRcvUserDataResponseItem;
					return true;
				}
				else
				{
				const badLogin:IRcvMessagesLoginResponse = res?.payload as IRcvMessagesLoginResponse;
					if (badLogin) return false;

				const badSession:IRcvMessagesSessionResponse = res?.payload as IRcvMessagesSessionResponse;
					if (badSession) return false;

					return false;
				}
			}),
			catchError(this.handleError<boolean>(false))
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
			catchError(this.handleError<boolean>(false))
		);
	}

	private handleError<T> (res?:T): OperatorFunction<T,any>
	{
		return (err:any): Observable<T> =>
		{
			console.error(err);
			return of(res as T);
		};
	}
}
