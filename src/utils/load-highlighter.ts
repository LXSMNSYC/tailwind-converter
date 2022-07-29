import * as shiki from 'shiki';
import { getHighlighter } from 'shiki';

shiki.setCDN('https://unpkg.com/shiki/');

let HIGHLIGHTER: shiki.Highlighter;

export default async function loadHighlighter() {
  if (!HIGHLIGHTER) {
    HIGHLIGHTER = await getHighlighter({
      theme: 'dark-plus',
      langs: ['css', 'json'],
    });
  }
  return HIGHLIGHTER;
}
