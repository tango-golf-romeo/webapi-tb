import {IAppNodeBaseItem} from "../../app/base/interfaces/iapp-node-base-item";

export interface IRcvNodeResponseItem extends IAppNodeBaseItem
{
	nodeID: number;
	modifiedDate: string;
	probeManagerVersion: string;
	ottProbeServiceVersion: string;
	emailerVersion: string;
	scriptProbeVersion: string;
	multiScreenServerVersion: string;
	multiProbeGuardVersion: string;
	mosaicManagerVersion: string;
	isDeleted: boolean;
}