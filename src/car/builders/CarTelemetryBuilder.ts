import { IParserBuilder } from '../../common/builder/IParserBuilder';
import { BaseParser } from '../../common/parser/BaseParser';

export class CarTelemetryBuilder implements IParserBuilder {
  private parser: BaseParser;

  constructor() {
    this.parser = new BaseParser;
  }

  withSpeed(): this {
    this.parser.uint16le('m_speed');
    return this;
  }

  withThrottle2018(): this {
    this.parser.uint8('m_throttle');
    return this;
  }

  withThrottle(): this {
    this.parser.floatle('m_throttle');
    return this;
  }

  withSteer(): this {
    this.parser.floatle('m_steer');
    return this;
  }

  withBrake(): this {
    this.parser.floatle('m_brake');
    return this;
  }

  withClutch(): this {
    this.parser.uint8('m_clutch');
    return this;
  }

  withGear(): this {
    this.parser.int8('m_gear');
    return this;
  }

  withEngineRPM(): this {
    this.parser.uint16le('m_engineRPM');
    return this;
  }

  withDRS(): this {
    this.parser.uint8('m_drs');
    return this;
  }

  withRevLightsPercent(): this {
    this.parser.uint8('m_revLightsPercent');
    return this;
  }

  withRevLightsBitValue(): this {
    this.parser.uint16le('m_revLightsPercent');
    return this;
  }

  withBrakesTemperature(): this {
    this.parser.array('m_brakesTemperature', {
      length: 4,
      type: new BaseParser().uint16le(''),
    });

    return this;
  }

  withTyres(): this {
    this.parser
      .array('m_tyresSurfaceTemperature', {
        length: 4,
        type: new BaseParser().uint8(''),
      })
      .array('m_tyresInnerTemperature', {
        length: 4,
        type: new BaseParser().uint8(''),
      })
      .array('m_tyresPressure', {
        length: 4,
        type: new BaseParser().floatle(''),
      });

    return this;
  }

  withTyres16le(): this {
    this.parser
      .array('m_tyresSurfaceTemperature', {
        length: 4,
        type: new BaseParser().uint16le(''),
      })
      .array('m_tyresInnerTemperature', {
        length: 4,
        type: new BaseParser().uint16le(''),
      })
      .array('m_tyresPressure', {
        length: 4,
        type: new BaseParser().floatle(''),
      });

    return this;
  }

  withEngineTemperature(): this {
    this.parser.uint16le('m_engineTemperature');
    return this;
  }

  withSurfaceType(): this {
    this.parser.array('m_surfaceType', {
      length: 4,
      type: new BaseParser().uint8(''),
    });
    return this;
  }

  build(): BaseParser {
    return this.parser;
  }
}
