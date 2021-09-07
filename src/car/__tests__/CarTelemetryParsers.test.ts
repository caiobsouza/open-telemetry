import { expect } from 'chai';
import { IParserFactory } from '../../common/parser/IParserFactory';
import { ICarTelemetry } from '../interfaces/ICarTelemetry';
import { CarTelemetryFactory } from '../parsers/CarTelemetryParser';
import { PACKET_CAR_TELEMETRY_DATA_BUFFER_2020, PACKET_CAR_TELEMETRY_DATA_PARSED_2020 } from './mocks/CarTelemetryMock.2020';

describe('Car Telemetry Parse', () => {

  let factory: IParserFactory<ICarTelemetry>;

  before(() => {
    factory = new CarTelemetryFactory();
  });

  it('should parse data for F1 2020', () => {
    const parser = factory[2020]();
    const result = parser.fromBuffer(Buffer.from(PACKET_CAR_TELEMETRY_DATA_BUFFER_2020));

    expect(result).to.deep.equal(PACKET_CAR_TELEMETRY_DATA_PARSED_2020);
  });
});
