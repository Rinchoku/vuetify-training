const { createApp, ref } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
    data() {
        return {
            message: '',
        };
    },
    setup() {
        const showCustomDialog = ref(false);

        function toggleShowCustomDialog () {
            showCustomDialog.value = !showCustomDialog.value;
        }

        return {
            showCustomDialog,
            toggleShowCustomDialog,
        };
    },
})
app.use(vuetify).mount('#app')
