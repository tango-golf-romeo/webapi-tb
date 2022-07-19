import {Injectable} from '@angular/core';
import {AppActionResult} from 'src/app/include/base/classes/rcv/app-action-result';
import {RcvMessagesResponse} from 'src/app/include/rcv/classes/rcv-messages-response';
import {RcvWebPreviewManagerResponseItem} from 'src/app/include/rcv/classes/rcv-web-preview-manager-response-item';

import {AppWebPreviewService} from '../app/app-web-preview.service';

@Injectable
({
  providedIn: 'root'
})
export class TestWebPreviewService
{
  constructor (private webPreview: AppWebPreviewService)
  {
  }

  public async getPreviewUrlAsync (id:string): Promise<AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>>
  {
  const res = await this.webPreview.getPreviewUrlAsync(id);
    return res;
  }

  public async getMosaicPreviewUrlAsync (id:string): Promise<AppActionResult<RcvWebPreviewManagerResponseItem,RcvMessagesResponse>>
  {
  const res = await this.webPreview.getMosaicPreviewUrlAsync(id);
    return res;
  }
}
