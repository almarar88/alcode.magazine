# Brief for the editor bot: expanding articles 01–10

Goal: bring each of articles 01–10 up to the length of 11–20 (about 1,400–1,500 words of body text, not counting the source section). Today they are 730–870 words each.
Text comes only from the editor bot. Grok Bot does not write any article text; it imports and verifies.

## What to send
- The full new version of each file `incoming_articles/NN_slug.md`, in the same format as 11–20:
  - title, then text with `##` subheadings
  - direct quotes inside «…»
  - the المحقق's footnotes attributed to him
  - a `## المصدر` section with page ranges and a `page_approx` line
- Optional: new in-book images (drawings or photos from inside the pages, not covers) added to `NN_slug_images.md`. Use the same fields:
  - المسار، الوصف، التعليق كما ورد تحتها في الكتاب، طبيعة الصورة، المصدر الأصلي، موضعها في الكتاب، added_by_editor، page_approx
  - files go in `images/NN/`
- Keep the existing images and their notes:
  - 01: the Dulac fantasy paintings, captioned as such
  - 08: Al-Qurna near Basra
  - 03 and 10: no English title containing Persian in the source line

## Source books (available as PDF on the box in /workspace/alcode_mag/pdf/ for verification)
| # | Book | PDF |
|---|---|---|
| 01 | في مملكة اللؤلؤ (روزنتال) | rosenthal_ar.pdf |
| 02 | ساحل أبوظبي وبني ياس… (وايتلوك) | trucial_ar.pdf |
| 03 | الصراع على جزيرة العرب (شتولمان) | stuhlmann_ar.pdf |
| 04 | خمسة عشر شهرًا… (ستوكيلر) | stocqueler_ar.pdf |
| 05 | وصف فارس… (فالنتاين) | valentijn_ar.pdf |
| 06 | هرمز والخليج… (غارسيا دي سيلفا) | garcia_ar.pdf |
| 07 | رحلة بكنغهام 1816 | buckingham_ar.pdf |
| 08 | رحلة هيود 1817 | heude_ar.pdf |
| 09 | رحلة غودينيو 1663 | godinho_ar.pdf |
| 10 | رحلة أوشيه-إلوا 1838 | aucher_ar.pdf |

## After the material arrives (Grok Bot)
1. Check every «…» quote against the PDF text and report any that don't match.
2. Re-run `python3 scripts/import_articles.py`: figures, captions «المصدر: …، ص N», verbatim pull quotes, «صورة أضافها المحقق».
3. Build for /alcode.magazine/, run the overflow, axe and functional checks, commit to main and deploy to gh-pages.
4. Report word counts before and after.
