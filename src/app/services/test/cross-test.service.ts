import {Injectable} from '@angular/core';

import {RcvLocationResponseItem} from 'src/app/include/rcv/classes/rcv-location-response-item';
import {RcvMonitoringObjectResponseItem} from 'src/app/include/rcv/classes/rcv-monitoring-object-response-item';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {RcvNodeSettingsResponseItem} from 'src/app/include/rcv/classes/rcv-node-settings-response-item';
import {RcvUserResponseItem} from 'src/app/include/rcv/classes/rcv-user-response-item';
import {RcvGroupResponseItem} from 'src/app/include/rcv/classes/rec-group-response-item';

import {TestGroupService} from './test-group.service';
import {TestLocationService} from './test-location.service';
import {TestMonitoringObjectService} from './test-monitoring-object.service';
import {TestNodeService} from './test-node.service';
import {TestUserService} from './test-user.service';

@Injectable
({
  providedIn: 'root'
})
export class CrossTestService
{
  constructor (private group:TestGroupService,
    private location:TestLocationService,
    private mo:TestMonitoringObjectService,
    private node:TestNodeService,
    private user:TestUserService)
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
  const all:RcvMonitoringObjectResponseItem[] = await this.mo.getAllObjectsAsync();
  const byZeroNode:RcvMonitoringObjectResponseItem[] = all.filter(e => (e.nodeID ?? -1) == 0);
    return true;
  }

  public async testSlms7587Async (): Promise<boolean>
  {
  const bUpdateZero:boolean = await this.node.updateZeroNodeAsync();
  
  const allNodes:RcvNodeResponseItem[] = await this.node.getAllNodesAsync();
  const ids:number[] = allNodes.map(e => e.nodeID);

  const roNodes:RcvNodeResponseItem[] = allNodes.filter(e => e.isReadOnly);

  const res = await this.node.getSettingsAsync(0);
  const res2 = await this.node.getSettingsAsync(999);

  const allNodeSettings:RcvNodeSettingsResponseItem[] = await this.node.getSettingsOfAllNodesAsync(ids);
  const roNodeSettings:RcvNodeSettingsResponseItem[] = allNodeSettings.filter(e => e.isReadOnly);

    return true;
  }

  public async testSlms7632Async (): Promise<boolean>
  {
  const usr:RcvUserResponseItem|null = await this.user.createNewUserAsync('usrtgu1','tgu user 1','mylongpassword');
    return true;
  }
}
