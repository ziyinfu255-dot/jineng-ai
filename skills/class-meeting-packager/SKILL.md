---
name: class-meeting-packager
description: "Generate commercial-ready materials for Chinese school class meetings from PDF/PPT/PPTX courseware. Use when Codex needs to read a 主题班会/德育课/节气班会/常规教育课件 and produce two separate Word deliverables in the source folder: (1) a 口语化逐字稿 for direct classroom use, usually within the user-specified length or 3500字以内 by default, and (2) a school-style 教案设计 with 10 standard sections, compact paragraph spacing, no title info table, and a boxed 板书设计 section. Also use when the user provides a reference教案 DOCX and wants the new output to follow that structure and formatting style."
---

# Class Meeting Packager

## Overview

Turn class-meeting courseware into two polished Word documents:

- `主题班会逐字稿.docx`
- `主题班会教案设计.docx`

Keep the workflow optimized for Chinese K-12 school delivery: oral classroom language, school-style teaching plan structure, compact pagination, and clean final folders.

## Workflow

### 1. Read the source materials

- Read the user-provided PDF, PPT, or PPTX first.
- If the PDF has little or no extractable text, render pages and use OCR to recover titles, section order, and key copy.
- If the user provides a reference教案 DOCX, inspect its heading style, paragraph density, and 板书设计 treatment before drafting.

### 2. Draft the two deliverables separately

- Draft the verbatim script and lesson plan as two independent documents, not one merged package.
- Save the final Word files in the same directory as the source PDF/PPT unless the user asks for another location.
- Use the source topic to derive filenames whenever possible.
- Treat Markdown and extracted-text files as intermediate working files only; do not leave them in the final folder unless the user explicitly asks to keep them.

### 3. Apply the default content standards

- Write the 逐字稿 in spoken Chinese suitable for direct classroom delivery.
- Remove PPT navigation language such as “下一页”, “PPT第X页”, source markers, or other production metadata.
- Keep the 逐字稿 within the user’s requested length; if no length is given, default to `3500字以内`.
- Preserve page-based section labels when useful, such as `一、开场引入（P1-P2）`.
- Write the 教案设计 with these 10 standard sections unless the user explicitly overrides them:
  - 教案基本信息
  - 学生心理特点分析
  - 教学重点与难点
  - 教学准备
  - 教学方法
  - 教学过程
  - 板书设计
  - 课后延伸
  - 教学反思与改进
  - 教学评价

### 4. Apply the default format standards

- Do not place an information-line table directly below the title unless the user explicitly asks for it.
- Keep paragraph spacing compact and closer to school handout formatting than slide-export formatting.
- Render `板书设计` as a boxed, single-block layout instead of a loose bullet list.
- Use concise top headings and stable numbering so school review is easy.

### 5. Export to Word

- Draft in Markdown first when it helps with fast iteration.
- Use `scripts/generate_word_docs.py` to export the final Word documents with the standard layout.
- For the lesson plan’s `板书设计`, place the board content inside a fenced text block under `## 7. 板书设计`; the export script converts it into a boxed display block.

### 6. Clean up

- By default, after successful export, keep only the source files and final `docx` deliverables in the user-facing folder unless the user explicitly asks to retain intermediate artifacts.
- If the user asks to clean the folder, keep only the source files and final deliverables.
- Delete temporary OCR output, extracted text, contact sheets, intermediate Markdown drafts, and obsolete combined-package files unless the user asks to keep them.

## Reference Use

- Read `references/default-output-standard.md` when you need the exact default packaging rules or the reusable user prompt template.

## Resources

### scripts/generate_word_docs.py

Use this script to export two Markdown drafts into the standard pair of Word deliverables.

### references/default-output-standard.md

Use this reference for the default output spec, naming pattern, and reusable trigger prompt.
