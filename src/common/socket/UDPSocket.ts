import dgram, { Socket, SocketType } from 'dgram';
import { AddressInfo } from 'node:net';
import { UDPEventType, UDPMessageInfo } from './UDPSocket.types';

export class UDPSocket {
  private socket: Socket;

  private SOCKET_TYPE: SocketType = 'udp4';
  private DEFAULT_PORT = 20777;

  constructor() {
    this.socket = dgram.createSocket(this.SOCKET_TYPE);
  }

  getAddressInfo(): AddressInfo {
    return this.socket.address();
  }

  bind(port: number): void {
    this.socket.bind(port || this.DEFAULT_PORT);
  }

  onMessage(callback: (message: Buffer, info: UDPMessageInfo) => void): void {
    this.socket.on('message', callback);
  }

  onError(callback: (exception: Error) => void): void {
    this.socket.on('error', callback);
  }

  onListening(callback: (addressInfo: AddressInfo) => void): void {
    this.socket.on('listening', () => {
      callback(this.getAddressInfo());
    });
  }

  onEvent(eventType: UDPEventType, callback: (...args: any[]) => void): void {
    this.socket.on(eventType, callback);
  }
}

