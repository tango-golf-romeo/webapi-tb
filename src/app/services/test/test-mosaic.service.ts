import {Injectable} from '@angular/core';
import {RcvMosaicResponseItem} from 'src/app/include/rcv/classes/rcv-mosaic-response-item';
import {XmtMosaicItemFinder} from 'src/app/include/xmt/classes/find/xmt-mosaic-item-finder';

import {XmtMosaicSetItem} from 'src/app/include/xmt/classes/xmt-mosaic-set-item';

import {AppMosaicService} from '../app/app-mosaic.service';

@Injectable
({
  providedIn: 'root'
})
export class TestMosaicService
{
  constructor (private mosaic:AppMosaicService)
  {
  }

	private async createMosaics (): Promise<string[]>
	{
	const si1:XmtMosaicSetItem = new XmtMosaicSetItem('tgu msc 1','tgu mosaic 1',0);
	const si2:XmtMosaicSetItem = new XmtMosaicSetItem('tgu msc 2','tgu mosaic 2',0);
	const si3:XmtMosaicSetItem = new XmtMosaicSetItem('tgu msc 3','tgu mosaic 3',0);
	
	const res1 = await this.mosaic.applyAsync(si1);
	const res2 = await this.mosaic.applyAsync(si2);
	const res3 = await this.mosaic.applyAsync(si3);

	const ret = new Array();
		if (res1?.result) ret.push(res1.success?.mosaicID);
		if (res2?.result) ret.push(res2.success?.mosaicID);
		if (res3?.result) ret.push(res3.success?.mosaicID);

		return ret;
	}

	private async deleteMosaics (ids:string[]): Promise<void>
	{
		ids.forEach(async id => 
		{
			await this.mosaic.deleteAsync(id);
		});
	}

	private async createAndDeleteMosaics (): Promise<void>
	{
	const ids:string[] = await this.createMosaics();
		await this.deleteMosaics(ids);		
	}

  private async createSingleMosaic (): Promise<string>
  {
  const si:XmtMosaicSetItem = new XmtMosaicSetItem('tgu msc 1','tgu mosaic 1',0);
	
	const res = await this.mosaic.applyAsync(si);
    return res?.success?.mosaicID ?? '';
  }

  public async findMosaicsAsync (): Promise<boolean>
  {
  const mscId = await this.createSingleMosaic();
    if (mscId.length < 1) return false;

  const fnd:XmtMosaicItemFinder = new XmtMosaicItemFinder();
    fnd.mosaicID = mscId;

  const res = await this.mosaic.findAsync(fnd);
    if (res?.result)
    {
    const mosaics:RcvMosaicResponseItem[]|null = res.success;
      if (mosaics)
      {
      }
    }

    return true;
  }
}
