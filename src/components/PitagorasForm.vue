<template>
    <div class="row">
      <div class="col-lg-4">
      <div>
        <label>Cateto opuesto</label>
        <input type="number" v-model="catetoOpuesto" placeholder="Ingrese cateto" />
      </div>
      <div>
        <label>Cateto adyacente</label>
        <input type="number" v-model="catetoAdyacente" placeholder="Ingrese cateto" />
      </div>
      <button @click="calcularHipotenusa">Calcular Hipotenusa</button>
      <p v-if="hipotenusa">Hipotenusa = {{ hipotenusa }}</p>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        catetoOpuesto: 0,
        catetoAdyacente: 0,
        hipotenusa: 0
      };
    },
    methods: {
      calcularHipotenusa() {
        if (this.catetoOpuesto && this.catetoAdyacente) {
          this.hipotenusa = Math.sqrt(Math.pow(this.catetoOpuesto, 2) + Math.pow(this.catetoAdyacente, 2)).toFixed(2);
        } else {
          alert('Por favor, ingresar catetos.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* eslint-disable */
  </style>
  