<p align="center">
  <a href="https://github.com/trs/bomb-defusal-manual-generator">
    <img alt="ktane" src="./img/logo.png"  />
  </a>
</p>

<h3 align="center">
  Generate Bomb Defusal Manual PDF pages
</h3>

# Synopsis

Using markdown, custom bomb defusal manual pages can be generated. These pages are designed to mimic the existing manual pages.

# Install

```bash
$ npm install defusal --global
```

# Usage

```bash
$ defusal my_mod.md --name "My Cool Mod"
```

## Options

`-n --name {name}` The name of your mod, this will be the page header. 
Defaults to `Mod`

`-v --version {version}` The version to use in the header.  
Defaults to `Mod`

`-o --output {path}` The path of the final PDF page output.  
Defaults to `./page.pdf`

# Pages

Pages are built using markdown, check out [pages](./test/pages) for some examples.  
Parsing is done using [markdown-it](https://github.com/markdown-it/markdown-it) with the plugins [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs), [markdown-it-multimd-table](https://github.com/RedBug312/markdown-it-multimd-table), and [markdown-it-underline](https://github.com/arve0/markdown-it-underline).
