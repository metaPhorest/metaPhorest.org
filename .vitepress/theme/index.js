// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme';
import Figure from './components/Figure.vue';
import Event from './components/Event.vue';
import Work from './components/Work.vue';

import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component( 'Figure', Figure );
    app.component( 'Event', Event );
    app.component( 'Work', Work );
  }
}


/*
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
*/