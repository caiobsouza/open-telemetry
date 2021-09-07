export type UDPEventType = 'connect' | 'error' | 'listening' | 'message';

export interface UDPMessageInfo {
  address: string,
  family: string,
  port: string,
  size: string,
}
