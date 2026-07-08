---
name: course-cover-images
description: Generate reusable courseware cover images from PPT-exported slide screenshots. Use when the user asks to create lesson/PPT/product cover images, marketing cover images, thumbnail collage covers, vertical card covers, or compliant ecommerce product images from folders of slide images such as 01-29 JPG/PNG files. Supports three standard cover styles: marketing selling-points cover, thumbnail collage cover, vertical card cover, plus 1:1 or 3:4 product-image export under 3MB.
---

# Course Cover Images

Use this skill to turn PPT-exported slide screenshots into standardized cover images for courseware/product listings.

## Output Types

Generate these by default when the user asks for the three cover types:

1. `营销卖点风封面图`: red or high-contrast commercial layout, top selling-point headline, one large hero slide, four detail slides.
2. `缩略图拼图风封面图`: left column of slide thumbnails, right column of three large preview slides, optional `1/5` marker.
3. `竖向卡片风封面图`: soft background, three rounded slide cards stacked vertically, suitable for detail pages or video-style previews.

Generate a compliant product image when the user mentions 商品图, 平台规格, 1:1, 3:4, 800x800, 750x1000, or 3M以内:

- Prefer `750x1000` JPG for 3:4 unless user requests square.
- Use `800x800` JPG for 1:1.
- Keep file size under 3MB.

## Input Detection

Accept either:

- A folder containing slide screenshots named like `*_01.jpg`, `01.jpg`, `1.png`, etc.
- A single existing cover image for product-image resizing.

Sort slide images numerically by the last number in the filename.

## Slide Selection Heuristics

- Hero/cover page: first slide.
- Structure/overview page: prefer page 3 if it looks like a route/map/目录/挑战页.
- Knowledge/detail page: prefer page 5 or the first strong content page after the overview.
- Additional marketing grid slides: choose pages showing different content types, commonly `[3, 5, 12, 16]`; adjust if the deck has fewer pages.
- Thumbnail column: use up to 9 pages, spaced across early/mid/late content when possible.
- If the user has specified pages, follow them.

## Workflow

1. Inspect the source folder and count valid images.
2. Preview key slides if page choice is uncertain.
3. Run `scripts/generate_course_covers.mjs` for cover generation.
4. Preview generated images with `view_image`.
5. Check dimensions and file sizes.
6. If product image is requested, run product export mode and verify size under 3MB.

## Script Usage

Generate three covers:

```powershell
node scripts/generate_course_covers.mjs --input "D:\path\to\slides" --prefix "防溺水安全闯关课PPT_" --title "防溺水安全闯关课PPT" --subtitle "28页可编辑 + 教案 + 逐字稿" --modes collage,marketing,cards
```

Product image export:

```powershell
node scripts/generate_course_covers.mjs --product "D:\path\to\cover.png" --ratio 3:4 --out "D:\path\to\商品图_750x1000.jpg"
```

If `node` is not on PATH, use the Node REPL tool with `sharp` and reuse the same layout logic.

## Naming

Save outputs in the source folder unless the user specifies otherwise:

- `<主题>_缩略图拼图风封面图.png`
- `<主题>_营销卖点风封面图.png`
- `<主题>_竖向卡片风封面图.png`
- `<主题>_商品图_750x1000.jpg` or `<主题>_商品图_800x800.jpg`

## Quality Rules

- Default cover canvas: `1080x1350`.
- Product image canvas: `750x1000` or `800x800`.
- Avoid text overlap and bottom-bar occlusion.
- Preserve full slide text where practical; use `contain` for card layouts and `cover` only when cropping is acceptable.
- For commercial marketing covers, keep top headline short and high-contrast.
- Re-preview after resizing/cropping.
