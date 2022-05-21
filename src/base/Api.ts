// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import express from 'express';
import { App, Handler } from 'manggon';

export default class Api {
  private app: App;
  constructor(readonly port: number, handler: Handler[]) {
    this.app = new App({
      port: this.port,
      handler: handler,
      notFoundMessage: { message: 'Url not found' },
      middleware: [express.json()],
    });
  }
  async start(): Promise<void> {
    await this.app.run();
  }
  async stop(): Promise<void> {
    await this.app.stop();
  }
}
