export function composeTable({ config }) {
  return {
    props: {},
    classes: [],
    styles: {},
    events: {},
    caption: config.composeCaption({ config }),
    colgroups: config.composeColgroups({ config }),
    thead: config.composeThead({ config }),
    tbodies: config.composeTbodies({ config }),
    tfoot: config.composeTfoot({ config }),
  };
}