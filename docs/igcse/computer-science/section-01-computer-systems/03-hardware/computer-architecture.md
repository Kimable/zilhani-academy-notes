---
title: Computer Architecture
sidebar_position: 1
---

# **📘 CIE IGCSE Computer Science – Computer Architecture Notes**

# **1\. The Central Processing Unit (CPU)**

## **(a) Role of the CPU**

The **CPU (Central Processing Unit)** is the **“brain” of the computer**.

### **✅ Definition:**

The CPU **processes instructions and data** that are input into the computer so that results can be produced as output.

### **🔹 What the CPU Does:**

* Fetches instructions from memory  
* Decodes instructions  
* Executes instructions  
* Performs calculations  
* Controls other components

### **🔹 Simple Example:**

If you calculate `5 + 3`:

1. Instruction is fetched from RAM.  
2. CPU decodes it (addition).  
3. ALU performs the calculation.  
4. Result is stored.

## **(b) Microprocessor**

### **✅ Definition:**

A **microprocessor** is a type of **integrated circuit (IC)** that contains the CPU on a **single chip**.

### **🔹 Important Points:**

* It is made of millions/billions of transistors.  
* Found in PCs, smartphones, washing machines, cars.  
* It performs all CPU functions.

### **📝 Exam Tip:**

If asked:

“What is a microprocessor?”  
You must mention:

* It is an **integrated circuit**  
* It contains the **CPU on a single chip**

📺 **Video – CPU intro**  
??[25\. CAMBRIDGE IGCSE (0478-0984) 3.1 The role of the central processing unit](https://youtu.be/clL1AuQNHmQ?si=QfBI7ODerMjoaqrJ)

# **2\. Von Neumann Architecture**

Most computers use the **Von Neumann architecture**, designed by:

👉 John von Neumann

## **Key Concept of Von Neumann Architecture**

* **Data and instructions are stored in the same memory (RAM).**  
* They travel along the same buses.

# **(a) Components of the CPU**

A Von Neumann CPU contains:

## **1️⃣ Arithmetic Logic Unit (ALU)**

### **Purpose:**

Performs:

* Arithmetic operations (ADD, SUBTRACT, MULTIPLY)  
* Logical operations (AND, OR, NOT, comparisons)

### **Example:**

If instruction is `ADD 5, 3` → ALU calculates result.

## **2️⃣ Control Unit (CU)**

### **Purpose:**

* Controls execution of instructions.  
* Sends control signals to other components.  
* Manages fetch–decode–execute cycle.

### **Think of it as:**

👉 The “manager” of the CPU.

# **Registers (Very Important for Exams ⚠️)**

Registers are **small, high-speed storage locations inside the CPU**.

You must know these:

## **🔹 Program Counter (PC)**

* Holds the **address of the next instruction**.  
* Automatically increases after each instruction.

## **🔹 Memory Address Register (MAR)**

* Holds the **address of the memory location** to be accessed.

## **🔹 Memory Data Register (MDR)\*\***

* Holds the **data being transferred** to/from memory.

## **🔹 Current Instruction Register (CIR)\*\***

* Holds the **current instruction** being decoded/executed.

## **🔹 Accumulator (ACC)\*\***

* Stores the **results of calculations** performed by ALU.

# **Buses (Communication Pathways)**

Buses transfer signals between CPU and memory.

## **🔹 Address Bus**

* Carries **memory addresses**  
* One-directional (CPU → RAM)

## **🔹 Data Bus**

* Carries **data**  
* Bi-directional (CPU ↔ RAM)

## **🔹 Control Bus**

* Carries **control signals**  
* Example signals:  
  * Read  
  * Write  
  * Interrupt

### **📝 Exam Tip:**

If asked:

“State which bus carries data.”

Answer: **Data bus**

📺 **Video – CPU Components**  
??[26\. CAMBRIDGE IGCSE (0478-0984) 3.1 Purpose of the components in a CPU](https://youtu.be/K9EuHc5kzJc?si=J_0Wdcq2H-lSAjYp)

📺 **Video – Vonn Neumann Architecture**  
??[27\. CAMBRIDGE IGCSE (0478-0984) 3.1 Von Neumann architecture](https://youtu.be/C0Pch0zpsT4?si=dJhI6q1a_0c5KiDH)

# 

# **(b) Fetch–Decode–Execute (FDE) Cycle**

This is one of the MOST important topics ⚠️

# **Step 1: Fetch**

1. The PC contains the address of the next instruction.  
2. Address copied to MAR.  
3. The control unit sends a **READ signal**.  
4. Instruction moves from RAM to MDR.  
5. Instruction copied to CIR.  
6. PC increases by 1\.

# **Step 2: Decode**

1. The control unit decodes the instruction in CIR.  
2. Determines:  
   * What operation is needed  
   * What data is required

# **Step 3: Execute**

1. ALU performs the required operation.  
2. Result stored in:  
   * Accumulator (ACC)  
   * Or sent back to RAM via MDR.

## **Full Example:**

Instruction: `ADD 10`

* PC → MAR  
* RAM → MDR  
* MDR → CIR  
* CU decodes  
* ALU adds value  
* Result stored in ACC

📺 **Video – Fetch-decode-execute cycle**  
??[28\. CAMBRIDGE IGCSE (0478-0984) 3.1 Fetch-decode-execute cycle](https://youtu.be/8Qx6Dr_aKXs?si=tT5Lkfs2LOTmwlMc)

### 

### **📝 Exam Tip:**

When describing FDE:

* Mention **specific registers**  
* Mention **buses**  
* Mention **control signals**

Examiners look for:

* PC  
* MAR  
* MDR  
* CIR  
* CU  
* ALU

# **3\. Core, Cache and Clock**

These affect CPU performance.

## **🔹 Core**

### **Definition:**

A **core** is an individual processing unit inside a CPU.

### **Types:**

* Single-core  
* Dual-core  
* Quad-core  
* Octa-core

### **Effect on Performance:**

More cores → can process multiple tasks simultaneously → faster multitasking.

## **🔹 Cache**

### **Definition:**

Cache is **small, high-speed memory inside the CPU**.

### **Purpose:**

Stores frequently used data/instructions.

### **Effect:**

Larger cache → fewer trips to RAM → faster performance.

## **🔹 Clock Speed**

### **Definition:**

The clock controls timing of CPU operations.

Measured in:

* GHz (gigahertz)

Example:  
3 GHz \= 3 billion cycles per second

### **Effect:**

Higher clock speed → more instructions per second → faster CPU.

### **📝 Important:**

Performance depends on:

* Number of cores  
* Cache size  
* Clock speed

📺 **Video – CPU Performance**  
??[29\. CAMBRIDGE IGCSE (0478-0984) 3.1 The common characteristics of CPUs](https://youtu.be/F0ZQQLPCWH8?si=LJrqrk7J9ktC2qqU)

# **4\. Instruction Set**

### **Definition:**

An **instruction set** is the complete list of machine code instructions that a CPU can understand.

Examples of instructions:

* ADD  
* SUB  
* LOAD  
* STORE  
* JUMP

### **Important Points:**

* Written in machine code (binary).  
* Different CPUs have different instruction sets.  
* Software must be compatible with the CPU instruction set.

📺 **Video – CPU instruction sets**  
??[30\. CAMBRIDGE IGCSE (0478-0984) 3.1 CPU instruction sets](https://youtu.be/JS_cey2vHwY?si=j9CGaCvDUrbFLwSG)

### **📝 Exam Tip:**

Always mention:

* It is a **list of commands**  
* They are in **machine code**  
* They can be processed by the CPU

# **5\. Embedded Systems**

## **Definition:**

An **embedded system** is a computer system designed to perform **one specific function**.

## **Characteristics:**

* Dedicated function  
* Usually real-time operation  
* Low power consumption  
* Limited memory  
* Often no user interface

## **Examples of Embedded Systems:**

* Washing machines  
* Cars (engine management system)  
* Security alarms  
* Traffic lights  
* Vending machines  
* Microwave ovens

## **Embedded System vs General Purpose Computer**

| Embedded System | General Purpose Computer |
| ----- | ----- |
| One dedicated task | Many tasks |
| Limited memory | Large memory |
| Fixed software | Can install programs |
| Example: washing machine | Example: PC |

📺 **Video – Embedded systems**  
??[31\. CAMBRIDGE IGCSE (0478-0984) 3.1 Embedded systems](https://youtu.be/NwGQLfEBr5E?si=wbYlXZyNwewtdz8-)

### 

### **📝 Exam Tip:**

If asked:

“Give two examples of embedded systems”  
Use:

* Domestic appliance  
* Car system  
* Security system  
* Lighting system

# **⭐ Common Exam Mistakes**

❌ Forgetting to mention specific registers in FDE  
❌ Confusing MAR and MDR  
❌ Saying address bus is bi-directional (it is NOT)  
❌ Forgetting that Von Neumann stores data and instructions together  
❌ Not stating that instruction set is machine code

# **⭐ Key Definitions to Memorise**

* **CPU**: Processes instructions and data.  
* **Microprocessor**: CPU on a single integrated circuit chip.  
* **ALU**: Performs arithmetic and logic operations.  
* **Control Unit**: Controls execution of instructions.  
* **Register**: Small, fast storage inside CPU.  
* **Cache**: High-speed memory inside CPU.  
* **Core**: Individual processing unit.  
* **Clock Speed**: Number of cycles per second.  
* **Instruction Set**: List of machine code commands.  
* **Embedded System**: Computer system with a dedicated function.

# **🎯 Final Advice for IGCSE Exams**

1. Always use technical terms.  
2. Mention registers by name.  
3. Be precise about buses.  
4. Use correct sequence in FDE.  
5. Compare embedded vs general purpose clearly.  
6. Learn definitions word-for-word where possible.
