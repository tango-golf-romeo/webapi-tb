import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse,HttpParams} from '@angular/common/http';

import {Observable,OperatorFunction,of,catchError,tap,map,ObservableInput,retry, throwError} from 'rxjs';

import {ApiServices,Constants} from '../../include/base/classes/primal/constants';
import {ActionResultHttp} from '../../include/base/classes/rcv/action-result-http';
import {HttpUrlOptions} from 'src/app/include/base/classes/primal/http-url-options';
import {ConfigService} from './config.service';

@Injectable
({
  providedIn: 'root'
})
export class TransportService
{
private m_sApiPath:string = (Constants.UseExpress?Constants.HttpRootDevIISExpress:Constants.HttpRootDevKestrel) +
	`${Constants.RelativePathWebApi}/`;
  
  constructor (private http:HttpClient, private config:ConfigService)
  {
  }

	private get apiPath (): string
	{
	const ret:string = `${this.m_sApiPath}`;
		return ret;
	}

	public invokePost<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, opts:HttpUrlOptions|null = null, input:any = {}): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	const sPath:string = this.getPath(svc,op,opts);
		
		return this.http.post<HttpResponse<SUCCESS|FAILURE>>(sPath,input,this.getOptions()).pipe
		(
			retry(0),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	public invokeGet<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, opts:HttpUrlOptions|null = null): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	let sPath:string = this.getPath(svc,op,opts);

		return this.http.get<HttpResponse<SUCCESS|FAILURE>>(sPath,this.getOptions()).pipe
		(
			retry(0),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	public invokePut<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, input:any = {}): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	const sPath:string = this.getPath(svc,op);
		
		return this.http.put<HttpResponse<SUCCESS|FAILURE>>(sPath,input,this.getOptions()).pipe
		(
			retry(0),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	public invokeDelete<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, opts:HttpUrlOptions|null = null): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	const sPath:string = this.getPath(svc,op,opts);
		
		return this.http.delete<HttpResponse<SUCCESS|FAILURE>>(sPath,this.getOptions()).pipe
		(
			retry(0),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	private getPath (svc:ApiServices, op:string|null, opts:HttpUrlOptions|null = null): string
	{
	const s = (svc ?? '').trim();
		if (s.length < 1) throw 'Service base relative path cannot be empty.';

	let ret:string = `${this.apiPath}${svc}`;

	const sOper:string = (op ?? '').trim();
		if (sOper.length > 0)
		{
			if (ret[ret.length - 1] != '/') ret += '/';

			ret += sOper;

			if (opts)
			{
			const sTail:string = opts.getTail();
				if (sTail.length > 0) ret += sTail;
			}
		}

		return ret;
	}

	private getOptions (): object
	{
		return {
			headers: this.getHeaders(),
			observe: 'response',
			withCredentials: true
		};
	}

	private getHeaders (): HttpHeaders
	{
		return new HttpHeaders();
	}

	private handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<ActionResultHttp<T>> =>
		{
			console.error(err);

		const ret:ActionResultHttp<T> = ActionResultHttp.CreateError<T>(err);
			return of(ret);
		};
	}
}
