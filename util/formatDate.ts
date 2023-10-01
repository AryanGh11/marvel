import { format, parseISO } from "date-fns";

export default function formatDate(stringDate: string) {
  const inputDate = stringDate;
  const date = parseISO(inputDate);
  const formattedDate = format(date, "dd MMMM");
  return formattedDate;
}
