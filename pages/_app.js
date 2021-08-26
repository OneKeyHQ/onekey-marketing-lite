import { UIProvider } from '@onekeyhq/ui-components';
import messageMap from '../locales';

import 'tailwindcss/tailwind.css'
import '@onekeyhq/ui-components/index.css';

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function forceLang() {
  if (typeof window === 'undefined') return 'zh-CN';
  const query = getParameterByName('language');
  if (!query) return 'zh-CN';
  if (query.includes('zh')) return 'zh-CN';
  if (query.includes('en')) return 'en-US';
  return 'zh-CN';
}

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') return null;
  return (
    <UIProvider intl={{ locale: forceLang() }} messagesMap={messageMap} defaultTheme="light">
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default MyApp
