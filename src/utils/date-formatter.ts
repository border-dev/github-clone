import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const locales = new Map<string, string>([['about 1 month ago', 'last month']]);

export const getPastDate = (lastCommittedDate: string) => {
  const date = formatDistanceToNow(new Date(lastCommittedDate), {
    addSuffix: true,
  });
  const locale = locales.get(date);
  return locale ? locale : date;
};
