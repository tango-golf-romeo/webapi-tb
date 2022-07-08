import {IXmtLoginItem} from "../interfaces/ixmt-login-item";

export class XmtLoginItem implements IXmtLoginItem
{
public login: string = '';
public password: string = '';
public target: string = ''; //not used so far

	constructor (sUsr:string, sPwd:string)
	{
		this.login = sUsr;
		this.password = sPwd;
	}
}