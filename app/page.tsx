'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Icon from './components/modules/Icon';
import Link from './components/modules/Link';

const footerLinks: any[] = [
  { title: 'Blog', url: 'https://github.blog/' },
  { title: 'About', url: 'https://github.com/about' },
  { title: 'Shop', url: 'https://shop.github.com/' },
  {
    title: 'Contact Github',
    url: 'https://support.github.com/?tags=dotcom-footer',
  },
  { title: 'Pricing', url: 'https://github.com/pricing' },

  { title: 'API', url: 'https://docs.github.com/' },
  { title: 'Training', url: 'https://services.github.com/' },
  { title: 'Status', url: 'https://www.githubstatus.com/' },
  { title: 'Security', url: 'https://github.com/security' },
  {
    title: 'Terms',
    url: 'https://docs.github.com/site-policy/github-terms/github-terms-of-service',
  },
  {
    title: 'Privacy',
    url: 'https://docs.github.com/site-policy/privacy-policies/github-privacy-statement',
  },
  { title: 'Docs', url: 'https://docs.github.com/' },
];

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
        <aside
          className="hidden w-1/4 border-r sm:block md:w-1/3"
          style={{
            backgroundColor: '#0d1117',
            borderColor: '#30363d',
            maxWidth: '350px',
          }}
        >
          <div className="min-h-1/2 sticky bottom-0 top-0 z-30 flex max-h-screen flex-col overscroll-y-auto px-6 pt-4">
            <div
              className="mb-4 border-b py-4"
              style={{ borderColor: '#21262d' }}
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
            </div>

            <div className="min-h-[50%] flex-1">
              <div>
                <h2 className="mb-4 flex items-center justify-between text-base font-semibold md:text-sm">
                  Top Repositories
                  <Link className="btn btn-primary px-3 py-1" href="#">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="inline-block fill-current"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>{' '}
                    New
                  </Link>
                </h2>
                <ul>
                  <li>
                    <div className="mt-2 flex w-full">something/link</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>

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
                  {/* TODO: Add mobile menu */}
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
                  </div>
                </section>
                {/* Footer */}
                <div className="mx-auto my-8 grid w-full max-w-none grid-cols-5 gap-4 px-0 text-xs">
                  <div className="col-span-2">
                    <Link
                      className="flex items-center"
                      href="https://github.com/"
                    >
                      <Icon
                        name="github"
                        className="fill-dark mr-2 dark:fill-white"
                        size={24}
                      />
                      © 2023 GitHub, Inc.
                    </Link>
                  </div>
                  <div className="">
                    <ul className="pl-6">
                      {footerLinks.slice(0, 5).map(({ title, url }) => (
                        <li key={title} className="mb-1">
                          <Link href={url}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <ul className="pl-6">
                      {footerLinks.slice(5, 9).map(({ title, url }) => (
                        <li key={title} className="mb-1">
                          <Link href={url}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <ul className="pl-6">
                      {footerLinks.slice(9).map(({ title, url }) => (
                        <li key={title} className="mb-1">
                          <Link href={url}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
