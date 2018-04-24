import { CAText } from "../models/ca-text.model";
import { CAKeyValue } from "@criollapp/common";

describe('CAText', ()=>{
  let text:CAText = new CAText( 'myName', 'myMessage' );

  it('name and value are inserted by constructor', ()=>{
    expect( text.name ).toBe('myName');
    expect( text.message ).toBe('myMessage');
  });

  it('message can be set', ()=>{
    text.message = 'Hello World';

    expect( text.message ).toBe('Hello World');
  });

  it('name can be set', ()=>{
    text.name = 'hello';

    expect( text.name ).toBe('hello');
  });

  it('updateParamsOnValue is call when new message is set', ()=>{
    spyOn( text, 'updateParamsOnValue' );
    text.message = 'hello';

    text.message = 'hello2';

    expect( text.updateParamsOnValue ).toHaveBeenCalled();
  });

  it('updateParamsOnValue is not call when message is the same', ()=>{
    let text2:CAText = new CAText( 'myName', 'myMessage' );
    text2.message = 'hello';
    spyOn( text2, 'updateParamsOnValue' );

    text2.message = 'hello';

    expect( text2.updateParamsOnValue ).not.toHaveBeenCalled();
  });

  it('params can be set and updateParamsOnValue is called', ()=>{
    let text3:CAText = new CAText( 'myName', 'myMessage' );
    text3.message = 'hello';
    spyOn( text3, 'updateParamsOnValue' );

    text3.params = [ new CAKeyValue() ];

    expect( text3.updateParamsOnValue ).toHaveBeenCalled();
  });

  it('addParam works and updateParamsOnValue too', ()=>{
    text.params = [ new CAKeyValue() ];
    text.message = 'hello {{object}}';

    text.addParam( new CAKeyValue( 'object', 'world' ) );

    expect( text.message ).toBe('hello world');
  });
});
