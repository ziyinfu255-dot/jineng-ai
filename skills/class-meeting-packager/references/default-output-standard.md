# Default Output Standard

## Deliverable matrix

### Teaching package

- `主题-课堂逐字稿.docx`
- `主题-教案设计.docx`

### Commercial package

- `主题-课堂逐字稿.docx`
- `主题-逐字稿预览.docx`
- `主题-教案设计.docx`

Place final files in the source directory unless the user gives another destination. Keep each document separate.

## Detailed script

- Match every actual slide with one numbered section.
- Use `第N页｜页面标题（约X分钟）`.
- Include teacher wording, interaction handling, and a transition for each page.
- Fit the spoken core and interactions to the stated class duration.
- Do not impose a 3500-character cap when it would remove required page coverage.

## Preview script

- Default to about 1800-2200 Chinese characters.
- Group related pages into phases and show representative quality without duplicating the full detailed edition.
- Put `逐字稿预览` in the title and filename.
- Preserve it when the detailed edition is regenerated.

## Lesson plan

Keep these sections:

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

Use the finished courseware's actual page count. Put off-slide interactions and paper activities in `教学过程`. Keep `板书设计` in a boxed single block.

## Formatting

- Use a centered title and compact school-handout spacing.
- Do not add a title information table unless requested.
- Use stable Chinese fonts in all Word font slots.
- Keep headings and short labels with the following paragraph.
- Render and inspect every page before delivery.

## Cleanup

Keep:

- source courseware;
- detailed script;
- preview script when commercial packaging is in scope;
- lesson plan;
- any other file the user explicitly requests.

Remove only working Markdown, OCR, extraction, rendered-page, and temporary PDF files. Never treat a preview or an earlier requested edition as temporary.

## Reusable prompts

### Teaching package

```text
按 $class-meeting-packager 处理这个班会课件：
/绝对路径/文件.pptx

输出两个独立 Word：
1. 按实际PPT页数逐页详细讲解的课堂逐字稿
2. 10部分学校格式教案设计

互动、时间、预期回应和衔接写入逐字稿或教案，不写进PPT。保存到源文件同级目录并完成全页排版检查。
```

### Commercial package

```text
按 $class-meeting-packager 把这个课件整理成可销售资料包：
/绝对路径/文件.pptx

输出三个独立 Word：
1. 按实际PPT页数逐页详细讲解的课堂逐字稿
2. 约1800-2200字、标题带“逐字稿预览”的购买前预览版
3. 10部分学校格式教案设计

保留预览版和详细版，不互相覆盖；完成全页字体、分页和文件完整性检查。
```
