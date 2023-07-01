import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const getPastDate = (lastCommittedDate: string) =>
  formatDistanceToNow(new Date(lastCommittedDate), {
    addSuffix: true,
  });
