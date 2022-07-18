import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse,HttpParams} from '@angular/common/http';

import {Observable,OperatorFunction,of,catchError,tap,map,ObservableInput,retry, throwError} from 'rxjs';

import {ApiServices,Constants} from '../../include/base/classes/primal/constants';
import {ActionResultHttp} from '../../include/base/classes/rcv/action-result-http';

@Injectable
({
  providedIn: 'root'
})
export class TransportService
{
private m_sApiPath:string = (Constants.UseExpress?Constants.HttpRootDevIISExpress:Constants.HttpRootDevKestrel) +
	`${Constants.RelativePathWebApi}/`;
  
  constructor (private http:HttpClient)
  {
  }

	private get apiPath (): string
	{
		return this.m_sApiPath;
	}

	public invokePost<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, input:any = {}): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	const sPath:string = this.getPath(svc,op);
		
		return this.http.post<HttpResponse<SUCCESS|FAILURE>>(sPath,input,this.getOptions()).pipe
		(
			retry(0),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	public invokeGet<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, input:any = {}): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	let sPath:string = this.getPath(svc,op);
	const sType:string = typeof input;

		if (sType == 'string')
		{
		const qs = new HttpParams({fromString:input}).toString();
			sPath += ('?' + qs);
		}
		else if (sType == 'number')
		{
			//qs = new HttpParams({fromString:input.toString()}).toString();
			sPath += '/' + input.toString();
		}
		else if (sType == 'object')
		{
		const qs = new HttpParams({fromObject:input}).toString();
			sPath += ('?' + qs);
		}

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

	public invokeDelete<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, id:string|null = null): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	const sPath:string = this.getPath(svc,op,id);
		
		return this.http.delete<HttpResponse<SUCCESS|FAILURE>>(sPath,this.getOptions()).pipe
		(
			retry(0),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	private getPath (svc:ApiServices, op:string|null, id:string|null = null): string
	{
	const s = (svc ?? '').trim();
		if (s.length < 1) throw 'Service base relative path cannot be empty.';

	const sOper:string = (op ?? '').trim();
	const sId:string = (id ?? '').trim();
	
	let ret:string = `${this.apiPath}${svc}/`;
		if (sOper.length > 0) ret += `${sOper}`;
		if (sId.length > 0)
		{
			if (sOper.length > 0) ret += '/';
			ret += `${sId}`;
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
