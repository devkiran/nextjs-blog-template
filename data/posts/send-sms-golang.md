---
title: How to send an SMS with Golang using Vonage SMS API
publishedAt: '2022-02-26'
description: In this article, I'll show you how to send an SMS with Golang using Vonage SMS API.
---

In this article, I'll show you how to send an SMS with Golang using [Vonage SMS API](https://developer.nexmo.com/api/sms)

Go to Vonage and create an account to try this code sample.

To send an SMS using Vonage, you must collect the below information from the [dashboard](https://dashboard.nexmo.com/)

- API key
- API secret

![vonage-dashboard.png](/vonage-dashboard.png)

Create a new folder called `send-sms`.

```bash
mkdir send-sms

cd send-sms

touch main.go
```

Open the `main.go` and import the necessary packages.

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strings"
)
```

Create a struct that models the data received from the API.

```go
type VonageResponse struct {
	Messages []struct {
		Status    string `json:"status"`
		ErrorText string `json:"error-text"`
	} `json:"messages"`
}
```

To understand the API response, here is an example response returned by Vonage API.

```json
{
  "message-count": "1",
  "messages": [
    {
      "to": "447700900000",
      "message-id": "0A0000000123ABCD1",
      "status": "0",
      "remaining-balance": "3.14159265",
      "message-price": "0.03330000",
      "network": "12345",
      "client-ref": "my-personal-reference",
      "account-ref": "customer1234"
    }
  ]
}
```

Let's start coding, paste the below code to `main.go`.

```go
func main() {
	apiKey := "<API Key>"
	apiSecret := "<API Secret>"
	apiPath := "https://rest.nexmo.com/sms/json"

	from := "Vonage APIs"
	to := "<From Number>"

    // This is the message
	message := "Hello Vonage SMS API"
}
```

Replace the values for `apiKey` and `apiSecret` with your own values. Don't forget to change the value for `to`. It should be the phone number of the receiver.

Now, let's build the request body. Make sure you've the correct values for all the variables.

```go
// Build the request body
body := url.Values{
	"from":			{from},
	"to":         	{to},
	"text":       	{message},
	"api_key":    	{apiKey},
	"api_secret": 	{apiSecret},
}

// Create a HTTP POST request
r, err := http.NewRequest("POST", apiPath, strings.NewReader(body.Encode()))
if err != nil {
	fmt.Println(err)
	return
}
```

Now, let's create a client and make the HTTP POST request using the method `client.Do`

If the returned error is `nil`, the `res` will contain a non-nil body which is the API response.

```go
r.Header.Add("Content-Type", "application/x-www-form-urlencoded")

client := &http.Client{}
res, err := client.Do(r)
if err != nil {
	fmt.Println(err)
	return
}

defer res.Body.Close()
```

Let's decode the JSON response using `json.NewDecoder` function that takes in the response body and a decode function that takes in a variable of type `VonageResponse`.

```go
resp := &VonageResponse{}
derr := json.NewDecoder(res.Body).Decode(resp)
if derr != nil {
	fmt.Println(err)
	return
}
```

We're expecting the Vonage API to return an array of `Messages` with a length of 1.

If the length is 0, it means there were some internal server errors. Please refer to the example JSON response above.

A `Status` of zero indicates success, a non-zero value means something went wrong.

```go
if len(resp.Messages) <= 0 {
	fmt.Println("Vonage error: Internal Error")
	return
}

if resp.Messages[0].Status != "0" {
	fmt.Errorf("Vonage error: %v (status: %v)", resp.Messages[0].ErrorText, resp.Messages[0].Status)
	return
}

fmt.Println("SMS sent successfully.")
```

Here is the complete working code.

```go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strings"
)

type VonageResponse struct {
	Messages []struct {
		Status    string `json:"status"`
		ErrorText string `json:"error-text"`
	} `json:"messages"`
}

func main() {
	apiKey := "<API Key>"
	apiSecret := "<API Secret>"
	apiPath := "https://rest.nexmo.com/sms/json"

	from := "Vonage APIs"
	to := "<From Number>"

	message := "Hello Vonage SMS API"

	// Request body
	body := url.Values{
		"from":			{from},
		"to":         	{to},
		"text":       	{message},
		"api_key":    	{apiKey},
		"api_secret": 	{apiSecret},
	}

	// Create a HTTP post request
	r, err := http.NewRequest("POST", apiPath, strings.NewReader(body.Encode()))
	if err != nil {
		fmt.Println(err)
		return
	}

	r.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	client := &http.Client{}
	res, err := client.Do(r)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	resp := &VonageResponse{}
	derr := json.NewDecoder(res.Body).Decode(resp)
	if derr != nil {
		fmt.Println(err)
		return
	}

	if len(resp.Messages) <= 0 {
		fmt.Println("Vonage error: Internal Error")
		return
	}

	// A status of zero indicates success; a non-zero value means something went wrong.
	if resp.Messages[0].Status != "0" {
		fmt.Errorf("Vonage error: %v (status: %v)", resp.Messages[0].ErrorText, resp.Messages[0].Status)
		return
	}

	fmt.Println("SMS sent successfully.")
}
```
