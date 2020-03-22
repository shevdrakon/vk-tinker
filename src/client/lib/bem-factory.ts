/*
  bem factory can be used either for css modules approach or regular css classes.
  In case of css modules non-empty classnames obj should be passed.
 */
const bemFactory = (baseClassName: any, classNames) => {
  if (typeof baseClassName !== 'string') {
    classNames = baseClassName.classNames;
    baseClassName = baseClassName.baseClassName;
  }

  const useHash = classNames && Object.keys(classNames).length > 0;
  const getClassName = classNameKey => {
    if (useHash) {
      return classNames[classNameKey];
    }
    return classNameKey;
  };

  return {
    block() {
      return getClassName(baseClassName);
    },

    element(elementName: string, modifierName?: string) {
      const className = modifierName
        ? `${baseClassName}__${elementName}--${modifierName}`
        : `${baseClassName}__${elementName}`;

      return getClassName(className);
    },

    modifier(modifierName) {
      const className = `${baseClassName}--${modifierName}`;
      return getClassName(className);
    },
  };
};

export default bemFactory;
