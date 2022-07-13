import {IXmtUserItemFinder} from "../../interfaces/find/ixmt-user-item-finder";

export class XmtUserItemFinder implements IXmtUserItemFinder
{
	userID?: string;
	loginName: string = '';
	findByUserID?: string;
}