---
name: class-meeting-packager
description: "Generate commercial-ready Chinese K-12 class-meeting materials from PDF/PPT/PPTX courseware. Use for 主题班会、德育课、节气班会、常规教育 or opening-class courseware when Codex must create a slide-matched detailed teacher script, a short pre-purchase script preview, or a school-style 10-section lesson plan. Also use when exact slide-count reconciliation, classroom-ready interactions, reference-DOCX formatting, commercial packaging, or purchase-preview materials are requested."
---

# Class Meeting Packager

## Outcome

Turn completed courseware into teacher-ready and sale-ready materials:

- `主题-课堂逐字稿.docx`: full teacher edition, matched to every actual slide.
- `主题-逐字稿预览.docx`: condensed pre-purchase preview.
- `主题-教案设计.docx`: school-style lesson plan.

Keep each Word document separate. Never merge the preview, detailed script, and lesson plan into one file.

## 1. Audit the source first

- Read the PDF, PPT, or PPTX before drafting.
- Extract the **actual** slide count, visible titles, key wording, section order, and final slide. Do not trust a planned prompt count when it conflicts with the finished deck.
- If PDF text is unavailable, render the pages and use OCR.
- If an intended activity is absent from the final slides, do not invent a new slide. Restore it as an off-slide paper or oral activity in the lesson plan and detailed script when it still fits the lesson.
- If a reference DOCX is provided, inspect its hierarchy, density, paragraph rhythm, and board-design treatment before writing.

## 2. Choose the package mode

### Teaching package

Use when a teacher only needs classroom materials:

- detailed slide-by-slide script;
- lesson plan.

### Commercial package

Use when the request mentions selling, purchase preview, product packaging, listing, or commercial-ready files:

- detailed slide-by-slide script;
- condensed script preview;
- lesson plan.

Keep all final editions. When regenerating the detailed script, never overwrite or delete the preview unless the user explicitly requests removal.

## 3. Write the detailed script

Read [references/script-editions-and-qa.md](references/script-editions-and-qa.md) before producing either script edition.

- Create one section for **every actual slide**, including the cover, agenda, judgment pages, and closing page.
- Use the heading `第N页｜页面标题（约X分钟）`.
- For each slide, include:
  - `教师逐字讲述`: natural words the teacher can say directly;
  - `互动与现场处理`: exact prompt, student action, expected response, and teacher follow-up;
  - `衔接语`: a natural bridge to the next idea;
  - a closing or paper-task block when the page needs it.
- Do not write production language such as “下一页”“点击动画”“PPT第X页”. Page labels are navigation for the teacher, not spoken lines.
- Keep interactions, timing, expected responses, and teacher guidance in the script or lesson plan, not in student-visible PPT text.
- Let lesson duration control the spoken core. A detailed script may exceed 3500 Chinese characters because operational notes are included; do not cut required slide coverage merely to meet the old default.
- Use supportive, age-appropriate language. Avoid public comparison, labeling, forced disclosure, speed contests, or reward-heavy handling unless the source explicitly requires them.

## 4. Write the preview script

- Condense the lesson into grouped phases instead of revealing every slide in full.
- Default to about 1800-2200 Chinese characters unless the user specifies another length.
- Show the topic, classroom rhythm, representative teacher language, and a few interactions, while reserving the full page-by-page handling for the detailed edition.
- Put `逐字稿预览` in both the filename and the document title.
- Keep the preview usable and polished; do not fill it with purchase instructions, watermarks, or missing-content placeholders unless requested.

## 5. Write the lesson plan

Use these 10 sections unless the user explicitly overrides them:

1. 教案基本信息
2. 学生心理特点分析
3. 教学重点与难点
4. 教学准备
5. 教学方法
6. 教学过程
7. 板书设计
8. 课后延伸
9. 教学反思与改进
10. 教学评价

Requirements:

- Record the actual courseware page count and realistic duration.
- Put executable interactions, time, teacher actions, student actions, expected responses, and evaluation points in `教学过程`.
- Mention off-slide paper activities explicitly.
- Render `板书设计` as one boxed display block, not a loose bullet list.
- Do not add an information table immediately below the title unless requested.

## 6. Export Word files

- Draft in Markdown when useful, but keep Markdown and extraction files as temporary artifacts.
- Use `scripts/generate_word_docs.py`.
- The exporter supports any subset of detailed script, preview, and lesson plan; do not regenerate unrelated documents just to update one file.
- For the lesson plan board block, place content in a fenced text block under `## 7. 板书设计`.
- Use filenames derived from the courseware topic.

## 7. Verify before delivery

- Confirm the detailed script has exactly one numbered section per actual slide.
- Confirm the preview title contains `逐字稿预览` and remains a separate file.
- Confirm no placeholder, Markdown marker, production instruction, or unfinished sentence appears in final Word files.
- Render every DOCX and inspect every page for Chinese glyphs, clipping, overlap, large blank gaps, orphaned headings, and broken board blocks.
- Keep titles, page headings, and labels with the following paragraph so they do not sit alone at a page bottom.
- If the primary renderer lacks a CJK font, verify with a native office renderer or another font-capable path before delivery; do not mistake missing glyphs for empty content.
- Run file-integrity and structural checks after the final export.

## 8. Clean up safely

- Keep the source courseware and every requested final DOCX.
- In commercial mode, keep both the preview and detailed scripts.
- Delete only temporary OCR, extraction, Markdown, PDF, and page-render files.
- Never delete an earlier final edition merely because a newer edition was generated.

## References

- [references/default-output-standard.md](references/default-output-standard.md): deliverable matrix, naming, and reusable prompts.
- [references/script-editions-and-qa.md](references/script-editions-and-qa.md): detailed/preview writing rules, timing, and QA gates.

## Resource

- `scripts/generate_word_docs.py`: export detailed script, preview, and lesson-plan Markdown into separate Word files.
