import {Injectable} from '@angular/core';

import {RcvLocationResponseItem} from 'src/app/include/rcv/classes/rcv-location-response-item';

import {TestGroupService} from './test-group.service';
import {TestLocationService} from './test-location.service';

@Injectable
({
  providedIn: 'root'
})
export class CrossTestService
{
  constructor (private group:TestGroupService, private location:TestLocationService)
  {
  }

  public async testAsync (): Promise<boolean>
  {
  const grpId:number = await this.group.createGroupAsync();
  const locId:number = await this.location.createLocationAsync();
  const locId2:number = await this.location.bindGroupAsync(locId,grpId);
  const locs1:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  const res:boolean = await this.group.deleteGroupAsync(grpId);
  const locs2:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();

    return true;
  }
}
