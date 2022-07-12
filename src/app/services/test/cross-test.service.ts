import {Injectable} from '@angular/core';

import {RcvLocationResponseItem} from 'src/app/include/rcv/classes/rcv-location-response-item';
import {RcvMonitoringObjectResponseItem} from 'src/app/include/rcv/classes/rcv-monitoring-object-response-item';
import {RcvGroupResponseItem} from 'src/app/include/rcv/classes/rec-group-response-item';

import {TestGroupService} from './test-group.service';
import {TestLocationService} from './test-location.service';
import {TestMonitoringObjectService} from './test-monitoring-object.service';

@Injectable
({
  providedIn: 'root'
})
export class CrossTestService
{
  constructor (private group:TestGroupService, private location:TestLocationService, private mo:TestMonitoringObjectService)
  {
  }

  public async testSlms7578Async (): Promise<boolean>
  {
  const grpId:number = await this.group.createGroupAsync();
  const locId:number = await this.location.createLocationAsync();
  const locId2:number = await this.location.bindGroupAsync(locId,grpId);
  const locs1:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  const res:boolean = await this.group.deleteGroupAsync(grpId);
  const locs2:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();

    return true;
  }

  public async testSlms7576Async (): Promise<boolean>
  {
  const grps1:RcvGroupResponseItem[] = await this.group.getAllAccesssibleGroupsAsync();
  const grpId:number = await this.group.createGroupAsync();
  const grps2:RcvGroupResponseItem[] = await this.group.getAllAccesssibleGroupsAsync();

  const locs1:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  const locId:number = await this.location.createChildLocationWithGroupAsync(grpId);
  
  const locs2:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  let res:boolean = await this.location.deleteLocationAsync(locId);

  const grps3:RcvGroupResponseItem[] = await this.group.getAllAccesssibleGroupsAsync();

    res = await this.group.deleteGroupAsync(grpId);

    return true;
  }

  public async testSlms7596Async (): Promise<boolean>
  {
  const objs:RcvMonitoringObjectResponseItem[] = await this.mo.getAllObjectsAsync();
  const obj:RcvMonitoringObjectResponseItem|undefined = objs.find(e => (e.nodeID ?? -1) == 0);
    return true;
  }
}
