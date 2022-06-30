import {IRcvPayloadBase} from '../../base/interfaces/rcv/rcv-payload-base';
import {IRcvUserDataProfile} from './rcv-user-data-profile';

export interface IRcvUserDataResponseItem extends IRcvPayloadBase
{
	get profile (): IRcvUserDataProfile;
}