function CountryGet(){
       
      return {
        opened: 0,
        paisesaletorios: [],
        country: [],
        capital: [],
        flags: [],
        respuestacorrecta:'',
        puntaje: 0,
        bandera1: '',
        bandera2: '',
        bandera3: '',
        bandera4: '',
        banderar1: '',
        banderar2: '',
        banderar3: '',
        banderar4: '',

        InitAPI(index){

        if(index == 1){
            const url = 'https://restcountries.com/v3.1/all';

        fetch(url)
          .then(response => {
              return response.json();
          })
          .then(data => {

          console.log(data);


          for(var i=0; i<=3; i++){

            paisesaletorios = data[Math.floor(Math.random() * data.length)];
            this.paisesaletorios = data[paisesaletorios];
            this.country[i] = paisesaletorios.name.common;

            while(this.country[i] === undefined){
              paisesaletorios = data[Math.floor(Math.random() * data.length)];
              this.paisesaletorios = data[paisesaletorios];
              this.country[i] = paisesaletorios.name.common;
            }
            this.respuestacorrecta = this.country[3];
            console.log(this.respuestacorrecta);

            for(let i = this.country.length-1; i>0; i--){
              const x = Math.floor(Math.random() * (i+1))
              const temporal = this.country[i];
              this.country[i] = this.country[x];
              this.country[x] = temporal;
            }
            this.capital = paisesaletorios.capital;
            this.flags = paisesaletorios.flags.png;
            console.log(this.flags);
            }
          })
          }
          else if(index == 2){

            const url = 'https://restcountries.com/v3.1/all';

            fetch(url)
              .then(response => {
                  return response.json();
              })
              .then(data => {
    
              console.log(data);
    
    
              for(var i=0; i<=3; i++){
    
                paisesaletorios = data[Math.floor(Math.random() * data.length)];
                this.paisesaletorios = data[paisesaletorios];
                this.country[i] = paisesaletorios.name.common;
    
                while(this.country[i] === undefined){
                  paisesaletorios = data[Math.floor(Math.random() * data.length)];
                  this.paisesaletorios = data[paisesaletorios];
                  this.country[i] = paisesaletorios.name.common;
                }
                this.respuestacorrecta = this.country[3];
                console.log(this.respuestacorrecta);
    
                for(let i = this.country.length-1; i>0; i--){
                  const x = Math.floor(Math.random() * (i+1))
                  const temporal = this.country[i];
                  this.country[i] = this.country[x];
                  this.country[x] = temporal;
                }
                this.capital = paisesaletorios.capital;
                this.flags = paisesaletorios.flags.png;
                console.log(this.flags);
                }
              })

          }

        
          },

          opcion1(){

            if(this.respuestacorrecta === this.country[0]){
              console.log("La respuesta es correcta")
              this.puntaje = this.puntaje+1;
              console.log(this.puntaje);
              this.bandera1 = true;
            }else {
              console.log("La respuesta NO es correcta")
              this.bandera1 = false;
              this.banderar1 = true;
            
            if(this.respuestacorrecta === this.country[1] || this.respuestacorrecta === this.country[2] || this.respuestacorrecta === this.country[3]){
              if(this.respuestacorrecta === this.country[1]){
                this.bandera2 = true;
              }else if(this.respuestacorrecta === this.country[2]){
                this.bandera3 = true;
              }
              else {
                this.bandera4 = true;
              }
            }
            }
            this.opened = this.opened+1;
            return this.bandera1;
            
          },

          opcion2(){

            if(this.respuestacorrecta === this.country[1]){
              this.bandera2 = true;
              this.puntaje = this.puntaje+1;
              console.log(this.puntaje);
            }else {
              this.bandera2 = false;
              this.banderar2 = true;
              if(this.respuestacorrecta === this.country[0] || this.respuestacorrecta === this.country[2] || this.respuestacorrecta === this.country[3]){
                if(this.respuestacorrecta === this.country[0]){
                  this.bandera1 = true;
                }else if(this.respuestacorrecta === this.country[2]){
                  this.bandera3 = true;
                }
                else {
                  this.bandera4 = true;
                }
              }
            }
            this.opened = this.opened+1;
            return this.bandera2;
            
          },

          opcion3(){

            if(this.respuestacorrecta === this.country[2]){
              this.puntaje = this.puntaje+1;
              console.log(this.puntaje);
              this.bandera3 = true;
            }else {
              this.banderar3 = true;
              this.bandera3 = false;

              if(this.respuestacorrecta === this.country[0] || this.respuestacorrecta === this.country[1] || this.respuestacorrecta === this.country[3]){
                if(this.respuestacorrecta === this.country[0]){
                  this.bandera1 = true;
                }else if(this.respuestacorrecta === this.country[1]){
                  this.bandera2 = true;
                }
                else {
                  this.bandera4 = true;
                }
              }
            }
            this.opened = this.opened+1;
            return this.bandera3;
            
          },

          opcion4(){


            if(this.respuestacorrecta === this.country[3]){
              this.puntaje = this.puntaje+1;
              console.log(this.puntaje);
              this.bandera4 = true;
            }else {
              this.bandera4 = false;
              this.banderar4 = true;   
              
              if(this.respuestacorrecta === this.country[0] || this.respuestacorrecta === this.country[1] || this.respuestacorrecta === this.country[2]){
                if(this.respuestacorrecta === this.country[0]){
                  this.bandera1 = true;
                }else if(this.respuestacorrecta === this.country[1]){
                  this.bandera2 = true;
                }
                else {
                  this.bandera3 = true;
                }
              }
            }   
            
            this.opened = this.opened+1;
            console.log(this.opened);
            
          },

          boton_next(){
            this.InitAPI(2);
            this.opened = this.opened+1;
            this.bandera1 = '',
            this.bandera2 = '',
            this.bandera3 = '',
            this.bandera4 = '',
            this.banderar1 = '',
            this.banderar2 = '',
            this.banderar3 = '',
            this.banderar4 = ''

          }, 

          reiniciar(){
            this.puntaje = 0;
            this.opened = 0;
          },
          
      }
}

