import {IAppWidgetDataSource} from "../interfaces/iapp-widget-data-source";
import {AppAnalyzeMonitoringObjectItem} from "./app-analyze-monitoring-object-item";
import {AppAnalyzerMeasures} from "./app-analyzer-measures";
import {AppDataFilter} from "./app-data-filter";

export class AppWidgetDataSource implements IAppWidgetDataSource
{
	dataFilter: AppDataFilter = new AppDataFilter();
	analyzeMonitoringObjectList: AppAnalyzeMonitoringObjectItem[] = [];
	analyzerMeasuresList: AppAnalyzerMeasures[] = [];
}