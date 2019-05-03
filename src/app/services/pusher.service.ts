import { Injectable } from '@angular/core';
declare const Pusher: any;

@Injectable()
export class PusherService {
  channel;
  constructor() {
    console.log('pusher.pre.instance');
    const pusher = new Pusher('248da1d187adf52c9488', { cluster: 'us2' });
    console.log('pusher.pos.instance');
    this.channel = pusher.subscribe('painting');
  }
  public init() {
    console.log('pusher.init');
    return this.channel;
  }
}
