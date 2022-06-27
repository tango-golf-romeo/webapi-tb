import {IXmtActionResultBase} from "../../xmt/interfaces/xmt-action-result-base";
import {IXmtPayload} from "../../xmt/interfaces/xmt-payload";

export class ActionResult implements IXmtActionResultBase<IXmtPayload>
{
private m_bResult:boolean = false;
private mPayload:IXmtPayload|null = null;

	constructor (res:boolean = false, pay:IXmtPayload|null = null)
	{
		this.result = res;
		this.payload = pay;
	}

	public get result (): boolean
	{
		return this.m_bResult;
	}

	private set result (val:boolean)
	{
		this.m_bResult = val;
	}

	public get payload (): IXmtPayload|null
	{
		return this.mPayload;
	}

	private set payload (val:IXmtPayload|null)
	{
		this.mPayload = val;
	}

	public get havePayload (): boolean
	{
		return (this.payload != null);
	}
}