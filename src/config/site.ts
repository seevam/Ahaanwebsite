const env = import.meta.env;

export const site = {
  name: 'iTester',
  shortName: 'Ahaan',
  email: env.PUBLIC_CONTACT_EMAIL ?? 'hello@example.com',
  plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN ?? '',
  // Direct download of the test build (e.g. an .apk file); leave empty to link the header button to #download.
  apkUrl: env.PUBLIC_APK_URL ?? '',
  youtubeId: env.PUBLIC_YOUTUBE_ID ?? '',
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

