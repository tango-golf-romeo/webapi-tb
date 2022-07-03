import {DOCUMENT,ɵparseCookieValue as parseCookieValue} from '@angular/common';
import {Inject,Injectable,PLATFORM_ID} from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpXsrfTokenExtractor} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class HttpXsrfCookieExtractor implements HttpXsrfTokenExtractor
{
private lastCookieString: string = '';
private lastToken: string|null = null;

  constructor (@Inject(DOCUMENT) private doc: any, @Inject(PLATFORM_ID) private platform: string)
  {
  }

  getToken (): string|null
  {
    if (this.platform === 'server') return null;

  const cookieString = this.doc.cookie || '';
    if (cookieString !== this.lastCookieString)
    {
      this.lastToken = parseCookieValue(cookieString,'access_token');
      this.lastCookieString = cookieString;
    }
    return this.lastToken;
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
  constructor (private extractor:HttpXsrfTokenExtractor)
  {
  }

  intercept (req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>
  {
  const csrfToken = this.extractor.getToken() as string;
    
    if (csrfToken && !req.headers.has('X-XSRF-TOKEN'))
    {
      req = req.clone(
      {
        headers: req.headers.set('X-XSRF-TOKEN',csrfToken),
        withCredentials: true
      });
    }

    return next.handle(req);
  }
}