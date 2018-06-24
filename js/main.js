

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUJP9RU0Zrh52-vk8gANsqA0lG7oAr5yU",
    authDomain: "test-fb-be31e.firebaseapp.com",
    databaseURL: "https://test-fb-be31e.firebaseio.com",
    projectId: "test-fb-be31e",
    storageBucket: "test-fb-be31e.appspot.com",
    messagingSenderId: "363256205370"
  };
  firebase.initializeApp(config);

Vue.component ("app-car",{
data: function (){
   return {cars: [
        {model:"BMW", speed:250},
        {model:"Mercedes", speed:270},
        {model:"Audi", speed:260},
        {model:"Ford", speed:230}
    ]}
},
template:'<article><article class="car" v-for="car in cars"><p>{{car.model}}</p></article></article>'
});

Vue.filter ("capitalize", function(value){
if (!value) return "";
value=value.toString();
return value.replace(/\b\w/g,function(l){return l.toUpperCase()});
});

new Vue ({
    el: '#app',
    data: {
        message: "Hello world, hello",
        styleCSS: '',
        value: 1,
        show: true,
        cars: [
            {model:"BMW", speed:250},
            {model:"Mercedes", speed:270},
            {model:"Audi", speed:260},
            {model:"Ford", speed:230}
        ],
        user:{
            email:"",
            password:"",
            passwordConfirm:""
        }
    },
    methods:{
        changeText (){
            this.message = "Текст";
        },
        increment(value)
        {
            this.value=value;
            this.doubleValue=this.value*2;
            if (this.value==3)
            {
                alert("sdsdsd");
            }
        },
        registerUser()
        {
            firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password);
            alert("registered "+ this.user.email+" "+this.user.password);
        }
    },
    computed:
    {
        doubleValue()
        {
            return this.value*2;
        },
        showMess()
        {
            return this.message.toUpperCase();
        }
    },
    filters:
    {
        lowerCase(value)
        {
            return value.toLowerCase();
        }
    }
});
new Vue({
    el:"#app2"
})