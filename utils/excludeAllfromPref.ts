import { PrefPopulation } from '@/types/Response';

// 「全国」を表す都道府県コード
const WHOLE_COUNTRY_PREF_CODE = '00';

/**
 * 県別のデータから「全国」のデータを除外します
 */
export const excludeAllfromPref = (prefList: PrefPopulation[]) => {
  return prefList.filter((pref) => pref.prefCode !== WHOLE_COUNTRY_PREF_CODE);
};
