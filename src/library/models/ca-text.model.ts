import {CAKeyValue} from '@criollapp/common';

export class CAText extends CAKeyValue
{
    private _params:CAKeyValue[];

    constructor( name:string = '', message:string = '' )
    {
        super( name, message );

        this._params = [];
    }

    public get message():string
    {
        return this.value;
    }

    public set message( message:string )
    {
        if(message != this.value)
        {
            this.value = message;
            this.updateParamsOnValue();
        }
    }

    public get name():string
    {
        return this.key;
    }

    public set name( name:string )
    {
        this.key = name;
    }

    public set params( params:CAKeyValue[] )
    {
        this._params = params;
        this.updateParamsOnValue();
    }

    public addParam( param:CAKeyValue )
    {
        this._params.push( param );
        this.updateParamsOnValue();
    }

    public updateParamsOnValue()
    {
        this._params.forEach((param:CAKeyValue)=>{
            this.value = this.value.replace( '{{'+param.key+'}}', param.value );
        });
    }}
