import { Observable } from "rxjs/Observable";
import {XStringResponse, XBooleanResponse, XModelArrayResponse} from '@x/common';

export interface ICALangService
{
  getDefaultLang():Observable<XStringResponse>;

  setDefaultLang(lang:string):Observable<XBooleanResponse>;

  getCurrentLang():Observable<XStringResponse>;

  setCurrentLang(lang:string):Observable<XBooleanResponse>;

  getLangs():Observable<XModelArrayResponse>;

  getLabel(key:string, paramsObject?, lang?:string):Observable<string>;
}
