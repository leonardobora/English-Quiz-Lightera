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

// Variáveis do estado do jogo
let currentStudentName = '';
let currentStudentEmoji = '';
let currentScore = 0;
let currentQuestionIndex = 0;
let questions = [];
let currentAudio = null;
const TOTAL_QUESTIONS_TO_ASK = 10;

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
