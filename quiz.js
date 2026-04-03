const questions = [
  {
    "topic": "Stack",
    "difficulty": "Basic",
    "question": "Removing an element from a stack is known as:",
    "options": [
      "Pop",
      "Delete",
      "Dequeue",
      "Push"
    ],
    "answer": 0
  },
  {
    "topic": "Stack",
    "difficulty": "Basic",
    "question": "Given an empty Stack S. You perform:<br><code>S.push(23)</code><br><code>S.push(86)</code><br><code>S.pop()</code><br>What is now at the top of the Stack?",
    "options": [
      "Error",
      "23",
      "86",
      "Empty"
    ],
    "answer": 1
  },
  {
    "topic": "Stack",
    "difficulty": "Basic",
    "question": "Given an empty Stack S. You perform:<br><code>S.push(38)</code><br><code>S.push(84)</code><br><code>S.pop()</code><br>What is now at the top of the Stack?",
    "options": [
      "84",
      "38",
      "Empty",
      "Error"
    ],
    "answer": 1
  },
  {
    "topic": "Stack",
    "difficulty": "Basic",
    "question": "Removing an element from a stack is known as:",
    "options": [
      "Push",
      "Pop",
      "Dequeue",
      "Delete"
    ],
    "answer": 1
  },
  {
    "topic": "Stack",
    "difficulty": "Basic",
    "question": "Given an empty Stack S. You perform:<br><code>S.push(30)</code><br><code>S.push(57)</code><br><code>S.pop()</code><br>What is now at the top of the Stack?",
    "options": [
      "30",
      "Empty",
      "57",
      "Error"
    ],
    "answer": 0
  },
  {
    "topic": "Stack",
    "difficulty": "Intermediate",
    "question": "Which of the following is an algorithm heavily reliant on Stacks?",
    "options": [
      "Selection Sort",
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "Binary Search"
    ],
    "answer": 2
  },
  {
    "topic": "Stack",
    "difficulty": "Intermediate",
    "question": "Which of the following is an algorithm heavily reliant on Stacks?",
    "options": [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Binary Search",
      "Selection Sort"
    ],
    "answer": 0
  },
  {
    "topic": "Stack",
    "difficulty": "Intermediate",
    "question": "In evaluating arithmetic expressions, what notation effectively uses a Stack?",
    "options": [
      "Polynomial notation",
      "Postfix (Reverse Polish)",
      "Prefix",
      "Infix"
    ],
    "answer": 1
  },
  {
    "topic": "Stack",
    "difficulty": "Intermediate",
    "question": "In evaluating arithmetic expressions, what notation effectively uses a Stack?",
    "options": [
      "Postfix (Reverse Polish)",
      "Prefix",
      "Infix",
      "Polynomial notation"
    ],
    "answer": 0
  },
  {
    "topic": "Stack",
    "difficulty": "Intermediate",
    "question": "Which of the following is an algorithm heavily reliant on Stacks?",
    "options": [
      "Breadth-First Search (BFS)",
      "Binary Search",
      "Depth-First Search (DFS)",
      "Selection Sort"
    ],
    "answer": 2
  },
  {
    "topic": "Stack",
    "difficulty": "Advanced",
    "question": "Predict the top element after executing this logic on an empty Stack S:<br><pre><code>for(i=3; i<6; i++):\n  S.push(i)\n  S.push(i * 2)\n  S.pop()\nS.push(S.pop() + 1)</code></pre>",
    "options": [
      "5",
      "6",
      "12",
      "7"
    ],
    "answer": 1
  },
  {
    "topic": "Stack",
    "difficulty": "Advanced",
    "question": "Predict the top element after executing this logic on an empty Stack S:<br><pre><code>for(i=5; i<8; i++):\n  S.push(i)\n  S.push(i * 2)\n  S.pop()\nS.push(S.pop() + 1)</code></pre>",
    "options": [
      "8",
      "7",
      "16",
      "9"
    ],
    "answer": 0
  },
  {
    "topic": "Stack",
    "difficulty": "Advanced",
    "question": "Predict the top element after executing this logic on an empty Stack S:<br><pre><code>for(i=3; i<6; i++):\n  S.push(i)\n  S.push(i * 2)\n  S.pop()\nS.push(S.pop() + 1)</code></pre>",
    "options": [
      "12",
      "5",
      "6",
      "7"
    ],
    "answer": 2
  },
  {
    "topic": "Stack",
    "difficulty": "Advanced",
    "question": "Which data property makes a stack ideal for balancing parentheses in compiler design?",
    "options": [
      "Its ability to defer resolving the most recently opened bracket until matched.",
      "Its O(1) random access property.",
      "Its FIFO tracking logic.",
      "Its dynamic array resizing capability."
    ],
    "answer": 0
  },
  {
    "topic": "Stack",
    "difficulty": "Advanced",
    "question": "Predict the top element after executing this logic on an empty Stack S:<br><pre><code>for(i=2; i<5; i++):\n  S.push(i)\n  S.push(i * 2)\n  S.pop()\nS.push(S.pop() + 1)</code></pre>",
    "options": [
      "4",
      "10",
      "5",
      "6"
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Basic",
    "question": "In a standard Queue, from where are elements removed?",
    "options": [
      "Rear",
      "Top",
      "Front (Head)",
      "Bottom"
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Basic",
    "question": "In a standard Queue, from where are elements removed?",
    "options": [
      "Rear",
      "Bottom",
      "Front (Head)",
      "Top"
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Basic",
    "question": "What logical principle does a linear Queue follow?",
    "options": [
      "Random Access",
      "LIFO",
      "FILO",
      "FIFO (First-In, First-Out)"
    ],
    "answer": 3
  },
  {
    "topic": "Queue",
    "difficulty": "Basic",
    "question": "Given an empty Queue Q. You perform:<br><code>Q.enqueue(20)</code><br><code>Q.enqueue(52)</code><br><code>Q.dequeue()</code><br>What element is currently at the front of the Queue?",
    "options": [
      "Empty",
      "52",
      "Error",
      "20"
    ],
    "answer": 1
  },
  {
    "topic": "Queue",
    "difficulty": "Basic",
    "question": "In a standard Queue, from where are elements removed?",
    "options": [
      "Bottom",
      "Top",
      "Rear",
      "Front (Head)"
    ],
    "answer": 3
  },
  {
    "topic": "Queue",
    "difficulty": "Intermediate",
    "question": "Trace the following operations on an empty Queue Q:<br><code>Q.enqueue(63)</code><br><code>Q.enqueue(24)</code><br><code>Q.enqueue(25)</code><br><code>Q.dequeue()</code><br><code>Q.enqueue(85)</code><br>What is the front element now?",
    "options": [
      "23",
      "62",
      "24",
      "83"
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Intermediate",
    "question": "Trace the following operations on an empty Queue Q:<br><code>Q.enqueue(94)</code><br><code>Q.dequeue()</code><br><code>Q.enqueue(64)</code><br><code>Q.dequeue()</code><br><code>Q.enqueue(53)</code><br>What is the front element now?",
    "options": [
      "11",
      "32",
      "53",
      "50"
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Intermediate",
    "question": "Consider a linear queue using an array. After repeatedly enqueueing and dequeueing elements until the 'rear' pointer reaches the maximum index, what problem occurs?",
    "options": [
      "Memory Leak: RAM is continuously consumed.",
      "Underflow: The queue prematurely empties.",
      "False Overflow: Cannot enqueue even if there are empty spaces at the front.",
      "Segmentation Fault."
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Intermediate",
    "question": "Consider a linear queue using an array. After repeatedly enqueueing and dequeueing elements until the 'rear' pointer reaches the maximum index, what problem occurs?",
    "options": [
      "Memory Leak: RAM is continuously consumed.",
      "Underflow: The queue prematurely empties.",
      "Segmentation Fault.",
      "False Overflow: Cannot enqueue even if there are empty spaces at the front."
    ],
    "answer": 3
  },
  {
    "topic": "Queue",
    "difficulty": "Intermediate",
    "question": "Consider a linear queue using an array. After repeatedly enqueueing and dequeueing elements until the 'rear' pointer reaches the maximum index, what problem occurs?",
    "options": [
      "False Overflow: Cannot enqueue even if there are empty spaces at the front.",
      "Segmentation Fault.",
      "Memory Leak: RAM is continuously consumed.",
      "Underflow: The queue prematurely empties."
    ],
    "answer": 0
  },
  {
    "topic": "Queue",
    "difficulty": "Advanced",
    "question": "An array-based Linear Queue of size 5 starts with `front = -1`, `rear = -1`. We Enqueue 3 items, Dequeue 2 items, Enqueue 2 items. What are the current values of `front` and `rear`?",
    "options": [
      "front = 2, rear = 3",
      "front = 2, rear = 4",
      "front = 1, rear = 5",
      "front = 0, rear = 4"
    ],
    "answer": 1
  },
  {
    "topic": "Queue",
    "difficulty": "Advanced",
    "question": "If you implement a Queue using two Stacks (S1 and S2), what is the worst-case time complexity of the Dequeue operation?",
    "options": [
      "O(1) - it involves just one pop.",
      "O(log N) - binary tree shifting is used.",
      "O(N^2) - due to nested loops.",
      "O(N) - when elements need to be transferred from S1 to S2."
    ],
    "answer": 3
  },
  {
    "topic": "Queue",
    "difficulty": "Advanced",
    "question": "If you implement a Queue using two Stacks (S1 and S2), what is the worst-case time complexity of the Dequeue operation?",
    "options": [
      "O(1) - it involves just one pop.",
      "O(N^2) - due to nested loops.",
      "O(N) - when elements need to be transferred from S1 to S2.",
      "O(log N) - binary tree shifting is used."
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Advanced",
    "question": "An array-based Linear Queue of size 5 starts with `front = -1`, `rear = -1`. We Enqueue 3 items, Dequeue 2 items, Enqueue 2 items. What are the current values of `front` and `rear`?",
    "options": [
      "front = 2, rear = 3",
      "front = 0, rear = 4",
      "front = 2, rear = 4",
      "front = 1, rear = 5"
    ],
    "answer": 2
  },
  {
    "topic": "Queue",
    "difficulty": "Advanced",
    "question": "An array-based Linear Queue of size 5 starts with `front = -1`, `rear = -1`. We Enqueue 3 items, Dequeue 2 items, Enqueue 2 items. What are the current values of `front` and `rear`?",
    "options": [
      "front = 2, rear = 4",
      "front = 0, rear = 4",
      "front = 1, rear = 5",
      "front = 2, rear = 3"
    ],
    "answer": 0
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Basic",
    "question": "Why was the Circular Queue invented?",
    "options": [
      "To perform random access faster.",
      "To use LIFO efficiently.",
      "To solve the 'False Overflow' problem in linear array queues.",
      "To reduce Time Complexity to O(1)."
    ],
    "answer": 2
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Basic",
    "question": "In a Circular Queue of size MAX, if `rear == MAX - 1`, what will the `rear` become on the next Enqueue (assuming it's not full)?",
    "options": [
      "-1",
      "0",
      "MAX + 1",
      "MAX"
    ],
    "answer": 1
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Basic",
    "question": "What is another term for a Circular Queue?",
    "options": [
      "Ring Buffer",
      "Loop Queue",
      "Linked List",
      "Circular Stack"
    ],
    "answer": 0
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Basic",
    "question": "In a Circular Queue of size MAX, if `rear == MAX - 1`, what will the `rear` become on the next Enqueue (assuming it's not full)?",
    "options": [
      "-1",
      "MAX + 1",
      "MAX",
      "0"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Basic",
    "question": "What mathematical operator is critical for Circular Queues?",
    "options": [
      "Bitwise XOR",
      "Modulo (%)",
      "Division (/)",
      "Power (^)"
    ],
    "answer": 1
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Intermediate",
    "question": "In a Circular Queue, when does `front` get reset to -1?",
    "options": [
      "When the last element is dequeued, making the queue completely empty.",
      "When `rear` wraps around to 0.",
      "It never gets reset, it only increments.",
      "When `front` reaches the end of the array (N-1)."
    ],
    "answer": 0
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Intermediate",
    "question": "In a Circular Queue of size N, what is the standard condition to check if it is FULL?",
    "options": [
      "rear == N - 1",
      "front == -1 && rear == N - 1",
      "front == (rear + 1) % N",
      "(rear + 1) % N == front"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Intermediate",
    "question": "In a Circular Queue of size N, what is the standard condition to check if it is FULL?",
    "options": [
      "front == -1 && rear == N - 1",
      "rear == N - 1",
      "front == (rear + 1) % N",
      "(rear + 1) % N == front"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Intermediate",
    "question": "In a Circular Queue, when does `front` get reset to -1?",
    "options": [
      "It never gets reset, it only increments.",
      "When `rear` wraps around to 0.",
      "When the last element is dequeued, making the queue completely empty.",
      "When `front` reaches the end of the array (N-1)."
    ],
    "answer": 2
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Intermediate",
    "question": "In a Circular Queue, when does `front` get reset to -1?",
    "options": [
      "When `rear` wraps around to 0.",
      "When the last element is dequeued, making the queue completely empty.",
      "When `front` reaches the end of the array (N-1).",
      "It never gets reset, it only increments."
    ],
    "answer": 1
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Advanced",
    "question": "Given an empty Circular Queue `CQ` with MAX = 6, `front = -1`, `rear = -1`.<br>Operations:<br>1. Enqueue 4 items.<br>2. Dequeue 2 items.<br>3. Enqueue 3 items.<br>What is the final state of `front` and `rear` pointers?",
    "options": [
      "front = 3, rear = 0",
      "front = 2, rear = 1",
      "front = 2, rear = 5",
      "front = 2, rear = 0"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Advanced",
    "question": "Given an empty Circular Queue `CQ` with MAX = 4, `front = -1`, `rear = -1`.<br>Operations:<br>1. Enqueue 4 items.<br>2. Dequeue 2 items.<br>3. Enqueue 3 items.<br>What is the final state of `front` and `rear` pointers?",
    "options": [
      "front = 2, rear = 2",
      "front = 2, rear = 0",
      "front = 3, rear = 1",
      "front = 2, rear = 1"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Advanced",
    "question": "Given an empty Circular Queue `CQ` with MAX = 5, `front = -1`, `rear = -1`.<br>Operations:<br>1. Enqueue 4 items.<br>2. Dequeue 2 items.<br>3. Enqueue 3 items.<br>What is the final state of `front` and `rear` pointers?",
    "options": [
      "front = 2, rear = 2",
      "front = 3, rear = 1",
      "front = 2, rear = 0",
      "front = 2, rear = 1"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Advanced",
    "question": "Given an empty Circular Queue `CQ` with MAX = 5, `front = -1`, `rear = -1`.<br>Operations:<br>1. Enqueue 4 items.<br>2. Dequeue 2 items.<br>3. Enqueue 3 items.<br>What is the final state of `front` and `rear` pointers?",
    "options": [
      "front = 2, rear = 2",
      "front = 2, rear = 0",
      "front = 3, rear = 1",
      "front = 2, rear = 1"
    ],
    "answer": 3
  },
  {
    "topic": "Circular Queue",
    "difficulty": "Advanced",
    "question": "Given an empty Circular Queue `CQ` with MAX = 5, `front = -1`, `rear = -1`.<br>Operations:<br>1. Enqueue 4 items.<br>2. Dequeue 2 items.<br>3. Enqueue 3 items.<br>What is the final state of `front` and `rear` pointers?",
    "options": [
      "front = 2, rear = 1",
      "front = 2, rear = 2",
      "front = 2, rear = 0",
      "front = 3, rear = 1"
    ],
    "answer": 0
  }
];


let currentQuestionIndex = 0;
let score = 0;
let filteredQuestions = [];

const setupContainer = document.getElementById("setup-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

const topicSelect = document.getElementById("topic-select");
const difficultySelect = document.getElementById("difficulty-select");
const startBtn = document.getElementById("start-btn");

const questionText = document.getElementById("question-text");
const optionsSection = document.getElementById("options");
const questionCountText = document.getElementById("question-count");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const finalScoreText = document.getElementById("final-score");
const resultMessageText = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const questionBadge = document.getElementById("question-badge");

startBtn.addEventListener("click", () => {
    const topic = topicSelect.value;
    const diff = difficultySelect.value;
    
    // Filter questions
    filteredQuestions = questions.filter(q => {
        const matchTopic = (topic === "All") || (q.topic === topic);
        const matchDiff = (diff === "All") || (q.difficulty === diff);
        return matchTopic && matchDiff;
    });
    
    // Shuffle filtered questions
    filteredQuestions.sort(() => Math.random() - 0.5);
    
    // Fallback if empty
    if(filteredQuestions.length === 0) filteredQuestions = questions;
    
    // Limit to 20 questions max per quiz session, or actual length
    filteredQuestions = filteredQuestions.slice(0, Math.min(20, filteredQuestions.length));
    
    // Start Quiz
    setupContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    
    loadQuestion();
});

function loadQuestion() {
    // Reset state
    nextBtn.classList.add("hidden");
    optionsSection.innerHTML = "";
    optionsSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
    
    const currentQ = filteredQuestions[currentQuestionIndex];
    questionText.innerHTML = currentQ.question;
    questionCountText.textContent = `Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}`;
    scoreText.textContent = `Score: ${score}`;
    
    let badgeColor = "var(--primary)";
    if(currentQ.difficulty === "Intermediate") badgeColor = "#f39c12";
    if(currentQ.difficulty === "Advanced") badgeColor = "var(--danger)";
    
    if (questionBadge) {
        questionBadge.style.background = badgeColor;
        questionBadge.textContent = `${currentQ.difficulty} | ${currentQ.topic}`;
    }
    
    currentQ.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span>${option}</span><span class="option-icon"></span>`;
        btn.onclick = () => selectAnswer(index, btn);
        optionsSection.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, selectedBtn) {
    // Disable all options
    const allOptions = optionsSection.querySelectorAll(".option-btn");
    allOptions.forEach(btn => btn.disabled = true);
    
    const currentQ = filteredQuestions[currentQuestionIndex];
    
    if (selectedIndex === currentQ.answer) {
        selectedBtn.classList.add("correct");
        selectedBtn.querySelector(".option-icon").textContent = "✔️";
        score++;
        scoreText.textContent = `Score: ${score}`;
    } else {
        selectedBtn.classList.add("wrong");
        selectedBtn.querySelector(".option-icon").textContent = "❌";
        
        // Highlight correct answer
        allOptions[currentQ.answer].classList.add("correct");
        allOptions[currentQ.answer].querySelector(".option-icon").textContent = "✔️";
    }
    
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < filteredQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    
    finalScoreText.textContent = `${score}/${filteredQuestions.length}`;
    
    let message = "";
    let percentage = score / filteredQuestions.length;
    if (percentage === 1) {
        message = "Perfect score! You are a Data Structures master! 🏆";
    } else if (percentage >= 0.7) {
        message = "Great job! You have a solid grasp! 👍";
    } else {
        message = "Keep learning! Give the theory boxes another read and try again! 📚";
    }
    resultMessageText.textContent = message;
}

restartBtn.addEventListener("click", () => {
    resultContainer.classList.add("hidden");
    setupContainer.classList.remove("hidden");
    
    // Reset to defaults
    topicSelect.value = "All";
    difficultySelect.value = "All";
});

// Initialize by making sure setup is shown
document.addEventListener("DOMContentLoaded", () => {
    setupContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");
});
