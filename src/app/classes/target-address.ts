export class TargetAddress
{
public static readonly DefaultUrl:string = 'http://localhost:5000/';

private m_sUrl:string = TargetAddress.DefaultUrl;

	constructor (sUrl:string|null = null)
	{
		this.url = sUrl;
	}

	public get url (): string
	{
		return this.m_sUrl;
	}

	private set url (val:string|null)
	{
	let s = (val ?? '').trim();
		if (s.length < 1) s = TargetAddress.DefaultUrl;
		if (s[s.length - 1] != '/') s += '/';

		this.m_sUrl = s;
	}
}