---
title: hugo.IsMultilingual
description: Reports whether there are two or more configured languages.



  

---



Site configuration:

```{{< code-toggle file=hugo >}}
defaultContentLanguage = 'de'
defaultContentLanguageInSubdir = true
[languages]
  [languages.de]
    languageCode = 'de-DE'
    languageName = 'Deutsch'
    title = 'Projekt Dokumentation'
    weight = 1
  [languages.en]
    languageCode = 'en-US'
    languageName = 'English'
    title = 'Project Documentation'
    weight = 2
```

Template:

```go-html-template
{{ hugo.IsMultilingual }} → true
```