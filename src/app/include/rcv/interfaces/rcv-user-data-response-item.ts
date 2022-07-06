import {IRcvUserDataProfile} from './rcv-user-data-profile';

export interface IRcvUserDataResponseItem
{
	get profile (): IRcvUserDataProfile;
}