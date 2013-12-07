JAVASCRIPT SUMMONS 
==================

## Information

<table>
<tr> 
<td>Language</td><td>Javascript</td>
</tr>
<tr>
<td>Test Suite</td>
<td>Mocha</td>
</tr>
<tr>
<td>Exercises</td>
<td>3</td>
</tr>
</table>

This project is in its early stages and will continue to grow with new tests to summon. If something is not working or you would like a new feature, please use the issues page.

Do you have what it takes to summon Javascript? Let's find out!

## Installation

To summon, you must first have <a href="https://github.com/isaacs/npm">npm</a> installed.

Once you have `npm`, install `mocha` globally by running the following command:

```
  npm install -g mocha
``` 

Then fork and clone (or download) Javascript Summons into your local directory:

```
  git clone http://www.github.com/farhadg/javascript-summons
```

## Usage

All of the exercises are located in the `src` directory. They contain directions for the challenge; for more infomation regarding the tests, you can locate them in the `spec` directory.

Navigate to the `src` directory and fire up an exercise:

```javascript
  /* ############### COMBINE ARRAYS

  Write a function that combines two unsorted arrays into a
  sorted array without any duplicates. Use the comparative
  operators for sorting instead of any sorting functions.

  ################## */

  combineArr = function(arr1, arr2) {
    // code your magic here
  };
```
Solve the exercise and summon the test by running the following command in your terminal:

```
  $ mocha filenameSpec.js
```

Be sure to run this command in the `spec` directory.

## Options

Mocha's browser support may later be added; if you'd like this feature, let me know so that it'll be implemented into future updates.

To summon with Mocha's different reporters, run the following command (e.g. spec):

```
  $ mocha filenameSpec.js -R spec
``` 

You can view a list of Mocha's reporters by running the following command:

```
  $ mocha --reporters
```

## Credits

These summons were inspired by the many wonderful resources (i.e. RubyMonk, CoderByte, Javascript Koans, etc.) who challenge developers everyday to become better coders.