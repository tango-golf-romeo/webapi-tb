import {Injectable} from '@angular/core';
import {AppScriptMeasureContentItem} from 'src/app/include/app/base/classes/app-script-measure-content-item';

import {AppScriptMeasureService} from '../app/app-script-measure.service';

@Injectable
({
  providedIn: 'root'
})
export class TestScriptMeasureService
{
  constructor (private sm:AppScriptMeasureService)
  {
  }

  public async getContentAsync (id:string): Promise<AppScriptMeasureContentItem|null>
  {
  const res = await this.sm.getContentAsync(id);
    return res.success;
  }

  public async setContentAsync (obj:AppScriptMeasureContentItem): Promise<AppScriptMeasureContentItem|null>
  {
    if (!obj) return obj;

  const res = await this.sm.setContentAsync(obj);
    return res.success;
  }
}
