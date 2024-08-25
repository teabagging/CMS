# Where to find WordPress help

## In this article

* [Searching The Net For WordPress Help](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#searching-the-net-for-wordpress-help)
  * [Search Using Keywords](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#search-using-keywords)
  * [Brainstorming Search Terms](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#brainstorming-search-terms)
  * [Search Engine Site Search](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#search-engine-site-search)
  * [Use Quotes to Group Keywords](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#use-quotes-to-group-keywords)
* [WordPress Sources for Help](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#wordpress-sources-for-help)
* [Other Helpful Resources](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#other-helpful-resources)

[↑ Back to top](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#wp--skip-link--target)

**Important:** Please note that this is not a support page. If you seek help with your specific problem, please refer to the [Support forums](https://wordpress.org/support/welcome/).

WordPress help is never hard to find. There are many sites dedicated to helping WordPress users, including this support page and the always-helpful [forums](https://wordpress.org/support/forums/). With so much content available, however, how are you to know where to begin looking for help?

The [WordPress FAQ](https://codex.wordpress.org/FAQ), which provides comprehensive answers to common questions, is a good place to start. You could also read our document on [using the WordPress forums](https://wordpress.org/support/welcome/) to help you get better results from your support requests.

However, the best place to start looking for WordPress help is your favorite search engine. This is usually the quickest way to get the information you need, and helps take some of the pressure off our volunteers in the support forums.

## [Searching The Net For WordPress Help](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#searching-the-net-for-wordpress-help)

When searching online for WordPress help, one of the biggest challenges can be figuring out the right keywords to use. Otherwise, you risk spending an inordinate amount of time sorting through search results that don’t accurately reflect the problem that you are currently experiencing. In order to quickly get the information that you need, it makes sense to limit your search to specific online WordPress resources or websites. The following section will show you how to choose the right search terms, and how to use those terms effectively.

### [Search Using Keywords](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#search-using-keywords)

Sometimes you can use error messages to generate the keywords needed in your help search. For example:

```
Warning: main(/home/atlantis/public_html/wp-includes/
functions.php): failed to open stream: No such
file or directory in /home/stargateatlantis/
public_html/wp-settings.php on line 67

Fatal error: main(): Failed opening required
'/home/atlantis/public_html/wp-includes/
functions.php' (include_path='.:/usr/lib/php:
/usr/local/lib/php') in /home/stargateatlantis/
public_html/wp-settings.php on line 67
```

The keywords you need to help solve the problem are hidden within this information. In particular, the error specifically references the files that are causing the issue: functions.php and wp-settings.php. The names of these files will make up part of your search.

You could try opening the files directly to examine them. However, this may be of limited use. Due to the way that WordPress processes .php files, the given line numbers may not correspond to the actual source of the error.

The specific errors are **failed to open stream** and **failed opening required**, with both happening inside the wp-settings.php file. This indicates that the problem is likely with wp-settings.php rather than functions.php. The fact that both errors contain the words “failed” and “open” is another clue.

Armed with this information, create a search in your favorite search engine that includes the words:

```
wordpress failed open wp-settings.php
```

This should get you started on narrowing down the problem.

Not all keywords can be found so easily. If the problem is a CSS or HTML issue, you can include the [specific tag](https://codex.wordpress.org/Finding_Your_CSS_Styles) or selector with which the problem seems to lie. However, it is still advisable to include actual words in your search, as it can be difficult to figure out which tag is causing the actual issue.

You may need to analyze the problem for a minute or two to in order to find the right terms. For example, if your web page layout looks noticeably different in Internet Explorer than it does in another browser, then search for information on **Internet Explorer layout bugs**. On the other hand, if you have a layout error that remains consistent among browsers, identify the part of the layout that is affected. Is it the **sidebar**, **header**, **post content**, or **comments**? Likewise, if the header image is not showing up or is not displaying correctly, begin by searching for **wordpress header image** and then add specifics such as **wordpress header image missing** to narrow things down.

### [Brainstorming Search Terms](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#brainstorming-search-terms)

Brainstorming is a useful technique to use if you are struggling to find suitable keywords. To start, write down the problem you are experiencing, trying to be as descriptive as possible. For example:

> *I’m having trouble with the nested list in the sidebar of my layout. It isn’t lining up the items under the titles right. It is keeping things on the left margin when I want them to be indented.*

Your description can be a good source of potential keywords. In the above example, you can find:

* sidebar
* layout
* nested list
* left margin
* indented

All of these terms could be used as search keywords.

Alternatively, explain your problem to a non-WordPress user. Stating the issue in simple terms is an excellent way to get to the heart of a problem and find the right keywords to summarize the issue.

### [Search Engine Site Search](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#search-engine-site-search)

Once you have selected your keywords, it’s time to put them to work. As you sort through the search results, you may end up replacing your initial keywords with more specific ones, in order to narrow down the results. For example, while searching for “wordpress sidebar layout nested links”, you may discover that the problem lies within the specific [theme](https://codex.wordpress.org/Using_Themes) you are using. Add the name of the theme to your keywords in order to narrow down your search.

Another way to improve the quality of your search results is to search a specific site, rather than the entire internet. Most search engines allow you to run a search across one specific web address, helping you to avoid irrelevant results.

#### Google, Yahoo, and Bing Site Search

Google, Yahoo, and Bing all support use of the “site:” function while searching. To search a specific domain via one of these search engines, type your keywords and specify the site you want to search using the format “site:[domain]”. For example:

```
keyword1 keyword2 site:wordpress.org
```

This instructs the search engine to search all **wordpress.org** sites, such as *codex.wordpress.org*, *wordpress.org/support*, and *make.wordpress.org*.

To narrow your search down to a specific site, such as *codex.wordpress.org*, enter:

```
keyword1 keyword2 site:codex.wordpress.org
```

This instructs the search engine to search only the codex.wordpress.org site, which won’t include results from the Support Forums.

#### Other Search Engines

Other search engines provide different ways to narrow down searches. Check to see if there is an advanced search option for your favorite search engine, and take your search from there.

### [Use Quotes to Group Keywords](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#use-quotes-to-group-keywords)

You can narrow your search by grouping different keywords together. For example, instead of looking for:

```
sidebar layout nested list left margin indented
```

you could group key phrases together with quote marks:

```
sidebar layout "nested list" "left margin" indented
```

This would limit your search to anything with the words *sidebar*, *layout*, and *indented*, and the phrases “*nested list*” and “*left margin*.”

Most search engines also allow you to use Boolean references such as **AND**, **OR** and **NOT** to group keywords together. For example, searching for:

```
"left margin" OR "nested list"
```

would return a list of pages containing either the phrase *“left margin”* or *“nested list”*, as well as pages containing both of those terms.

## [WordPress Sources for Help](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#wordpress-sources-for-help)

The best way to find accurate and concise WordPress information is to get it directly from WordPress.org sites. The main places to go for WordPress help and support are:

* [WordPress Codex](https://codex.wordpress.org/Main_Page) – WordPress Online Manual
* [WordPress Support Forums](https://www.wordpress.org/support/)
* [IRC Libera WordPress Support on channel #wordpress](https://codex.wordpress.org/IRC)
* [WordPress IRC Live Help](https://codex.wordpress.org/WordPress_IRC_Live_Help)

## [Other Helpful Resources](https://wordpress.org/documentation/article/where-to-find-wordpress-help/#other-helpful-resources)

* Search the [WordPress Support Forums](https://wordpress.org/support) for the self-hosted version of WordPress, and the [WordPress.com Support Forum](http://wordpress.com/support/) for help with WordPress.com issues. Please read [Using the Support Forums](https://codex.wordpress.org/Using_the_Support_Forums) and **Finding WordPress Help** to find out how to search the forums and post a clear, answerable question.
* [Learn WordPress](http://learn.wordpress.com/) is the official WordPress.com tutorial and online video help site. Many tutorials apply to the self-hosted version of WordPress as well.
* To learn more about PHP (the open source scripting language that WordPress is built upon) try [this article](http://www.w3schools.com/php/).
* Use Live WordPress Support via IRC. See: [WordPress IRC Live Help](https://codex.wordpress.org/WordPress_IRC_Live_Help) and [IRC](https://codex.wordpress.org/IRC).
* If all else fails, go to the [WordPress Trac](https://trac.wordpress.org/) (bug tracker) and search the database to see if your problem has already been addressed. If you think your problem merits a new bug report, file one.
