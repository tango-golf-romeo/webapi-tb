import {ActionResultBase} from "./action-result-base";
import {ActionResultHttp} from "./action-result-http";

export class AppActionResult<SUCCESS,FAILURE> extends ActionResultBase
{
private mSuccess:SUCCESS|null = null;
private mFailure:FAILURE|null = null;
private mHttp:ActionResultHttp<SUCCESS|FAILURE>|null = null;
private mError:any = null; //the error related to the client side, not the operation in question

	constructor (httpRes:ActionResultHttp<SUCCESS|FAILURE>|null, err:any = null)
	{
		super(httpRes?.result ?? false);

		this.http = httpRes;
	}

	public get http (): ActionResultHttp<SUCCESS|FAILURE>|null
	{
		return this.mHttp;
	}

	private set http (val:ActionResultHttp<SUCCESS|FAILURE>|null)
	{
		this.mHttp = val;

		if (this.http)
		{
			if (this.http.result)
				this.success = this.http.payload as SUCCESS;
			else
				this.failure = this.http.payload as FAILURE;
		}
	}

	public get haveHttpResult (): boolean
	{
		return !!this.http;
	}

	public get success (): SUCCESS|null
	{
		return this.mSuccess;
	}

	private set success (val:SUCCESS|null)
	{
		this.mSuccess = val;
	}

	public get haveSuccess (): boolean
	{
		return !!this.success;
	}

	public get failure (): FAILURE|null
	{
		return this.mFailure;
	}

	private set failure (val:FAILURE|null)
	{
		this.mFailure = val;
	}

	public get haveFailure (): boolean
	{
		return !!this.failure;
	}

	public get error (): any
	{
		return this.mError;
	}

	private set error (val:any)
	{
		this.mError = val;
	}

	public get haveError (): boolean
	{
		return !!this.error;
	}
}