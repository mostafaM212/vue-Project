

new Vue({
    el : '#app',


    data : {

        state : true ,

        inputName : '',
        
        names: [],

        showErrors : false,

        lenght : 0 ,

        result : ''
    },

    methods: {
        addNameToList(){
            if(this.validate(this.inputName)){
                //this.names.push(this.inputName) ;

                this.showErrors = true ;
                console.log(this.showErrors)

            }else{
                

                this.names.push(this.inputName) ;
                console.log(this.names.length)
                this.inputName = '' ;
                this.showErrors =false ;
                this.lenght = this.names.length ;
            }
        },

        validate(value){
            
            return value === '' ? true : false ;
        },

        showResult(){
            this.state =false ;

            let rand = this.names[Math.floor(Math.random() * this.names.length)]; ;
            console.log(rand)
            this.result = rand ;
        },

        resetApp(){
            this.state =true ;

            this.names = [] ;

            this.result = '' ;
        },

        removeName(value){
            this.names.splice(value , 1) ;

            this.lenght = this.names.length
        }
    }
})