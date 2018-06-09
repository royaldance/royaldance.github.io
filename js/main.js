new Vue ({
    el: '#app',
    data: {
        message: "Hello",
        styleCSS: '',
        value: 1,
        show: true,
        cars: [
            {model:"BMW", speed:250},
            {model:"Mercedes", speed:270},
            {model:"Audi", speed:260},
            {model:"Ford", speed:230},
        ]
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
        }
    },
    computed:
    {
        doubleValue()
        {
            return this.value*2;
        }
    }
});