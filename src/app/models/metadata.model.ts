export interface MetaInfoModel {
// entity name
Name: string;
// description
Description: string;
// return type of value
Type: string;
// list of nested elements
Children: MetaInfoModel[];
// input parameters, if it is a method
InputParameters?: { [name: string]: string };
}
