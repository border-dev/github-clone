'use client';

import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { useCommitHistoryQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { getPastDate } from '@utils/date-formatter';
import { ExplorerLineItemDetails, parseFileInfo } from './parse-file-info';

type FileExplorerLineItemProps = {
  owner: string;
  name: string;
  branch: string;
  type: string;
  fileName: string;
  path: string;
};

const FileExplorerLineItem = ({
  owner,
  name,
  branch,
  type,
  fileName,
  path,
}: FileExplorerLineItemProps) => {
  const { data } = useCommitHistoryQuery(graphqlClient, {
    owner,
    name,
    branch,
    path,
  });

  const file: ExplorerLineItemDetails = !data
    ? {
        latestCommitMessage: '',
        lastCommittedDate: '',
      }
    : parseFileInfo(data);

  return (
    <div
      role="row"
      className="Box-row relative flex bg-[#0d1116] hover:bg-[#161b22]"
    >
      <div role="gridcell" className="mr-4 w-4 flex-shrink-0">
        {type === 'tree' ? (
          <Icon
            aria-label="Directory"
            name="directory"
            className="icon text-[#7d8590]"
            size={16}
          />
        ) : (
          <Icon
            aria-label="File"
            name="directory"
            className="icon text-[#7d8590]"
            size={16}
          />
        )}
      </div>

      <div role="rowheader" className="mr-4 min-w-0 flex-auto md:w-1/6">
        <span className="block max-w-full truncate">
          <Link
            className="js-navigation-open Link--primary"
            href={`/${owner}/${name}/${type}/${branch}/${path}`}
          >
            {fileName}
          </Link>
        </span>
      </div>

      <div
        role="gridcell"
        className="none mr-4 w-[41%] min-w-0 flex-auto md:block"
      >
        <span className="block w-full truncate align-top">
          <Link className="text-[#7d8590]" href="#">
            {file.latestCommitMessage || '[no commit message]'}
          </Link>
        </span>
      </div>

      <div role="gridcell" className="w-[100px] text-right text-[#7d8590]">
        <div className="whitespace-nowrap">
          {file.lastCommittedDate
            ? getPastDate(file.lastCommittedDate)
            : '[no date]'}
        </div>
      </div>
    </div>
  );
};

export default FileExplorerLineItem;
