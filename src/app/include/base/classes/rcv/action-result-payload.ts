import {ActionResultBase} from "./action-result-base";
import {RcvPayloadBase} from "./rcv-payload-base";

export class ActionResultPayload<T extends RcvPayloadBase|void> extends ActionResultBase
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