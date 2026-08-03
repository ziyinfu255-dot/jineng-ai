---
name: course-cover-images
description: Generate Xiaohongshu images for courseware and digital products from PPT-exported slide screenshots or an existing cover image. Use when the user asks for 小红书图片、小红书配图封面、课件宣传图、缩略图拼图风、营销卖点风、竖向卡片风、竖向卡片分页图、强展示版、上下图、两页一图、商品图、1:1、3:4、800x800、750x1000, or images under 3MB.
---

# Course Cover Images

Turn numbered PPT slide screenshots into Xiaohongshu courseware/product images.

## Default Outputs

When the user asks to generate a complete image set from slide screenshots, generate these unless the user requests a subset:

1. `<主题>_缩略图拼图风封面图.png`
   - Left thumbnail column plus three large preview slides.
   - Use a background color derived from the deck palette, not plain white.
2. `<主题>_营销卖点风封面图.png`
   - High-contrast commercial layout.
   - One hero slide plus four varied detail slides.
   - Bottom selling-point copy must stay inside the safe area.
3. `<主题>_竖向卡片风封面图.png`
   - Three complete 16:9 slide cards stacked vertically.
4. `<主题>_竖向卡片分页图_强展示版/`
   - Group slides sequentially, three slides per image.
   - Keep the final group at one or two slides when necessary.
   - Default to the strong showcase style: colored gradient background, page-blur backing inside each card, trimmed foreground slide enlarged on top.
   - Avoid plain white outer backgrounds and avoid excessive empty space.
   - Name each image `<主题>_竖向卡片图_强展示_<序号>_P<起始页>-P<结束页>.png`.
5. `<主题>_上下两页图/`
   - Group slides sequentially, two slides per image.
   - Show complete 16:9 slides, one on top and one below.
   - Keep the final single slide centered without duplicating another page.
   - Name each image `<主题>_上下图封面图_<序号>_P<起始页>-P<结束页>.png`.

Use `1080x1350` PNG for all Xiaohongshu supporting images and numbered batch images.

## Product Cover Output

Generate a platform-compliant JPG from an existing cover image when the user asks for 商品图/商品封面/platform规格:

- `1:1` or `800x800` -> `800x800`
- `3:4` or `750x1000` -> `750x1000`
- Keep every output below `3MB`.

Use these filenames:

- `<主题>_小红书商品封面_800x800.jpg`
- `<主题>_小红书商品封面_750x1000.jpg`

If `cover` resizing would cut important text or preview content, re-layout or use a safe contained composition instead.

## Input Detection

Accept:

- A folder containing slide screenshots named like `*_01.jpg`, `01.jpg`, `1.png`, etc.
- A single existing cover image for product-cover export.

Sort source slides numerically by the last number in each filename. Exclude generated covers, product covers, contact sheets, batch output folders, and filenames without a slide-page number.

## Page Selection

Unless the user specifies pages:

- Hero page: page 1.
- Structure/overview page: prefer page 3 when it looks like a route/map/table-of-contents/challenge page.
- Strong detail page: prefer page 5 or the first content-rich page after the overview.
- Marketing grid: choose four visually different content types across early, middle, and late slides.
- Thumbnail column: use up to nine slides spread across the deck.
- For short decks, avoid duplicate selections and show true page labels.

## Strong Showcase Vertical Card Rules

Use these rules for `竖向卡片分页图` by default:

- Do not use a flat white background for the whole canvas.
- Use a lively but soft gradient background matched to the deck palette.
- Use each slide as a blurred, darkened, or softened card backing so the card area feels full.
- Trim large white margins from the foreground slide before resizing.
- Enlarge the foreground slide as much as possible while preserving key text and edges.
- Keep slide content readable; do not put captions, translucent bars, page markers, or labels over the slide content.
- Keep enough margin around card edges so the design feels intentional, but do not leave large dead space.
- If the source slide itself has large necessary white space, prefer the blur-backdrop treatment over destructive cropping.

## Workflow

1. Inspect the source folder and count valid slide images.
2. Preview key slides before choosing pages when the layout is uncertain.
3. Generate the requested category with `scripts/generate_course_covers.mjs` when possible.
4. Preview representative generated images.
5. Verify dimensions and filenames.
6. For numbered batches, verify that every slide appears exactly once and in order.
7. For product covers, verify exact pixel dimensions and file size below `3MB`.

## Script Usage

Generate all Xiaohongshu supporting-image covers, including strong showcase vertical-card batch and top-bottom batch:

```powershell
node scripts/generate_course_covers.mjs --input "D:\path\to\slides" --title "成为时间管理小达人" --modes collage,marketing,cards,cards-batch-strong,stacked-batch
```

Generate only the strong showcase vertical-card batch:

```powershell
node scripts/generate_course_covers.mjs --input "D:\path\to\slides" --title "成为时间管理小达人" --modes cards-batch-strong
```

Generate only the numbered top-bottom covers:

```powershell
node scripts/generate_course_covers.mjs --input "D:\path\to\slides" --title "成为时间管理小达人" --modes stacked-batch
```

Generate product covers:

```powershell
node scripts/generate_course_covers.mjs --product "D:\path\to\cover.png" --title "成为时间管理小达人" --size 750x1000
node scripts/generate_course_covers.mjs --product "D:\path\to\cover.png" --title "成为时间管理小达人" --size 800x800
```

`--ratio` remains an alias for `--size`.

Dependency note:

- The script requires Node.js and `sharp`.
- If standard Node reports `Cannot find package sharp`, use the Node REPL tool with `sharp` available and reuse the script layout logic, or install `sharp` only after explicit approval.

## Quality Rules

- Keep supporting-image canvases at `1080x1350`.
- Preserve important slide text and key graphics.
- Do not crop slides destructively in standard vertical-card or top-bottom modes.
- For strong showcase vertical-card mode, trimming white margins is allowed, but key content must remain intact.
- For top-bottom covers, show exactly two complete 16:9 slides whenever two remain.
- Match backgrounds softly to the source deck instead of adding unrelated decoration.
- Keep titles short, high-contrast, and inside the safe area.
- Avoid text overlap, bottom-bar occlusion, accidental page duplication, incorrect page labels, excessive white background, and weak subject contrast.
- Re-preview after resizing or cropping.
- Do not deliver a product cover until both dimensions and `<3MB` are verified.
