export const BASE_ORDER = {
  first: '-9999',
  last: '9999',
  none: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12',
};

export type BaseOrderValue = keyof typeof BASE_ORDER;
