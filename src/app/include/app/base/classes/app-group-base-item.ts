export class AppGroupBaseItem
{
public name: string = '';
public description: string = '';

	constructor (sName:string, sDesc:string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}