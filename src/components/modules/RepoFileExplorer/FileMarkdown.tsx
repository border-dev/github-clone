import ReactMarkdown from 'react-markdown';
import rehype from 'rehype-raw';
import remark from 'remark-gfm';

type FileMarkdownProps = { text: string };

const FileMarkdown = ({ text }: FileMarkdownProps) => {
  return (
    <div className="min-w-0 rounded-bl-md rounded-br-md p-8">
      <article className="markdown-body m-auto max-w-[1012px]">
        <ReactMarkdown rehypePlugins={[rehype, remark]}>{text}</ReactMarkdown>
      </article>
    </div>
  );
};

export default FileMarkdown;
