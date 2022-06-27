import {IXmtPayload} from "../../xmt/interfaces/xmt-payload";
import {ActionResultBase} from "./action-result-base";
import {PayloadBase} from "./payload-base";

export class ActionResultPayload<T extends IXmtPayload|void> extends ActionResultBase
{
private mPayload:T|null = null;

	constructor (res:boolean = false, pay:T|null = null)
	{
		super(res);
		this.payload = pay;
	}

	public get payload (): T|null
	{
		return this.mPayload;
	}

	private set payload (val:T|null)
	{
		this.mPayload = val;
	}

	public get havePayload (): boolean
	{
		return !!this.payload;
	}
}