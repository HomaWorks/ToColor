const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  reset: '\x1b[0m'
};

const bgColors = {
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m'
};

const styles = {
  bold: '\x1b[1m',
  underline: '\x1b[4m',
  blink: '\x1b[5m',  // Adding blink style
  reset: '\x1b[0m'
};

function colorize(text, color, bgColor, style) {
  if (color && !colors[color]) {
    const error = new Error(`Invalid color: ${color}. Valid options are ${Object.keys(colors).join(', ')}.`);
    Error.captureStackTrace(error, colorize);
    throw error;
  }

  if (bgColor && !bgColors[bgColor]) {
    const error = new Error(`Invalid background color: ${bgColor}. Valid options are ${Object.keys(bgColors).join(', ')}.`);
    Error.captureStackTrace(error, colorize);
    throw error;
  }

  if (style && !styles[style]) {
    const error = new Error(`Invalid style: ${style}. Valid options are ${Object.keys(styles).join(', ')}.`);
    Error.captureStackTrace(error, colorize);
    throw error;
  }

  const colorCode = colors[color] || '';
  const bgColorCode = bgColors[bgColor] || '';
  const styleCode = styles[style] || '';
  const resetCode = colors.reset;

  return `${styleCode}${colorCode}${bgColorCode}${text}${resetCode}`;
}

function rainbowColorize(text) {
  const rainbowColors = [
    'red', 'yellow', 'green', 'cyan', 'blue', 'magenta'
  ];

  return text.split('').map((char, index) => {
    const color = rainbowColors[index % rainbowColors.length];
    return colorize(char, color);
  }).join('');
}

function logColorized(text, color, bgColor, style) {
  try {
    console.log(colorize(text, color, bgColor, style));
  } catch (error) {
    const grayColorCode = '\x1b[90m';
    const resetCode = '\x1b[0m';
    console.error(`${grayColorCode}Error: ${error.message}\nStack Trace: ${error.stack}${resetCode}`);
  }
}

function blinkText(text, color, bgColor) {
  const blinkCode = styles.blink;
  const colorCode = colors[color] || '';
  const bgColorCode = bgColors[bgColor] || '';
  const resetCode = styles.reset;
  
  return `${blinkCode}${colorCode}${bgColorCode}${text}${resetCode}`;
}

function gradientColorize(text, startColor, endColor) {
  function interpolateColor(startColor, endColor, factor) {
    const [r1, g1, b1] = hexToRgb(startColor);
    const [r2, g2, b2] = hexToRgb(endColor);
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    return `\x1b[38;2;${r};${g};${b}m`;
  }

  function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return [r, g, b];
  }

  const numColors = text.length;
  let result = '';

  for (let i = 0; i < numColors; i++) {
    const factor = i / numColors;
    result += interpolateColor(startColor, endColor, factor) + text[i];
  }

  return result + '\x1b[0m';
}

module.exports = {
  colorize,
  blinkText,
  logColorized,
  rainbowColorize,
  gradientColorize  // Exporting gradientColorize
};
