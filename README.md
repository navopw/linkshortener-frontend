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

## License (MIT)

Copyright © 2017 [navopw](https://github.com/navopw)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
