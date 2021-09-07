import { IParserBuilder } from './IParserBuilder';
import { BaseParser } from '../parser/BaseParser';
import { PacketHeaderParserFactory } from '../../header/parsers/PacketHeadParserFactory';

export class PacketParserBuilder<T> implements IParserBuilder {
  protected parser: BaseParser<T>;

  constructor() {
    this.parser = new BaseParser;
  }

  withHeader(): this {
    const parser = new PacketHeaderParserFactory();

    this.parser.nest('m_header', {
      type: parser[2020](),
    });

    return this;
  }

  withData(key: string, length: number, parser: BaseParser<T>): this {
    this.parser.array(key, {
      length,
      type: parser
    });
    return this;
  }

  build(): BaseParser<T> {
    return this.parser;
  }
}
