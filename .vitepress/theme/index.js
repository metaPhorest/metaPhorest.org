// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme';
import Figure from './components/Figure.vue';
import Event from './components/Event.vue';

import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component( 'Figure', Figure );
    app.component( 'Event', Event );
  }
}


/*
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
*/