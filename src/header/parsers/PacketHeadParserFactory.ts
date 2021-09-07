import { BaseParser } from '../../common/parser/BaseParser';
import { IParserFactory as IParserFactory } from '../../common/parser/IParserFactory';
import { PacketHeaderParserBuilder } from '../builders/PacketHeaderParserBuilder';
import { IPacketHeader } from '../interfaces/IPacketHeader';

export class PacketHeaderParserFactory implements IParserFactory<IPacketHeader> {
  2020(): BaseParser<IPacketHeader> {
    return new PacketHeaderParserBuilder()
      .withPacketFormat()
      .withMajorVersion()
      .withMinorVersion()
      .withPacketVerion()
      .withPacketId()
      .withSessionUID(true)
      .withSessionTime()
      .withFrameIdentifier()
      .withPlayerCarIndex()
      .withSecondaryPlayerCarIndex()
      .build();
  }
}
