import {AppStatePanelBaseItem} from "../../app/base/classes/app-state-panel-base-item";
import {IRcvStatePanelResponseItem} from "../interfaces/ircv-state-panel-response-item";

export class RcvStatePanelResponseItem extends AppStatePanelBaseItem implements IRcvStatePanelResponseItem
{
	statePanelID:string = '';

	constructor (sName:string, sDesc:string)
	{
		super(sName,sDesc);
	}
}