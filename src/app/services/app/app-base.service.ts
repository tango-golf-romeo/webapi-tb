import {Injectable} from '@angular/core';
import {Observable,of,OperatorFunction} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';

import {TransportService} from '../sys/transport.service';

@Injectable
({
  providedIn: 'root'
})
export abstract class AppBaseService
{
  constructor (protected comms:TransportService)
  {
  }

  protected abstract get path (): ApiServices

	protected handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<AppActionResult<void,any>> =>
		{
			console.error(err);

		const ret:AppActionResult<void,any> = new AppActionResult<void,any>(null,err);
			return of(ret);
		};
	}
}
