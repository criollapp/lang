import {XModelAbstract, XJson} from '@x/common';

export class CALang extends XModelAbstract
{
  @XJson() public name:string;
  @XJson() public code:string;

  constructor( args?:any )
  {
    super( args );

    this.name = this.name == null ? '' : this.name;
    this.code = this.code == null ? '' : this.code;
  }
}
