/**
 * TypeScript definition for koa-views@next
 * 2016 Ændrew Rininsland
 */
declare module 'koa-views' {
  import * as Koa from 'koa';

  function views(root: string, opts?: {
    extension?: string,
    map?: {
      html: string;
    }
  }): { (ctx: ViewsContext, next?: () => any): any };

  interface ViewsContext extends Koa.Context {
    render(view: string, locals?: {extension: string}): Promise<string>;
  }

  namespace views {}

  export = views;
}
