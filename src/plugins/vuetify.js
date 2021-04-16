import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

var darkMode = false; 

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        dark: darkMode,
        themes: {
            light: {
                primary: "#02182B",
                secondary: "#FFFFFF",
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.purple,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            }
        }
     }
});
