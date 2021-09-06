import dgram, { Socket, SocketType } from 'dgram';

const SOCKET_TYPE: SocketType = 'udp4';

export type UDPEventType = 'connect' | 'error' | 'listening' | 'message';

export interface UDPMessageInfo {
  address: string,
  family: string,
  port: string,
  size: string,
}

export class UDPClient {
  private socket: Socket;

  constructor() {
    this.socket = dgram.createSocket(SOCKET_TYPE);
  }

  connect(): void {
    this.socket.connect(20777, process.env.SOCKET_ADRESS);
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  onMessage(callback: (message: Buffer, info: UDPMessageInfo) => void): void {
    this.socket.on('message', callback);
  }

  onError(callback: (exception: Error) => void): void {
    this.socket.on('error', callback);
  }

  onEvent(eventType: UDPEventType, callback: (...args: NewType[]) => void): void {
    this.socket.on(eventType, callback);
  }
}

