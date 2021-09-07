import { BaseParser } from '../../common/parser/BaseParser';
import { IParserCollection } from '../../common/parser/IParserColletion';
import { CarTelemetryBuilder } from '../builders/CarTelemetryBuilder';

export class CarTelemetryParsers implements IParserCollection {
  2020(): BaseParser {
    const builder = new CarTelemetryBuilder;
    return builder
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
