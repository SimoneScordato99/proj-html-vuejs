import { reactive } from "vue";

export const store = reactive(
    {
       prenotazione: false,
       nomeUser:'',
       cognomeUser:'',
       emailUser:'',
       numeroUser:'',
       dataUser:'',
        arrayPrenotazioni:[

        ]
    }
)

