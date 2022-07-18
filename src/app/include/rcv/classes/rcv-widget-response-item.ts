import {AppWidgetBaseItem} from "../../app/base/classes/app-widget-base-item";
import {IRcvWidgetResponseItem} from "../interfaces/ircv-widget-response-item";

export class RcvWidgetResponseItem extends AppWidgetBaseItem implements IRcvWidgetResponseItem
{
public widgetID: string = '';
public modifiedDate: string = '';
public isReadOnly: boolean = false;
}