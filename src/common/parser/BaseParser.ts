import { Parser } from 'binary-parser';

export class BaseParser extends Parser {
  constructor() {
    super();
  }

  fromBuffer(buffer: Buffer): any {
    return this.parse(buffer);
  }
}
