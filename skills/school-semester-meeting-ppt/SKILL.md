---
name: school-semester-meeting-ppt
description: Generate Chinese kindergarten-to-primary-school semester class meeting and parent meeting PowerPoint courseware plans and PPTX decks. Use when the user asks for 2026 autumn opening class meetings, opening parent meetings, midterm parent meetings, final parent meetings, or similar homeroom teacher courseware for kindergarten through grade 6, especially when outputs need grade-specific structure, page-by-page text, illustration prompts, classroom interaction, teacher-friendly wording, and clean child-appropriate slide style.
metadata:
  short-description: 幼儿园到小学六年级班会和家长会课件生成
---

# School Semester Meeting PPT

## Purpose

Use this skill to create a reusable courseware product system for Chinese homeroom teachers:

- 2026 autumn semester opening class meetings.
- Opening, midterm, and final parent meetings.
- Kindergarten small, middle, and senior classes.
- Primary school grades 1 to 6.

The output should feel directly usable by teachers, commercially suitable for courseware sales, and age-appropriate for the target students or parents.

## First Decisions

Before generating content, identify these inputs from the user request:

- **Age group**: kindergarten small/middle/senior class, or primary grade 1-6.
- **Meeting type**: opening class meeting, opening parent meeting, midterm parent meeting, final parent meeting.
- **Audience**: students, parents, or both.
- **Page count**: default 30 pages for parent meetings, 30-40 pages for class meetings unless specified.
- **Output type**: framework, NotebookLM prompt, page-by-page script, PPT text, image prompts, or complete PPTX.
- **Visual style**: student-facing should be lively and illustrated; parent-facing should be clean, warm, professional, and teacher-like.

Ask at most one concise question only if the age group or meeting type is missing and cannot be inferred.

## Product Matrix

The full product line is:

- Kindergarten: small class, middle class, senior class.
- Primary school: grade 1, grade 2, grade 3, grade 4, grade 5, grade 6.
- Four courseware types per age group:
  - Autumn opening class meeting.
  - Opening parent meeting.
  - Midterm parent meeting.
  - Final parent meeting.

This creates 36 core courseware products.

## Age Group Priorities

Use the age group to decide content depth, examples, tone, and visual style.

### Kindergarten Small Class

- Separation anxiety.
- Entering kindergarten routines.
- Eating, drinking, toileting, napping.
- Emotional comfort.
- Parent trust and gentle cooperation.

### Kindergarten Middle Class

- Rule awareness.
- Peer interaction.
- Expression and listening.
- Self-care improvement.
- Early responsibility.

### Kindergarten Senior Class

- Kindergarten-to-primary transition.
- Task awareness.
- Focus and persistence.
- Pre-writing and pre-reading preparation.
- Schedule and independence.

### Grade 1

- Becoming a primary school student.
- Classroom rules.
- Listening and sitting posture.
- Homework habits.
- Parent-child transition from kindergarten to school.

### Grade 2

- Habit consolidation.
- Reading accumulation.
- Handwriting and neatness.
- Time awareness.
- Stable homework routines.

### Grade 3

- Learning transition period.
- Composition starting point.
- English learning habits.
- Independent learning.
- Emotional and confidence support.

### Grade 4

- Subject difficulty increase.
- Thinking quality.
- Note-taking and review.
- Responsibility.
- Peer relationship and emotion management.

### Grade 5

- Learning planning.
- Efficiency and self-management.
- Early adolescence communication.
- Ability differentiation.
- Reading, writing, and problem-solving improvement.

### Grade 6

- Graduation year awareness.
- Primary-to-junior transition.
- Review rhythm.
- Psychological support.
- Growth summary and future preparation.

## Meeting Type Structures

Choose the structure based on meeting type. Adjust language and examples by age group.

### Opening Class Meeting

Student-facing. Make it active, warm, visual, and classroom-ready.

Recommended sections:

1. Welcome back and emotional warm-up.
2. New semester identity and expectations.
3. Campus/classroom routine reminders.
4. Learning habits and daily behavior.
5. Safety reminders for school and home.
6. Peer relationship and class belonging.
7. New semester goals.
8. Class agreement.
9. Interactive activity or mini game.
10. Encouraging ending.

### Opening Parent Meeting

Parent-facing. Make it warm, professional, practical, and not corporate.

Recommended sections:

1. Welcome and meeting purpose.
2. Class profile and teacher expectations.
3. Age characteristics of this stage.
4. Key semester learning tasks.
5. Habit development priorities.
6. Homework, reading, and daily routine expectations.
7. Home-school communication rules.
8. Parent cooperation list.
9. Common problems and responses.
10. Closing thanks and shared commitment.

### Midterm Parent Meeting

Parent-facing. Focus on stage review and next-step improvement.

Recommended sections:

1. Half-semester review.
2. Class overall performance.
3. Learning status analysis.
4. Habit and routine feedback.
5. Growth highlights.
6. Common problems.
7. Second-half semester focus.
8. Parent support suggestions.
9. Individual attention directions.
10. Encouragement and expectations.

### Final Parent Meeting

Parent-facing. Focus on summary, vacation guidance, and next-stage transition.

Recommended sections:

1. Semester journey review.
2. Class growth highlights.
3. Learning gains.
4. Habit changes.
5. Activities and class memories.
6. Problems to continue improving.
7. Vacation study and reading suggestions.
8. Vacation safety and routine reminders.
9. Next semester or next stage transition.
10. Thanks and blessing.

## Slide Design Rules

### For Student-Facing Class Meetings

- Use bright, clean, child-friendly illustration style.
- Each content slide should include both text and a matching illustration.
- Do not make it pure text.
- Do not make it look like a corporate report.
- Use scene-based illustrations: classroom, playground, school gate, desk, family, reading corner, class group.
- Keep text and image separated. Do not overlay body text on illustration.
- Use short phrases children can repeat, act out, or answer.
- Add one interaction cue every 2-3 pages.

### For Parent Meetings

- Use clean solid or near-solid backgrounds.
- Keep the style warm, orderly, and teacher-like.
- Avoid childish decoration overload.
- Use moderate illustrations, simple charts, icons, timelines, checklists, and classroom photos/illustration placeholders.
- Focus on practical parent actions, not slogans.
- Avoid pressure-heavy wording.

### General Visual Standards

- Background should be pure or near-pure colors: warm white, light blue, light green, pale yellow, soft peach.
- Main text must be clear and large enough for projection.
- Use Microsoft YaHei or another readable Chinese font.
- Keep each slide to one main idea.
- Avoid dense paragraphs, tiny text, complex tables, and too many colors.
- Use illustrations as supporting visuals, not as the only teaching content.

## Page Content Rules

Write page content in direct classroom language.

Student-facing examples:

- "新学期，我会先举手再发言。"
- "课间慢慢走，不追跑，不打闹。"
- "遇到不会的问题，我可以先想一想，再请教老师。"

Parent-facing examples:

- "一年级不是抢速度，而是稳稳建立学习习惯。"
- "请家长每天固定一个安静的阅读时间。"
- "期中以后，我们会重点关注书写、听讲和作业订正。"

Avoid empty administrative language such as:

- "提升学生综合素养。"
- "加强家校协同育人。"
- "促进学生全面发展。"

If such wording is needed, translate it into concrete actions.

## Output Formats

When the user asks for a framework, output:

- Courseware title.
- Target audience.
- Style direction.
- Page-by-page 20/30/40-page outline.
- Each page's core content and visual idea.

When the user asks for NotebookLM prompt, output:

- A single copy-ready prompt in Chinese.
- Include page count, style, audience, slide text, and picture description.
- If requested, remove labels such as "page title" or "page text".

When the user asks for PPT content, output:

- Page number.
- Slide title.
- On-slide text.
- Visual description.
- Teacher talk track if needed.

When the user asks for complete PPTX, generate the deck using the available PowerPoint workflow and verify:

- Page count is correct.
- Images or visual placeholders are present as required.
- Text is readable.
- File can be opened or exported to thumbnails if PowerPoint is available.

## Recommended 30-Page Pattern

Use this when no specific page count is given.

### Opening Class Meeting

1. Cover.
2. Welcome back.
3. New semester changes.
4. My new identity.
5. Classroom routine.
6. Listening habit.
7. Speaking habit.
8. Homework or task habit.
9. Reading habit.
10. Desk and schoolbag organization.
11. Recess safety.
12. Campus safety.
13. Home safety.
14. Traffic safety.
15. Friendship and kindness.
16. Handling small conflicts.
17. Asking for help.
18. Emotion check-in.
19. My goal card.
20. Class agreement.
21. Group activity.
22. Good example sharing.
23. Teacher's expectations.
24. Parent message or home link.
25. Weekly routine.
26. Reward and growth system.
27. Safety reminder.
28. New semester promise.
29. Class photo or memory page.
30. Ending.

### Parent Meeting

1. Cover.
2. Welcome.
3. Meeting agenda.
4. Class profile.
5. Age-stage characteristics.
6. Semester key goals.
7. Learning focus.
8. Habit focus.
9. Reading focus.
10. Homework expectations.
11. Daily routine.
12. Classroom performance.
13. Home performance observations.
14. Common concern 1.
15. Common concern 2.
16. Teacher's suggestions.
17. Parent cooperation list.
18. Communication method.
19. Safety and health reminders.
20. Emotional support.
21. Case examples.
22. What to avoid.
23. What to insist on.
24. Stage plan.
25. Home practice list.
26. Q&A.
27. Shared agreement.
28. Warm reminder.
29. Thanks.
30. Ending.

## Commercial Courseware Checklist

Before finalizing, check:

- Is the age group clearly reflected?
- Can a teacher use it directly in class or parent meeting?
- Is every page focused on one clear idea?
- Is the language concrete and practical?
- Are there interaction points for student-facing decks?
- Is the style appropriate: lively for students, warm-professional for parents?
- Is the content different enough from common market templates?
- Are pictures supporting the text rather than replacing it?

