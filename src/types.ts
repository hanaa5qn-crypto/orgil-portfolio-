export interface Community {
  id: 'crg';
  name: string;
  kicker: string;
  description: string;
  access: string;
  ctaLabel: string;
  /** External join/apply URL. null = not open yet, CTA falls back to the inquiry form. */
  ctaHref: string | null;
  /** Short badge shown on the card, e.g. a launch status. */
  status?: string;
  /** Path to the community's logo image (public/). Cards without one fall back to the text name. */
  logo?: string;
  accent: string;
}

/** A partner offer stated by the client, rendered verbatim. */
export interface PartnerOffer {
  label: string;
  body: string;
  link: string;
  href: string;
  code: string;
  linkLabel: string;
  codeLabel: string;
  /** One-line risk disclosure for a leveraged-products promotion. */
  risk: string;
}

/** A single contact channel rendered in the footer. */
export interface ContactLink {
  label: string;
  handle: string;
  href: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  community: string;
  details: string;
}
