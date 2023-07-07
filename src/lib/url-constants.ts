interface ExternLink {
  /* Name of the link */
  title: string;
  /* External FQDN */
  url: string;
}

export const HOME_FEED_FOOTER_LINKS: ExternLink[] = [
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

export const REPO_HOME_FOOTER_LINKS: ExternLink[] = [
  {
    title: 'Terms',
    url: 'https://docs.github.com/site-policy/github-terms/github-terms-of-service',
  },
  {
    title: 'Privacy',
    url: 'https://docs.github.com/site-policy/privacy-policies/github-privacy-statement',
  },
  { title: 'Security', url: 'https://github.com/security' },
  { title: 'Status', url: 'https://www.githubstatus.com' },
  { title: 'Docs', url: 'https://docs.github.com' },
  {
    title: 'Contact GitHub',
    url: 'https://support.github.com?tags=dotcom-footer',
  },
  { title: 'Pricing', url: 'https://github.com/pricing' },
  { title: 'API', url: 'https://docs.github.com' },
  { title: 'Training', url: 'https://services.github.com' },
  { title: 'Blog', url: 'https://github.blog' },
];
