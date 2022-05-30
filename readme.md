# ASCII Character Codes

**The characters "a-z", "A-Z", "0-9", "!@"$%^&\*()" and a few others can be represented with a decimal value 0 to 127**
[ASCII Table](https://www.asciitable.com/)

# Base 46 character codes

**The characters "a-z", "A-Z", "0-9" can be represented with a decimal value from 0 to 63**
[Base46 Table](https://www.geeksforgeeks.org/encoding-and-decoding-base64-strings-in-python/)

# Encoding

**ASCII Character** s e c
**ASCII Character Code** 115 101 99
**8 Digit binary representation of character code** 01110011 01100101 01100011
[Decimal to Binary Converter](https://www.binaryhexconverter.com/decimal-to-binary-converter)
**All 24 digits joined together** 011100110110010101100011
**Groups of 6 characters** 011100 110110 010101 100011
**Convert each group of 6 into a character** c 2 V j
**Join characters together** c2Vj **_(the encoded string)_**

# btoa()

The **btoa()** method creates a **Base64-encoded ASCII string** from a **binary string** (i.e., a String object in which each character in the string is treated as a byte of binary data).
**Syntax**

### btoa(stringToEncode)

# atob()

The **atob()** function decodes a string of data which has been encoded using Base64 encoding. You can use the btoa() method to encode and transmit data which may otherwise cause communication problems, then transmit it and use the atob() method to decode the data again. For example, you can encode, transmit, and decode control characters such as ASCII values 0 through 31.
**Syntax**

### atob(encodedData)

# URL example

**Domain** message.com **Path** /index.html/ **Query String** ?color=red **Hash/fragment** #value

**Query String** like an options object (color as key, red as value) used to comunicate some number of options to a backend server
**Hash/fragment** intended for the use of the browser specifically, only relevent to the browser
