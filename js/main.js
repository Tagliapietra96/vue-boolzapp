const { createApp } = Vue;
createApp({
    // ************ VARIABILI ************
    data() {
        return {
            //STRINGHE
            search: '',
            typing: '',
            //NUMERI
            selectedUser: -1,
            //BOOLEANI

            //ARRAY
            usersList: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            ],
            //OGGETTI

        }
    },
    // ************ FUNZIONI ************
    methods: {
        takeTime(string){
            let elements = string.split(' ');
            let hoursAndMinutes = elements[1].split(':');
            let toReturn = [];
            toReturn.push(hoursAndMinutes[0], hoursAndMinutes[1]);
            return toReturn.join(':')
        },
        randomNum(min, max) {
            if (min === undefined && max === undefined) {
                min = 0;
                max = 1;
            };
            if (min < max){
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }else{
                return Math.floor(Math.random() * (min - max + 1)) + max;
            };
        },
        dateGenerator(){
            let now = new Date();
            return date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth()).padStart(2, '0')}/${String(now.getFullYear()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
        },
        capitalize(string){
            let lowString = string.toLowerCase();
            let end = lowString.charAt(0).toUpperCase() + lowString.slice(1);
            return end;
        },
        dinamicSearch(){
            this.usersList.forEach(element => {
                if(element.name.toLowerCase().includes(this.search.toLowerCase()) || this.search === ''){
                    element.visible = true;
                }else {
                    element.visible = false;
                };
            });
            
        },
        searchUser(){
            let match = [];
            this.usersList.forEach(element => {
                if(element.name.toLowerCase() === this.search.toLowerCase() || this.search === ''){
                    element.visible = true;
                    match.push(element);
                }else {
                    element.visible = false;
                };
            });
            
            if (match.length === 0){
                this.usersList.push({
                    name: this.capitalize(this.search),
                    avatar: `_${this.randomNum(1, 4)}`,
                    visible: true,
                    messages:[
                        {
                            date: `${this.dateGenerator()}`,
                            message: 'Ciao, mi fischiano le orecchie, mi stavi pensando?',
                            status: 'received'
                        }
                    ]
                })
            };

            this.search = '';
        },
        sendMessage(){
            if(this.typing !== ''){
                this.usersList[this.selectedUser].messages.push({
                    date: `${this.dateGenerator()}`,
                    message: this.typing,
                    status: 'sent'
                });
                this.typing = '';
            } else{
                return
            }
        },
    },
    mounted() {
        
    }
}).mount('#my-app');
