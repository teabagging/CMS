---
title: openapi3.Unmarshal
description: Unmarshals the given resource into an OpenAPI 3 document.



---

Use the `openapi3.Unmarshal` function with [global], [page], or [remote] resources.

[global]: /getting-started/glossary/#global-resource
[page]: /getting-started/glossary/#page-resource
[remote]: /getting-started/glossary/#remote-resource
[OpenAPI]: https://www.openapis.org/

For example, to work with a remote [OpenAPI] definition:

```go-html-template
{{ $url := "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json" }}
{{ $api := "" }}
{{ with resources.GetRemote $url }}
  {{ with .Err }}
    {{ errorf "%s" . }}
  {{ else }}
    {{ $api = . | openapi3.Unmarshal }}
  {{ end }}
{{ else }}
  {{ errorf "Unable to get remote resource %q" $url }}
{{ end }}
```

To inspect the data structure:

```go-html-template
<pre>{{ debug.Dump $api }}</pre>
```

To list the GET and POST operations for each of the API paths:

```go-html-template
{{ range $path, $details := $api.Paths }}
  {{ $path }}
  <dl>
    {{ with $details.Get }}
      <dt>GET</dt>
      <dd>{{ .Summary }}</dd>
    {{ end }}
    {{ with $details.Post }}
      <dt>POST</dt>
      <dd>{{ .Summary }}</dd>
    {{ end }}
  </dl>
{{ end }}
```

Hugo renders this to:


```html
/pets
<dl>
  <dt>GET</dt>
  <dd>List all pets</dd>
  <dt>POST</dt>
  <dd>Create a pet</dd>
</dl>
/pets/{petId}
<dl>
  <dt>GET</dt>
  <dd>Info for a specific pet</dd>
</dl>
```
