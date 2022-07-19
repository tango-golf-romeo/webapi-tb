import {Injectable} from '@angular/core';
import {catchError,lastValueFrom,map,Observable} from 'rxjs';

import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';

import {AppBaseService} from './app-base.service';

@Injectable
({
  providedIn: 'root'
})
export abstract class AppSystemBaseService<INPUT,FIND,SUCCESS,FAILURE = RcvMessagesResponse> extends AppBaseService
{
	public find (obj:FIND): Observable<AppActionResult<SUCCESS[],FAILURE>>
	{
	const data:FIND = obj;

		return this.comms.invokePost<SUCCESS[],FAILURE>(this.path,'Find',null,data).pipe
		(
			map((res:ActionResultHttp<SUCCESS[]|FAILURE>) =>
			{
			const ret:AppActionResult<SUCCESS[],FAILURE> = new AppActionResult<SUCCESS[],FAILURE>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async findAsync (obj:FIND): Promise<AppActionResult<SUCCESS[],FAILURE>>
	{
		return await lastValueFrom(this.find(obj));
	}

	public update (obj:INPUT): Observable<AppActionResult<SUCCESS,FAILURE>>
	{
	const data:INPUT = obj;

		return this.comms.invokePut<SUCCESS,FAILURE>(this.path,'Update',data).pipe
		(
			map((res:ActionResultHttp<SUCCESS|FAILURE>) =>
			{
			const ret:AppActionResult<SUCCESS,FAILURE> = new AppActionResult<SUCCESS,FAILURE>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async updateAsync (obj:INPUT): Promise<AppActionResult<SUCCESS,FAILURE>>
	{
		return await lastValueFrom(this.update(obj));
	}
}