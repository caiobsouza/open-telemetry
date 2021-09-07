import { BaseParser } from '../parser/BaseParser';

export interface IParserBuilder {
  build(): BaseParser;
}
