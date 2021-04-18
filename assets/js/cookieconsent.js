import CookieConsent from '@grrr/cookie-consent';

const cookieConsent = CookieConsent({
  cookies: [
    {
      id: 'functional',
      label: 'Functional',
      description: 'Lorem ipsum.',
      required: true,
    },  
    {
      id: 'marketing',
      label: 'Marketing',
      description: 'Lorem ipsum.',
      checked: true,
    },
  ],
});
