import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Util } from './Util';
import { IS_DEBUG, APP_ONLINE_SERVE_URL, APP_VERSION_SERVE_URL, APP_VERSION_NET_URL } from './constants.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  name: string;
  url2: string;
  url3: string;

  constructor(
    public http: HttpClient,
    public util: Util
  ) {
    if (IS_DEBUG) {
      this.url = APP_VERSION_SERVE_URL;
    } else {
      this.url = APP_ONLINE_SERVE_URL;
    }
    // this.url3 = APP_VERSION_NET_URL;
  }

  getNet(url: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(url, reqOpts);
  }





  get(url: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(url, reqOpts);
  }

  geturl(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }
  postFormData(endpoint: string, params?: any, reqOpts?: any) {
    const par = {}; // 重新组合参数数组
    if (params) {
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          par[k] = params[k];
        }
      }
    }
    return this.http.post(this.url + endpoint, this.buildURLSearchParams(par), reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {

    return this.http.post(this.url + endpoint, body, reqOpts);
  }
  post2(endpoint: string, body: any, reqOpts?: any) {

    return this.http.post(this.url2 + endpoint, body, reqOpts);
  }

  posturl(url: any, body: any, reqOpts?: any) {
    return this.http.post(url, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + endpoint, body, reqOpts);
  }
  private buildURLSearchParams(paramMap) {
    if (!paramMap) {
      return new HttpParams({ fromString: '' });
    }
    // tslint:disable-next-line:prefer-const
    let formstr = Object.keys(paramMap).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(paramMap[key]);
    }).join('&');
    return new HttpParams({ fromString: formstr });
  }
}
