import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { Language } from '@utils/parsers/types/Language';
import classNames from 'classnames';

type LanguagesProps = {
  languages?: Language[] | null;
};

const Languages = ({ languages }: LanguagesProps) => {
  if (!languages) {
    return null;
  }

  return (
    <>
      {/* <div className="mb-2">
        <span className="Progress"></span>
      </div> */}
      <ul className="">
        {languages?.map(({ name, color }) => (
          <li key={name} className="inline">
            <Link
              className="mr-4 inline-flex flex-nowrap items-center text-xs text-[#7d8590]"
              href="#"
            >
              <Icon
                className={classNames(['icon mr-2', `fill-[${color}]`])}
                name="dot-fill"
                size={16}
              />
              <span className="mr-1 font-semibold text-[#e6edf3]">{name}</span>
              {/* <span className="text-[#7d8590]">{coverage}</span> */}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
