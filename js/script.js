const { createApp } = Vue;

createApp({
    data() {
        return {
            newHikeElement: '',
            hikes: [
                {
                    text: 'Rifugio Brioschi',
                    done: false,
                },
                {
                    text: 'Rifugio Rosalba',
                    done: true,
                },
                {
                    text: 'Lago del Barbellino',
                    done: true,
                },
                {
                    text: 'Vetta Arera',
                    done: false,
                },
                {
                    text: 'Rifugio Segantini',
                    done: true,
                },
                {
                    text: 'Rifugio Dodici Apostoli',
                    done: false,
                },
                {
                    text: 'Rifugio Elisabetta',
                    done: true,
                },
            ],
        }
    },

    methods: {
        addNewHike(newElement){
            newElement = newElement.trim();
            console.log(newElement);

            if (newElement.length > 3 && !this.hikes.includes(newElement)){
                this.newHikeElement = '';
                this.hikes.push(newElement);
            }
            else
                console.alert('Inserisci una meta reale');
        },

        stringBeautifier(rawString){
            rawString = rawString.trim().toLowerCase();
            return rawString.charAt(0).toUpperCase() + rawString.slice(1);
        },


        removeHikeItem(indexToBeRemoved) {
            this.hikes.splice(indexToBeRemoved, 1);
        },


    }

}).mount('#app');