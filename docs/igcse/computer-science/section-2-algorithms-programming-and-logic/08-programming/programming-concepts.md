---
title: Programming Concepts
sidebar_position: 1
---

# **📘 CIE IGCSE Computer Science**

# **💻 Programming Concepts – Detailed Notes**

# **1️⃣ Variables and Constants**

## **🔹 Variable**

A **variable** is a named storage location in memory whose value can change during program execution.

### **✅ Declaration**

You must:

* Choose a **meaningful identifier**  
* Specify the **data type**  
* Assign a value (optional at declaration in some languages)

Example (pseudocode):

DECLARE age : INTEGER  
age ← 16

### **🧠 Exam Tip**

* Always use meaningful names:  
  * ❌ x  
  * ✅ studentAge  
* Variables must be declared before use.

## **🔹 Constant**

A **constant** is a named value that does NOT change during program execution.

Example:

DECLARE PI : REAL  
PI ← 3.142

Or:

CONSTANT MAX\_MARK ← 100

### **🧠 Exam Tip**

* Use constants for fixed values (tax rate, maximum size, etc.)  
* Makes program easier to maintain.

# **2️⃣ Basic Data Types**

You must know these:

| Data Type | Description | Example |
| ----- | ----- | ----- |
| INTEGER | Whole numbers | 5, \-2 |
| REAL | Decimal numbers | 3.14, \-1.5 |
| CHAR | Single character | 'A' |
| STRING | Multiple characters | "Hello" |
| BOOLEAN | True or False | TRUE |

## **🔹 Examples**

DECLARE score : INTEGER  
DECLARE temperature : REAL  
DECLARE initial : CHAR  
DECLARE name : STRING  
DECLARE isPassed : BOOLEAN

### **🧠 Common Exam Mistakes**

* Using STRING instead of CHAR  
* Storing decimals in INTEGER  
* Confusing BOOLEAN with STRING

# **3️⃣ Input and Output**

## **🔹 Input**

Used to get data from the user.

INPUT  name  
INPUT  age

## **🔹 Output**

Used to display data.

OUTPUT  "Welcome"  
OUTPUT  name

### **🧠 Exam Tip**

* Always prompt clearly:

OUTPUT  "Enter your age:"  
INPUT  age

# **4️⃣ Control Structures**

These are the **three fundamental programming constructs**.

# **🔹 (a) Sequence**

Instructions executed in order.

INPUT number  
square ← number \* number  
OUTPUT square

Execution flows top → bottom.

# **🔹 (b) Selection**

Used to make decisions.

## **1️⃣ IF Statement**

IF mark \>= 50 THEN  
   OUTPUT "Pass"  
ELSE  
   OUTPUT "Fail"  
ENDIF

## **2️⃣ CASE Statement**

Used when there are many possible values.

CASE grade OF  
   "A": OUTPUT "Excellent"  
   "B": OUTPUT "Good"  
   "C": OUTPUT "Average"  
   OTHERWISE OUTPUT "Invalid"  
ENDCASE

### **🧠 Use CASE when:**

* Comparing ONE variable to MANY values.

# **🔹 (c) Iteration (Loops)**

Used to repeat instructions.

## **1️⃣ Count-Controlled Loop**

Repeats a fixed number of times.

FOR i ← 1 TO 5  
   OUTPUT i  
NEXT i

## **2️⃣ Pre-condition Loop**

Condition checked BEFORE loop runs.

WHILE number \> 0 DO  
   INPUT number  
ENDWHILE

If condition is false initially → loop never runs.

## **3️⃣ Post-condition Loop**

Condition checked AFTER loop runs.

REPEAT  
   INPUT number  
UNTIL number \= 0

Runs at least once.

### **🧠 Exam Tip**

Know the difference between:

* WHILE (pre-condition)  
* REPEAT UNTIL (post-condition)

# **🔹 (d) Totalling and Counting**

Very common in exams.

## **Counting Example**

count ← 0  
FOR i ← 1 TO 5  
   INPUT number  
   IF number \> 10 THEN  
      count ← count \+ 1  
   ENDIF  
NEXT i

## **Totalling Example**

total ← 0  
FOR i ← 1 TO 5  
   INPUT number  
   total ← total \+ number  
NEXT i

### **🧠 Important Rule**

* Initialize counters and totals to 0  
* Update inside loop

# **🔹 (e) String Handling**

Know these functions:

| Function | Meaning |
| ----- | ----- |
| LENGTH(string) | Returns length |
| SUBSTRING(string, start, length) | Extracts part |
| UPPER(string) | Converts to uppercase |
| LOWER(string) | Converts to lowercase |

## **Example**

name ← "Austin"

OUTPUT LENGTH(name)       // 6  
OUTPUT SUBSTRING(name,1,3) // Aus  
OUTPUT UPPER(name)         // AUSTIN

⚠️ The first character position may be 0 or 1 depending on language.

# **🔹 (f) Operators**

## **Arithmetic Operators**

| Operator | Meaning |
| ----- | ----- |
| \+ | Addition |
| \- | Subtraction |
| \* | Multiply |
| / | Divide |
| ^ | Power |
| MOD | Remainder |
| DIV | Integer division |

Example:

10 DIV 3 \= 3  
10 MOD 3 \= 1

## **Relational Operators**

| Operator | Meaning |
| ----- | ----- |
| \= | Equal |
| \<\> | Not equal |
| \< | Less than |
| \> | Greater than |
| \<= | Less or equal |
| \>= | Greater or equal |

## **Logical Operators**

| Operator | Meaning |
| ----- | ----- |
| AND | Both true |
| OR | At least one true |
| NOT | Opposite |

Example:

IF age \>= 16 AND citizen \= TRUE THEN

# **5️⃣ Nested Statements**

A statement inside another statement.

Example (nested IF):

IF age \>= 16 THEN  
   IF hasID \= TRUE THEN  
      OUTPUT "Allowed"  
   ENDIF  
ENDIF

Nested loop example:

FOR i ← 1 TO 3  
   FOR j ← 1 TO 2  
      OUTPUT i, j  
   NEXT j  
NEXT i

⚠️ Maximum 3 levels in exam.

# **6️⃣ Procedures and Functions**

## **🔹 Procedure**

A subprogram that performs a task.  
Does NOT return a value.

![][image1]

## **🔹 Function**

Returns a value.

![][image2]

## **🔹 Parameters**

Values passed into procedures/functions.

![][image3]

Up to 3 parameters in exam.

## **🔹 Local vs Global Variables**

| Type | Meaning |
| ----- | ----- |
| Global | Accessible everywhere |
| Local | Only inside procedure/function |

Example:

![][image4]

# **7️⃣ Library Routines**

Built-in functions provided by language.

You must know:

* MOD  
* DIV  
* ROUND  
* RANDOM

Example:

number ← RANDOM(1,10)  
rounded ← ROUND(3.6)

# **8️⃣ Writing Maintainable Programs**

Very important for high marks.

## **✅ Meaningful Identifiers**

![][image5]

## **✅ Commenting**

Use comments to explain logic:

![][image6]

Comment:

* Complex logic  
* Procedures  
* Important formulas

Do NOT:

* Comment obvious lines unnecessarily

## **✅ Use Procedures and Functions**

Break large programs into smaller parts.

Benefits:

* Easier debugging  
* Easier testing  
* Easier modification  
* Improves readability

# **⭐ Common Exam Question Types**

1. Trace the code.  
2. Complete missing code.  
3. Write an IF or loop.  
4. Identify data type.  
5. Explain difference between loop types.  
6. Identify errors.  
7. Write a procedure/function.

# **🚨 Very Common Mistakes**

❌ Forgetting to initialise total  
❌ Using \= instead of ←  
❌ Infinite loops  
❌ Wrong loop type  
❌ Not using meaningful identifiers  
❌ Mixing up MOD and DIV

# **🎯 Final Exam Advice**

✔ Read question carefully  
✔ Underline key words (count, total, repeat until, etc.)  
✔ Use indentation properly  
✔ Check loop conditions  
✔ Check variable names are consistent

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAABMCAYAAACME0CDAAAGbUlEQVR4Xu2biW0dMQxE04A7cTUux/W4Hjfj+w4mAANilpS0t2kPgYfk66AokbO7/tj/5yuwu7u7r5eXFyHEN+IPCxUmsQrx/ZBYhSiCxCpEESRWIYogsQpRBIlViCJIrEIUQWIVoggSqxBFkFiFKILEKkQRJFYhiiCxClEEiVWIIkisQhThVLFeXV19XV9fT9qNy8vLr5ubm0n7HlxcXPzn9vZ20r+GPX1XBXm3M0EdcL+YcppYUbRIFLcbECnEyu0tMGetMJbOG2Gp795FbQ1rfPdyOALWlljHOE2sSFKrSJDAOXdVu1J7MSwpAvaxJUt9rxFUjzW+JdZjOU2srcJdUgQY3xO3v+tmBdKKy8/3d31+XM8KMPPtHwn9GG7PYvd9o8Ib8W15iPp4nuH3x2tke+f9jMC+Off8lOXPpbUvX3vWz094+BzN3ZtTxNpL0NyrvSWG2z28XpRga4+KihPuWSNWfPZ+8X8ujtZ5YKzvy/aV0fLNvvgMWhfVkX1Ze3RWLVrrAqsHPmujtS8vZJvvxyNWHy+f/56cIlYubqZ10BEjYmWyIo3WzgrN4P1kBRj5ZqJCzGLFWI4rWzsj8x3tGXv0bVGsGdnYufF6X1kNtQTU21fk258R74HPZE8OF2tvc0uSNyJWG+OJEhoJiq+mzFqxYj7H5vszQUV7AtHaGZnvaA+cu0yARm9f2Toj+L1zPaEtE3K0XiRWnuf7GF5/Lw4Xa1YcBhf+CNHVsNefxYFxLKgowR6OORsf+ca4ngCyWFk8S8h8R3cgboti9X5HxmZnNQdei/Ph4T1wWxZnr+8IDhVrb7Nrig8JY99WBLauCcWuylGRRoKKxO5BzObLfEcFGPnGOD8WvngfUYF5n9E+Rsl8R3vmz1kbGNkX2EKsvAd8jtYCvX31ahTrrI13KYeKtZeY7Co/ignW8MLwfXbgLDDGz7ckeh9RnwnX9tnzzX6zQrNiB3yG7DsST4vMdxQbz+X9je7Lrxmt3cJ8eXpjfOxRbNzH/jwce3Que3CoWLExvrMYI4ckxG/mULEKIZYjsQpRBIlViCJIrEIUQWIVoggSqxBFkFiFKILEKkQRJFYhivBrxOpfNzzq9bDvgH8tLnt7rBr8LvBv4XCxrnn/d4tXEtesv5S1cW8Rs8RaH4n1ANbGvUXMEmt9DhMr/wrCaP3Kw/fxPMMXoP81RJbMLQp/DhxvFLd/RPd9I2fGa3CfH7NUrJg795c8mGPxm7g4hixf/uIW9bNY7fzmxliNw8RqtMTCB26Jts+tOxTGcSFE67TW75Gt3aMXNxcij23FzOLkM/TtR4sVsdlP6PCv30crX/6ibWN8DP7M4DO7MP80QrHe399/vb6+TgZvQVZ4XLQAycmuuD3gjwsZZOu3sIJbWuytuCMhYM++bU7M2dg18Ucx9rD1fA6z2IDPl51XdgZWK79JqCAU68PDw2TgVmQJi8Q1R6z+amywP5Ctn4Gx7NcYLZRW3JGI5ojVLiSeaGy0TgusyX4NHhth62VibeWrdV7A5yTa608lFet3uLNyWyuJnLhI/CBbv8XRd1Zuy2Lu3YHY59L4eY0RbL1MrK18tc7LxsJntP+fTCjW5+fnycCtYAEa0cHz56yN283XVmI1WgXUI4sb8fjziM4nagO2TxOhXVSi/X1HsWb5GhUr/r/2QlqJUKy4qz4+Pk4GbwUOGgfMgrIkGVHRWXIMSxLG8lzv2/e1/O9FFjdAnL6P54LszPxcjPGC4DWjtUfAnK3F2srXHLF6X0fm8wxCsX58fOz6JZMQYj6hWGG4s769vU0mCCHOIRUrOp+eniYThBDnkIr18/Pz38sR7+/vk0lCiONJxQrDt8J7fjMshBinKVZ80YS7q/52FeJ8mmKFYRC+bNI3w0KcS1esMIlViPMZEiu+ZNLjsBDnMiRWGO6seGdY3w4LcQ7DYoVhggQrxDnMEisMkyBYPRILcSyzxQrDIzH+hsW/+uJJiGNYJFYYHoXxLbHeIRbiGBaL1QxOcJfFm076W1aI/VgtVhjedIJYIVq8/I87rR6PhdiWTcRqhpf/4RSPxvg9rP2A3YQrAQuxnE3F6g13W4gTd1x8ewwgYNx9hRDz2U2sMplsW5NYZbIiJrHKZEVMYpXJipjEKpMVMYlVJitiEqtMVsQkVpmsiEmsMlkRk1hlsiImscpkRUxilcmK2F+VL0DEHga5eQAAAABJRU5ErkJggg==>