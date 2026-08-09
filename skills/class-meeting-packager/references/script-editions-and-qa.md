# Script Editions and QA

## Contents

1. Source reconciliation
2. Detailed edition
3. Preview edition
4. Timing
5. Word QA

## 1. Source reconciliation

- Count the slides in the finished file.
- Extract each page's visible title and essential text.
- Compare the actual deck with any earlier outline or generation prompt.
- Treat the finished deck as authoritative. State a discrepancy when it affects delivery.
- Restore an omitted but still useful activity as a paper/oral activity; do not silently add a nonexistent slide.

## 2. Detailed edition

Use this minimum structure for every slide:

```markdown
## 第N页｜页面标题（约X分钟）

**教师逐字讲述**

可直接说出的课堂语言。

**互动与现场处理**

教师提问或指令、学生动作、预期回应、需要时的兜底提示。

**衔接语**

自然过渡到下一个教学想法。
```

Rules:

- Cover and agenda pages still need real classroom language.
- Judgment, rehearsal, reading, or planning pages must say how to run the activity, not only describe its purpose.
- Use private or low-pressure participation for emotion checks and self-assessment.
- Use descriptive feedback instead of ranking or “best” comparisons.
- Include paper-task instructions under the slide where the task is launched, even when no paper-task slide exists.

## 3. Preview edition

- Group related slides into 5-8 lesson phases.
- Show representative teacher language and 2-4 interactions.
- Keep the classroom narrative coherent from opening to closing.
- Default to about 1800-2200 Chinese characters.
- Do not reproduce all slide-by-slide handling, transition language, and fallback responses.
- Title and filename must contain `逐字稿预览`.

## 4. Timing

- Assign realistic time to every detailed-script page.
- Sum all page times and keep the total within the requested lesson duration.
- Estimate the spoken core separately from operational notes. A longer document can still fit when only the teacher-language blocks are spoken verbatim.
- Reserve time for student thinking, sharing, writing, and transitions.
- For a 35-40 minute class, a practical balance is about 17-22 minutes of teacher talk and 15-20 minutes of interaction or student work.

## 5. Word QA

Check both structure and visuals:

- section count equals actual slide count;
- first and final page headings match the deck;
- no placeholder, raw Markdown, or “下一页” language;
- all Chinese glyphs render;
- title, page heading, and bold label stay with the following paragraph;
- no clipped line, overlap, orphaned heading, broken table, or unexpectedly blank page;
- preview remains separate from the detailed edition;
- document archive passes an integrity test.

When a headless renderer lacks the selected CJK font, verify through Word, Pages, or another native office renderer and render its PDF with a CJK-capable PDF engine.
