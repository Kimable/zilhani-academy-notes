---
title: The Internet and the World Wide Web (WWW)
sidebar_position: 1
---

# **🌐 CIE IGCSE Computer Science – The Internet and the World Wide Web**

This topic explains the structure of the **internet**, how the **world wide web (WWW)** works, URLs, HTTP/HTTPS, web browsers, web page retrieval, and cookies.

# **1️⃣ Internet vs World Wide Web**

| Feature | Internet | World Wide Web (WWW) |
| ----- | ----- | ----- |
| Definition | Global network of interconnected computers and devices | Collection of websites and web pages accessed via the internet |
| Function | Provides infrastructure for communication | Uses the internet to deliver content (websites) |
| Example | Routers, IP addresses, network cables | Google, Wikipedia, YouTube |

**Key point:** The internet is the **hardware/network infrastructure**, while the WWW is a **service that runs on it**.

# **2️⃣ Uniform Resource Locator (URL)**

**Definition:**

A URL is a **text-based address** used to locate a specific web page on the internet.

**Structure:**

[https://www.example.com/folder/page.html](https://www.example.com/folder/page.html)  
|      |       |         |  
|protocol|domain |path/file|

* **Protocol:** `http://` or `https://`  
* **Domain name:** `www.example.com` – human-readable address  
* **Path & filename:** `/folder/page.html` – location of the file on the server

**Example:**  
`https://www.wikipedia.org/wiki/Physics`

* Protocol: HTTPS  
* Domain: wikipedia.org  
* Path/file: `/wiki/Physics`

# **3️⃣ HTTP and HTTPS**

| Feature | HTTP | HTTPS |
| ----- | ----- | ----- |
| Stands for | Hypertext Transfer Protocol | Hypertext Transfer Protocol Secure |
| Purpose | Transfers web pages from server to client | Transfers web pages securely (encrypted) |
| Security | Data is sent as plain text | Data is encrypted using SSL/TLS |
| Use | Public websites | Banking, login pages, online shopping |

**Key point:** HTTPS protects sensitive information like passwords, credit card numbers.

# **4️⃣ Web Browser**

**Definition:**

Software that allows a user to access, retrieve, and display web pages.

**Main Purpose:**

* Render **HTML** and display web content.

**Common Functions:**

* Storing **bookmarks/favourites**  
* Recording **user history**  
* Allowing **multiple tabs**  
* Storing **cookies**  
* Navigation tools (Back/Forward buttons)  
* **Address bar** for URLs

**Examples:**

* Google Chrome, Mozilla Firefox, Microsoft Edge, Safari

# **5️⃣ How Web Pages Are Located, Retrieved, and Displayed**

**Step-by-Step Process:**

1. **User enters URL** in browser’s address bar.  
2. **Domain Name System (DNS)** converts the domain name to an **IP address** of the web server.  
3. **Browser sends HTTP/HTTPS request** to the web server at that IP address.  
4. **Web server locates HTML file** (and other resources: CSS, images, scripts).  
5. **Server sends response** (HTML, CSS, JavaScript) back to browser.  
6. **Browser renders web page** using HTML and displays it on the device.

**Key Roles:**

| Component | Role |
| ----- | ----- |
| Web browser | Sends requests, renders HTML, displays pages |
| DNS | Converts domain name → IP address |
| Web server | Stores and serves web pages/files |
| HTML | Language used to structure web page content |

# **6️⃣ Cookies**

**Definition:**

Small files stored on a user’s device by a web browser containing information about the user’s interaction with a website.

**Types of Cookies:**

| Type | Duration | Purpose |
| ----- | ----- | ----- |
| Session cookies | Temporary, deleted when browser closes | Track user session, e.g., online shopping cart |
| Persistent cookies | Stored on device for set time | Save login credentials, preferences, settings |

**Uses of Cookies:**

* Save **personal details** for forms  
* Track **user preferences** (language, theme)  
* Hold items in **online shopping carts**  
* Store **login credentials**

**Security note:** Cookies are **not programs**, but can be used to track online activity.

# **🧠 Key Terms**

| Term | Definition |
| ----- | ----- |
| Internet | Global network infrastructure connecting computers |
| World Wide Web | Collection of web pages accessed via the internet |
| URL | Text-based address to locate a web page |
| HTTP | Protocol for transferring web pages (not encrypted) |
| HTTPS | Secure protocol using encryption |
| Web browser | Software to access, retrieve, and display web pages |
| DNS | Converts domain names into IP addresses |
| Web server | Computer that stores and serves web pages |
| HTML | Language to structure web content |
| Cookies | Files storing user information and preferences |

# **📝 Exam Tips**

1. **Always distinguish internet vs WWW** – infrastructure vs content.  
2. When describing **how a web page is retrieved**, mention:  
   * Browser → DNS → IP address → Web server → HTML → Render.  
3. Explain **HTTP vs HTTPS** in terms of security.  
4. Include examples for **cookies** (shopping carts, login credentials).  
5. Use diagrams where possible for **browser-DNS-server interaction**.  
6. Mention both **session and persistent cookies** and their purpose.

# **⭐ Quick Summary**

* **Internet:** network infrastructure  
* **WWW:** websites/web pages accessed via internet  
* **URL:** address of web page (protocol \+ domain \+ path/file)  
* **HTTP:** transfers pages; **HTTPS:** secure/encrypted  
* **Web browser:** retrieves, renders, displays pages; stores cookies, history, bookmarks  
* **Cookies:** store user info; session (temporary) or persistent (long-term)
