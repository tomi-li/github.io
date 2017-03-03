/**
 * All Codes below are Lifetime Warranted by Tomi since 02/03/2017.
 */

import { markdown } from 'markdown';

export default vue => {
  vue.filter('markdown', (text) => {
    if (!text) return;
    return markdown.toHTML(text);
  })
}
