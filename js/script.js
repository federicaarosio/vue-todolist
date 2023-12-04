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
        addNewHike() {
            if (this.newHikeElement !== '') {
                const newItem = {
                    text: this.newHikeElement,
                    done: false,
                }
                this.newHikeElement = '';
                this.hikes.push(newItem);
            } else {
                alert("Inserisci una meta!");
                
            }
        },

        removeHikeItem(indexToBeRemoved) {
            this.hikes.splice(indexToBeRemoved, 1);
        },

        doneUndone(index) {
            if (this.hikes[index].done === true) {
                this.hikes[index].done = false;
            } else {
                this.hikes[index].done = true;
            }
        }


    }

}).mount('#app');