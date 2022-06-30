export class ActionResultBase
{
private m_bResult:boolean = false;

	constructor (res:boolean = false)
	{
		this.result = res;
	}

	public get result (): boolean
	{
		return this.m_bResult;
	}

	private set result (val:boolean)
	{
		this.m_bResult = val;
	}
}