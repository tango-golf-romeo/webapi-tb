import {IXmtPayload} from './xmt-payload';
import {IXmtUserSessionData} from './xmt-user-session-data';

export interface IXmtUserData extends IXmtPayload
{
	get profile (): IXmtUserSessionData;
}