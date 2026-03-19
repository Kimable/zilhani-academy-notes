---
title: Network Hardware
sidebar_position: 4
---

# **📘 CIE IGCSE Computer Science – Network Hardware**

This topic focuses on how devices connect to networks and how data is identified and routed. You must understand:

* Network Interface Cards (NICs)  
* MAC addresses  
* IP addresses (IPv4 & IPv6)  
* Routers and their role

This is commonly tested in **definition, comparison, and explanation questions**.

# **1️⃣ Network Interface Card (NIC)**

## **🔹 Definition**

A Network Interface Card (NIC) is a hardware component that allows a computer to connect to a network.

Without a NIC, a device **cannot access a network**.

## **🔹 Purpose of a NIC**

* Enables communication between device and network  
* Sends and receives data packets  
* Contains a unique MAC address

## **🔹 Types of NIC**

1. Wired NIC (Ethernet)  
2. Wireless NIC (Wi-Fi)

Most modern computers have built-in NICs.

## **🔹 Important Syllabus Point**

A NIC is given a MAC address at the point of manufacture.

This means:

* The MAC address is permanently assigned.  
* It is unique to that device.

# **2️⃣ MAC Address**

## **🔹 Definition**

A MAC (Media Access Control) address is a unique identifier assigned to a NIC.

It identifies a device on a local network.

## **🔹 Purpose of a MAC Address**

* Identifies device within a local network  
* Ensures data is delivered to correct hardware

It works at the **Data Link Layer** (if OSI model is mentioned).

## **🔹 Structure of a MAC Address**

* 48 bits long  
* Written in hexadecimal  
* Usually written as 6 groups of 2 hex digits

Example:

00:1A:2B:3C:4D:5E

## **🔹 Why Hexadecimal?**

Hexadecimal:

* Compact way of writing binary  
* Uses digits 0–9 and letters A–F

## **🔹 How MAC Addresses Are Created**

MAC address consists of:

1. Manufacturer code (first 3 bytes)  
2. Serial number (last 3 bytes)

Example:

00:1A:2B → Manufacturer code  
3C:4D:5E → Device serial code

## **🔹 Key Characteristics**

✔ Permanent  
✔ Unique  
✔ Hardware-based  
✔ Cannot normally be changed

## **🔹 Exam Tip**

If question asks difference between MAC and IP:

* MAC → physical, permanent  
* IP → logical, changeable

# **3️⃣ IP Address**

## **🔹 Definition**

An IP (Internet Protocol) address is a logical address assigned to a device on a network.

It identifies a device’s location on a network.

## **🔹 Purpose of an IP Address**

* Allows devices to communicate across networks  
* Identifies source and destination of data

Unlike MAC:

* IP addresses can change.

## **🔹 Types of IP Address**

1. Static IP  
2. Dynamic IP

### **🔹 Static IP**

* Manually assigned  
* Does not change  
* Used for servers

### **🔹 Dynamic IP**

* Automatically assigned  
* Given by router using DHCP  
* Can change over time

Most home networks use dynamic IP addresses.

# **4️⃣ IPv4 vs IPv6**

This is frequently tested.

## **🔹 IPv4**

* 32 bits  
* Written in decimal  
* 4 numbers separated by dots

Example:

192.168.1.1

Range:  
0–255 per section

Total addresses:  
\~4.3 billion

Problem:

* Address shortage

## **🔹 IPv6**

* 128 bits  
* Written in hexadecimal  
* 8 groups separated by colons

Example:

2001:0db8:85a3:0000:0000:8a2e:0370:7334

Advantages:  
✔ Much larger address space  
✔ Better security  
✔ More efficient routing

## **🔹 Comparison Table**

| Feature | IPv4 | IPv6 |
| ----- | ----- | ----- |
| Bit length | 32-bit | 128-bit |
| Format | Decimal | Hexadecimal |
| Address space | Limited | Extremely large |
| Address shortage | Yes | No |

## **🔹 Important Syllabus Point**

An IP address is allocated by the network.

This means:

* Router or ISP assigns it.  
* It is not fixed at manufacture like MAC.

# **5️⃣ Role of a Router**

## **🔹 Definition**

A router is a device that forwards data packets between networks.

It connects different networks together.

## **🔹 Main Roles of a Router**

1. Sends data to correct destination  
2. Connects local network to the internet  
3. Assigns IP addresses (using DHCP)  
4. Chooses best route for data

## **🔹 How Router Sends Data**

When data arrives:

1. Router checks destination IP address.  
2. Uses a routing table.  
3. Forwards data to correct next network.

## **🔹 Router vs Switch (Common Exam Confusion)**

| Router | Switch |
| ----- | ----- |
| Connects networks | Connects devices in same network |
| Uses IP address | Uses MAC address |
| Connects to internet | Does not connect to internet |

---

# **6️⃣ How Everything Works Together**

When sending data:

1. Device uses NIC.  
2. NIC uses MAC address to send data locally.  
3. Router assigns IP address.  
4. Data sent using IP address across networks.  
5. Destination device identified using MAC on local network.

# **7️⃣ Example Scenario**

You send a message online:

* Your NIC sends data.  
* Your router assigns dynamic IP.  
* Router sends data to internet.  
* Destination network uses IP to locate device.  
* Final delivery uses MAC address.

# **8️⃣ Common Exam Questions**

✔ Define NIC  
✔ Explain purpose of MAC address  
✔ Describe structure of MAC address  
✔ Compare MAC and IP addresses  
✔ Difference between static and dynamic IP  
✔ Compare IPv4 and IPv6  
✔ Explain role of router

# **9️⃣ Common Mistakes**

❌ Saying MAC address changes (it does not normally)  
❌ Confusing MAC and IP  
❌ Forgetting IPv6 uses hexadecimal  
❌ Saying router only connects computers (it connects networks)  
❌ Forgetting router assigns IP addresses

# **🔟 Key Definitions to Memorise**

**NIC:** Hardware that allows device to connect to network.  
**MAC address:** Permanent unique hardware address.  
**IP address:** Logical address assigned to device on network.  
**IPv4:** 32-bit address written in decimal.  
**IPv6:** 128-bit address written in hexadecimal.  
**Router:** Device that forwards data between networks.

# **🎯 Final Revision Summary**

NIC → Connects device to network  
MAC → Permanent hardware address  
IP → Logical network address  
IPv4 → 32-bit, decimal  
IPv6 → 128-bit, hexadecimal  
Router → Directs traffic & connects to internet
