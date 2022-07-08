import {Injectable} from '@angular/core';

import {XmtProcSetItem} from 'src/app/include/xmt/classes/xmt-proc-set-item';
import {IXmtProcSetItem} from 'src/app/include/xmt/interfaces/ixmt-proc-set-item';

import {AppProcService} from '../app/app-proc.service';

@Injectable
({
  providedIn: 'root'
})
export class TestProcService
{
  constructor (private proc:AppProcService)
  {
  }

  public async testUpdate (): Promise<boolean>
  {
  const si:IXmtProcSetItem = new XmtProcSetItem(2151103,22,220000);
  const res = await this.proc.updateAsync(si);
    return res?.result ?? false;
  }
}
