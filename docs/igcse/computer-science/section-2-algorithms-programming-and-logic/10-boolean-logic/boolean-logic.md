---
title: Boolean Logic
sidebar_position: 1
---



# **🔷 1\. What is Boolean Logic?**

**Boolean logic** is a system of algebra used to represent and manipulate **binary values**:

* **0 \= FALSE**  
* **1 \= TRUE**

It is used in:

* Digital circuits  
* Computer processors  
* Programming conditions

# **🔷 2\. Logic Gates (Definitions \+ Functions)**

Logic gates are **electronic circuits** that take binary inputs and produce a binary output.

## **✅ (a) NOT Gate (Inverter)**

* **Input:** 1 input only  
* **Function:** Reverses the input

| A | Output |
| ----- | ----- |
| 0 | 1 |
| 1 | 0 |

👉 Expression:  
**Output \= ¬A (or NOT A)**

## **✅ (b) AND Gate**

* **Function:** Output is 1 **only if BOTH inputs are 1**

| A | B | Output |
| ----- | ----- | ----- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

👉 Expression:  
**A AND B (A · B)**

## **✅ (c) OR Gate**

* **Function:** Output is 1 if **at least one input is 1**

| A | B | Output |
| ----- | ----- | ----- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

👉 Expression:  
**A OR B (A \+ B)**

## **🔁 Derived Gates (Important for exams)**

## **✅ (d) NAND Gate (NOT AND)**

* Opposite of AND

| A | B | Output |
| ----- | ----- | ----- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

👉 Expression:  
**NOT (A AND B)**

## **✅ (e) NOR Gate (NOT OR)**

* Opposite of OR

| A | B | Output |
| ----- | ----- | ----- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

👉 Expression:  
**NOT (A OR B)**

## **✅ (f) XOR Gate (Exclusive OR)**

* Output is 1 if inputs are **different**

| A | B | Output |
| ----- | ----- | ----- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

👉 Expression:  
**A ⊕ B**

# **🔷 3\. Standard Rules to Remember**

* NOT \= **1 input only**  
* All other gates \= **maximum 2 inputs**  
* Maximum inputs in exam circuits \= **3 inputs (A, B, C)**

# **🔷 4\. Truth Tables (3 Inputs)**

You must know how to complete this:

| A | B | C |
| ----- | ----- | ----- |
| 0 | 0 | 0 |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
| 1 | 1 | 1 |

👉 Total rows \= **2³ \= 8 combinations**

# **🔷 5\. Converting Between Forms**

This is VERY important for exams.

## **✅ (A) Problem Statement → Logic Expression**

Example:

**Statement:**  
“A system outputs 1 if A AND B are both true”

👉 Expression:  
**A AND B**

## **✅ (B) Logic Expression → Circuit**

Example:

**Expression:**  
(A AND B) OR C

👉 Steps:

1. Draw AND gate for A and B  
2. Feed output into OR gate with C

## **✅ (C) Truth Table → Logic Expression**

Steps:

1. Find rows where output \= 1  
2. Write AND term for each row  
3. Join using OR

Example:

| A | B | Output |
| ----- | ----- | ----- |
| 0 | 1 | 1 |
| 1 | 0 | 1 |

👉 Expression:  
**(NOT A AND B) OR (A AND NOT B)**  
👉 This is XOR

## **✅ (D) Circuit → Truth Table**

Steps:

1. List all input combinations  
2. Work gate-by-gate  
3. Fill output column

# **🔷 6\. Worked Example**

### **Given:**

Output \= (A AND B) OR (NOT C)

### **Step-by-step:**

| A | B | C | A AND B | NOT C | Output |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 1 |

# **🔷 7\. Key Terms (Must Memorise)**

* **Logic Gate** – electronic device performing Boolean operation  
* **Truth Table** – table showing all possible inputs and outputs  
* **Binary** – system using 0 and 1  
* **Logic Expression** – Boolean equation (e.g., A AND B)  
* **Circuit Diagram** – graphical representation of logic gates

# **🔷 8\. Exam Tips 🔥**

✔ Always write **all input combinations** (don’t skip rows)  
✔ Work **step-by-step** (especially multi-gate circuits)  
✔ Remember:

* AND \= only 1 when both 1  
* OR \= 1 if any 1  
* XOR \= different inputs  
  ✔ For truth tables:  
* Count rows → **2ⁿ**  
  ✔ Show **working columns** (exam marks awarded\!)  
  ✔ Do NOT simplify circuits unless asked

# **🔷 9\. Common Mistakes ❌**

* Forgetting NOT reverses values  
* Mixing up XOR and OR  
* Missing rows in truth tables  
* Not labeling intermediate outputs  
* Incorrect gate order in circuits

# **🔷 10\. Quick Memory Trick**

* **AND → “ALL must be 1”**  
* **OR → “ONE is enough”**  
* **XOR → “ONLY one, not both”**  
* **NOT → “flip it”**

