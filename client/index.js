
// Required for side-effects
// require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyB9qtA3mYGOGcNwZ9vGl3X8ltUAqIqbjEg',
  authDomain: 'mango-tree-d3584.firebaseapp.com',
  projectId: 'mango-tree-d3584'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    data: {},
    treeIllustration: '',
    log: null,
  },
  computed: {
    treeImg() {

      const age = this.data.age;
      if (age < 12){
        return "/asset/tree 1.png"
      } else if (age >= 12 && age < 24) {
        return "/asset/tree 2.png"
      } else if (age >= 24 && age < 36) {
        return "/asset/tree 3.png"
      } else if (age >= 36) {
        return "/asset/tree 4.png"
      }
    },
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

db.collection('tree').doc('mango')
.onSnapshot(function(doc) {
  app.data = doc.data();
});

db.collection('log').doc('mango')
.onSnapshot(function(doc) {
  app.log = doc.data();
});
