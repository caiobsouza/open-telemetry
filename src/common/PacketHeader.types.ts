/**
 * @module Common
 */

/**
 * A header has been added to each packet as well so that versioning can be tracked.
 * It will be easier for applications to check they are interpreting the incoming data in the correct way.
 */
export interface PacketHeader {
  /**
   * Game Version: 2020
   */
  m_packetFormat: number

  /**
   * Game major version - "X.00"
   */
  m_gameMajorVersion: number

  /**
   * Game minor version - "1.XX"
   */
  m_gameMinorVersion: number

  /**
   * Version of this packet type, all start from 1
   */
  m_packetVersion: number

  /**
   * Identifier for the packet type. see {@link PacketId}
   */
  m_packetId: PacketId

  /**
   * Unique identifier for the session
   */
  m_sessionUID: number

  /**
   * Session timestamp
   */
  m_sessionTime: number

  /**
   * Identifier for the frame the data was retrieved on
   */
  m_frameIdentifier: number

  /**
   * Index of player's car in the array
   */
  m_playerCarIndex: number

  /**
   * Index of secondary player's car in the array (splitscreen) / 255 if no second player
   */
  m_secondaryPlayerCarIndex: number
}

export enum PacketId {
  Motion = 0,
  Session = 1,
  LapData = 2,
  Event = 3,
  Participants = 4,
  CarSetups = 5,
  CarTelemetry = 6,
  CarStatus = 7,
  FinalClassification = 8,
  LobbyInfo = 9
}
