import { BaseParser } from '../../common/parser/BaseParser';
import { IParserCollection } from '../../common/parser/IParserColletion';
import { CarTelemetryParserBuilder } from '../builders/CarTelemetryParserBuilder';
import { ICarTelemetry } from '../interfaces/ICarTelemetry';

export class CarTelemetryParsers implements IParserCollection<ICarTelemetry> {
  2020(): BaseParser<ICarTelemetry> {
    return new CarTelemetryParserBuilder()
      .withSpeed()
      .withThrottle()
      .withSteer()
      .withBrake()
      .withClutch()
      .withGear()
      .withEngineRPM()
      .withDRS()
      .withRevLightsPercent()
      .withRevLightsBitValue()
      .withBrakesTemperature()
      .withTyres()
      .withEngineTemperature()
      .withSurfaceType()
      .build();
  }
}
