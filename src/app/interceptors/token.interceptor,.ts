import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UtilityService } from '../services/utility/utility.service';

@Injectable()
export class TokenInterceptor {
    constructor(
        private _utility: UtilityService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._utility.spinOn()
        let tokenizedReq = req.clone({
            setHeaders: {

            }
        })
        return next.handle(tokenizedReq).pipe(
            tap(
                (data) => {
                    if (data instanceof HttpResponse) {
                        this._utility.spinOff()
                    }
                },
                (err: any) => {
                    this._utility.spinOff()
                }
            )
        );
    }
}
