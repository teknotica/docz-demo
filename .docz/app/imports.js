export const imports = {
  'src/components/card/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-card-index" */ 'src/components/card/index.mdx'),
}
