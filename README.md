# better-number-input

Use it in your html:
```js
<script src="https://cdn.jsdelivr.net/gh/chill31/better-number-input/better-number-input.js"></script>
```
at the end of the body tag **BUT** before all scripts, so it selects all number inputs and implements strict number only behaviour.<br>
Read the [documentation](https://better-number-input.vercel.app) for better code examples and detail.
<br>
<br>

## Brief
this file does simple things. First, it removes the annoying "up" and "down" arrows in the number inputs. This is done by just converting the `type="number"` attribute to `type="text"`.

> This is not a problem. For accessibility, the input will still be rendered as a "number" input for those using assistive technologies.
<br>
<br>

## Options
There are a few options you can customize to change the behaviour of the "number" input.<br>
The default are as follows:
```js
{
  allowNegative: true,
  allowDecimal: true,
  allowScientificNotation: false,
  valueAsNumber: 0,
  resetValues: true
}
```
These options are set through javascript through `<input>.betterInputOptions`.<br>
To customize these, you can do:
```js
const myInput = document.querySelector('.my-number-input');

myInput.betterInputOptions = {
  allowNegative: false,
  allowDecimal: false,
  allowScientificNotation: true,
  valueAsNumber: 1, // won't actually change the input value.
  resetValues: false
}
```
<br>
<br>

## Detailed Options
<br>
<br>

### `allowNegative`
this option is a boolean type. (`true, false`) <br>
This allows you to set whether negatives will be allowed or not. (kind of obvious)
<br>
<br>

### `allowDecimal`
this option is a boolean type (`true, false`) <br>
This allows you to set whether a decimal point (.) will be allowed to enter or not.
<br>
<br>

### `allowScientificNotation`
this option is a boolean type (`true, false`) <br>
This allows you to set whether scientific notation will be allowed or not.<br>
For those of you who don't know, this is how scientific notation is used:

```js
console.log(3e4); // valid Javascript syntax (scientific notation)

// OUTPUT: 30000
```
<br>
<br>

### `valueAsNumber`
this value is supposed to be read-only. It is a type of `number`. As you read in [the beginning](#brief), the number input is changed to "text" input for certain features and removing the "up down" arrows.<br>
In the number inputs, there was a parameter of `valueAsNumber` to give the value of the input as number type, but this won't be possible with text inputs.
<br>
To get the value as number in the "better" number inputs, use

```js
const myInput = document.querySelector('.my-number-input');
console.log(myInput.betterInputOptions.valueAsNumber);
```
<br>
<br>

### `resetValues`
Input values are saved after refreshes for some time, so this option allows you to reset the value of the inputs each time the browser tab refreshes.<br>
This option is a boolean type (`true, false`)
<br>

<br>

## Disabling Features.
For all the number inputs which you don't need this feature for, you can do the following:

```html
<input type="number" disable-better-number-input>
```
the inputs with `disable-better-number-input` attribute are not selected in the input list, so they will not be enhanced as the other number inputs will be in your project.
