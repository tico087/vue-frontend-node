<template>
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - R$ {{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductList',
    data() {
      return {
        products: []
      };
    },
    mounted() {
      axios.get('http://localhost:3000/api/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Erro ao fazer requisição:', error);
        });
    }
  };
  </script>
  