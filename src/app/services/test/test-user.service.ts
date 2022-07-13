import {Injectable} from '@angular/core';
import {RcvUserResponseItem} from 'src/app/include/rcv/classes/rcv-user-response-item';

import {XmtUserSetItem} from 'src/app/include/xmt/classes/xmt-user-set-item';

import {AppUserService} from '../app/app-user.service';

@Injectable
({
  providedIn: 'root'
})
export class TestUserService
{
  constructor (private user:AppUserService)
  {
  }

  public async createNewUserAsync (sLogin:string, sUser:string, sPassword:string): Promise<RcvUserResponseItem|null>
  {
  const si:XmtUserSetItem = new XmtUserSetItem(sLogin,sUser,sPassword);
  const res = await this.user.applyAsync(si);
    return res.success;
  }
}
