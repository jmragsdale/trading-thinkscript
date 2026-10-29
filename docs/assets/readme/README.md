# README artwork

The library README follows the visual style of [Jermaine Ragsdale’s profile](https://github.com/jmragsdale): navy, teal, neutral surfaces and DIN Alternate display typography. The header has a mobile variant; category cards have light and dark variants and wrap on smaller screens. Each card links to a README section. Alt text and ordinary Markdown links preserve access to the same destinations.

PNG exports preserve typography across devices. Editable SVG sources are included alongside them. The current exports use the macOS DIN Alternate system font; no font files are redistributed. Arial Narrow or Arial are used where that font is unavailable. No external image or font service is needed to view the README.

To regenerate, install Sharp in a temporary build environment (`npm install --no-save sharp`) and run `node tools/build-readme-art.cjs` from the repository root. Header totals and category counts are read from `inventory.json` and `performance.json`. Review the exports and update the README text and alt text when those counts change. The optional artwork build is separate from the Python library and performance verifiers.

Artwork lives under `docs/` so `python3 tools/package_library.py` includes it in future ZIP builds. Historical published release assets retain the documentation from their own release.
