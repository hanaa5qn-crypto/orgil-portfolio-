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
    'Мөнх-Оргил.Б — Futures Day Trader, мөн CRG Public & Private Community-үүдийн үүсгэн байгуулагч.',
  body:
    'Би сүүлийн 5 жил хувь хүний хөгжил хийж, 3 дахь жилдээ контент, арилжаа хийж байгаа бөгөөд энэ хугацаанд сурж ойлгосон зүйлсээ та бүхэнтэйгээ хуваалцмаар байна.',
};

export const COMMUNITIES_INTRO = {
  eyebrow: '02 / Community',
  heading: 'Миний community-д нэгдэх нь',
};

export const COMMUNITIES: Community[] = [
  {
    id: 'crg',
    name: 'CRG',
    logo: '/logos/crg.jpg',
    kicker: 'Public & Private Trading Community',
    // Client's own two lines, verbatim.
    description:
      'Public Community-д маань үнэгүй нэгдээрэй. Харин Private Community нэгдэхийг хүсвэл энэ нь таны арилжааны замналдаа хийх хамгийн шилдэг хөрөнгө оруулалтуудын нэг байх болно. Манай Private Community-д нэгдсэнээр та эрсдэлийн менежмент, арилжааны сэтгэл зүй, ICT концепт болон миний стратегийг бүрэн сурах болно.',
    access: '',
    ctaLabel: 'Join now',
    ctaHref: 'https://olula.mn/en/c/crg-trading-community-by-orgil-wins',
    accent: '#dedbc8',
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
  // The raw gmail address is deliberately not displayed (Orgil's call — reads
  // unprofessional). Gmail web compose instead of mailto: — mailto silently
  // does nothing on machines with no mail client configured.
  heading: 'Холбоо барих',
  email: 'munkhorgil193@gmail.com',
  headingHref: 'https://mail.google.com/mail/?view=cm&to=munkhorgil193@gmail.com',
  cta: 'Холбогдох',
  links: [
    { label: 'Instagram', handle: '@orgil.wins', href: 'https://instagram.com/orgil.wins' },
    { label: 'YouTube', handle: '@munkhorgilmike', href: 'https://www.youtube.com/@munkhorgilmike/videos' },
    // Same XM code as the partner card — referenced, not duplicated, so it can never drift.
    { label: PARTNER.label, handle: PARTNER.code, href: PARTNER.href },
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
    communities: ['CRG Public', 'CRG Private'],
  },
  submit: 'Илгээх',
  success: '[TODO: Orgil-оос авах]',
};
