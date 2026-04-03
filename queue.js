class VisualQueue {
    constructor() {
        this.items = new Array(15).fill(null); // Max capacity is 15
        this.maxSize = 3;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if (this.isFull()) return "Overflow";
        if (this.front === -1) this.front = 0;
        this.rear++;
        this.items[this.rear] = element;
        return "Success";
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        const val = this.items[this.front];
        this.items[this.front] = null;
        
        if (this.front >= this.rear) {
            // Queue is now empty
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
        }
        return val;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.front];
    }

    isEmpty() { return this.front === -1 || this.front > this.rear; }
    isFull() { return this.rear === this.maxSize - 1; }
    clear() { 
        this.items.fill(null);
        this.front = -1;
        this.rear = -1;
    }
}

// UI Controllers
document.addEventListener("DOMContentLoaded", () => {
    const queue = new VisualQueue();
    
    // DOM Elements
    const maxInput = document.getElementById("max-input");
    const setMaxBtn = document.getElementById("set-max-btn");
    const itemInput = document.getElementById("item-input");
    const enqueueBtn = document.getElementById("enqueue-btn");
    const dequeueBtn = document.getElementById("dequeue-btn");
    const peekBtn = document.getElementById("peek-btn");
    const clearBtn = document.getElementById("clear-btn");
    const messageBox = document.getElementById("message-box");
    
    const maxInfo = document.getElementById("max-info");
    const frontIndexInfo = document.getElementById("front-index");
    const rearIndexInfo = document.getElementById("rear-index");
    const statusInfo = document.getElementById("status-info");
    const queueContainer = document.getElementById("queue-container");

    let isAnimating = false;

    // Utilities
    const showMessage = (msg, type = "normal") => {
        messageBox.textContent = msg;
        messageBox.className = "message-box " + type;
    };

    const updateInfo = (statusText = "Normal", statusType = "normal") => {
        maxInfo.textContent = queue.maxSize;
        frontIndexInfo.textContent = queue.front;
        rearIndexInfo.textContent = queue.rear;
        
        statusInfo.textContent = statusText;
        if (statusType === "error") {
            statusInfo.style.color = "#ff416c";
            statusInfo.style.fontWeight = "bold";
        } else {
            statusInfo.style.color = "#00b09b";
            statusInfo.style.fontWeight = "normal";
        }
        
        // Remove old pointers
        document.querySelectorAll(".queue-pointer").forEach(el => el.remove());

        // Add pointers
        if (queue.front !== -1) {
            const frontSlot = document.getElementById("slot-" + queue.front);
            if (frontSlot) {
                const fPtr = document.createElement("div");
                fPtr.className = "queue-pointer front-ptr";
                fPtr.textContent = "FRONT  ↓";
                frontSlot.appendChild(fPtr);
            }
        }

        if (queue.rear !== -1) {
            const rearSlot = document.getElementById("slot-" + queue.rear);
            if (rearSlot) {
                const rPtr = document.createElement("div");
                rPtr.className = "queue-pointer rear-ptr";
                rPtr.textContent = "↑ REAR";
                rearSlot.appendChild(rPtr);
            }
        }
    };

    const initSlots = () => {
        queueContainer.innerHTML = "";
        for(let i = 0; i < queue.maxSize; i++) {
            const slot = document.createElement("div");
            slot.className = "queue-slot";
            slot.id = "slot-" + i;
            
            const content = document.createElement("div");
            content.className = "slot-content";
            
            const idx = document.createElement("div");
            idx.className = "queue-slot-index";
            idx.textContent = `[${i}]`;
            
            slot.appendChild(content);
            slot.appendChild(idx);
            queueContainer.appendChild(slot);
        }
        updateInfo("Normal");
    };

    // Enqueue Operation
    const handleEnqueue = () => {
        if (isAnimating) return;
        const val = itemInput.value.trim();
        if (!val) {
            showMessage("Please enter a value to enqueue.", "error");
            itemInput.focus();
            return;
        }

        if (queue.isFull()) {
            updateInfo("OVERFLOW", "error");
            showMessage(`Queue Overflow! Cannot enqueue "${val}" because rear has reached max size.`, "error");
            return;
        }

        queue.enqueue(val);
        const rearIdx = queue.rear;
        
        // Visual Update
        const slotContent = document.querySelector(`#slot-${rearIdx} .slot-content`);
        if (slotContent) {
            const elem = document.createElement("div");
            elem.classList.add("queue-item");
            elem.textContent = val;
            slotContent.appendChild(elem);
        }

        showMessage(`Enqueued "${val}" to the queue.`, "success");
        itemInput.value = "";
        itemInput.focus();
        updateInfo("Normal");
        removePeekHighlight();
    };

    // Dequeue Operation
    const handleDequeue = () => {
        if (isAnimating) return;
        if (queue.isEmpty()) {
            updateInfo("UNDERFLOW", "error");
            showMessage("Queue Underflow! Cannot dequeue, queue is empty.", "error");
            return;
        }

        const frontIdx = queue.front;
        const val = queue.dequeue();
        
        // Visual Update
        const slotContent = document.querySelector(`#slot-${frontIdx} .slot-content`);
        if (slotContent) {
            const frontElement = slotContent.firstElementChild;
            if(frontElement) {
                isAnimating = true;
                frontElement.classList.add("dequeuing");
                setTimeout(() => {
                    frontElement.remove();
                    isAnimating = false;
                    updateInfo("Normal");
                }, 450);
            }
        } else {
            updateInfo("Normal");
        }

        showMessage(`Dequeued "${val}" from the queue.`, "success");
        removePeekHighlight();
    };

    // Peek Operation
    const handlePeek = () => {
        if (queue.isEmpty()) {
            updateInfo("UNDERFLOW", "error");
            showMessage("Cannot peek. Queue is empty.", "error");
            return;
        }

        const val = queue.peek();
        showMessage(`Front element is "${val}".`, "normal");
        updateInfo("Normal");
        
        // Highlight front element
        removePeekHighlight();
        const frontIdx = queue.front;
        const slotContent = document.querySelector(`#slot-${frontIdx} .slot-content`);
        if (slotContent) {
            const frontElement = slotContent.firstElementChild;
            if(frontElement) {
                frontElement.classList.add("peeking");
                setTimeout(() => {
                    if(frontElement) frontElement.classList.remove("peeking");
                }, 2000);
            }
        }
    };

    // Clear Operation
    const handleClear = () => {
        if (queue.isEmpty()) {
            showMessage("Queue is already empty.", "normal");
            return;
        }
        queue.clear();
        initSlots();
        showMessage("Queue cleared.", "normal");
        updateInfo("Normal");
        removePeekHighlight();
    };
    
    // Set Max Operation
    const handleSetMax = () => {
        let newMax = parseInt(maxInput.value);
        if(isNaN(newMax) || newMax < 1 || newMax > 15) {
            showMessage("Please enter a valid MAX size between 1 and 15.", "error");
            return;
        }
        queue.maxSize = newMax;
        queue.clear(); 
        initSlots();
        maxInput.value = "";
        showMessage(`MAX (capacity) set to ${newMax}. Queue has been cleared.`, "success");
    };

    const removePeekHighlight = () => {
        document.querySelectorAll('.queue-item').forEach(el => el.classList.remove('peeking'));
    };

    // Event Listeners
    enqueueBtn.addEventListener("click", handleEnqueue);
    dequeueBtn.addEventListener("click", handleDequeue);
    peekBtn.addEventListener("click", handlePeek);
    clearBtn.addEventListener("click", handleClear);
    setMaxBtn.addEventListener("click", handleSetMax);

    itemInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleEnqueue();
        }
    });

    maxInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSetMax();
        }
    });

    // Setup initial grid
    initSlots();
});
