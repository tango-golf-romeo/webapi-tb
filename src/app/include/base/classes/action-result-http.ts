import {HttpErrorResponse,HttpResponse} from '@angular/common/http';
import {IXmtPayload} from '../../xmt/interfaces/xmt-payload';

import {ActionResultPayload} from "./action-result-payload";
import {PayloadBase} from "./payload-base";

export class ActionResultHttp<T extends IXmtPayload|void> extends ActionResultPayload<T>
{
private mResponse:HttpResponse<T>|null = null;
private mError:HttpErrorResponse|null = null;

	public static Create<SUCCESS,FAILURE> (resp:HttpResponse<SUCCESS|FAILURE>): ActionResultHttp<SUCCESS|FAILURE>
	{
	const respSuccess = resp as HttpResponse<SUCCESS>;
		if (respSuccess) return new ActionResultHttp<SUCCESS>(true,null,respSuccess,null);
		
	const respFail = resp as HttpResponse<FAILURE>;
		if (respFail) return new ActionResultHttp<FAILURE>(true,null,respFail,null);

		if (resp.ok)
			return new ActionResultHttp<SUCCESS>(true,null,respSuccess,null);
		else
			return new ActionResultHttp<FAILURE>(true,null,respFail,null);
	}

	public static CreateSuccess<T> (resp:HttpResponse<T>): ActionResultHttp<T>
	{
		return new ActionResultHttp<T>(true,null,resp,null);
	}

	public static CreateError<T> (err:any): ActionResultHttp<T>
	{
	const errResp = err as HttpErrorResponse;
		return errResp?new ActionResultHttp<T>(false,null,null,errResp):new ActionResultHttp<T>();
	}

	constructor (res:boolean = false, pay:T|null = null, resp:HttpResponse<T>|null = null, err:HttpErrorResponse|null = null)
	{
		super(res,pay?pay:(resp?resp.body:err?.error));

		this.response = resp;
		this.error = err;
	}

	public get response (): HttpResponse<T>|null
	{
		return this.mResponse;
	}

	private set response (val:HttpResponse<T>|null)
	{
		this.mResponse = val;
	}

	public get haveResponse (): boolean
	{
		return !!this.response;
	}

	public get error (): HttpErrorResponse|null
	{
		return this.mError;
	}

	private set error (val:HttpErrorResponse|null)
	{
		this.mError = val;
	}

	public get haveError (): boolean
	{
		return !!this.error;
	}
}