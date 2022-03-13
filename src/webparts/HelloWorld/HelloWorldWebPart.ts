import "reflect-metadata";
import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HelloWorldWebPartStrings';

import HolloWorldContainer, { IHolloWorldContainerProps } from './container/HelloWorldContainer';
import { configContainer } from '../../common';
import { loadTheme } from "@fluentui/react";

export interface IHelloWorldWebPartProps {
  
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  
  constructor() {
    super();
    loadTheme({effects:{roundedCorner2: '0px'}})
  }
  
  public render(): void {
    configContainer();
    const element: React.ReactElement<IHolloWorldContainerProps> = 
      React.createElement(HolloWorldContainer, {...this.properties});

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: []
            }
          ]
        }
      ]
    };
  }
}
