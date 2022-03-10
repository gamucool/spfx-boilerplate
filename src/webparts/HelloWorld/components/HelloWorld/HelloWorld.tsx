import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HelloWorldHTMLProps = DetailedHTMLProps & HTMLAttributes

export const HelloWorld: React.FC<HelloWorldHTMLProps> = (props) => {
    return(<div>Hello from SPFx with React 17 !!!!</div>)
}