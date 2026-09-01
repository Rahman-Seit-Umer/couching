import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const response = await fetch('http://127.0.0.1:3000/');
if (!response.ok) throw new Error(`Local site returned ${response.status}`);

const rendered = await response.text();
const main = rendered.match(/<main>[\s\S]*<\/main>/)?.[0];
if (!main) throw new Error('Rendered page did not contain <main>');

const cssDirectory = 'dist/client/_next/static/css';
const cssFile = (await readdir(cssDirectory)).find((name) => name.endsWith('.css'));
if (!cssFile) throw new Error('Compiled stylesheet was not found');

const css = await readFile(join(cssDirectory, cssFile), 'utf8');
const html = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Роман Сейтумеров — психолог-консультант</title>
    <meta name="description" content="Индивидуальное психологическое консультирование онлайн и очно в Санкт-Петербурге.">
    <meta property="og:title" content="Роман Сейтумеров — психолог-консультант">
    <meta property="og:description" content="Индивидуальное психологическое консультирование онлайн и очно в Санкт-Петербурге.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ru_RU">
    <link rel="icon" href="./public/images/roman-portrait.jpeg">
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>${main}</body>
</html>
`;

const portableHtml = html.replaceAll('src="/images/', 'src="./public/images/');
await writeFile('index.html', portableHtml);
await writeFile('styles.css', css);
