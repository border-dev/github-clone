'use client';

import Icon from '@components/atoms/Icon';
import HomeFeedFooter from '@components/modules/HomeFeedFooter';
import HomeLeftSidebar from '@components/organisms/HomeLeftSidebar';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession({
    required: true,
  });
  const name = session?.user?.name;
  const image = session?.user?.image;

  return (
    <>
      {/* Secondary header */}
      <aside
        aria-label="Account context"
        className="w-full border-b border-[#30363d] bg-[#0d1117] p-4 lg:hidden lg:px-4"
      >
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
      </aside>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <HomeLeftSidebar name={name} image={image} />

        {/* Main - Commit graphs */}
        <div className="w-2/3 flex-auto px-4 md:px-8">
          <div className="flex">
            <div className="mt-4 w-full px-6 lg:w-2/3">
              <div
                className="mx-auto flex flex-auto flex-col"
                style={{
                  maxWidth: '1400px',
                }}
              >
                {/* Main Content */}
                <section className="flex-auto">
                  <h1 className="sr-only" style={{ width: '1', height: '1' }}>
                    Dashboard
                  </h1>
                  {/* Feed */}
                  <div>
                    <div className="flex">
                      <ul
                        className="flex items-center"
                        style={{
                          gap: '.5rem .5rem',
                        }}
                        aria-label="Your Feeds"
                      >
                        <li className="inline-flex">
                          <button
                            className="relative flex cursor-pointer items-center whitespace-nowrap rounded-md border-0 p-2 text-center text-sm font-semibold text-white transition hover:bg-neutral-900"
                            style={{
                              borderBottomColor: '#f78166',
                            }}
                          >
                            Following
                          </button>
                        </li>
                      </ul>
                    </div>
                    <button onClick={() => signOut()}>Sign Out</button>
                  </div>
                </section>
                <HomeFeedFooter />
              </div>

              {/* Right Sidebar */}
              {/* <aside
                className="mt-8 px-6 md:max-w-full lg:w-1/3"
                style={{
                  maxWidth: '350px',
                }}
              ></aside> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
