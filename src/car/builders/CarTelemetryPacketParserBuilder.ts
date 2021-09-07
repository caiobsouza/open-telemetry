import { PacketParserBuilder } from '../../common/builder/PacketParserBuilder';
import { BaseParser } from '../../common/parser/BaseParser';
import { ICarTelemetry } from '../interfaces/ICarTelemetry';

type Parser = BaseParser<ICarTelemetry>;

export class CarTelemetryPacketParserBuilder extends PacketParserBuilder<ICarTelemetry> {

  constructor() {
    super();
    this.parser.endianess('little');
  }

  withButtonStatus(): this {
    this.parser.uint32le('m_buttonStatus');
    return this;
  }

  withMFDPanelIndex(): this {
    this.parser.uint8('m_mfdPanelIndex');
    return this;
  }

  withMFDPanelIndexSecondaryPlayer(): this {
    this.parser.uint8('m_mfdPanelIndexSecondaryPlayer');
    return this;
  }

  withSuggestedGear(): this {
    this.parser.int8('m_suggestedGear');
    return this;
  }

  build(): Parser {
    return this.parser;
  }
}
