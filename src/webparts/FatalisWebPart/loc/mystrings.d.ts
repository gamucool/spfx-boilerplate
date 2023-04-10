declare interface IFatalisWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  DateFieldLabel: string;
  LinkFieldLabel: string;
  Title: string;
}

declare module 'FatalisWebPartStrings' {
  const strings: IFatalisWebPartStrings;
  export = strings;
}
