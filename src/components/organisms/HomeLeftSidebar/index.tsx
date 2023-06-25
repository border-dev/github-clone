import Icon from '@components/atoms/Icon';
import Link from '@components/modules/Link';
import UserTopRepos from '@components/modules/UserTopRepos';
import Image from 'next/image';

type HomeLeftSidebarProps = {
  name?: string | null;
  image?: string | null;
};

const HomeLeftSidebar = ({ name, image }: HomeLeftSidebarProps) => (
  <aside
    className="hidden w-1/4 border-r sm:block md:w-1/3"
    style={{
      backgroundColor: '#0d1117',
      borderColor: '#30363d',
      maxWidth: '350px',
    }}
  >
    <div className="min-h-1/2 sticky bottom-0 top-0 z-30 flex max-h-screen flex-col overscroll-y-auto px-6 pt-4">
      <div className="mb-4 border-b py-4" style={{ borderColor: '#21262d' }}>
        <button className="inline-block">
          {name && image ? (
            <Image
              className="h-5 w-5 rounded-full"
              src={image}
              width={20}
              height={20}
              alt={name}
            />
          ) : (
            <Icon name="user-circle" size={20} />
          )}
        </button>
      </div>

      <div className="min-h-[50%] flex-1">
        <div>
          <h2 className="mb-4 flex items-center justify-between text-base font-semibold md:text-sm">
            Top Repositories
            <Link className="btn bg-[#238636] px-3 py-1 text-white" href="#">
              <Icon
                className="inline-block fill-current"
                name="book-outline"
                size={16}
              />{' '}
              New
            </Link>
          </h2>
          <UserTopRepos />
        </div>
      </div>
    </div>
  </aside>
);

export default HomeLeftSidebar;
