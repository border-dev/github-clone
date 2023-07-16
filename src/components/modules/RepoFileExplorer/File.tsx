import { FileInfo } from '@utils/parsers/types/FileInfo';
import ActionHeader from './ActionHeader';
import ReactMarkdown from 'react-markdown';
import rehype from 'rehype-raw';
import remark from 'remark-gfm';

type FileProps = {
  file: FileInfo;
};

const File = ({ file }: FileProps) => {
  const { text, byteSize, lines, language } = file;

  return (
    <div className="flex flex-row gap-4">
      <div className="h-fit w-full min-w-0">
        <ActionHeader byteSize={byteSize} lines={lines} />
        <div className="min-w-[273px] rounded-bl-md rounded-br-md border border-t-0 border-[#30363d]">
          <section className="mt-[46px] block min-w-0 overflow-auto rounded-bl-md rounded-br-md border-0 bg-[#0d1117] p-0">
            <div className="min-w-0 rounded-bl-md rounded-br-md p-8">
              <article className="markdown-body m-auto max-w-[1012px]">
                <ReactMarkdown rehypePlugins={[rehype, remark]}>
                  {text}
                </ReactMarkdown>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default File;
