import Link from '@components/atoms/Link';
import Image from 'next/image';

type ContributorsProps = {
  contributors: any[];
};

const Contributors = ({ contributors }: ContributorsProps) => (
  <>
    <h2 className="mb-4 font-semibold">
      <Link className="hover:text-[#2f81f7]" href="#">
        Contributors <span className="Counter ml-1">0</span>
      </Link>
    </h2>
    <ul className="mb-[calc(8px*-1)] flex flex-wrap">
      {contributors.map(({ login, avatarUrl }) => (
        <li key={login} className="mb-2 mr-2">
          <Link href="#">
            <Image
              className="avatar"
              src={avatarUrl}
              alt={login}
              width={32}
              height={32}
            />
          </Link>
        </li>
      ))}
    </ul>
    <div className="mt-4">
      <Link href="#">+ {contributors.length} contributors</Link>
    </div>
  </>
);

export default Contributors;
