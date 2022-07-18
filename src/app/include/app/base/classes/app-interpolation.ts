import {IAppInterpolation} from "../interfaces/iapp-interpolation";

export class AppInterpolation implements IAppInterpolation
{
public forceDisableInterpolation: boolean = false;
public availablePointCount?: number;
public availableBoxPlotCount?: number;
public interpolationIntervalType?: string;
public interpolationInterval?: number;
}