import {Injectable} from '@angular/core';
import {RcvLocationResponseItem} from 'src/app/include/rcv/classes/rcv-location-response-item';
import {RcvLocationTypeResponseItem} from 'src/app/include/rcv/classes/rcv-location-type-response-item';
import {XmtLocationItemFinder} from 'src/app/include/xmt/classes/find/xmt-location-item-finder';

import {XmtLocationSetItem} from 'src/app/include/xmt/classes/xmt-location-set-item';
import {AppLocationService} from '../app/app-location.service';

@Injectable
({
  providedIn: 'root'
})
export class TestLocationService
{
  constructor (private location:AppLocationService)
  {
  }

	public async createLocationAsync (sName:string, sDesc:string): Promise<number>
	{
	const si:XmtLocationSetItem = new XmtLocationSetItem(sName,sDesc);
    si.parentID = 1; //system location parent
	
	const res = await this.location.applyAsync(si);
    return res.success?.locationID ?? -1;
	}

	public async createLocationAsync2 (sName:string, sDesc:string): Promise<RcvLocationResponseItem|null>
	{
	const si:XmtLocationSetItem = new XmtLocationSetItem(sName,sDesc);
    si.parentID = 1; //system location parent
	
	const res = await this.location.applyAsync(si);
    return res.success;
	}

	public async createLocationAsync3 (sName:string, sDesc:string, locTypeId:number): Promise<RcvLocationResponseItem|null>
	{
	const si:XmtLocationSetItem = new XmtLocationSetItem(sName,sDesc);
    si.parentID = 1; //system location parent
    si.locationTypeID = locTypeId;
	
	const res = await this.location.applyAsync(si);
    return res.success;
	}

	public async createChildLocationWithGroupAsync (sName:string, sDesc:string, grpId:number): Promise<number>
	{
	const si:XmtLocationSetItem = new XmtLocationSetItem(sName,sDesc);
    si.parentID = 1; //system location parent
    si.groupIDs = [grpId];
	
	const res = await this.location.applyAsync(si);
    return res.success?.locationID ?? -1;
	}

	public async bindGroupAsync (locId:number, grpId:number): Promise<number>
	{
	const si:XmtLocationSetItem = new XmtLocationSetItem('tgu 1','tgu test lcoation 1');
    si.locationID = locId;
    si.groupIDs = [grpId];
	
	const res = await this.location.applyAsync(si);
    return res.success?.locationID ?? -1;
	}

  public async bindLocationType (curr:RcvLocationResponseItem|null, locTypeId:number): Promise<RcvLocationResponseItem|null>
  {
    if (!curr) return null;

  const si:XmtLocationSetItem = curr.cloneSetItem();
    si.locationTypeID = locTypeId;

  const res = await this.location.applyAsync(si);
    return res.success;
  }

  public async deleteLocationAsync (locId:number): Promise<boolean>
  {
  const res = await this.location.deleteAsync(locId);
    return res?.result ?? false;
  }

  public async getAllLocationsAsync (): Promise<RcvLocationResponseItem[]>
  {
  const fnd:XmtLocationItemFinder = new XmtLocationItemFinder();
  const res = await this.location.findAsync(fnd);
    return res.success ?? [];
  }
}
