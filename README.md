# linkshortener-frontend

> A link shortener frontend with URL validation via tooltips and popup warnings.

A simple, clean frontend for a URL shortening service. Users paste a URL, optionally set a custom name, and submit. Input is validated client-side with Bootstrap tooltips and SweetAlert popups before being sent to the backend.

![preview](https://i.imgur.com/xnWzDO9.png)

## Features

- **URL validation** — Real-time validation with tooltip feedback on focus-out
- **Custom names** — Optional custom short name for each link
- **Popup warnings** — SweetAlert error popups for invalid or empty input
- **Responsive design** — Built with Bootstrap 3

## Screenshots

### Tooltip

![tooltip](https://i.imgur.com/r6LH0lK.png)

### Popup warning

![popupwarning](https://i.imgur.com/F8IdUNH.png)

## Prerequisites

- A URL shortener backend API (the frontend posts to it)
- A web server to host the static files (e.g. nginx, Apache, or any static host)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/navopw/linkshortener-frontend.git
```

2. Serve the directory with any static file server:

```bash
# Using Python's built-in server
python3 -m http.server 8080

# Or using Node.js http-server
npx http-server
```

3. Open [http://localhost:8080](http://localhost:8080) in your browser

## Usage

1. Open the page in your browser
2. Paste a URL into the input field
3. (Optional) Enter a custom name for your short link
4. Click **Shorten!** to submit

## License

```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2017 navo.pw
  
 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
```
