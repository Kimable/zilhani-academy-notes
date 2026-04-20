---
title: Types and methods of data transmission
sidebar_position: 1
---


# **🌐 1\. Packet Transmission**

## **1(a) Why data is broken into packets**

When data is sent over a network (e.g. the internet), it is **split into smaller chunks called packets**.

### **✅ Reasons:**

* **Efficiency** → smaller pieces are easier to send  
* **Error handling** → only corrupted packets are resent, not the whole file  
* **Routing flexibility** → packets can take different routes

### **📌 Example:**

Sending a video file:

* Instead of sending one huge file, it is split into many packets  
* Each packet travels separately across the network

## **1(b) Structure of a Packet**

Each packet has **three main parts**:

### **1\. Header**

Contains important routing information:

* **Destination address** → where the packet is going  
* **Originator’s address** → sender’s address  
* **Packet number** → position in the sequence

### **2\. Payload**

* The **actual data** being transmitted

### **3\. Trailer**

* Contains **error-checking data** (e.g. checksum)  
* Used to detect corruption during transmission

### **📦 Packet Structure Summary:**

| Part | Purpose |
| ----- | ----- |
| Header | Routing & identification |
| Payload | Actual data |
| Trailer | Error detection |

## **1(c) Packet Switching Process**

### **🔁 Steps:**

1. Data is **split into packets**  
2. Packets are sent independently across the network  
3. Each packet may take a **different route**  
4. **Routers** decide the best path  
5. Packets may arrive:  
   * Out of order  
   * At different times  
6. Once all packets arrive:  
   * They are **reassembled in the correct order**  
   * Errors are checked and corrected if needed

### **📌 Key Concepts:**

* **Router** → directs packets to destination  
* **Packet switching** → dynamic routing system

### **✅ Advantages:**

* Efficient use of network  
* Fault tolerant (can reroute if path fails)  
* Faster overall transmission

### **❌ Disadvantages:**

* Packets may be lost or delayed  
* Requires reordering at destination  
* Can cause latency

### **📝 Exam Tip:**

If asked *“Explain packet switching”*, include:

* splitting into packets  
* different routes  
* routers  
* reordering at destination

# **🔄 2\. Methods of Data Transmission**

## **2(a) Types of Transmission**

## **1\. Serial Transmission**

### **📖 Definition:**

Data is sent **one bit at a time**, in a single stream.

### **✅ Advantages:**

* Less interference (crosstalk)  
* Reliable over long distances  
* Cheaper cables

### **❌ Disadvantages:**

* Slower than parallel (per unit time)

### **📌 Example:**

* USB cables

## **2\. Parallel Transmission**

### **📖 Definition:**

Multiple bits are sent **simultaneously** along multiple wires.

### **✅ Advantages:**

* Faster over short distances

### **❌ Disadvantages:**

* Signal interference (crosstalk)  
* Expensive cables  
* Not suitable for long distances

### **📌 Example:**

* Old printer connections

### **🆚 Serial vs Parallel**

| Feature | Serial | Parallel |
| ----- | ----- | ----- |
| Speed | Slower | Faster (short distance) |
| Distance | Long | Short |
| Cost | Cheaper | More expensive |
| Interference | Low | High |

## **3\. Simplex Transmission**

### **📖 Definition:**

Data flows in **one direction only**.

### **📌 Example:**

* Keyboard → Computer  
* TV broadcast

### **✅ Advantage:**

* Simple and efficient for one-way communication

### **❌ Disadvantage:**

* No feedback possible

## **4\. Half-Duplex Transmission**

### **📖 Definition:**

Data flows in **both directions**, but **not at the same time**.

### **📌 Example:**

* Walkie-talkies

### **✅ Advantages:**

* Allows two-way communication  
* Uses single channel

### **❌ Disadvantages:**

* Delays (must wait to send)

## **5\. Full-Duplex Transmission**

### **📖 Definition:**

Data flows in **both directions at the same time**.

### **📌 Example:**

* Phone calls  
* Video calls

### **✅ Advantages:**

* Fast communication  
* No waiting

### **❌ Disadvantages:**

* More complex  
* Higher cost

## **2(b) Choosing the Right Method**

### **📊 Scenario-Based Suitability:**

| Scenario | Best Method | Reason |
| ----- | ----- | ----- |
| Long-distance communication | Serial | Less interference |
| Short-distance high speed | Parallel | Faster transfer |
| TV broadcast | Simplex | One-way only |
| Walkie-talkie | Half-duplex | Two-way but not simultaneous |
| Phone/video call | Full-duplex | Simultaneous communication |

### **📝 Exam Tip:**

If asked *“Suggest a suitable method”*:

* ALWAYS justify your answer  
  (e.g. “Serial because it reduces interference over long distances”)

# **🔌 3\. Universal Serial Bus (USB)**

## **What is USB?**

USB (**Universal Serial Bus**) is a **standard interface** used to connect devices and transfer data.

## **How USB Transmits Data**

* Uses **serial transmission** (one bit at a time)  
* Data is sent in **packets**  
* Devices communicate with a **host controller**

## **Key Features**

### **🔑 1\. Plug and Play**

* Devices are automatically detected

### **🔑 2\. Hot Swapping**

* Devices can be connected/removed without restarting

### **🔑 3\. Provides Power**

* Can charge devices (e.g. phones)

## **Advantages of USB**

* Easy to use  
* No need to restart (hot swapping)  
* Universal standard  
* Provides power \+ data transfer  
* Reliable

## **Disadvantages of USB**

* Limited cable length  
* Slower than some modern alternatives (e.g. Ethernet for networks)  
* Host-controlled (devices cannot communicate directly without host)

### **📌 Examples of USB Devices:**

* Flash drives  
* Keyboards  
* Printers  
* External hard drives

### **📝 Exam Tip:**

If asked about USB:  
Include:

* serial transmission  
* plug and play  
* hot swapping  
* power \+ data

# **🔥 Common Exam Questions**

### **1\. Describe packet switching (4–6 marks)**

✔ Mention:

* packets  
* routes  
* routers  
* reordering

### **2\. Compare serial and parallel transmission**

✔ Include:

* speed  
* distance  
* interference

### **3\. Choose a transmission method for a scenario**

✔ Always:

* Pick correct type  
* Justify clearly

# **🧠 Key Definitions (Memorise\!)**

* **Packet** → A small unit of data sent across a network  
* **Packet switching** → Sending data in packets via different routes  
* **Serial transmission** → One bit at a time  
* **Parallel transmission** → Multiple bits at once  
* **Simplex** → One-way communication  
* **Half-duplex** → Two-way, not simultaneous  
* **Full-duplex** → Two-way, simultaneous  
* **USB** → Standard interface for data and power transfer

# **🚀 Final Revision Tips**

* Always use **technical terms** (router, packet, payload, etc.)  
* Include **examples** in longer answers  
* Practice **comparison questions**  
* Don’t forget **advantages \+ disadvantages**
