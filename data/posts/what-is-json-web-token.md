---
title: What is JSON Web Token?
publishedAt: '2021-11-16'
description: JWT or JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
---

JWT or **JSON Web Token** is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

The main purpose of JWTs is to transfer claims between two parties.

The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE).

**JWS** - Signatures are useful to validate the data against tampering.

**JWT** - Encryption is useful to protect the data from being read by third parties.

Signed JWTs have 3 different parts. These three elements are separated by dots.

1. Header

2. Payload

3. Signature

**Header**

The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

![1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1637080958800/tgQlAtwyq.png)

**Payload**

The second part of the token is the payload, which contains the claims. As a developer, you can include information about the user in the payload.

![2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1637080970907/nhMuyiFvl.png)

**Signature**

The signature will be created in the following way.

![3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1637080983709/KoswiHsLG.png)

**Final JWT**

The output is three Base64-URL strings separated by dots.

[header].[payload].[signature]

![4.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1637081000479/UbQ8NF2qt.png)
