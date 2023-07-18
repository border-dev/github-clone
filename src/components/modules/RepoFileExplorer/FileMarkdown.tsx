import ReactMarkdown from 'react-markdown';
import rehype from 'rehype-raw';
import remark from 'remark-gfm';

type FileMarkdownProps = { text: string };

const FileMarkdown = ({ text }: FileMarkdownProps) => {
  return (
    <div className="min-w-0 rounded-bl-md rounded-br-md p-8">
      <article className="markdown-body prose m-auto max-w-[1012px] max-w-none text-white prose-headings:my-1 prose-headings:border-b prose-headings:border-b-gray-800 prose-headings:pb-2 prose-headings:font-medium prose-headings:text-white prose-h1:my-4 prose-h2:my-4 prose-h3:border-none prose-h4:border-none prose-h5:border-none prose-p:my-3 prose-p:leading-6 prose-a:font-normal prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:rounded-md prose-code:bg-[#343941] prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:text-white prose-pre:bg-gray-100 prose-li:my-0.5 prose-img:m-0 prose-img:inline">
        <ReactMarkdown rehypePlugins={[rehype, remark]}>{text}</ReactMarkdown>
      </article>
    </div>
  );
};

export default FileMarkdown;
