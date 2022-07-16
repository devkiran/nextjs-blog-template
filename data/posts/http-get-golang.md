---
title: Make an HTTP GET request in Go
publishedAt: '2022-01-22'
description: We’ll explore how to make an HTTP GET request in Go. We will fetch the JSON content from an API endpoint and display the results on the console.
---

We will fetch the JSON content from an API endpoint and display the results on the console.

Create a new folder called `http-request`.

```bash
mkdir http-request

cd http-request

touch main.go
```

Open the `main.go` and import the necessary packages.

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)
```

Make the HTTP request to `https://jsonplaceholder.cypress.io/todos/11`

```go
func main() {
	resp, err := http.Get("https://jsonplaceholder.cypress.io/todos/11")
	if err != nil {
		print(err)
	}

	defer resp.Body.Close()
}
```

Create a struct that models the data received from the API.

```go
type PostResponse struct {
	UserId    int    `json:"userId"`
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func main() {
    ...
}
```

Let's decode the JSON response using `json.NewDecoder` function that takes in the response body and a decode function that takes in a variable of type `PostResponse`.

```go
var post PostResponse

if err := json.NewDecoder(resp.Body).Decode(&post); err != nil {
	print(err)
}

fmt.Printf("UserId: %v\n", post.UserId)
fmt.Printf("Id: %v\n", post.Id)
fmt.Printf("Title: %v\n", post.Title)
fmt.Printf("Completed: %v\n", post.Completed)
```

Here is the complete working code.

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type PostResponse struct {
	UserId    int    `json:"userId"`
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func main() {
    // Make the http request
	resp, err := http.Get("https://jsonplaceholder.cypress.io/todos/11")
	if err != nil {
		print(err)
	}

    // Close the body
	defer resp.Body.Close()

	var post PostResponse

    // Decode the JSON response
	if err := json.NewDecoder(resp.Body).Decode(&post); err != nil {
		print(err)
	}

    // Print the result on the console
	fmt.Printf("UserId: %v\n", post.UserId)
	fmt.Printf("Id: %v\n", post.Id)
	fmt.Printf("Title: %v\n", post.Title)
	fmt.Printf("Completed: %v\n", post.Completed)
}
```
