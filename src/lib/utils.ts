import accounting from 'accounting';

accounting.settings.currency.symbol = '£';

/**
 * Format money amount for display.
 */
export const formatMoney = (amount: number) => accounting.formatMoney(amount);

/**
 * Format a number.
 */
export const formatNumber = (num: number): string =>
  accounting.formatNumber(num);

/**
 * Round a number to 2 decimal laces.
 */
export const roundTo2Dp = (num: number): number => Math.round(num * 100) / 100;
