
import { IParserBuilder } from '../../common/builder/IParserBuilder';
import { BaseParser } from '../../common/parser/BaseParser';
import { IPacketHeader } from '../interfaces/IPacketHeader';

export class PacketHeaderParserBuilder implements IParserBuilder {
  private parser: BaseParser<IPacketHeader>;

  constructor() {
    this.parser = new BaseParser;
    this.parser.endianess('little');
  }

  withPacketFormat(): this {
    this.parser.uint16le('m_packetFormat');
    return this;
  }

  withMajorVersion(): this {
    this.parser.uint8('m_gameMajorVersion');
    return this;
  }

  withMinorVersion(): this {
    this.parser.uint8('m_gameMinorVersion');
    return this;
  }

  withPacketVerion(): this {
    this.parser.uint8('m_packetVersion');
    return this;
  }

  withPacketId(): this {
    this.parser.uint8('m_packetId');
    return this;
  }

  withSessionUID(bigintEnabled: boolean): this {
    if (bigintEnabled) {
      this.parser.uint64('m_sessionUID');
    } else {
      this.parser.skip(8);
    }

    return this;
  }

  withSessionTime(): this {
    this.parser.floatle('m_sessionTime');
    return this;
  }

  withFrameIdentifier(): this {
    this.parser.uint32('m_frameIdentifier');
    return this;
  }

  withPlayerCarIndex(): this {
    this.parser.uint8('m_playerCarIndex');
    return this;
  }

  withSecondaryPlayerCarIndex(): this {
    this.parser.uint8('m_secondaryPlayerCarIndex');
    return this;
  }

  build(): BaseParser<IPacketHeader> {
    return this.parser;
  }
}
