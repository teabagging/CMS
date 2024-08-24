---
title: Page collections
description: A quick reference guide to Hugo's page collections.

    


---

## Page

Use these `Page` methods when rendering lists on [section] pages, [taxonomy] pages, [term] pages, and the home page.

[section]: /getting-started/glossary/#section
[taxonomy]: /getting-started/glossary/#taxonomy
[term]: /getting-started/glossary/#term



## Site

Use these `Site` methods when rendering lists on any page.


## Filter

Use the [`where`] function to filter page collections.

[`where`]: /functions/collections/where/

## Sort

By default, Hugo sorts page collections by:

1. [Weight]
2. [Date] in descending order
3. [LinkTitle] falling back to [Title]
4. [Filename] if the page is backed by a file

[Date]: /methods/page/date/
[Weight]: /methods/page/weight/
[LinkTitle]: /methods/page/linktitle/
[Title]: /methods/page/title/
[Filename]: /methods/page/file/#filename

Use these methods to sort page collections.



## Group

Use these methods to group page collections.

