import { CALang } from "../models/ca-lang.model";
import {CAObjectUtil} from '@criollapp/common';

describe('CALang', ()=>{
  let model:CALang = new CALang({name: 'es', code: 'es_ES'});

  it('take value if args are on  constructor', ()=>{
    expect( model.name ).toBe('es');
    expect( model.code ).toBe('es_ES');
  });

  it('must be extends XModelAbstract', ()=>{
    expect(model.id < 0).toBeTruthy();
  });

  it('properties must have XJson decorator',()=>{
    expect(CAObjectUtil.objectHasProperties( model.getJsonObject(), ['name','code'] ) ).toBeTruthy();
  });

  it('attrs must have default value', ()=>{
    let otherModel:CALang = new CALang();

    expect(otherModel.name == '').toBeTruthy();
    expect(otherModel.code == '').toBeTruthy();
  });
});
