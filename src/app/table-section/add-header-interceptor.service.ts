import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

@Injectable()
export class AddHeaderInterceptorService implements HttpInterceptor {
  constructor() {}

  // tslint:disable-next-line: no-unused-expression
  intercept(res: HttpRequest<any>, next: HttpHandler) {
    const jsonReq: HttpRequest<any> = res.clone({
      setHeaders: { 'X-Auth-Token': 'cd5381a90c8245689142d87d308ed79a' }
    });

    return next.handle(jsonReq);
  }
}
