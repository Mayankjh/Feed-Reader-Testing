/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         function test_for_url(feed) {
            it('have a URL defined', function() {
                expect(feed.url).toBeTruthy();
            });

         }


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         function test_for_name(feed) {
            it('have a Name defined', function() {
                expect(feed.name).toBeTruthy();
            });

         }
         //for loop that will go through each feed in the allFeeds array and check -
         //1: that the url variable is defined and not empty
         //2: that each feed has a name variable defined and not empty
         for (var feed = 0; feed < allFeeds.length; feed++) {
             test_for_url(allFeeds[feed]);
             test_for_name(allFeeds[feed]);
         }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('hides by default', function() {
            expect($('body')).toHaveClass('menu-hidden');
         });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility when clicked', function() {
            $('.menu-icon-link').trigger( "click" );
            expect($('body')).not.toHaveClass('menu-hidden');

            $('.menu-icon-link').trigger( "click" );
            expect($('body')).toHaveClass('menu-hidden');
        });

    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
            });

         /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         it('at least a single entry element is within feed container', function() {
            console.log($('.feed .entry').length);
            expect($('.feed .entry').length).not.toBe(0);
         });

    });


    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var previousContent;

         beforeEach(function(done) {
            loadFeed(0, function() {
                previousContent = $('.feed').html();
                done();
            });
        });

         it('content changes when new feed is loaded', function(done) {
            //loop through feed and check that each new content added
            //makes a change in the html
                loadFeed(1, function() {
                    expect($('.feed').html()).not.toEqual(previousContent);
                    done();
                });
         });
    });

}());