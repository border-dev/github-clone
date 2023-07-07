'use client';

import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { useRepoHomeReadMeQuery } from '@lib/generated/graphql';
import graphqlClient from '@lib/graphql-client';
import { usePathname } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehype from 'rehype-raw';
import remark from 'remark-gfm';
import { parseRepoReadmeQuery } from './parse-repo-home-readme';

type RepoHomeReadMeProps = {
  owner: string;
  name: string;
  path: string;
};

const RepoHomeReadMe = ({ owner, name, path }: RepoHomeReadMeProps) => {
  const pathname = usePathname();
  const { data, isLoading, error } = useRepoHomeReadMeQuery(graphqlClient, {
    owner: owner,
    name: name,
    expression: path ? `HEAD:${path}/README.md` : 'HEAD:README.md',
  });

  if (isLoading || error || !data) {
    return null;
  }

  const readme = parseRepoReadmeQuery(data);

  if (readme) {
    return (
      <div className="Box Box--responsive">
        <div className="sticky top-0 z-30 flex items-center justify-between rounded-t-md bg-[#0d1117] p-2">
          <div className="flex items-center">
            {/* Details dropdown */}
            <div className="details-overlay">
              <div className="btn m-0 mr-2 p-2">
                <Icon
                  className="mr-0 fill-[#7d8590] align-bottom text-[#7d8590]"
                  name="list-unordered"
                  size={16}
                />
              </div>
            </div>
            <h2 className="text-sm font-semibold">
              <Link href="#href" className="text-[#e6edf3]">
                README.md
              </Link>
            </h2>
          </div>
          <div>
            <Link className="btn p-2" href="#" aria-label="Edit this file">
              <Icon className="fill-[#7d8590]" name="pencil" size={16} />
            </Link>
          </div>
        </div>
        <div className="Box-body border-b border-[#30363d] bg-[#0d1117] px-8 pb-8 pt-4">
          <article className="prose max-w-none text-white prose-headings:my-1 prose-headings:border-b prose-headings:border-b-gray-800 prose-headings:pb-2 prose-headings:font-medium prose-headings:text-white prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-p:my-3 prose-p:leading-6 prose-a:font-normal prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:rounded-md prose-code:bg-gray-700 prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:text-white prose-pre:bg-gray-100 prose-li:my-0.5 prose-img:m-0 prose-img:inline">
            <ReactMarkdown rehypePlugins={[rehype, remark]}>
              {readme}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    );
  }

  if (!pathname.includes('tree')) {
    return (
      <div className="my-4 flex items-center justify-between rounded-md border border-sky-200 bg-sky-100 p-4">
        <div className="text-sm text-gray-800">
          Help people interested in this repository understand your project by
          adding a README.
        </div>
        <button className="inline-flex rounded-lg border border-gray-200 bg-green-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-green-700">
          Add a README
        </button>
      </div>
    );
  }
  return null;
};

export default RepoHomeReadMe;
