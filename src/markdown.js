const markdown = require('markdown-it')({
  html: true
})
  .use(require('markdown-it-underline'))
  .use(require('markdown-it-multimd-table'))
  .use(require('markdown-it-attrs'))

function parseMarkdown(text) {
  return markdown.render(text);
}

module.exports = {
  parseMarkdown
};
