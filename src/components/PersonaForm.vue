<template>
    <div class="row">
        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" type="text" class="form-control" placeholder="Ingrese Nombre">
            </div>
            <div class="mb-3">
                <label class="form-label">Apellido</label>
                <input v-model="apellido" type="text" class="form-control" placeholder="Ingrese Apellido">
            </div>
            <div class="mb-3">
                <label class="form-label">DNI</label>
                <input v-model="dni" type="number" class="form-control" placeholder="Ingrese DNI">
            </div>
            <div v-if="estado == 0">
                <button @click="guardarPersona()" class="btn btn-success">Guardar cliente</button>
            </div>
            <div v-if="estado == 1">
                <button @click="actualizarpersona()" class="btn btn-primary">Actualizar cliente</button>
            </div>
        </div>
        <div class="col-8">
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Dni</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="persona of lista" :key="persona.id_cliente">
                        <td>{{ persona.nombre }}</td>
                        <td>{{ persona.apellido }}</td>
                        <td>{{ persona.dni }}</td>
                        <td>
                            <button @click="eliminarPersona(persona.id_cliente)" class="btn btn-danger btn-sm" style="margin-right:4px">x</button>
                            <button @click="editar(persona)" class="btn btn-primary btn-sm">edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClienteForm',
    data() {
        return {
            nombre: '',
            apellido: '',
            dni: null,
            id: null,
            lista: [],
            estado: 0,
        };
    },
    methods: {
        vaciar() {
            this.nombre = '';
            this.apellido = '';
            this.dni = null;
        },
        guardarPersona() {
            const unCliente = {
                nombre: this.nombre,
                apellido: this.apellido,
                dni: this.dni,
            };
            this.axios.post("http://localhost:3000/cliente", unCliente).then(result => {
                alert(result.data);
                this.vaciar();
            });
        },
        listarPersona() {
            this.axios.get("http://localhost:3000/clientes").then(result => {
                this.lista = result.data;
            });
        },
        eliminarPersona(id) {
            this.axios.delete("http://localhost:3000/cliente/" + id).then(result => {
                alert(result.data);
                this.listarPersona();
            });
        },
        editar(unCliente) {
            this.estado = 1;
            this.nombre = unCliente.nombre;
            this.apellido = unCliente.apellido;
            this.dni = unCliente.dni;
            this.id = unCliente.id_cliente;
        },
        actualizarpersona() {
            const personamodificado = {
                nombre: this.nombre,
                apellido: this.apellido,
                dni: this.dni,
            };
            this.axios.put("http://localhost:3000/cliente/" + this.id, personamodificado).then(result => {
                alert(result.data);
                this.listarPersona();
                this.vaciar();
                this.estado = 0;
            });
        }
    },
    mounted() {
        this.listarPersona();
    }
};
</script>