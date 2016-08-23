/**
 * TypeScript definition for koa-views@next
 * 2016 Ændrew Rininsland
 */

import * as Koa from 'koa';

declare module 'koa-views' {
  function views(root: string, opts?: {
    extension?: string,
    map?: {
      [ext: string]: string;
    }
  }): { (ctx: KoaViews.Context, next?: () => any): any };

  export = views;
}

declare namespace KoaViews {
  export interface Context extends Koa.Context {
    render(view: string, locals?: {[key: string]: any}): Promise<string>;
  }
}
