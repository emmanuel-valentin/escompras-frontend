import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const jwtToken = localStorage.getItem('token');

  if (jwtToken) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
    });
    return next(cloned);
  }

  return next(req);
}
