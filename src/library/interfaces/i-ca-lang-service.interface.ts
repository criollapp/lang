import { Observable } from "rxjs/Observable";
import {CAStringResponse, CABooleanResponse, CAModelArrayResponse} from '@criollapp/common';

export interface ICALangService
{
  getDefaultLang():Observable<CAStringResponse>;

  setDefaultLang(lang:string):Observable<CABooleanResponse>;

  getCurrentLang():Observable<CAStringResponse>;

  setCurrentLang(lang:string):Observable<CABooleanResponse>;

  getLangs():Observable<CAModelArrayResponse>;

  getLabel(key:string, paramsObject?, lang?:string):Observable<string>;
}
