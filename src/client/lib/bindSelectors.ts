const bindSelectors = (stateSelector, selectors) => {
  const boundSelectors = {};

  Object.keys(selectors).forEach(key => {
    const selector = selectors[key];

    if (typeof selector === 'function') {
      boundSelectors[key] = (state, ...rest) => selector(stateSelector(state), ...rest);
    } else {
      boundSelectors[key] = bindSelectors(stateSelector, selector);
    }
  });
  return boundSelectors;
};

export default bindSelectors;
