# Steps to reproduction

1. Clone this repo
1. Run `npm ci`
1. Run `npm run watch`
1. Check `dist` folder after first build.  It should contain font files. 
1. Make any changes in `styles.css` to trigger rebuild. Check `dist` folder agine.

## Expected
Font files are still in the Dist

## Current behavior:
Font files have been deleted and not added again
