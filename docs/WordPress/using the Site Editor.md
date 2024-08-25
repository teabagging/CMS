# using the Site Editor


## [How to update what your homepage displays](https://wordpress.org/documentation/article/additional-guide-to-using-the-site-editor/#how-to-update-what-your-homepage-displays)

Your homepage can show a list of your latest blog posts or a static page with custom content. Which setting you use depends on the templates that are included in your theme. To view the list of templates, go to the Administration Screen > Appearance > Editor > Templates.

* If your theme does not have a Home or Front page template, select the Add New button and create a new Front Page.
* If your theme has a Front Page template, click on the link with the template name to open the editor.
* If your theme has a Home template, you can edit the template or set what you want to appear in the Administration Screen > Settings > Reading.

To learn how to select a static page for your homepage, please see the support article [Creating a Static Front Page](https://wordpress.org/documentation/article/creating-a-static-front-page/).

## [How to customize your homepage](https://wordpress.org/documentation/article/additional-guide-to-using-the-site-editor/#how-to-customize-your-homepage)

**Latest Blog Posts**

To customize your blog, go to Administration Screen > Appearance > Editor. The editor will open to your homepage, and you can start editing.

Block themes display lists of blog posts with the Query Loop block and the Post Template block.
The [support article for the Query Loop Block](https://wordpress.org/documentation/article/query-loop-block/) explains how to configure the block.

When you add a block inside the post template block, it is repeated for every post in the list. The Post Title and Post Featured Image, Post Author, Post Date, Post Category, and Post tags are examples of blocks that you can use to customize your blog.

**Static page**

If you have selected a static page for your home page, and you want it to have a different design than other pages, you need to assign it a different template.

Follow these steps to assign an existing template:

1. From your wp-admin dashboard, head to Pages > All Pages.
2. From the list of pages, select the option to edit page you have set as your home page.
3. Once in the editor, open the settings sidebar.
4. Under “Template”, you can then select whatever Template you want your home page to use.
5. When you’re done, select “Update” to save the changes.

Follow these steps to create a new template:

1. From your wp-admin dashboard, head to Pages > All Pages.
2. From the list of pages, select the option to edit page you have set as your home page.
3. Once in the editor, open the settings sidebar.
4. Under “Template”, select New.
5. This will open the Site Editor to add blocks for create your template for your static homepage.
6. When you’re done, select “Update” to save the changes.

Please note that if you add a Front Page template in the Site Editor, it will always be used as the front page regardless of what setting you choose under Admin > Settings > Reading. You will need to either customize that template to your liking or remove it to then adjust the homepage settings again.

## [How to update your site icon](https://wordpress.org/documentation/article/additional-guide-to-using-the-site-editor/#how-to-update-your-site-icon)

Block themes include the ability to use the Site Logo block which has built within it an option to set your Site Logo as your Site Icon. For context, the Site Logo simply displays whatever logo you set for your site whereas your Site Icon is also known as a favicon and it is used to help identify your website. To learn more about setting your Site Icon or favicon, please see the support article [Creating a Favicon](https://wordpress.org/documentation/article/creating-a-favicon/).

Follow the steps below to use the same image for the Site Logo and Site Icon:

1. Head to Appearance > Editor. This will open up your homepage.
2. Either find your Site Logo block added by your theme or add it to yourself wherever you’d like. Detailed instructions for adding blocks [can be found here](https://wordpress.org/documentation/article/adding-a-new-block/).
3. From there, you’ll see the option to upload or select an image to use from your Media Library.
4. After choosing an image and while still selecting the Site Logo block, open the block settings sidebar (uses the cog icon).
5. Under the settings for the Site Logo block, toggle on the option to “Use as site icon”.
6. Save your changes.

![Image showing the options to set a site logo as a site icon in the settings sidebar. ](https://wordpress.org/documentation/files/2022/01/site_icon-1024x914.png)

## [How to customize your site design at a global level](https://wordpress.org/documentation/article/additional-guide-to-using-the-site-editor/#how-to-customize-your-site-design-at-a-global-level)

Since WordPress 5.9, you can set the colors, typography, layout, spacing, and more, for the entire site via Styles. You can also edit the default appearance of blocks to streamline the look and feel of your site.

Fore more details, refer [Styles Overview](https://wordpress.org/documentation/article/styles-overview/).
