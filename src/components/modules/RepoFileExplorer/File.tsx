'use client';

import { FileInfo } from '@utils/parsers/types/FileInfo';
import ActionHeader from './ActionHeader';
import FileCode from './FileCode';
import FileMarkdown from './FileMarkdown';
import { useState } from 'react';
import { useCopyToClipboard } from '@hooks/useCopyToClipboard';

type FileProps = {
  basePath: string;
  branch: string;
  path: string;
  file: FileInfo;
};

const File = ({ basePath, branch, path, file }: FileProps) => {
  const { text, byteSize, lines, language } = file;
  const [isMarkdown, toggleMarkdownPreview] = useState(language === 'markdown');
  const [isTextCopied, copy] = useCopyToClipboard();

  return (
    <div className="flex flex-row gap-4">
      <div className="h-fit w-full min-w-0">
        <ActionHeader
          {...{
            basePath,
            branch,
            path,
            byteSize,
            lines,
            isPreview: isMarkdown,
            togglePreview: toggleMarkdownPreview,
            isTextCopied,
          }}
          onCopy={() => copy(text)}
        />
        <div className="min-w-[273px] rounded-bl-md rounded-br-md border border-t-0 border-[#30363d]">
          <section className="mt-[46px] block min-w-0 overflow-auto rounded-bl-md rounded-br-md border-0 bg-[#0d1117] p-0">
            {isMarkdown ? (
              <FileMarkdown text={text} />
            ) : (
              <div className="relative flex min-w-0 flex-col justify-between">
                <div className="relative">
                  <div className="relative min-w-0">
                    <FileCode code={text} language={language} />
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default File;
