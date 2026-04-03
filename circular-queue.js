class CircularQueue {
    constructor() {
        this.items = new Array(15).fill(null); // Max theoretical capacity is 15
        this.maxSize = 3;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        if (this.front === -1) return false;
        // True if next position of rear is front
        return (this.rear + 1) % this.maxSize === this.front;
    }

    isEmpty() { 
        return this.front === -1; 
    }

    enqueue(element) {
        if (this.isFull()) return "Overflow";
        
        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.maxSize;
        }
        
        this.items[this.rear] = element;
        return "Success";
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        
        const val = this.items[this.front];
        this.items[this.front] = null;
        
        if (this.front === this.rear) {
            // Queue is now empty
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.maxSize;
        }
        return val;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.front];
    }

    clear() { 
        this.items.fill(null);
        this.front = -1;
        this.rear = -1;
    }
}

// UI Controllers
document.addEventListener("DOMContentLoaded", () => {
    const queue = new CircularQueue();
    
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
        document.querySelectorAll(".cq-pointer").forEach(el => el.remove());

        const radius = window.innerWidth <= 768 ? 130 : 160; 
        const centerX = window.innerWidth <= 768 ? 150 : 200;
        const centerY = window.innerWidth <= 768 ? 150 : 200;

        // Add Front Pointer
        if (queue.front !== -1) {
            const frontSlot = document.getElementById("slot-" + queue.front);
            if (frontSlot) {
                const fPtr = document.createElement("div");
                fPtr.className = "cq-pointer front-ptr";
                fPtr.textContent = "FRONT";
                
                // Position pointer outside the slot
                const angle = -90 + (360 / queue.maxSize) * queue.front;
                const rad = angle * (Math.PI / 180);
                const ptrRadX = Math.cos(rad) * 45;
                const ptrRadY = Math.sin(rad) * 45;
                
                fPtr.style.left = `calc(50% + ${ptrRadX}px)`;
                fPtr.style.top = `calc(50% + ${ptrRadY}px)`;
                fPtr.style.transform = "translate(-50%, -50%)";
                
                frontSlot.appendChild(fPtr);
            }
        }

        // Add Rear Pointer
        if (queue.rear !== -1) {
            const rearSlot = document.getElementById("slot-" + queue.rear);
            if (rearSlot) {
                const rPtr = document.createElement("div");
                rPtr.className = "cq-pointer rear-ptr";
                rPtr.textContent = "REAR";
                
                // If front and rear are the same, position slightly differently so they don't exactly overlap
                const isSame = queue.front === queue.rear;
                const offset = isSame ? -45 : 45; // If same, REAR goes inward, FRONT goes outward
                
                const angle = -90 + (360 / queue.maxSize) * queue.rear;
                const rad = angle * (Math.PI / 180);
                const ptrRadX = Math.cos(rad) * offset;
                const ptrRadY = Math.sin(rad) * offset;
                
                rPtr.style.left = `calc(50% + ${ptrRadX}px)`;
                rPtr.style.top = `calc(50% + ${ptrRadY}px)`;
                rPtr.style.transform = "translate(-50%, -50%)";
                
                rearSlot.appendChild(rPtr);
            }
        }
    };

    const initSlots = () => {
        queueContainer.innerHTML = "";
        const isMobile = window.innerWidth <= 768;
        const radius = isMobile ? 120 : 160; 
        const centerX = isMobile ? 150 : 200; 
        const centerY = isMobile ? 150 : 200;
        
        for(let i = 0; i < queue.maxSize; i++) {
            const angle = -90 + (360 / queue.maxSize) * i;
            const rad = angle * (Math.PI / 180);
            
            const x = centerX + radius * Math.cos(rad);
            const y = centerY + radius * Math.sin(rad);
            
            const slot = document.createElement("div");
            slot.className = "cq-slot";
            slot.id = "slot-" + i;
            slot.style.left = `${x}px`;
            slot.style.top = `${y}px`;
            slot.style.transform = "translate(-50%, -50%)";
            
            const content = document.createElement("div");
            content.className = "slot-content";
            
            const idx = document.createElement("div");
            idx.className = "cq-slot-index";
            idx.textContent = `[${i}]`;
            
            // Index position inside slightly
            const idxRadius = radius - 40;
            const idxX = centerX + idxRadius * Math.cos(rad) - x;
            const idxY = centerY + idxRadius * Math.sin(rad) - y;
            idx.style.left = `calc(50% + ${idxX}px)`;
            idx.style.top = `calc(50% + ${idxY}px)`;
            idx.style.transform = "translate(-50%, -50%)";
            
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
            showMessage(`Circular Queue Overflow! Cannot enqueue "${val}" because all slots are full.`, "error");
            return;
        }

        queue.enqueue(val);
        const rearIdx = queue.rear;
        
        // Visual Update
        const slotContent = document.querySelector(`#slot-${rearIdx} .slot-content`);
        if (slotContent) {
            slotContent.innerHTML = ""; // clear any lingering element
            const elem = document.createElement("div");
            elem.classList.add("queue-item");
            elem.textContent = val;
            slotContent.appendChild(elem);
        }

        showMessage(`Enqueued "${val}" at index ${rearIdx}.`, "success");
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
            showMessage("Queue Underflow! Cannot dequeue, queue is already empty.", "error");
            return;
        }

        const frontIdx = queue.front;
        const val = queue.dequeue(); // logic updates pointers internally
        
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

        showMessage(`Dequeued "${val}" from index ${frontIdx}.`, "success");
        removePeekHighlight();
    };

    // Peek Operation
    const handlePeek = () => {
        if (queue.isEmpty()) {
            updateInfo("UNDERFLOW", "error");
            showMessage("Cannot peek. Circular Queue is empty.", "error");
            return;
        }

        const val = queue.peek();
        showMessage(`Front element is "${val}" at index ${queue.front}.`, "normal");
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
        showMessage("Circular Queue cleared.", "normal");
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
