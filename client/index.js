var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    data: null,
    treeIllustration: '',
  },
  methods: {
    harvest() {
      axios.get('http://localhost:3000/harvest')
      .then(response => {
        this.data.harvested += response.data.fruitsHarvested;
        this.data.lifeTimeHarvested += response.data.fruitsHarvested;
        this.data.fruits = 0;
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
  mounted() {
    axios.get('http://localhost:3000/')
    .then(response => {
      this.data = response.data;
      let age = this.data.age;
      if (age < 12){
        this.treeIllustration = "/asset/tree 1.png"
      } else if (age >= 12 && age < 24) {
        this.treeIllustration = "/asset/tree 2.png"
      } else if (age >= 24 && age < 36) {
        this.treeIllustration = "/asset/tree 3.png"
      } else if (age >= 36) {
        this.treeIllustration = "/asset/tree 4.png"
      }
    })
    .catch((err) => {
      console.log(err);
    })
  },
})
