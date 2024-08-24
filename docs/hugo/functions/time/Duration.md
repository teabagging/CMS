---
title: time.Duration
description: Returns a time.Duration value using the given time unit and  number.




---

The `time.Duration` function returns a [`time.Duration`] value that you can use with any of the `Duration` [methods].

This template:

```go-html-template
{{ $duration := time.Duration "hour" 24 }}
{{ printf "There are %.0f seconds in one day." $duration.Seconds }}
```

Is rendered to:

```text
There are 86400 seconds in one day.
```

The time unit must be one of the following:


Duration|Valid time units
:--|:--
hours|`hour`, `h`
minutes|`minute`, `m`
seconds|`second`, `s`
milliseconds|`millisecond`, `ms`
microseconds|`microsecond`, `us`, `µs`
nanoseconds|`nanosecond`, `ns`

[`time.Duration`]: https://pkg.go.dev/time#Duration
[methods]: /methods/duration/