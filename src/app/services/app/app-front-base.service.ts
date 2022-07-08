import {Injectable} from '@angular/core';

import {catchError,map,Observable,lastValueFrom} from 'rxjs';

import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';

import {AppBaseService} from './app-base.service';

@Injectable
({
  providedIn: 'root'
})
export abstract class AppFrontBaseService<INPUT,FIND,SUCCESS,FAILURE = RcvMessagesResponse> extends AppBaseService
{
	public apply (obj:INPUT): Observable<AppActionResult<SUCCESS,FAILURE>>
	{
	const data:INPUT = obj;

		return this.comms.invokePost<SUCCESS,FAILURE>(this.path,'Apply',data).pipe
		(
			map((res:ActionResultHttp<SUCCESS|FAILURE>) =>
			{
			const ret:AppActionResult<SUCCESS,FAILURE> = new AppActionResult<SUCCESS,FAILURE>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async applyAsync (obj:INPUT): Promise<AppActionResult<SUCCESS,FAILURE>>
	{
		return await lastValueFrom(this.apply(obj));
	}

	public find (obj:FIND): Observable<AppActionResult<SUCCESS[],FAILURE>>
	{
	const data:FIND = obj;

		return this.comms.invokePost<SUCCESS[],FAILURE>(this.path,'Find',data).pipe
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

	private invokeDelete (id:string): Observable<AppActionResult<void,FAILURE>>
	{
		return this.comms.invokeDelete<void,FAILURE>(this.path,'Delete',id.toString()).pipe
		(
			map((res:ActionResultHttp<void|FAILURE>) =>
			{
			const ret:AppActionResult<void,FAILURE> = new AppActionResult<void,FAILURE>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

  public delete (id:string|number): Observable<AppActionResult<void,FAILURE>>
  {
  const sType:string = typeof id;

    if (sType == 'string') return this.invokeDelete(id as string);
    else if (sType == 'number') return this.invokeDelete(id.toString());
    else throw 'The supplied ID does not comply with the input type criterion.';
  }

	private async invokeDeleteAsync (id:string): Promise<AppActionResult<void,FAILURE>>
	{
		return await lastValueFrom(this.invokeDelete(id));
	}

  public async deleteAsync (id:string|number): Promise<AppActionResult<void,FAILURE>>
  {
  const sType:string = typeof id;

    if (sType == 'string') return await this.invokeDeleteAsync(id as string);
    else if (sType == 'number') return await this.invokeDeleteAsync(id.toString());
    else throw 'The supplied ID does not comply with the input type criterion.';
  }
}
