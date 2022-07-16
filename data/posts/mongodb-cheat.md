---
title: MongoDB Cheat Sheet
publishedAt: '2021-11-04'
description: This cheat sheet is filled with some handy commands to get started with CRUD operations with MongoDB.
---

This cheat sheet is filled with some handy commands to get started with CRUD operations with MongoDB.

I have created a [Github Gist](https://gist.github.com/devkiran/031ef1615e53640d9198476a382ee2fd) to keep all these commands.

**1. Insert a single document**

```bash
db.products.insertOne({ name: 'Product 1', price: 200 })
```

**2. Insert multiple documents - Ordered**

```bash
db.products.insertMany([
  { name: 'Product 1', price: 200 },
  { name: 'Product 2', price: 100 }
])
```

**3. Insert multiple documents - Unordered**

```bash
db.products.insertMany(
  [
    { name: 'Product 1', price: 200 },
    { name: 'Product 2', price: 100 }
  ],
  { ordered: false }
)
```

**4. Select all documents in a collection**

```bash
db.products.find()
```

**5. Beautify returned collection**

```bash
db.products.find().pretty()
```

**6. Find all documents that satisfy the specified query criteria**

```bash
db.products.find({ status: 1 })
```

**7. Find first document that satisfies the specified query criteria**

```bash
db.products.findOne({ status: 1 })
```

**8. Find the first document in the collection**

```bash
db.products.findOne({})
```

**9. Returns the number of documents that match a query**

```bash
db.products.count()
```

```bash
db.products.find({ price: { $gt: 100 } }).count()
```

```bash
db.products.countDocuments()
```

**10. Updates a single document based on the filter**

```bash
db.products.updateOne({ name: 'Product 1' }, { $set: { price: 210 } })
```

**11. Updates all documents that match the specified filter**

```bash
db.products.updateMany({ quantity: 0 }, { $set: { status: 0 } })
```

**12. Replace an entire document**

```bash
db.products.updateOne(
  { name: 'Product 1' },
  { name: 'Product 11', price: 300, status: 0 }
)
```

**13. Removes a single document from a collection**

```bash
db.products.deleteOne({ name: 'Product 1' })
```

**14. Removes all documents that match the filter**

```bash
db.products.deleteMany({ price: { $gte: 100 } })
```

**15. Removes all documents in a collection**

```bash
db.products.deleteMany({})
```

**16. Deletes a single document based on the filter and returning the deleted document**

```bash
db.products.findOneAndDelete({ name: 'Product 1' })
```

**17. Sort the documents - Ascending Order**

```bash
db.products.find().sort({ price: 1 })
```

**18. Sort the documents - Descending Order**

```bash
db.products.find().sort({ price: -1 })
```

**19. Limit the numbers of documents returned**

```bash
db.products.find().limit(5)
```

**20. Increments the value of the field by the specified amount**

```bash
db.products.updateOne({ title: 'Product 1' }, { $inc: { quantity: 1 } })
```

**21. Decrement the value of the field by the specified amount**

```bash
db.products.updateOne({ title: 'Product 1' }, { $inc: { quantity: -1 } })
```

**22. Add an item to an array**

```bash
db.products.updateOne({ _id: 1 }, { $push: { sizes: 'small' } })
```

**23. Remove the first item from an array**

```bash
db.products.updateOne({ _id: 1 }, { $pop: { sizes: -1 } })
```

**24. Remove the last item from an array**

```bash
db.products.updateOne({ _id: 1 }, { $pop: { sizes: 1 } })
```

**25. Add multiple items to an array**

```bash
db.products.updateOne(
  { _id: 1 },
  { $push: { sizes: { $each: ['small', 'large', 'medium'] } } }
)
```

**26. Add an item to an array unless the item is already present**

```bash
db.products.updateOne({ _id: 1 }, { $addToSet: { sizes: 'large' } })
```

**27. Sets the value of a field to the current date**

```bash
db.products.updateOne({ _id: 1 }, { $currentDate: { lastModified: true } })
```

**28. Update the field if the specified value is less than the current value of the field**

```bash
db.products.updateOne({ _id: 1 }, { $min: { price: 150 } })
```

**29. Update the field if the specified value is greater than the current value of the field**

```bash
db.products.updateOne({ _id: 1 }, { $max: { price: 250 } })
```

**30. Multiply the value of a field by a number**

```bash
db.products.updateOne({ _id: 1 }, { $mul: { quantity: 2 } })
```

**31. Rename a field**

```bash
db.products.updateOne({ _id: 1 }, { $rename: { quantity: 'qty' } })
```

**32. Deletes a particular field**

```bash
db.products.updateOne({ _id: 1 }, { $unset: { quantity: '' } })
```
