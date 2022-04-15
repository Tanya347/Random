//Picking names

let nameArray = [];
const display = document.getElementById('display');

function pickName() {
    display.textContent = "";
    let names = document.getElementById("names").value;
    nameArray = names.split(',');
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = nameArray[i].trim();
    }
    let index = Math.floor(Math.random() * nameArray.length);
    display.textContent = nameArray[index];
}

var truths = [
    "When was the last time you lied?",
    "When was the last time you cried?",
    "What's your biggest fear?",
    "What's your biggest fantasy?",
    "Do you have any fetishes?",
    "What's something you're glad your mum doesn't know about you?",
    "Have you ever cheated on someone?",
    "What's the worst thing you've ever done?",
    "What's a secret you've never told anyone?",
    "Do you have a hidden talent?",
    "Who was your first celebrity crush?",
    "What are your thoughts on polyamory?",
    "What's the worst intimate experience you've ever had?",
    "Have you ever cheated in an exam?",
    "What's the most drunk you've ever been?",
    "Have you ever broken the law?",
    "What's the most embarrassing thing you've ever done?",
    "What's your biggest insecurity?"
]

var dares = [
    "Show the most embarrassing photo on your phone",
    "Show the last five people you texted and what the messages said",
    "Let the rest of the group DM someone from your Instagram account",
    "Eat a raw piece of garlic",
    "Do 100 squats",
    "Keep three ice cubes in your mouth until they melt",
    "Say something dirty to the person on your left",
    "Give a foot massage to the person on your right",
    "Put 10 different available liquids into a cup and drink it",
    "Yell out the first word that comes to your mind",
    "Give a lap dance to someone of your choice",
    "Remove four items of clothing",
    "Like the first 15 posts on your Facebook newsfeed",
    "Eat a spoonful of mustard",
    "Keep your eyes closed until it's your go again",
    "Empty out your wallet/purse and show everyone what's inside",
    "Pretend to be the person to your right for 10 minutes",
    "Eat a snack without using your hands"
]

var nevers = [
    "Never have I ever played hooky from school or work",
    "Never have I ever stolen anything",
    "Never have I ever missed a flight",
    "Never have I ever drunk-dialed my ex",
    "Never have I ever rode a motorcycle",
    "Never have I ever lost a bet",
    "Never have I ever gotten lost alone in a foreign country",
    "Never have I ever bribed someone",
    "Never have I ever gone skinny-dipping",
    "Never have I ever cheated on someone",
    "Never have I ever sang karaoke",
    "Never have I ever broken a bone",
    "Never have I ever lived alone",
    "Never have I ever been on a yacht",
    "Never have I ever been on TV",
    "Never have I ever been on a blind date",
    "Never have I ever lied to law enforcement",
    "Never have I ever gotten a tattoo"
]

const questions = document.getElementById('truth-questions')
const dareTasks = document.getElementById('dares')
const neverHave = document.getElementById('never-questions')

/**************  POP UP DISPLAY FUNCTIONS  ***************/

//truth questions 
function toggleTruth() {
    questions.innerHTML = " ";
    for (truth of truths) {
        const q = document.createElement("button");
        q.textContent = truth;
        questions.appendChild(q);
    }
    document.getElementById("truth").classList.toggle("active");
}

//dare tasks
function toggleDare() {
    dareTasks.innerHTML = " ";
    for (dare of dares) {
        const d = document.createElement("button");
        d.textContent = dare;
        dareTasks.appendChild(d);
    }
    document.getElementById("dare").classList.toggle("active");
}

//never have I evers
function toggleNever() {
    neverHave.innerHTML = " ";
    for (nev of nevers) {
        const n = document.createElement("button");
        n.textContent = nev;
        neverHave.appendChild(n);
    }
    document.getElementById("never").classList.toggle("active");
}

/****************  DELETE OPTIONS  *****************/

//truth
questions.addEventListener('click', (e) => {
    const index = truths.indexOf(e.target.textContent);
    truths.splice(index, 1);
    questions.removeChild(e.target);
})

//dare
dareTasks.addEventListener('click', (e) => {
    const index = dares.indexOf(e.target.textContent);
    dares.splice(index, 1);
    dareTasks.removeChild(e.target);
})

//never have I evers
neverHave.addEventListener('click', (e) => {
    const index = nevers.indexOf(e.target.textContent);
    nevers.splice(index, 1);
    neverHave.removeChild(e.target);
})

/********************  GENERATOR FUNCTIONS  *********************/

//truth
function generateTruth() {
    const display = document.getElementById('question');
    display.textContent = "";
    let index = Math.floor(Math.random() * truths.length)
    display.textContent = truths[index];
}

//Dare
function generateDare() {
    const display = document.getElementById('task');
    display.textContent = "";
    let index = Math.floor(Math.random() * dares.length)
    display.textContent = dares[index];
}

//Never Have I ever
function generateNever() {
    const display = document.getElementById('neverHaveI');
    display.textContent = "";
    let index = Math.floor(Math.random() * nevers.length)
    display.textContent = nevers[index];
}

/*********************  CUSTOM ADDERS  ***********************/

//truth
const inputT = document.getElementById("addTruth");

function addQuestion() {
    if (truths.includes(inputT.value) == 0) {
        truths.push(inputT.value);
        const q = document.createElement("button");
        q.textContent = inputT.value;
        questions.appendChild(q);
    }
    inputT.value = "";
}

//dare
const inputD = document.getElementById("addTask");

function addTask() {
    if (dares.includes(inputD.value) == 0) {
        dares.push(inputD.value);
        const q = document.createElement("button");
        q.textContent = inputD.value;
        dareTasks.appendChild(q);
    }
    inputD.value = "";
}

//never have I ever
const inputN = document.getElementById("addNever");

function addNever() {
    if (nevers.includes(inputN.value) == 0) {
        nevers.push(inputN.value);
        const q = document.createElement("button");
        q.textContent = inputN.value;
        neverHave.appendChild(q);
    }
    inputN.value = "";
}
