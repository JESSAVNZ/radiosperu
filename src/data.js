import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Planeta",
            artist: "Tu música en Inglés",
            cover: "https://i.imgur.com/sydfCHH.png",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://24463.live.streamtheworld.com/CRP_PLA_SC?csegid=30008&dist=30008",
            active: true,
        },
        {
            name:"Ritmo Romantica",
            artist: "Tu radio de baladas",
            cover: "https://i.imgur.com/cHOE4S5.png",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://bit.ly/RRRomantica",
            active: false,
        },
        {
            name:"Rpp Noticias",
            artist: "La voz de todo el Perú",
            cover: "https://i.imgur.com/DSA9eN6.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://us-b5-p-e-kj2-audio.cdn.mdstrm.com/live-audio-aw/5fab3416b5f9ef165cfab6e9?aid=5faaeb72f92d7b07dfe10181&pid=86qVATUBhSJTpgq5dqfiiOomDhBx4ium&sid=VQkTZAPjdf0AYCdMk6L4DbYmOITGJL6l&uid=l6pavsTygoL8ai2t2wgHXjgKvOdwomhY&es=us-b5-p-e-kj2-audio.cdn.mdstrm.com&ote=1663007987961&ot=V3Qke5jQ7QiVdA78QWuzFw&proto=https&pz=us&cP=128000&awCollectionId=5faaeb72f92d7b07dfe10181&liveId=5fab3416b5f9ef165cfab6e9",
            active: false,
        },
    ];
}

export default chillHop;

