import {IAppAnalyzeMonitoringObjectItem} from "./iapp-analyze-monitoring-object-item";
import {IAppAnalyzerMeasures} from "./iapp-analyzer-measures";
import {IAppDataFilter} from "./iapp-data-filter";

export interface IAppWidgetDataSource
{
	dataFilter: IAppDataFilter;
	analyzeMonitoringObjectList: IAppAnalyzeMonitoringObjectItem[];
	analyzerMeasuresList: IAppAnalyzerMeasures[];
}