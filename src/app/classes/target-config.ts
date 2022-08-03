import {TargetAddress} from "./target-address";

export class TargetConfig
{
private static readonly CrumbName = 'WebApiTestBedConfig';

private mTargetAddr:TargetAddress = null!;

	public static Create (): TargetConfig
	{
		try
		{
		const me:string|null = (window.localStorage.getItem(TargetConfig.CrumbName) ?? '').trim();
			if (me.length < 1) throw 'No config object stored.';

		const ret:TargetConfig = JSON.parse(me) as TargetConfig;
			return ret ?? new TargetConfig();
		}
		catch
		{
			return new TargetConfig();
		}
	}

	constructor (addr:TargetAddress|null = null)
	{
		this.targetAddress = addr;
	}

	public get targetAddress (): TargetAddress
	{
		return this.mTargetAddr;
	}

	public set targetAddress (val:TargetAddress|null)
	{
		this.mTargetAddr = val ?? new TargetAddress();
	}

	public save (): void
	{
	const me:string = JSON.stringify(this);
		window.localStorage.setItem(TargetConfig.CrumbName,me);
	}
}