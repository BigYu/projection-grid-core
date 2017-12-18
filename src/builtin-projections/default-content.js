import { isFunction, isString } from '../utils';

function defaultCellContent(col, data) {
  if (isFunction(col.property)) {
    return col.property(data);
  }

  if (isString(col.property)) {
    return data[col.property];
  }

  if (isString(col.key)) {
    return data[col.key];
  }

  return '';
}

function defaultHeaderContent(col) {
  return col.title || col.key || '';
}

function defaultContent(td) {
  const { col, data, isHeader } = td;

  if (col) {
    return isHeader ? defaultHeaderContent(col) : defaultCellContent(col, data);
  }

  return '';
}

function getContent(td) {
  return td.content || defaultContent(td);
}

export default function ({
  composeTds,
}) {
  return {
    composeTds(td) {
      return composeTds({
        ...td,
        content: getContent(td),
      });
    },
  };
}