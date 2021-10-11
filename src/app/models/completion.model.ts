export interface CompletionModel {
  caption: string;
  description?: string;
  snippet?: string;
  meta: string;
  type: string;
  value?: string;
  parent?: string;
  docHTML?: string;
  // Input parameters. Where key is the name of the parameters, value is the type
  inputParameters?: { [name: string]: string };
}
