import {CAModelAbstract, CAJson} from '@criollapp/common';

export class CALang extends CAModelAbstract
{
  @CAJson() public name:string;
  @CAJson() public code:string;

  constructor( args?:any )
  {
    super( args );

    this.name = this.name == null ? '' : this.name;
    this.code = this.code == null ? '' : this.code;
  }
}
