import "reflect-metadata";
import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'FatalisWebPartStrings';

import WebPartContainer, { IFatalisContainerProps } from './container/FatalisContainer';
import { configContainer } from '../../common';
import { loadTheme } from "@fluentui/react";
import { DateConvention, IDateTimeFieldValue, PropertyFieldDateTimePicker } from "@pnp/spfx-property-controls";

export interface IFatalisWebPartWebPartProps {
  description: string;
  dateDeath: IDateTimeFieldValue;
  link: string;
}

export default class FatalisWebPart extends BaseClientSideWebPart<IFatalisWebPartWebPartProps> {
  
  constructor() {
    super();
    loadTheme({effects:{roundedCorner2: '0px'}})
  }
  
  public render(): void {
    configContainer();
    const element: React.ReactElement<IFatalisContainerProps> = 
      React.createElement(WebPartContainer, { 
        ...this.properties, 
        title: strings.Title, 
        dateDeath: this.properties.dateDeath.value
      });
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
               groupFields: [
                PropertyFieldDateTimePicker('dateDeath', {
                  label: strings.DateFieldLabel,
                  initialDate: this.properties.dateDeath,
                  dateConvention: DateConvention.Date,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  deferredValidationTime: 0,
                  key: 'dateTimeFieldId'
                }),
                PropertyPaneTextField('link', {
                  label: strings.LinkFieldLabel,
                  value: this.properties.link
                })
               ]
            }
          ]
        }
      ]
    };
   }
}

