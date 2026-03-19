---
title: Data Storage
sidebar_position: 3
---

# **📘 CIE IGCSE Computer Science – Data Storage**

Data storage is a core theory topic in IGCSE Computer Science. You must understand:

* The difference between primary and secondary storage  
* How magnetic, optical, and solid-state storage work  
* What virtual memory is and why it is needed  
* What cloud storage is, including advantages and disadvantages

# **1️⃣ Primary Storage**

## **🔹 Definition**

**Primary storage** is memory that is **directly accessed by the CPU**.

It is used to:

* Store data and instructions currently being processed.  
* Allow fast access for running programs.

Primary storage is sometimes called **main memory**.

## **🔹 Types of Primary Storage**

### **1\. Random Access Memory (RAM)**

### **2\. Read Only Memory (ROM)**

## **🔹 Random Access Memory (RAM)**

### **Definition:**

RAM is volatile memory used to temporarily store data and instructions currently being used by the CPU.

### **Key Features:**

* Volatile (data lost when power is off)  
* Read and write memory  
* Fast access  
* Directly accessed by CPU

### **Example:**

When you open a web browser, it loads into RAM.

## **🔹 Read Only Memory (ROM)**

### **Definition:**

ROM is non-volatile memory that stores permanent instructions needed to boot the computer.

### **Key Features:**

* Non-volatile (data not lost when power is off)  
* Read-only (cannot normally be changed)  
* Stores BIOS / firmware

### **Example:**

Contains boot-up instructions.

## **🔹 Why Does a Computer Need Both RAM and ROM?**

| RAM | ROM |
| ----- | ----- |
| Temporary storage | Permanent storage |
| Stores running programs | Stores boot instructions |
| Volatile | Non-volatile |

Without ROM:

* Computer cannot start.

Without RAM:

* No working space for programs.

# **2️⃣ Secondary Storage**

## **🔹 Definition**

Secondary storage is not directly accessed by the CPU and is used for permanent storage of data.

It stores:

* Operating system  
* Software  
* Files  
* Documents

## **🔹 Why Secondary Storage Is Necessary**

RAM is:

* Volatile  
* Limited in size

Secondary storage:

* Stores large amounts of data  
* Keeps data when power is off

# **3️⃣ Magnetic Storage**

### **Example:**

* Hard Disk Drive (HDD)

## **🔹 How Magnetic Storage Works**

* Uses rotating metal platters.  
* Platters are coated with magnetic material.  
* Divided into:  
  * Tracks (circular paths)  
  * Sectors (segments of tracks)

Data is:

* Read and written using electromagnets.  
* Magnetised in different directions to represent binary.

## **🔹 Key Terms**

Track – Circular path on platter  
Sector – Division of a track  
Platter – Circular disk inside HDD  
Read/Write Head – Electromagnet that reads/writes data

## **🔹 Advantages**

✔ Large storage capacity  
✔ Low cost per GB

## **🔹 Disadvantages**

✖ Moving parts → can fail  
✖ Slower than SSD  
✖ Sensitive to physical damage

# **4️⃣ Optical Storage**

### **Examples:**

* CD  
* DVD  
* Blu-ray

## **🔹 How Optical Storage Works**

* Uses a laser.  
* Surface contains pits and lands.  
* Laser reflects differently off pits and lands.  
* Reflection difference represents binary data.

## **🔹 Comparison**

| Type | Storage Capacity |
| ----- | ----- |
| CD | \~700 MB |
| DVD | \~4.7 GB |
| Blu-ray | \~25 GB |

## **🔹 Advantages**

✔ Portable  
✔ Cheap  
✔ Good for media distribution

## **🔹 Disadvantages**

✖ Easily scratched  
✖ Slower access  
✖ Limited capacity compared to HDD/SSD

# **5️⃣ Solid-State Storage (Flash Memory)**

### **Examples:**

* Solid State Drive (SSD)  
* USB Flash Drive  
* SD Card

## **🔹 How Solid-State Storage Works**

* Uses NAND or NOR flash technology.  
* Made of transistors.  
* Each memory cell contains:  
  * Control gate  
  * Floating gate

Data is stored by:

* Trapping electrons in floating gate.  
* Presence or absence of charge \= binary.

## **🔹 Features**

✔ No moving parts  
✔ Faster than HDD  
✔ More durable  
✔ Lower power consumption

## **🔹 Disadvantages**

✖ More expensive per GB  
✖ Limited write cycles

# **6️⃣ Virtual Memory**

## **🔹 Definition**

Virtual memory is part of secondary storage used as if it were RAM.

## **🔹 Why It Is Needed**

When:

* RAM is full  
* More programs need memory

The system:

* Transfers pages of data from RAM to secondary storage.  
* Uses part of storage as virtual memory.

## **🔹 How It Works**

1. RAM becomes full.  
2. Least used data moved to hard disk.  
3. Space in RAM freed.  
4. When needed, data moved back to RAM.

## **🔹 Important Term**

Page – Block of data transferred between RAM and virtual memory.

## **🔹 Disadvantages**

* Much slower than RAM.  
* Can slow down computer.

# **7️⃣ Cloud Storage**

## **🔹 Definition**

Cloud storage allows data to be stored on remote servers and accessed via the internet.

Data is stored on:

* Physical servers  
* Located in data centres

## **🔹 Examples**

* Google Drive  
* OneDrive  
* Dropbox

## **🔹 Key Point**

Cloud storage requires:

* Internet connection  
* Physical servers owned by provider

# **8️⃣ Advantages of Cloud Storage**

✔ Access from anywhere  
✔ Automatic backups  
✔ Reduces need for local storage  
✔ Easy file sharing  
✔ Scalable storage

# **9️⃣ Disadvantages of Cloud Storage**

✖ Requires internet  
✖ Security/privacy concerns  
✖ Ongoing subscription cost  
✖ Risk of data breach  
✖ Slower upload/download speeds

# **🔟 Cloud vs Local Storage**

| Feature | Cloud Storage | Local Storage |
| ----- | ----- | ----- |
| Access | Anywhere | Only on device |
| Internet needed | Yes | No |
| Security | Depends on provider | Controlled by user |
| Cost | Subscription | One-time purchase |
| Speed | Internet dependent | Usually faster |

# **1️⃣1️⃣ Exam Tips**

✔ Always mention "directly accessed by CPU" for primary storage.  
✔ Say "not directly accessed by CPU" for secondary storage.  
✔ Mention tracks and sectors for magnetic storage.  
✔ Mention pits and lands for optical storage.  
✔ Mention floating gate and transistors for flash memory.  
✔ Say "pages transferred between RAM and virtual memory."  
✔ For cloud storage → mention remote servers and internet.

**1️⃣2️⃣ Common Exam Questions**

✔ Compare RAM and ROM  
✔ Explain why computer needs secondary storage  
✔ Describe how HDD works  
✔ Compare HDD and SSD  
✔ Explain virtual memory  
✔ Advantages/disadvantages of cloud storage

# **1️⃣3️⃣ Key Definitions to Memorise**

Primary storage – Directly accessed by CPU.  
Secondary storage – Permanent storage not directly accessed by CPU.  
RAM – Volatile working memory.  
ROM – Non-volatile boot memory.  
Virtual memory – Secondary storage used as temporary RAM.  
Magnetic storage – Stores data using magnetism.  
Optical storage – Uses laser and pits/lands.  
Solid-state storage – Uses transistors and floating gates.  
Cloud storage – Remote storage accessed via internet.

# **🎯 Final Revision Summary**

Primary storage → Fast, temporary, CPU access  
Secondary storage → Permanent, larger, slower  
Magnetic → Tracks, sectors, electromagnets  
Optical → Laser, pits and lands  
Solid-state → Floating gate transistors  
Virtual memory → Extra memory using storage  
Cloud storage → Remote server storage
