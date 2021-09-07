import { BaseParser } from './BaseParser';

export interface IParserCollection {
  2018?(): BaseParser
  2019?(): BaseParser
  2020(): BaseParser
  2021?(): BaseParser
}
