Demonstration repo to show a custom data file format (.csv), working as global data, but not as a local data file. Which I believe to be possible bug? 

Run Live Server with `npm start`

Any help is appreciated, thanks 😊

---

**Update 31/10/2025**

Confirmed working now, thanks to an explanation from Zach:
https://github.com/11ty/eleventy/issues/3888#issuecomment-3470475582

The trick was to add scoping for the files, by adding this change to the data extension: 
```js
  return {
    "myCsvData": records
  };
```

instead of my old version:
```js
return records;
```

And with this change, we can now access the data with `{{ myCsvData }}`. This works for local data files perfectly. And if we still want to have some global data .csv, we can access that with `<filename>.myCsvData`. 

**Also,** be sure the local data file matches the filename for the directory it's in! 
A mistake I made during the demo 😅 

