import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse,HttpParams} from '@angular/common/http';

import {Observable,OperatorFunction,of,catchError,tap,map,ObservableInput,retry} from 'rxjs';

import {ApiServices,Constants} from '../include/base/classes/primal/constants';
import {SessionService} from './session.service';
import {ActionResultHttp} from '../include/base/classes/rcv/action-result-http';

@Injectable
({
  providedIn: 'root'
})
export class TransportService
{
private static IdHeader:string = 'idcwebapi-id';

private m_sApiPath:string = (Constants.UseExpress?Constants.HttpRootDevIISExpress:Constants.HttpRootDevKestrel) +
	`${Constants.RelativePathWebApi}/`;
  
  constructor (private http:HttpClient, private session:SessionService)
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
			retry(1),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	public invokeGet<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, input:any = {}): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	let sPath:string = this.getPath(svc,op);

		if (typeof input == 'string')
		{
		const qs = new HttpParams({fromString:input}).toString();
			sPath += ('?' + qs);
		}
		else if (typeof input == 'object')
		{
		const qs = new HttpParams({fromObject:input}).toString();
			sPath += ('?' + qs);
		}

		return this.http.get<HttpResponse<SUCCESS|FAILURE>>(sPath,this.getOptions()).pipe
		(
			retry(1),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	public invokePut<SUCCESS,FAILURE> (svc:ApiServices, op:string|null, input:any = {}): Observable<ActionResultHttp<SUCCESS|FAILURE>>
	{
	const sPath:string = this.getPath(svc,op);
		
		return this.http.put<HttpResponse<SUCCESS|FAILURE>>(sPath,input,this.getOptions()).pipe
		(
			retry(1),
			map((resp:HttpResponse<SUCCESS|FAILURE>) => ActionResultHttp.Create(resp)),
			catchError(this.handleError<FAILURE>())
		);
	}

	private getPath (svc:ApiServices, op:string|null): string
	{
	const sOper:string = (op ?? '').trim();
	
	let ret:string = `${this.apiPath}${svc}/`;
		if (sOper.length > 0) ret += `${sOper}`;

		return ret;
	}

	private getOptions (): object
	{
		return {headers:this.getHeaders(),observe:'response'};
	}

	private getHeaders (): HttpHeaders
	{
		if (this.session.id.length)
			return new HttpHeaders().set(TransportService.IdHeader,this.session.id);
		else
			return new HttpHeaders();
	}

	private handleError<T> (): OperatorFunction<T,any>
	{
		return (err:any): Observable<ActionResultHttp<T>> =>
		{
		const ret:ActionResultHttp<T> = ActionResultHttp.CreateError<T>(err);
			console.error(err);
			return of(ret);
		};
	}
}
