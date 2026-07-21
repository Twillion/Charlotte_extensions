# Charlotte Engine Extensions

A small GitHub Pages-ready catalog for extensions and fork-specific engine modules built around the Charlotte Engine GDevelop fork.

The page follows the structure of GDevelop's extension sharing flow:

- discover extensions and their install status
- install exported JSON files or fork packages
- submit new extension entries through pull requests

## Local preview

Open `index.html` in a browser. No build step is required.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In repository settings, open **Pages**.
3. Set the source to the default branch and `/root`.
4. Save and wait for the Pages URL to become available.

## Update extension listings

Edit the `extensions` array in `script.js`. Each listing supports:

- `name`
- `category`
- `status`
- `icon`
- `summary`
- `install`
- `tags`

## Reference

This site uses GDevelop's public extension page and the GDevelop extensions repository as product-structure references, while keeping the copy and page implementation original.
