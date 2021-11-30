const app1 = new Vue({el: '#app1', data: {mensaje: "Hola mundo desde Vue.js", nombre:"Diego"},
})


var example1 = new Vue({
    el: '#example-1',
    data: {
    pcs: [
    {nombre:"Lenovo"},
    {nombre:"Dell"},
    {nombre:"HP"}
    ]
    }})



var ejemplo_vIf_vFor = new Vue({
    el: '#ejemplo',
    data: {
    titulo: "Ejemplo v-if y v-for",
    notebooks: [
    {nombre:"Lenovo", cantidad: 5},
    {nombre:"Dell", cantidad: 0},
    {nombre:"HP", cantidad: 3},
    {nombre:"Apple", cantidad: 7},
    {nombre:"Samsung", cantidad: 15}], nuevaMarca:'',},
    methods: {
        agregarMarca(){this.notebooks.push({nombre: this.nuevaMarca, cantidad: 0}); this.nuevaMarca = '';},             
        agregarMarca2(){if(this.nuevaMarca != "")this.notebooks.push({nombre: this.nuevaMarca, cantidad: 0}); this.nuevaMarca = '';},
    },
    computed: {
        sumarNotebooks(){this.total=0; for (marca of this.notebooks){this.total += marca.cantidad;};
        return this.total;},
    }, 

})

var myObject = new Vue({
    el: "#appp",
    data: { message: "Hello World with Vue.js"}})

var example2 = new Vue({
    el: "#example-2",
    data: {counter: 0}})

new Vue({ el: '#components-demo'},
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  }),
Vue.component('saludo', {
template: "<h1>Hola (estático desde template)</h1>"
  }),
Vue.component('saludodos', {
template: "<h1>{{msj}}</h1>",
data(){
return {
msj: 'Hola (dinámica y como componente)',
}}}),
Vue.component('saludotres', {
    template: `
    <div>
    <h1>{{msj}}</h1>
    <h2>{{titulo}}</h2>
    </div>
    `,
    data(){
    return {
    msj: 'Hola (dinámica y como componente)',
    titulo: "Título dinámico"
    }
    }
    }),
Vue.component('contador', {
    template:
        `<div>
        <h3>Cantidad: {{num}}</h3>
        <button @click="num++">+</button>
        <button @click="num--">-</button>
        </div>
        `,
        data() {
        return {
        num: 0
        }
        }
        }),


)