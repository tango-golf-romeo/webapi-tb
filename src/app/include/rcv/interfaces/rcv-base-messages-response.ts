export interface IRcvBaseMessagesResponse
{
	get $type (): string;
	get error (): string;
	get message (): string;
}