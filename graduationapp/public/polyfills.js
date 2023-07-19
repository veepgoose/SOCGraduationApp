import url from 'url-polyfill';

if (!window.URL) {
  window.URL = url.URL;
}   