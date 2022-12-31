export const assignDefinedProps = <T>(obj: T, props: Partial<T>) => {
  for (const key in props) {
    const value = props[key];
    if (typeof value !== 'undefined') {
      obj[key] = value!;
    }
  }
  return obj;
};

export const assignProps = <T>(obj: T, props: Partial<T>) => {
  for (const key in props) {
    obj[key] = props[key]!;
  }
  return obj;
};

export const removeEmptyValues = <T>(target: T): T => {
  for (const key in target) {
    if (!target[key] && target[key] !== null) {
      delete target[key];
    }
  }
  return target;
};
