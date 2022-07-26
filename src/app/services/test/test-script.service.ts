import {Injectable} from '@angular/core';
import {RcvScriptResponseItem} from 'src/app/include/rcv/classes/rcv-script-response-item';
import {XmtScriptItemFinder} from 'src/app/include/xmt/classes/find/xmt-script-item-finder';

import {AppScriptService} from '../app/app-script.service';

@Injectable
({
  providedIn: 'root'
})
export class TestScriptService
{
  constructor (private script:AppScriptService)
  {
  }

  public async getAllScriptsAsync (): Promise<RcvScriptResponseItem[]>
  {
  const fnd:XmtScriptItemFinder = new XmtScriptItemFinder();
  const res = await this.script.findAsync(fnd);
    return res.success ?? [];
  }
}
