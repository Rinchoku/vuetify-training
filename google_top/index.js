const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
    data() {
        return {
            message: '',
        };
    },
})
app.use(vuetify).mount('#app')
