$('document').ready(function () {

    var searchForm;
    var searchButton;
    var searchField;

    var SEARCH_EXPAND_INCR = 34;
    var SEARCH_FIELD_MIN_WIDTH = 250;

    var SEARCH_BAR_MIN_HEIGHT = 0;
    var SEARCH_BAR_MAX_HEIGHT = 120;

    var EXPANDER_MIN_HEIGHT = 120;
    var EXPANDER_MAX_HEIGHT = 180;

    var SHARE_WINDOW_WIDTH = 'width=550,height=266';
    var API_URI = 'http://nerdtalk.ullisenmedia.com/api/read/json';

    var init = function () {

        searchForm = $('#search');
        searchButton = $('#searchButton');
        searchField = $('#q');

        addListeners();

        if(TOTAL_PAGES > DEFAULT_LIMIT) {

            getRelatedPosts();

        } else {

            getRecentPosts();
        }
    };

    var getRecentPosts = function (limit, callback) {

        limit = (limit) ? limit : DEFAULT_LIMIT;

        var url = API_URI + '?callback=?&filter=text&num=' + limit;

        $.getJSON(url, function (data) {

            if (data && data.hasOwnProperty('posts')) {

                if(callback) {

                    callback(data.posts);

                } else {

                    buildRecentPosts(data.posts);
                }

            }

        });
    };

    var getRelatedPosts = function() {

        var url = API_URI + '?callback=?&filter=text&num=5&tagged=';

        var taggedPosts = [];

        getRecentPosts(1, function(posts) {

            if(posts.length > DEFAULT_LIMIT) {

                var post = posts[0];
                var tags = post.tags;

                if(tags && tags.length > 0) {

                    var tag;
                    var tagCount = tags.length;
                    var requestCount = 0;

                    for(var i = 0; i < tagCount; i++) {

                        tag = tags[i];

                        $.getJSON(url + tag, function(data) {

                            requestCount++;

                            if (data && data.hasOwnProperty('posts')) {

                                if(data.posts.length > 0) {

                                    taggedPosts = _.uniq(taggedPosts, data.posts);

                                }

                                if(requestCount === tagCount) {

                                    if(taggedPosts.length > 0) {

                                        buildRecentPosts(taggedPosts);

                                    } else {

                                        getRecentPosts();
                                    }
                                }
                            }
                        });

                    }
                }
            } else {

                getRecentPosts();
            }
        });
    };

    var buildRecentPosts = function (posts) {

        var elements = [];

        $.each(posts, function (key, val) {

            console.log(val['regular-title']);
            elements.push('<li><a href="' + val.url + '">' + val['regular-title'] + '</a></li>');
        });

        $("<ul/>", {
            "class": "recent-post-list",
            html: elements.join('')
        }).appendTo(".recent-posts");
    };

    var onSearchInputChange = function () {

        var text = searchField.val();

        var width = text.length * SEARCH_EXPAND_INCR;

        if (width > SEARCH_FIELD_MIN_WIDTH) {

            searchField.width(width);
        }

    };

    var onSearchButtonClicked = function () {

        var isActive = searchForm.height() > 0;

        if (isActive) {

            searchForm.height(SEARCH_BAR_MIN_HEIGHT);
            $('#expander').height(EXPANDER_MIN_HEIGHT);

        } else {

            searchForm.height(SEARCH_BAR_MAX_HEIGHT);
            $('#expander').height(EXPANDER_MAX_HEIGHT);
        }

    };

    var onShareButtonClicked = function (event) {

        var data = $(event.currentTarget).data();

        if (data.hasOwnProperty('url')) {

            window.open(data.url, '', SHARE_WINDOW_WIDTH);
        }

        return false;
    };

    var addListeners = function () {

        searchButton.click($.proxy(onSearchButtonClicked, this));
        searchForm.focusout($.proxy(onSearchButtonClicked, this))
        searchField.keypress($.proxy(onSearchInputChange, this));

        $('.fb-share').click($.proxy(onShareButtonClicked, this));
        $('.twitter-share').click($.proxy(onShareButtonClicked, this));
        $('.gplus-share').click($.proxy(onShareButtonClicked, this));
    };

    init();
});