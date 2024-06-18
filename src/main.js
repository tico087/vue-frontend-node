import { createApp } from 'vue';
import App from './App.vue';
import ProductList from './components/ProductList.vue'; 

const app = createApp(App);
app.component('ProductList', ProductList); // Componente registrado com o novo nome

app.mount('#app');
