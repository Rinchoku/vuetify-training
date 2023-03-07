const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
    data() {
        return {
            message: 'hogehoge',
        };
    },
})
app.use(vuetify).mount('#app')
