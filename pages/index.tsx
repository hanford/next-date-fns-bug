import { format, formatRelative, subDays } from "date-fns";
import formatWithTimezone from "../utils/dates";

const date = formatWithTimezone(new Date(), "MMM d, yyyy hh:mma z");

export default function Home() {
  return <div style={{ padding: 24 }}>{date}</div>;
}
