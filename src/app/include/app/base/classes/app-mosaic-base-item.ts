import {IAppMosaicBaseItem} from "../interfaces/iapp-mosaic-base-item";
import {AppBaseItem} from "./app-base-item";

export class AppMosaicBaseItem extends AppBaseItem implements IAppMosaicBaseItem
{
public columnCount: number = 1;
public rowCount: number = 1;
public renderingRange: number = 0;
public width: number = 200;
public height: number = 100;
public preferredGPUSocket?: number;
public nodeID: number = -1;
public presetMosaicID?: number;
public isDisabled: boolean = false;
public isTemporary: boolean = false;
public mosaicType: string = 'staticMosaic';
public statePanelIDs: string[] = [];
}