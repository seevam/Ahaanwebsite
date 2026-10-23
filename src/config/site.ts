const env = import.meta.env;

export const site = {
  name: 'Impact an Eye Every Day',
  shortName: 'Ahaan',
  email: env.PUBLIC_CONTACT_EMAIL ?? 'hello@example.com',
  plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN ?? '',
  notifyFormUrl: env.PUBLIC_NOTIFY_FORM_URL ?? '',
  stores: {
    play: env.PUBLIC_PLAY_STORE_URL ?? '',
    apple: env.PUBLIC_APP_STORE_URL ?? '',
  },
  // Feature flag: testimonials stay hidden until real quotes with written permission exist.
  showTestimonials: env.PUBLIC_SHOW_TESTIMONIALS === 'true',
};

export const published = Boolean(site.stores.play || site.stores.apple);

/** Real quotes only, with written permission. Leave empty until supplied. */
export const testimonials: { quote: string; name: string; role: 'Patient' | 'Caregiver' | 'Doctor' }[] = [];

/** Real dates only. Entries without a date are not rendered. */
export const timeline: { date: string; title: string; text: string }[] = [
  {
    date: 'March 2026',
    title: 'Research and product requirements',
    text: 'Wrote the product requirements: who the app is for, how eye-drop schedules work, and what makes a reminder impossible to miss.',
  },
  // TODO(content owner): add design, build and testing milestones with real dates.
];
