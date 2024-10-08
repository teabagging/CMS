---
title: Writing Content
description: Instructions to write content by filling up fields that are meant to contain specific content (e.g. text, numbers, media etc.).



---

# Writing content

In Strapi, writing content consists in filling up fields, which are meant to contain specific content (e.g. text, numbers, media, etc.). These fields were configured for the collection or single type beforehand, through the [Content-type Builder](/user-docs/content-type-builder).



## Filling up fields

To write or edit content:

1. Access the edit view of your collection type or single type.
2. Write your content, following the available field schema. You can refer to the table below for more information and instructions on how to fill up each field type.

| Field name  | Instructions                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text        | Write your content in the textbox.                                                                                                                                                                                                                                                                                                                                        |
| Rich text (Markdown) | Write your textual content in the editor, in Markdown. Some basic formatting options (titles, bold, italics, underline) are available in the top bar of the editor to apply to selected text. A **Preview mode/Markdown mode** button to switch between modes is also available.  💡 The box can be expanded by clicking on **Expand** in the bottom bar. It displays side by side, at the same time, the textbox that you can edit and the preview. |
| Rich text (Blocks) | Write and manage your content in the editor, which automatically renders live all additions/updates. In the Blocks editor, paragraphs behave as blocks of text: hovering on a paragraph will display an icon ![Reorder icon](/img/assets/icons/reorder.svg) on which to click to reorder the content. Options to format or enrich the content are also accessible from the top bar of the editor (basic formatting options, code, links, image etc.).  💡 In the Blocks editor, you can use text formatting keyboard shortcuts (e.g. `ctrl + B` to apply bold formatting on selected content) as well as Markdown shortcuts. List of available Markdown shortcuts in Blocks<ul><li>`#` to `######` to convert to H1 to H6 headings</li><li>`>` to convert to a quote</li><li>`-`, `*` or `+` to convert to a bullet list</li><li>`1.` to convert to a numbered list</li><li>`![` to add an image</li><li><code>```</code> to convert to a code block</li></ul> 💡 You can also click on the **Expand** button <!-- add icon --> in the bottom right corner to expand the Rich text field. |
| Number      | Write your number in the textbox. Up and down arrows, displayed on the right of the box, allow to increase or decrease the current number indicated in the textbox.                                                                                                                                                                                                       |
| Date        | 1. Click the date and/or time box.  2. Type the date and time or choose a date using the calendar and/or a time from the list. The calendar view fully supports keyboard-based navigation.
| Boolean     | Click on **OFF** or **ON**.                                                                                                                                                                                                                                                                                                                                               |
| Relation    | Choose an entry from the drop-down list. See [Managing relational fields](/user-docs/content-manager/managing-relational-fields.md) for more information.                                                                                                                                                                                                          |
| Email       | Write a complete and valid email address.                                                                                                                                                                                                                                                                                                                                 |
| Password    | Write a password.  💡 Click the eye icon, displayed on the right of the box, to show the password.                                                                                                                                                                                                                                                                |
| Enumeration | 1. Click the drop-down list.  2. Choose an entry from the list.                                                                                                                                                                                                                                                                                                       |
| Media       | 1. Click the media area.  2. Choose an asset from the [Media Library](/user-docs/media-library) or from a [folder](/user-docs/media-library/organizing-assets-with-folders.md) if you created some, or click the **Add more assets** button to add a new file to the Media Library.  💡 It is possible to drag and drop the chosen file in the media area.                                                                                                                                   |
| JSON        | Write your content, in JSON format, in the code textbox.                                                                                                                                                                                                                                                                                                                  |
| UID         | Write a unique identifier in the textbox. A "Regenerate" button, displayed on the right of the box, allows automatically generating a UID based on the content type name.                                                                                                                                                                                                |
:::note
Filling out a [custom field](/user-docs/content-type-builder/configuring-fields-content-type.md#custom-fields) depends on the type of content handled by the field. Please refer to the dedicated documentation for each custom field hosted on the [Marketplace](https://market.strapi.io).
:::

### Components

Components are a combination of several fields, which are grouped together in the edit view. Writing their content works exactly like for independent fields, but there are some specificities to components.

There are 2 types of components: non-repeatable and repeatable components.

#### Non-repeatable components



Non-repeatable components are a combination of fields that can be used only once.

By default, the combination of fields is not directly displayed in the edit view:

1. Click on the add button ![Add icon](/img/assets/icons/add_circle.svg) to add the component.
2. Fill in the fields of the component.

To delete the non-repeatable component, click on the delete button ![Delete icon](/img/assets/icons/delete.svg), located in the top right corner of the component area.

#### Repeatable components



Repeatable components are also a combination of fields, but they allow the creation of multiple component entries, all following the same combination of fields.

To add a new entry and display its combination of fields:

1. Click on the add button ![Add icon](/img/assets/icons/add_circle.svg) to add the component.
2. Fill in the fields of the component.
3. (optional) Click on the **Add new entry** button and fill in the fields again.

The repeatable component entries can be reordered or deleted directly in the edit view, using buttons displayed on the right of the entry area.

- Use the drag & drop button ![Drag icon](/img/assets/icons/drag.svg) to reorder entries of your repeatable component.
- Use the delete button ![Delete icon](/img/assets/icons/delete.svg) to delete an entry from your repeatable component.

:::note
Unlike regular fields, the order of the entries of a repeatable component is important. It should correspond exactly to how end users will read/see the content.
:::

### Dynamic zones

Dynamic zones are a combination of components, which themselves are composed of several fields. Writing the content of a dynamic zone requires additional steps in order to access the fields.



1. Click on the ![Add icon](/img/assets/icons/add_circle.svg) **Add a component to [dynamic zone name]** button.
2. Choose a component available for the dynamic zone.
3. Fill in the fields of the component.

Dynamic zones' components can also be reordered or deleted directly in the edit view, using buttons displayed in the top right corner of the component area.

- Use the drag & drop button ![Drag icon](/img/assets/icons/drag.svg) to reorder components in your dynamic zone.
- Use the delete button ![Delete icon](/img/assets/icons/delete.svg) to delete a component from your dynamic zone.


You can also use the keyboard to reorder components: focus the component using Tab, press Space on the drag & drop button ![Drag icon](/img/assets/icons/drag.svg) and use the arrow keys to then re-order, pressing Space again to drop the item.
:::

:::note
Unlike regular fields, the order of the fields and components inside a dynamic field is important. It should correspond exactly to how end users will read/see the content.
:::

