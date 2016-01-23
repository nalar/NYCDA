autoscale: true
slidenumbers: true

# cURL

---

# GET request

```bash
curl -v example.com
```

---

# POST request

```bash
curl -v --data "param1=value1&param2=value2" example.com/resource.cgi
```

---

# GET request with headers

```bash
curl -v example.com --header "Content-Type:application/json"
```

---

# specify http command with -X

```bash
# the following two are the same:
curl example.com
curl -X GET example.com
```

---

# Exercise
- Choose a site, and make a cURL request to get its contents