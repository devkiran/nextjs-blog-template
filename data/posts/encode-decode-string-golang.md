---
title: How to Base64 encode and decode data in Golang
publishedAt: '2022-03-03'
description: In this article, I'll show you Base64 encoding and decoding in Golang.
---

In this post, I'll show you Base64 encoding and decoding in Golang.

Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII.

This is to ensure that the data remain intact without modification during transport.

Read more about the Base64 encoding scheme [here](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

Golang provides built-in support for base64 encoding and decoding with a package `encoding/base64`.

Let's see the code for base64 encoding and decoding in Golang.

Create a new folder called `base64-encode-decode`.

```bash
mkdir base64-encode-decode

cd base64-encode-decode

touch main.go
```

Open the `main.go` and import the necessary packages.

```go
package main

import (
    "encoding/base64"
    "fmt"
)
```

The package `encoding/base64` provides 2 functions for encoding and decoding data in Base64 format.

`EncodeToString` encodes the passed data in Base64 format and returns the encoded data as a string.

```go
func (enc *Encoding) EncodeToString(src []byte) string
```

`DecodeString` decodes the passed data (string) and returns the decoded data as a byte slice.

```go
func (enc *Encoding) DecodeString(s string) ([]byte, error)
```

Let's add the code to encode and print the encoded data.

```go
func main() {
	text := "Hello World - Go!"

	encodedText := base64.StdEncoding.EncodeToString([]byte(text));

	fmt.Printf("Encoded Text: %s\n", encodedText)
}
```

The above code will print the following output:

```go
Encoded Text: SGVsbG8gV29ybGQgLSBHbyE=
```

Now, let's add the code to decode the encoded data and print the decoded data.

```go
decodedText, err := base64.StdEncoding.DecodeString(encodedText);
if err != nil {
    panic(err)
}

fmt.Printf("Decoded Text: %s\n", decodedText)
```

The above code will print the following output:

```
Decoded Text: Hello World - Go!
```

Here is the complete working code.

```go
package main

import (
	"encoding/base64"
	"fmt"
)

func main() {
	text := "Hello World - Go!"

	encodedText := base64.StdEncoding.EncodeToString([]byte(text));

	fmt.Printf("Encoded Text: %s\n", encodedText)

	decodedText, err := base64.StdEncoding.DecodeString(encodedText);
    if err != nil {
        panic(err)
    }

	fmt.Printf("Decoded Text: %s\n", decodedText)
}
```
