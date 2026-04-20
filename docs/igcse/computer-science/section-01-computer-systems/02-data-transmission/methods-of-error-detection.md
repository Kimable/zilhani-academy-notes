---
title: Methods of error detection
sidebar_position: 2
---



# **⚠️ 1\. Why Error Detection is Needed**

## **📖 Definition:**

**Error detection** is the process of identifying whether data has been corrupted during transmission or entry.

## **🔍 Why errors occur**

When data is transmitted, it can be affected by **interference (noise)** in the communication channel.

### **🚨 Types of errors:**

* **Data loss** → bits missing  
* **Data gain** → extra bits added  
* **Data change** → bits altered (e.g. 0 → 1\)

### **📌 Causes:**

* Electrical interference  
* Weak signal  
* Network congestion  
* Hardware faults

### **📌 Example:**

Original data: `1011001`  
Received data: `1010001` → ❌ bit changed

### **📝 Exam Tip:**

Always mention:

* **interference/noise**  
* **data loss, gain, or change**

# **🔢 2\. Methods of Error Detection**

# **✅ A. Parity Check**

## **📖 Definition:**

A method where an extra bit (**parity bit**) is added to ensure the total number of 1s is **odd or even**.

## **🔹 Types of Parity**

### **1\. Even Parity**

* Total number of 1s (including parity bit) must be **even**

### **2\. Odd Parity**

* Total number of 1s must be **odd**

## **🔧 How it Works (Step-by-Step)**

1. Count number of 1s in data  
2. Add parity bit:  
   * Even parity → make total even  
   * Odd parity → make total odd  
3. At receiver:  
   * Count 1s again  
   * If incorrect → error detected

### **📌 Example (Even Parity):**

Data: `1011001` → 4 ones (already even)  
Parity bit \= `0`

Sent: `10110010`

If received as `10110011` → ❌ error detected

## **📦 Parity Byte**

* Used when sending **multiple bytes**  
* Each byte gets its own parity bit

## **📊 Parity Block Check (2D Parity)**

* Data arranged in a table  
* Parity added:  
  * Horizontally (rows)  
  * Vertically (columns)

### **✅ Advantage:**

* More accurate than simple parity  
* Can locate exact error position

## **✔️ Advantages:**

* Simple  
* Quick

## **❌ Disadvantages:**

* Cannot detect all errors (e.g. two-bit errors)  
* Cannot correct errors

### **📝 Exam Tip:**

Mention:

* parity bit  
* odd/even  
* counting 1s

# **➕ B. Checksum**

## **📖 Definition:**

A value calculated from data and sent with it to detect errors.

## **🔧 Process:**

### **Sender:**

1. Data split into blocks  
2. Blocks are added together  
3. Result \= **checksum**  
4. Checksum sent with data

### **Receiver:**

1. Add received data blocks  
2. Add checksum  
3. Compare with expected value

### **📌 Example:**

Data blocks:

1010  
1100

Sum \= `10110` (example)

Checksum sent with data.

If result differs at receiver → ❌ error detected

## **✔️ Advantages:**

* More reliable than parity  
* Detects more types of errors

## **❌ Disadvantages:**

* More complex  
* Still cannot guarantee detection of all errors

### **📝 Exam Tip:**

Always include:

* adding data  
* sending checksum  
* comparison at receiver

# **🔁 C. Echo Check**

## **📖 Definition:**

Data is sent back to the sender to verify accuracy.

## **🔧 Process:**

1. Sender sends data  
2. Receiver sends **exact copy back**  
3. Sender compares:  
   * If identical → ✔ correct  
   * If different → ❌ error → resend

### **📌 Example:**

Sent: `1101`  
Returned: `1101` → ✔ correct

Returned: `1001` → ❌ error

## **✔️ Advantages:**

* Very accurate  
* Simple to understand

## **❌ Disadvantages:**

* Doubles transmission time  
* Uses more bandwidth

### **📝 Exam Tip:**

Key phrase:  
“**Data is sent back and compared with original**”

# **🔢 3\. Check Digit (Data Entry Errors)**

## **📖 Definition:**

A **digit added to a number** to detect errors during manual input.

## **🔧 How it Works:**

* Calculated using a formula  
* Added to end of number  
* When entered:  
  * Recalculated and checked

## **📌 Examples:**

### **📚 ISBN (International Standard Book Number)**

Used for books

### **🛒 Barcodes**

Used in shops

### **📌 Example:**

Number: `12345`  
Check digit calculated → `6`  
Final number: `123456`

If entered incorrectly → system detects mismatch

**✔️ Advantages:**

* Detects human input errors  
* Simple and effective

## **❌ Disadvantages:**

* Cannot detect all errors  
* Does not correct errors

### **📝 Exam Tip:**

Mention:

* used in **ISBN and barcodes**  
* detects **input errors**

# **🔁 4\. Automatic Repeat Query (ARQ)**

## **📖 Definition:**

A method where the receiver requests retransmission if errors are detected.

## **🔧 How ARQ Works**

### **Step-by-Step:**

1. Sender sends data  
2. Receiver checks for errors  
3. Receiver sends:  
   * **ACK (Acknowledgement)** → data correct  
   * **NACK (Negative Acknowledgement)** → error found  
4. If NACK → sender resends data

## **⏱️ Timeout**

* If no response is received within a certain time:  
  → sender **resends data automatically**

### **📌 Example:**

* Data sent  
* No reply → timeout → resend  
* Error detected → NACK → resend

## **✔️ Advantages:**

* Ensures data accuracy  
* Reliable

## **❌ Disadvantages:**

* Slower (due to retransmission)  
* Uses more bandwidth

### **📝 Exam Tip:**

Include:

* ACK / NACK  
* retransmission  
* timeout

# **📊 Summary Table**

| Method | How it Works | Pros | Cons |
| ----- | ----- | ----- | ----- |
| Parity Check | Counts 1s | Simple | Not very reliable |
| Checksum | Adds data blocks | More accurate | More complex |
| Echo Check | Sends data back | Very accurate | Slow |
| Check Digit | Verifies input | Good for typing errors | Limited |
| ARQ | Resends data | Reliable | Slower |

# **🧠 Key Definitions (Memorise\!)**

* **Error detection** → Identifying corrupted data  
* **Parity bit** → Extra bit for checking  
* **Checksum** → Calculated value for verification  
* **Echo check** → Data sent back for comparison  
* **Check digit** → Digit to verify input  
* **ARQ** → System that resends data if errors occur  
* **ACK/NACK** → Signals for success/failure

# **🔥 Common Exam Questions**

### **1\. Describe parity check (4 marks)**

✔ Include:

* parity bit  
* odd/even  
* counting 1s

### **2\. Explain checksum (4–6 marks)**

✔ Include:

* adding blocks  
* sending checksum  
* comparison

### **3\. Describe ARQ (4 marks)**

✔ Include:

* ACK / NACK  
* retransmission  
* timeout

### **4\. Give examples of check digits**

✔ Answer:

* ISBN  
* Barcodes

# **🚀 Final Revision Tips**

* Always state **how the method works step-by-step**  
* Include **advantages \+ disadvantages**  
* Use **binary examples** where possible  
* Learn **key terms exactly** (examiners look for them\!)