# Udacity_Project_4
# Feed Reader Testing Project

Testing the Feed Reader app using Javascript testing framework **Jasmine**.

### Reference
- [2.1 Jasmine documentation](http://jasmine.github.io/2.1/introduction.html)

### How to run this test
- Simply visit [here](https://mayankjh.github.io/Udacity_Project_4/#), I publicly hosted this test.

### How to run the this locally
**Option-1 - Simple**:
- Click "Clone in Desktop" / "Download ZIP"
- Open the folder
- Open `index.html` on your preferred browser
- There should be several test results at the bottom of the screen that says "~ specs, ~ failures"

## The tests:

1. tests to make sure that the allFeeds variable has been defined and that it is not empty.
2. loops through each feed and determines if the URL is defined and not empty.
3. loops through each feed and determines that each feed has a name and not empty.
4. ensures the menu element is hidden by default.
5. validates proper functioning of the hamburger menu toggle.
6. tests that there is at least one entry in feed.
7. tests that new content is loaded by loadFeed().
