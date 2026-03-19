---
title: Types of software and interrupts
sidebar_position: 1
---

# **💻 CIE IGCSE Computer Science – Types of Software and Interrupts**

This topic covers **system software, application software, operating systems, hardware/firmware/software relationships, and interrupts**.

# **1️⃣ Types of Software**

Software is a set of programs that tells the hardware what to do.

## **🔹 (a) System Software**

**Definition:**

Software that provides the services required by the computer to operate and run other programs.

**Includes:**

* **Operating system (OS)**  
* **Utility software**

**Functions of System Software:**

| Function | Description | Example |
| ----- | ----- | ----- |
| Managing files | Organise, read, write, delete, rename files | File Explorer in Windows |
| Handling interrupts | Respond to hardware/software events | Keyboard input interrupt |
| Providing an interface | Allow user/program interaction | GUI, CLI |
| Managing peripherals and drivers | Communicate with hardware | Printer drivers |
| Managing memory | Allocate and free memory for programs | RAM management |
| Managing multitasking | Allow multiple programs to run | Task scheduling |
| Providing a platform for running applications | Provide API, libraries, environment | OS APIs |
| Providing system security | User authentication, firewalls | Windows Defender |
| Managing user accounts | Control access rights | Admin vs guest accounts |

**Examples of System Software:**

* Microsoft Windows, macOS, Linux (OS)  
* Antivirus software, file compression tools (Utility software)

## **🔹 (b) Application Software**

**Definition:**

Software that provides services required by the **user** to perform tasks.

**Examples:**

* Word processors → Microsoft Word, LibreOffice Writer  
* Spreadsheets → Microsoft Excel, Google Sheets  
* Web browsers → Chrome, Firefox  
* Games → Minecraft, Fortnite

**Key Difference:**

| Feature | System Software | Application Software |
| ----- | ----- | ----- |
| Purpose | Runs the computer, manages resources | Performs tasks for the user |
| Examples | OS, Utilities | Word processors, Games, Browsers |
| Who Uses It | Indirectly (programs need it) | Directly by user |

# **2️⃣ Operating System (OS)**

**Definition:**

System software that **manages hardware and software resources** and provides services to applications.

**Basic Roles of OS:**

1. **Interface:**  
   * GUI or CLI for user interaction  
2. **Memory Management:**  
   * Allocates memory to running programs  
3. **Multitasking:**  
   * Switches CPU between programs  
4. **Peripheral Management:**  
   * Manages devices using drivers  
5. **File Management:**  
   * Organises files and folders  
6. **System Security:**  
   * User authentication, permissions  
7. **Platform for Applications:**  
   * Runs software above the OS  
8. **Handles Interrupts:**  
   * Responds to hardware/software events

# **3️⃣ Relationship: Hardware, Firmware, OS, Applications**

| Layer | Description | Example |
| ----- | ----- | ----- |
| Hardware | Physical components | CPU, RAM, keyboard |
| Firmware | Software embedded in hardware | Bootloader, BIOS |
| Operating System | Runs on firmware, manages hardware | Windows, Linux |
| Applications | Run on OS, perform user tasks | Word processor, Browser |

**Flow:**

1. **Hardware** → runs **firmware** (bootloader)  
2. **Firmware** → loads **operating system**  
3. **OS** → runs **application software**

# **4️⃣ Interrupts**

**Definition:**

A signal to the CPU indicating that it should **pause its current activity** to deal with an event.

## **🔹 How Interrupts Work**

1. **Interrupt is generated:**  
   * **Hardware interrupt** → from a device (keyboard, mouse)  
   * **Software interrupt** → from a program (e.g., division by zero)  
2. **CPU stops current task** and saves its state  
3. **Interrupt Service Routine (ISR) runs:**  
   * Special code handles the interrupt  
4. **CPU resumes previous task** once ISR is complete

## **🔹 Types of Interrupts**

| Type | Source | Example |
| ----- | ----- | ----- |
| Hardware | Peripheral device | Key pressed, mouse moved, printer ready |
| Software | Program or error | Division by zero, memory access conflict |

## **🔹 Importance of Interrupts**

* Allows CPU to **respond to important events immediately**  
* Enables **multitasking** and **real-time control**  
* Prevents programs from **waiting unnecessarily**

# **5️⃣ Examples of Interrupt Handling**

### **Hardware Interrupt**

* Press a key → keyboard sends interrupt → ISR reads key → CPU resumes program

### **Software Interrupt**

* Program tries to divide by zero → CPU triggers interrupt → OS shows error message → program halted or handled

# **🧠 Key Terms**

| Term | Definition |
| ----- | ----- |
| System software | Software that manages computer resources |
| Application software | Software that performs tasks for users |
| Operating system (OS) | Manages hardware, software, security, and provides platform |
| Firmware | Software embedded in hardware, like BIOS |
| Interrupt | Signal to CPU to stop current task to handle event |
| Interrupt Service Routine (ISR) | Special program that deals with interrupts |
| Hardware interrupt | Generated by external device |
| Software interrupt | Generated by program or error |

# **📝 Exam Tips**

1. Always mention **time-saving and efficiency** advantages of interrupts.  
2. When asked, describe the **layered structure**: hardware → firmware → OS → applications.  
3. Use **examples** to illustrate OS functions (memory management, multitasking, security).  
4. Distinguish **hardware vs software interrupts** with examples.  
5. Mention the **CPU saves state, ISR runs, then CPU resumes task** when describing interrupt handling.

# **⭐ Quick Summary**

* **System software** → runs computer (OS, utilities)  
* **Application software** → helps user do tasks (Word, Excel, games)  
* **Operating system** → interface, memory, multitasking, security, drivers  
* **Hardware \+ Firmware \+ OS → run applications**  
* **Interrupts** → CPU pauses current task to handle hardware or software events via ISR  
* **Hardware interrupts** → keyboard, mouse  
* **Software interrupts** → division by zero, memory conflicts


