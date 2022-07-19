import {IRcvWebPreviewManagerResponseItem} from "../interfaces/ircv-web-preview-manager-response-item";

export class RcvWebPreviewManagerResponseItem implements IRcvWebPreviewManagerResponseItem
{
public url: string = '';
public mosaicID?: string;
public mosaicName: string = '';
public streamEncoderID?: string;
public streamEncoderName: string = '';
public errorMessage: string = '';
}