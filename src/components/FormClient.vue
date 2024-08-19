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
        <div class="col-lg-8">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Api</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Correo Electronico</th>
                        <th>Sitio web</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(u,index) of lista_usuario" v-bind:key="index">
                        <td>{{index+1}}</td>
                        <td>{{u.name}}</td>
                        <td>{{u.username}}</td>
                        <td>{{u.email}}</td>
                        <td>{{u.website}}</td>

                    </tr>
                </tbody>
            </table>
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
        let lista_usuario = ref ([])

        function mostrar(){
           alert(nombre.value)
        }

        async function obtenerusuarios(){
            const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
            lista_usuario.value = await usuarios.json()
        }

        return{
            nombre,
            mostrar,
            lista_usuario,
            obtenerusuarios
        }
    },
    created(){
        this.obtenerusuarios()
    }
}
</script>