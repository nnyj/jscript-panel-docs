'use strict';
// Convert JSP3 HTML docs to clean markdown
// No npm deps - regex/string ops only

const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, 'html');
const MD_DIR = path.join(__dirname, 'md');

// Map of html relative path -> md filename
const PAGE_MAP = [
  ['index.html', 'home.md'],
  ['docs/index.html', 'docs_index.md'],
  // namespaces
  ['docs/namespaces/window/index.html', 'window.md'],
  ['docs/namespaces/fb/index.html', 'fb.md'],
  ['docs/namespaces/plman/index.html', 'plman.md'],
  ['docs/namespaces/utils/index.html', 'utils.md'],
  ['docs/namespaces/console/index.html', 'console.md'],
  // interfaces
  ['docs/interfaces/IJSGraphics/index.html', 'graphics.md'],
  ['docs/interfaces/IJSBitmap/index.html', 'ijsbitmap.md'],
  ['docs/interfaces/IJSImage/index.html', 'ijsimage.md'],
  ['docs/interfaces/IMenuObj/index.html', 'imenuobj.md'],
  ['docs/interfaces/IMetadbHandle/index.html', 'imetadbhandle.md'],
  ['docs/interfaces/IMetadbHandleList/index.html', 'imetadbhandlelist.md'],
  ['docs/interfaces/ITooltip/index.html', 'itooltip.md'],
  ['docs/interfaces/ITextLayout/index.html', 'itextlayout.md'],
  ['docs/interfaces/IThemeManager/index.html', 'ithememanager.md'],
  ['docs/interfaces/ITitleFormat/index.html', 'ititlformat.md'],
  ['docs/interfaces/IContextMenuManager/index.html', 'icontextmenumanager.md'],
  ['docs/interfaces/IDropAction/index.html', 'idropaction.md'],
  ['docs/interfaces/IFileInfo/index.html', 'ifileinfo.md'],
  ['docs/interfaces/IMainMenuManager/index.html', 'imainmenumanager.md'],
  ['docs/interfaces/IPlayingItemLocation/index.html', 'iplayingitemlocation.md'],
  ['docs/interfaces/IProfiler/index.html', 'iprofiler.md'],
  ['docs/interfaces/ISelectionHolder/index.html', 'iselectionholder.md'],
  ['docs/interfaces/IAudioChunk/index.html', 'iaudiochunk.md'],
  // callbacks
  ['docs/callbacks/index.html', 'callbacks.md'],
  ['docs/callbacks/component/index.html', 'callbacks_component.md'],
  ['docs/callbacks/foobar2000/index.html', 'callbacks_foobar2000.md'],
  ['docs/callbacks/windows/index.html', 'callbacks_windows.md'],
  // changelogs
  ['docs/changes/index.html', 'changelog.md'],
  ['docs/changes/3-0-0/index.html', 'changelog_3-0-0.md'],
  ['docs/changes/3-0-x/index.html', 'changelog_3-0-x.md'],
  ['docs/changes/3-1-0/index.html', 'changelog_3-1-0.md'],
  ['docs/changes/3-1-x/index.html', 'changelog_3-1-x.md'],
  ['docs/changes/3-2-0/index.html', 'changelog_3-2-0.md'],
  ['docs/changes/3-2-x/index.html', 'changelog_3-2-x.md'],
  ['docs/changes/3-3-0/index.html', 'changelog_3-3-0.md'],
  ['docs/changes/3-3-x/index.html', 'changelog_3-3-x.md'],
  ['docs/changes/3-4-x/index.html', 'changelog_3-4-x.md'],
  ['docs/changes/3-5-x/index.html', 'changelog_3-5-x.md'],
  ['docs/changes/3-6-x/index.html', 'changelog_3-6-x.md'],
  ['docs/changes/3-7-x/index.html', 'changelog_3-7-x.md'],
  ['docs/changes/upgrading/index.html', 'changelog_upgrading.md'],
  // docs pages
  ['docs/configuration-window/index.html', 'configuration_window.md'],
  ['docs/flags/index.html', 'flags.md'],
  ['docs/fonts/index.html', 'fonts_old.md'],
  ['docs/preprocessors/index.html', 'preprocessors.md'],
  ['docs/styling-ranges-text/index.html', 'styling_ranges_old.md'],
  ['docs/tips/index.html', 'tips.md'],
  ['docs/upgrading/index.html', 'upgrading.md'],
  // guides
  ['docs/guides/country-flags/index.html', 'guide_country_flags.md'],
  ['docs/guides/font-rgb/index.html', 'guide_font_rgb.md'],
  ['docs/guides/fonts/index.html', 'guide_fonts.md'],
  ['docs/guides/gradients/index.html', 'guide_gradients.md'],
  ['docs/guides/playback-statistics/index.html', 'guide_playback_statistics.md'],
  ['docs/guides/styling-ranges-text/index.html', 'guide_styling_ranges.md'],
  ['docs/guides/web-requests/index.html', 'guide_web_requests.md'],
  // gallery (samples)
  ['gallery/index.html', 'samples.md'],
  ['gallery/album-art/index.html', 'sample_album_art.md'],
  ['gallery/allmusic/index.html', 'sample_allmusic.md'],
  ['gallery/images/index.html', 'sample_images.md'],
  ['gallery/jsplaylist/index.html', 'sample_jsplaylist.md'],
  ['gallery/lastfm-bio/index.html', 'sample_lastfm_bio.md'],
  ['gallery/lastfm-info/index.html', 'sample_lastfm_info.md'],
  ['gallery/musicbrainz/index.html', 'sample_musicbrainz.md'],
  ['gallery/play-log/index.html', 'sample_play_log.md'],
  ['gallery/properties-other-info/index.html', 'sample_properties_other_info.md'],
  ['gallery/seekbar-button/index.html', 'sample_seekbar_button.md'],
  ['gallery/smooth-browser/index.html', 'sample_smooth_browser.md'],
  ['gallery/smooth-playlist/index.html', 'sample_smooth_playlist.md'],
  ['gallery/smooth-playlist-manager/index.html', 'sample_smooth_playlist_manager.md'],
  ['gallery/spectrogram-seekbar/index.html', 'sample_spectrogram_seekbar.md'],
  ['gallery/text-display/index.html', 'sample_text_display.md'],
  ['gallery/text-reader/index.html', 'sample_text_reader.md'],
  ['gallery/thumbs/index.html', 'sample_thumbs.md'],
  ['gallery/track-info-seekbar-buttons/index.html', 'sample_track_info_seekbar.md'],
  ['gallery/track-info-seekbar-buttons-volume/index.html', 'sample_track_info_seekbar_vol.md'],
  ['gallery/vu-meter/index.html', 'sample_vu_meter.md'],
  // other
  ['other/index.html', 'other.md'],
  ['other/cover-utils/index.html', 'other_cover_utils.md'],
  ['other/lastfm-playcount-sync/index.html', 'other_lastfm_playcount_sync.md'],
  ['other/musicbrainz64/index.html', 'other_musicbrainz64.md'],
  ['other/play-track/index.html', 'other_play_track.md'],
  ['other/playlist-fix/index.html', 'other_playlist_fix.md'],
  ['other/queue-viewer/index.html', 'other_queue_viewer.md'],
  ['other/run-main/index.html', 'other_run_main.md'],
];

function extractArticle(html) {
  // Try <article> first
  const m = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  if (m) return m[1];
  // Fall back to role=main div
  const m2 = html.match(/role=["']main["'][^>]*>([\s\S]*?)<\/div>\s*<\/(?:main|div)>/);
  if (m2) return m2[1];
  return null;
}

// Strip all HTML tags from a string, decode entities
function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n)))
    .replace(/&[a-z]+;/g, '');
}

// Extract text from a cell td, handling twemoji SVG -> version tag
function tdText(html) {
  // SVG version badge: <span class="twemoji"><svg...></svg></span> 3.1.0
  // Replace svg span with empty, keep surrounding text
  let t = html.replace(/<span class="twemoji">[\s\S]*?<\/span>/g, '');
  return stripTags(t).trim();
}

// Convert inline code within text
function convertInline(html) {
  // inline code
  let s = html.replace(/<code>([\s\S]*?)<\/code>/g, (_, c) => '`' + stripTags(c) + '`');
  // strong/em
  s = s.replace(/<strong>([\s\S]*?)<\/strong>/g, (_, c) => stripTags(c));
  s = s.replace(/<em>([\s\S]*?)<\/em>/g, (_, c) => stripTags(c));
  // links - keep text only
  s = s.replace(/<a[^>]*>([\s\S]*?)<\/a>/g, (_, c) => stripTags(c));
  // span (twemoji, etc)
  s = s.replace(/<span[^>]*>([\s\S]*?)<\/span>/g, (_, c) => {
    // strip inner svg
    return c.replace(/<svg[\s\S]*?<\/svg>/g, '');
  });
  // strip remaining tags
  s = stripTags(s);
  return s.trim();
}

// Convert a pre>code block (syntax highlighted or plain)
function convertCodeBlock(html) {
  // Strip all span tags (syntax highlighting)
  let code = html.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
  // Decode entities
  code = code
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n)));
  // Strip any remaining tags
  code = code.replace(/<[^>]+>/g, '');
  // Trim trailing whitespace per line but preserve indentation
  code = code.split('\n').map(l => l.trimEnd()).join('\n').trim();
  return '```\n' + code + '\n```';
}

// Convert a table to markdown pipe table
function convertTable(tableHtml) {
  const rows = [];
  const rowMatches = tableHtml.match(/<tr[^>]*>([\s\S]*?)<\/tr>/g) || [];

  for (const row of rowMatches) {
    const cells = [];
    // Match th or td (including multiline content)
    const cellRe = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g;
    let m;
    while ((m = cellRe.exec(row)) !== null) {
      const cellHtml = m[1];
      let text = tdText(cellHtml);
      // Replace pipe chars to avoid breaking table
      text = text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
      cells.push(text);
    }
    if (cells.length > 0) rows.push(cells);
  }

  if (rows.length === 0) return '';

  // Detect header row (from thead)
  const hasHead = /<thead>([\s\S]*?)<\/thead>/.test(tableHtml);
  const headRows = [];
  const bodyRows = [];

  if (hasHead) {
    const headMatch = tableHtml.match(/<thead>([\s\S]*?)<\/thead>/);
    const bodyMatch = tableHtml.match(/<tbody>([\s\S]*?)<\/tbody>/);
    if (headMatch) {
      const hRows = headMatch[1].match(/<tr[^>]*>([\s\S]*?)<\/tr>/g) || [];
      for (const r of hRows) {
        const cells = [];
        const re = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g;
        let m;
        while ((m = re.exec(r)) !== null) {
          let t = tdText(m[1]).replace(/\|/g, '\\|').replace(/\n/g, ' ');
          cells.push(t);
        }
        headRows.push(cells);
      }
    }
    if (bodyMatch) {
      const bRows = bodyMatch[1].match(/<tr[^>]*>([\s\S]*?)<\/tr>/g) || [];
      for (const r of bRows) {
        const cells = [];
        const re = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g;
        let m;
        while ((m = re.exec(r)) !== null) {
          let t = tdText(m[1]).replace(/\|/g, '\\|').replace(/\n/g, ' ');
          cells.push(t);
        }
        bodyRows.push(cells);
      }
    }
  } else {
    bodyRows.push(...rows);
  }

  // Determine column count
  const allRows = [...headRows, ...bodyRows];
  const colCount = Math.max(...allRows.map(r => r.length));
  if (colCount === 0) return '';

  // Pad rows to same width
  const pad = (r) => {
    while (r.length < colCount) r.push('');
    return r;
  };

  const lines = [];
  // If no header rows, synthesize blank header
  if (headRows.length === 0) {
    lines.push('| ' + Array(colCount).fill('').join(' | ') + ' |');
    lines.push('| ' + Array(colCount).fill('---').join(' | ') + ' |');
  } else {
    for (const r of headRows) {
      lines.push('| ' + pad(r).join(' | ') + ' |');
    }
    lines.push('| ' + Array(colCount).fill('---').join(' | ') + ' |');
  }
  for (const r of bodyRows) {
    lines.push('| ' + pad([...r]).join(' | ') + ' |');
  }

  return lines.join('\n');
}

// Convert list items (handles nested)
function convertList(html, ordered, depth) {
  const prefix = '  '.repeat(depth);
  const marker = ordered ? '1.' : '-';
  const lines = [];
  const liRe = /<li[^>]*>([\s\S]*?)<\/li>/g;
  let m;
  while ((m = liRe.exec(html)) !== null) {
    let content = m[1];
    // Handle nested lists
    let nested = '';
    content = content.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, inner) => {
      nested += '\n' + convertList(inner, false, depth + 1);
      return '';
    });
    content = content.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_, inner) => {
      nested += '\n' + convertList(inner, true, depth + 1);
      return '';
    });
    const text = convertInline(content).replace(/\n+/g, ' ').trim();
    if (text) {
      lines.push(prefix + marker + ' ' + text);
    }
    if (nested) lines.push(nested);
  }
  return lines.join('\n');
}

// Main conversion: article HTML -> markdown string
function htmlToMd(articleHtml) {
  let html = articleHtml;

  // Pre-process: remove <a class="headerlink"> anchors
  html = html.replace(/<a[^>]*class="headerlink"[^>]*>.*?<\/a>/g, '');

  // Pre-process code blocks FIRST so they survive admonition div parsing
  // highlight divs: <div class="highlight"><pre><span></span><code>...</code></pre></div>
  html = html.replace(/<div class="highlight"[^>]*>[\s\S]*?<pre[^>]*><span[^>]*><\/span>([\s\S]*?)<\/pre>[\s\S]*?<\/div>/g,
    (_, inner) => '\n' + convertCodeBlock(inner) + '\n');
  // plain pre > code
  html = html.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g,
    (_, inner) => '\n' + convertCodeBlock(inner) + '\n');

  const chunks = [];

  // Process block by block
  let pos = 0;

  function emitText(t) {
    const text = convertInline(t).trim();
    if (text) chunks.push(text);
  }

  // Regex to find block-level elements
  const blockRe = /<(h[1-4]|p|ul|ol|pre|table|div|hr|blockquote)(\s[^>]*)?>|<\/(h[1-4]|p|ul|ol|pre|table|div|hr|blockquote)>/g;

  // Extract known block patterns sequentially (earliest match wins)
  const patterns = [
    // h1-h4
    { re: /<h([1-4])[^>]*>([\s\S]*?)<\/h[1-4]>/g, fn: (m, level, inner) =>
      '#'.repeat(parseInt(level)) + ' ' + convertInline(inner) },
    // pre-processed fenced code blocks (already converted)
    { re: /```[\s\S]*?```/g, fn: (m) => m },
    // admonition divs - code blocks already pre-processed above
    { re: /<div class="admonition[^"]*"[^>]*>([\s\S]*?)<\/div>/g, fn: (m, inner) => {
      const title = inner.match(/<p class="admonition-title"[^>]*>([\s\S]*?)<\/p>/);
      let body = inner.replace(/<p class="admonition-title"[^>]*>[\s\S]*?<\/p>/, '');
      const titleText = title ? convertInline(title[1]) : 'Note';
      // body may contain pre-processed code fences or paragraphs
      const lines = [];
      // split on code fences
      const parts = body.split(/(```[\s\S]*?```)/g);
      for (const part of parts) {
        if (part.startsWith('```')) {
          lines.push(part);
        } else {
          const text = part.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (_, c) => convertInline(c)).trim();
          if (text) lines.push(text);
        }
      }
      const bodyText = lines.join('\n').trim();
      return '> ' + titleText + ': ' + bodyText.replace(/\n/g, '\n> ');
    }},
    // tables
    { re: /<table[^>]*>([\s\S]*?)<\/table>/g,
      fn: (m, inner) => convertTable(m) },
    // unordered lists
    { re: /<ul[^>]*>([\s\S]*?)<\/ul>/g,
      fn: (m, inner) => convertList(inner, false, 0) },
    // ordered lists
    { re: /<ol[^>]*>([\s\S]*?)<\/ol>/g,
      fn: (m, inner) => convertList(inner, true, 0) },
    // paragraphs
    { re: /<p[^>]*>([\s\S]*?)<\/p>/g,
      fn: (m, inner) => convertInline(inner) },
    // hr
    { re: /<hr[^>]*\/?>/g, fn: () => '---' },
  ];

  // Use a single-pass approach: find the earliest match across all patterns
  function convert(input) {
    const result = [];
    let remaining = input;

    while (remaining.length > 0) {
      let earliest = null;
      let earliestIdx = Infinity;
      let earliestPat = null;
      let earliestMatch = null;

      for (const pat of patterns) {
        pat.re.lastIndex = 0;
        const m = pat.re.exec(remaining);
        if (m && m.index < earliestIdx) {
          earliestIdx = m.index;
          earliestMatch = m;
          earliestPat = pat;
        }
      }

      if (!earliestMatch) {
        // No more block elements, emit remaining as text
        const text = convertInline(remaining).trim();
        if (text) result.push(text);
        break;
      }

      // Emit text before this match
      if (earliestIdx > 0) {
        const before = remaining.slice(0, earliestIdx);
        const text = convertInline(before).trim();
        if (text) result.push(text);
      }

      // Process the match
      const converted = earliestPat.fn(...earliestMatch);
      if (converted && converted.trim()) result.push(converted.trim());

      remaining = remaining.slice(earliestIdx + earliestMatch[0].length);
    }

    return result.join('\n\n');
  }

  return convert(html);
}

// Collapse multiple blank lines to one
function normalizeBlankLines(md) {
  return md.replace(/\n{3,}/g, '\n\n').trim();
}

// Process each page
let successCount = 0;
const written = [];
const failed = [];

for (const [relHtml, mdName] of PAGE_MAP) {
  const htmlPath = path.join(HTML_DIR, relHtml);
  const mdPath = path.join(MD_DIR, mdName);

  if (!fs.existsSync(htmlPath)) {
    failed.push(relHtml + ' (not found)');
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const article = extractArticle(html);

  if (!article) {
    failed.push(relHtml + ' (no article found)');
    continue;
  }

  let md;
  try {
    md = htmlToMd(article);
    md = normalizeBlankLines(md);
  } catch (e) {
    failed.push(relHtml + ' (convert error: ' + e.message + ')');
    continue;
  }

  if (!md || md.trim().length < 10) {
    failed.push(relHtml + ' (empty output)');
    continue;
  }

  fs.writeFileSync(mdPath, md + '\n', 'utf8');
  written.push(mdName);
  successCount++;
  process.stdout.write('.');
}

console.log('\n\nWritten: ' + successCount + ' files');
if (failed.length) {
  console.log('Failed:', failed.join('\n  '));
}
console.log('Files:', written.join(', '));
