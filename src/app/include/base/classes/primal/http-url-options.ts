import {HttpParams} from "@angular/common/http";

export type UrlQueryPayload = string|number|object|null;

export class HttpUrlOptions
{
private m_bQuery = false;
private mPayload:UrlQueryPayload = null;

	public static GetQueryString (pay:UrlQueryPayload): HttpUrlOptions
	{
	const ret:HttpUrlOptions = new HttpUrlOptions(true,pay);
		return ret;
	}

	public static GetUrlSegment (pay:UrlQueryPayload): HttpUrlOptions
	{
	const ret:HttpUrlOptions = new HttpUrlOptions(false,pay);
		return ret;
	}

	constructor (bQuery:boolean, pay:UrlQueryPayload)
	{
		this.query = bQuery;
		this.payload = pay;
	}

	public get query (): boolean
	{
		return this.m_bQuery;
	}

	private set query (val:boolean)
	{
		this.m_bQuery = val;
	}

	public get payload (): UrlQueryPayload
	{
		return this.mPayload;
	}

	private set payload (val:UrlQueryPayload)
	{
		this.mPayload = val;
	}

	public get tail (): string
	{
	const sType:string = typeof this.payload;

		if (sType == 'string')
		{
		const s:string = (this.payload as string ?? '').trim();
			if (s.length < 1) return s;

			if (this.query)
			{
			const qs = new HttpParams({fromString:s}).toString();
				return ('?' + qs);
			}
			else
				return '/' + s
		}
		else if (sType == 'number')
			return '/' + (this.payload as number).toString();
		else if (sType == 'object')
		{
		const obj:any = this.payload as object;
		const qs = new HttpParams({fromObject:obj}).toString();
			return '?' + qs;
		}

		return '';
	}
}