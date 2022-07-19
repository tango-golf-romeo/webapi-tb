import {Injectable} from '@angular/core';
import {catchError, lastValueFrom, map, Observable} from 'rxjs';

import {ApiServices} from 'src/app/include/base/classes/primal/constants';
import {HttpUrlOptions} from 'src/app/include/base/classes/primal/http-url-options';
import {ActionResultHttp} from 'src/app/include/base/classes/rcv/action-result-http';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {RcvWebPreviewManagerResponseItem} from 'src/app/include/rcv/classes/rcv-web-preview-manager-response-item';

import {AppBaseService} from './app-base.service';

@Injectable
({
  providedIn: 'root'
})
export class AppWebPreviewService extends AppBaseService
{
	protected get path (): ApiServices
	{
		return ApiServices.WebPreview;
	}

	public getPreviewUrl (id:string): Observable<AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>>
	{
	const opts:HttpUrlOptions = HttpUrlOptions.GetUrlSegment(id);

		return this.comms.invokePost<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>(this.path,'GetPreviewUrl',opts,null).pipe
		(
			map((res:ActionResultHttp<RcvWebPreviewManagerResponseItem|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse> = new AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async getPreviewUrlAsync (id:string): Promise<AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.getPreviewUrl(id));
	}

	public getMosaicPreviewUrl (id:string): Observable<AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>>
	{
	const opts:HttpUrlOptions = HttpUrlOptions.GetUrlSegment(id);

		return this.comms.invokePost<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>(this.path,'GetMosaicPreviewUrl',opts,null).pipe
		(
			map((res:ActionResultHttp<RcvWebPreviewManagerResponseItem|RcvMessagesResponse>) =>
			{
			const ret:AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse> = new AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>(res);
        return ret;
			}),
			catchError(this.handleError<AppActionResult<void,any>>())
		);
	}

	public async getMosaicPreviewUrlAsync (id:string): Promise<AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>>
	{
		return await lastValueFrom(this.getMosaicPreviewUrl(id));
	}
}
