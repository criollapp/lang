import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {XStringResponse, XBooleanResponse, XModelArrayResponse} from '@x/common';
import { ICALangService } from "../../interfaces/i-ca-lang-service.interface";
import { CALang } from "../../models/ca-lang.model";

@Injectable()
export class TestICALangServiceImplementation implements ICALangService
{
  public fakeTranslationObject;

  public _defaultLang:XStringResponse;
  public _currentLang:XStringResponse;
  public _booleanResponse:XBooleanResponse;

  constructor()
  {
    this.fakeTranslationObject = TestICALangServiceImplementation.FAKE_VALUE;
    this._booleanResponse = new XBooleanResponse();
    this._booleanResponse.data = true;
    this._defaultLang = new XStringResponse();
    this._currentLang = new XStringResponse();
  }

  static get FAKE_VALUE()
  {
    return {
      "es": {
        "FORMS.DEFAULT_FAIL": "Este formulario no tiene una accion implementada."
      },
      "en": {
        "FORMS.DEFAULT_FAIL": "This form does not have an action implemented."
      }
    };
  }

  getDefaultLang(): Observable<XStringResponse>
  {
    return Observable.of(this._defaultLang);
  }

  setDefaultLang(lang: string): Observable<XBooleanResponse>
  {
    this._defaultLang.data = lang;
    return Observable.of(this._booleanResponse);
  }

  getCurrentLang(): Observable<XStringResponse>
  {
    return Observable.of(this._currentLang);
  }

  setCurrentLang(lang: string): Observable<XBooleanResponse>
  {
    this._currentLang.data = lang;
    return Observable.of(this._booleanResponse);
  }

  getLangs(): Observable<XModelArrayResponse>
  {
    let response:XModelArrayResponse = new XModelArrayResponse();
    response.data = [ new CALang({name: 'es'}), new CALang({name: 'en'}) ];
    return Observable.of(response);
  }

  getLabel(key, paramsObject?):Observable<string>
  {
    let label = key;
    if( this.fakeTranslationObject[this._currentLang.data].hasOwnProperty(key) )
    {
      label = this.fakeTranslationObject[this._currentLang.data][key];
    }
    return Observable.of(label);
  }
}

