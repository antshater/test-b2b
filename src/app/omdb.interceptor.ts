import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export class OmdbInterceptor implements HttpInterceptor {
  private domain = 'https://www.omdbapi.com';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const params = req.params.append('apikey', environment.omdbApiKey);
    return next.handle(req.clone({url: this.domain + req.url, params}));
  }
}
