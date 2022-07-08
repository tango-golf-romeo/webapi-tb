import {IRcvUserDataProfile} from "../interfaces/ircv-user-data-profile";

export class RcvUserDataProfile implements IRcvUserDataProfile
{
public userID: string = '';
public loginName: string = '';
public userName: string = '';
public email: string = '';
public userToken: string = '';
public machineID: string = '';
public featureIDList: number[] = [];
public userRoleIDs: number[] = [];
//time zone settings skipped so far
}