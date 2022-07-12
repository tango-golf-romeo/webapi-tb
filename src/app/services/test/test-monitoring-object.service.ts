import { Injectable } from '@angular/core';
import {RcvMonitoringObjectResponseItem} from 'src/app/include/rcv/classes/rcv-monitoring-object-response-item';
import {XmtMonitoringObjectItemFinder} from 'src/app/include/xmt/classes/find/xmt-monitoring-object-item-finder';
import {AppMonitoringObjectService} from '../app/app-monitoring-object.service';

@Injectable
({
  providedIn: 'root'
})
export class TestMonitoringObjectService
{
  constructor (private mo:AppMonitoringObjectService)
  {
  }

  public async getAllObjectsAsync (): Promise<RcvMonitoringObjectResponseItem[]>
  {
  const fnd:XmtMonitoringObjectItemFinder = new XmtMonitoringObjectItemFinder();
  const res = await this.mo.findAsync(fnd);
    return res?.success ?? [];
  }
}
