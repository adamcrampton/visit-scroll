# visit-scroll
A simple Bash script + Selenium test to visit a URL and scroll to specified element ID.

## Getting Started
1. Clone this repository and run `npm install`.
2. Update the `endpoint` constant value in `tests\test.js` to the URL you would like the browser to visit.
3. Update the `elementId` constant value in `tests\test.js` to the element ID you would like the browser to scroll to.
4. Adjust emulation settings on lines 12 - 27, or comment these lines out for regular desktop display.

### Prerequisites
* Node.js - [Download](https://nodejs.org/en/download/)

## Usage
1. Run `sh fire.sh` in the root directory of the repo.
2. Enter number of page loads to loop through.
3. Sit back and wait - a browser window will load, scroll, then terminate itself after 5 seconds.

## Dependencies
* [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/)
* [ChromeDriver](https://chromedriver.chromium.org/downloads)
* [geckodriver](https://github.com/mozilla/geckodriver)

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/adamcrampton/visit-scroll/tags). 

## Authors
* **Adam Crampton** - [LinkedIn](https://www.linkedin.com/in/adam-crampton-b32585181/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
