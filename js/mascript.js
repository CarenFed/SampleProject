var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    info: null,
    firstName: '',
    lastName: ''
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      .catch(error => console.log(error));
    array = JSON.parse(this.info);
  },
  methods: {
    sampleMethod: function () {
      alert('Vue click binding.');
    }
  },
  computed:{
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  }
})