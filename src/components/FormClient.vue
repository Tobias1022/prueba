<template>
    <div class="row">
        <div class="col-lg-4">
            <h4>Probando Componente</h4>
            <div class="nb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" type="text" class="form-control">
            </div>
    <button @click="mostrar" class="btn btn-success">Aceptar</button>
    <h4>{{nombre}}</h4>
     </div>
 </div>
</template>
<script>
/* eslint-disable */
import { ref } from "vue";
export default {
    name:'FormClient',
    setup() {
        let nombre = ref('Pepe')

        function mostrar(){
           alert(nombre.value)
        }

        return{
            nombre,
            mostrar
        }
    },
}
</script>