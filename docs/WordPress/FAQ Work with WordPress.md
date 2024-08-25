# FAQ Work with WordPress

## [Administration](https://wordpress.org/documentation/article/faq-work-with-wordpress/#administration)

### [Can my posts have URL instead of /index.php?p=76?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#can-my-posts-have-url-instead-of-index-phpp76)

See:

* [Using Permalinks](https://wordpress.org/support/article/using-permalinks/)

### [How long is the release cycle of WordPress?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-long-is-the-release-cycle-of-wordpress)

A major release of WordPress happens every 6 months or so. Suggest and vote on ideas for future releases at [the WordPress Extend Ideas site](https://wordpress.org/ideas/).

Also refer [WordPress Versions](https://codex.wordpress.org/WordPress%20Versions) for the chronologically listed versions of WordPress along with the Change Log information on new features and improvements in each version. There are the future releases and links to their respective milestones in the bug tracker.

### [How do I turn on Permalinks, and what do I do about the errors?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-turn-on-permalinks-and-what-do-i-do-about-the-errors)

See:

* [Using Permalinks](https://wordpress.org/support/article/using-permalinks/)

### [What are Roles for and what permissions do different Roles have?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#what-are-roles-for-and-what-permissions-do-different-roles-have)

See:

* [Roles and Capabilities](https://wordpress.org/documentation/article/roles-and-capabilities/)

### [Why can’t I delete the uncategorized Category?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#why-cant-i-delete-the-uncategorized-category)

Deleting a category does not delete the posts in that category. Instead, posts that were only assigned to the deleted category are set to the *uncategorized* category. Also, **all** [Pages](https://wordpress.org/support/article/pages/) are assigned the *uncategorized* Category.

The *uncategorized* category cannot be deleted, however you can specify your default categories for posts on the *Settings* – *Writing* screen of the [Administration Screens](https://wordpress.org/support/article/administration-screens/).

### [Why is there no Page Template option when writing or editing a Page?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#why-is-there-no-page-template-option-when-writing-or-editing-a-page)

If there is no Page Template option when writing or editing a [Page](https://wordpress.org/support/article/pages/) it may because there is no [template file](https://codex.wordpress.org/Stepping%20Into%20Templates) with the proper structure. For the Page Template box to be available to assign to a [Page](https://wordpress.org/support/article/pages/) there must be a least one template file in your theme that has a structure at the beginning of the template file that looks like this:

```
<?php
/*
Template Name: My Custom Page
*/
?>
```

Create a new PHP file with any name under the theme directory and put above codes into the file. You will see the Page Template box appears that includes “My Custom Page” option in the Page Edit Screen. For more detail about Custom Page Template, refer [Page Templates](https://codex.wordpress.org/Page%20Templates).

### [How do I determine a Post, Page, Category, Tag, or User ID?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-determine-a-post-page-category-tag-or-user-id)

Sometimes it is necessary to know the ID of a particular Post, Page, Category, Tag, or User. To determine that ID, use one of these method:

* Look in your browser status bar for the ID:
  1. Visit the related list table screen in your Administration Screen. For instance in the case of Posts visit Posts->All Posts, for Pages visit Pages->All Pages, and for Categories visit Posts->Categories.
  2. Now hover your mouse over the ‘item’ you need the ID. In the case of Pages, hover over that particular Page’s title in the Title column and for Categories hover over the Categories Name in the Name column.
  3. Look at the status bar (at the bottom of your browser) and the you will find at the end of the line something like “post=123” or “tag\_ID=67”. In these cases, 123 is the Page ID, and 67 is the Category ID.

## [Configuration](https://wordpress.org/documentation/article/faq-work-with-wordpress/#configuration)

### [How can I change how the date and / or time is displayed?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-change-how-the-date-and-or-time-is-displayed)

See:

* [Formatting Date and Time](https://wordpress.org/support/article/formatting-date-and-time/)

### [How can I control comments people make?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-control-comments-people-make)

See:

* [Comment Moderation](https://codex.wordpress.org/Comment%20Moderation)

### [What do the Discussion Options mean?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#what-do-the-discussion-options-mean)

See:

* [Discussion Screen](https://wordpress.org/support/article/settings-discussion-screen/)

### [How do I install plugins?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-install-plugins)

See:

* [Managing Plugins](https://wordpress.org/support/article/managing-plugins/)

### [Why are all the comments being moderated?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#why-are-all-the-comments-being-moderated)

Go to the [Settings](https://wordpress.org/support/article/administration-screens/#settings-configuration-settings) > [Discussion](https://wordpress.org/support/article/administration-screens/#discussion) screen and make sure that **Comment must be manually approved** is unchecked. With that option selected, all comments are sent to the moderation queue to await approval.
Make sure that **Hold a comment in the queue if it contains x or more links.** is not blank and contains a number higher than zero. If this value is blank or zero, all comments containing links will be moderated.
If the option mentioned above is unchecked, the link moderation value is higher than zero, and you still have this problem, then upgrade the comment spam plugins you have installed. If this continues to be a problem, deactivate the comment spam plugins one by one to determine the culprit and contact the plugin author for help.

### [How do I disable comments?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-disable-comments)

First, uncheck **Allow people to post comments on new articles** on the [Settings](https://wordpress.org/support/article/administration-screens/#settings-configuration-settings) > [Discussion](https://wordpress.org/support/article/administration-screens/#discussion) screen. This will only disable comments on *future posts*.
Next, to completely disable comments, you will have to edit each past post and uncheck **Allow Comments** from the [Edit Post](https://wordpress.org/support/article/writing-posts/) screen. Use Bulk Edit to disable multiple posts at once.

1. In the [Posts\_Screen](https://wordpress.org/support/article/posts-screen/), check the checkbox in the Table’s title to select all Posts in a given table.
2. From Bulk Actions box, select Edit and click Apply.
3. In the Bulk Edit Screen, select Do not allow option from Comments box
4. Click Update.

![](https://wordpress.org/documentation/files/2020/12/posts-bulk-edit-screen-1024x506.jpg)

Alternatively, you could run below MySQL query from the command line on a shell account or using [phpMyAdmin](https://wordpress.org/support/article/phpmyadmin/), or through a [wp-cli](https://codex.wordpress.org/wp-cli) `wp db query`:

```
UPDATE wp_posts SET comment_status = 'closed';
```

If your goal is to permanently remove comments, then follow the next steps. This is the example of [Twenty Fifteen](https://wordpress.org/support/article/twenty-fifteen/) theme customization.

1. Create a [Child Themes](https://codex.wordpress.org/Child%20Themes) of [Twenty Fifteen](https://wordpress.org/support/article/twenty-fifteen/) theme.
2. Copy `twentyfifteen_entry_meta()` function from parent’s `inc/template-tags.php` to child theme’s `functions.php`.
3. Comment out the if block that contains `comments-link`.

```
function twentyfifteen_entry_meta() {
    if ( is_sticky() && is_home() && ! is_paged() ) {
        :
    }

    // if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
    //  echo '';
    //  /* translators: %s: post title */
    //  comments_popup_link( sprintf( __( 'Leave a comment on %s', 'twentyfifteen' ), get_the_title() ) );
    //  echo '';
    // }
}
```

It removes the number of comments or “Leave a comment” message from bottom of each post.

1. Newly create `comments.php` under the Child Theme’s directory without any contents. It removes the comment area of exsiting posts.
2. Activate the Child Teheme.

### [How do I disable trackbacks and pingbacks?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-disable-trackbacks-and-pingbacks)

First, uncheck **Allow link notifications from other blogs (pingbacks and trackbacks) on new articles** on the [Settings](https://wordpress.org/support/article/administration-screens/#settings-configuration-settings) > [Discussion](https://wordpress.org/support/article/administration-screens/#discussion) screen. This will only disable trackbacks and pingbacks on *future posts*.
Next, to completely disable trackbacks and pingbacks, you will have to edit each past post and uncheck **Allow trackbacks and pingbacks on this page** from the [Edit Post](https://wordpress.org/support/article/writing-posts/) screen. Use Bulk Edit to disable multiple posts at once. See also above image.

1. In the [Posts\_Screen](https://wordpress.org/support/article/posts-screen/), check the checkbox in the Table’s title to select all Posts in a given table.
2. From Bulk Actions box, select Edit and click Apply.
3. In the Bulk Edit Screen, select Do not allow option from Pings box.
4. Click Update.

Alternatively, you could run this MySQL query from the command line on a shell account or using [phpMyAdmin](https://wordpress.org/support/article/phpmyadmin/), or through a [wp-cli](https://codex.wordpress.org/wp-cli) `wp db query`:

```
UPDATE wp_posts SET ping_status = 'closed';
```

### [How do I change the site admin name?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-change-the-site-admin-name)

To change your Admin Name, in the [Administration Screens](https://wordpress.org/support/article/administration-screens/), choose the **Users->Your Profile** menu. Make your changes there. However, you are not able to change the username from within the Administration screen. In order to do this you must directly edit the MySQL database, however this is not recommended as your username is not often seen by other users.

See:

* [Users Your Profile Screen](https://wordpress.org/support/article/users-your-profile-screen/)

### [How do I find the absolute path I need for uploading images?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-find-the-absolute-path-i-need-for-uploading-images)

1. Open the below page from your Browser

```
http://(site URL)/wp-admin/options.php
```

1. Refer `upload_url_path` option value.
   If the value is blank, then the directory `wp-content/upload` is the default destination to save.

### [Which files do I change to alter the way my blog looks?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#which-files-do-i-change-to-alter-the-way-my-blog-looks)

See:

* [Theme Development Handbook](https://developer.wordpress.org/themes/)

### [How do I upload images?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-upload-images)

See:

* [Inserting Media into Posts and Pages](https://wordpress.org/support/article/inserting-images-into-posts-and-pages/)

### [Can I change the “Error establishing database connection” message to something more descriptive?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#can-i-change-the-error-establishing-database-connection-message-to-something-more-descriptive)

Just simply create a file to reside at *wp-content/db-error.php*, and in that file put the message you want displayed to users when WordPress determines the database connection is not available. That file will be used in place of “Error establishing database connection” message. You could even use the *db-error.php* to redirect users elsewhere. Here’s an example for *db-error.php*:

```
<?php
<pre>echo '<h2> This site is currently experiencing a problem with the database server.</h2>  Press your browser Reload button to try again!';
?>
```

## [Modifying](https://wordpress.org/documentation/article/faq-work-with-wordpress/#modifying)

### [Can I change the Smilies?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#can-i-change-the-smilies)

See:

* [Using Smilies](https://wordpress.org/support/article/using-smilies/)

### [How do I edit files?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-edit-files)

See:

* [Editing Files](https://codex.wordpress.org/Editing_Files)

### [What is The Loop?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#what-is-the-loop)

See:

* [The Loop](https://codex.wordpress.org/The%20Loop) and [The Loop in Action](https://codex.wordpress.org/The%20Loop%20in%20Action)

### [How can I change the URL-structure for my posts?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-change-the-url-structure-for-my-posts)

See:

* [Using Permalinks](https://wordpress.org/support/article/using-permalinks/)

### [How can I change URL-structure for my posts on a Windows server?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-change-url-structure-for-my-posts-on-a-windows-server)

See:

* [Using Permalinks Without mod rewrite](https://codex.wordpress.org/Using_Permalinks#Using_Permalinks_Without_mod_rewrite)

### [How do I use WordPress Template Tags to change what is displayed on the blog?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-use-wordpress-template-tags-to-change-what-is-displayed-on-the-blog)

See:

* [Template Tags](https://codex.wordpress.org/Template%20Tags)

### [How do I get All links to open in a new window?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-get-all-links-to-open-in-a-new-window)

Put this inside the section of your Theme’s [template header.php](https://codex.wordpress.org/Theme_Development#Template_Files) file:

```
<base target="_blank" />
```

See:

* [Using Themes](https://codex.wordpress.org/Using%20Themes)
* [W3 Schools base tag explanation](http://www.w3schools.com/tags/tag_base.asp)

### [How can I add an image to my RSS feed?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-add-an-image-to-my-rss-feed)

See:

* [Add an image to your RSS 2.0 feed at wordlog.com](http://wordlog.com/archives/2004/08/01/add-an-image-to-your-rss-20-field/)

### [If I turn off comments, it says “Comments Off” on the weblog. so how do I remove that?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#if-i-turn-off-comments-it-says-comments-off-on-the-weblog-so-how-do-i-remove-that)

Depending on your theme, some other message of similar intent may be displayed. The specifics of how to remove this message is theme dependent. You should be able to find the offending text in your theme’s `comments.php` file. If it’s displayed by a PHP function, comment out the function with slash-asterisks ‘`/*`‘ and ‘`*/`‘ *(without quotes)* on either end of the function:

```
<?php /* _e( 'Comments are closed.' , 'twentytwelve' ); */ ?>
```

If it’s simply HTML, comment out the enclosing HTML tags by adding ‘`&lt;!--<span> </span>`‘ and ‘`<span> </span>--&gt;`‘ *(not including the quotes, note the space after the first and before the last comment symbols)*:

```
<!-- <p class="nocomments">Comments are closed.</p> -->
```

If you decide later to restore the message, you can simply remove the comment symbols.

### [How do I change what is shown when I password protect a post?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-change-what-is-shown-when-i-password-protect-a-post)

Hook the filters ‘`the_title`‘ and ‘`the_password_form`‘. Your filter function is passed exactly what the filter names imply. Use the `str_replace()` function to search out the offending text and replace it with your preference (or nothing).
Note the ‘`the_title`‘ filter fires for every single title, not just password protected posts, so you need to use the existence of the `post_password` property to know whether to apply the string replace function or not.
Some themes may also have additional locations where content needs to be canged. Next example works with [Twenty Fifteen](https://wordpress.org/support/article/twenty-fifteen/) Theme.

```
add_filter('the_title', 'replace_protected', 10, 2);
function replace_protected( $title, $id ) {
    $post = get_post( $id );
    if ( ! empty( $post->post_password ) ) {
        $title = str_replace('Protected:', 'Hidden:', $title);
    }
    return $title;
}
add_filter('the_password_form', 'replace_message');
function replace_message( $form ) {
    return str_replace('This post is password protected. To view it please enter your password below:',
        'Enter you password below to see the surprise:', $form);
}
```

### [How can I allow certain HTML tags in my comments?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-allow-certain-html-tags-in-my-comments)

Use a custom filter in your themes `functions.php` or plugin:

```
add_filter('preprocess_comment','fa_allow_tags_in_comments');

function fa_allow_tags_in_comments($data) {
    global $allowedtags;
    $allowedtags['span'] = array('style'=>array());
    $allowedtags['p'] = array();
    return $data;
}
```

### [How can I add advanced search ability to WordPress?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-can-i-add-advanced-search-ability-to-wordpress)

See:

* [Advanced Contextual Search for WordPress at Weblog Tools Collection](http://weblogtoolscollection.com/archives/2004/06/07/advanced-contextual-search-for-wordpress/)

## [Posts](https://wordpress.org/documentation/article/faq-work-with-wordpress/#posts)

### [How do I upload an image and display it in a post?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-upload-an-image-and-display-it-in-a-post)

See:

* [Inserting Media into Posts and Pages](https://wordpress.org/support/article/inserting-images-into-posts-and-pages/)

### [What is pingback?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#what-is-pingback)

See:

* [Introduction to Blogging, Pingbacks](https://wordpress.org/support/article/introduction-to-blogging/#pingbacks)

### [What is trackback?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#what-is-trackback)

See:

* [Introduction to Blogging, Trackbacks](https://wordpress.org/support/article/introduction-to-blogging/#trackbacks)

### [Where is the permalink to my post?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#where-is-the-permalink-to-my-post)

See:

* [Linking Posts, Pages, and Categories](https://codex.wordpress.org/Linking%20Posts%20Pages%20and%20Categories)

### [Can I use desktop blogging software?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#can-i-use-desktop-blogging-software)

See:

* [Weblog Client](https://codex.wordpress.org/Weblog%20Client)

### [Can I blog by email?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#can-i-blog-by-email)

See:

* [Post to your blog using email](https://codex.wordpress.org/Post%20to%20your%20blog%20using%20email)

## [Spam, Spammers, Comments](https://wordpress.org/documentation/article/faq-work-with-wordpress/#spam-spammers-comments)

### [What can I do to stop comment spam?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#what-can-i-do-to-stop-comment-spam)

See:

* [Combating Comment Spam](https://codex.wordpress.org/Combating%20Comment%20Spam)

### [More Information on Comment Spam](https://wordpress.org/documentation/article/faq-work-with-wordpress/#more-information-on-comment-spam)

See:

* [Comment Spam](https://codex.wordpress.org/Comment%20Spam)

## [Importing and Exporting](https://wordpress.org/documentation/article/faq-work-with-wordpress/#importing-and-exporting)

### [How do I Import a WordPress WXR file when it says it is too large to import?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-import-a-wordpress-wxr-file-when-it-says-it-is-too-large-to-import)

If a WordPress WXR file, an XML file exported from WordPress, is too large to import, there are several things you might try to overcome that limit.

* Edit *php.ini*‘. Some hosts may not allow this settings.

```
memory_limit = 300M
post_max_size = 200M
upload_max_filesize = 100M
max_execution_time = 600
```

* memory\_limit: Maximum amount of memory in bytes that a PHP script is allowed to allocate.

**Note:** memory\_limit should be larger than post\_max\_size, and post\_max\_size must be larger than upload\_max\_filesize.

* Edit *.htaccess*. Some hosts may not allow this settings.

```
php_value memory_limit 300M
php_value post_max_size 200M
php_value upload_max_filesize 100M
```

* Edit *wp-config.php*

```
define('WP_MEMORY_LIMIT', '64MB');
```

See also [Increasing memory allocated to PHP](https://wordpress.org/support/article/editing-wp-config-php/#increasing-memory-allocated-to-php).

* In multisite environment, configure following settings
  1. From Network Admin dashboard, select Settings > Network Settings and increase the values of ‘Site upload space’ and ‘Max upload file size’.
  2. From Network Admin dashboard, select Sites > All Sites and click Edit menu under your site. Click Settings tab and incease the value of ‘Site Upload Space Quota’ or leave it blank for network default
* GZip the file. On some hosting services, a gzipped file can be automatically expanded in the background, without WordPress ever knowing the difference. This can allow you to make the file small enough to be fit into the maximum upload size constraints.
  1. On Windows, use 7Zip to create a gz archive out of the WXR file.
  2. On Linux, use the gzip command line.
  3. Make sure that the resulting file has the file extension of “.gz” before uploading it, as this is often necessary.
  4. This is not guaranteed to work, as it highly depends on the hosting configuration. If this fails, then try another method instead.
* Break the WordPress WXR file into smaller pieces by separating the data between posts and pasting the header/footer into each file.

1. Always have the header

```
<rss version="2.0"
    xmlns:excerpt="https://wordpress.org/export/1.2/excerpt/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:wp="https://wordpress.org/export/1.2/"
>
<channel>
including all info like category, tags, etc to just before the first
```

2. Always have the footer

```
</channel>
</rss>
```

3. In between, add the posts start with end with and check to see whether the XML file you’re creating is less than or equal to 2MB. You’ll get the hang of it.
4. As always, before importing the new XML’s, backup the database of the blog you are importing the XML files to and might as well export XML file of that blog as well for good measure.

See:

* [Importing Content](https://wordpress.org/support/article/importing-content/)
  * [Editing wp-config.php](https://wordpress.org/support/article/editing-wp-config-php/)
  * [Forum discussion on program that helps with splitting the file into pieces](https://wordpress.org/support/topic/367059)

WXR Splitter Utilities:

* [WordPress WXR File Splitter utility for Windows](http://bit.ly/b5NhEH)
* [WordPress WXR File Splitter utility for Mac OS X](http://suhastech.com/wordpress-wxr-xmlfile-splitter-for-mac-os-x/)

### [How do I import links (blogroll) from another WordPress blog?](https://wordpress.org/documentation/article/faq-work-with-wordpress/#how-do-i-import-links-blogroll-from-another-wordpress-blog)

See:

[Importing Content](https://wordpress.org/support/article/importing-content/)

[Codex FAQ](https://codex.wordpress.org/FAQ)
