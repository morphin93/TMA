// interactionMenu.js
Vue.component('interaction-menu', {
    template: `
        <div id="interactionMenu">
            <button @click="fetchData">Teste2</button>
            <p>{{ coinData }}</p>
        </div>
    `,
    data() {
        return {
            coinData: ''
        };
    },
    methods: {
        fetchData() {
            axios.get('url')
                .then(response => {
                    this.coinData = response.data[0];
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    Telegram.WebApp.sendData('Error fetching data');
                });
        }
    }
});