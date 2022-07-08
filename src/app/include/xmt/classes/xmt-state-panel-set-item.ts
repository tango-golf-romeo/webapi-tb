import {AppStatePanelBaseItem} from "../../app/base/classes/app-state-panel-base-item";
import {IXmtStatePanelSetItem} from "../interfaces/ixmt-state-panel-set-item";

export class XmtStatePanelSetItem extends AppStatePanelBaseItem implements IXmtStatePanelSetItem
{
public statePanelID?: string;

	constructor (sName:string, sDesc:string)
	{
		super(sName,sDesc);
	}
}