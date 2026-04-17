---
title: Database
sidebar_position: 1
---



# **📘 CIE IGCSE Computer Science**

# **🗄 Databases – Detailed Notes**

# **1️⃣ What is a Database?**

A **database** is a structured collection of related data stored electronically.

At IGCSE level, you focus on a **single-table database**.

# **🔹 Key Terminology**

| Term | Meaning |
| ----- | ----- |
| Field | A column in a table |
| Record | A row in a table |
| Table | Collection of related records |
| Primary Key | Unique identifier for each record |
| Validation | Checking data is sensible/valid |

## **Example Table: Student Database**

| StudentID | Name | Age | Score | Passed |
| ----- | ----- | ----- | ----- | ----- |
| 1001 | Amina | 16 | 75 | TRUE |
| 1002 | Brian | 17 | 42 | FALSE |

*   
  Fields \= StudentID, Name, Age, Score, Passed  
* Records \= Each row

# **2️⃣ Defining a Single-Table Database**

When given a scenario, you must:

1. Identify fields needed  
2. Assign suitable data types  
3. Choose a primary key

## **Example Scenario**

A school stores student ID, name, date of birth, exam score and whether the student passed.

### **Step 1: Define Fields**

| Field Name | Data Type |
| ----- | ----- |
| StudentID | Integer |
| Name | Text |
| DateOfBirth | Date/Time |
| ExamScore | Integer |
| Passed | Boolean |

### **🧠 Exam Tip**

Field names should:  
✔ Be meaningful  
✔ Not contain spaces (usually)  
✔ Clearly describe data

# **3️⃣ Basic Data Types (Database)**

You must know:

| Data Type | Used For | Example |
| ----- | ----- | ----- |
| Text / Alphanumeric | Words & mixed data | "Austin12" |
| Character | Single character | "A" |
| Boolean | True/False | TRUE |
| Integer | Whole numbers | 25 |
| Real | Decimal numbers | 75.5 |
| Date/Time | Dates and times | 02/03/2026 |

### **🧠 Common Exam Mistakes**

❌ Using Text for numbers  
❌ Using Integer for decimal marks  
❌ Using Text instead of Boolean

# **4️⃣ Primary Key**

## **🔹 Definition**

A **primary key** is a field that uniquely identifies each record.

## **🔹 Properties of a Primary Key**

✔ Must be unique  
✔ Cannot be blank  
✔ Does not change

## **🔹 Good Primary Keys**

* StudentID  
* ProductCode  
* EmployeeNumber

## **🔹 Bad Primary Keys**

❌ Name (not unique)  
❌ Age (not unique)  
❌ Score (not unique)

### **🧠 Exam Tip**

If asked:

Identify a suitable primary key

Choose a field that:

* Has no duplicates  
* Is unique for every record

# **5️⃣ Validation**

Validation ensures data is sensible before being stored.

Examples:

| Validation Type | Example |
| ----- | ----- |
| Range check | Score between 0–100 |
| Presence check | Name cannot be blank |
| Type check | Age must be integer |

**6️⃣ SQL (Structured Query Language)**

SQL is used to query (retrieve) data from a database.

You only need to know limited commands.

# **🔹 Basic Structure**

![][image1]

# **7️⃣ SELECT and FROM**

## **Example**

SELECT Name  
FROM Students

👉 Output: All names from Students table.

# **8️⃣ WHERE Clause**

Used to filter records.

SELECT Name  
FROM Students  
WHERE Age \> 16

## **Using Relational Operators**

* \=  
* \<\>  
*   
* \<  
* \=  
* \<=

# **9️⃣ AND and OR**

## **🔹 AND**

Both conditions must be true.

SELECT Name  
FROM Students  
WHERE Age \> 16 AND Score \> 50

## **🔹 OR**

At least one condition must be true.

SELECT Name  
FROM Students  
WHERE Score \< 40 OR Age \< 15

### **🧠 Exam Tip**

AND → narrows results  
OR → widens results

# **🔟 ORDER BY**

## **Ascending (lowest to highest)**

SELECT Name  
FROM Students  
ORDER BY Score ASCENDING

## **Descending (highest to lowest)**

SELECT Name  
FROM Students  
ORDER BY Score DESCENDING

# **1️⃣1️⃣ Aggregate Functions**

## **🔹 COUNT**

Counts records.

SELECT  COUNT(Name)  
FROM  Students

## **🔹 SUM**

Adds numeric values.

SELECT  SUM(Score)  
FROM  Students

### **🧠 Important Rule**

SUM only works on numeric fields.

# **1️⃣2️⃣ Example SQL Questions**

## **Given Table:**

| ID | Name | Score |
| ----- | ----- | ----- |
| 1 | Ali | 60 |
| 2 | Sara | 80 |
| 3 | John | 45 |

### **Question 1:**

SELECT  Name  
FROM  Students  
WHERE  Score \> 50

Output:  
Ali  
Sara

**Question 2:**  
SELECT  COUNT(Name)  
FROM  Students  
WHERE  Score \< 60

Output:  
1

### **Question 3:**

SELECT  Name  
FROM  Students  
ORDER BY  Score DESCENDING

Output:  
Sara  
Ali  
John

# **1️⃣3️⃣ Identifying SQL Output**

This is VERY common.

Steps:

1️⃣ Look at table  
2️⃣ Apply WHERE condition  
3️⃣ Select required fields  
4️⃣ Apply ORDER BY  
5️⃣ Count or sum if needed

# **1️⃣4️⃣ Common Exam Mistakes**

❌ Forgetting WHERE filters  
❌ Misunderstanding AND vs OR  
❌ Sorting wrong direction  
❌ Using SUM on text field  
❌ Choosing wrong primary key

**1️⃣5️⃣ Example Full Question**

### **Scenario:**

A shop stores ProductID, ProductName, Price, InStock.

### **Define Table:**

| Field | Data Type |
| ----- | ----- |
| ProductID | Integer (Primary Key) |
| ProductName | Text |
| Price | Real |
| InStock | Boolean |

### **SQL Example:**

SELECT  ProductName  
FROM  Products  
WHERE  Price \> 50 AND InStock \= TRUE  
ORDER BY  Price ASCENDING

# **🎯 Final Exam Strategy**

When you see a database question:

✔ Identify fields clearly  
✔ Assign correct data types  
✔ Choose correct primary key  
✔ Carefully apply WHERE conditions  
✔ Check sorting direction  
✔ Check logical operators

# **⭐ Quick Summary Table**

| Concept | Key Point |
| ----- | ----- |
| Field | Column |
| Record | Row |
| Primary Key | Unique identifier |
| Validation | Ensures sensible data |
| AND | Both true |
| OR | At least one true |
| ASC | Lowest → Highest |
| DESC | Highest → Lowest |

[image1]: <data:image/png;base64,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>