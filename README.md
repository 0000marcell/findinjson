# findinjson
command line tool to find a element piped in json
```
/tmp

{
  "document": {
    "children": [
      {
        "name": "marcell"
      },
      {
        "name": "cruz"
      }
    ]
  }
}
```
```
cat tmp | findinjson -k "document" | findinjson -k "children"
// [{ name: marcell}, { name: cruz }]
```

