// ======================================
// ELEMENT
// ======================================

const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const bgm = document.getElementById("bgm");

// ======================================
// CHAT SYSTEM
// ======================================

function tambahChat(sender, text){

    if(!chatLog) return;

    const p =
    document.createElement("p");

    p.innerHTML =
    `<strong>${sender}:</strong> ${text}`;

    chatLog.appendChild(p);

    // AUTO SCROLL BAWAH
    chatLog.scrollTo({

        top:
        chatLog.scrollHeight,

        behavior:"smooth"

    });

}

// =========================================
// AI VOICE MP3
// =========================================

function ngomong(file) {

    const audio =
    new Audio(
        "voices/" + file
    );

    audio.volume = 1;

    audio.play();

}

// =========================================
// AI COMMAND
// =========================================

async function prosesAI(pesan){

    pesan = pesan.toLowerCase();

    // =====================================
    // HELP
    // =====================================

    if (
        pesan.includes("help") ||
        pesan.includes("menu")
    ) {

        tambahChat(
            "A.I_CORE",
            `
1. halo
2. kenapa kita harus terima kasih sama ibu
3. perasaan paling menyenangkan
4. apa yang wajib di dunia ini 
5. aku ganteng nggak
6. kenapa aku nggak punya cewek
7. kenapa aku jarang posting sesuatu
8. motivasi
9. cara menjaga kesehatan
10. marah
11. al fatihah
12. kenapa sering dibilang mana muka jeleknya
13. pria solo
14. inisial orang paling nonchalant dan fineshyt
15. kenapa aku jarang keluar rumah
16. apa yang terjadi saat aku ngaca di cermin
            `,
            true
        );

        ngomong("help.mp3");

    }

    // =====================================
    // HALO
    // =====================================

else if (
    pesan.includes("halo") ||
    pesan.includes("hai")
) {

    tambahChat(
        "A.I_CORE",
        "Haaii tuan, nyarii akuu yaaaa?.aku disini siap membantu tuan",
        true
    );

    ngomong("halo.mp3");

}
    // =====================================
    // IBU
    // =====================================


else if (
    pesan.includes("ibu")||
    pesan.includes("terimakasih")
) {

    tambahChat(
        "A.I_CORE",
         "terima kasih karena ibu ngelahirin kaamu,kalo tidak negara ini gabakal punya satu-satunya orang yang paling fineshyt dan nonchalant",
        true
    );

    ngomong("ibu.mp3");

}

    // =====================================
    // perasaan
    // =====================================

else if (
    pesan.includes("perasaan")
) {

    tambahChat(
        "A.I_CORE",
         "perasaan yang paling menyenangkan adalah ketika kaamu dijadikan sebagai contoh orang baik,rajin,cool,nonchalant dan fineshyt",
        true
    );

    ngomong("perasaan.mp3");

}

    // =====================================
    // WAJIB
    // =====================================

else if (
    pesan.includes("wajib")||
    pesan.includes("sholat")
) {

    tambahChat(
        "A.I_CORE",
         "yang wajib di dunia ini adalah beribadah,jadi sholat lah sebelum di sholat kan,perbanyak lah berbuat amal baik sebagai bekal kita buat di akhirat kelak nanti",
        true
    );

    ngomong("wajib.mp3");

}

    // =====================================
    // GANTENG
    // =====================================

else if (
    pesan.includes("ganteng")
) {

    tambahChat(
        "A.I_CORE",
        "Kalau ketampanan dijadikan mata uang, kamu udah bikin inflasi perekonomian",
        true
    );

    ngomong("ganteng.mp3");

}
    // =====================================
    // JOMBLO
    // =====================================

else if (

    pesan.includes("cewek")
) {

    tambahChat(
        "A.I_CORE",
        "its because you are too nonchalant so you just ignore fineshyt",
        true
    );

    ngomong("cewek.mp3");

}

    // =====================================
    // SOSMED
    // =====================================

else if (

    pesan.includes("sosmed")||
    pesan.includes("posting")
) {

    tambahChat(
        "A.I_CORE",
        "Karena sekali upload bisa bikin orang satu server overthinking,rawan di stalking karena aura kamu yang terlalu nonchalant",
        true
    );

    ngomong("sosmed.mp3");

}

    // =====================================
    // MOTIVASI
    // =====================================

else if (

    pesan.includes("motivasi")
) {

    tambahChat(
        "A.I_CORE",
        "Bermimpilah setinggi langit dan jangan takut gagal karena setiap hari adalah kesempatan baru bagi kamu untuk menjadi lebih baik.Jadi,jangan ragu untuk mencoba karena yang belum dicoba belum tentu mustahil sebab jika kamu bisa membayangkannya, kamu bisa mewujudkannya.",
        true
    );

    ngomong("motivasi.mp3");

}

    // =====================================
    // KESEHATAN
    // =====================================

else if (

    pesan.includes("kesehatan")
) {

    tambahChat(
        "A.I_CORE",
        "Cara nya yang pertama jaga pola makan kita dengan baik lalu yang kedua jaga pola tidur kita karena tidur dimalam hari itu sangat baik buat tubuh kita dan yang terakhir tidak lupa untuk ber olahraga",
        true
    );

    ngomong("kesehatan.mp3");

}

    // =====================================
    // MARAH
    // =====================================

    else if (
        pesan.includes("marah")
    ) {

        tambahChat(
            "A.I_CORE",
            "HEYYY ANTEEKK ANTEEKK ASIING",
            true
        );

        ngomong(
            "marah.mp3"
        );

    }

    // =====================================
    // AL-FATIHAH
    // =====================================

    else if (
        pesan.includes("al fatihah")
    ) {

        tambahChat(
            "A.I_CORE",
                        `
            "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم۝١"
            "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ ۝٢"
            "الرَّحْمٰنِ الرَّحِيْمِۙ ۝٣"
            "مٰلِكِ يَوْمِ الدِّيْنِۗ ۝٤"
            "اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ ۝٥"
            "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ ۝٦"
            "صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَࣖ ۝٧"
                    `,
            true
        );

        ngomong(
            "al-fatihah.mp3"
        );

    }

    // =====================================
    // MUKA JELEK
    // =====================================

else if (

    pesan.includes("muka")||
    pesan.includes("jelek")
) {

    tambahChat(
        "A.I_CORE",
       "itu bukan karena kamuu jelek tapi karena gantengnya kamuu,makanya.... temannya ibuu sama yang lainnya tidak kuat melihat kegantengan kamuu yang fineshyt abiezz,makanya... sampe haruus nuunjukin muka jelek kamuu supaya mereka tidak pingsan",
        true
    );

    ngomong("mukajelek.mp3");

}

    // =====================================
    // PRIASOLO
    // =====================================

else if (

    pesan.includes("pria solo")
) {

    tambahChat(
        "A.I_CORE",
        "4,5 tahun saya difitnah fitnah saya diam dijelek jelekin saya juga diam dicela direndah rendahkan saya juga diam dihujat dihujat hujat dihina hina saya juga diam tetapi hari ini di jogja saya sampaikan saya akan lawan",
        true
    );

    ngomong("priasolo.wav");

}
    // =====================================
    // INISIAL
    // =====================================

else if (

    pesan.includes("inisial")
) {

    tambahChat(
        "A.I_CORE",
        "K.A.M.U.L.A.H",
        true
    );

    ngomong("inisial.mp3");

}

    // =====================================
    // KELUAR RUMAH
    // =====================================

else if (
    pesan.includes("keluar rumah")
) {

    tambahChat(
        "A.I_CORE",
        "Hadehhh mending jangan keluar rumah dah, karena bisa membuat mobil hilang arah, orang orang ga berhenti mandang kamu yang terlalu fineshyt dan nonchalant sehingga bumi terasa berhenti sejenak ",
        true
    );

    ngomong("keluarrumah.mp3");

}

    // =====================================
    // CERMIN
    // =====================================

else if (
    pesan.includes("cermin")
) {

    tambahChat(
        "A.I_CORE",
        "Wuuuiiihhh kalau cermin punya nyawa pasti dia salting mulu lihat kamu yang fineshyt dan nonchalant setiap hari",
        true
    );

    ngomong("cermin.mp3");

}

    // =====================================
    // UNKNOWN
    // =====================================

    else {

        tambahChat(
            "A.I_CORE",
            "Command belum dipelajari 😭",
            true
        );

        ngomong(
            "Maaf, command itu belum aku pelajari"
        );

    }

}
// ======================================
// SEND MESSAGE
// ======================================

function kirimPesan(){

    if(!userInput) return;

    const pesan =
    userInput.value.trim();

    if(!pesan) return;

    tambahChat(
        "USER",
        pesan
    );

    userInput.value = "";

    prosesAI(pesan);

}

// ======================================
// MIC SYSTEM FIX
// ======================================

let recognition;

function mulaiDengar(){

    const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        alert(
            "Browser tidak support voice recognition 😭"
        );

        return;
    }

    const recognition =
    new SpeechRecognition();

    recognition.lang = "id-ID";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.start();

    recognition.onstart = ()=>{

        console.log("Mic aktif...");
    };

    recognition.onresult = (event)=>{

        const text =
        event.results[0][0].transcript;

        userInput.value = text;

        kirimPesan();
    };

    recognition.onerror = (event)=>{

        console.log(
            "Mic error:",
            event.error
        );

        alert(
            "Mic error: " +
            event.error
        );
    };

}
// ======================================
// MINIMIZE AI
// ======================================

function toggleJarvis(){

    const jarvis =
    document.getElementById(
        "jarvis-chat"
    );

    jarvis.classList.toggle(
        "minimized"
    );

}

// ======================================
// DRAG AI WINDOW
// ======================================

const jarvis =
document.getElementById(
    "jarvis-chat"
);

const header =
jarvis.querySelector(
    ".jarvis-header"
);

let isDragging = false;

let offsetX, offsetY;

header.addEventListener(
    "mousedown",
    (e)=>{

        isDragging = true;

        offsetX =
        e.clientX -
        jarvis.offsetLeft;

        offsetY =
        e.clientY -
        jarvis.offsetTop;

    }
);

document.addEventListener(
    "mousemove",
    (e)=>{

        if(isDragging){

            jarvis.style.left =
            (e.clientX - offsetX)
            + "px";

            jarvis.style.top =
            (e.clientY - offsetY)
            + "px";

        }

    }
);


document.addEventListener(
    "mouseup",
    ()=>{

        isDragging = false;

    }
);

// ======================================
// LIVE2D FINAL STABLE
// ======================================

window.addEventListener(
"load",
async ()=>{

    try{

        const liveCanvas =
        document.getElementById(
            "live2d"
        );

        if(!liveCanvas) return;

        // =========================
        // PIXI APP
        // =========================

        const app =
        new PIXI.Application({

            view: liveCanvas,

            width: 450,

            height: 450,

            transparent: true,

            antialias: true

        });

        // =========================
        // LOAD MODEL
        // =========================

        const model =
        await PIXI.live2d
        .Live2DModel.from(
            "./miku/runtime/miku.model3.json"
        );

        app.stage.addChild(model);

        // =========================
        // MODEL SETTING
        // =========================

        model.scale.set(0.36);

        model.x = 50;

        model.y = 20;

        // =========================
        // INTERACTION
        // =========================

        model.interactive = true;

        model.buttonMode = true;

        model.cursor = "grab";

        model.hitArea =
        new PIXI.Rectangle(
            -1000,
            -1000,
            2000,
            2000
        );

        // =========================
        // DRAG SYSTEM
        // =========================

        let dragging = false;

        let offsetX = 0;

        let offsetY = 0;

        model.on(
            "pointerdown",
            (e)=>{

                dragging = true;

                offsetX =
                e.data.global.x -
                model.x;

                offsetY =
                e.data.global.y -
                model.y;

                model.cursor =
                "grabbing";

            }
        );

        window.addEventListener(
            "pointermove",
            (e)=>{

                if(dragging){

                    model.x =
                    e.clientX -
                    offsetX;

                    model.y =
                    e.clientY -
                    offsetY;

                }

            }
        );

        window.addEventListener(
            "pointerup",
            ()=>{

                dragging = false;

                model.cursor =
                "grab";

            }
        );

        // =========================
        // START CHAT
        // =========================

        tambahChat(
            "A.I_CORE",
            "Neural Link Connected 😎"
        );

    }

    catch(error){

        console.log(
            "LIVE2D ERROR:",
            error
        );

    }

});

// ======================================
// MATRIX RAIN
// ======================================

const matrix =
document.getElementById("matrix");

if(matrix){

    const ctx =
    matrix.getContext("2d");

    matrix.width =
    window.innerWidth;

    matrix.height =
    window.innerHeight;

    const letters =
    "01アァカサタナハマヤャラワガザダバパ";

    const fontSize = 14;

    const columns =
    matrix.width / fontSize;

    const drops = [];

    for(let x=0; x<columns; x++){

        drops[x] = 1;

    }

    function drawMatrix(){

        ctx.fillStyle =
        "rgba(0,0,0,0.05)";

        ctx.fillRect(
            0,
            0,
            matrix.width,
            matrix.height
        );

        ctx.fillStyle = "#00ffff";

        ctx.font =
        fontSize + "px monospace";

        for(let i=0; i<drops.length; i++){

            const text =
            letters.charAt(
                Math.floor(
                    Math.random() *
                    letters.length
                )
            );

            ctx.fillText(
                text,
                i * fontSize,
                drops[i] * fontSize
            );

            if(
                drops[i] *
                fontSize >
                matrix.height &&
                Math.random() > 0.975
            ){

                drops[i] = 0;

            }

            drops[i]++;

        }

    }

    setInterval(drawMatrix,70);

}

// ======================================
// SOUND SYSTEM
// ======================================

const hoverSound =
document.getElementById("hover-sound");

const clickSound =
document.getElementById("click-sound");

// ELEMENT YANG ADA SOUND
const soundElements =
document.querySelectorAll(
`
button,
a,
.member-card,
.gallery-item,
.event-item,
input,
select
`
);

// HOVER
soundElements.forEach((el)=>{

    el.addEventListener("mouseenter", ()=>{

        const sfx =
        hoverSound.cloneNode();

        sfx.volume = 0.15;

        sfx.play();

    });

});

// CLICK
soundElements.forEach((el)=>{

    el.addEventListener("click", ()=>{

        const sfx =
        clickSound.cloneNode();

        sfx.volume = 0.25;

        sfx.play();

    });

});

// ======================================
// WORD GAME SYSTEM
// ======================================

const words = {

    tech: [
        "javascript",
        "python",
        "internet",
        "database",
        "monitor"
    ],

    gaming: [
        "minecraft",
        "valorant",
        "roblox",
        "freefire",
        "genshin"
    ],

    anime: [
        "naruto",
        "luffy",
        "gojo",
        "itachi",
        "eren"
    ],

    random: [
        "kucing",
        "mobil",
        "sekolah",
        "bantal",
        "keluarga"
    ]

};

let kategoriSekarang = "tech";

let currentWord = "";

let scrambledWord = "";

let skor = 0;

let streak = 0;

let waktu = 30;

let timer;

// ======================================
// ACAK KATA
// ======================================

function acakKata(kata){

    return kata
    .split("")
    .sort(()=>Math.random()-0.5)
    .join("");

}

// ======================================
// GANTI KATEGORI
// ======================================

function gantiKategori(){

    kategoriSekarang =
    document.getElementById(
        "kategori"
    ).value;

    nextWord();

}

// ======================================
// WORD BARU
// ======================================

function nextWord(){

    clearInterval(timer);

    const list =
    words[kategoriSekarang];

    currentWord =
    list[
        Math.floor(
            Math.random()*list.length
        )
    ];

    scrambledWord =
    acakKata(currentWord);

    document.getElementById(
        "scramble-word"
    ).innerText =
    scrambledWord;

    document.getElementById(
        "jawabanGame"
    ).value = "";

    document.getElementById(
        "hasil-game"
    ).innerText = "";

    waktu = 30;

    document.getElementById(
        "waktu"
    ).innerText = waktu;

    timer = setInterval(()=>{

        waktu--;

        document.getElementById(
            "waktu"
        ).innerText = waktu;

        if(waktu <= 0){

            clearInterval(timer);

            document.getElementById(
                "hasil-game"
            ).innerText =
            "⏰ Waktu habis! Jawaban: " +
            currentWord;

            streak = 0;

            updateUI();

        }

    },1000);

}

// ======================================
// CEK JAWABAN
// ======================================

function cekJawabanGame(){

    const jawaban =
    document.getElementById(
        "jawabanGame"
    ).value.toLowerCase();

    if(jawaban === currentWord){

        skor += 10;

        streak++;

        document.getElementById(
            "hasil-game"
        ).innerText =
        "✅ BENAR 😎";

    }

    else{

        streak = 0;

        document.getElementById(
            "hasil-game"
        ).innerText =
        "❌ SALAH 😭";

    }

    updateUI();

    nextWord();

}

// ======================================
// HINT
// ======================================

function bantuan(){

    skor -= 5;

    if(skor < 0){

        skor = 0;

    }

    document.getElementById(
        "hasil-game"
    ).innerText =
    "💡 Huruf awal: " +
    currentWord.charAt(0);

    updateUI();

}

// ======================================
// UPDATE UI
// ======================================

function updateUI(){

    document.getElementById(
        "skor"
    ).innerText = skor;

    document.getElementById(
        "streak"
    ).innerText = streak;

}

// ======================================
// START GAME
// ======================================

nextWord();

// =========================================
// MUSIC SYSTEM
// =========================================
const playlist = [

    "music/herotonight.mp3",
    "music/mortals.mp3",
    "music/onandon.mp3",
    "music/skyhigh.mp3",
    "music/confident.mp3",
    "music/despacito.mp3",
    "music/whatitis.mp3",
    "music/makeitmorning.mp3",
    "music/collide.mp3"
];

const songNames = [

    "HEROTONIGHT",
    "MORTALS",
    "ONANDON",
    "SKYHIGH",
    "CONFIDENT",
    "DESPACITO",
    "WHATITIS",
    "MAKEITMORNING",
    "COLLIDE"

];

let currentTrack = 0;

if (bgm) {

    bgm.src = playlist[currentTrack];
    bgm.volume = 0.5;

    bgm.addEventListener(
        "ended",
        nextMusic
    );

}

function toggleMusic() {

    if (!bgm) return;

    if (bgm.paused) {

        bgm.play();

    } else {

        bgm.pause();

    }

}

function nextMusic() {

    if (!bgm) return;

    currentTrack++;

    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }

    bgm.src = playlist[currentTrack];
    bgm.play();

    updateMusicName();
}

function setVolume(value) {

    if (!bgm) return;

    bgm.volume = value / 100;
}

function updateMusicName() {

    const musicName =
    document.getElementById("music-name");

    if (musicName) {

        musicName.innerText =
        "NOW PLAYING: " +
        songNames[currentTrack];

    }

}

// ======================================
// CUSTOM CURSOR
// ======================================

const cursor =
document.querySelector(
    ".cursor"
);

const follower =
document.querySelector(
    ".cursor-follower"
);

document.addEventListener(
    "mousemove",
    (e)=>{

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

        follower.style.left =
        e.clientX + "px";

        follower.style.top =
        e.clientY + "px";

    }
);

// ======================================
// BOOT SCREEN
// ======================================

const bootMessages = [

    "INITIALIZING SYSTEM...",
    "CONNECTING DATABASE...",
    "LOADING AI_CORE...",
    "ACCESS GRANTED",
    "WELCOME USER"

];

const bootText =
document.getElementById(
    "boot-text"
);

let index = 0;

// ======================================
// PLAY SOUND
// ======================================

function playSound(file){

    const audio =
    new Audio(
        "sound/" + file
    );

    audio.volume = 0.5;

    audio.play();

}

// ======================================
// TYPE EFFECT
// ======================================

function typeBoot(){

    if(index < bootMessages.length){

        playSound(
            "type.mp3"
        );

        const p =
        document.createElement("p");

        p.innerText =
        "> " +
        bootMessages[index];

        bootText.appendChild(p);

        index++;

        setTimeout(
            typeBoot,
            700
        );

    }

}

// ======================================
// START BOOT
// ======================================

playSound(
    "boot.mp3"
);

typeBoot();

// ======================================
// HIDE BOOT
// ======================================

setTimeout(()=>{

    const boot =

    document.getElementById(
        "boot-screen"
    );

    boot.style.opacity =
    "0";

    setTimeout(()=>{

        boot.style.display =
        "none";

        /* MUNCULKAN LOGIN */

        document
        .getElementById(
            "lock-screen"
        )
        .style.display =

        "flex";

    },1000);

},5000);

// =========================================
// AUTO START AI
// =========================================

window.addEventListener(
    "load",
    ()=>{

        setTimeout(()=>{

            tambahChat(
                "A.I_CORE",
                "Seelaamaat daatang tuuaan~,Semua sistem sudah aktif.",
                true
            );

            ngomong("welcome.wav");

        },4500);

    }
);

// =========================
// CYBER SLIDER EFFECT
// =========================

const cyberCards =
document.querySelectorAll(
".member-card, .gallery-item"
);

let currentCard = 0;

function showCyberCard(index){

    cyberCards.forEach(card=>{

        card.classList.remove(
            "active"
        );

    });

    cyberCards[index]
    .classList.add("active");

}

showCyberCard(currentCard);

setInterval(()=>{

    currentCard++;

    if(
        currentCard >=
        cyberCards.length
    ){

        currentCard = 0;

    }

    showCyberCard(currentCard);

},3000);


// =========================
// FLOATING AI MOBILE SAFE
// =========================

window.addEventListener(
    "load",
    ()=>{

        const jarvis =
        document.querySelector(
            ".jarvis-container"
        );

        if(!jarvis) return;

        jarvis.addEventListener(
            "click",
            ()=>{

                if(
                    window.innerWidth <= 768
                ){

                    jarvis.classList.toggle(
                        "open"
                    );

                }

            }
        );

    }
);


// =========================
// MINI AI MOBILE
// =========================


const jarvisChat =
document.getElementById(
    "jarvis-chat"
);

const jarvisBubble =
document.getElementById(
    "jarvis-bubble"
);

// AWAL
jarvisChat.classList.add(
    "hide-jarvis"
);

jarvisBubble.classList.add(
    "show-bubble"
);

// BUKA AI
jarvisBubble.onclick = ()=>{

    jarvisChat.classList.remove(
        "hide-jarvis"
    );

    jarvisBubble.classList.remove(
        "show-bubble"
    );

};

// TUTUP AI
function toggleBubble(){

    jarvisChat.classList.add(
        "hide-jarvis"
    );

    jarvisBubble.classList.add(
        "show-bubble"
    );

}

// =========================
// MEMBER ACTIVE EFFECT
// =========================

const memberCards =
document.querySelectorAll(
    ".member-card"
);

function updateMembers(){

    memberCards.forEach((card)=>{

        const rect =
        card.getBoundingClientRect();

        const center =
        window.innerWidth / 2;

        if(
            rect.left < center &&
            rect.right > center
        ){

            card.classList.add(
                "active"
            );

        }else{

            card.classList.remove(
                "active"
            );

        }

    });

}

document.querySelector(
    ".family-grid"
).addEventListener(
    "scroll",
    updateMembers
);

updateMembers();

// =========================
// GALLERY ACTIVE EFFECT
// =========================

const items =
document.querySelectorAll(
    ".gallery-item"
);

function updateGallery(){

    items.forEach((item)=>{

        const rect =
        item.getBoundingClientRect();

        const center =
        window.innerWidth / 2;

        if(
            rect.left < center &&
            rect.right > center
        ){

            item.classList.add(
                "active"
            );

        }else{

            item.classList.remove(
                "active"
            );

        }

    });

}

document.querySelector(
    ".gallery"
).addEventListener(
    "scroll",
    updateGallery
);

updateGallery();


// ======================================
// CYBERPUNK PARALLAX
// ======================================

const grid =
document.querySelector(
    ".grid-bg"
);

document.addEventListener(
    "mousemove",
    (e)=>{

        const x =
        (window.innerWidth / 2 - e.clientX)
        / 40;

        const y =
        (window.innerHeight / 2 - e.clientY)
        / 40;

        grid.style.transform =
        `translate(${x}px, ${y}px)`;

    }
);

// ======================================
// RANDOM GLITCH TITLE
// ======================================

const title =
document.querySelector(
    "h1"
);

setInterval(()=>{

    title.classList.add(
        "glitching"
    );

    setTimeout(()=>{

        title.classList.remove(
            "glitching"
        );

    },150);

},4000);

// ======================================
// 3D CARD HOVER
// ======================================

const hoverCards =
document.querySelectorAll(

    ".member-card, .gallery-item"

);

hoverCards.forEach((card)=>{

    card.addEventListener(

        "mousemove",

        (e)=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const centerX =
            rect.width / 2;

            const centerY =
            rect.height / 2;

            const rotateX =
            ((y - centerY) / 20);

            const rotateY =
            ((centerX - x) / 20);

            card.style.transform =

            `perspective(1000px)

            rotateX(${rotateX}deg)

            rotateY(${rotateY}deg)

            scale(1.04)`;

        }

    );

    card.addEventListener(

        "mouseleave",

        ()=>{

            card.style.transform =

            `perspective(1000px)

            rotateX(0)

            rotateY(0)

            scale(1)`;

        }

    );

});

// ======================================
// RIPPLE CLICK EFFECT
// ======================================

document.querySelectorAll(

    "button, .member-card, .gallery-item"

).forEach((item)=>{

    item.style.position =
    "relative";

    item.style.overflow =
    "hidden";

    item.addEventListener(

        "click",

        function(e){

            const ripple =
            document.createElement(
                "span"
            );

            ripple.classList.add(
                "ripple"
            );

            const rect =
            this.getBoundingClientRect();

            const size =
            Math.max(
                rect.width,
                rect.height
            );

            ripple.style.width =
            size + "px";

            ripple.style.height =
            size + "px";

            ripple.style.left =

            e.clientX -
            rect.left -
            size/2 + "px";

            ripple.style.top =

            e.clientY -
            rect.top -
            size/2 + "px";

            this.appendChild(
                ripple
            );

            setTimeout(()=>{

                ripple.remove();

            },600);

        }

    );

});

// ======================================
// HUD CLOCK
// ======================================

const hudClock =

document.getElementById(

    "hud-clock"

);

function updateClock(){

    const now = new Date();

    const time =

    now.toLocaleTimeString(
        "id-ID"
    );

    hudClock.innerHTML =

    "🕒 " + time;

}

setInterval(updateClock,1000);

updateClock();


const fill =
document.getElementById(
    "loading-fill"
);

const text =
document.getElementById(
    "boot-text"
);

const boot =
document.getElementById(
    "boot-screen"
);

let load = 0;

const bootLoop =
setInterval(()=>{

    load += 5;

    fill.style.width =
    load + "%";

    if(load >= 100){

        text.innerHTML =
        "ACCESS GRANTED";

        clearInterval(
            bootLoop
        );

        setTimeout(()=>{

            boot.style.opacity =
            "0";

            setTimeout(()=>{

                boot.style.display =
                "none";

            },1000);

        },1200);

    }

},120);


setInterval(()=>{

    document.body.classList.add(
        "glitch-effect"
    );

    setTimeout(()=>{

        document.body.classList.remove(
            "glitch-effect"
        );

    },150);

},12000);

setInterval(()=>{

    const neonElements =
    document.querySelectorAll(

        "h1,h2,.logo,.member-name"

    );

    neonElements.forEach((el)=>{

        el.classList.add(
            "flicker"
        );

        setTimeout(()=>{

            el.classList.remove(
                "flicker"
            );

        },200);

    });

},8000);

const statusText = [

    "SYSTEM ONLINE",

    "AI STABLE",

    "PING: 12ms",

    "MEMORY OK",

    "MATRIX ACTIVE",

    "NEURAL LINK READY"

];

const statusEl =
document.getElementById(
    "system-status"
);

setInterval(()=>{

    statusEl.innerHTML =

    statusText[
        Math.floor(
            Math.random() *
            statusText.length
        )
    ];

},3000);

const typingTexts = [

    "SYSTEM ONLINE...",
    "AI LINK CONNECTED...",
    "LOADING NEURAL CORE...",
    "ACCESS COMPLETE...",
    "MATRIX ACTIVE..."

];

const typingConsole =
document.getElementById(
    "typing-console"
);

let textIndex = 0;

function typeConsoleText(){

    let char = 0;

    typingConsole.innerHTML = "";

    const currentText =
    typingTexts[textIndex];

    const typing =
    setInterval(()=>{

        typingConsole.innerHTML +=
        currentText.charAt(char);

        char++;

        if(
            char >=
            currentText.length
        ){

            clearInterval(
                typing
            );

            setTimeout(()=>{

                textIndex++;

                if(
                    textIndex >=
                    typingTexts.length
                ){

                    textIndex = 0;

                }

                typeConsoleText();

            },2000);

        }

    },50);

}

typeConsoleText();

const ambientMessages = [

    "Network stable ⚡",

    "AI synchronization complete 🎵",

    "Scanning environment...",

    "All systems operational 🗿",

    "Cyber defense active 🔥",

    "Neural core stable 😎"

];

setInterval(()=>{

    const randomMsg =

    ambientMessages[
        Math.floor(
            Math.random() *
            ambientMessages.length
        )
    ];

    tambahChat(
        "A.I_CORE",
        randomMsg
    );

},25000);

const cards =

document.querySelectorAll(
    ".member-card"
);

cards.forEach((card)=>{

    card.addEventListener(
        "click",
        ()=>{

            card.classList.remove(
                "fade-card"
            );

            void card.offsetWidth;

            card.classList.add(
                "fade-card"
            );

        }
    );

});

const galleryItems =

document.querySelectorAll(
    ".gallery-item"
);

galleryItems.forEach((item)=>{

    item.addEventListener(
        "click",
        ()=>{

            item.classList.remove(
                "fade-card"
            );

            void item.offsetWidth;

            item.classList.add(
                "fade-card"
            );

        }
    );

});

// =========================
// CYBER DRAGON EFFECT
// =========================

const dragon =
document.querySelector(
    ".cyber-dragon"
);

document.addEventListener(
    "mousemove",
    (e)=>{

        const x =
        (window.innerWidth / 2 - e.clientX)
        / 40;

        const y =
        (window.innerHeight / 2 - e.clientY)
        / 40;

        dragon.style.transform =
        `
        translate(${x}px, ${y}px)
        scale(1)
        `;
    }
);

// RANDOM GLOW

setInterval(()=>{

    dragon.style.filter =
    `
    drop-shadow(0 0 ${
        10 + Math.random()*20
    }px cyan)

    drop-shadow(0 0 ${
        30 + Math.random()*30
    }px #00ffff)
    `;

},300);

document.addEventListener(
    "mousemove",
    (e)=>{

        const trail =
        document.createElement(
            "div"
        );

        trail.className =
        "cursor-trail";

        trail.style.left =
        e.clientX + "px";

        trail.style.top =
        e.clientY + "px";

        document.body.appendChild(
            trail
        );

        setTimeout(()=>{

            trail.remove();

        },600);

    }
);

// =========================
// DEVICE DETECTION
// =========================

const isMobile =

/Android|iPhone|iPad|iPod/i
.test(
    navigator.userAgent
);

if(isMobile){

    tambahChat(

        "A.I_CORE",

        "Mobile interface loaded 📱"

    );

    ngomong(
        "Mobile interface loaded"
    );

}else{

    tambahChat(

        "A.I_CORE",

        "Desktop system initialized 🖥️"

    );

    ngomong(
        "Desktop system initialized"
    );

}

// ================= SYSTEM LOGIN =================

window.unlockSystem = function(){

    const password =

    document.getElementById(
        "systemPassword"
    ).value;

    /* PASSWORD */

    if(password === "family123"){

        document
        .getElementById(
            "lock-screen"
        )
        .style.display =

        "none";

    }

    else{

        alert(
            "Password Salah"
        );

    }

};
