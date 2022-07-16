---
title: How to send an email with Golang using SMTP
publishedAt: '2022-02-25'
description: In this article, I'll show you how to send an email with Golang using SMTP.
---

In this article, I'll show you how to send an email with Golang using SMTP.

We'll be using the [SMTP](https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp) to send the email. You can use any SMTP service but here I'll use the Mailtrap. Mailtrap is a testing tool and is not designed to deliver emails to real addresses.

Here are some of the SMTP providers you can consider:

- MailGun
- SendGrid
- Postmark
- Sendinblue

Please refer to the corresponding documentation to understand the setup instructions.

To send an email using SMTP, you must collect the below information from your SMTP provider:

- Host
- Port
- Username
- Password

![mailtrap-dashboard.png](/mailtrap-dashboard.png)

Create a new folder called `send-email`.

```bash
mkdir send-email

cd send-email

touch main.go
```

Open the `main.go` and import the necessary packages.

```go
package main

import (
	"fmt"
	"net/smtp"
)
```

Let's declare the variables to hold the SMTP configuration.

```go
func main() {
    // SMTP configuration
    username := "<smtp username>"
    password := "<smtp password>"
    host := "smtp.mailtrap.io"
    port := "25"
}
```

Replace the `host` and `port` values if you're using a different SMTP provider.

Add the variables to hold the `subject`, `body`, `from`, `to`.

```go
// Subject and body
subject := "Simple HTML Email"
body := "Here is a simple plain text."
```

```go
// Sender and receiver
from := "from@example.com"
to := []string{
  "to@example.com",
}
```

Now, let's build the message to be sent.

We'll append the `from`, `to`, `subject`, `body` to create the `message`. The message lines are separated with CRLF characters.

```go
// Build the message
message := fmt.Sprintf("From: %s\r\n", from)
message += fmt.Sprintf("To: %s\r\n", to)
message += fmt.Sprintf("Subject: %s\r\n", subject)
message += fmt.Sprintf("\r\n%s\r\n", body)
```

Now call the `PlainAuth` method to start the authentication with the SMTP server. PlainAuth returns an Auth that implements the PLAIN authentication mechanism

```go
// Authentication.
auth := smtp.PlainAuth("", username, password, host)
```

Now send the email using `SendMail` method. The method returns an error if sending an email is not successful. Make sure you catch the error properly.

```go
// Send email
err := smtp.SendMail(host+":"+port, auth, from, to, []byte(message))
if err != nil {
  fmt.Println(err)
  return
}

fmt.Println("Email sent successfully.")
```

Here is the complete working code.

```go
package main

import (
	"fmt"
	"net/smtp"
)

func main() {
  // SMTP configuration
  username := "<SMTP username>"
  password := "<SMTP password>"
  host := "<SMTP host>"
  port := "25"

  // Subject and body
  subject := "Simple HTML Email"
  body := "Here is a simple plain text."

  // Sender and receiver
  from := "from@example.com"
  to := []string{
    "to@example.com",
  }

  // Build the message
  message := fmt.Sprintf("From: %s\r\n", from)
  message += fmt.Sprintf("To: %s\r\n", to)
  message += fmt.Sprintf("Subject: %s\r\n", subject)
  message += fmt.Sprintf("\r\n%s\r\n", body)

  // Authentication.
  auth := smtp.PlainAuth("", username, password, host)

  // Send email
  err := smtp.SendMail(host+":"+port, auth, from, to, []byte(message))
  if err != nil {
    fmt.Println(err)
    return
  }

  fmt.Println("Email sent successfully.")
}
```
