import { TestICALangServiceImplementation } from "./utils/test-i-ca-lang-service-implementation.util";
import { ICALangService } from "../interfaces/i-ca-lang-service.interface";
import { Observable } from "rxjs";

describe('ICALangService', ()=>{
  let service:ICALangService = new TestICALangServiceImplementation();

  it('has getDefaultLang method', ()=>{
    expect( service.getDefaultLang() instanceof Observable ).toBeTruthy();
  });

  it('has setDefaultLang method', ()=>{
    expect( service.setDefaultLang('en') instanceof Observable ).toBeTruthy();
  });

  it('has getCurrentLang method', ()=>{
    expect( service.getCurrentLang() instanceof Observable ).toBeTruthy();
  });

  it('has setCurrentLang method', ()=>{
    expect( service.setCurrentLang('en') instanceof Observable ).toBeTruthy();
  });

  it('has getLangs method', ()=>{
    expect( service.getLangs() instanceof Observable ).toBeTruthy();
  });

  it('has getLabel method', ()=>{
    expect( service.getLabel('') instanceof Observable ).toBeTruthy();
  });
});
