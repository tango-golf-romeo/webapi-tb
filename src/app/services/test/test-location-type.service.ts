import {Injectable} from '@angular/core';

import {RcvLocationTypeResponseItem} from 'src/app/include/rcv/classes/rcv-location-type-response-item';
import {XmtLocationTypeItemFinder} from 'src/app/include/xmt/classes/find/xmt-location-type-item-finder';
import {XmtLocationTypeSetItem} from 'src/app/include/xmt/classes/xmt-location-type-set-item';

import {AppLocationTypeService} from '../app/app-location-type.service';

@Injectable
({
  providedIn: 'root'
})
export class TestLocationTypeService
{
  constructor (private locationType: AppLocationTypeService)
  {
  }

  public async createLocationTypeAsync (sName:string, sDesc:string): Promise<number>
  {
  const si:XmtLocationTypeSetItem = new XmtLocationTypeSetItem(sName,sDesc);
  const res = await this.locationType.applyAsync(si);
    return res.success?.locationTypeID ?? -1;
  }

  public async createLocationTypeAsync2 (sName:string, sDesc:string): Promise<RcvLocationTypeResponseItem|null>
  {
  const si:XmtLocationTypeSetItem = new XmtLocationTypeSetItem(sName,sDesc);
  const res = await this.locationType.applyAsync(si);
    return res.success;
  }

  public async deleteLocationTypeAsync (id:number): Promise<boolean>
  {
  const res = await this.locationType.deleteAsync(id);
    return res.result;
  }

  public async getAllLocationTypesAsync (): Promise<RcvLocationTypeResponseItem[]>
  {
  const fnd:XmtLocationTypeItemFinder = new XmtLocationTypeItemFinder();
  const res = await this.locationType.findAsync(fnd);
    return res.success ?? [];
  }
}
