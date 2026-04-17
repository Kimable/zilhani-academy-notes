---
title: Arrays
sidebar_position: 2
---



# **📘 CIE IGCSE Computer Science**

# **💻 Arrays – Detailed Notes**

# **1️⃣ What is an Array?**

An **array** is a data structure that stores **multiple values of the same data type** under one name.

Instead of writing:

score1 ← 45  
score2 ← 60  
score3 ← 75

We use:

DECLARE  score :  ARRAY\[1:3\] OF INTEGER

Then access using an **index**:

score\[1\] ← 45  
score\[2\] ← 60  
score\[3\] ← 75

## **🔹 Key Features of Arrays**

* All elements must be the **same data type**  
* Each value is stored in a numbered position  
* The position number is called the **index**  
* The first index can be **0 or 1** (depends on language)

# **2️⃣ Why Do We Use Arrays?**

Arrays are used when:

* You need to store many values of the same type  
* The number of values is known  
* You need to process data using loops

### **Example Uses:**

* Student marks  
* Monthly temperatures  
* Product prices  
* Game scores

# **3️⃣ One-Dimensional (1D) Arrays**

A **1D array** is like a single row or list.

### **Declaration (Index starts at 1\)**

DECLARE  marks :  ARRAY\[1:5\] OF INTEGER

### **Declaration (Index starts at 0\)**

DECLARE  marks  : ARRAY\[0:4\] OF INTEGER

⚠️ Always check what the question specifies.

## **🔹 Writing Values into a 1D Array**

Using iteration:

FOR  i  ← 1 TO 5  
   INPUT marks\[ i \]  
NEXT i

Here:

* `i` is the **index variable**  
* This avoids writing five separate statements

## **🔹 Reading Values from a 1D Array**

FOR i  ←  1 TO 5  
   OUTPUT marks\[ i \]  
NEXT i

## **🔹 Totalling Array Values**

total ← 0  
FOR i  ← 1 TO 5  
   total ← total \+ marks\[ i \]  
NEXT i

## **🔹 Counting Values in Array**

count ← 0  
FOR i ←  1 TO 5  
   IF marks\[ i \] \>= 50 THEN  
      count ← count \+ 1  
   ENDIF  
NEXT i

### **🧠 Exam Tips for 1D Arrays**

✔ Use a loop  
✔ Initialise totals and counters  
✔ Use correct index range  
✔ Avoid going out of bounds

# **4️⃣ Two-Dimensional (2D) Arrays**

A **2D array** is like a table (rows and columns).

Think of it like:

|  | Col1 | Col2 |
| ----- | ----- | ----- |
| Row1 |  |  |
| Row2 |  |  |

## **🔹 Declaration**

DECLARE grid : ARRAY \[1:3,1:2\] OF INTEGER

This means:

* 3 rows  
* 2 columns

## **🔹 Accessing a 2D Array**

grid\[2,1\]

This means:

* Row 2  
* Column 1

# **5️⃣ Nested Iteration (Very Important)**

To process a 2D array, you MUST use nested loops.

## **🔹 Writing Values into 2D Array**

FOR row  ←  1 TO 3  
   FOR col  ←  1 TO 2  
      INPUT grid\[row,col\]  
   NEXT col  
NEXT row

## **🔹 Reading Values from 2D Array**

FOR row  ←  1 TO 3  
   FOR col  ←  1 TO 2  
      OUTPUT grid\[row,col\]  
   NEXT col  
NEXT row

## **🔹 Totalling 2D Array**

total ←  0

FOR row  ←  1 TO 3  
   FOR col  ←  1 TO 2  
      total ← total \+ grid\[row,col\]  
   NEXT col  
NEXT row

### **🧠 Exam Tip**

Outer loop \= rows  
Inner loop \= columns

Indent properly to avoid losing marks.

# **6️⃣ Using Variables as Indexes**

Instead of:

marks\[1\]  
marks\[2\]

We use:

Marks\[ i \]

This allows:

* Efficient processing  
* Dynamic access  
* Fewer lines of code

# **7️⃣ Common Array Exam Questions**

You may be asked to:

1. Trace an array  
2. Fill missing loop code  
3. Write code to total/count values  
4. Identify errors  
5. Complete nested loops  
6. Identify index mistakes

# **8️⃣ Very Common Mistakes**

❌ Going out of array bounds  
❌ Forgetting to initialise total  
❌ Using wrong index range  
❌ Mixing up row and column order  
❌ Not using nested loops for 2D  
❌ Declaring wrong array size

# **9️⃣ Example Exam Question**

### **Question:**

Store 5 temperatures in an array and output the highest value.

### **Answer:**

DECLARE temp : ARRAY\[1:5\] OF REAL  
DECLARE highest : REAL

FOR i  ←  1 TO 5  
   INPUT temp\[ i \]  
NEXT i

highest ← temp\[1\]

FOR i  ←  2 TO 5  
   IF temp\[ i \] \> highest THEN  
      highest ← temp\[ i \]  
   ENDIF  
NEXT i

OUTPUT highest

# **🔟 Why Arrays Improve Programs**

✔ Reduce repetition  
✔ Make code cleaner  
✔ Allow efficient processing  
✔ Enable searching and sorting  
✔ Essential for structured programming

# **⭐ Final Summary Table**

| Type | Structure | Loops Needed |
| ----- | ----- | ----- |
| 1D | Single list | One loop |
| 2D | Table (rows & columns) | Nested loops |

# **🎯 Final Exam Advice**

✔ Always check starting index (0 or 1\)  
✔ Always use loop variables as indexes  
✔ Carefully track row and column order  
✔ Keep indentation neat  
✔ Initialise totals and counters