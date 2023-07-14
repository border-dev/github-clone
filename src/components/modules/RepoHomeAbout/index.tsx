import Icon from '@components/atoms/Icon';
import Link from '@components/atoms/Link';
import { Language } from '@utils/parsers/types/Language';
import Contributors from './Contributors';
import Description from './Description';
import HomepageUrl from './HomepageUrl';
import Languages from './Languages';
import Topics from './Topics';

type RepoHomeAboutProps = {
  description?: string | null;
  homePageURL?: string | null;
  topics?: string[] | null;
  contributors?: any[] | null;
  languages?: Language[] | null;
};

const RepoHomeAbout = ({
  description,
  homePageURL,
  topics,
  contributors,
  languages,
}: RepoHomeAboutProps) => {
  return (
    <div className="BorderGrid BorderGrid--spacious">
      <div className="table-row">
        <div className="BorderGrid-cell">
          <h2 className="font-semibold">About</h2>
          <Description description={description} />
          <HomepageUrl homePageURL={homePageURL} />
          <Topics topics={topics} />
          <h3 className="sr-only">Resources</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="book" size={16} /> Readme
            </Link>
          </div>
          {/* <h3 className="sr-only">License</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="law" size={16} /> MIT License
            </Link>
          </div>
          <h3 className="sr-only">Code of conduct</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="code-of-conduct" size={16} />{' '}
              Code of conduct
            </Link>
          </div>
          <h3 className="sr-only">Security policy</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="law" size={16} /> Security
              policy
            </Link>
          </div> */}
          <h3 className="sr-only">Activity</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="pulse" size={16} /> Activity
            </Link>
          </div>
          <h3 className="sr-only">Stars</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="star-outline" size={16} />
              <strong>0</strong> stars
            </Link>
          </div>
          <h3 className="sr-only">Watchers</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="eye" size={16} />
              <strong>0</strong> watching
            </Link>
          </div>
          <h3 className="sr-only">Forks</h3>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              <Icon className="icon mr-2" name="forked" size={16} />
              <strong>0</strong> forks
            </Link>
          </div>
          <div className="mt-2">
            <Link
              className="text-sm text-[#7d8590] hover:text-[#2f81f7]"
              href="#"
            >
              Report repository
            </Link>
          </div>
        </div>
      </div>
      {contributors && (
        <div className="table-row">
          <div className="BorderGrid-cell">
            <Contributors contributors={contributors} />
          </div>
        </div>
      )}
      <div className="table-row">
        <div className="BorderGrid-cell">
          <h2 className="mb-4 font-semibold">Languages</h2>
          <Languages languages={languages} />
        </div>
      </div>
    </div>
  );
};

export default RepoHomeAbout;
