# Default Output Standard

## Deliverables

Produce two separate Word documents:

- `主题班会逐字稿.docx`
- `主题班会教案设计.docx`

Place them in the same directory as the source PDF/PPT/PPTX unless the user asks otherwise.
Do not leave intermediate `.md`, `.txt`, OCR dumps, or other non-`docx` working files in the final delivery folder unless the user explicitly asks to keep them.

## Verbatim Script Default

- Keep the script oral, warm, and classroom-ready.
- Keep within the user’s requested length; default to `3500字以内`.
- Preserve page-based structure labels when helpful, such as `一、开场引入（P1-P2）`.
- Do not mention PPT navigation, source tags, or production metadata.

## Lesson Plan Default

Keep these 10 sections unless the user asks for another structure:

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

## Formatting Default

- Use a clean centered title.
- Do not add a title info table under the heading unless requested.
- Keep paragraph spacing compact.
- Make `板书设计` a boxed display block rather than normal paragraphs or bullets.
- Keep the overall style close to school submission documents.

## If a Reference DOCX Is Provided

- Read the reference docx before drafting.
- Follow its section rhythm, heading density, and board-design presentation.
- Copy structure and formatting cues, not unrelated topic content.

## Cleanup Default

By default after delivery, keep only:

- source PDF/PPT/PPTX
- final `docx` deliverables
- any files the user explicitly asked to retain

If the user asks for cleanup, keep only:

- source PDF/PPT/PPTX
- final `docx` deliverables
- any files the user explicitly asked to retain

Delete temporary OCR files, extracted text, page renders, old merged packages, and intermediate Markdown drafts.

## Reusable User Prompt

```text
按 $class-meeting-packager 这套标准，帮我处理这个班会课件：
/绝对路径/文件.pdf

输出两个独立 Word：
1. 逐字稿，3500字以内
2. 教案设计，格式参考：/绝对路径/参考教案.docx

不要标题下信息栏，段距紧凑，板书设计做成整块展示式，保存到 PDF 同级目录，并清理临时文件。
```
