---
title: Encryption
sidebar_position: 3
---




# **🔐 1\. Need for and Purpose of Encryption**

## **📖 Definition:**

**Encryption** is the process of converting **plaintext (readable data)** into **ciphertext (unreadable data)** to protect it from unauthorised access.

## **🔍 Why encryption is needed**

When data is transmitted over networks (especially the internet), it can be:

* Intercepted (hacked)  
* Read by unauthorised users  
* Modified

## **🎯 Purpose of encryption:**

### **1\. Confidentiality**

* Keeps data **private**  
* Only authorised users can read it

### **2\. Security during transmission**

* Protects data sent over **insecure networks**

### **3\. Prevents unauthorised access**

* Hackers cannot understand encrypted data

### **📌 Example:**

When you enter a password on a website:

* It is encrypted before being sent  
* Even if intercepted, it appears as meaningless data

### **📝 Exam Tip:**

If asked *“Why is encryption needed?”*, include:

* prevent unauthorised access  
* protect data during transmission  
* maintain confidentiality

# **🔄 2\. Types of Encryption**

There are **two main types**:

1. **Symmetric encryption**  
2. **Asymmetric encryption**

# **🔑 A. Symmetric Encryption**

## **📖 Definition:**

A method where **the same key** is used to:

* Encrypt data  
* Decrypt data

## **🔧 How it works:**

1. Sender uses a **secret key** to encrypt plaintext  
2. Data becomes ciphertext  
3. Receiver uses the **same key** to decrypt it

### **📌 Example:**

* Message: `HELLO`  
* Key: `3`  
* Encrypted (shift): `KHOOR`

Receiver uses key `3` to decode back to `HELLO`

## **✔️ Advantages:**

* Faster than asymmetric encryption  
* Efficient for large amounts of data

## **❌ Disadvantages:**

* Key must be shared securely  
* Risk of interception during key exchange

### **📝 Exam Tip:**

Key phrase:  
“**Same key is used for encryption and decryption**”

# **🔐 B. Asymmetric Encryption**

## **📖 Definition:**

A method that uses **two different keys**:

* **Public key** (shared with everyone)  
* **Private key** (kept secret)

## **🔑 Key Concepts:**

### **Public Key**

* Used to **encrypt** data  
* Can be shared openly

### **Private Key**

* Used to **decrypt** data  
* Must be kept secret

## **🔧 How it works:**

1. Sender obtains receiver’s **public key**  
2. Sender encrypts message using public key  
3. Message is sent as ciphertext  
4. Receiver decrypts using their **private key**

### **📌 Example:**

* You send a message to a website  
* Website provides its **public key**  
* You encrypt data using it  
* Only the website can decrypt using its **private key**

## **✔️ Advantages:**

* More secure (no need to share private key)  
* Safer key distribution

## **❌ Disadvantages:**

* Slower than symmetric encryption  
* More complex

### **📝 Exam Tip:**

Always mention:

* public key  
* private key  
* different keys

# **🔁 Symmetric vs Asymmetric Encryption**

| Feature | Symmetric | Asymmetric |
| ----- | ----- | ----- |
| Keys used | One key | Two keys |
| Speed | Faster | Slower |
| Security | Less secure (key sharing risk) | More secure |
| Complexity | Simple | More complex |

# **🔄 Real-World Use (Important\!)**

Often both methods are used together:

### **📌 Example (Secure Website):**

1. Asymmetric encryption → used to securely exchange key  
2. Symmetric encryption → used for fast data transfer

# **🧠 Key Terms (VERY IMPORTANT)**

* **Plaintext** → original readable data  
* **Ciphertext** → encrypted unreadable data  
* **Encryption** → converting plaintext to ciphertext  
* **Decryption** → converting ciphertext back to plaintext  
* **Key** → value used in encryption/decryption  
* **Public key** → shared key  
* **Private key** → secret key

# **🔥 Common Exam Questions**

## **1\. Describe symmetric encryption (3–4 marks)**

✔ Include:

* one key  
* same key used to encrypt and decrypt

## **2\. Describe asymmetric encryption (4–6 marks)**

✔ Include:

* public key  
* private key  
* different keys  
* encryption \+ decryption process

## **3\. Compare symmetric and asymmetric encryption**

✔ Include:

* speed  
* number of keys  
* security

## **4\. Explain why encryption is needed**

✔ Include:

* security  
* confidentiality  
* protection from hackers

# **⚠️ Common Mistakes to Avoid**

❌ Saying public and private keys are the same  
❌ Forgetting to mention **key sharing problem** in symmetric encryption  
❌ Not explaining **who uses which key**

# **🚀 Final Revision Tips**

* Memorise definitions (they are often 2–3 mark questions)  
* Practice explaining **step-by-step processes**  
* Always include **advantages and disadvantages**  
* Use correct terminology: *plaintext, ciphertext, key*