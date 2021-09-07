import { Parser } from 'binary-parser';

export class BaseParser<T> extends Parser {
  constructor() {
    super();
  }

  fromBuffer(buffer: Buffer) : T {
    return this.parse(buffer);
  }
}
