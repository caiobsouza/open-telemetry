import { BaseParser } from './BaseParser';
export interface IParserCollection<T> {
  2018?(): BaseParser<T>
  2019?(): BaseParser<T>
  2020(): BaseParser<T>
  2021?(): BaseParser<T>
}
