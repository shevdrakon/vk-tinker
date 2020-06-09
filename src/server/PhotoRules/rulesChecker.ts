import checkHasSizeRule from './checkHasSizeRule';
import checkSoldRule from './checkSoldRule';

import {PhotoRulesResult, Photo} from './rules.types';

export const checkAllRules = (photo: Photo): PhotoRulesResult => {
  const rules = [checkSoldRule, checkHasSizeRule];

  return rules.reduce((acc, rule) => {
    const ruleResult = rule(photo);

    return {
      ...acc,
      [ruleResult.key]: ruleResult,
    }
  }, {});
};
