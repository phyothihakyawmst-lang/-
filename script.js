class Stack {
    constructor() {
        this.items = [];
        this.maxSize = 3; // Visual limit default
    }

    push(element) {
        if (this.isFull()) return "Overflow";
        this.items.push(element);
        return "Success";
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() { return this.items.length === 0; }
    isFull() { return this.items.length >= this.maxSize; }
    size() { return this.items.length; }
    clear() { this.items = []; }
}

// UI Controllers
document.addEventListener("DOMContentLoaded", () => {
    const stack = new Stack();
    
    // DOM Elements
    const maxInput = document.getElementById("max-input");
    const setMaxBtn = document.getElementById("set-max-btn");
    const itemInput = document.getElementById("item-input");
    const pushBtn = document.getElementById("push-btn");
    const popBtn = document.getElementById("pop-btn");
    const peekBtn = document.getElementById("peek-btn");
    const clearBtn = document.getElementById("clear-btn");
    const messageBox = document.getElementById("message-box");
    
    const maxInfo = document.getElementById("max-info");
    const topIndexInfo = document.getElementById("top-index");
    const statusInfo = document.getElementById("status-info");
    const stackContainer = document.getElementById("stack-container");

    let isAnimating = false;

    // Utilities
    const showMessage = (msg, type = "normal") => {
        messageBox.textContent = msg;
        messageBox.className = "message-box " + type;
    };

    const updateInfo = (statusText = "Normal", statusType = "normal") => {
        maxInfo.textContent = stack.maxSize;
        topIndexInfo.textContent = stack.size() - 1;
        
        statusInfo.textContent = statusText;
        if (statusType === "error") {
            statusInfo.style.color = "#ff416c";
            statusInfo.style.fontWeight = "bold";
        } else {
            statusInfo.style.color = "#00b09b";
            statusInfo.style.fontWeight = "normal";
        }
        
        // Update TOP pointer indicator class
        document.querySelectorAll(".stack-slot").forEach(el => el.classList.remove("active-top"));
        const topIdx = stack.size() - 1;
        if (topIdx >= 0) {
            const slot = document.getElementById("slot-" + topIdx);
            if (slot) slot.classList.add("active-top");
        }
    };

    const initSlots = () => {
        stackContainer.innerHTML = "";
        // Draw the slots from 0 to maxSize-1
        for(let i = 0; i < stack.maxSize; i++) {
            const slot = document.createElement("div");
            slot.className = "stack-slot";
            slot.id = "slot-" + i;
            
            const content = document.createElement("div");
            content.className = "slot-content";
            
            const idx = document.createElement("div");
            idx.className = "slot-index";
            idx.textContent = `[${i}]`;
            
            slot.appendChild(content);
            slot.appendChild(idx);
            stackContainer.appendChild(slot);
        }
        updateInfo("Normal");
    };

    // Push Operation
    const handlePush = () => {
        if (isAnimating) return;
        const val = itemInput.value.trim();
        if (!val) {
            showMessage("Please enter a value to push.", "error");
            itemInput.focus();
            return;
        }

        if (stack.isFull()) {
            updateInfo("OVERFLOW", "error");
            showMessage(`Stack Overflow! Cannot push "${val}" because stack is full.`, "error");
            return;
        }

        stack.push(val);
        const topIdx = stack.size() - 1;
        
        // Visual Update
        const slotContent = document.querySelector(`#slot-${topIdx} .slot-content`);
        if (slotContent) {
            const elem = document.createElement("div");
            elem.classList.add("stack-item");
            elem.textContent = val;
            slotContent.appendChild(elem);
        }

        showMessage(`Pushed "${val}" onto the stack.`, "success");
        itemInput.value = "";
        itemInput.focus();
        updateInfo("Normal");
        removePeekHighlight();
    };

    // Pop Operation
    const handlePop = () => {
        if (isAnimating) return;
        if (stack.isEmpty()) {
            updateInfo("UNDERFLOW", "error");
            showMessage("Stack Underflow! Cannot pop, stack is empty.", "error");
            return;
        }

        const topIdx = stack.size() - 1;
        const val = stack.pop();
        
        // Visual Update
        const slotContent = document.querySelector(`#slot-${topIdx} .slot-content`);
        if (slotContent) {
            const topElement = slotContent.firstElementChild;
            if(topElement) {
                isAnimating = true;
                topElement.classList.add("popping");
                setTimeout(() => {
                    topElement.remove();
                    isAnimating = false;
                }, 450);
            }
        }

        showMessage(`Popped "${val}" from the stack.`, "success");
        updateInfo("Normal");
        removePeekHighlight();
    };

    // Peek Operation
    const handlePeek = () => {
        if (stack.isEmpty()) {
            updateInfo("UNDERFLOW", "error");
            showMessage("Cannot peek. Stack is empty.", "error");
            return;
        }

        const val = stack.peek();
        showMessage(`Top element is "${val}".`, "normal");
        updateInfo("Normal");
        
        // Highlight top element
        removePeekHighlight();
        const topIdx = stack.size() - 1;
        const slotContent = document.querySelector(`#slot-${topIdx} .slot-content`);
        if (slotContent) {
            const topElement = slotContent.firstElementChild;
            if(topElement) {
                topElement.classList.add("peeking");
                setTimeout(() => {
                    if(topElement) topElement.classList.remove("peeking");
                }, 2000);
            }
        }
    };

    // Clear Operation
    const handleClear = () => {
        if (stack.isEmpty()) {
            showMessage("Stack is already empty.", "normal");
            return;
        }
        stack.clear();
        initSlots();
        showMessage("Stack cleared.", "normal");
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
        stack.maxSize = newMax;
        stack.clear(); // Clear existing stack items
        initSlots();
        maxInput.value = "";
        showMessage(`MAX (capacity) set to ${newMax}. Stack has been cleared.`, "success");
    };

    const removePeekHighlight = () => {
        document.querySelectorAll('.stack-item').forEach(el => el.classList.remove('peeking'));
    };

    // Event Listeners
    pushBtn.addEventListener("click", handlePush);
    popBtn.addEventListener("click", handlePop);
    peekBtn.addEventListener("click", handlePeek);
    clearBtn.addEventListener("click", handleClear);
    setMaxBtn.addEventListener("click", handleSetMax);

    itemInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handlePush();
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
