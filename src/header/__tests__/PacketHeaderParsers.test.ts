import { expect } from 'chai';
import { IParserFactory } from '../../common/parser/IParserFactory';
import { IPacketHeader } from '../interfaces/IPacketHeader';
import { PacketHeaderParserFactory } from '../parsers/PacketHeadParserFactory';
import { PACKET_HEADER_BUFFER_2020, PACKET_HEADER_PARSED_2020 } from './mocks/PacketHeaderMock.2020';

describe('PacketHeader Parsers', () => {

  let factory: IParserFactory<IPacketHeader>;

  before(() => {
    factory = new PacketHeaderParserFactory();
  });

  it('should parse the Packet Header for F1 2020', () => {
    const parser = factory[2020]();
    const result = parser.fromBuffer(Buffer.from(PACKET_HEADER_BUFFER_2020));

    expect(result).to.deep.equal(PACKET_HEADER_PARSED_2020);
  });
});
