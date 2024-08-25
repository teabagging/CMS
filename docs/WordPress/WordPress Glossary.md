# WordPress Glossary


This document is designed to offer definitions of various terms, exclusive to WordPress, that users may not be familiar with.

If you are a contributor, **please** don’t add definitions for generic terms (API, PHP, JavaScript, etc…).

## [Absolute Path](https://wordpress.org/documentation/article/wordpress-glossary/#absolute-path)

*(also known as a **full path**)*

The complete location of a file or directory within a computer filesystem. An absolute path starts at the root directory (or drive letter) and continues up the directory hierarchy until the specific file or directory is reached. This contrasts with a [relative path](https://wordpress.org/documentation/article/wordpress-glossary/#relative-path), which does not start at the root directory.

The syntax of absolute paths differs by operating system. On Microsoft Windows, they begin with a drive letter and use a backslash to separate directory names. Absolute paths on macOS and Linux lack drive letters and use a forward slash as the directory separator.

Examples:

* Windows: `C:\Users\Matt\www\blog\images\icecream.jpg`
* macOS: `/Users/Matt/www/blog/images/icecream.jpg`
* Linux: `/home/Matt/www/blog/images/icecream.jpg`

To find the absolute filesystem path of the directory containing a web page, copy the code below into a new text file, save the file as *path.php* (thus making a simple PHP web page), and move that file to your [web server](https://wordpress.org/documentation/article/wordpress-glossary/#web-server). Then direct your web browser to the [URL](https://wordpress.org/documentation/article/wordpress-glossary/#url) address of that file (e.g. *[http://www.example.com/path.php](http://www.example.com/path.php)*).

```
<?php
echo getcwd();
?>
```

See also: [Path (computing) at Wikipedia](http://en.wikipedia.org/wiki/Path_(computing))

## [Absolute URI](https://wordpress.org/documentation/article/wordpress-glossary/#absolute-uri)

*(also known as a **full URI**)*

A URI that contains the complete location of a resource (as opposed to a [relative URI](https://wordpress.org/documentation/article/wordpress-glossary/#relative-uri)).

Examples:

* `http://www.example.com/blog/images/icecream.jpg`
* `ftp://ftp.example.com/users/h/harriet/www/`

## [Action](https://wordpress.org/documentation/article/wordpress-glossary/#action)

In WordPress; an Action is a [PHP function](http://www.w3schools.com/php/php_functions.asp) that is executed at specific points throughout the WordPress Core.

Developers can create a **custom** Action using the [Action API](https://codex.wordpress.org/Function_Reference/add_action) to add or remove code from an existing Action by specifying any [existing Hook](https://codex.wordpress.org/Plugin_API/Action_Reference). This process is called “[hooking](https://codex.wordpress.org/Glossary#Hook)“.

**For example:** A developer may want to **add** code to the footer of a Theme. This could be accomplished by writing new function, then Hooking it to the [wp\_footer](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_footer) Action.

**Custom Actions differ from custom *[Filters](https://wordpress.org/documentation/article/wordpress-glossary/#filter)*** because custom Actions allow you to **add or remove** code from existing Actions. Whereas custom Filters allow you to **replace** specific data (such as a variable) found within an existing Action.

* See also: [Filter](https://wordpress.org/documentation/article/wordpress-glossary/#filter), [Hook](https://wordpress.org/documentation/article/wordpress-glossary/#hook), [Terminology Confusion](https://wordpress.org/documentation/article/wordpress-glossary/#terminology-confusion)
* Related articles: [Actions](https://codex.wordpress.org/Plugin_API#Actions), [Action Reference](https://codex.wordpress.org/Plugin_API/Action_Reference), [add\_action()](https://codex.wordpress.org/Function_Reference/add_action)
* Forum posts: [Filters vs. Actions Discussion and Explanation](https://wordpress.org/support/topic/fliters-vs-actions-from-a-newbe)

## [Admin Bar](https://wordpress.org/documentation/article/wordpress-glossary/#admin-bar)

An area of the screen just above your site that gives you quick access to features such as adding a new post or editing your profile. It is only visible if you are logged in.

The admin bar concept was added to WordPress in [Version 3.1](https://codex.wordpress.org/Version_3.1) and was replaced by the [Toolbar](https://codex.wordpress.org/Toolbar) in WordPress [Version 3.3](https://codex.wordpress.org/Version_3.3). To turn it on (or off), open the Dashboard and navigate to [Administration](https://wordpress.org/support/article/administration-screens/) > [Users](https://wordpress.org/support/article/administration-screens/#your-profile) > [Your Profile](https://wordpress.org/support/article/users-your-profile-screen/).

* Related articles: [Toolbar](https://codex.wordpress.org/Toolbar)
* See also: [Your Profile Screen](https://wordpress.org/support/article/users-your-profile-screen/)

## [Ajax](https://wordpress.org/documentation/article/wordpress-glossary/#ajax)

**Ajax** is a technique that web pages use to have the server perform certain processing without reloading the web page. For example, when you approve a comment in a WordPress blog, WordPress uses Ajax to change the comment’s status, and you see the change without having to reload the Comments screen.

* Related article: [AJAX](https://codex.wordpress.org/AJAX)
* External link: [AJAX](http://en.wikipedia.org/wiki/Ajax) (Wikipedia)

## [Apache](https://wordpress.org/documentation/article/wordpress-glossary/#apache)

**Apache** is short for **[Apache HTTP Server Project](http://httpd.apache.org/)**, a robust, commercial-grade, featureful, and freely-available open source HTTP [Web server](https://wordpress.org/documentation/article/wordpress-glossary/#web-server) software produced by the [Apache Software Foundation](http://www.apache.org/). It is the most commonly used web server on the internet, and is available on many platforms, including Windows, [Unix](https://wordpress.org/documentation/article/wordpress-glossary/#unix)/[Linux](https://wordpress.org/documentation/article/wordpress-glossary/#linux), and [Mac OS X](https://wordpress.org/documentation/article/wordpress-glossary/#mac-os-x). Apache serves as a great foundation for publishing WordPress-powered sites.

## [API](https://wordpress.org/documentation/article/wordpress-glossary/#api)

Please refer to [Wikipedia page](http://en.wikipedia.org/wiki/Application_programming_interface) for a definition.

## [Array](https://wordpress.org/documentation/article/wordpress-glossary/#array)

An **array** is one of the basic data structures used in computer programming. An *array* contains a list (or *vector*) of items such as numeric or string values. *Arrays* allow programmers to randomly access data. Data can be stored in either *one-dimensional* or *multi-dimensional arrays*.

A one-dimension array seven (7) elements would be:


| 105 | 200 | 54 | 53 | 102 | 13 | 405 |
| --- | --- | -- | -- | --- | -- | --- |

The [Template Tag](https://codex.wordpress.org/Template_Tags) [wp\_list\_categories()](https://codex.wordpress.org/Template_Tags/wp_list_categories) uses a one-dimensional array for the ‘exclude’ parameter.

An example of two-dimensional array, 7 by 3 elements in size, would be:


| 105 | 200 | 54  | 53  | 102 | 13   | 405  |
| --- | --- | --- | --- | --- | ---- | ---- |
| 15  | 210 | 14  | 513 | 2   | 2313 | 4512 |
| 501 | 500 | 499 | 488 | 552 | 75   | 1952 |

* External links: [Array Programming at Wikipedia](http://en.wikipedia.org/wiki/Array_programming), [Array at freedictionary.com](http://encyclopedia.thefreedictionary.com/array)

## [ASCII](https://wordpress.org/documentation/article/wordpress-glossary/#ascii)

**ASCII** (pronounced as “ask ee”) is a standard but limited [character set](https://wordpress.org/documentation/article/wordpress-glossary/#character-set) containing only English letters, numbers, a few common symbols, and common English punctuation marks. WordPress [content](https://wordpress.org/documentation/article/wordpress-glossary/#content) is not restricted to ASCII, but can include any [Unicode](https://wordpress.org/documentation/article/wordpress-glossary/#unicode) characters.

ASCII is short for **A**merican **S**tandard **C**ode for **I**nformation **I**nterchange.

* External links: [ASCII](http://en.wikipedia.org/wiki/ASCII) (Wikipedia, with character set table)

## [Atom](https://wordpress.org/documentation/article/wordpress-glossary/#atom)

A format for syndicating content on news-like sites, viewable by Atom-aware programs called news readers or aggregators.

* See also: [News reader](https://wordpress.org/documentation/article/wordpress-glossary/#news-reader), [RSS](https://wordpress.org/documentation/article/wordpress-glossary/#rss), [RDF](https://wordpress.org/documentation/article/wordpress-glossary/#rdf)
* External links: [Atom (standard) at Wikipedia](http://en.wikipedia.org/wiki/Atom_(standard))

## [Attribute sources](https://wordpress.org/documentation/article/wordpress-glossary/#attribute-sources)

An object describing the attributes shape of a block. The keys can be named as most appropriate to describe the state of a block type. The value for each key is a function which describes the strategy by which the attribute value should be extracted from the content of a saved post’s content. When processed, a new object is created, taking the form of the keys defined in the attribute sources, where each value is the result of the attribute source function.

## [Attributes](https://wordpress.org/documentation/article/wordpress-glossary/#attributes)

The object representation of the current state of a block in post content. When loading a saved post, this is determined by the attribute sources for the block type. These values can change over time during an editing session when the user modifies a block, and are used when determining how to serialize the block.

## [Autosave](https://wordpress.org/documentation/article/wordpress-glossary/#autosave)

When you are writing or editing your posts and pages, the changes you make are automatically saved every 2 minutes. In the lower right corner of the editor, you’ll see a notification of when the entry was last saved to the database. Autosaves are automatically enabled for all posts and pages. There is only one autosave for each post/page. Each new autosave overwrites the previous autosave in the database.

* Related articles: [Revision Management](https://codex.wordpress.org/Revision_Management)
* External links: [WordPress.com Support – Autosave](http://en.support.wordpress.com/autosave/)

## [Avatar](https://wordpress.org/documentation/article/wordpress-glossary/#avatar)

An **avatar** is a graphic image or picture that represents a user.

* See also: [Gravatar](https://wordpress.org/documentation/article/wordpress-glossary/#gravatar)
* Related articles: [Using Gravatars](https://wordpress.org/support/article/how-to-use-gravatars/)
* External links: [Avatar (computing) at Wikipedia](http://en.wikipedia.org/wiki/Avatar_%28computing%29)

## [Back End](https://wordpress.org/documentation/article/wordpress-glossary/#back-end)

The back end is the area that authorized users can sign into to add, remove and modify content on the website. This may also be referred to as “WordPress”, “admin” or “the administration area”.

## [Binaries](https://wordpress.org/documentation/article/wordpress-glossary/#binaries)

**Binaries** refer to compiled computer programs, or executables. Many [open source](http://en.wikipedia.org/wiki/Open_source) projects, which can be re-compiled from [source code](http://en.wikipedia.org/wiki/Source_code), offer pre-compiled binaries for the most popular platforms and operating systems.

## [Block](https://wordpress.org/documentation/article/wordpress-glossary/#block)

The abstract term used to describe units of markup that, composed together, form the content or layout of a webpage. The idea combines concepts of what in WordPress today we achieve with shortcodes, custom HTML, and embed discovery into a single consistent API and user experience.

## [Block (Inserter) Library](https://wordpress.org/documentation/article/wordpress-glossary/#block-inserter-library)

Primary interface for selecting from the [available blocks](https://wordpress.org/documentation/article/blocks/), triggered by plus icon buttons on Blocks or in the top-left of the editor interface.

## [Block categories](https://wordpress.org/documentation/article/wordpress-glossary/#block-categories)

These are not a WordPress taxonomy, but instead used internally to sort blocks in the Block Library.

## [Block name](https://wordpress.org/documentation/article/wordpress-glossary/#block-name)

A unique identifier for a block type, consisting of a plugin-specific namespace and a short label describing the block’s intent. e.g. `core/image`

## [Block styles](https://wordpress.org/documentation/article/wordpress-glossary/#block-styles)

The CSS styles that are part of the block, either via its stylesheet or via the block markup itself. For example, a class attached to the block markup is considered block styles.

Compare to ***Global Styles***. In contraposition to Global Styles, block styles are sometimes referred to as [Local Styles](https://wordpress.org/documentation/article/glossary/#local-styles).

Learn more about [Block Styles](https://developer.wordpress.org/block-editor/explanations/architecture/styles/#block-styles).

## [Block supports](https://wordpress.org/documentation/article/wordpress-glossary/#block-supports)

An API for blocks to declare what features they support. By declaring support for a feature, the API would add additional [attributes](https://wordpress.org/documentation/article/glossary/#attributes) to the block and matching UI controls for most of the existing block supports.

See [Block Supports reference documentation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/) for a deep dive into the API.

## [Block Template parts](https://wordpress.org/documentation/article/wordpress-glossary/#block-template-parts)

Building on Block Templates, these parts help set structure for reusable items like a Footer or Header that one typically sees in a WordPress site. They are primarily site structure and are never to be mixed with the post content editor. With Full Site Editing and block based themes, users can create their own arbitrary Template Parts, save those in the database for their site, and re-use them throughout their site. Template parts are equivalent – in blocks – of theme template parts. They are generally defined by a theme first, carry some semantic meaning (could be swapped between themes such as a header), and can only be inserted in the site editor context (within “templates”).

## [Block Templates](https://wordpress.org/documentation/article/wordpress-glossary/#block-templates)

A template is a predefined arrangement of blocks, possibly with predefined attributes or placeholder content. You can provide a template for a post type, to give users a starting point when creating a new piece of content, or inside a custom block with the `<strong>InnerBlocks</strong>` component. At their core, templates are simply HTML files of block markup that map to templates from the standard WordPress template hierarchy, for example index, single or archive. This helps control the front-end defaults of a site that are not edited via the Page Editor or the Post Editor. See the [templates documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-templates/) for more information.

## [Block Themes](https://wordpress.org/documentation/article/wordpress-glossary/#block-themes)

A theme built in block forward way that allows Full Site Editing to work. The core of a block theme are its block templates and block template parts. To date, block theme templates have been HTML files of block markup that map to templates from the standard WordPress template hierarchy.

## [Block type](https://wordpress.org/documentation/article/wordpress-glossary/#block-type)

In contrast with the blocks composing a particular post, a block type describes the blueprint by which any block of that type should behave. So while there may be many images within a post, each behaves consistent with a unified image block type definition.

## [Blog](https://wordpress.org/documentation/article/wordpress-glossary/#blog)

A **blog**, or **weblog**, is an online journal, diary, or serial published by a person or group of people.

Blogs are commonly used by individuals, peer groups, companies, or organizations.

Blogs often contain public as well as private content. Depending on the functionality of the [CMS](https://wordpress.org/documentation/article/wordpress-glossary/#content-management-system) software that is used, some authors may restrict access — through the use of accounts or passwords — to content that is too personal to be published publicly.

## [Blogging](https://wordpress.org/documentation/article/wordpress-glossary/#blogging)

**Blogging** is the act of writing in one’s blog. To *blog* something is to write about something in one’s blog. This sometimes involves [linking](http://en.wikipedia.org/wiki/Hyperlink) to something the author finds interesting on the internet.

* See also: [Blogosphere](https://wordpress.org/documentation/article/wordpress-glossary/#blogosphere), [Blogroll](https://wordpress.org/documentation/article/wordpress-glossary/#blogroll)

## [Blogosphere](https://wordpress.org/documentation/article/wordpress-glossary/#blogosphere)

The **blogosphere** is the subset of internet web sites which are, or relate to, [blogs](https://wordpress.org/documentation/article/wordpress-glossary/#blog).

* See also: [Blog](https://wordpress.org/documentation/article/wordpress-glossary/#blog), [Blogroll](https://wordpress.org/documentation/article/wordpress-glossary/#blogroll)

## [Blogroll](https://wordpress.org/documentation/article/wordpress-glossary/#blogroll)

A **blogroll** is a list of links to various blogs or news sites. Often a blogroll is “rolled” by a service which tracks updates (using [feeds](https://wordpress.org/documentation/article/wordpress-glossary/#feed)) to each site in the list, and provides the list in a form which aggregates update information. The default blogroll (aka links) included in WordPress was removed in version 3.5.

* See also: [Blog](https://wordpress.org/documentation/article/wordpress-glossary/#blog), [Blogosphere](https://wordpress.org/documentation/article/wordpress-glossary/#blogosphere), [Feed](https://wordpress.org/documentation/article/wordpress-glossary/#feed), [News reader](https://wordpress.org/documentation/article/wordpress-glossary/#news-reader)
* External links: [News aggregator at Wikipedia](http://en.wikipedia.org/wiki/News_aggregator)

## [Bookmarklet](https://wordpress.org/documentation/article/wordpress-glossary/#bookmarklet)

A **bookmarklet** (or **favelet**) is a “faux” bookmark containing scripting code, usually written in [JavaScript](https://codex.wordpress.org/Glossary#javascript), that allows the user to perform a function.

Examples:

* The [delicious.com bookmarklets](http://delicious.com/help/bookmarklets) allow users to quickly post a link to their delicious.com bookmarks list.
* [Tantek’s favelets](http://tantek.com/favelets/)

## [Boolean](https://wordpress.org/documentation/article/wordpress-glossary/#boolean)

A variable or expression which evaluates to either true or false.

* External links: [PHP Boolean data type](http://us2.php.net/manual/en/language.types.boolean.php)

## [Category](https://wordpress.org/documentation/article/wordpress-glossary/#category)

Each [post](https://codex.wordpress.org/Glossary#Post) in WordPress can be filed under one or more **categories**. Thoughtful categorization allows posts to be grouped with others of similar content and aids in the navigation of a site.

Please note that a **post** category should not be confused with a [**link** category](https://codex.wordpress.org/Administration_Panels#Link_Categories), which is used to classify and manage [links](https://codex.wordpress.org/Administration_Panels#Links_-_Putting_the_Inter_in_the_Internet).

## [Capabilities](https://wordpress.org/documentation/article/wordpress-glossary/#capabilities)

A **capability** is permission to perform one or more types of task. Each user of a WordPress site might have some permissions but not others, depending on their [role](https://codex.wordpress.org/Glossary#Role). For example, users who have the Author role usually have permission to edit their own posts (the “edit\_posts” capability), but not permission to edit other users’ posts (the “edit\_others\_posts” capability). WordPress comes with six roles and over fifty capabilities in its role-based access system. Plugins can modify the system.

* Related article: [Roles and Capabilities](https://codex.wordpress.org/Roles_and_Capabilities)
* External link: [Role-based access control](http://en.wikipedia.org/wiki/Role-based_access_control) (Wikipedia)

## [CGI](https://wordpress.org/documentation/article/wordpress-glossary/#cgi)

**CGI** (Common Gateway Interface) is a specification for [server-side](http://en.wikipedia.org/wiki/Server-side) communication scripts designed to transfer information between a [web server](https://codex.wordpress.org/Glossary#Web_server) and a [web-client (browser)](http://en.wikipedia.org/wiki/Client-side). Typically, [HTML](https://codex.wordpress.org/Glossary#HTML) pages that collect data via forms use *CGI* programming to process the form data once the client submits it.

## [Character Entity](https://wordpress.org/documentation/article/wordpress-glossary/#character-entity)

* Related articles: [Fun Character Entities](https://codex.wordpress.org/Fun_Character_Entities)

## [Character Set](https://wordpress.org/documentation/article/wordpress-glossary/#character-set)

A **character set** is a collection of symbols (letters, numbers, punctuation, and special characters), when used together, represent meaningful words in a language. Computers use an encoding scheme so members of a character set are stored with a numeric value (e.g. 0=A, 1=B, 2=C, 3=D). In addition, a [collation](https://codex.wordpress.org/Glossary#Collation) determines the order (i.e alphabetic) to use when sorting the character set.

By default, WordPress uses the Unicode UTF-8 (**utf8**) character set for the [WordPress MySQL database tables](https://codex.wordpress.org/Database_Description) created during the [installation process](https://codex.wordpress.org/Installing_WordPress). Beginning with [Version 2.2](https://codex.wordpress.org/Version_2.2), the database character set (and collation) is defined in the *wp-config.php* file.

* See also: [Collation](https://codex.wordpress.org/Glossary#Collation)
* Related articles: [Editing wp-config.php](https://codex.wordpress.org/Editing_wp-config.php), [Converting Database Character Sets](https://codex.wordpress.org/Converting_Database_Character_Sets)
* External links: [Character set at Wikipedia](http://en.wikipedia.org/wiki/Character_set), [Unicode at Wikipedia](http://en.wikipedia.org/wiki/Unicode), [UTF-8 at Wikipedia](http://en.wikipedia.org/wiki/UTF-8), [Character sets and collation at MySQL](http://dev.mysql.com/doc/refman/5.0/en/charset-general.html)

## [chmod](https://wordpress.org/documentation/article/wordpress-glossary/#chmod)

**chmod** is a [Unix](https://codex.wordpress.org/Glossary#Unix)/[Linux](https://codex.wordpress.org/Glossary#Linux) [shell](https://codex.wordpress.org/Glossary#Shell) command used to change [permissions](https://codex.wordpress.org/Glossary#Permissions) on files. Its name is a contraction of “**ch**ange **mod**e.”

* Related articles: [Changing File Permissions](https://codex.wordpress.org/Changing_File_Permissions), [UNIX Shell Skills](https://codex.wordpress.org/UNIX_Shell_Skills), [htaccess for subdirectories](https://codex.wordpress.org/htaccess_for_subdirectories)

## [Class](https://wordpress.org/documentation/article/wordpress-glossary/#class)

**Classes** are groupings of [CSS](https://codex.wordpress.org/Glossary#CSS) styles which can be applied to any [HTML](https://codex.wordpress.org/Glossary#HTML) element. For classes in PHP, see the [Class (Computing)](http://en.wikipedia.org/wiki/Class#Computing) article at Wikipedia and [PHP Manual: Classes and Objects](http://php.net/manual/en/language.oop5.php).

* Related articles: [CSS](https://codex.wordpress.org/CSS), [Blog Design and Layout](https://codex.wordpress.org/Blog_Design_and_Layout)

## [Classic block](https://wordpress.org/documentation/article/wordpress-glossary/#classic-block)

A block which embeds the TinyMCE editor as a block, TinyMCE was the base of the previous core editor. Older content created prior to the block editor will be loaded in to a single Classic block.

## [Codex](https://wordpress.org/documentation/article/wordpress-glossary/#codex)

The **Codex** is the series of articles that show users how to use WordPress. WordPress users contribute documentation to the codex voluntarily.

* External links: [Codex](https://codex.wordpress.org/Main_Page)

## [Collation](https://wordpress.org/documentation/article/wordpress-glossary/#collation)

**Collation** refers to the order used to sort the letters, numbers, and symbols of a given [character set](https://codex.wordpress.org/Glossary#Character_set). For example, because WordPress, by default, uses the UTF-8 (**utf8**) character set, and when the [WordPress MySQL database tables](https://codex.wordpress.org/Database_Description) are created during the [installation process](https://codex.wordpress.org/Installing_WordPress), MySQL assigns **utf8\_general\_ci** collation to those tables. Beginning with [Version 2.2](https://codex.wordpress.org/Version_2.2), the collation (and character set) used by WordPress is defined in the *wp-config.php* file.

* See also: [Character set](https://codex.wordpress.org/Glossary#Character_set)
* Related articles: [Editing wp-config.php](https://codex.wordpress.org/Editing_wp-config.php), [Converting Database Character Sets](https://codex.wordpress.org/Converting_Database_Character_Sets)
* External links: [Collation at Wikipedia](http://en.wikipedia.org/wiki/Collation), [Character set at Wikipedia](http://en.wikipedia.org/wiki/Character_set), [UTF-8 at Wikipedia](http://en.wikipedia.org/wiki/UTF-8), [Character sets and collation at MySQL](http://dev.mysql.com/doc/refman/5.0/en/charset-general.html)

## [Comments](https://wordpress.org/documentation/article/wordpress-glossary/#comments)

**Comments** are a feature of [blogs](https://codex.wordpress.org/Glossary#Blog) which allow readers to respond to [posts](https://codex.wordpress.org/Glossary#Post). Typically readers simply provide their own thoughts regarding the [content](https://codex.wordpress.org/Glossary#Content) of the post, but users may also provide [links](http://en.wikipedia.org/wiki/Hyperlink) to other resources, generate discussion, or simply compliment the author for a well-written post.

You can control and regulate comments by filters for language and content. Comments can be queued for approval before they are visible on the web site. This is useful in dealing with [comment spam](https://codex.wordpress.org/Comment_Spam).

* See also: [Blog](https://codex.wordpress.org/Glossary#Blog)
* Related articles: [Comment-related plugins](https://codex.wordpress.org/Plugins#Comment_Plugins), [Dealing with comment spam](https://codex.wordpress.org/Comment_Spam), [Settings Discussion SubPanel](https://codex.wordpress.org/Settings_Discussion_SubPanel)
* External links: [Hyperlink at Wikipedia](http://en.wikipedia.org/wiki/Hyperlink)

## [Content](https://wordpress.org/documentation/article/wordpress-glossary/#content)

**Content** consists of text, images, or other information shared in [posts](https://codex.wordpress.org/Glossary#Post). This is separate from the structural design of a web site, which provides a framework into which the content is inserted, and the presentation of a site, which involves graphic design. A [Content Management System](https://codex.wordpress.org/Glossary#Content_Management_System) changes and updates content, rather than the structural or graphic design of a web site.

## [Content Management System](https://wordpress.org/documentation/article/wordpress-glossary/#content-management-system)

A **Content Management System**, or **CMS**, is software for facilitating the maintenance of [content](https://codex.wordpress.org/Glossary#Content), but not design, on a web site. A [blogging](https://codex.wordpress.org/Glossary#Blog) tool is an example of a Content Management System.

* See also: [Blog](https://codex.wordpress.org/Glossary#Blog)

## [cPanel](https://wordpress.org/documentation/article/wordpress-glossary/#cpanel)

**cPanel** is a popular web-based administration tool that many [hosting providers](https://codex.wordpress.org/Glossary#Hosting_provider) provide to allow users to configure their own accounts using an easy-to-use interface.

* Related articles: [Using cPanel](https://codex.wordpress.org/Using_cPanel), [Adding New Themes by using cPanel](https://codex.wordpress.org/Using_Themes#Adding_New_Themes_by_using_cPanel)
* External links: [cPanel website](http://cpanel.net/)

## [CSS](https://wordpress.org/documentation/article/wordpress-glossary/#css)

**CSS**, or **Cascading Style Sheets**, is a [W3C](http://www.w3.org/) [open standards](http://en.wikipedia.org/wiki/Open_standard) programming language for specifying how a web page is presented. It allows web site designers to create formatting and layout for a web site independently of its content.

* Related articles: [CSS](https://codex.wordpress.org/CSS), [Blog Design and Layout](https://codex.wordpress.org/Blog_Design_and_Layout)
* External links: [CSS at W3C](http://www.w3.org/Style/CSS/), [Open standards at Wikipedia](http://en.wikipedia.org/wiki/Open_standard), [W3C.org](http://www.w3.org/)

## [CVS](https://wordpress.org/documentation/article/wordpress-glossary/#cvs)

**CVS** stands for **Concurrent Versions System** and is the software that used to be used to coordinate WordPress development. As of February 2005, this function is carried out by Subversion ([SVN](https://codex.wordpress.org/Glossary#SVN)).

For more information on Subversion, see [Using Subversion](https://codex.wordpress.org/Using_Subversion).

## [Dashboard](https://wordpress.org/documentation/article/wordpress-glossary/#dashboard)

In WordPress a **Dashboard** is the main administration screen for a site (a weblog), or for a network of sites. It summarizes information about the site or network, and also external information, in one or more [widgets](https://codex.wordpress.org/Glossary#Widget) that the Dashboard user can enable, disable, and move around.

* Related articles: [Dashboard Screen](https://codex.wordpress.org/Dashboard_Screen)

## [Database](https://wordpress.org/documentation/article/wordpress-glossary/#database)

A **database** in computing terms is software used to manage information in an organized fashion. [WordPress](https://codex.wordpress.org/Glossary#WordPress) uses the [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB) relational databases management system for storing and retrieving the content of your [blog](https://codex.wordpress.org/Glossary#Blog), such as [posts](https://codex.wordpress.org/Glossary#Posts), [comments](https://codex.wordpress.org/Glossary#Comments), and so on.

* Related articles: [Database Description](https://codex.wordpress.org/Database_Description), [Backing Up Your Database](https://codex.wordpress.org/Backing_Up_Your_Database)

## [Database version](https://wordpress.org/documentation/article/wordpress-glossary/#database-version)

In WordPress, the **database version** is a number that increases every time changes are made to the way WordPress organizes the data in its [database](https://codex.wordpress.org/Glossary#database). It is not the same as the version of the database software, [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB).

For example, the database version in WordPress 3.3 was 19470, and the database version in WordPress 3.3.1 did not change. This tells anyone planning to use backed-up data from the older version that they do not need to check for changes in the structure of the data.

WordPress stores its database version in the database, as the option named “db\_version” in every WordPress site’s “wp\_options” table. (The table name prefix “wp\_” may be missing or different in some cases.)

* Related articles: [Database Description](https://codex.wordpress.org/Database_Description), [How do you force a database upgrade?](https://codex.wordpress.org/FAQ_Installation#How_do_you_force_a_database_upgrade.3F)

## [Default theme](https://wordpress.org/documentation/article/wordpress-glossary/#default-theme)

Every installation of WordPress has a default theme. The default theme is sometimes called the **fallback theme**, because if the active theme is for some reason lost or deleted, WordPress will fallback to using the default theme.

## [Deprecated](https://wordpress.org/documentation/article/wordpress-glossary/#deprecated)

**Deprecated** functions or template tags are no longer supported, and will soon be obsolete.

* Related articles: [“Deprecated Functions” Category](https://codex.wordpress.org/Category:Deprecated_Functions)

## [Developer](https://wordpress.org/documentation/article/wordpress-glossary/#developer)

A **developer**, or **dev**, is a computer programmer who is active in creating, modifying, and updating a software product.

* Related articles: [Plugin API](https://codex.wordpress.org/Plugin_API)

## [DIV](https://wordpress.org/documentation/article/wordpress-glossary/#div)

A **DIV** element in [HTML](https://codex.wordpress.org/Glossary#HTML) marks a section of text. DIVs are used extensively in WordPress to apply [CSS](https://codex.wordpress.org/Glossary#CSS) stylings to particular [blog](https://codex.wordpress.org/Glossary#Blog) elements.

* Related articles: [CSS](https://codex.wordpress.org/CSS), [Blog Design and Layout](https://codex.wordpress.org/Blog_Design_and_Layout)

## [DNS](https://wordpress.org/documentation/article/wordpress-glossary/#dns)

**DNS**, the domain name system, is the system that maps [domain names](https://codex.wordpress.org/Glossary#Domain_name) to [IP addresses](https://codex.wordpress.org/Glossary#IP_address). When you use a web browser to visit a website, your browser first extracts the site’s domain name from the URL. Then it uses the DNS to find the IP address for that domain name. Then it connects to that IP address.

* External link: [Domain Name System](http://en.wikipedia.org/wiki/Domain_Name_System) (Wikipedia)

## [DOM](https://wordpress.org/documentation/article/wordpress-glossary/#dom)

**DOM** (Document Object Model) is a standard, platform-independent interface that allows programmers to dynamically access HTML and XML to control the content and structure of documents. DOM connects programming scripts to web pages.

* External links: [DOM at Wikipedia](http://en.wikipedia.org/wiki/Document_Object_Model), [DOM at W3C.org](http://www.w3.org/DOM/)

## [Domain name](https://wordpress.org/documentation/article/wordpress-glossary/#domain-name)

A **domain name** is a name used for identification purposes on the Internet. In WordPress a domain name usually identifies a server where WordPress is installed. To make this work, the Internet’s domain name system ([DNS](https://codex.wordpress.org/Glossary#DNS)) maps the domain name to a server’s [IP address](https://codex.wordpress.org/Glossary#IP_address). For example, the domain name *example.com* maps to the IP address *192.0.43.10*. Many domain names can map to the same IP address, allowing a single server to run many websites. For example, the domain names *www.example.com* and *example.net* also map to the IP address *192.0.43.10*.

* External link: [Domain name](http://en.wikipedia.org/wiki/Domain_name) (Wikipedia)

## [Draft](https://wordpress.org/documentation/article/wordpress-glossary/#draft)

The **draft** [post status](https://codex.wordpress.org/Glossary#Post_status) is for WordPress [posts](https://codex.wordpress.org/Glossary#Post) which are saved, but as yet unpublished. A draft post can only be edited through the [Administration Panel](https://codex.wordpress.org/Administration_Panels), [Write Post SubPanel](https://codex.wordpress.org/Write_Post_SubPanel) by [users](https://codex.wordpress.org/Authors_and_Users_SubPanel#Table_of_Authors) of equal or greater [User Level](https://codex.wordpress.org/User_Levels) than the [post’s author](https://codex.wordpress.org/Authors_and_Users_SubPanel#Table_of_Registered_Users).

## [Dynamic block](https://wordpress.org/documentation/article/wordpress-glossary/#dynamic-block)

A type of block where the content of which may change and cannot be determined at the time of saving a post, instead calculated any time the post is shown on the front of a site. These blocks may save fallback content or no content at all in their JavaScript implementation, instead deferring to a PHP block implementation for runtime rendering.

## [Excerpt](https://wordpress.org/documentation/article/wordpress-glossary/#excerpt)

An **excerpt** is a condensed description of your blog [post](https://codex.wordpress.org/Glossary#Post) and refers to the summary entered in the Excerpt field of the [Administration](https://codex.wordpress.org/Administration_Panels) > [Posts](https://codex.wordpress.org/Administration_Panels#Add_New_Post) > [Add New SubPanel](https://codex.wordpress.org/Posts_Add_New_SubPanel). The *excerpt* is used to describe your post in RSS feeds and is typically used in displaying search results. The *excerpt* is sometimes used in displaying the **Archives** and [Category](https://codex.wordpress.org/Glossary#Category) views of your posts. Use the [Template Tag](https://codex.wordpress.org/Template_Tags) [the\_excerpt()](https://codex.wordpress.org/Template_Tags/the_excerpt) to display the contents of this field. Note that if you do not enter information into the Excerpt field when writing a post, and you use [the\_excerpt()](https://codex.wordpress.org/Template_Tags/the_excerpt) in your theme template files, WordPress will automatically display the first 55 words of the [post](https://codex.wordpress.org/Glossary#Post)‘s content.

An *excerpt* should not be confused with the **teaser**, which refers to words before the `<!--more--><span> </span>`in a [post’s](https://codex.wordpress.org/Glossary#Post) content. When typing a long post you can insert the `<!--more--><span> </span>`[Quicktag](https://codex.wordpress.org/Posts_Add_New_SubPanel#Visual_Versus_HTML_Editor) after a few sentences to act as a cut-off point. When the post is displayed, the **teaser**, followed by a hyperlink (such as **Read the rest of this entry…**), is displayed. Your visitor can then click on that link to see the full version of your [post](https://codex.wordpress.org/Glossary#Post). The [Template Tag](https://codex.wordpress.org/Template_Tags), [the\_content()](https://codex.wordpress.org/Template_Tags/the_content) should be used to display the teaser.

* Related articles: [Customizing the Read More](https://codex.wordpress.org/Customizing_the_Read_More), [Excerpt](https://codex.wordpress.org/Excerpt)

[Back to the Top](https://codex.wordpress.org/Glossary#top)

## [Feed](https://wordpress.org/documentation/article/wordpress-glossary/#feed)

A **feed** is a function of special software that allows “Feedreaders” to access a site automatically looking for new content and then posting the information about new content and updates to another site. This provides a way for users to keep up with the latest and hottest information posted on different blogging sites. Some Feeds include RSS (alternately defined as “Rich Site Summary” or “Really Simple Syndication”), Atom or RDF files. Dave Shea, author of the web design weblog [Mezzoblue](http://mezzoblue.com/) has written [a comprehensive summary](http://www.mezzoblue.com/archives/2004/05/19/what_is_rssx/) of feeds. Feeds generally are based on [XML](https://codex.wordpress.org/Glossary#XML) technology.

## [Feed Reader](https://wordpress.org/documentation/article/wordpress-glossary/#feed-reader)

The role of Feedreader is to gather and display the webfeed from various website to one place.

## [Filter](https://wordpress.org/documentation/article/wordpress-glossary/#filter)

In WordPress, a Filter is a [function](http://www.w3schools.com/php/php_functions.asp) that is associated with an existing [Action](https://codex.wordpress.org/Glossary#Action) by specifying any [existing Hook](https://codex.wordpress.org/Plugin_API/Action_Reference).

Developers can create [**custom** Filters](https://codex.wordpress.org/Function_Reference/add_filter) using the [Filter API](https://codex.wordpress.org/Plugin_API/Filter_Reference) to **replace** code from an existing Action. This process is called “[hooking](https://codex.wordpress.org/Glossary#Hook)“.

**Custom Filters differ from custom *[Actions](https://codex.wordpress.org/Glossary#Action)*** because custom Actions allow you to **add or remove** code from existing Actions. Whereas custom Filters allow you to **replace** specific data (such as a variable) found within an existing Action.

* See also: [Action](https://codex.wordpress.org/Glossary#Action), [Hook](https://codex.wordpress.org/Glossary#Hook), [Terminology Confusion](https://codex.wordpress.org/Glossary#Terminology_Confusion)
* Related articles: [Filters](https://codex.wordpress.org/Plugin_API#Filters), [Filter Reference](https://codex.wordpress.org/Plugin_API/Filter_Reference), [add\_filter()](https://codex.wordpress.org/Function_Reference/add_filter)

## [Footer area](https://wordpress.org/documentation/article/wordpress-glossary/#footer-area)

A **footer area** is a horizontal area provided by a [theme](https://codex.wordpress.org/Glossary#Theme) for displaying information other than the main [content](https://codex.wordpress.org/Glossary#Content) of the web page. Themes may provide one or more footer areas below the content. Footer areas usually contain [widgets](https://codex.wordpress.org/Glossary#Widget) that an administrator of the site can customize.

In a theme, footer areas are generated by a [template](https://codex.wordpress.org/Glossary#Template) file, typically named *sidebar-footer.php*.

* See also: [Sidebar](https://codex.wordpress.org/Glossary#Sidebar)
* Related articles: [Templates](https://codex.wordpress.org/Templates), [Customizing Your Sidebar](https://codex.wordpress.org/Customizing_Your_Sidebar), [Stepping Into Templates](https://codex.wordpress.org/Stepping_Into_Templates), [Template Hierarchy](https://codex.wordpress.org/Template_Hierarchy)

## [Front End](https://wordpress.org/documentation/article/wordpress-glossary/#front-end)

The front end is what your visitors see and interact with when they come to your website, www.YourSite.com.

## [FTP](https://wordpress.org/documentation/article/wordpress-glossary/#ftp)

**FTP**, or **File Transfer Protocol**, is a client-server protocol for transferring files. It is one way to download files, and the most common way to upload files to a server.

An FTP *client* is a program which can download files from, or upload files to, an FTP *server*.

You may need to use an FTP client to upload your WordPress files to your [web server](https://codex.wordpress.org/Glossary#Web_server), particularly if you use a [hosting provider](https://codex.wordpress.org/Glossary#Hosting_provider).

* Related articles: [FTP Clients](https://codex.wordpress.org/FTP_Clients), [Uploading WordPress to a remote host](https://codex.wordpress.org/Uploading_WordPress_to_a_remote_host), [Using FileZilla](https://codex.wordpress.org/Using_FileZilla)

## [Full Site Editing or FSE](https://wordpress.org/documentation/article/wordpress-glossary/#full-site-editing-or-fse)

This refers to a collection of features that ultimately allows users to edit their entire website using blocks as the starting point. This feature set includes everything from block patterns to global styles to templates to design tools for blocks (and more). First released in WordPress 5.9.

## [Gallery](https://wordpress.org/documentation/article/wordpress-glossary/#gallery)

As defined by Andy Skelton, **Gallery**, introduced with [WordPress 2.5](https://codex.wordpress.org/Version_2.5), is specifically an exposition of images attached to a post. In that same vein, an upload is “attached to a post” when you upload it while editing a post.

In the uploader there is a “Gallery” tab that shows all the uploads attached to the post you are editing. When you have more than one attachment in a post, you should see at the bottom of the Gallery tab a button marked “Insert gallery”. That button inserts a shortcode “” into the post. WordPress replaces that shortcode with an exposition of all images attached to that post. Non-image file types are excluded from the gallery.

Note: If you don’t see the “Insert gallery” button, it may be because you have not attached two images to the post.

The pretty URLs for attachments are made only after you have published the post and should be composed as the post [permalink](https://codex.wordpress.org/Glossary#permalink) plus the attachment [slug](https://codex.wordpress.org/Glossary#slug).

* Related articles: [Gallery Shortcode](https://codex.wordpress.org/Gallery_Shortcode), [Shortcode API](https://codex.wordpress.org/Shortcode_API)

## [gettext](https://wordpress.org/documentation/article/wordpress-glossary/#gettext)

The **gettext** system is a set of tools and standards for language translation, used by WordPress to provide versions in many languages. In WordPress a text string for translation may have a domain and a context. For example, a plugin might specify its own domain for translations, and a context might help translators to provide different translations of the same English word or phrase in different parts of the user interface.

* Related articles: [WordPress in Your Language](https://codex.wordpress.org/WordPress_in_Your_Language), [Translating WordPress](https://codex.wordpress.org/Translating_WordPress), [I18n for WordPress Developers](https://codex.wordpress.org/I18n_for_WordPress_Developers)
* External links: [gettext](http://en.wikipedia.org/wiki/Gettext) (Wikipedia), [GNU gettext](http://www.gnu.org/software/gettext/gettext.html)

## [GMT](https://wordpress.org/documentation/article/wordpress-glossary/#gmt)

**GMT** (“Greenwich Mean Time”, the time at the Royal Observatory in Greenwich, England) is the old name of the time zone from which all other time zones were measured. It has been replaced by [UTC](https://codex.wordpress.org/Glossary#UTC) (“Universal Time, Coordinated”), but for most practical purposes UTC and GMT are the same, so the term GMT is still commonly used.

* External links: [Greenwich Mean Time](http://en.wikipedia.org/wiki/Greenwich_Mean_Time), [Time zone](http://en.wikipedia.org/wiki/Time_zone), [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) (Wikipedia)

## [Gravatar](https://wordpress.org/documentation/article/wordpress-glossary/#gravatar)

A **gravatar** is a globally recognized [avatar](https://codex.wordpress.org/Glossary#Avatar) (a graphic image or picture that represents a user). Typically a user’s gravatar is associated with their email address, and using a service such as [Gravatar.com](http://en.gravatar.com/). The site owner to can configure their site so that a user’s gravatar is displayed along with their comments.

* See also: [Avatar](https://codex.wordpress.org/Glossary#Avatar)
* Related articles: [How to Use Gravatars in WordPress](https://codex.wordpress.org/How_to_Use_Gravatars_in_WordPress), [Using Gravatars](https://codex.wordpress.org/Using_Gravatars)
* External links: [Gravatar at Wikipedia](http://en.wikipedia.org/wiki/Gravatar)

## [GUI](https://wordpress.org/documentation/article/wordpress-glossary/#gui)

GUI stands for Graphical User Interface, pronounced as “gooey”. It is an interface that allows users to point the mouse or cursor to graphical icons.

## [Gutenberg](https://wordpress.org/documentation/article/wordpress-glossary/#gutenberg)

Gutenberg is newly developed, block-oriented editor. It uses blocks to create all types of content, replacing a half-dozen inconsistent ways of customizing WordPress, bringing it in line with modern coding standards, and aligning with open web initiatives. These content blocks transform how users, developers, and hosts interact with WordPress to make building rich web content easier and more intuitive, democratizing publishing — and work — for everyone, regardless of technical ability.

## [Hack](https://wordpress.org/documentation/article/wordpress-glossary/#hack)

A **hack** is a bit of code written to customize or extend the functionality of a software product. Older versions of WordPress used a hack-based extension system, but versions [1.2](https://codex.wordpress.org/Changelog/1.2) and above of WordPress use a [Plugin API](https://codex.wordpress.org/Plugin_API) with [hooks](https://codex.wordpress.org/Glossary#Hook) for extensions.

* See also: [Hacking](https://codex.wordpress.org/Glossary#Hacking), [Plugin](https://codex.wordpress.org/Glossary#Plugin)
* Related articles: [Changelog](https://codex.wordpress.org/Changelog), [Plugin API](https://codex.wordpress.org/Plugin_API)
* External links: [Open source at Wikipedia](http://en.wikipedia.org/wiki/Open_source)

## [Hacking](https://wordpress.org/documentation/article/wordpress-glossary/#hacking)

**Hacking** is the process of writing code for, or contributing code to, a piece of software.

There is some controversy surrounding the meaning of this term. It began as a benign term meaning “to exercise proficiency” or “to alter or improve,” but the popular media have since construed it to mean “to break into a computer system, usually with malicious intent.” Many in the computer industry have recently begun trying to ‘take back’ the word from its popular mutation, and many have adopted the term *cracking* to replace the malicious interpretation. Because of the desire to reclaim the word, you will often find the term used in conjunction with [open source](http://en.wikipedia.org/wiki/Open_source) projects, intended in its benign form. For more information about the history of the term, please see [Wikipedia’s article on *Hacker*](http://en.wikipedia.org/wiki/Hacker).

* See also: [Hack](https://codex.wordpress.org/Glossary#Hack)
* Related articles: [Plugins](https://codex.wordpress.org/Plugins)

## [Header Image](https://wordpress.org/documentation/article/wordpress-glossary/#header-image)

A **Header Image** is a wide picture that appears at the top of a WordPress website.

## [Hook](https://wordpress.org/documentation/article/wordpress-glossary/#hook)

Hooks are specified, by the developer, in Actions and Filters. Here is a (hopefully) complete list of all [existing Hooks](https://codex.wordpress.org/Plugin_API/Action_Reference) within WordPress.

Because Hooks are required by Actions and Filter you may hear the phrase “Action Hooks” and “Filter Hooks” used from time to time.

In technical and strict terms: a Hook is an event, i.e. event as understood by [Observer pattern](http://en.wikipedia.org/wiki/Observer_pattern), invoked by the [do\_action()](https://codex.wordpress.org/Function_Reference/do_action) or [apply\_filters()](https://codex.wordpress.org/Function_Reference/apply_filters) call that afterwards triggers all the [action](https://codex.wordpress.org/Glossary#Action) or [filter](https://codex.wordpress.org/Glossary#Filter) functions, previously hooked to that event using [add\_action()](https://codex.wordpress.org/Function_Reference/add_action) or [add\_filter()](https://codex.wordpress.org/Function_Reference/add_filter), respectively.

* See also: [Action](https://codex.wordpress.org/Glossary#Action), [Filter](https://codex.wordpress.org/Glossary#Filter)
* Related articles: [Hooks, Actions and Filters](https://codex.wordpress.org/Plugin_API#Hooks.2C_Actions_and_Filters), [Plugin API/Hooks](https://codex.wordpress.org/Plugin_API/Hooks)

### [Terminology Confusion](https://wordpress.org/documentation/article/wordpress-glossary/#terminology-confusion)

WordPress Codex and source code comments sometimes confuse the terms “[actions](https://codex.wordpress.org/Glossary#Action)/[filters](https://codex.wordpress.org/Glossary#Filter)” and “[hooks](https://codex.wordpress.org/Glossary#Hook)“.

Actions, Filters and Hooks are also occasionally referred to as “action/filter hooks” or “action/filter/hook functions”.

## [Hosting provider](https://wordpress.org/documentation/article/wordpress-glossary/#hosting-provider)

A **hosting provider** is a company or organization which provides, usually for a fee, infrastructure for making information accessible via the web. This involves the use of a [web server](https://wordpress.org/documentation/article/glossary/#web-server) (including web server software such as [Apache](https://codex.wordpress.org/Glossary#Apache)), and may involve one or more related technologies, such as [FTP](https://codex.wordpress.org/Glossary#FTP), [PHP](https://codex.wordpress.org/Glossary#PHP), [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB), and operating system software such as [Linux](https://codex.wordpress.org/Glossary#Linux) or [Unix](https://codex.wordpress.org/Glossary#Unix).

* Related articles: [Hosting WordPress](https://wordpress.org/about/requirements/)

## [.htaccess](https://wordpress.org/documentation/article/wordpress-glossary/#htaccess)

A **.htaccess** file is a granular configuration file for the [Apache](https://codex.wordpress.org/Glossary#Apache) [web server](https://codex.wordpress.org/Glossary#Web_server) software, used to set or alter the server’s configuration settings for the directory in which it is present, and/or its child directories.

WordPress uses an *.htaccess* file in conjunction with the [mod\_rewrite](https://codex.wordpress.org/Glossary#mod_rewrite) [Apache](https://codex.wordpress.org/Glossary#Apache) module to produce [permalinks](https://codex.wordpress.org/Glossary#Permalink).

Note that *.htaccess* is a *hidden file* in [Unix](https://codex.wordpress.org/Glossary#Unix)/[Linux](https://codex.wordpress.org/Glossary#Linux) (as dictated by the preceding period ‘.’), meaning it may not be visible using the default settings of some [FTP clients](https://codex.wordpress.org/FTP_Clients).

* See also: [chmod](https://codex.wordpress.org/Glossary#chmod)
* Related articles: [htaccess for subdirectories](https://codex.wordpress.org/htaccess_for_subdirectories), [Using Permalinks](https://codex.wordpress.org/Using_Permalinks), [UNIX Shell Skills](https://codex.wordpress.org/UNIX_Shell_Skills), [Changing File Permissions](https://codex.wordpress.org/Changing_File_Permissions)

## [HTML](https://wordpress.org/documentation/article/wordpress-glossary/#html)

**HTML**, or **Hypertext Markup Language**, is a markup language used to describe the semantic content of web pages. It is usually used with [CSS](https://codex.wordpress.org/Glossary#CSS) and/or [JavaScript](https://codex.wordpress.org/Glossary#JavaScript). WordPress renders web pages to conform to the HTML5 standard. The standard is set by the World Wide Web Consortium ([W3C](http://www.w3.org/)).

## [IDE](https://wordpress.org/documentation/article/wordpress-glossary/#ide)

Acronym for Integrated Development Environment. Is an application that provides several tools for software development. An **IDE** usually includes:

* source code editor, which is similar to a [Text Editor](https://wordpress.org/documentation/article/glossary/#text-editor)
* debugger, in the case of WordPress, useful debuggers are those for [PHP](https://codex.wordpress.org/Glossary#PHP) and [Javascript](https://codex.wordpress.org/Glossary#Javascript) code
* automated builder

For our recommended IDEs, please see [Editing Files](https://wordpress.org/documentation/article/editing-files/#ides).

## [Inspector](https://wordpress.org/documentation/article/wordpress-glossary/#inspector)

Deprecated term. See*** ***[Settings Sidebar](https://wordpress.org/documentation/article/glossary/#settings-sidebar).

## [IP address](https://wordpress.org/documentation/article/wordpress-glossary/#ip-address)

An **IP address** is a unique number (e.g. *70.84.29.148*) assigned to a computer (or other internet-capable information appliance, such as a network printer) to enable it to communicate with other devices using the *Internet Protocol*. It is a computer’s identity on the internet, and every computer connected to the internet is assigned at least one — although the methods of assigning these addresses, and the permanence and duration of their assignment, differ according to the use of the computer and the circumstances of its internet use.

Every [web server](https://codex.wordpress.org/Glossary#Web_server) is assigned an IP address as well, but often times [hosting providers](https://codex.wordpress.org/Glossary#Hosting_provider) will assign multiple IP addresses to one computer, in the event that multiple web sites reside on the same physical server. This is the case with most inexpensive ‘managed’ or ‘group’ hosting packages.

[Domain names](https://codex.wordpress.org/Glossary#Domain_name) were created to provide an easier means of accessing internet resources than IP addresses, which are cumbersome to type and difficult to remember. Every domain name has at least one corresponding IP address, but only a small number of IP addresses have a domain name associated with them, since only computers that are servers require domain names. The domain name system ([DNS](https://codex.wordpress.org/Glossary#DNS)) is what maps domain names to IP addresses.

* External links: [IP address](http://en.wikipedia.org/wiki/IP_address) (Wikipedia)

## [ISAPI](https://wordpress.org/documentation/article/wordpress-glossary/#isapi)

**ISAPI** (Internet Server Application Programming Interface) is a set of programming standards designed to allow programmers to quickly and easily develop efficient Web-based applications. Developed by Process Software and Microsoft Corporation, *ISAPI* is intended to replace [CGI](https://codex.wordpress.org/Glossary#CGI) programs.

* External links: [ISAPI at Wikipedia](http://en.wikipedia.org/wiki/ISAPI)

## [JavaScript](https://wordpress.org/documentation/article/wordpress-glossary/#javascript)

**JavaScript** is a programming language that WordPress uses to make certain processing occur in your web browser when it is inconvenient or impossible for the server to do that processing. For example, when you reply to a comment in a WordPress blog, WordPress uses JavaScript to move the comment form inside the comment you are replying to.

* See also: [AJAX](https://codex.wordpress.org/Glossary#AJAX), [HTML](https://codex.wordpress.org/Glossary#HTML), [XHTML](https://codex.wordpress.org/Glossary#XHTML)
* Related article: [Using Javascript](https://codex.wordpress.org/Using_Javascript)
* External link: [JavaScript](http://en.wikipedia.org/wiki/Javascript) (Wikipedia)

## [Linux](https://wordpress.org/documentation/article/wordpress-glossary/#linux)

**Linux** is an [open source](http://en.wikipedia.org/wiki/Open_source) computer operating system, created by Linus Torvalds, similar in style to [Unix](https://codex.wordpress.org/Glossary#Unix). It is popular in [web server](https://codex.wordpress.org/Glossary#Web_server) and other high-performance computing environments, and has recently begun to gain popularity in workstation environments as well.

* External links: [Linux at Shortopedia](http://www.shortopedia.com/L/I/Linux)

## [Local Styles](https://wordpress.org/documentation/article/wordpress-glossary/#local-styles)

See [Block Styles](https://wordpress.org/documentation/article/glossary/#block-styles).

## [Mac OS X](https://wordpress.org/documentation/article/wordpress-glossary/#mac-os-x)

**[Mac OS X](http://www.apple.com/macosx/)** is an operating system specifically for modern Macintosh computers. The operating system was commercially released in 2001. It consists of two main parts: Darwin, an open source [Unix](https://codex.wordpress.org/Glossary#Unix)-like environment which is based on the BSD source tree and the Mach microkernel, adapted and further developed by Apple Computer with involvement from independent developers; and a proprietary GUI named Aqua, developed by Apple.

* Related articles: [UNIX Shell Skills](https://codex.wordpress.org/UNIX_Shell_Skills)

## [MariaDB](https://wordpress.org/documentation/article/wordpress-glossary/#mariadb)

MariaDB is a fork of the [MySQL](https://codex.wordpress.org/Glossary#MySQL) relational database system developed by most of the original developers of MySQL. It works equally well with WordPress.

## [Menu](https://wordpress.org/documentation/article/wordpress-glossary/#menu)

**Menus** are lists of links to pages and posts that appear on WordPress websites.

## [Meta](https://wordpress.org/documentation/article/wordpress-glossary/#meta)

**Meta** has several meanings, but generally means **information about**. In WordPress, *meta* usually refers to **administrative** type information. As described in [Meta Tags in WordPress](https://codex.wordpress.org/Meta_Tags_in_WordPress), *meta* is the [HTML](https://codex.wordpress.org/Glossary#HTML) tag used to describe and define a web page to the outside world (search engines). In the article [Post Meta Data](https://codex.wordpress.org/Post_Meta_Data_Section), *meta* refers to information associated with each **post**, such as the author’s name and the date posted. [Meta Rules](https://codex.wordpress.org/Codex:Guidelines#Meta_Rules) define the general protocol to follow in using the Codex. Also, many WordPress based sites offer a *Meta* section, usually found in the sidebar, with links to login or register at that site. Finally, *Meta* is a [MediaWiki](http://www.mediawiki.org/) [namespace](http://meta.wikimedia.org/wiki/Namespace) that refers to administrative functions within Codex.

* External links: [Wikipedia’s Article on Meta](http://en.wikipedia.org/wiki/Meta-)

## [Microformats](https://wordpress.org/documentation/article/wordpress-glossary/#microformats)

**Microformats** provide a way for programs to read certain information in web pages without making the pages look any different to humans. They add semantics to the generic HTML markup in order for these programs to understand the meaning of specific parts of a web page content which is better recognized by humans. For example, a web page displaying a user’s profile could use microformats to make it easy for a program to extract the user’s contact information so that it can be added to an address book in a single operation. In WordPress, some [themes](https://codex.wordpress.org/Glossary#theme) and [plugins](https://codex.wordpress.org/Glossary#plugin) support some microformats.

* Related: [Themes](https://wordpress.org/extend/themes/tags/microformats) and [plugins](https://wordpress.org/extend/plugins/tags/microformats) providing microformats support
* External links: [Microformats.org](http://microformats.org/)

## [MIME](https://wordpress.org/documentation/article/wordpress-glossary/#mime)

**MIME** stands for **Multipurpose Internet Mail Extension** and is an Internet standard that extends the format of email to support:

* Text in character sets other than ASCII
* Non-text attachments
* Message bodies with multiple parts
* Header information in non-ASCII character sets

MIME’s use, however, has grown beyond describing the content of email and now is often used to describe content type in general including for the web and as a storage for rich content in some commercial products.

* External links: [IANA Media Types Specification](http://www.iana.org/assignments/media-types), [Wikipedia](http://en.wikipedia.org/wiki/MIME)

## [Moblogging](https://wordpress.org/documentation/article/wordpress-glossary/#moblogging)

**Moblogging** is the act of posting to one’s [blog](https://codex.wordpress.org/Glossary#Blog) via a mobile device (e.g. mobile phone, smartphone, or tablet). It is pronounced as *mōbə-logging* or *mōb-logging*, or sometimes as *mŏb-logging* in reference to *smart mobs*.

* Related articles: [Moblog Clients](https://codex.wordpress.org/Weblog_Client#Mobile), [Post to your blog using email](https://codex.wordpress.org/Post_to_your_blog_using_email)

## [mod\_rewrite](https://wordpress.org/documentation/article/wordpress-glossary/#mod-rewrite)

**mod\_rewrite** is an extension module of the [Apache](https://codex.wordpress.org/Glossary#Apache) [web server](https://codex.wordpress.org/Glossary#Web_server) software which allows for “rewriting” of [URLs](http://en.wikipedia.org/wiki/Url) on-the-fly. Rewrite *rules* use [regular expressions](http://en.wikipedia.org/wiki/Regular_expression) to parse the requested URL from the client, translate it into a different URL, and serve the content of this new URL under the original URL or pointing the client to make the new URL request.

WordPress uses *mod\_rewrite* for its [permalink](https://codex.wordpress.org/Glossary#Permalink) structure, and also for [multisite](https://codex.wordpress.org/Glossary#Multisite) networks, which are both optional functionality.

* Related articles: [Using Permalinks](https://codex.wordpress.org/Using_Permalinks), [Create A Network](https://codex.wordpress.org/Create_A_Network)

## [Multisite](https://wordpress.org/documentation/article/wordpress-glossary/#multisite)

**Multisite** is a feature of [WordPress 3.0](https://codex.wordpress.org/Version_3.0) and later versions that allows multiple virtual [sites](https://codex.wordpress.org/Glossary#Site) to share a single WordPress installation. When the multisite feature is activated, the original WordPress site can be converted to support a [network](https://codex.wordpress.org/Glossary#Network) of sites.

* Related article: [Create A Network](https://wordpress.org/documentation/article/create-a-network/)

## [MySQL](https://wordpress.org/documentation/article/wordpress-glossary/#mysql)

**MySQL** is a popular [open source](http://en.wikipedia.org/wiki/Open_source) SQL (Structured Query Language) database implementation, available for many platforms, including Windows, [Unix](https://codex.wordpress.org/Glossary#Unix)/[Linux](https://codex.wordpress.org/Glossary#Linux) and [Mac OS X](https://codex.wordpress.org/Glossary#Mac_OS_X).

WordPress requires a MySQL database to store all [blog](https://codex.wordpress.org/Glossary#Blog) information, including [posts](https://codex.wordpress.org/Glossary#Post), [comments](https://codex.wordpress.org/Glossary#Comments), [metadata](https://codex.wordpress.org/Glossary#Meta), and other information.

WordPress also works with MySQL-compatible databases such as [MariaDB](https://codex.wordpress.org/Glossary#MariaDB) and Percona Server.

* Related articles: [Database Description](https://codex.wordpress.org/Database_Description)
* External links: [MySQL](http://mysql.com/), [MariaDB](http://mariadb.org/), [Percona Server](http://www.percona.com/software/percona-server/)

[Back to the Top](https://codex.wordpress.org/Glossary#top)

## [Navigation](https://wordpress.org/documentation/article/wordpress-glossary/#navigation)

Navigation is the term used to describe text on a page that, when selected, redirects you to a corresponding page elsewhere on the website. Navigation may sometimes be referred to as the menu, links and hyperlinks.

## [Navigation Block](https://wordpress.org/documentation/article/wordpress-glossary/#navigation-block)

A block that allows you to edit a site’s navigation menu, both in terms of structure and design.

## [Network](https://wordpress.org/documentation/article/wordpress-glossary/#network)

In the WordPress user interface, a **network** is a collection of separate [sites](https://codex.wordpress.org/Glossary#Site) created in a single WordPress installation by the [multisite](https://codex.wordpress.org/Glossary#Multisite) feature. The sites in a WordPress network are not interconnected like the things in other kinds of networks. They are very like the separate blogs at WordPress.com.

In WordPress code the network is known as the *site* and the sites are known as *blogs*.

* Related articles: [Create A Network](https://codex.wordpress.org/Create_A_Network)

## [News reader](https://wordpress.org/documentation/article/wordpress-glossary/#news-reader)

A **news aggregator** or **news (feed) reader** is a computer program which tracks syndicated information [feeds](https://codex.wordpress.org/Glossary#Feed), via [RSS](https://codex.wordpress.org/Glossary#RSS), [RDF](https://codex.wordpress.org/Glossary#RDF), or [Atom](https://codex.wordpress.org/Glossary#Atom). Most news aggregators allow one to ‘subscribe’ to a feed, and automatically keep track of the articles one has read, similar to an email client tracking read emails.

Many [blogs](https://codex.wordpress.org/Glossary#Blog) make their content available in [feed](https://codex.wordpress.org/Glossary#Feed) form for the convenience of readers using news aggregators. WordPress can generate feeds in [RSS](https://codex.wordpress.org/Glossary#RSS) and/or [Atom](https://codex.wordpress.org/Glossary#Atom) formats.

* External links: [News aggregator at Wikipedia](http://en.wikipedia.org/wiki/News_aggregator)

## [Nonce](https://wordpress.org/documentation/article/wordpress-glossary/#nonce)

**Nonce** is used for security purposes to protect against unexpected or duplicate requests that could cause undesired permanent or irreversible changes to the web site and particularly to its database. Specifically, a nonce is an one-time token generated by a [web site](https://codex.wordpress.org/Glossary#Web_site) to identify future requests to that web site. When a request is submitted, the web site verifies if a previously generated nonce expected for this particular kind of request was sent along and decides whether the request can be safely processed, or a notice of failure should be returned. This could prevent unwanted repeated, expired or malicious requests from being processed.

Nonce is usually included in a hidden HTML form field or as a part of an URL and therefore sent with a request by submitting a form field or visiting a link. If a request is not verified, the web site could generate a new nonce in its response and prompt the user to intentionally confirm the repetition of the request. In WordPress, the response message is *“Are you sure you want to do this?”* by default.

* Related articles: [WordPress Nonces](https://codex.wordpress.org/WordPress_Nonces)

## [Open Source](https://wordpress.org/documentation/article/wordpress-glossary/#open-source)

**Open source** is simply programming code that can be read, viewed, modified, and distributed, by anyone who desires. WordPress is distributed under an *open source* [GNU General Public License (GPL)](http://www.gnu.org/copyleft/gpl.html).

* Related articles: [GPL](https://codex.wordpress.org/GPL), [License](https://codex.wordpress.org/License)
* External links: [Open Source Initiative](http://www.opensource.org/), [Open Source at Wikipedia](http://en.wikipedia.org/wiki/Open_source), [Source Code at Wikipedia](http://en.wikipedia.org/wiki/Source_code)

## [Options](https://wordpress.org/documentation/article/wordpress-glossary/#options)

**Options** are pieces of data that WordPress uses to store various preferences and configuration settings. By using the [Options API](https://codex.wordpress.org/Options_API) that is a simple and standardized way of storing data in the database, options can be [added](https://codex.wordpress.org/Function_Reference/add_option), [changed](https://codex.wordpress.org/Function_Reference/update_option), [removed](https://codex.wordpress.org/Function_Reference/delete_option), and [retrieved](https://codex.wordpress.org/Function_Reference/get_option), from the [wp\_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options).

* Related articles: [Option Reference](https://codex.wordpress.org/Option_Reference), [Transients API](https://codex.wordpress.org/Transients_API), [Options API](https://codex.wordpress.org/Options_API)

## [Output Compression](https://wordpress.org/documentation/article/wordpress-glossary/#output-compression)

**Output Compression** is the removal of white spaces, carriage returns, new lines and tabs from your HTML document. This reduces the file size of the HTML document without changing the functionality.

* Related articles: [Output Compression](https://codex.wordpress.org/Output_Compression)

## [Page (post type)](https://wordpress.org/documentation/article/wordpress-glossary/#page-post-type)

A **Page** is often used to present “static” information about yourself or your site. A good example of a Page is information you would place on an About Page. A Page should not be confused with the time-oriented objects called [posts](https://codex.wordpress.org/Glossary#Post). Pages are typically “timeless” in nature and live “outside” your blog.

The word “page” has long been used to describe any HTML document on the web. In WordPress, however, “Page” refers to a very specific feature first introduced in WordPress version 1.5.

* Related articles: [Pages](https://codex.wordpress.org/Pages), [Write Page SubPanel](https://codex.wordpress.org/Write_Page_SubPanel)

## [Patterns](https://wordpress.org/documentation/article/wordpress-glossary/#patterns)

WordPress 6.3 renamed Reusable Blocks to Patterns. A synced pattern will behave in exactly the same way as a reusable block.

Patterns are layouts of blocks that can be inserted as starter content that are meant to be changed by the user every time. Once inserted, they exist as a local save and are not global.

Related articles: [Patterns](https://wordpress.org/documentation/article/block-pattern/), [Comparing Patterns to Template Parts](https://wordpress.org/documentation/article/comparing-patterns-template-parts-and-reusable-blocks/).

## [Perl](https://wordpress.org/documentation/article/wordpress-glossary/#perl)

**Perl** is an acronym for **Practical Extraction and Report Language**, but it’s most commonly spelled as a proper name. It’s a very popular and powerful scripting language used for web applications, although its use is being largely replaced by [PHP](https://codex.wordpress.org/Glossary#PHP) in the mainstream. One of its strengths lies in its speedy and effective use of [regular expressions](http://en.wikipedia.org/wiki/Regular_expression). Its unofficial motto is, “There’s More Than One Way To Do It,” or “TMTOWTDI,” owing to the extreme flexibility of the syntax.

WordPress does not use Perl, and it is therefore not required.

## [Permalink](https://wordpress.org/documentation/article/wordpress-glossary/#permalink)

A **permalink** is a [URL](http://en.wikipedia.org/wiki/Url) at which a resource or article will be permanently stored. Many pages driven by [Content Management Systems](https://codex.wordpress.org/Glossary#Content_Management_System) contain excerpts of content which is frequently rotated, making linking to bits of information within them a game of chance. Permalinks allow users to bookmark full articles at a [URL](http://en.wikipedia.org/wiki/Url) they know will never change, and will always present the same content.

Permalinks are optional in WordPress, but are highly recommended as they greatly increase the cleanliness of [URL](http://en.wikipedia.org/wiki/Url). WordPress uses the [Apache](https://codex.wordpress.org/Glossary#Apache) module *[mod\_rewrite](https://codex.wordpress.org/Glossary#mod_rewrite)* to implement its permalink system.

* Related articles: [Using Permalinks](https://codex.wordpress.org/Using_Permalinks)
* External links: [URL at Wikipedia](http://en.wikipedia.org/wiki/Url)

## [Permissions](https://wordpress.org/documentation/article/wordpress-glossary/#permissions)

**Permissions** are security settings restricting or allowing users to perform certain functions. In the case of files on [Unix](https://codex.wordpress.org/Glossary#Unix) or [Linux](https://codex.wordpress.org/Glossary#Linux) systems, there are three types of permissions: *read*, *write*, and *execute*. In the case of [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB) databases, there are many more: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, etc. — although MySQL/MariaDB refer to them as *privileges*.

* Related articles: [Changing File Permissions](https://codex.wordpress.org/Changing_File_Permissions)

## [PHP](https://wordpress.org/documentation/article/wordpress-glossary/#php)

**PHP** is a recursive acronym for **PHP: Hypertext Preprocessor**. It is a popular server-side scripting language designed specifically for integration with [HTML](https://codex.wordpress.org/Glossary#HTML), and is used (often in conjunction with [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB)) in [Content Management Systems](https://codex.wordpress.org/Glossary#Content_Management_System) and other web applications. It is available on many platforms, including Windows, [Unix](https://codex.wordpress.org/Glossary#Unix)/[Linux](https://codex.wordpress.org/Glossary#Linux) and [Mac OS X](https://codex.wordpress.org/Glossary#Mac_OS_X), and is [open source](http://en.wikipedia.org/wiki/Open_source) software.

WordPress is written using PHP and requires it for operation.

* External links: [PHP Website](http://php.net/), [PHP for Designers](http://web.archive.org/web/20150402040826/http://www.digital-web.com/articles/php_for_designers/) — by WordPress lead [developer](https://codex.wordpress.org/Glossary#Developer) [Matthew Mullenweg](https://codex.wordpress.org/User:Matt), [PHP at OnLAMP](http://www.onlamp.com/php/)

## [phpMyAdmin](https://wordpress.org/documentation/article/wordpress-glossary/#phpmyadmin)

**phpMyAdmin** is a popular, powerful web-based interface for administering [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB) databases. It is [open source](http://en.wikipedia.org/wiki/Open_source), written in [PHP](https://codex.wordpress.org/Glossary#PHP), and is among the better tools available for working with [MySQL](https://codex.wordpress.org/Glossary#MySQL) or [MariaDB](https://codex.wordpress.org/Glossary#MariaDB) databases.

* Related articles: [phpMyAdmin](https://codex.wordpress.org/phpMyAdmin)
* External links: [phpMyAdmin web site](https://www.phpmyadmin.net/)

## [Ping](https://wordpress.org/documentation/article/wordpress-glossary/#ping)

Within the WordPress interface, “ping” is sometimes used to refer to [Pingbacks](https://codex.wordpress.org/Glossary#Pingback) and [Trackbacks](https://codex.wordpress.org/Glossary#Trackback).

In general computer terms, “ping” is a common utility used in a TCP/IP environment to determine if a given [IP Address](https://codex.wordpress.org/Glossary#IP_address) exists or is reachable. Typically, Ping is used to diagnose a network connection problem. Many times you will be asked, “Can you ping that address?”. That means, does the Ping utility return a success message trying to reach the “problem” [IP Address](https://codex.wordpress.org/Glossary#IP_address)?

* External links: [Ping at Wikipedia](http://en.wikipedia.org/wiki/Ping)

## [Pingback](https://wordpress.org/documentation/article/wordpress-glossary/#pingback)

**Pingback** lets you notify the author of an article if you link to his article (article on a blog, of course). If the links you include in an article you write on a blog lead to a blog which is pingback-enabled, then the author of that blog gets a notification in the form of a pingback that you linked to his article.

If you’re feeling *really* geeky you may want to check out the [Pingback technical specification](http://hixie.ch/specs/pingback/pingback) or [Otto’s “How Pingbacks Work” explanation](http://lists.automattic.com/pipermail/wp-hackers/2009-September/027425.html).

* See also: [Trackback](https://wordpress.org/documentation/article/glossary/#trackback)
* Related articles: [Introduction to Blogging: Pingbacks](https://wordpress.org/documentation/article/introduction-to-blogging/#pingbacks)

## [Plugin](https://wordpress.org/documentation/article/wordpress-glossary/#plugin)

A **Plugin** is a group of PHP functions that can extend the functionality present in a standard WordPress weblog. These functions may all be defined in one php file, or may be spread among more than one file. Usually, a plugin is a PHP file that can be uploaded to the “wp-content/plugins” directory on your webserver, where you have installed WordPress. Once you have uploaded the plugin file, you should be able to “turn it on” or Enable it from the “Plugins” page in the administration interface of your weblog. The WordPress source code contains hooks that can be used by plugins.

* See also: [Hack](https://codex.wordpress.org/Glossary#Hack), [Hacking](https://codex.wordpress.org/Glossary#Hacking)
* Related articles: [Plugins](https://codex.wordpress.org/Plugins)

## [Port](https://wordpress.org/documentation/article/wordpress-glossary/#port)

Within the context of the WordPress community, a **port** is a bit of code that has been rewritten to be compatible with WordPress. For example, if someone wrote a plugin for MoveableType, WordPress users may want to find a port of that plugin for WordPress. Port can also be used as a verb: to rewrite a piece of software for a different platform/language.

* External links: [Porting at Wikipedia](http://en.wikipedia.org/wiki/Porting)

## [Post](https://wordpress.org/documentation/article/wordpress-glossary/#post)

Also known as “articles” and sometimes incorrectly referred to as “blogs”. In WordPress, “posts” are articles that you write to populate your blog.

## [Post settings](https://wordpress.org/documentation/article/wordpress-glossary/#post-settings)

A sidebar region containing metadata fields for the post, including scheduling, visibility, terms, and featured image.

## [Post Slug](https://wordpress.org/documentation/article/wordpress-glossary/#post-slug)

A few lowercase words separated by dashes, describing a post and usually derived from the post title to create a user-friendly (that is, readable and without confusing characters) [permalink](https://codex.wordpress.org/Permalinks). Post slug substitutes the “%posttitle%” placeholder in a [custom permalink structure](https://codex.wordpress.org/Permalinks#Choosing_your_permalink_structure). Post slug should not be changed and is especially useful if the post title tends to be long or changes frequently.

## [Post Status](https://wordpress.org/documentation/article/wordpress-glossary/#post-status)

The status of a post, as set in the [Administration Panel](https://codex.wordpress.org/Administration_Panels), [Write Post SubPanel](https://codex.wordpress.org/Write_Post_SubPanel) is either: **Published** (viewable by everyone), **Draft** (incomplete post viewable by anyone with proper [user level](https://codex.wordpress.org/User_Levels)), or **Private** (viewable only to WordPress users at Administrator level).

* Related articles: [Post Status](https://codex.wordpress.org/Post_Status)

## [Post Type](https://wordpress.org/documentation/article/wordpress-glossary/#post-type)

Post type refers to the various structured data that is maintained in the WordPress posts table. Native (or built-in) registered post types are **post**, **page**, **attachment**, **revision**, and **nav-menu-item**. Custom post types are also supported in WordPress and can be defined with [register\_post\_type()](https://codex.wordpress.org/Function_Reference/register_post_type). Custom post types allow users to easily create and manage such things as portfolios, projects, video libraries, podcasts, quotes, chats, and whatever a user or developer can imagine.

* Related articles: [Post Types](https://codex.wordpress.org/Post_Types)

## [Query](https://wordpress.org/documentation/article/wordpress-glossary/#query)

The process behind the scenes. See below. :🙂:

* Related articles: *[Query Overview](https://codex.wordpress.org/Query_Overview)*, *[Custom Queries](https://codex.wordpress.org/Custom_Queries)*, *[WP Query](https://codex.wordpress.org/Class_Reference/WP_Query)*, *[WP User Query](https://codex.wordpress.org/Class_Reference/WP_User_Query)*
* See also: *[query string](https://codex.wordpress.org/Glossary#Query_String)*, *[query variable](https://codex.wordpress.org/Glossary#Query_Variable)*

## [Query Block](https://wordpress.org/documentation/article/wordpress-glossary/#query-block)

A block that replicates the classic [WP\_Query](https://developer.wordpress.org/reference/classes/wp_query/) and allows for further customization with additional functionality.

## [Query String](https://wordpress.org/documentation/article/wordpress-glossary/#query-string)

A sequence of codes in a [Uniform Resource Identifier (URI)](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier) that a web page uses to determine what dynamic data to display. The query string in a [URI](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier) comes after an initial question mark, and may contain several parameters separated by ampersands. WordPress uses query strings to indicate criteria to search for specific posts or sets of posts in the database. The use of query strings is generally believed to impede the indexing of dynamic pages by search engines. For this reason, it is often desirable to use a method such as [mod\_rewrite](https://codex.wordpress.org/Glossary#mod_rewrite) to reduce exposure of query strings to search engines and other site visitors.

## [Query Variable](https://wordpress.org/documentation/article/wordpress-glossary/#query-variable)

A variable passed through the [query string](https://codex.wordpress.org/Glossary#Query_string). For example, in the query string *?category\_name=tech&feed=atom*, there are two query variables: *category\_name* with a value of “tech”, and *feed* with a value of “atom”.

## [QuickTag](https://wordpress.org/documentation/article/wordpress-glossary/#quicktag)



## [RDF](https://wordpress.org/documentation/article/wordpress-glossary/#rdf)

Resource Description Framework. A language used to describe the locations of resources on the web. WordPress can produce output in RDF format that describes the locations of posts. Like [RSS](https://wordpress.org/documentation/article/wordpress-glossary/#rss), RDF is used for content syndication.

## [Recordset](https://wordpress.org/documentation/article/wordpress-glossary/#recordset)

**Recordset** refers to the group of records or result returned from a database query.

* See also [MySQL](https://codex.wordpress.org/Glossary#MySQL), [wpdb](https://codex.wordpress.org/Class_Reference/wpdb) database class

## [Relative Path](https://wordpress.org/documentation/article/wordpress-glossary/#relative-path)

A **relative path** is the location of a file in relation to the current working directory and does not begin with a slash (/). This is different from an [absolute path](https://codex.wordpress.org/Glossary#Absolute_Path) which gives an exact location.

* See also: [Absolute Path](https://codex.wordpress.org/Glossary#Absolute_Path)
* External links: [Path\_Computing at Wikipedia](http://en.wikipedia.org/wiki/Path_(computing))

## [Relative URI](https://wordpress.org/documentation/article/wordpress-glossary/#relative-uri)

A relative URI (sometimes called a **relative link**) is a partial URI that is interpreted (resolved) relative to a **base URI**.

On the World Wide Web, relative URIs come in two forms:

A **relative URI with an absolute path** is interpreted relative to the domain root:

```
 /images/icecream.jpg → http://domain.example/images/icecream.jpg
```

A **relative URI with a relative path** is interpreted relative to the URL of the current document. E.g., on the web page *http://domain.example/icecream/chocolate.html*,

```
 strawberry.html → http://domain.example/icecream/strawberry.html
```

[Wikipedia: URI Resolution](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URI_resolution)

## [RichText](https://wordpress.org/documentation/article/wordpress-glossary/#reusable-block)

A common component enabling rich content editing including bold, italics, hyperlinks, etc.

## [RSS](https://wordpress.org/documentation/article/wordpress-glossary/#rss)

“*Really Simple Syndication*“: a format for syndicating many types of content, including blog entries, torrent files, video clips on news-like sites; specifically frequently updated content on a Web site, and is also known as a type of “feed” or “aggregator”. An RSS feed can contain a summary of content or the full text, and makes it easier for people to keep up to date with sites they like in an automated manner (much like e-mail).

The content of the feed can be read by using software called an [RSS or Feed reader](https://codex.wordpress.org/Glossary#News_reader). Feed readers display hyperlinks, and include other metadata (information about information) that helps people decide whether they want to read more, follow a link, or move on.

The original intent of RSS is to make information come to you (via the feed reader) instead of you going out to look for it (via the Web).

Programs called news aggregators permit users to view many feeds at once, providing ‘push’ content constantly. See [Category:Feeds](https://codex.wordpress.org/Category:Feeds) for Codex resources about bringing RSS feeds into WordPress. See also [RDF](https://codex.wordpress.org/Glossary#RDF) Site Summary.

## [RTL](https://wordpress.org/documentation/article/wordpress-glossary/#rtl)

A written language is [Right-to-left](http://en.wikipedia.org/wiki/Right-to-left) when its script flows from the right side of the page to the left.

* Related articles: [Right-to-Left Language Support](https://codex.wordpress.org/Right-to-Left_Language_Support)

## [Robots.txt](https://wordpress.org/documentation/article/wordpress-glossary/#robots-txt)

Web Robots are programs which traverse the Web automatically. They are also called Web Wanderers, Web Crawlers, and Spiders. Search Engines are the main Web Robots. Some Web Robots look for a file named **robots.txt** on your [web server](https://codex.wordpress.org/Glossary#Web_server) to see what and where they should look for content and files on your web server. Some Web Robots ignore this file.

* Related articles: [Search Engine Optimization for WordPress](https://codex.wordpress.org/Search_Engine_Optimization_for_WordPress)
* External links: [Google information about robots.txt](http://www.google.com/support/webmasters/bin/answer.py?answer=40361), [The Web Robots Page](http://www.robotstxt.org/wc/robots.html)

## [Role](https://wordpress.org/documentation/article/wordpress-glossary/#role)

A **role** gives users permission to perform a group of tasks. When a user logs in and is authenticated, the user’s role determines which [capabilities](https://codex.wordpress.org/Glossary#Capabilities) the user has, and each capability is permission to perform one or more types of task. All users with the same role normally have the same capabilities. For example, users who have the Author role usually have permission to edit their own posts, but not permission to edit other users’ posts. WordPress comes with six roles and over fifty capabilities in its role-based access system. Plugins can modify the system.

* Related article: [Roles and Capabilities](https://codex.wordpress.org/Roles_and_Capabilities)
* External link: [Role-based access control](http://en.wikipedia.org/wiki/Role-based_access_control) (Wikipedia)

## [Screen](https://wordpress.org/documentation/article/wordpress-glossary/#screen)

In WordPress a **screen** is a web page used for managing part of a weblog ([site](https://codex.wordpress.org/Glossary#Site)) or [network](https://codex.wordpress.org/Glossary#Network). The term ‘screen’ is used to avoid confusion with ‘[page](https://codex.wordpress.org/Glossary#Page)‘, which has a specific and different meaning in WordPress. For example, the web page used to manage posts is known as the [Posts Screen](https://codex.wordpress.org/Posts_Screen).

* Related article: [Class\_Reference/WP\_Screen](https://codex.wordpress.org/Class_Reference/WP_Screen)

## [Serialization](https://wordpress.org/documentation/article/wordpress-glossary/#serialization)

The process of converting a block’s attributes object into HTML markup, which occurs each time a block is edited.

## [Settings Sidebar](https://wordpress.org/documentation/article/wordpress-glossary/#settings-sidebar)

The panel on the right that contains the document and block settings. The sidebar is toggled using the Settings gear icon. Block settings are shown when a block is selected, otherwise document settings are shown.

## [Shell](https://wordpress.org/documentation/article/wordpress-glossary/#shell)

A **shell** is a program which interacts directly with an operating system such as MS-DOS, [Unix](https://codex.wordpress.org/Glossary#Unix)/[Linux](https://codex.wordpress.org/Glossary#Linux), [Mac OS X](https://codex.wordpress.org/Glossary#Mac_OS_X), or others — but it is most commonly associated with [Unices](https://codex.wordpress.org/Glossary#Unix). It is often referred to as a ‘console’ or ‘command line’, because it is controlled using typed commands rather than mouse or graphical interface input.

Most often, when interacting with a remote computer (as one would when configuring WordPress), an additional “faux” shell is involved called [SSH](https://codex.wordpress.org/Glossary#SSH).

Some popular shell programs are:

* [Bash](http://www.gnu.org/software/bash/bash.html) (Bourne Again Shell)
* [Tcsh](http://tcsh.org/) (an expanded C Shell)
* [Zsh](http://www.zsh.org/)

## [Shortcode](https://wordpress.org/documentation/article/wordpress-glossary/#shortcode)

A [Shortcode](https://codex.wordpress.org/Shortcode) is a technique for embedding a snippet of [PHP](https://codex.wordpress.org/Glossary#PHP) code into the body of a page or other content item.

## [Sidebar](https://wordpress.org/documentation/article/wordpress-glossary/#sidebar)

A **sidebar** is a vertical column provided by a [theme](https://codex.wordpress.org/Glossary#Theme) for displaying information other than the main [content](https://codex.wordpress.org/Glossary#Content) of the web page. Themes usually provide at least one sidebar at the left or right of the content. Sidebars usually contain [widgets](https://codex.wordpress.org/Glossary#Widget) that an administrator of the site can customize.

In a theme, sidebars are generated by a [template](https://codex.wordpress.org/Glossary#Template) file, typically named *sidebar.php*.

* See also: [Footer area](https://codex.wordpress.org/Glossary#Footer_area)
* Related articles: [Sidebars](https://codex.wordpress.org/Sidebars), [Templates](https://codex.wordpress.org/Templates), [Customizing Your Sidebar](https://codex.wordpress.org/Customizing_Your_Sidebar), [Stepping Into Templates](https://codex.wordpress.org/Stepping_Into_Templates), [Template Hierarchy](https://codex.wordpress.org/Template_Hierarchy)

## [Site](https://wordpress.org/documentation/article/wordpress-glossary/#site)

In the WordPress user interface, a **site** can simply be the website created by WordPress, or it can be a virtual website created as part of a [network](https://codex.wordpress.org/Glossary#Network) by the [multisite](https://codex.wordpress.org/Glossary#Multisite) feature. A site in a network is virtual in the sense that it does not have its own directory on the server, although it has its own URL and it might have its own domain name.

In WordPress code the site is the website created by WordPress. If multisite is in use, then the site is the network website and each virtual website is known as a *blog*.

* Related article: [Create A Network](https://codex.wordpress.org/Create_A_Network)

## [Site Editor](https://wordpress.org/documentation/article/wordpress-glossary/#site-editor)

The cohesive experience that allows you to directly edit and navigate between various templates, template parts, styling options, and more.

## [Slug](https://wordpress.org/documentation/article/wordpress-glossary/#slug)

A **slug** is a few words that describe a post or a page. Slugs are usually a URL friendly version of the post title (which has been automatically generated by WordPress), but a slug can be anything you like. Slugs are meant to be used with [permalinks](https://codex.wordpress.org/Glossary#Permalink) as they help describe what the content at the URL is.

Example post permalink: *[https://wordpress.org/development/2006/06/wordpress-203/](https://wordpress.org/development/2006/06/wordpress-203/)*

The slug for that post is “wordpress-203”.

Slugs are also used for post types, categories, tags, etc. Like post and page slugs, this is usually for creating URL friendly versions of these items.

## [Smileys](https://wordpress.org/documentation/article/wordpress-glossary/#smileys)

[![Wink Icon](https://codex.wordpress.org/images/4/4b/icon_wink.gif)](https://codex.wordpress.org/File:icon_wink.gif)

Smileys (also called Smilies or Emoticons) are stylized representations of a human face, usually displayed as yellow buttons with two dots for the eyes, and a half mouth. Smileys are often used in WordPress Plugins. By default, WordPress automatically converts text smileys to graphic images. When you type :😉: in your post you see when you preview or publish your post.

Related article: [Using Smilies](https://codex.wordpress.org/Using_Smilies)

## [Spam](https://wordpress.org/documentation/article/wordpress-glossary/#spam)

Once upon a time, [SPAM](http://www.hormel.com/) was an animal by-product that came in a can and was fodder for many Monty Python sketches, but since the world-wide adoption of the internet as an integral part of daily life, Spam has become synonymous with what is wrong with the internet. Spam, in general terms, is an email or other forms of unsolicited advertising. Spam is very easy to spread throughout the internet, and works on the principle that if you send out thousands, or hundreds of thousands of unsolicited advertisements, scams, or other questionable methods of making money, that you only need a very small percentage of people to be fooled and you will make lots of money.

Common spam these days comes from online gambling sites and those trying to sell drugs for “male enhancement.” Lately, web logs, or blogs, as we call them, have been targeted by spammers to try to increase their site ratings in the search engines. Spammers use various methods to distribute their electronic junk mail, and employ bots, or computer programs to quickly and easily send email or comments to millions of addresses and [IPs](https://codex.wordpress.org/Glossary#IP_address) all over the world.

Spammers can be difficult to track down as they often hijack peoples’ email and [IP](https://codex.wordpress.org/Glossary#IP_address) addresses. When this happens, it may appear a friend sent you the spam, but in fact, the spammer’s [bot](http://en.wikipedia.org/wiki/Internet_bot) grabbed your friend’s email address and used it to hide the true source of the spam. WordPress [developers](https://codex.wordpress.org/Glossary#Developer) and community members are constantly working on more and better ways to combat these annoying **spammers** as they clog the internet with their garbage. You can help by offering your talents, ideas, suggestions, or just by being vigilant and installing any of the [currently-available spam combating tools](https://codex.wordpress.org/Combating_Comment_Spam).

* External links: [SPAM at Wikipedia](http://en.wikipedia.org/wiki/SPAM)

## [SSH](https://wordpress.org/documentation/article/wordpress-glossary/#ssh)

**SSH** stands for Secure Shell. It is a communication protocol for connecting to remote computers over TCP/IP. Various authentication methods can be used which make SSH more secure than [Telnet](https://codex.wordpress.org/Glossary#Telnet).

## [SSL](https://wordpress.org/documentation/article/wordpress-glossary/#ssl)

**SSL** stands for Secure Sockets Layer and is the predecessor to Transport Layer Security. These are cryptographic protocols for secure communications across an unsecured network like the Internet.

* External links: [SSL at Wikipedia](http://en.wikipedia.org/wiki/Secure_Sockets_Layer)

## [Static block](https://wordpress.org/documentation/article/wordpress-glossary/#static-block)

A type of block where the content of which is known at the time of saving a post. A static block will be saved with HTML markup directly in post content.

## [Stats](https://wordpress.org/documentation/article/wordpress-glossary/#stats)

**Stats** are a record showing how many views and visitors a WordPress blog or website gets during a set period of time. Stats also show where in the world your viewers are.

## [String](https://wordpress.org/documentation/article/wordpress-glossary/#string)

In computer science a string is any finite sequence of characters (i.e., letters, numerals, symbols and punctuation marks). Typically, programmers must enclose strings in quotation marks for the data to be recognized as a string and not a number or variable name.

* External links: [String at Wikipedia](http://en.wikipedia.org/wiki/String_(computer_science))

## [Structure tags](https://wordpress.org/documentation/article/wordpress-glossary/#structure-tags)

These tags are used to customize WordPress permalinks. Structure tags are: %year%, %day%, %hour%, %minute%, %second%, %post\_id%, %postname%, %category% and %author%. End permalink structure with either %post\_id% or %postname%, so that each permalink points to an individual post.

* Related articles: [Permalinks](https://codex.wordpress.org/Permalinks)

## [Subversion](https://wordpress.org/documentation/article/wordpress-glossary/#subversion)

[Subversion](http://subversion.tigris.org/) is an [open-source](https://codex.wordpress.org/Glossary#Open_Source) [version control](http://en.wikipedia.org/wiki/Revision_control) software tool used by the [WordPress Developers](https://codex.wordpress.org/Copyright_Holders) to maintain and track the changes and updates to the various WordPress versions.

* Related articles: [Using Subversion](https://codex.wordpress.org/Using_Subversion)
* External links: [Subversion access at wordpress.org](https://wordpress.org/download/svn/), [Subversion book at red-bean.com](http://svnbook.red-bean.com/)

## [SVC](https://wordpress.org/documentation/article/wordpress-glossary/#svc)

**SVC** stands for Switched Virtual Circuit. An SVC is a virtual circuit that is temporary turned on during a session of data transfer.

* External links: [Virtual circuit at Wikipedia](http://en.wikipedia.org/wiki/Virtual_circuit)

## [Syndication](https://wordpress.org/documentation/article/wordpress-glossary/#syndication)

See RSS: [Really Simple Syndication](https://codex.wordpress.org/Glossary#RSS)

[Back to the Top](https://codex.wordpress.org/Glossary#top)

## [Tag](https://wordpress.org/documentation/article/wordpress-glossary/#tag)

A Tag is a keyword which describes all or part of a Post. Think of it like a [Category](https://codex.wordpress.org/Glossary#Category), but smaller in scope. A Post may have several tags, many of which relate to it only peripherally. Like Categories, Tags are usually linked to a page which shows all Posts having the same Tag. Tags can be created on-the-fly by simply typing them into the [Tag field](https://codex.wordpress.org/Writing_Posts#Post_Tags). By default, tags can be assigned only to the *Post* and custom [post types](https://codex.wordpress.org/Post_types).

Tags can also be displayed in [clouds](http://en.wikipedia.org/wiki/Tag_Cloud) which show large numbers of Tags in various sizes, colors, etc. This allows for a sort of total perspective on the blog, allowing people to see the sort of things your blog is about most.

Many people confuse Tags and Categories, but the difference is easy: Categories generally don’t change often, while your Tags usually change with every Post and are closer to the topic of the Post.

## [Tagline](https://wordpress.org/documentation/article/wordpress-glossary/#tagline)

A tagline is a catchy phrase that describes the character or the attributes of the blog in a brief, concise manner. Think of it as the slogan, or catchline for a weblog.

## [Task Based Documentation](https://wordpress.org/documentation/article/wordpress-glossary/#task-based-documentation)

Task based, or task oriented documentation is writing that takes you through a process/task step-by-step; it is succinct, lacks jargon, is easily understood, and structured entirely around performing specific tasks. In order to get to Z, you need to:

1. Step x
2. Step y
3. Step z

Keep in mind that people who need to know how to perform a task usually need answers quick!

## [Taxonomy](https://wordpress.org/documentation/article/wordpress-glossary/#taxonomy)

A **taxonomy** allows for the classification of things. In WordPress, there are two built-in taxonomies, categories and tags. These taxonomies help further classify posts and custom post types. Also, custom taxonomies can be defined.

* See also: [Category](https://codex.wordpress.org/Glossary#Category), [Tag](https://codex.wordpress.org/Glossary#Tag)
* External links: [Taxonomy at Wikipedia](http://en.wikipedia.org/wiki/Taxonomy), [register\_taxonomy()](https://codex.wordpress.org/Function_Reference/register_taxonomy)

## [Telnet](https://wordpress.org/documentation/article/wordpress-glossary/#telnet)

Telnet is a [communications protocol](http://en.wikipedia.org/wiki/Internet_protocol_suite) used to establish a connection to another computer. *Telnet* runs on top of [TCP](http://en.wikipedia.org/wiki/Transmission_Control_Protocol)/[IP](http://en.wikipedia.org/wiki/Internet_Protocol) and is typically used in conjuction with terminal emulation software to login to remote computers. Telnet is inherently insecure and has largely been replaced by [SSH](https://codex.wordpress.org/Glossary#SSH)

* External links: [Telnet at Wikipedia](http://en.wikipedia.org/wiki/Telnet)

## [Template](https://wordpress.org/documentation/article/wordpress-glossary/#template)

In WordPress a **template** is a file that defines an area of the web pages generated by a [theme](https://codex.wordpress.org/Glossary#Theme). For example, there is typically a template for the header area at the top of the web pages, a template for the [content](https://codex.wordpress.org/Glossary#Content), a template for the [sidebars](https://codex.wordpress.org/Glossary#Sidebar), and so on. The templates are like building blocks that make up the complete web page.

* Related articles: [Templates](https://codex.wordpress.org/Templates), [Stepping Into Templates](https://codex.wordpress.org/Stepping_Into_Templates), [Template Hierarchy](https://codex.wordpress.org/Template_Hierarchy)

## [Template Editing Mode](https://wordpress.org/documentation/article/wordpress-glossary/#template-editing-mode)

A scaled down direct editing experience allowing you to edit/change/create the template a post/page uses.

## [Template Tag](https://wordpress.org/documentation/article/wordpress-glossary/#template-tag)

In a WordPress Theme, [template tags](https://codex.wordpress.org/Template_Tags) are used in template files to generate specific programming instructions. They are used to display generated content and information on a WordPress site. Template tags are short programming words, also known as functions, that tap into the WordPress core for instructions. For example, the HTML title tag of a WordPress site may hold the [bloginfo()](https://codex.wordpress.org/Function_Reference/bloginfo) template tag that requests the site title, site tagline, and other site information set by the template tag parameters. Using this in the title HTML tag allows the Theme to be used on multiple sites and the information displayed will change easily with each site.

Other template tags are more sophisticated, generating post content, queries, and site data.

* Related articles: [Stepping Into Template Tags](https://codex.wordpress.org/Stepping_Into_Template_Tags), [Anatomy of a Template Tag](https://codex.wordpress.org/Anatomy_of_a_Template_Tag), [How to Pass Tag Parameters](https://codex.wordpress.org/How_to_Pass_Tag_Parameters), [Include Tags](https://codex.wordpress.org/Include_Tags), [Conditional Tags](https://codex.wordpress.org/Conditional_Tags), [Function Reference](https://codex.wordpress.org/Function_Reference), [Templates](https://codex.wordpress.org/Templates)

## [Term](https://wordpress.org/documentation/article/wordpress-glossary/#term)

In WordPress, a **term** is a classification, group or subset of a [Taxonomy](https://codex.wordpress.org/Glossary#Taxonomy), where the latter can be a [Category](https://codex.wordpress.org/Glossary#Category), [Tag](https://codex.wordpress.org/Glossary#Tag) or Custom Taxonomy. By default, terms have a title, a slug and a description. Hierarchical taxonomies like categories can define a parent term.

* Related articles: [Taxonomies](https://codex.wordpress.org/Taxonomies), [the\_terms()](https://codex.wordpress.org/Function_Reference/the_terms)

## [Text editor](https://wordpress.org/documentation/article/wordpress-glossary/#text-editor)

A **text editor** is a program which edits files in *plain text* format, as compared to *binary* format. Using a non-text based word processing program (e.g. using Microsoft Word to edit [PHP](https://codex.wordpress.org/Glossary#PHP) scripts) can cause major problems in your code. This is because non-text based word processing programs insert extra formatting into text files, and can corrupt the files when they need to be interpreted by the interpreter. An editor like Notepad does not insert any extra formatting.

**Edit WordPress Files with a text only editor.**

Some examples of file formats which need to be edited as plain text:

* [HTML](https://codex.wordpress.org/Glossary#HTML) documents
* [PHP](https://codex.wordpress.org/Glossary#PHP) scripts
* [Perl](https://codex.wordpress.org/Glossary#Perl) scripts
* Rich Text Format documents
* [JavaScript](https://codex.wordpress.org/Glossary#JavaScript) scripts

For our recommended Text Editors, please see [Editing Files](https://wordpress.org/documentation/article/editing-files/#text-editors).

Some examples of non-plain text formats that require special software for editing:

* Microsoft Word documents
* Microsoft Excel spreadsheets
* Images, such as JPEG, PNG, or GIF

Some examples of software which can edit text, but which are **NOT** regarded as basic text editors and **NOT recommended** for use on WordPress files:

* Microsoft Word
* Microsoft Excel
* Adobe Photoshop
* Adobe Illustrator
* Adobe Dreamweaver

## [Theme](https://wordpress.org/documentation/article/wordpress-glossary/#theme)

A Theme is a collection of files that work together to produce a graphical front-end interface with an underlying unifying design for a site. A WordPress Theme modifies the way the site is displayed and designed, without modifying the underlying core programming of WordPress. While some associate a WordPress Theme with “skinning” your site with a design, a WordPress Theme contains programming code that influences the design, changing it with each generated page view based upon the programming with PHP, WordPress template tags, WordPress conditional tags, and CSS.

* Related articles: [Theme Development](https://codex.wordpress.org/Theme_Development), [Using Themes](https://codex.wordpress.org/Using_Themes)

## [Theme Blocks](https://wordpress.org/documentation/article/wordpress-glossary/#theme-blocks)

Blocks that accomplish everything possible in traditional templates using template tags (ex: Post Author Block). A full list can be found [here](https://github.com/WordPress/gutenberg/issues/22724).

## [TinyMCE](https://wordpress.org/documentation/article/wordpress-glossary/#tinymce)

[TinyMCE](https://www.tinymce.com/) is a web-based JavaScript WYSIWYG (What You See Is What You Get) editor.

## [Toolbar](https://wordpress.org/documentation/article/wordpress-glossary/#toolbar)

The **Toolbar** is an area of the screen just above that site that lists useful admininstration screen links such as add a new post or edit your profile. The Toolbar was added in [Version 3.1](https://codex.wordpress.org/Version_3.1) as [Admin Bar](https://codex.wordpress.org/Glossary#Admin_Bar) and in [Version 3.3](https://codex.wordpress.org/Version_3.3) it was replaced by the [Toolbar](https://codex.wordpress.org/Glossary#Toolbar). The toolbar can be turned on/off from the [User Profile Screen](https://codex.wordpress.org/Users_Your_Profile_SubPanel).

* Related articles: [Toolbar](https://codex.wordpress.org/Toolbar)
* See also: [Admin Bar](https://codex.wordpress.org/Glossary#Admin_Bar), [Your Profile Screen](https://codex.wordpress.org/Users_Your_Profile_SubPanel)

## [Toolbar (in FSE)](https://wordpress.org/documentation/article/wordpress-glossary/#toolbar-in-fse)

A set of button controls. In the context of a block, usually referring to the toolbar of block controls shown above the selected block.

## [Trackback](https://wordpress.org/documentation/article/wordpress-glossary/#trackback)

Trackback helps you to notify another author that you wrote something related to what he had written on his blog, even if you don’t have an explicit link to his article. This improves the chances of the other author sitting up and noticing that you gave him credit for something, or that you improved upon something he wrote, or something similar. With pingback and trackback, blogs are interconnected. Think of them as the equivalents of acknowledgements and references at the end of an academic paper, or a chapter in a textbook.

* See also: [Pingback](https://wordpress.org/documentation/article/glossary/#pingback)
* Related articles: [Introduction to Blogging: Trackbacks](https://wordpress.org/documentation/article/introduction-to-blogging/#trackbacks)

## [Transient](https://wordpress.org/documentation/article/wordpress-glossary/#transient)

A **Transient** is temporal data identified by a custom name, stored in the [web server](https://codex.wordpress.org/Glossary#Web_server) database or memory for fast access. This temporal nature and use of fast memory caching is their primary distinction from [Options](https://codex.wordpress.org/Glossary#Options).

* Related articles: [Transients API](https://codex.wordpress.org/Transients_API), [Options API](https://codex.wordpress.org/Options_API)

## [Unicode](https://wordpress.org/documentation/article/wordpress-glossary/#unicode)

A widely supported and preferred character encoding system.

For a computer to display letters (or any text characters), it needs to enumerate them – create an index of characters it knows how to display. These indexes are known as character sets. This is invaluable for users hosting [WordPress in a non-English language](https://codex.wordpress.org/Localization).

The most widely used collections of these character sets are the [iso-8859](https://en.wikipedia.org/wiki/ISO/IEC_8859) with [iso-8859-1](http://en.wikipedia.org/wiki/ISO_8859-1) and [iso-8859-15](http://en.wikipedia.org/wiki/ISO_8859-15) (which contains the euro sign) being the most common; they are also known as Latin1 and Latin9. These character sets use 8 bits (a single byte) for each character, allowing for 255 different characters (256, counting null). However, when considering that Latin-based languages aren’t the only ones in the world (think Japanese or Hebrew), 255 characters aren’t nearly enough.

There is a wide index of characters known as [Unicode](http://en.wikipedia.org/wiki/Unicode). Unicode has so many characters that sometimes more than 16 bits (2 bytes!) are required to represent them. Furthermore, the first 127 characters of Unicode are the same as the first 127 of the most widely used character set – iso-8859-1. For this purpose, UTF, the Unicode Translation Format, was created. UTF uses different numbers of bits for characters, and allows for the entire range of Unicode to be used. What you should probably know is:

* UTF-8 is an 8-bit-minimum type of UTF. There are also UTF-16 and UTF-32.
* If your document is in a Latin-based encoding, you probably don’t need to change anything about it for it to be UTF.
* A single UTF document can be in various languages with no need to switch encodings halfway through.
* External links: [Joel Spolsky on Unicode](http://www.joelonsoftware.com/articles/Unicode.html)

## [Unix](https://wordpress.org/documentation/article/wordpress-glossary/#unix)

**Unix**, or **UNIX**, is a computer operating system developed at AT&T’s Bell Laboratories starting back in 1969. Initially designed with the objective of creating an OS written in a high level language rather than assembly, a majority of [web servers](https://codex.wordpress.org/Glossary#Web_server) currently run on different “flavors” of this high-performance OS, or on [Linux](https://codex.wordpress.org/Glossary#Linux), developed as a Unix-like operating system.

* See also: [UNIX Shell Skills](https://codex.wordpress.org/UNIX_Shell_Skills), [Mac OS X](https://codex.wordpress.org/Glossary#Mac_OS_X)

## [Unix Time](https://wordpress.org/documentation/article/wordpress-glossary/#unix-time)

**Unix Time**, or a **timestamp**, is a method of tracking time by determining the approximate number of seconds from a particular event. That event is called an Epoch. Since this time format is only off by a few seconds each century, it is usually considered good enough for most applications.

Unix time is (currently) a ten digit number, and looks like this: 1229362315. WordPress often uses a Unix timestamp internally to track time. The human readable times and dates you see are converted from Unix Time or from a MySQL/MariaDB DATETIME field.

* External Links: [Unix Time at Wikipedia](http://en.wikipedia.org/wiki/Unix_time), [DATETIME](http://dev.mysql.com/doc/refman/en/datetime.htmllMySQL), [MariaDB DATETIME](https://mariadb.com/kb/en/mariadb/datetime/)

## [URL](https://wordpress.org/documentation/article/wordpress-glossary/#url)

An address of a specific Web site or file on the Internet.

```
 http://www.example.com/
 http://www.example.com/reports/index.html
```

## [UTC](https://wordpress.org/documentation/article/wordpress-glossary/#utc)

**UTC** (“Universal Time, Coordinated”) is the basis of international time standards from which time zones around the world are calculated. For most purposes it is the same as the older [GMT](https://codex.wordpress.org/Glossary#GMT) standard.

* External link: [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) (Wikipedia)

## [Web server](https://wordpress.org/documentation/article/wordpress-glossary/#web-server)

A **web server** is a computer containing software for, and connected to infrastructure for, *hosting*, or serving, web sites written in [HTML](https://codex.wordpress.org/Glossary#HTML). The most common web server software on the internet is [Apache](https://codex.wordpress.org/Glossary#Apache), which is frequently used in conjunction with [PHP](https://codex.wordpress.org/Glossary#PHP), [Perl](https://codex.wordpress.org/Glossary#Perl), and other scripting languages.

It is possible to create one’s own web server, hosted on any speed of internet connection, but many people choose to purchase packages from [hosting providers](https://codex.wordpress.org/Glossary#Hosting_provider), who have the capacity and facilities to provide adequate bandwidth, uptime, hardware, and maintenance for frequently-visited web sites.

* Related articles: [Hosting WordPress](https://codex.wordpress.org/Hosting_WordPress)

## [Widget](https://wordpress.org/documentation/article/wordpress-glossary/#widget)

In WordPress a **widget** is a self-contained area of a web page that performs a specific function, or the code that generates such a self-contained area. For example, WordPress has a built-in widget that displays a list of pages in a weblog’s [sidebar](https://codex.wordpress.org/Glossary#Sidebar), and it has another built-in widget that displays a list of recent comments in the [Dashboard](https://codex.wordpress.org/Glossary#Dashboard). Plugins and themes can provide additional widgets.

* Related articles: [WordPress Widgets](https://codex.wordpress.org/WordPress_Widgets), [Widgets API](https://codex.wordpress.org/Widgets_API), [Dashboard Widgets API](https://codex.wordpress.org/Dashboard_Widgets_API)

### [Widget Area](https://wordpress.org/documentation/article/wordpress-glossary/#widget-area)

Furthermore, a “Widget Area” is a pre-defined location, in the code of your WordPress Theme, that allows users to place Widgets into.

## [XFN](https://wordpress.org/documentation/article/wordpress-glossary/#xfn)

[The XHTML Friends Network](http://gmpg.org/xfn). A decentralised project to have inter-blog links that represent relationships between bloggers. XFN links resemble `<a href="http://www.photomatt.net/" rel="friend met">Photo Matt</a>`.

## [XHTML](https://wordpress.org/documentation/article/wordpress-glossary/#xhtml)

**XHTML**, or **Extensible HyperText Markup Language**, is the successor to [HTML](https://codex.wordpress.org/Glossary#HTML) as the [W3C](http://www.w3.org/) standard language with which all web pages are created. It is often used in conjunction with [CSS](https://codex.wordpress.org/Glossary#CSS) and [JavaScript](https://codex.wordpress.org/Glossary#JavaScript).

WordPress strives to conform to the XHTML 1.0 Transitional standard.

* External links: [XHTML 1.0 Specification (Second Edition)](http://www.w3.org/TR/xhtml1/), [XHTML 1.1 Specification](http://www.w3.org/TR/xhtml11/)

## [XML](https://wordpress.org/documentation/article/wordpress-glossary/#xml)

**XML**, or **Extensible Markup Language**, is written in Standard Generalized Markup Language (SGML) and essentially allows you to define your own markup language. XML is extremely useful in describing, sharing, and transmitting data across the Internet. Typically used in conjunction with [HTML](https://codex.wordpress.org/Glossary#HTML), XML defines data and [HTML](https://codex.wordpress.org/Glossary#HTML) displays that data.

* External links: [Extensible Markup Language (XML) Resources at W3C org](http://www.w3.org/XML) [XML 4.0 FAQ](http://www.ucc.ie/xml), [Overview of SGML Resources at W3C org](http://www.w3.org/MarkUp/SGML/)

## [XML-RPC](https://wordpress.org/documentation/article/wordpress-glossary/#xml-rpc)

**XML-RPC** is **Extensible Markup Language-Remote Procedure Call**. A Remote Procedure Call (RPC) allows you to call (or request) another application and expect that application to honor the request (answer the call). So, **XML-RPC** allows a user (or [developer](https://codex.wordpress.org/Glossary#Developer)) to send a request, formatted in [XML](https://codex.wordpress.org/Glossary#XML), to an external application.

* Related articles: [XML-RPC Support](https://codex.wordpress.org/XML-RPC_Support)
* External links: [Dave Winer’s XML-RPC for Newbies](http://davenet.scripting.com/1998/07/14/xmlRpcForNewbies), [XML-RPC Home Page](http://www.xmlrpc.com/), [Apache XML-RPC](http://ws.apache.org/xmlrpc/), [XML-RPC for PHP Homepage](http://phpxmlrpc.sourceforge.net/), [XML-RPC at Wikipedia](http://en.wikipedia.org/wiki/XML-RPC)

## [More Resources](https://wordpress.org/documentation/article/wordpress-glossary/#more-resources)

More glossaries with collection of blogging terms, acronyms and abbreviations.

* [Giant Blogging Terms Glossary](http://www.quickonlinetips.com/archives/2006/06/the-giant-blogging-terms-glossary/)
* [Blogging Terms at Wikipedia](http://en.wikipedia.org/wiki/List_of_blogging_terms)
* [External WordPress glossary with additional terms](https://www.wpglossary.net/)

[Categories](https://codex.wordpress.org/Special:Categories):

* [WordPress Help](https://codex.wordpress.org/Category:WordPress_Help)
* [Troubleshooting](https://codex.wordpress.org/Category:Troubleshooting)
* [Getting Started](https://codex.wordpress.org/Category:Getting_Started)
* [Advanced Topics](https://codex.wordpress.org/Category:Advanced_Topics)
* [UI Link](https://codex.wordpress.org/Category:UI_Link)
