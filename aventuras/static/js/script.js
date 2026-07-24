const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const chapterButton = document.getElementById("chapterButton");

const book = document.getElementById("book");
const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const chapter1 = document.getElementById("chapter1");

const conversationScene = document.getElementById("conversationScene");
const discordBody = document.getElementById("discordBody");
const messagesContainer = document.getElementById("messages");
const typing = document.getElementById("typing");

const nextMessageButton = document.getElementById("nextMessageButton");
const finishConversationButton = document.getElementById(
    "finishConversationButton"
);

const travelScene = document.getElementById("travelScene");
const travelTransport = document.getElementById("travelTransport");
const transportIcon = document.getElementById("transportIcon");
const routeProgress = document.getElementById("routeProgress");
const travelStatus = document.getElementById("travelStatus");
const travelStatusIcon = document.getElementById("travelStatusIcon");
const arrivalButton = document.getElementById("arrivalButton");

const waitingScene = document.getElementById("waitingScene");
const waitingSky = document.getElementById("waitingSky");
const waitHour = document.getElementById("waitHour");
const waitSun = document.getElementById("waitSun");
const waitMoon = document.getElementById("waitMoon");
const waitingText = document.getElementById("waitingText");
const startWaitingButton = document.getElementById("startWaitingButton");
const flowersButton = document.getElementById("flowersButton");
const askQuestionButton = document.getElementById("askQuestionButton");
const sleepingFrog = document.getElementById("sleepingFrog");
const frogZzz = document.getElementById("frogZzz");
const houseWindow = document.getElementById("houseWindow");
const lampLight = document.getElementById("lampLight");
const pandaWaitZzz = document.getElementById("pandaWaitZzz");
const pandaBouquet = document.getElementById("pandaBouquet");
const pandaWaiting = document.getElementById("pandaWaiting");

const proposalScene = document.getElementById("proposalScene");
const proposalActions = document.getElementById("proposalActions");
const proposalNote = document.getElementById("proposalNote");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const timelineScene = document.getElementById("timelineScene");
const toFinalSceneButton = document.getElementById("toFinalSceneButton");
const revealItems = document.querySelectorAll(".revealItem");

const loveScene = document.getElementById("loveScene");
const heartConfettiContainer = document.getElementById(
    "heartConfettiContainer"
);

const frases = [
    "Hay historias que simplemente ocurren...",
    "Y otras...",
    "...que deciden volver a empezar."
];

const mensajes = [
    {
        personaje: "panda",
        nombre: "Panda",
        avatar: "🐼",
        hora: "Hoy, 00:01",
        texto: "Feliz cumpleaños :)"
    },
    {
        personaje: "frog",
        nombre: "Little Frog",
        avatar: "🐸",
        hora: "Hoy, 00:02",
        texto: "¿Quién eres?"
    },
    {
        personaje: "panda",
        nombre: "Panda",
        avatar: "🐼",
        hora: "Hoy, 00:02",
        texto: "Soy yo jajaja, el bobo."
    },
    {
        personaje: "frog",
        nombre: "Little Frog",
        avatar: "🐸",
        hora: "Hoy, 00:03",
        texto: "Ahhh vale JAJAJA."
    },
    {
        personaje: "panda",
        nombre: "Panda",
        avatar: "🐼",
        hora: "Hoy, 00:03",
        texto: "Sí, el mismo pesado de siempre."
    },
    {
        personaje: "frog",
        nombre: "Little Frog",
        avatar: "🐸",
        hora: "Hoy, 00:04",
        texto: "Bueno, te perdono porque hoy estoy de cumpleaños."
    },
    {
        personaje: "panda",
        nombre: "Panda",
        avatar: "🐼",
        hora: "Hoy, 00:04",
        texto: "Entonces me tocará compensártelo en persona."
    }
];

const textosEspera = {
    5: "05:00. El panda llegó demasiado pronto. Muchísimo demasiado pronto.",
    6: "06:00. Seguía siendo de noche, pero él seguía allí.",
    7: "07:00. Un pequeño bostezo y otra hora menos.",
    8: "08:00. La ciudad empezaba a despertarse. La ranita todavía no.",
    9: "09:00. El panda empezó a conocer personalmente cada baldosa de la calle.",
    10: "10:00. Seguía esperando. Porque marcharse nunca fue una opción.",
    11: "11:00. Ya casi... aunque el panda llevaba diciendo eso varias horas.",
    12: "12:00. Por fin se abrió la ventana. La ranita había despertado."
};

const fondosEspera = {
    5: "linear-gradient(180deg, #20264a 0%, #725d86 58%, #f2a07b 100%)",
    6: "linear-gradient(180deg, #3f527c 0%, #a97a9d 56%, #ffc38d 100%)",
    7: "linear-gradient(180deg, #7797bd 0%, #dfadbd 56%, #ffd49f 100%)",
    8: "linear-gradient(180deg, #91c8e9 0%, #c9e7f4 58%, #ffe2ab 100%)",
    9: "linear-gradient(180deg, #83cdef 0%, #cceefe 58%, #fff0c7 100%)",
    10: "linear-gradient(180deg, #74c7ee 0%, #c8edff 58%, #fff4d4 100%)",
    11: "linear-gradient(180deg, #68c1eb 0%, #c4ebff 58%, #fff6dc 100%)",
    12: "linear-gradient(180deg, #5bbbea 0%, #bce8ff 58%, #fff8e4 100%)"
};

const mensajesNo = [
    "¿Segura? Mira bien el otro botón...",
    "El botón de Sí tiene mejor pinta.",
    "No seas boba 😭",
    "He cogido un avión y un bus, piénsatelo.",
    "Ese No cada vez tiene menos argumentos.",
    "Vale, el botón No se está quedando sin batería."
];

let indiceFrase = 0;
let indiceMensaje = 0;
let historiaIniciada = false;
let escribiendoMensaje = false;
let viajeIniciado = false;
let esperaIniciada = false;
let horaActual = 5;
let vecesNo = 0;
let observerTimeline = null;

startButton.addEventListener("click", function () {
    if (historiaIniciada) {
        return;
    }

    historiaIniciada = true;

    book.classList.add("open");

    setTimeout(function () {
        intro.classList.add("active");
        escribirHistoria();
    }, 900);
});

function escribirHistoria() {
    if (indiceFrase >= frases.length) {
        continueButton.style.display = "block";
        return;
    }

    introText.textContent = "";

    const texto = frases[indiceFrase];
    let indiceLetra = 0;

    const intervalo = setInterval(function () {
        introText.textContent += texto.charAt(indiceLetra);
        indiceLetra++;

        if (indiceLetra >= texto.length) {
            clearInterval(intervalo);
            indiceFrase++;

            setTimeout(function () {
                escribirHistoria();
            }, 1800);
        }
    }, 45);
}

continueButton.addEventListener("click", function () {
    intro.classList.remove("active");

    setTimeout(function () {
        intro.style.display = "none";
        chapter1.classList.remove("hidden");
    }, 800);
});

chapterButton.addEventListener("click", function () {
    chapter1.classList.add("hidden");
    conversationScene.classList.remove("hidden");
});

nextMessageButton.addEventListener("click", function () {
    if (escribiendoMensaje || indiceMensaje >= mensajes.length) {
        return;
    }

    escribiendoMensaje = true;
    nextMessageButton.disabled = true;
    typing.classList.remove("hidden");

    discordBody.scrollTo({
        top: discordBody.scrollHeight,
        behavior: "smooth"
    });

    setTimeout(function () {
        typing.classList.add("hidden");
        mostrarMensaje(mensajes[indiceMensaje]);

        indiceMensaje++;
        escribiendoMensaje = false;
        nextMessageButton.disabled = false;

        if (indiceMensaje === 1) {
            nextMessageButton.textContent = "Siguiente mensaje";
        }

        if (indiceMensaje >= mensajes.length) {
            nextMessageButton.classList.add("hidden");
            finishConversationButton.classList.remove("hidden");
        }
    }, 850);
});

function mostrarMensaje(mensaje) {
    const message = document.createElement("div");

    message.classList.add("message", mensaje.personaje);

    message.innerHTML = `
        <div class="messageAvatar">
            ${mensaje.avatar}
        </div>

        <div class="messageContent">
            <div class="messageName">
                <strong>${mensaje.nombre}</strong>
                <time>${mensaje.hora}</time>
            </div>

            <p class="messageText">
                ${mensaje.texto}
            </p>
        </div>
    `;

    messagesContainer.appendChild(message);

    setTimeout(function () {
        discordBody.scrollTo({
            top: discordBody.scrollHeight,
            behavior: "smooth"
        });
    }, 50);
}

finishConversationButton.addEventListener("click", function () {
    conversationScene.classList.add("hidden");
    travelScene.classList.remove("hidden");
    iniciarViaje();
});

function iniciarViaje() {
    if (viajeIniciado) {
        return;
    }

    viajeIniciado = true;
    travelStatus.textContent = "Saliendo de Ibiza rumbo a Madrid...";
    travelStatusIcon.textContent = "✈️";

    setTimeout(function () {
        travelTransport.classList.add("planeTrip");
        routeProgress.style.width = "50%";
    }, 500);

    setTimeout(function () {
        travelStatus.textContent = "El panda aprovechó el vuelo para dormir un poquito...";
    }, 1600);

    setTimeout(function () {
        travelStatus.textContent = "Madrid. Cambio rápido de avión a bus.";
        travelStatusIcon.textContent = "🚌";
        transportIcon.textContent = "🚌";
        travelTransport.classList.remove("planeTrip");
        travelTransport.classList.add("madridStop");
    }, 4000);

    setTimeout(function () {
        travelStatus.textContent = "De Madrid a Murcia. El panda seguía completamente zZz...";
        travelTransport.classList.remove("madridStop");
        travelTransport.classList.add("busTrip");
        routeProgress.style.width = "100%";
    }, 4550);

    setTimeout(function () {
        travelStatus.textContent = "Murcia. Destino alcanzado. Ahora solo faltaba encontrar a la ranita.";
        travelStatusIcon.textContent = "📍";
        arrivalButton.classList.remove("hidden");
    }, 7900);
}

arrivalButton.addEventListener("click", function () {
    travelScene.classList.add("hidden");
    waitingScene.classList.remove("hidden");
    actualizarHoraEspera();
});

startWaitingButton.addEventListener("click", function () {
    if (esperaIniciada) {
        return;
    }

    esperaIniciada = true;
    startWaitingButton.disabled = true;
    startWaitingButton.textContent = "Esperando...";

    const intervaloEspera = setInterval(function () {
        horaActual++;
        actualizarHoraEspera();

        if (horaActual >= 12) {
            clearInterval(intervaloEspera);
            terminarEspera();
        }
    }, 850);
});

function actualizarHoraEspera() {
    waitHour.textContent = `${String(horaActual).padStart(2, "0")}:00`;
    waitingText.textContent = textosEspera[horaActual];
    waitingSky.style.background = fondosEspera[horaActual];

    const progreso = (horaActual - 5) / 7;
    const posicionSol = 10 + progreso * 75;
    const alturaSol = 42 - Math.sin(progreso * Math.PI) * 24;

    waitSun.style.left = `${posicionSol}%`;
    waitSun.style.top = `${alturaSol}%`;
    waitSun.style.opacity = Math.min(1, Math.max(0, progreso * 1.8));
    waitMoon.style.opacity = Math.max(0, 1 - progreso * 2.2);

    if (horaActual >= 8) {
        lampLight.classList.add("off");
    }

    if (horaActual >= 9) {
        pandaWaitZzz.textContent = "...";
    }

    if (horaActual >= 11) {
        pandaWaitZzz.textContent = "¿Ya?";
    }
}

function terminarEspera() {
    startWaitingButton.classList.add("hidden");
    flowersButton.classList.remove("hidden");

    sleepingFrog.classList.add("awake");
    sleepingFrog.textContent = "🐸";
    frogZzz.classList.add("hidden");
    houseWindow.classList.add("awake");
    pandaWaitZzz.classList.add("hidden");
    pandaWaiting.classList.add("excited");
}

flowersButton.addEventListener("click", function () {
    flowersButton.classList.add("hidden");
    pandaBouquet.classList.remove("hidden");
    pandaWaiting.classList.add("withFlowers");

    waitingText.textContent =
        "Después de siete horas esperando, el panda sacó las flores que había guardado para ella.";

    setTimeout(function () {
        askQuestionButton.classList.remove("hidden");
    }, 700);
});

askQuestionButton.addEventListener("click", function () {
    waitingScene.classList.add("hidden");
    proposalScene.classList.remove("hidden");
});

noButton.addEventListener("click", function () {
    vecesNo++;

    const escalaSi = Math.min(1 + vecesNo * 0.22, 2.2);
    const escalaNo = Math.max(1 - vecesNo * 0.14, 0.32);

    yesButton.style.transform = `translate(-50%, -50%) scale(${escalaSi})`;

    const anchoDisponible = Math.max(
        10,
        proposalActions.clientWidth - noButton.offsetWidth - 16
    );

    const altoDisponible = Math.max(
        10,
        proposalActions.clientHeight - noButton.offsetHeight - 16
    );

    const posicionX = 8 + Math.random() * anchoDisponible;
    const posicionY = 8 + Math.random() * altoDisponible;

    noButton.classList.add("movingNo");
    noButton.style.left = `${posicionX}px`;
    noButton.style.top = `${posicionY}px`;
    noButton.style.transform = `scale(${escalaNo})`;

    proposalNote.textContent =
        mensajesNo[Math.min(vecesNo - 1, mensajesNo.length - 1)];

    if (vecesNo >= 6) {
        noButton.textContent = "no... creo";
    }
});

yesButton.addEventListener("click", function () {
    proposalScene.classList.add("hidden");
    timelineScene.classList.remove("hidden");
    timelineScene.scrollTo({ top: 0, behavior: "smooth" });
    activarTimeline();
});

function activarTimeline() {
    if (observerTimeline) {
        observerTimeline.disconnect();
    }

    observerTimeline = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            root: timelineScene,
            threshold: 0.2
        }
    );

    revealItems.forEach(function (item) {
        observerTimeline.observe(item);
    });

    setTimeout(function () {
        revealItems.forEach(function (item) {
            const rect = item.getBoundingClientRect();
            const parentRect = timelineScene.getBoundingClientRect();
            if (rect.top < parentRect.bottom - 80) {
                item.classList.add("visible");
            }
        });
    }, 250);
}

timelineScene.addEventListener("scroll", function () {
    revealItems.forEach(function (item) {
        const rect = item.getBoundingClientRect();
        const sceneRect = timelineScene.getBoundingClientRect();

        if (rect.top < sceneRect.bottom - 80) {
            item.classList.add("visible");
        }
    });
});

toFinalSceneButton.addEventListener("click", function () {
    timelineScene.classList.add("hidden");
    loveScene.classList.remove("hidden");
    loveScene.scrollTo({ top: 0, behavior: "smooth" });
    crearLluviaDeCorazones();
});

function crearLluviaDeCorazones() {
    const corazones = ["💗", "💕", "💖", "💞", "🌸"];

    heartConfettiContainer.innerHTML = "";

    for (let i = 0; i < 42; i++) {
        const corazon = document.createElement("span");
        const duracion = 4 + Math.random() * 4;
        const retraso = Math.random() * 3;

        corazon.classList.add("fallingHeart");
        corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        corazon.style.left = `${Math.random() * 100}%`;
        corazon.style.fontSize = `${16 + Math.random() * 24}px`;
        corazon.style.animationDuration = `${duracion}s`;
        corazon.style.animationDelay = `${retraso}s`;

        heartConfettiContainer.appendChild(corazon);
    }
}
