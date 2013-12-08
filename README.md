JAVASCRIPT SUMMONS 
==================

Javascript Summons is a collection of exercises aimed at empowering developers.

This project is in its early stages and will continue to grow with new tests to summon. If something is not working or you would like a new feature, please use the issues page.

Do you have what it takes to summon Javascript? Let's find out!

## Information

<table>
<tr>
<td>Language</td>
<td>Javascript</td>
</tr>

<tr>
<td>Test Suite</td>
<td>Mocha</td>
</tr>

<tr>
<td>Exercises</td>
<td>8</td>
</tr>
</table>

## Installation

To summon, you must first have <a href="https://github.com/isaacs/npm">npm</a> installed.

Once you have `npm`, install `mocha` globally by running the following command:

```
  $ npm install -g mocha
``` 

Then fork and clone (or download) Javascript Summons into your local directory:

```
  $ git clone http://www.github.com/farhadg/javascript-summons
```

## Usage

All of the exercises are located in the `src` directory. They contain the necessary directions for the challenges; for more infomation regarding the tests, you can locate them in the `spec` directory.

Navigate to the `src` directory and fire up an exercise:

```javascript
  /* ############### FACTORS

  Write a function that returns an array 
  containing all of the factors of a number.

  For example: factors(10) === [1, 2, 5, 10]

  ################## */

  factors = function(num) {
    // code your magic here
  };
```
Solve the exercise and summon the test by running the following command:

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

These summons were inspired by the many wonderful resources (i.e. RubyMonk, CoderByte, JS Koans, etc.) that challenge developers everyday to become better.