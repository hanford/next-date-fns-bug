import dfnsTzFormat from "date-fns-tz/format";
import { Locale } from "date-fns";

import toValidDate, { InternalDate } from "./toValidDate";

type Options = {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  additionalDigits?: 0 | 1 | 2;
  timeZone?: string;
  locale?: Locale;
  includeSeconds?: boolean;
  addSuffix?: boolean;
  unit?: "second" | "minute" | "hour" | "day" | "month" | "year";
  roundingMethod?: "floor" | "ceil" | "round";
  awareOfUnicodeTokens?: boolean;
};

/**
 * Formats a date with the given `formatStr` using the local system timezone, or
 * the timezone passed through via the `options` parameter
 *
 * If you don't need to use timezone tokens (z...zzz), use the `format` function instead
 *
 * @example
 * // returns Mar 30, 2021 08:47AM PDT
 * formatWithTimezone(new Date(), 'MMM d, yyyy hh:mma z')
 */
export default function formatWithTimezone(
  date: InternalDate,
  formatStr: string,
  options?: Options
): string {
  return dfnsTzFormat(toValidDate(date), formatStr, options);
}
