import { BaseParser } from '../../common/parser/BaseParser';
import { IParserFactory } from '../../common/parser/IParserFactory';
import { CarTelemetryParserDataBuilder } from '../builders/CarTelemetryDataParserBuilder';
import { CarTelemetryPacketParserBuilder } from '../builders/CarTelemetryPacketParserBuilder';
import { ICarTelemetry } from '../interfaces/ICarTelemetry';

export class CarTelemetryFactory implements IParserFactory<ICarTelemetry> {
  2020(): BaseParser<ICarTelemetry> {
    const dataParser = new CarTelemetryParserDataBuilder()
      .withSpeed()
      .withThrottle()
      .withSteer()
      .withBrake()
      .withClutch()
      .withGear()
      .withEngineRPM()
      .withDRS()
      .withRevLightsPercent()
      .withBrakesTemperature()
      .withTyresSurfaceTemp()
      .withTyresInnerTemp()
      .withEngineTemperature()
      .withTyresPressure()
      .withSurfaceType()
      .build();

    return new CarTelemetryPacketParserBuilder()
      .withHeader()
      .withData('m_carTelemetryData', 22, dataParser)
      .withButtonStatus()
      .withMFDPanelIndex()
      .withMFDPanelIndexSecondaryPlayer()
      .withSuggestedGear()
      .build();
  }

}
