class CircularQueue {
    constructor() {
        this.items = new Array(15).fill(null);
        this.maxSize = 8; // Default to 8 to match the user's image
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        if (this.front === -1) return false;
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
    const svg = document.getElementById("cq-svg");

    const showMessage = (msg, type = "normal") => {
        messageBox.textContent = msg;
        messageBox.className = "message-box " + type;
    };

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const describeArc = (x, y, radius, startAngle, endAngle) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    };

    const renderQueue = () => {
        svg.innerHTML = "";
        const size = queue.maxSize;
        const cx = 200, cy = 200;
        const outerR = 180, innerR = 100;
        const angleStep = 360 / size;

        for (let i = 0; i < size; i++) {
            const startAngle = i * angleStep;
            const endAngle = (i + 1) * angleStep;

            // Generate Donut Segment Path
            const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
            const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
            const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
            const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);

            const pathData = [
                "M", outerStart.x, outerStart.y,
                "A", outerR, outerR, 0, 0, 1, outerEnd.x, outerEnd.y,
                "L", innerEnd.x, innerEnd.y,
                "A", innerR, innerR, 0, 0, 0, innerStart.x, innerStart.y,
                "Z"
            ].join(" ");

            const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathData);
            path.setAttribute("class", "cq-segment" + (queue.items[i] !== null ? " occupied" : ""));
            path.id = `segment-${i}`;
            
            // Text for item value
            const midAngle = startAngle + angleStep / 2;
            const textR = (outerR + innerR) / 2;
            const textPos = polarToCartesian(cx, cy, textR, midAngle);
            
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", textPos.x);
            text.setAttribute("y", textPos.y);
            text.setAttribute("class", "cq-segment-text");
            text.textContent = queue.items[i] || "";

            // Index Label (moved slightly inward if at the very bottom)
            const indexR = outerR + 18;
            const indexPos = polarToCartesian(cx, cy, indexR, midAngle);
            const indexText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            indexText.setAttribute("x", indexPos.x);
            indexText.setAttribute("y", indexPos.y);
            indexText.setAttribute("class", "cq-segment-index");
            indexText.textContent = i;

            g.appendChild(path);
            g.appendChild(text);
            g.appendChild(indexText);
            svg.appendChild(g);
        }

        renderPointers();
        updateStats();
    };

    const renderPointers = () => {
        const cx = 200, cy = 200;
        const innerR = 100;
        const angleStep = 360 / queue.maxSize;

        const drawPointer = (index, label, className) => {
            if (index === -1) return;
            const angle = (index * angleStep) + (angleStep / 2);
            
            // Line from center
            const start = polarToCartesian(cx, cy, 0, angle);
            const limit = polarToCartesian(cx, cy, innerR - 10, angle);
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", cx);
            line.setAttribute("y1", cy);
            line.setAttribute("x2", limit.x);
            line.setAttribute("y2", limit.y);
            line.setAttribute("class", `${className}-line`);
            svg.appendChild(line);

            // Label near the inner circle
            const tPos = polarToCartesian(cx, cy, innerR - 35, angle);
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", tPos.x);
            text.setAttribute("y", tPos.y);
            text.setAttribute("class", `cq-ptr-label ${className}-text`);
            text.setAttribute("text-anchor", "middle");
            text.textContent = label;
            svg.appendChild(text);
        };

        if (queue.front === queue.rear && queue.front !== -1) {
            drawPointer(queue.front, "F & R", "front-ptr");
        } else {
            drawPointer(queue.front, "FRONT", "front-ptr");
            drawPointer(queue.rear, "REAR", "rear-ptr");
        }
    };

    const updateStats = (status = "Normal", isError = false) => {
        maxInfo.textContent = queue.maxSize;
        frontIndexInfo.textContent = queue.front;
        rearIndexInfo.textContent = queue.rear;
        statusInfo.textContent = status;
        statusInfo.style.color = isError ? "var(--danger)" : "#00b09b";
    };

    const handleEnqueue = () => {
        const val = itemInput.value.trim();
        if (!val) return showMessage("Enter a value!", "error");
        
        const result = queue.enqueue(val);
        if (result === "Overflow") {
            updateStats("OVERFLOW", true);
            return showMessage("Queue Overflow!", "error");
        }

        renderQueue();
        const seg = document.getElementById(`segment-${queue.rear}`);
        seg.classList.add("animate-enqueue");
        
        showMessage(`Enqueued "${val}" at index ${queue.rear}`, "success");
        itemInput.value = "";
        itemInput.focus();
    };

    const handleDequeue = () => {
        if (queue.isEmpty()) {
            updateStats("UNDERFLOW", true);
            return showMessage("Queue Underflow!", "error");
        }
        
        const f = queue.front;
        const val = queue.dequeue();
        renderQueue();
        showMessage(`Dequeued "${val}" from index ${f}`, "success");
    };

    const handlePeek = () => {
        if (queue.isEmpty()) {
            updateStats("UNDERFLOW", true);
            return showMessage("Cannot peek. Circular Queue is empty.", "error");
        }

        const val = queue.peek();
        showMessage(`Front element is "${val}" at index ${queue.front}.`, "normal");
        
        // Visual Highlight: Flash the front segment
        const frontSeg = document.getElementById(`segment-${queue.front}`);
        if(frontSeg) {
            frontSeg.style.filter = "brightness(1.5)";
            setTimeout(() => {
                frontSeg.style.filter = "";
            }, 1000);
        }
    };

    const handleSetMax = () => {
        let val = parseInt(maxInput.value);
        if (isNaN(val) || val < 2 || val > 15) return showMessage("Size must be 2-15", "error");
        queue.maxSize = val;
        queue.clear();
        renderQueue();
        maxInput.value = "";
        showMessage(`MAX set to ${val}`, "success");
    };

    const handleClear = () => {
        queue.clear();
        renderQueue();
        showMessage("Queue cleared", "normal");
    };

    enqueueBtn.addEventListener("click", handleEnqueue);
    dequeueBtn.addEventListener("click", handleDequeue);
    peekBtn.addEventListener("click", handlePeek);
    setMaxBtn.addEventListener("click", handleSetMax);
    clearBtn.addEventListener("click", handleClear);
    
    itemInput.addEventListener("keydown", e => e.key === "Enter" && handleEnqueue());
    maxInput.addEventListener("keydown", e => e.key === "Enter" && handleSetMax());

    renderQueue();
});
