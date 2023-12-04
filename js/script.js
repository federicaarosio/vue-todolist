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
            const newItem = {
                text: this.newHikeElement,
                done: false,
            }
            this.hikes.push(newItem);
        },

        removeHikeItem(indexToBeRemoved) {
            this.hikes.splice(indexToBeRemoved, 1);
        },


    }

}).mount('#app');