export class TargetHost
{
private m_sTarget:string = '';

	constructor ()
	{
	}

	public get target (): string
	{
		return this.m_sTarget;
	}

	public set target (val:string)
	{
		this.m_sTarget = (val ?? '').trim();
	}
}