// Elementos da DOM
const registrationScreen = document.getElementById('registrationScreen');
const quizScreen = document.getElementById('quizScreen');
const finalScoreScreen = document.getElementById('finalScoreScreen');

const studentNameInput = document.getElementById('studentName');
const startButton = document.getElementById('startButton');
const nameError = document.getElementById('nameError');
const emojiButtons = document.querySelectorAll('.emoji-btn');

const welcomeMessage = document.getElementById('welcomeMessage');
const progressIndicator = document.getElementById('progressIndicator');

const questionText = document.getElementById('questionText');
const optionsArea = document.getElementById('optionsArea');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('nextButton');
const explanationText = document.getElementById('explanationText');
const confettiContainer = document.getElementById('confetti');

const finalMessage = document.getElementById('finalMessage');
const trophyContainer = document.getElementById('trophyContainer');
const leaderboardList = document.getElementById('leaderboard');
const restartButton = document.getElementById('restartButton');
const clearScoresButton = document.getElementById('clearScoresButton');

// ENEM notice and feedback elements
const enemNotice = document.getElementById('enemNotice');
const closeNoticeButton = document.getElementById('closeNotice');
const thumbsUpButton = document.getElementById('thumbsUp');
const thumbsDownButton = document.getElementById('thumbsDown');
const feedbackMessage = document.getElementById('feedbackMessage');
const writtenFeedback = document.getElementById('writtenFeedback');
const playAudioButton = document.getElementById('playAudioButton');

// ENEM Extension Elements
const enemExtensionButton = document.getElementById('enemExtensionButton');
const enemQuizScreen = document.getElementById('enemQuizScreen');
const enemFinalScoreScreen = document.getElementById('enemFinalScoreScreen');
const enemQuestionText = document.getElementById('enemQuestionText');
const enemOptionsArea = document.getElementById('enemOptionsArea');
const enemNextButton = document.getElementById('enemNextButton');
const enemScoreDisplay = document.getElementById('enemScore');
const enemProgressIndicator = document.getElementById('enemProgressIndicator');
const enemStudentNameDisplay = document.getElementById('enemStudentNameDisplay');
const enemFinalStudentName = document.getElementById('enemFinalStudentName');
const enemFinalScore = document.getElementById('enemFinalScore');
const enemScoreMessage = document.getElementById('enemScoreMessage');
const enemLeaderboard = document.getElementById('enemLeaderboard');
const enemRestartButton = document.getElementById('enemRestartButton');
const backToMainButton = document.getElementById('backToMainButton');
const translateButton = document.getElementById('translateButton');
const enemPlayAudioButton = document.getElementById('enemPlayAudioButton');
const enemTranslationText = document.getElementById('enemTranslationText');
const enemExplanationText = document.getElementById('enemExplanationText');
const enemConfetti = document.getElementById('enemConfetti');
const enemThumbsUp = document.getElementById('enemThumbsUp');
const enemThumbsDown = document.getElementById('enemThumbsDown');
const enemWrittenFeedback = document.getElementById('enemWrittenFeedback');
const enemFeedbackMessage = document.getElementById('enemFeedbackMessage');

// New ENEM Menu Elements
const enemMenuButton = document.getElementById('enemMenuButton');
const enemMenuModal = document.getElementById('enemMenuModal');
const closeEnemMenu = document.getElementById('closeEnemMenu');
const pauseEnemQuiz = document.getElementById('pauseEnemQuiz');
const restartEnemQuizFromMenu = document.getElementById('restartEnemQuizFromMenu');
const backToMainFromMenu = document.getElementById('backToMainFromMenu');

// Normal Quiz Menu Elements
const normalMenuButton = document.getElementById('normalMenuButton');
const normalMenuModal = document.getElementById('normalMenuModal');
const closeNormalMenu = document.getElementById('closeNormalMenu');
const pauseNormalQuiz = document.getElementById('pauseNormalQuiz');
const restartNormalQuizFromMenu = document.getElementById('restartNormalQuizFromMenu');
const backToMainFromNormalMenu = document.getElementById('backToMainFromNormalMenu');

// State Variables
let isEnemPaused = false;
let isNormalPaused = false;

// Variáveis do estado do jogo
let currentStudentName = '';
let currentStudentEmoji = '';
let currentScore = 0;
let currentQuestionIndex = 0;
let questions = [];
let currentAudio = null;
let audioCache = new Map(); // Cache for audio files
const TOTAL_QUESTIONS_TO_ASK = 10;

// ENEM Extension Variables
let enemQuestions = [];
let enemCurrentQuestionIndex = 0;
let enemCurrentScore = 0;
let enemAudioCache = new Map();
const ENEM_TOTAL_QUESTIONS = 10;

// --- ENEM Questions Database ---
function loadEnemQuestions() {
    const allEnemQuestions = [
        {
            id: 1,
            year: "2019",
            text: "A pet is certainly a great friend. After a difficult day, pet owners quite literally feel the love.\n\nIn fact, for nearly 25 years, research has shown that living with pets provides certain health benefits. Pets help lower blood pressure and lessen anxiety. They boost our immunity. They can even help you get dates.\n\nAllergy Fighters: A growing number of studies have suggested that kids growing up in a home with \"furred animals\" will have less risk of allergies and asthma.\n\nDate magnets: Dogs are great for making love connections. Forget Internet matchmaking — a dog is a natural conversation starter.\n\nDogs for the Aged: Walking a dog or just caring for a pet — for elderly people who are able — can provide exercise and companionship.\n\nGood for Mind and Soul: Like any enjoyable activity, playing with a dog can elevate levels of serotonin and dopamine — nerve transmitters that are known to have pleasurable and calming properties.\n\nGood for the Heart: Heart attack patients who have pets survive longer than those without, according to several studies.\n\nDAVIS, J. L. Disponível em: www.webmd.com. Acesso em: 21 abr. 2013 (adaptado).\n\nAo discutir sobre a influência de animais de estimação no bem-estar do ser humano, a autora, a fim de fortalecer seus argumentos, utiliza palavras e expressões como research, a growing number of research e several studies com o objetivo de",
            options: [
                "a) mostrar que animais de estimação ajudam na cura de doenças como alergias e asma.",
                "b) convencer sobre os benefícios da adoção de animais de estimação para a saúde.",
                "c) fornecer dados sobre os impactos de animais de estimação nas relações amorosas.",
                "d) explicar como o contato com animais de estimação pode prevenir ataques cardíacos.",
                "e) esclarecer sobre o modo como idosos devem se relacionar com animais de estimação."
            ],
            correct: 1,
            explanation: "A autora utiliza termos como 'research', 'a growing number of studies' e 'several studies' para dar credibilidade científica aos seus argumentos sobre os benefícios dos animais de estimação para a saúde humana.",
            translation: "Um animal de estimação é certamente um grande amigo. Após um dia difícil, donos de animais literalmente sentem o amor. Na verdade, por quase 25 anos, pesquisas têm mostrado que viver com animais de estimação oferece certos benefícios à saúde..."
        },
        {
            id: 2,
            year: "2020",
            text: "Finally, Aisha finished with her customer and asked what colour Ifemelu wanted for her hair attachments.\n\n\"Colour four.\"\n\n\"Not good colour,\" Aisha said promptly.\n\n\"That's what I use.\"\n\n\"It look dirty. You don't want colour one?\"\n\n\"Colour one it too black. It looks fake,\" Ifemelu said, loosening her headwrap. \"Sometimes I use colour two, but colour four is closest to my natural colour.\"\n\n[...]\n\nShe touched Ifemelu's hair. \"Why you don't have relaxer?\"\n\n\"I like my hair the way God made it.\"\n\n\"But how do you comb it? Hard to comb,\" Aisha said.\n\nIfemelu had brought her own comb. She gently combed her hair, dense, soft and tightly coiled, until it framed her head like a halo. \"It's not hard to comb if you moisturize it properly,\" she said, slipping into the coaxing tone of the proselytizer that she used whenever she was trying to convince other black women about the merits of wearing their hair natural. Aisha snorted; she clearly could not understand why anybody would choose to suffer through combing natural hair.\n\nADICHIE, C. Americanah: A novel. New York: Anchor Books, 2013.\n\nA passagem do romance da escritora nigeriana traz um diálogo entre duas mulheres negras: a cabeleireira, Aisha, e a cliente, Ifemelu. O posicionamento da cliente é sustentado por argumentos que",
            options: [
                "a) reforçam um padrão de beleza.",
                "b) retratam um conflito de gerações.",
                "c) revelam uma atitude de resistência.",
                "d) demonstram uma postura de imaturidade.",
                "e) evidenciam uma mudança de comportamento."
            ],
            correct: 2,
            explanation: "Ifemelu demonstra resistência ao aceitar seu cabelo natural ('I like my hair the way God made it') e tenta convencer outras mulheres negras sobre os méritos de usar o cabelo natural, resistindo aos padrões impostos.",
            translation: "Finalmente, Aisha terminou com sua cliente e perguntou que cor Ifemelu queria para suas extensões de cabelo. 'Cor quatro.' 'Cor não boa,' Aisha disse prontamente..."
        },
        {
            id: 3,
            year: "2018",
            text: "TEXTO I – A Free World-class Education for Anyone Anywhere\n\nThe Khan Academy is an organization on a mission.\n\nWe're a not-for-profit with the goal of changing education for the better by providing a free world-class education to anyone anywhere. All of the site's resources are available to anyone. The Khan Academy's materials and resources are available to you completely free of charge.\n\nDisponível em www.khanacademy.org. Acesso em: 24 fev. 2012 (adaptado)\n\nTEXTO II\n\nI didn't have a problem with Khan Academy site until very recently. For me, the problem is the way Khan Academy is being promoted. The way the media sees it as \"revolutionizing education\". The way people with power and Money view education as simply \"sit-and-get\", i.e., teaching is telling and learning is listening, then Khan Academy is way more efficient than classroom lecturing. Khan Academy does it better. But TRUE progressive educators, TRUE education visionaries understand that education is a much more complex process...\n\nDisponível em http://fnoschese.wordpress.com. Acesso em: 2 mar. 2012\n\nCom o impacto das tecnologias e a ampliação das redes sociais, consumidores encontram na internet possibilidades de opinar sobre serviços oferecidos. Nesse sentido, o segundo texto, que é um comentário sobre o site divulgado no primeiro, apresenta a intenção do autor de",
            options: [
                "a) elogiar o trabalho proposto para a educação nessa era tecnológica.",
                "b) reforçar como a mídia pode contribuir para revolucionar a educação.",
                "c) chamar a atenção das pessoas influentes para o significado da educação.",
                "d) destacar que o site tem melhores resultados do que a educação tradicional.",
                "e) criticar a concepção de educação em que se baseia a organização."
            ],
            correct: 4,
            explanation: "O autor do segundo texto critica a concepção simplista de educação da Khan Academy, argumentando que educação é um processo mais complexo do que apenas 'sit-and-get' (sentar e receber).",
            translation: "TEXTO I - Uma Educação Gratuita de Classe Mundial para Qualquer Pessoa em Qualquer Lugar. A Khan Academy é uma organização em missão..."
        },
        {
            id: 4,
            year: "2018",
            text: "Lava Mae: Creating Showers on Wheels for the Homeless\n\nSan Francisco, according to recent city numbers, has 4,300 people living on the streets. Among the many problems the homeless face is little or no access to showers. San Francisco only has about 16 to 20 shower stalls to accommodate them.\n\nBut Doniece Sandoval has made it her mission to change that. The 51-year-old former marketing executive started Lava Mae, a sort of showers on wheels, a new project that aims to turn decommissioned city buses into shower stations for the homeless. Each bus will have two shower stations and Sandoval expects that they'll be able to provide 2,000 showers a week.\n\nANDREANO, C. Disponível em: abcnews.go.com. Acesso: 26 jun. 2015 (adaptado).\n\nA relação dos vocábulos shower, bus e homeless, no texto, refere-se a",
            options: [
                "a) empregar moradores de rua em lava a jatos para ônibus.",
                "b) criar acesso a banhos gratuitos para moradores de rua.",
                "c) comissionar sem-teto para dirigir os ônibus da cidade.",
                "d) exigir das autoridades que os ônibus municipais tenham banheiros.",
                "e) abrigar dois mil moradores de rua em ônibus que foram adaptados."
            ],
            correct: 1,
            explanation: "O texto fala sobre o projeto Lava Mae que transforma ônibus descomissionados em estações de banho para pessoas em situação de rua, criando acesso a banhos gratuitos.",
            translation: "Lava Mae: Criando Chuveiros sobre Rodas para os Sem-Teto. São Francisco, de acordo com números recentes da cidade, tem 4.300 pessoas vivendo nas ruas..."
        },
        {
            id: 5,
            year: "2018",
            text: "1984 (excerpt)\n\n'Is it your opinion, Winston, that the past has real existence?' [...] O'Brien smiled faintly. 'I will put it more precisely. Does the past exist concretely, in space? Is there somewhere or other a place, a world of solid objects, where the past is still happening?'\n\n'No.'\n\n'Then where does the past exist, if at all?'\n\n'In records. It is written down.'\n\n'In records. And — —?'\n\n'In the mind. In human memories.'\n\n'In memory. Very well, then. We, the Party, control all records, and we control all memories. Then we control the past, do we not?'\n\nORWELL. G, Nineteen Eighty-Four. New York: Signet Classics, 1977\n\nO romance 1984 descreve os perigos de um Estado totalitário. A ideia evidenciada nessa passagem é que o controle do Estado se dá por meio do(a)",
            options: [
                "a) boicote a ideais libertários.",
                "b) veto ao culto das tradições.",
                "c) poder sobre memórias e registros.",
                "d) censura a produções orais e escritas.",
                "e) manipulação de pensamentos individuais."
            ],
            correct: 2,
            explanation: "O diálogo mostra que o Partido controla o passado através do controle de registros e memórias, demonstrando como o poder totalitário se estabelece controlando a narrativa histórica.",
            translation: "1984 (trecho) - 'É sua opinião, Winston, que o passado tem existência real?' [...] O'Brien sorriu levemente. 'Vou colocar mais precisamente...'"
        },
        {
            id: 6,
            year: "2017",
            text: "Israel Travel Guide\n\nIsrael has always been a standout destination. From the days of prophets to the modern day nomad this tiny slice of land on the eastern Mediterranean has long attracted visitors. While some arrive in the 'Holy Land' on a spiritual quest, many others are on cultural tours, beach holidays and eco-tourism trips. Weeding through Israel's convoluted history is both exhilarating and exhausting. There are crumbling temples, ruined cities, abandoned forts and hundreds of places associated with the great monotheistic religions.\n\nDisponível em: www.worldtravelguide.net. Acesso em: 15 jun. 2012.\n\nAntes de viajar, turistas geralmente buscam informações sobre o local para onde pretendem ir. O trecho do guia de viagens de Israel",
            options: [
                "a) descreve a história desse local para que turistas valorizem seus costumes milenares.",
                "b) informa hábitos religiosos para auxiliar turistas a entenderem as diferenças culturais.",
                "c) divulga os principais pontos turísticos para ajudar turistas a planejarem sua viagem.",
                "d) recomenda medidas de segurança para alertar turistas sobre possíveis riscos locais.",
                "e) apresenta aspectos gerais da cultura do país para continuar a atrair turistas estrangeiros."
            ],
            correct: 4,
            explanation: "O guia apresenta aspectos gerais de Israel (história, religião, turismo) de forma atrativa para continuar atraindo turistas estrangeiros, destacando a diversidade de experiências disponíveis.",
            translation: "Guia de Viagem de Israel. Israel sempre foi um destino de destaque. Desde os dias dos profetas até o nômade moderno, esta pequena fatia de terra no Mediterrâneo oriental há muito atrai visitantes..."
        },
        {
            id: 7,
            year: "2017",
            text: "Take your car just anyplace for an oil change, and you may regret it down the road.\n\n[Image shows a car-shaped oil spill on pavement next to an oil can]\n\nReader's Digest, set. 1993.\n\nNesse texto publicitário são utilizados recursos verbais e não verbais para transmitir a mensagem. Ao associar os termos anyplace e regret à imagem do texto, constata-se que o tema da propaganda é a importância da",
            options: [
                "a) preservação do meio ambiente.",
                "b) manutenção do motor.",
                "c) escolha da empresa certa.",
                "d) consistência do produto.",
                "e) conservação do carro."
            ],
            correct: 2,
            explanation: "A propaganda associa 'anyplace' (qualquer lugar) com 'regret' (arrependimento) e mostra uma imagem de vazamento de óleo, enfatizando a importância de escolher a empresa certa para trocar o óleo.",
            translation: "Leve seu carro a qualquer lugar para trocar o óleo, e você pode se arrepender no futuro."
        },
        {
            id: 8,
            year: "2020",
            text: "[Image shows a woman's face with search suggestions appearing: 'women shouldn't', 'women shouldn't have rights', 'women shouldn't vote', 'women shouldn't work', 'women shouldn't box', and below: 'women shouldn't suffer from discrimination anymore']\n\nDisponível em: https://sites.psu.edu. Acesso em: 12 jun. 2018.\n\nOs recursos usados nesse pôster de divulgação de uma campanha levam o leitor a refletir sobre a necessidade de",
            options: [
                "a) criticar o tipo de tratamento dado à mulher.",
                "b) rever o desempenho da mulher no trabalho.",
                "c) questionar a sobrecarga de atribuições da mulher.",
                "d) analisar as pesquisas acerca dos direitos da mulher.",
                "e) censurar a mulher pelo uso de determinadas palavras."
            ],
            correct: 0,
            explanation: "O pôster usa sugestões de busca negativas sobre mulheres para contrastar com a mensagem final, levando o leitor a criticar o tipo de tratamento discriminatório dado às mulheres.",
            translation: "Mulheres não deveriam... [várias sugestões negativas] ...sofrer discriminação nunca mais."
        },
        {
            id: 9,
            year: "2017",
            text: "Letters\n\nChildren and Guns\n\nPublished: May 7, 2013\n\nTo the Editor: Re \"Girl's Death by Gunshot Is Rejected as Symbol\" (news article, May 6)\n\nI find it abhorrent that the people of Burkesville, Ky., are not willing to learn a lesson from the tragic shooting of a 2-year-old girl by her 5-year-old brother. I am not judging their lifestyle of introducing guns to children at a young age, but I do feel that it's irresponsible not to practice basic safety with anything potentially lethal — guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children?\n\nEMILY LOUBATON\nBrooklyn, May 6, 2013\n\nDisponível em: www.nytimes.com. Acesso em: 10 maio 2013.\n\nNo que diz respeito à tragédia ocorrida em Burkesville, a autora da carta enviada ao The New York Times busca",
            options: [
                "a) reconhecer o acidente noticiado como um fato isolado.",
                "b) responsabilizar o irmão da vítima pelo incidente ocorrido.",
                "c) apresentar versão diferente da notícia publicada pelo jornal.",
                "d) expor sua indignação com a negligência de portadores de armas.",
                "e) reforçar a necessidade de proibição do uso de armas por crianças."
            ],
            correct: 3,
            explanation: "A autora da carta expressa indignação ('I find it abhorrent') com a negligência das pessoas que deixam armas desprotegidas em casa com crianças pequenas.",
            translation: "Cartas - Crianças e Armas. Para o Editor: Acho abominável que as pessoas de Burkesville, Kentucky, não estejam dispostas a aprender uma lição da trágica morte a tiros de uma menina de 2 anos por seu irmão de 5 anos..."
        },
        {
            id: 10,
            year: "2018",
            text: "Don't write in English, they said,\n\nEnglish is not your mother tongue…\n\n…The language I speak\n\nBecomes mine, its distortions, its queerness\n\nAll mine, mine alone, it is half English, half\n\nIndian, funny perhaps, but it is honest,\n\nIt is as human as I am human…\n\n…It voices my joys, my longings my\n\nHopes…\n\n(Kamala Das, 1965:10)\n\nGARGESH, R. South Asian Englishes. In: KACHRU, B.B.; KACHRU, Y.; NELSON, C.L. (Eds.). The Handbook of World English. Singapore: Blackwell, 2006\n\nA poetisa Kamala Das, como muitos escritores indianos, escreve suas obras em inglês, apesar de essa não ser sua primeira língua. Nesses versos, ela",
            options: [
                "a) usa a língua inglesa como efeito humorístico.",
                "b) recorre a vozes de vários escritores ingleses.",
                "c) adverte sobre o uso distorcido da língua inglesa.",
                "d) demonstra consciência de sua identidade linguística.",
                "e) reconhece a incompreensão na sua maneira de falar inglês."
            ],
            correct: 3,
            explanation: "A poetisa demonstra consciência de sua identidade linguística única, reconhecendo que sua versão do inglês ('half English, half Indian') é autêntica e expressa sua humanidade.",
            translation: "Não escreva em inglês, eles disseram, inglês não é sua língua materna... A língua que eu falo se torna minha, suas distorções, sua estranheza, tudo meu..."
        }
    ];
    
    // Selecionar 10 questões aleatórias
    enemQuestions = allEnemQuestions.sort(() => 0.5 - Math.random()).slice(0, ENEM_TOTAL_QUESTIONS);
}

// --- ENEM Quiz Functions ---
function startEnemQuiz() {
    if (!currentStudentName.trim() || !currentStudentEmoji) {
        nameError.classList.remove('hidden');
        return;
    }
    
    nameError.classList.add('hidden');
    
    // Initialize ENEM quiz
    enemCurrentQuestionIndex = 0;
    enemCurrentScore = 0;
    loadEnemQuestions();
    
    // Update displays
    enemStudentNameDisplay.textContent = currentStudentName;
    enemScoreDisplay.textContent = enemCurrentScore;
    
    // Switch to ENEM quiz screen
    registrationScreen.classList.add('hidden');
    enemQuizScreen.classList.remove('hidden');
    
    showEnemQuestion();
}

function showEnemQuestion() {
    if (enemCurrentQuestionIndex >= enemQuestions.length) {
        endEnemQuiz();
        return;
    }
    
    const question = enemQuestions[enemCurrentQuestionIndex];
    
    // Update question display
    enemQuestionText.textContent = `(ENEM ${question.year}) ${question.text}`;
    enemProgressIndicator.textContent = `Questão ${enemCurrentQuestionIndex + 1}/${ENEM_TOTAL_QUESTIONS}`;
    
    // Reset any overlay states if needed
    
    // Hide translation and explanation
    enemTranslationText.classList.add('hidden');
    enemExplanationText.classList.add('hidden');
    enemNextButton.classList.add('hidden');
    
    // Create options
    enemOptionsArea.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.textContent = option;
        optionButton.onclick = () => selectEnemAnswer(index, optionButton);
        enemOptionsArea.appendChild(optionButton);
    });
}

function selectEnemAnswer(selectedIndex, selectedButton) {
    const question = enemQuestions[enemCurrentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Disable all option buttons
    const optionButtons = enemOptionsArea.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);
    
    // Show correct/incorrect styling
    if (isCorrect) {
        selectedButton.classList.add('correct');
        enemCurrentScore++;
        enemScoreDisplay.textContent = enemCurrentScore;
        createEnemConfetti();
    } else {
        selectedButton.classList.add('incorrect');
        optionButtons[question.correct].classList.add('correct');
    }
    
    // Show explanation
    enemExplanationText.textContent = question.explanation;
    enemExplanationText.classList.remove('hidden');
    
    // Show next button
    enemNextButton.classList.remove('hidden');
}

function nextEnemQuestion() {
    enemCurrentQuestionIndex++;
    showEnemQuestion();
}

function endEnemQuiz() {
    // Hide quiz screen, show final score
    enemQuizScreen.classList.add('hidden');
    enemFinalScoreScreen.classList.remove('hidden');
    
    // Update final score display
    enemFinalStudentName.textContent = currentStudentName;
    enemFinalScore.textContent = enemCurrentScore;
    
    // Score message
    let message = '';
    if (enemCurrentScore >= 8) {
        message = `Excelente! ${currentStudentEmoji} Você está muito bem preparado para o ENEM!`;
    } else if (enemCurrentScore >= 6) {
        message = `Muito bom! ${currentStudentEmoji} Continue estudando para melhorar ainda mais!`;
    } else if (enemCurrentScore >= 4) {
        message = `Bom trabalho! ${currentStudentEmoji} Você está no caminho certo!`;
    } else {
        message = `Continue praticando! ${currentStudentEmoji} Cada questão é um aprendizado!`;
    }
    enemScoreMessage.textContent = message;
    
    // Save score
    saveEnemScore(currentStudentName, enemCurrentScore, currentStudentEmoji);
    displayEnemLeaderboard();
}

function saveEnemScore(name, score, emoji) {
    let scores = JSON.parse(localStorage.getItem('enemQuizScores')) || [];
    scores.push({
        name: name,
        score: score,
        emoji: emoji,
        date: new Date().toLocaleDateString('pt-BR')
    });
    
    // Sort by score (descending)
    scores.sort((a, b) => b.score - a.score);
    
    // Keep only top 10
    scores = scores.slice(0, 10);
    
    localStorage.setItem('enemQuizScores', JSON.stringify(scores));
}

function displayEnemLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('enemQuizScores')) || [];
    enemLeaderboard.innerHTML = '';
    
    scores.forEach((score, index) => {
        const li = document.createElement('li');
        li.className = 'leaderboard-item';
        li.innerHTML = `
            <span class="rank">${index + 1}º</span>
            <span class="name">${score.emoji} ${score.name}</span>
            <span class="score">${score.score}/10</span>
            <span class="date">${score.date}</span>
        `;
        enemLeaderboard.appendChild(li);
    });
}

function createEnemConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.animationDelay = Math.random() * 2 + 's';
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';
        enemConfetti.appendChild(confettiPiece);
    }
    
    setTimeout(() => {
        enemConfetti.innerHTML = '';
    }, 5000);
}

// Translation function
async function translateText() {
    const question = enemQuestions[enemCurrentQuestionIndex];
    if (!question) return;
    
    // Show cached translation
    enemTranslationText.textContent = question.translation;
    enemTranslationText.classList.remove('hidden');
    
    translateButton.textContent = 'Traduzido ✓';
    translateButton.disabled = true;
    
    setTimeout(() => {
        translateButton.textContent = '🌐 Traduzir';
        translateButton.disabled = false;
    }, 3000);
}

// ENEM Audio function
async function generateEnemSpeech(text) {
    try {
        // Check if audio is already cached
        if (enemAudioCache.has(text)) {
            const cachedAudioUrl = enemAudioCache.get(text);
            
            if (currentAudio) {
                currentAudio.pause();
            }
            
            currentAudio = new Audio(cachedAudioUrl);
            currentAudio.play();
            return;
        }
        
        enemPlayAudioButton.disabled = true;
        enemPlayAudioButton.textContent = '⏳';
        
        const response = await fetch('/api/tts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text })
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate audio');
        }
        
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Cache the audio URL
        enemAudioCache.set(text, audioUrl);
        
        if (currentAudio) {
            currentAudio.pause();
        }
        
        currentAudio = new Audio(audioUrl);
        currentAudio.play();
        
        currentAudio.onended = () => {
            enemPlayAudioButton.disabled = false;
            enemPlayAudioButton.textContent = '🔊';
        };
        
    } catch (error) {
        console.error('Error generating speech:', error);
        enemPlayAudioButton.disabled = false;
        enemPlayAudioButton.textContent = '🔊';
        
        // Fallback to browser's speech synthesis
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }
}

function submitEnemFeedback(type) {
    const writtenComment = enemWrittenFeedback.value.trim();
    
    // Save feedback
    let feedback = JSON.parse(localStorage.getItem('enemQuizFeedback')) || [];
    feedback.push({
        type: type,
        comment: writtenComment,
        date: new Date().toLocaleDateString('pt-BR'),
        student: currentStudentName,
        emoji: currentStudentEmoji
    });
    localStorage.setItem('enemQuizFeedback', JSON.stringify(feedback));
    
    // Visual feedback
    enemThumbsUp.classList.remove('selected');
    enemThumbsDown.classList.remove('selected');
    
    if (type === 'positive') {
        enemThumbsUp.classList.add('selected');
        enemFeedbackMessage.textContent = 'Obrigado pelo feedback positivo! 😊';
    } else {
        enemThumbsDown.classList.add('selected');
        enemFeedbackMessage.textContent = 'Obrigado pelo feedback! Vamos melhorar! 💪';
    }
    
    enemFeedbackMessage.classList.remove('hidden');
    
    // Disable buttons and textarea
    enemThumbsUp.disabled = true;
    enemThumbsDown.disabled = true;
    enemWrittenFeedback.disabled = true;
}

function restartEnemQuiz() {
    // Reset ENEM quiz state
    enemCurrentQuestionIndex = 0;
    enemCurrentScore = 0;
    
    // Clear ENEM audio cache
    for (const [text, audioUrl] of enemAudioCache) {
        URL.revokeObjectURL(audioUrl);
    }
    enemAudioCache.clear();
    
    // Reset feedback
    enemThumbsUp.classList.remove('selected');
    enemThumbsDown.classList.remove('selected');
    enemThumbsUp.disabled = false;
    enemThumbsDown.disabled = false;
    enemWrittenFeedback.disabled = false;
    enemWrittenFeedback.value = '';
    enemFeedbackMessage.classList.add('hidden');
    
    // Load new questions and restart
    loadEnemQuestions();
    enemFinalScoreScreen.classList.add('hidden');
    enemQuizScreen.classList.remove('hidden');
    showEnemQuestion();
}

function backToMain() {
    // Reset states
    enemCurrentQuestionIndex = 0;
    enemCurrentScore = 0;
    
    // Clear audio cache
    for (const [text, audioUrl] of enemAudioCache) {
        URL.revokeObjectURL(audioUrl);
    }
    enemAudioCache.clear();
    
    // Reset feedback
    enemThumbsUp.classList.remove('selected');
    enemThumbsDown.classList.remove('selected');
    enemThumbsUp.disabled = false;
    enemThumbsDown.disabled = false;
    enemWrittenFeedback.disabled = false;
    enemWrittenFeedback.value = '';
    enemFeedbackMessage.classList.add('hidden');
    
    // Return to main menu
    enemFinalScoreScreen.classList.add('hidden');
    registrationScreen.classList.remove('hidden');
}

// --- Menu Functions ---

// Normal Quiz Menu functionality
function openNormalMenu() {
    normalMenuModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeNormalMenuModal() {
    normalMenuModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function pauseNormalQuizFunction() {
    isNormalPaused = !isNormalPaused;
    
    if (isNormalPaused) {
        // Disable all quiz interactions
        const optionButtons = optionsArea.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.disabled = true);
        nextButton.disabled = true;
        pauseNormalQuiz.textContent = '▶️ Continuar Quiz';
        
        // Show pause overlay
        showNormalPauseOverlay();
    } else {
        // Re-enable quiz interactions
        const optionButtons = optionsArea.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.disabled = false);
        nextButton.disabled = false;
        pauseNormalQuiz.textContent = '⏸️ Pausar Quiz';
        
        // Hide pause overlay
        hideNormalPauseOverlay();
    }
    
    closeNormalMenuModal();
}

function showNormalPauseOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'normalPauseOverlay';
    overlay.className = 'pause-overlay';
    overlay.innerHTML = `
        <div class="pause-content">
            <h2>⏸️ Quiz Pausado</h2>
            <p>Clique no menu para continuar</p>
        </div>
    `;
    quizScreen.appendChild(overlay);
}

function hideNormalPauseOverlay() {
    const overlay = document.getElementById('normalPauseOverlay');
    if (overlay) {
        overlay.remove();
    }
}

function confirmRestartNormalQuiz() {
    if (confirm('Tem certeza que deseja reiniciar o quiz? Todo o progresso atual será perdido.')) {
        closeNormalMenuModal();
        restartQuiz();
    }
}

function confirmBackToMainFromNormal() {
    if (confirm('Tem certeza que deseja voltar ao menu principal? Todo o progresso atual será perdido.')) {
        closeNormalMenuModal();
        backToMain();
    }
}

// Menu functionality
function openEnemMenu() {
    enemMenuModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeEnemMenuModal() {
    enemMenuModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function pauseEnemQuizFunction() {
    isEnemPaused = !isEnemPaused;
    
    if (isEnemPaused) {
        // Disable all quiz interactions
        const optionButtons = enemOptionsArea.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.disabled = true);
        enemNextButton.disabled = true;
        pauseEnemQuiz.textContent = '▶️ Continuar Quiz';
        
        // Show pause overlay
        showPauseOverlay();
    } else {
        // Re-enable quiz interactions
        const optionButtons = enemOptionsArea.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.disabled = false);
        enemNextButton.disabled = false;
        pauseEnemQuiz.textContent = '⏸️ Pausar Quiz';
        
        // Hide pause overlay
        hidePauseOverlay();
    }
    
    closeEnemMenuModal();
}

function showPauseOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'pauseOverlay';
    overlay.className = 'pause-overlay';
    overlay.innerHTML = `
        <div class="pause-content">
            <h2>⏸️ Quiz Pausado</h2>
            <p>Clique no menu para continuar</p>
        </div>
    `;
    enemQuizScreen.appendChild(overlay);
}

function hidePauseOverlay() {
    const overlay = document.getElementById('pauseOverlay');
    if (overlay) {
        overlay.remove();
    }
}

function confirmRestartEnemQuiz() {
    if (confirm('Tem certeza que deseja reiniciar o quiz ENEM? Todo o progresso atual será perdido.')) {
        closeEnemMenuModal();
        restartEnemQuiz();
    }
}

function confirmBackToMain() {
    if (confirm('Tem certeza que deseja voltar ao menu principal? Todo o progresso atual será perdido.')) {
        closeEnemMenuModal();
        backToMain();
    }
}

// --- Perguntas ---
function loadQuestions() {
    // Banco de perguntas maior para variedade
    const allQuestions = [
        {
            question: "If someone says 'I'm beat', what do they mean?",
            options: ["They are very happy.", "They are very tired.", "They are very hungry.", "They are very excited."],
            answer: "They are very tired.",
            explanation: "'I'm beat' é uma expressão americana comum para 'estou muito cansado'."
        },
        {
            question: "What's a common way to respond to 'What have you been up to lately?'",
            options: ["'I'm fine, thanks.'", "'Not much, just working and trying to catch up on some series. You?'", "'My name is John.'", "'I like pizza.'"],
            answer: "'Not much, just working and trying to catch up on some series. You?'",
            explanation: "Esta é uma resposta típica e amigável que convida a mais conversa."
        },
        {
            question: "Which phrase is NOT typically used to express agreement?",
            options: ["'You can say that again!'", "'I'm on the fence about that.'", "'Tell me about it!'", "'Exactly!'"],
            answer: "'I'm on the fence about that.'",
            explanation: "'On the fence' significa que você está indeciso."
        },
        {
            question: "A friend tells you they 'binge-watched' an entire season of a show. What did they do?",
            options: ["They watched it very slowly.", "They watched many episodes in a short period.", "They didn't like the show.", "They watched it with many friends."],
            answer: "They watched many episodes in a short period.",
            explanation: "'Binge-watch' significa assistir muitos episódios seguidos."
        },
        {
            question: "What does it mean when someone says 'That's fire!' about a song?",
            options: ["The song is terrible.", "The song is really good.", "The song is about fire.", "The song is too loud."],
            answer: "The song is really good.",
            explanation: "'Fire' é gíria para algo excelente ou incrível."
        },
        {
            question: "If your friend says 'I'm ghosting that person', what are they doing?",
            options: ["Helping them with something.", "Suddenly stopping all communication.", "Introducing them to others.", "Inviting them to a party."],
            answer: "Suddenly stopping all communication.",
            explanation: "'Ghosting' significa parar de responder mensagens ou ligações de alguém sem explicação."
        },
        {
            question: "What's the most natural response to 'How's it going?'",
            options: ["'I'm 25 years old.'", "'Not bad, thanks! How about you?'", "'My favorite color is blue.'", "'I live in Brazil.'"],
            answer: "'Not bad, thanks! How about you?'",
            explanation: "Esta é uma resposta natural que mantém a conversa fluindo."
        },
        {
            question: "When someone says 'That's sus', what do they mean?",
            options: ["That's suspicious.", "That's super.", "That's sad.", "That's surprising."],
            answer: "That's suspicious.",
            explanation: "'Sus' é uma abreviação de 'suspicious' (suspeito)."
        },
        {
            question: "If someone says 'I'm lowkey tired', what do they mean?",
            options: ["They are very energetic.", "They are somewhat tired.", "They are not tired at all.", "They are extremely exhausted."],
            answer: "They are somewhat tired.",
            explanation: "'Lowkey' significa 'um pouco' ou 'meio que'."
        },
        {
            question: "What's the best way to politely disagree in English?",
            options: ["'You're wrong!'", "'That's stupid!'", "'I see your point, but I think differently.'", "'No way!'"],
            answer: "'I see your point, but I think differently.'",
            explanation: "Esta é uma forma educada de discordar que reconhece a opinião da outra pessoa."
        },
        {
            question: "When someone says 'It's giving main character energy', what do they mean?",
            options: ["The person is acting like the hero of their own story.", "The person is watching a movie.", "The person is tired.", "The person is confused."],
            answer: "The person is acting like the hero of their own story.",
            explanation: "'Main character energy' significa agir com confiança como se fosse o protagonista."
        },
        {
            question: "What does 'periodt' mean at the end of a statement?",
            options: ["It's a typo.", "It emphasizes the statement strongly.", "It means 'period of time'.", "It's asking a question."],
            answer: "It emphasizes the statement strongly.",
            explanation: "'Periodt' é usado para enfatizar que algo é final e indiscutível."
        },
        {
            question: "If someone asks 'What's the tea?', what do they want to know?",
            options: ["What kind of tea you're drinking.", "What's the gossip or news.", "What time it is.", "What you're eating."],
            answer: "What's the gossip or news.",
            explanation: "'Tea' é gíria para fofoca ou informações interessantes."
        },
        {
            question: "When someone says 'I'm dead' after hearing something funny, what do they mean?",
            options: ["They are actually dead.", "They found it extremely funny.", "They are tired.", "They are confused."],
            answer: "They found it extremely funny.",
            explanation: "'I'm dead' é uma forma exagerada de dizer que algo foi muito engraçado."
        },
        {
            question: "What's a 'flex' in modern slang?",
            options: ["A type of exercise.", "Showing off something you're proud of.", "Being flexible.", "A dance move."],
            answer: "Showing off something you're proud of.",
            explanation: "'Flex' significa se exibir ou mostrar algo de que você se orgulha."
        },
        {
            question: "If someone says 'That slaps!', what do they mean?",
            options: ["It's violent.", "It's really good (usually about music).", "It's confusing.", "It's boring."],
            answer: "It's really good (usually about music).",
            explanation: "'Slaps' é gíria para algo excelente, especialmente música."
        },
        {
            question: "What does 'no cap' mean?",
            options: ["No hat.", "No lies/I'm being serious.", "No problem.", "No cap on the bottle."],
            answer: "No lies/I'm being serious.",
            explanation: "'No cap' significa 'sem mentira' ou 'estou falando sério'."
        },
        {
            question: "When someone says 'That's a vibe', what are they expressing?",
            options: ["They don't like it.", "They like the feeling/atmosphere.", "They're confused.", "They're angry."],
            answer: "They like the feeling/atmosphere.",
            explanation: "'That's a vibe' significa que eles gostam da atmosfera ou sentimento."
        },
        {
            question: "What's the most natural way to ask someone to repeat something?",
            options: ["'What?'", "'Sorry, could you say that again?'", "'Repeat!'", "'I don't understand.'"],
            answer: "'Sorry, could you say that again?'",
            explanation: "Esta é a forma mais educada e natural de pedir para repetir."
        },
        {
            question: "If someone says 'I'm basic', what are they saying about themselves?",
            options: ["They are simple/mainstream in their tastes.", "They are fundamental.", "They are acidic.", "They are elementary."],
            answer: "They are simple/mainstream in their tastes.",
            explanation: "'Basic' descreve alguém com gostos convencionais ou mainstream."
        },
        {
            question: "What does 'spill the tea' mean in American slang?",
            options: ["Accidentally drop your drink.", "Share gossip or secrets.", "Make tea properly.", "Clean up a mess."],
            answer: "Share gossip or secrets.",
            explanation: "'Spill the tea' significa compartilhar fofocas ou segredos."
        },
        {
            question: "If someone says 'I'm pressed' about something, what do they mean?",
            options: ["They are relaxed.", "They are stressed or bothered.", "They are happy.", "They are confused."],
            answer: "They are stressed or bothered.",
            explanation: "'Pressed' significa estar estressado ou incomodado com algo."
        },
        {
            question: "What's the best response to 'How are you holding up?'",
            options: ["I'm 6 feet tall.", "I'm doing okay, thanks for asking.", "I like your shirt.", "It's Tuesday."],
            answer: "I'm doing okay, thanks for asking.",
            explanation: "Esta pergunta se refere a como você está lidando com uma situação difícil."
        },
        {
            question: "When someone says 'That's cap', what do they mean?",
            options: ["That's a hat.", "That's a lie.", "That's expensive.", "That's funny."],
            answer: "That's a lie.",
            explanation: "'Cap' é gíria para mentira, então 'that's cap' significa 'isso é mentira'."
        },
        {
            question: "What does 'bet' mean as a response?",
            options: ["I disagree.", "Okay/Sounds good.", "I'm confused.", "That's expensive."],
            answer: "Okay/Sounds good.",
            explanation: "'Bet' é uma forma casual de dizer 'ok' ou 'combinado'."
        },
        {
            question: "If someone asks 'What's good?', what are they asking?",
            options: ["What tastes good?", "What's happening/How are you?", "What's expensive?", "What's the time?"],
            answer: "What's happening/How are you?",
            explanation: "'What's good?' é uma saudação casual perguntando como você está."
        },
        {
            question: "What does 'I'm living for this' mean?",
            options: ["I'm surviving because of this.", "I absolutely love this.", "I'm working for this.", "I'm dying from this."],
            answer: "I absolutely love this.",
            explanation: "'Living for this' significa que você ama muito algo."
        },
        {
            question: "When someone says 'Say less', what do they mean?",
            options: ["Talk quietly.", "I'm already convinced/I'm in.", "Don't talk to me.", "Speak more clearly."],
            answer: "I'm already convinced/I'm in.",
            explanation: "'Say less' significa que você já está convencido e não precisa de mais persuasão."
        },
        {
            question: "What's a natural way to ask someone to wait a moment?",
            options: ["Stop moving!", "Hold up a sec.", "Don't go anywhere forever.", "Stay there permanently."],
            answer: "Hold up a sec.",
            explanation: "'Hold up a sec' é uma forma casual de pedir para alguém esperar um momento."
        },
        {
            question: "If someone says 'That hits different', what do they mean?",
            options: ["That's violent.", "That feels especially good/special.", "That's strange.", "That's difficult."],
            answer: "That feels especially good/special.",
            explanation: "'Hits different' significa que algo é especialmente bom ou tem um efeito especial."
        },
        {
            question: "What does 'I'm not gonna lie' typically introduce?",
            options: ["A lie.", "An honest opinion or admission.", "A joke.", "A question."],
            answer: "An honest opinion or admission.",
            explanation: "'I'm not gonna lie' é usado para introduzir uma opinião honesta."
        },
        {
            question: "When someone says 'That's a mood', what are they expressing?",
            options: ["That's emotional.", "I totally relate to that feeling.", "That's confusing.", "That's expensive."],
            answer: "I totally relate to that feeling.",
            explanation: "'That's a mood' significa que você se identifica com o sentimento."
        },
        {
            question: "What's the most natural response to 'My bad'?",
            options: ["Your good.", "No worries/It's all good.", "Yes, it is bad.", "I agree."],
            answer: "No worries/It's all good.",
            explanation: "'My bad' é um pedido de desculpas casual, então 'no worries' é uma resposta apropriada."
        },
        {
            question: "If someone says 'I'm shook', what do they mean?",
            options: ["They are cold.", "They are surprised/shocked.", "They are dancing.", "They are angry."],
            answer: "They are surprised/shocked.",
            explanation: "'Shook' significa estar surpreso ou chocado com algo."
        },
        {
            question: "What does 'slide into DMs' mean?",
            options: ["Go down a slide.", "Send a private message.", "Enter a building.", "Delete messages."],
            answer: "Send a private message.",
            explanation: "'Slide into DMs' significa enviar uma mensagem privada para alguém."
        },
        {
            question: "When someone says 'We stan', what do they mean?",
            options: ["We stand up.", "We really support/love someone.", "We're confused.", "We're standing still."],
            answer: "We really support/love someone.",
            explanation: "'Stan' significa apoiar ou amar muito alguém ou algo."
        },
        {
            question: "What's a casual way to say goodbye in American English?",
            options: ["Farewell forever.", "Catch you later.", "Until we meet in heaven.", "Goodbye permanently."],
            answer: "Catch you later.",
            explanation: "'Catch you later' é uma forma casual e amigável de se despedir."
        },
        {
            question: "If someone says 'That's so random', what do they mean?",
            options: ["That's mathematical.", "That's unexpected/odd.", "That's organized.", "That's planned."],
            answer: "That's unexpected/odd.",
            explanation: "'Random' é usado para descrever algo inesperado ou estranho."
        },
        {
            question: "What does 'I'm down' mean when someone suggests an activity?",
            options: ["I'm sad.", "I'm interested/I want to do it.", "I'm lying down.", "I'm not feeling well."],
            answer: "I'm interested/I want to do it.",
            explanation: "'I'm down' significa que você está interessado em fazer algo."
        }
    ];

    // Embaralhar e selecionar apenas as perguntas necessárias
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    questions = shuffled.slice(0, TOTAL_QUESTIONS_TO_ASK);
    currentQuestionIndex = 0;
}

// --- Confetti Animation ---
function createConfetti() {
    confettiContainer.innerHTML = '';
    
    const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f'];
    
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confettiPiece);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 4000);
}

// --- Text-to-Speech Function ---
async function generateSpeech(text) {
    try {
        // Check if audio is already cached
        if (audioCache.has(text)) {
            const cachedAudioUrl = audioCache.get(text);
            
            if (currentAudio) {
                currentAudio.pause();
            }
            
            currentAudio = new Audio(cachedAudioUrl);
            currentAudio.play();
            return;
        }
        
        playAudioButton.disabled = true;
        playAudioButton.textContent = '⏳';
        
        const response = await fetch('/api/tts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text })
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate audio');
        }
        
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Cache the audio URL for future use
        audioCache.set(text, audioUrl);
        
        if (currentAudio) {
            currentAudio.pause();
            URL.revokeObjectURL(currentAudio.src);
        }
        
        currentAudio = new Audio(audioUrl);
        currentAudio.play();
        
        currentAudio.onended = () => {
            playAudioButton.disabled = false;
            playAudioButton.textContent = '🔊';
        };
        
    } catch (error) {
        console.error('Error generating speech:', error);
        playAudioButton.disabled = false;
        playAudioButton.textContent = '🔊';
        // Fallback to browser's speech synthesis if available
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }
}

// --- Event Listeners ---
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
clearScoresButton.addEventListener('click', clearScores);

// ENEM notice close button
closeNoticeButton.addEventListener('click', function() {
    enemNotice.style.display = 'none';
    localStorage.setItem('enemNoticeHidden', 'true');
});

// Audio play button
playAudioButton.addEventListener('click', function() {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
        generateSpeech(currentQuestion.question);
    }
});

// Feedback buttons
thumbsUpButton.addEventListener('click', function() {
    submitFeedback('positive');
});

thumbsDownButton.addEventListener('click', function() {
    submitFeedback('negative');
});

// ENEM Extension Event Listeners
enemExtensionButton.addEventListener('click', function() {
    // Get current student info from main form
    currentStudentName = studentNameInput.value.trim();
    currentStudentEmoji = document.querySelector('.emoji-btn.selected')?.dataset.emoji || '';
    
    startEnemQuiz();
});

enemNextButton.addEventListener('click', nextEnemQuestion);
enemRestartButton.addEventListener('click', restartEnemQuiz);
backToMainButton.addEventListener('click', backToMain);

translateButton.addEventListener('click', translateText);

enemPlayAudioButton.addEventListener('click', function() {
    const currentQuestion = enemQuestions[enemCurrentQuestionIndex];
    if (currentQuestion) {
        generateEnemSpeech(currentQuestion.text);
    }
});

// ENEM Feedback buttons
enemThumbsUp.addEventListener('click', function() {
    submitEnemFeedback('positive');
});

enemThumbsDown.addEventListener('click', function() {
    submitEnemFeedback('negative');
});

// ENEM Menu Event Listeners
if (enemMenuButton) enemMenuButton.addEventListener('click', openEnemMenu);
if (closeEnemMenu) closeEnemMenu.addEventListener('click', closeEnemMenuModal);
if (pauseEnemQuiz) pauseEnemQuiz.addEventListener('click', pauseEnemQuizFunction);
if (restartEnemQuizFromMenu) restartEnemQuizFromMenu.addEventListener('click', confirmRestartEnemQuiz);
if (backToMainFromMenu) backToMainFromMenu.addEventListener('click', confirmBackToMain);

// Normal Quiz Menu Event Listeners
if (normalMenuButton) normalMenuButton.addEventListener('click', openNormalMenu);
if (closeNormalMenu) closeNormalMenu.addEventListener('click', closeNormalMenuModal);
if (pauseNormalQuiz) pauseNormalQuiz.addEventListener('click', pauseNormalQuizFunction);
if (restartNormalQuizFromMenu) restartNormalQuizFromMenu.addEventListener('click', confirmRestartNormalQuiz);
if (backToMainFromNormalMenu) backToMainFromNormalMenu.addEventListener('click', confirmBackToMainFromNormal);

// Close menus when clicking outside
if (enemMenuModal) {
    enemMenuModal.addEventListener('click', function(e) {
        if (e.target === enemMenuModal) {
            closeEnemMenuModal();
        }
    });
}

if (normalMenuModal) {
    normalMenuModal.addEventListener('click', function(e) {
        if (e.target === normalMenuModal) {
            closeNormalMenuModal();
        }
    });
}

// Emoji selection
emojiButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove selection from all buttons
        emojiButtons.forEach(btn => btn.classList.remove('selected'));
        // Add selection to clicked button
        this.classList.add('selected');
        currentStudentEmoji = this.dataset.emoji;
    });
});

// Permitir iniciar com Enter na tela de registro
studentNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        startQuiz();
    }
});

// --- Funções principais ---
function startQuiz() {
    const name = studentNameInput.value.trim();
    if (name === '' || currentStudentEmoji === '') {
        nameError.classList.remove('hidden');
        return;
    }
    
    nameError.classList.add('hidden');
    currentStudentName = name;
    currentScore = 0;
    
    loadQuestions();
    
    // Trocar para tela do quiz
    registrationScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    welcomeMessage.textContent = `${currentStudentEmoji} ${currentStudentName}`;
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Atualizar indicador de progresso
    progressIndicator.textContent = `${currentQuestionIndex + 1}/${TOTAL_QUESTIONS_TO_ASK}`;
    
    // Mostrar pergunta
    questionText.textContent = question.question;
    
    // Limpar explicação anterior
    explanationText.classList.add('hidden');
    explanationText.textContent = '';
    
    // Esconder botão "Próxima"
    nextButton.classList.add('hidden');
    
    // Criar botões de opção
    optionsArea.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsArea.appendChild(button);
    });
    
    // Atualizar pontuação
    scoreDisplay.textContent = currentScore;
}

function selectAnswer(selectedOption, selectedButton) {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;
    
    // Desabilitar todos os botões
    const allButtons = optionsArea.querySelectorAll('button');
    allButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === question.answer) {
            button.classList.add('correct');
        } else if (button === selectedButton && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    // Atualizar pontuação e mostrar confetti se correto
    if (isCorrect) {
        currentScore += 10;
        scoreDisplay.textContent = currentScore;
        createConfetti();
    }
    
    // Mostrar explicação
    explanationText.textContent = question.explanation;
    explanationText.classList.remove('hidden');
    
    // Mostrar botão próxima pergunta
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    // Salvar pontuação
    saveScore(currentStudentName, currentScore, currentStudentEmoji);
    
    // Trocar para tela final
    quizScreen.classList.add('hidden');
    finalScoreScreen.classList.remove('hidden');
    
    // Confetti para pontuação alta (7+ corretas)
    if (currentScore >= 70) {
        createConfetti();
    }
    
    // Mensagem personalizada baseada na pontuação
    let message = '';
    let trophy = '';
    
    if (currentScore >= 90) {
        message = `Excelente, ${currentStudentName}! Você domina o inglês americano conversacional!`;
        trophy = '🏆';
    } else if (currentScore >= 70) {
        message = `Muito bem, ${currentStudentName}! Você tem um bom conhecimento de inglês americano!`;
        trophy = '🥈';
    } else if (currentScore >= 50) {
        message = `Bom trabalho, ${currentStudentName}! Continue praticando!`;
        trophy = '🥉';
    } else {
        message = `Continue estudando, ${currentStudentName}! A prática leva à perfeição!`;
        trophy = '📚';
    }
    
    finalMessage.textContent = `${message} Sua pontuação: ${currentScore}/${TOTAL_QUESTIONS_TO_ASK * 10}`;
    trophyContainer.innerHTML = `<div class="trophy">${trophy}</div>`;
    
    displayLeaderboard();
}

function saveScore(name, score, emoji) {
    let scores = JSON.parse(localStorage.getItem('prismaQuizScores')) || [];
    scores.push({ name: name, score: score, emoji: emoji, date: new Date().toLocaleDateString('pt-BR') });
    
    // Ordenar por pontuação (maior primeiro)
    scores.sort((a, b) => b.score - a.score);
    
    // Manter apenas os top 10
    scores = scores.slice(0, 10);
    
    localStorage.setItem('prismaQuizScores', JSON.stringify(scores));
}

function displayLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('prismaQuizScores')) || [];
    
    leaderboardList.innerHTML = '';
    
    if (scores.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhuma pontuação salva ainda.';
        li.classList.add('no-scores');
        leaderboardList.appendChild(li);
        return;
    }
    
    scores.forEach((scoreData, index) => {
        const li = document.createElement('li');
        const emoji = scoreData.emoji || '😊'; // Fallback for old scores without emoji
        li.innerHTML = `
            <strong>#${index + 1}</strong> 
            ${emoji} ${scoreData.name} - 
            <strong>${scoreData.score}</strong> pontos 
            <small>(${scoreData.date})</small>
        `;
        leaderboardList.appendChild(li);
    });
}

function restartQuiz() {
    // Resetar estado
    currentStudentName = '';
    currentStudentEmoji = '';
    currentScore = 0;
    currentQuestionIndex = 0;
    
    // Clear audio cache to free memory for new quiz
    clearAudioCache();
    
    // Limpar input
    studentNameInput.value = '';
    
    // Remover seleção de emoji
    emojiButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Reset feedback buttons and textarea
    thumbsUpButton.classList.remove('selected');
    thumbsDownButton.classList.remove('selected');
    thumbsUpButton.disabled = false;
    thumbsDownButton.disabled = false;
    writtenFeedback.disabled = false;
    writtenFeedback.value = '';
    feedbackMessage.classList.add('hidden');
    
    // Voltar para tela de registro
    finalScoreScreen.classList.add('hidden');
    registrationScreen.classList.remove('hidden');
    
    // Esconder mensagem de erro se estiver visível
    nameError.classList.add('hidden');
}

// Function to clear audio cache and free memory
function clearAudioCache() {
    // Revoke all cached audio URLs to free memory
    for (const [text, audioUrl] of audioCache) {
        URL.revokeObjectURL(audioUrl);
    }
    audioCache.clear();
}

function clearScores() {
    if (confirm('Tem certeza que deseja limpar todo o ranking?')) {
        localStorage.removeItem('prismaQuizScores');
        displayLeaderboard();
    }
}

// --- Feedback Functions ---
function submitFeedback(type) {
    const writtenComment = writtenFeedback.value.trim();
    
    // Save feedback to localStorage
    let feedback = JSON.parse(localStorage.getItem('quizFeedback')) || [];
    feedback.push({
        type: type,
        comment: writtenComment,
        date: new Date().toLocaleDateString('pt-BR'),
        student: currentStudentName,
        emoji: currentStudentEmoji
    });
    localStorage.setItem('quizFeedback', JSON.stringify(feedback));
    
    // Visual feedback
    thumbsUpButton.classList.remove('selected');
    thumbsDownButton.classList.remove('selected');
    
    if (type === 'positive') {
        thumbsUpButton.classList.add('selected');
        feedbackMessage.textContent = 'Obrigado pelo feedback positivo! 😊';
    } else {
        thumbsDownButton.classList.add('selected');
        feedbackMessage.textContent = 'Obrigado pelo feedback! Vamos melhorar! 💪';
    }
    
    feedbackMessage.classList.remove('hidden');
    
    // Disable buttons and textarea after feedback
    thumbsUpButton.disabled = true;
    thumbsDownButton.disabled = true;
    writtenFeedback.disabled = true;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Check if ENEM notice should be hidden
    if (localStorage.getItem('enemNoticeHidden') === 'true') {
        enemNotice.style.display = 'none';
    }
    
    // Focar no input de nome
    studentNameInput.focus();
});
