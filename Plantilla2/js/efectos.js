new Vue({
    el:".container",
    data:{
        conteo:0,
        categorias:["Categoria 1","Categoria 2","Categoria 3","Categoria 4","Categoria 5","Categoria 6","Categoria 7","Categoria 8","Categoria 9","Categoria 10"]
    },
    computed:{
        mensaje(){
            switch (this.conteo) {
                case this.conteo=0:
                console.log(this.conteo)
                    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum nisl eros, sit amet mattis ipsum fringilla ac."
                    break;
                case this.conteo=1:
                console.log(this.conteo)
                    return "Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat"
                    break;
                case this.conteo=2:
                console.log(this.conteo)
                    return "Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. "
                    break;
                default: 
                   this.conteo=0
                   console.log(this.conteo)
                   return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum nisl eros, sit amet mattis ipsum fringilla ac."
                    break;
            }

            
        }
    }
});