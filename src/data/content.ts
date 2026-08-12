/**
 * Single source of truth for every user-facing string on the site.
 * Components import from here and render — no copy is hardcoded in JSX.
 *
 * RULE: the Mongolian below is the client's OWN text, reproduced verbatim.
 * Do not reword, "improve", or re-register it. Only the client changes his words.
 * Anything he has not supplied is a [TODO: ...] slot, never invented filler.
 */
import { Community, ContactLink, PartnerOffer } from '../types';

export const NAV = [
  { id: 'about', label: 'Миний тухай' },
  { id: 'communities', label: 'Community' },
  { id: 'contact', label: 'Холбогдох' },
] as const;

export const HERO = {
  wordmark: 'ORGIL',
  role: 'Futures Day Trader',
  cta: 'Community-д нэгдэх',
  ctaSecondary: 'Миний тухай',
};

export const ABOUT = {
  eyebrow: '01 / Танилцуулга',
  // Client's own text, verbatim.
  intro:
    'Мөнх-Оргил.Б — Futures Day Trader, Limitless Private Community, мөн CRG Public & Private Community-үүдийн үүсгэн байгуулагч.',
  body:
    'Би сүүлийн 5 жил хувь хүний хөгжил хийж, 3 дахь жилдээ контент, арилжаа хийж байгаа бөгөөд энэ хугацаанд сурж ойлгосон зүйлсээ та бүхэнтэйгээ хуваалцмаар байна.',
};

export const COMMUNITIES_INTRO = {
  eyebrow: '02 / Community',
  heading: 'Миний community-д нэгдэх линкүүд',
};

export const COMMUNITIES: Community[] = [
  {
    id: 'crg',
    name: 'CRG',
    kicker: 'Public & Private Trading Community',
    // Client's own two lines, verbatim.
    description:
      'Public Community-д маань үнэгүй нэгдээрэй. Харин Private Community нэгдэхийг хүсвэл энэ нь таны арилжааны замналдаа хийх хамгийн шилдэг хөрөнгө оруулалтуудын нэг байх болно.',
    access: '',
    ctaLabel: 'Join now',
    ctaHref: 'https://olula.mn/en/c/crg-trading-community-by-orgil-wins',
    accent: '#dedbc8',
  },
  {
    id: 'limitless',
    name: 'Limitless',
    kicker: '10 men community',
    description:
      'Энэ бол миний хувийн, маш өндөр шалгууртай Trading community. Трейдингийн төлөө маш их золиослож, шилдгүүдийн шилдэг болохын төлөө тэмүүлж яваа эрчүүдийг л бид элсүүлж авдаг.',
    access: 'Ороход үнэ төлбөргүй',
    ctaLabel: 'Apply now',
    ctaHref:
      'https://docs.google.com/forms/d/e/1FAIpQLSfFkwH4Pi15qScg5qUZbq82gfv2HMnmqjfIKOy9Z_8pOwMv_g/viewform',
    accent: '#fbf7e4',
  },
  {
    id: 'ngu',
    name: 'NGU',
    kicker: 'Self-improvement community',
    // Client's text opened with "Удхгүй" — read as "Удахгүй" (soon) and surfaced as
    // the status badge instead of a dangling adverb. Confirm with Orgil.
    status: 'Удахгүй',
    description:
      'Бид хамтдаа ном уншиж, хооллолтоо хянаж, мөрөөдлийн биеэ бүтээж, өөр өөр орнуудад уулзалт зохион байгуулна. Та трейдер байх шаардлагагүй, гэхдээ маш их хүсэл зорилготой байх ёстой.',
    access: '',
    ctaLabel: 'Pre-register now',
    // Unwrapped from the l.instagram.com redirect Orgil sent — that wrapper carries
    // tracking params and expires; forms.gle is the durable destination.
    ctaHref: 'https://forms.gle/8wStWuibR5CZwT729',
    accent: '#c9c6bc',
  },
];

/** Client-stated partner offer, verbatim. The figures are his — do not alter them. */
export const PARTNER: PartnerOffer = {
  label: 'XM Broker',
  body:
    'Мөн би XM брокер-тэй хамтарч ажилладаг бөгөөд доорх линк эсвэл код-оор бүртгэлээ үүсгээд $50 credit, $100 хүртэл %100 deposit bonus-аа аваарай.',
  linkLabel: 'Link',
  link: 'affs.click/1RytX',
  href: 'https://affs.click/1RytX',
  codeLabel: 'Code',
  code: 'TKMJ6',

  // Deliberately kept to one line. A leveraged-products promotion should carry a risk
  // note; everything else (regulator IDs, account specs, bonus mechanics) was cut as
  // over-detailed for a single ad card.
  risk: 'CFD бол хөшүүрэгтэй бүтээгдэхүүн. Таны хөрөнгө эрсдэлд байна.',
};

export const CONTACT = {
  eyebrow: '03 / Холбогдох',
  heading: 'munkhorgil193@gmail.com',
  headingHref: 'mailto:munkhorgil193@gmail.com',
  cta: 'Холбогдох',
  // Email is omitted here: it is already the section heading, and listing it twice
  // in one footer reads as an oversight rather than emphasis.
  links: [
    { label: 'Instagram', handle: '@orgil.wins', href: 'https://instagram.com/orgil.wins' },
    { label: 'YouTube', handle: '@munkhorgilmike', href: 'https://www.youtube.com/@munkhorgilmike/videos' },
  ] as ContactLink[],
  copyright: '© 2026 Мөнх-Оргил.Б',
};

export const FORM = {
  heading: 'Холбогдох',
  labels: {
    name: 'Нэр',
    email: 'Имэйл',
    community: 'Аль community-д нэгдэхийг хүсэж байна вэ?',
    details: 'Зурвас',
  },
  options: {
    communities: ['CRG Public', 'CRG Private', 'Limitless', 'NGU'],
  },
  submit: 'Илгээх',
  success: '[TODO: Orgil-оос авах]',
};
