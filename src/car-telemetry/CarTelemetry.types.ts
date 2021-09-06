/**
 * @module CarTelemetry
 */

import { PacketHeader } from '../common/PacketHeader.types';

/**
 * It details various values that would be recorded on the car such as speed, throttle application, DRS etc.
 */
export interface CarTelemetry {
  /**
   * Speed of car in kilometres per hour
   */
  m_speed: number

  /**
   * Amount of throttle applied (0.0 to 1.0)
   */
  m_throttle: number

  /**
   * Steering (-1.0 (full lock left) to 1.0 (full lock right))
   */
  m_steer: number

  /**
   * Amount of brake applied (0.0 to 1.0)
   */
  m_brake: number

  /**
   * Amount of clutch applied (0 to 100)
   */
  m_clutch: number

  /**
   * Gear selected (1-8, N=0, R=-1)
   */
  m_gear: number

  /**
   * Engine RPM
   */
  m_engineRPM: number

  m_drs: DrsStatus

  /**
   * Rev lights indicator (percentage)
   */
  m_revLightsPercent: number

  /**
   * Brakes temperature (celsius) for each wheel (4)
   */
  m_brakesTemperature: Array<number>

  /**
   * Tyres surface temperature (celsius)
   */
  m_tyresSurfaceTemperature: Array<number>

  /**
   * Tyres inner temperature (celsius)
   */
  m_tyresInnerTemperature: Array<number>

  /**
   * Engine temperature (celsius)
   */
  m_engineTemperature: number

  /**
   * Tyres pressure (PSI)
   */
  m_tyresPressure: Array<number>

  /**
   * Driving surface, see appendices
   */
  m_surfaceType: Array<number>
}

export enum DrsStatus {
  OFF = 0,
  ON = 1
}

/**
 * This packet details telemetry for all the cars in the race.
 */
export interface PacketCarTelemetryData {
  m_header: PacketHeader
  m_carTelemetryData: CarTelemetry
  /**
   * Suggested gear for the player (1-8). 0 if no gear suggested.
   */
  m_suggestedGear: number
}
