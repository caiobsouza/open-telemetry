import { BaseParser } from '../../common/parser/BaseParser';
import { IParserCollection } from '../../common/parser/IParserColletion';
import { PacketHeaderParserBuilder } from '../builders/PacketHeaderParserBuilder';
import { IPacketHeader } from '../interfaces/IPacketHeader';

export class PacketHeaderParsers implements IParserCollection<IPacketHeader> {
  2020(): BaseParser<IPacketHeader> {
    return new PacketHeaderParserBuilder()
      .withPacketFormat()
      .withMajorVersion()
      .withMinorVersion()
      .withPacketVerion()
      .withPacketId()
      .withSessionUID()
      .withSessionTime()
      .withFrameIdentifier()
      .withPlayerCarIndex()
      .build();
  }
}
