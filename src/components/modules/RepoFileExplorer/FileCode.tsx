import { Highlight } from 'prism-react-renderer';
import classNames from 'classnames';

interface FileCodeProps {
  code: string;
  language: string;
}

const FileCode = ({ code, language }: FileCodeProps) => {
  return (
    <Highlight code={code} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            'overflow-auto px-8 text-left text-xs',
            className,
          )}
        >
          {tokens.map((line, i) => {
            const { className: defaultClassName, ...lineProps } = getLineProps({
              line,
              key: i,
            });
            return (
              <div
                className={classNames('table-row', defaultClassName)}
                key={i}
                {...lineProps}
              >
                <span className="table-cell select-none pr-8 text-right text-gray-500">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default FileCode;
