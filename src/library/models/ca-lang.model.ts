import {CAModelAbstract, CAJson} from '@criollapp/common';

export class CALang extends CAModelAbstract
{
  public static readonly EN:string = 'en';
  public static readonly ES:string = 'es';

  @CAJson() public name:string;
  @CAJson() public code:string;

  constructor( args?:any )
  {
    super( args );

    this.name = this.name == null ? '' : this.name;
    this.code = this.code == null ? '' : this.code;
  }
}
