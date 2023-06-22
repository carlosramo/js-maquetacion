function WeatherGet(){
       
    return {
        data: [],
        opened: 0,
        search: '',
        open: false,
        fullData: [],
        gradientType:'°C',

        InitAPI(index){


        // const url = 'https://637649da81a568fc25fae5b4.mockapi.io/weatherapp';
        const url = 'https://637794ad5c4777651221e82a.mockapi.io/API/weather';

        fetch(url)
        .then((response) =>response.json())
        .then(data => {

        console.log(data);
        this.fullData = data;
        this.data = data[index]
        //console.log("Ciudad: "+data.location.name+ " temp en centigrados: "+data.current.temp_c + "  temp en farenheit: "+ data.current.temp_f + "  humidity: "+data.current.humidity + " VEL Wind:  "+data.current.wind_mph + " Visibilidad : "+data.current.vis_miles+ " Air pressure: "+ data.current.pressure_mb);
        })

        },

        selectCountry: function(index){

            if(this.open === true){
                this.open = false;
            }else{
                this.open = true;
            }

            this.data = this.fullData[index];
        },

        get filteredfullData() {

            return this.fullData.filter(

                item => item.city.startsWith(this.search)
            )
        },

        selectGradient: function(type) {
            this.gradientType = type;
        },

        gradientCalc: function(temp) {
            if (this.gradientType == '°C') {
                return temp
            } else if (this.gradientType == '°F') {
                return temp*9/5+32
            }
        },

        weekCalc: function(fecha) {
            var options = {   year: 'numeric', month: 'short', day: 'numeric' };
            let date = new Date(fecha)
            return date.toLocaleDateString("en-US", options)
        },

        weekToday: function(day) {
            var options = {   year: 'numeric', month: 'short', day: 'numeric' };
            let date = new Date(day)
            return date.toLocaleDateString("en-US", options)
        },

        getImage: function(temp) {

            if(temp > 0 && temp<=10) {
                return 'img/clima1.png';
            }else if(temp > 0 && temp<=25) {
                return 'img/clima5.png';
            }else if(temp > 25 && temp<=45) {
                return 'img/clima6.png';
            }else if(temp > 45 && temp<=55) {
                return 'img/clima8.png';
            }else if(temp > 55) {
                return 'img/clima10.png';
            }
        },
    }
}



























       // const url = 'https://637649da81a568fc25fae5b4.mockapi.io/weatherapp';
