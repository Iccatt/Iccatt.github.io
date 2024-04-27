import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Iccatt',
  subtitle: 'Blog Site',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.png',
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    // src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    // src: 'assets/images/Icc.jpg',    // Path of the favicon, relative to the /public directory
    // theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    // sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari',
    //   external: true,
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/Icc.jpg',
  name: 'Iccatt',
  bio: '',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: '',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: '',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Iccatt',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
