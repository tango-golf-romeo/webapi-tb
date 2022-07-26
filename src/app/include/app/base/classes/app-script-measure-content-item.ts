import {IAppScriptMeasureContentItem} from "../interfaces/iapp-script-measure-content-item";
import {AppMeasureItem} from "./app-measure-item";

export class AppScriptMeasureContentItem implements IAppScriptMeasureContentItem
{
public scriptID: string = '';
public measures: AppMeasureItem[] = [];
}