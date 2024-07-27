# ToColor

A Node.js package for colorizing console output with support for text colors, background colors, and styles. It also handles errors with stack traces.

## Usage

### `colorize(text, color, bgColor, style)`

Returns a string with color and style applied.

**Parameters:**

- `text` (string): The text to colorize.
- `color` (string): Text color (`red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`).
- `bgColor` (string): Background color (`bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`).
- `style` (string): Text style (`bold`, `underline`, `blink`).

### `logColorized(text, color, bgColor, style)`

Logs colorized text to the console. Handles errors and displays them in gray.

### `rainbowColorize(text)`

Returns a string where each character in the text is colorized with a different color from the rainbow sequence.

**Parameters:**

- `text` (string): The text to colorize.

### `blinkText(text, color, bgColor)`

Returns a string with blinking text effect applied along with the specified color and background color.

**Parameters:**

- `text` (string): The text to colorize and apply the blink effect to.
- `color` (string): Text color (`red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`).
- `bgColor` (string): Background color (`bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`).

### `gradientColorize(text, startColor, endColor)`

Returns a string where each character in the text has a gradient color applied from the start color to the end color.

**Parameters:**

- `text` (string): The text to colorize.
- `startColor` (string): The starting color of the gradient in hex format (e.g., `#ff0000`).
- `endColor` (string): The ending color of the gradient in hex format (e.g., `#0000ff`).

## Example

```javascript
const { colorize, logColorized, rainbowColorize, blinkText, gradientColorize } = require('@destools/tocolor');

// Regular colorized logs
logColorized('This is red text', 'red');
logColorized('This is green text with a yellow background', 'green', 'bgYellow');
logColorized('This is bold and blue text', 'blue', '', 'bold');
logColorized('This is bold, red text with a white background', 'red', 'bgWhite', 'bold');

// Rainbow colorized log
console.log(rainbowColorize('This is rainbow text'));

// Blinking text log with colors
console.log(blinkText('This text blinks in red', 'red'));
console.log(blinkText('This text blinks in green with a yellow background', 'green', 'bgYellow'));

// Gradient colorized log
console.log(gradientColorize('This text has a gradient from red to blue', '#ff0000', '#0000ff'));
```
## Note

Please note that colorization and effects might not work on all terminals. Make sure your terminal supports ANSI escape codes for the best experience.

## License

MIT License.

## GitHub

For more information, please visit the [My Github Profile](https://github.com/daveonHMD).
