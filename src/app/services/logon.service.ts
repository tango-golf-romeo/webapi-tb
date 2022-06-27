import {Injectable} from '@angular/core';

import {catchError,of,tap,map,switchMap,Observable,OperatorFunction, retry} from 'rxjs';

import {IXmtActionResult} from '../include/xmt/interfaces/xmt-action-result';
import {IXmtActionResultLogon} from '../include/xmt/interfaces/xmt-action-result-logon';
import {IXmtUserData} from '../include/xmt/interfaces/xmt-user-data';
import {ActionResult} from '../include/base/classes/action-result';
import {SessionService} from './session.service';
import {TransportService} from './transport.service';
import {ApiServices} from '../include/base/classes/primal/constants';
import {ActionResultHttp} from '../include/base/classes/action-result-http';
import {IBadLogin} from '../include/xmt/interfaces/xmt-bad-login';

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
	const data:object = {login:usr,password:pwd,target:''};

		return this.comms.invokePost<IXmtUserData,IBadLogin>(ApiServices.Login,'CreateLogin',data).pipe
		(
			map((res:ActionResultHttp<IXmtUserData|IBadLogin>) =>
			{
				if (res?.result)
				{
				const usr:IXmtUserData = res?.payload as IXmtUserData;
					return true;
				}
				else
				{
				const bad:IBadLogin = res?.payload as IBadLogin;
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
