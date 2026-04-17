---
title: Number Systems
sidebar_position: 1
---


# **🌐 1\. Why Computers Use Binary**

### **Key Idea**

* Computers use **binary (base 2\)** because their hardware is built from **electronic circuits (logic gates)**.  
* These circuits have **two stable states**:  
  * ON (1)  
  * OFF (0)

### **Why Binary?**

* Reliable (only 2 states → less error)  
* Easy to represent electronically  
* Works directly with **logic gates** and **registers**

### **Important Points**

* **All data is converted into binary**:  
  * Text → ASCII/Unicode  
  * Images → pixel values  
  * Sound → digital signals

📌 **Exam Tip:**  
Always mention **“two-state system (on/off)”** and **“logic gates”** when explaining why binary is used.

# **🔢 2\. Number Systems**

## **(a) Understanding the Systems**

| System | Base | Digits Used |
| ----- | ----- | ----- |
| Denary | 10 | 0–9 |
| Binary | 2 | 0, 1 |
| Hexadecimal | 16 | 0–9, A–F (A=10, F=15) |

## **(b) Conversions**

### **(i) Denary → Binary**

**Method: Divide by 2 repeatedly**

Example: Convert **13 to binary**

| Division | Quotient | Remainder |
| ----- | ----- | ----- |
| 13 ÷ 2 | 6 | 1 |
| 6 ÷ 2 | 3 | 0 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

Read **bottom to top** → **1101**

### **Binary → Denary**

**Use place values**

Example: **1101**

![][image1]

### **(ii) Denary → Hexadecimal**

**Divide by 16**

Example: Convert **26**

| Division | Quotient | Remainder |
| ----- | ----- | ----- |
| 26 ÷ 16 | 1 | 10 (A) |
| 1 ÷ 16 | 0 | 1 |

Answer: **1A**

### **Hexadecimal → Denary**

Example: **1A**

![][image2]

### **(iii) Binary ↔ Hexadecimal**

**Group into 4 bits (nibbles)**

Example: Binary → Hex  
10101100 → 1010 1100  
\= A C → **AC**

Example: Hex → Binary  
7F →  
7 \= 0111  
F \= 1111  
→ **01111111**

📌 **Exam Tip:**  
Always group binary in **4-bit chunks from the right**.

# **💡 3\. Why Hexadecimal is Used**

### **Advantages**

* Shorter than binary  
* Easier for humans to read  
* Direct conversion to/from binary

### **Where It’s Used**

* Memory addresses  
* Machine code  
* HTML colour codes (e.g. \#FF5733)  
* Debugging

📌 **Exam Tip:**  
Say: *“Hexadecimal is a compact representation of binary.”*

# **➕ 4\. Binary Addition (8-bit)**

### **Rules**

* 0 \+ 0 \= 0  
* 0 \+ 1 \= 1  
* 1 \+ 1 \= 10 (carry 1\)

### **Example**

 01001010 (74)  
\+ 00110101 (53)  
\------------  
  01111111 (127)

## **Overflow**

### **Definition**

* Occurs when result exceeds **8-bit limit (255)**

### **Example**

11111111 (255)  
\+00000001 (1)  
\------------  
100000000 (9 bits → overflow)

### **Why it happens**

* Register has **fixed size**  
* Cannot store values beyond its limit

📌 **Exam Tip:**  
Always mention:

* “exceeds 255”  
* “register size exceeded”

# **🔁 5\. Logical Binary Shifts**

## **Left Shift (\<\<)**

* Moves bits **left**  
* Adds **0 on right**  
* Multiplies by **2**

Example:

00000101 (5)  
→ 00001010 (10)

## **Right Shift (\>\>)**

* Moves bits **right**  
* Adds **0 on left**  
* Divides by **2**

Example:

00001010 (10)  
→ 00000101 (5)

## **Important Rules**

* Bits shifted out are **lost**  
* Zeros are added at the opposite end  
* MSB \= leftmost bit  
* LSB \= rightmost bit

### **Multiple Shifts**

Each shift \= ×2 or ÷2

Example:

00000011 (3)  
\<\< 2 → 00001100 (12)

📌 **Exam Tip:**  
State:

* “bits lost”  
* “zeros inserted”  
* “value multiplied/divided”

# **➖ 6\. Two’s Complement (8-bit)**

Used to represent **negative numbers**

## **Range of 8-bit Two’s Complement**

* **\-128 to \+127**

## **Converting Positive to Two’s Complement**

Just write normal binary:

Example: \+5  
\= **00000101**

## **Converting Negative Numbers**

### **Steps:**

1. Write positive binary  
2. Invert bits  
3. Add 1

### **Example: \-5**

1. \+5 \= 00000101  
2. Invert → 11111010  
3. Add 1 → **11111011**

## **Converting Back to Denary**

Example: 11111011

1. Invert → 00000100  
2. Add 1 → 00000101 \= 5  
   → Answer \= **\-5**

📌 **Exam Tip:**  
Always show:

* inversion step  
* \+1 step

# **⚠️ Key Definitions**

* **Bit**: Binary digit (0 or 1\)  
* **Byte**: 8 bits  
* **MSB**: Most Significant Bit (leftmost)  
* **LSB**: Least Significant Bit (rightmost)  
* **Overflow**: Result exceeds storage capacity  
* **Register**: Temporary storage in CPU

# **📝 Common Exam Mistakes**

❌ Forgetting to:

* Group binary correctly for hex  
* Show working steps  
* Use 8 bits when required  
* Add carry in binary addition  
* Add 1 in two’s complement

# **🧠 Quick Summary**

* Binary \= base 2 → used by computers  
* Denary \= base 10 → used by humans  
* Hex \= base 16 → compact binary  
* Shifts \= ×2 or ÷2  
* Overflow \= \>255 (8-bit)  
* Two’s complement \= negative numbers

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAA1CAYAAABCx1DaAAALJ0lEQVR4Xu2d3csNXxTHf/+AUoqiiLggSkoIpSiSt+TCSyJJpFxwQ3HDBUUppLyEXCmSRApJLkQKKZS85aXEBUXK1fz6zK/9NM+y9+yXec7MOb9Zn5r07HPOzDprr/Xde6/ZZ/yTKYqiKK3gH9mgKIqi/D9RwVcURWkJKviKoigtQQVfURSlJajgK4qitAQVfEVRlJaggq8oitISVPAVRVFaggq+oihKS1DBVxRFaQkq+IqiKC1BBV9RFKUlqOAriqK0BBV8RVGUlqCCryiK0hJU8BVFUVpCbYL/7du37M+fP7K56+k2uz9//iybeoJuspv+pF97jW6z+8ePH9nv379lc9fTq3YPBLUI/tWrV7NVq1bJ5p7g8ePH2cyZM7tC9Dds2JBduHBBNvcEe/bsyfbu3Suba4d+nDdvXt6vvQh51A0xgP/wYzfkRSxfv37NJk+enP/bNjou+M+ePctGjRrlDAzad+/eLZtr4/nz59mmTZuyNWvWZEePHrWO/CdOnMhWrFghm2sFsUTwXXz69Ck7fPiwbG4EbD148KBszubPn9+4WCGYhw4dks15vzMoEQfbt2/P/Vk3XJNrGxuITQn5Mn78+EYHrO/fv+c5/fbtW/lSH0eOHMk+fvwom2ulLCfu3buXTZkyxalLdVNmK9y/fz+PC46zZ89adSqEjgv+rFmzstOnT/drI2DOnTuXLVu2LBs6dGg2aNCgfq/XBeIzZ86c7MWLF9mHDx+yAwcO5IFsG/mnT5/emFiRWEOGDMn9VuTJkye5zbNnz84GDx7c+KAECBH9iXhK+B7Dhg3763vUxY0bN7Jx48bJ5ry/R4wYkQ/4CMC1a9dyf9cpqlxr4sSJ2d27d7NHjx7lcYkfbasiVsyTJk2SzbXBxGPHjh2yOc9pJk/Dhw/PbWeyVzcxObFu3TprnNZFqK1r167NNm/enJdFX79+nQ9ULp3y0VHBJzBJcDmKGsEnuJcuXdqI4GOTzTaCwBbMDFo2sQhl2rRpsikYbOKQEDD4kSDAh66AqQt8STC6BB8WLlxo9W8IL1++rFQaZNDev3+/bM79xuqjyLZt2/L31wXXOn78eN/f+JJ4cwknr8mJVChV/MigjU222T2xeP369bx/XXZ3mpicePDgQS60TU1AQmxllcRr5JWBigNtZSt+Fx0VfL6AzyjeEyv4tqVuEZZHviUPwch15SiJUNmSgaDg/SwFU0idkZH4BCWz0zJcAeOC87569Uo294NAjGHnzp25/8oEn2AdPXq0bA6CPov5jkVMf8syg+lXae/58+eDRIv4kTEkCfEj1+JAjA34kzbbLJ8BSQ5SoVTxI35i1V6GiQGf74r4cpp8ji2zheQEsUhMNo3LVuKV/GcFajCxadMpHx0VfGbQGFdGiuAzg7AlASBiLI19SWgSnaXRnTt38jZEEGG+dOmSePd/MMqShCmkCj5Cj51yJSJxBYwLvj83o11li9j7FpyH9xthlQJqQNB43XXdMqoIFXX7CRMmyOY+/0p7Kd/R7hODd+/eld4ARJjluW2wbJ86dWq/2WbZ4EmMhsSFjSp+ROx9OZAi+KxWXAKGb1khx8ZMSE5wTaoMTVNmKzuz2FlkYLXP+1NKzB0TfJP4vk5PEXxg5SATIVTsDSYwOUg46qaugQSwNTU4UgUfG0M+WxYwLvAT/pKJFCv2iA6+43w+wQde900EbFQRKj5n+6wRdmmvq92Gqb/LuAsVexfM4LHh9u3b8qU+P8u+C6GKH0OEJkXwgUFZ2pUq9hCSE9hqmwjUTYitcPPmzXzG76ucuOiY4JuE8dXHUgUfiqIfK/aGrVu39ok+N+pwqItQ8bWR+jn8E7J0Dw0YiRT9WLEH/GIEPETw8UXZ6y6qCBXXRIAlRpykPTGCD1L0q4q9ufld9n1DxNdGqh9N3/rKmqmCD0XRryL24PMfmH72cfLkyWzMmDFRx5cvX+RpnPhsvXLlSn7OkSNHZsuXL+8344+h44Lvo4rgA6K/cePGJLEnuCjTFHdFcJw6dUq+NYdA9tWfWX6x40cezCJkG4ev4/BPWSAYfAFThhF9SmWx5zClHEOo4NvEtwg7EqSvbt26lS1atOivdg7fPRvXIMOKzmZvrOCDEX3iMeZzEnPzmxvcZSUb7POVnAbSj6Gr9iqCD+Ql372K2ENIToROTDtNiK2GLVu25LN8U4qOoecFn4DgXkHszg9qt3KL4JkzZ3JH2nbvAIHM62WwYjD7ZYsH55RtHGV7b6EOwYd9+/bl3+3hw4fypVJMKccQKviuei38+vXrLz9xLF68ON+dIts5Ll68KE/TD5fgu4Td1e5j9erVeV/HTj6K0I9MZGwxWAT7ykqQA+3HugQf32Efg1IVQnLC9HPxZnkThNhqMKs/buT6YkTS04JfXEbHLqERHFsdjK2krmDl/KmlmdTP1SH4Zhkdu4QmSeQyliUntvD7Cv5mKSpxia+P1FIEuK5JecIm7CZ+Y+41mBJjankR+H7Fm6J8Z5cIY18TJR1bbhSpIvjFEmNKebFISE6E6hQrH7ka8h0xYuyyFT8wEMuc5P0pPu6Y4JtE8o2cqYIva6YQI/pc11ZWoJOwR27fA95f3A8bQ6rgh17TFTA+5I2yWNGXhMzwKYuVzUxdpAoVcB/Etqow217l4I9fXHFgQ24iSBF9Pi/9gh22QcfsMnPtKCsj1Y+h10wVfHk/CaqIfkhOcH7fqh3oT/bMxxwxZSKXrUYfi6+ZHIuJT0PHBN/8YMC3f9x8oZjRkIBwbYULFX2C1rb05teW1A9tsENHCkMoqYJPwmOnD3wYu4OIc9tEsIrom+Wma+ueGVB9cWEjVaiAfnPtHydm5I/qGCBccSDh3FKoIUb0jfDIFRMbCWw3SY2fYxMeqviRWLQ9mqKIEfyY+MFH5LTtM6miH5ITxKkrLurEZSu+xOdUHgzmh1e23PXRMcEHRM4VHASzeawChwl22zNYJDySoSyJcBK/4vXB+0go/mVEXrBgQS50rnMzM01ZQkOq4JvR3JbY5s49vjN+NKUU38rqzZs3+VZUFyxhqfXGIG2hvCNLOogX74kZ4A1VhIp+cw2c2EK/L1myJC+fkEihQs0vS21ib+DHQizJfRif2Q7bTJGkrxJTqX7kc65Jz9y5c/seq2AOYoLHLfjg3pdN7A2sctgp4yM2JxjYQyaInSDEVmKTh9TNmDEjO3bsWP4oBt6f+uC6jgo+N1JDthQ2CbtkzBLs6dOn8uU+qv4MOzU5gdmnbzdGr0BMhM6cJVWEin6j/2yzZQOTBOIgZLLQNFUeUVHFj/xAyrdTrVcwMUFudzv8Wtvo1Pv37+XLwXRU8Jkh4VDbczd6DZb9tpp/KK6VTgiIfZ3PdekUzEgYvMpEtwwS1LVlNgT6z/ZMol6DvGJlGrICsVHFj6YPiyWGXoW86vYJ6UDTUcEH32N9ewESK/XpdAMFN25T6t7dRGotdqBA6HyP9e0FQu9TdQruf3VD3bsKDFxNP2a6CTou+ECSp9a+uwGWz03bb3YwNDnoVAG7x44d27j9JDj1+pT6ZzfA6qgb7GfAaXLQqQqDZtm9l/8rtQg+wbly5cqonxp3C9wk6ZblK7s+1q9fL5t7Agb9psXewC8Ud+3aJZu7np8/f+YbFpoWewP3EPiPOXqNy5cvVyqx9jK1CL6iKIrSPCr4iqIoLUEFX1EUpSWo4CuKorQEFXxFUZSWoIKvKIrSElTwFUVRWoIKvqIoSktQwVcURWkJKviKoigtQQVfURSlJajgK4qitAQVfEVRlJaggq8oitISVPAVRVFaggq+oihKS/gXdFzLMO+l/AwAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,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>