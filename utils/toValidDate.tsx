import dfnsParseISO from "date-fns/parseISO";

export type ValidDateFnsDate = number | Date;
export type InternalDate = string | ValidDateFnsDate;

export default function toInternalDate(date: InternalDate): ValidDateFnsDate {
  if (typeof date === "string") {
    return dfnsParseISO(date);
  }
  return date;
}
