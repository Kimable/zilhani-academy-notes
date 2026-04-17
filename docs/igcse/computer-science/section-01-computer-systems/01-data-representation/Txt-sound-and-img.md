---
title: Text, sound and images
sidebar_position: 2
---



# **💻 1\. Representation of Text**

## **🔑 Key Idea**

* Computers **cannot understand letters directly**  
* Text must be **converted into binary (0s and 1s)**

👉 Each character (letter, number, symbol) is stored as a **binary code**

## **🔤 Character Sets**

### **Definition**

A **character set** is a system that assigns a **unique binary code** to each character.

## **ASCII (American Standard Code for Information Interchange)**

### **Features**

* Uses **7 bits** (standard) → 128 characters  
* Extended ASCII uses **8 bits** → 256 characters  
* Includes:  
  * Letters (A–Z, a–z)  
  * Numbers (0–9)  
  * Basic symbols

### **Example**

| Character | ASCII (Decimal) | Binary |
| ----- | ----- | ----- |
| A | 65 | 01000001 |
| a | 97 | 01100001 |

## **Unicode**

### **Features**

* Uses **more bits (typically 16 bits or more)**  
* Can represent **millions of characters**  
* Includes:  
  * All languages (e.g. Chinese, Arabic)  
  * Symbols  
  * Emojis 😊

## **ASCII vs Unicode**

| Feature | ASCII | Unicode |
| ----- | ----- | ----- |
| Bits used | 7 or 8 | 16+ |
| Characters | Limited | Very large set |
| Languages | Mostly English | Global |

## **Why Unicode is Needed**

* ASCII is too limited for global communication  
* Unicode allows:  
  * Multilingual text  
  * Special symbols  
  * Emojis

📌 **Exam Tip:**  
Always say:

* “Unicode allows a much wider range of characters”  
* “Uses more bits per character than ASCII”

# **🔊 2\. Representation of Sound**

## **🔑 Key Idea**

* Sound is an **analogue wave**  
* Computers store sound as **digital data**

👉 Conversion process \= **Sampling**

## **🎵 Sampling**

### **Definition**

Taking measurements of a sound wave at regular intervals and converting them into binary.

## **Sample Rate**

### **Definition**

* Number of samples taken per second  
* Measured in **Hertz (Hz)**

### **Example**

* 44,100 Hz (CD quality)

### **Effect**

* Higher sample rate → more accurate sound  
* Higher file size

## **Sample Resolution (Bit Depth)**

### **Definition**

* Number of bits used per sample

### **Example**

* 8-bit, 16-bit, 24-bit

### **Effect**

* Higher resolution → more precise amplitude values  
* Better sound quality  
* Larger file size

## **Summary of Effects**

| Factor | Increase → Effect |
| ----- | ----- |
| Sample Rate | Better quality, larger file |
| Sample Resolution | Better quality, larger file |

## **Example Explanation (Exam Style)**

A higher sample rate means more data points are captured per second, resulting in a more accurate representation of the original sound wave.

📌 **Exam Tips**

* Use terms like:  
  * “analogue to digital conversion”  
  * “samples per second”  
  * “accuracy of waveform”  
* Always link **quality AND file size**

# **🖼️ 3\. Representation of Images**

## **🔑 Key Idea**

* Images are made of **pixels (picture elements)**  
* Each pixel is stored as **binary data**

## **Resolution**

### **Definition**

* Number of pixels in an image

### **Example**

* 1920 × 1080 \= Full HD

### **Effect**

* Higher resolution → more detail  
* Larger file size

## **Colour Depth**

### **Definition**

* Number of bits used per pixel

### **Determines:**

* Number of possible colours

### **Examples**

| Bits per pixel | Colours |
| ----- | ----- |
| 1 bit | 2 colours |
| 8 bits | 256 colours |
| 24 bits | 16.7 million colours |

## **Effects of Colour Depth**

* Higher colour depth →  
  * More realistic images  
  * Smoother colour transitions  
  * Larger file size

## **Summary of Effects**

| Factor | Increase → Effect |
| ----- | ----- |
| Resolution | More detail, larger file |
| Colour Depth | More colours, larger file |

## **Example Explanation (Exam Style)**

Increasing the resolution increases the number of pixels, which improves image detail but also increases the file size.

📌 **Exam Tips**

* Always mention:  
  * “pixels”  
  * “binary representation”  
* Link **quality \+ file size**

# **🧠 Key Definitions**

* **Pixel**: Smallest unit of an image  
* **Resolution**: Number of pixels  
* **Colour Depth**: Bits per pixel  
* **Sample Rate**: Samples per second  
* **Sample Resolution**: Bits per sample  
* **Character Set**: Mapping of characters to binary

# **⚠️ Common Exam Mistakes**

❌ Confusing:

* Sample rate vs sample resolution  
* Resolution vs colour depth

❌ Forgetting:

* To mention **file size increases**  
* That sound is **analogue originally**  
* That text uses **character sets**

# **📝 High-Value Exam Answers**

### **Why does increasing sample rate improve sound quality?**

* More samples per second  
* More accurate waveform representation

### **Why does higher resolution improve images?**

* More pixels → more detail

### **Why is Unicode better than ASCII?**

* Supports more characters  
* Includes multiple languages and symbols

# **🔥 Final Quick Summary**

* **Text** → Character sets (ASCII, Unicode)  
* **Sound** → Sampling (rate \+ resolution)  
* **Images** → Pixels (resolution \+ colour depth)  
* Increasing quality → **always increases file size**
