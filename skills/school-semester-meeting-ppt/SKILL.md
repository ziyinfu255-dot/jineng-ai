---
name: school-semester-meeting-ppt
description: Generate audience-calibrated, teacher-ready Chinese kindergarten-to-primary-school class meeting and parent meeting courseware frameworks, NotebookLM prompts, page-by-page scripts, image prompts, and PPTX decks. Use for opening/midterm/final meetings, grade-specific homeroom topics, commercially packaged teacher resources, or any request needing age-appropriate learning goals, visual direction, classroom language, interactions, teacher talk tracks, generation checks, or a copy-ready presentation prompt that teachers can use without rewriting.
---

# School Semester Meeting PPT

## Purpose

Use this skill to create a reusable courseware product system for Chinese homeroom teachers:

- 2026 autumn semester opening class meetings.
- Opening, midterm, and final parent meetings.
- Kindergarten small, middle, and senior classes.
- Primary school grades 1 to 6.

Make every output audience-first and ready to teach. A teacher should be able to open the deck, understand the flow, and deliver it without rewriting slide text or inventing missing activities.

## First Decisions

Before generating content, identify these inputs from the user request:

- **Age group**: kindergarten small/middle/senior class, or primary grade 1-6.
- **Meeting type**: opening class meeting, opening parent meeting, midterm parent meeting, final parent meeting.
- **Audience**: students, parents, or both.
- **Presenter**: usually a homeroom teacher; identify another presenter only when stated.
- **Audience capability**: reading level, attention span, prior school experience, and ability to discuss or complete tasks.
- **Classroom use**: lesson duration, delivery setting, interaction type, and any required student artifact.
- **Page count**: default 30 pages for parent meetings, 30-40 pages for class meetings unless specified.
- **Output type**: framework, NotebookLM prompt, page-by-page script, PPT text, image prompts, or complete PPTX.
- **Visual style**: student-facing should be lively and illustrated; parent-facing should be clean, warm, professional, and teacher-like.

Ask at most one concise question only if the age group or meeting type is missing and cannot be inferred.

## Audience-First Delivery Contract

For every framework, NotebookLM prompt, page script, or complete deck, read [references/audience-ready-courseware-spec.md](references/audience-ready-courseware-spec.md) and define these four modules before the page sequence:

1. **Courseware basic information**: viewer, presenter, use case, teaching duration, exact page count, aspect ratio, classroom setting, and final student or parent action.
2. **Learning goals**: observable goals limited by the viewer's developmental stage, literacy, attention span, and existing experience.
3. **Overall visual goal**: age-appropriate style, text density, illustration realism, color system, recurring characters, projection readability, and forbidden aesthetics.
4. **Generation checks**: exact count, complete pages, audience fit, teacher usability, interaction operability, visual consistency, and final artifact readiness.

Treat topic references such as Grade 1 opening or Grade 2 time management as conditional examples beneath this contract, not as the general template.

Make pages ready to deliver:

- Finalize visible titles and classroom wording; do not leave placeholders such as "补充案例", "插入图片", or "教师自行发挥".
- Give every interaction a clear teacher instruction, approximate duration, expected student response, and short transition back to the lesson.
- Keep required materials minimal. Include printable content in the deck or label optional materials clearly.
- Use speaker notes for 1-2 concise teacher sentences per page when supported.
- Ensure the last pages produce a concrete takeaway, agreement, plan, card, checklist, or parent action rather than only a slogan.

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

- Transitioning emotionally and practically from kindergarten to primary school.
- Building the identity: "I am a primary school student."
- Becoming familiar with teachers, classmates, campus places, bells, and the school-day rhythm.
- Learning concrete classroom routines: sitting, listening, raising a hand, speaking, queueing, recess, and organizing a schoolbag.
- Learning safety, help-seeking, friendship, emotional expression, reading, and simple task habits.
- Reassuring students before giving rules; avoid opening with scolding or dense discipline.

### Grade 2

- Habit consolidation.
- Reading accumulation.
- Handwriting and neatness.
- Time awareness and simple duration estimation.
- Stable homework routines and simple task sequencing.
- Concrete scenarios, short checklists, and brief judgment or planning activities.
- Achievable student outputs that can be completed during class and used at home.

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

## Grade 1 Opening Class Meeting Route

When the request concerns a Grade 1 opening class meeting, kindergarten-to-primary transition, or a NotebookLM prompt for new pupils, read [references/grade1-opening-class-meeting.md](references/grade1-opening-class-meeting.md).

Use these core decisions:

- Prefer a warm campus-growth journey over a training-camp or heavy level-clearing concept.
- Start with emotional safety and identity, then introduce rules through the child's school-day scenes.
- Organize the narrative as: welcome and feelings → new identity → campus and people → classroom habits → recess and safety → friendship and help-seeking → reading and tasks → class promise.
- Use short, repeatable actions rather than abstract values.
- Add a light interaction every 2-3 pages: choose a feeling, imitate a posture, introduce yourself, judge a scene, practise queueing, or rehearse polite words.
- Keep the default at 30 pages when the user does not specify a count.
- Treat market engagement carefully: high comments often signal requests for files or sharing, not independently verified teaching quality.
- For a commercial package, default to editable PPT + lesson plan + teacher talk track + printable routine or goal cards.

## Grade 2 Time Management Class Meeting Route

When the request concerns Grade 2 time awareness, study planning, homework routines, or the theme "Becoming a Time-Management Expert," read [references/grade2-time-management-class-meeting.md](references/grade2-time-management-class-meeting.md).

Use these core decisions:

- Frame time management as calmly completing important tasks, not filling every minute or racing classmates.
- Build the narrative as: contrasting daily scenes → understanding time → feeling and estimating duration → deciding sequence → morning and arrival routines → pre-class and lesson focus → recess planning → homework preparation and planning → focus and distraction control → next-day preparation → sleep rhythm → homework schedule → personal commitment.
- Use real school and home scenes rather than abstract clock theory.
- Add an experience, judgment, ordering, rehearsal, or planning interaction every 2-3 pages.
- Use the canonical 20-page route when the user asks for 20 pages or does not provide a more specific structure.
- End with a usable student artifact. For this route, default to a **homework schedule**, not a whole-day schedule.
- Keep example times editable and present them as planning practice rather than a single required family timetable.
- Avoid training-camp, level-clearing, ranking, speed competition, and reward-heavy visual metaphors.

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

## NotebookLM Prompt Construction

Apply the **Audience-First Delivery Contract** before writing page details.

Build a copy-ready NotebookLM prompt in this order:

1. **Basic information**: title, viewer capability, presenter, use case, lesson duration, exact slide count, aspect ratio, classroom setting, and culminating action.
2. **Learning goals**: list observable knowledge, action, emotional, and student-output goals appropriate to the viewer.
3. **Visual system**: define an audience-specific style, palette, background, recurring characters, scene types, text density, text-image separation, projection readability, and forbidden aesthetics.
4. **Page specifications**: for every page, provide the visible title, exact visible text, illustration scene, and interaction when applicable.
5. **Generation checks**: restate the exact page count, critical page requirements, audience fit, teacher usability, character consistency, interaction operability, final artifact, and speaker-note requirements.

Apply these rules:

- Treat the requested page count as strict. State "do not add or remove pages" in the prompt.
- Let the viewer's age and role control vocabulary, sentence length, abstraction, examples, text density, and interaction form.
- Keep recurring characters visually consistent across the whole deck.
- Make every content page contain both usable text and a matching scene-based visual.
- Keep structural instructions out of the rendered slides, including labels such as "page title," "visible text," "visual description," and "interaction."
- For student-facing decks, explicitly prohibit corporate-report styling and any theme the user has rejected, such as training camps or heavy level-clearing.
- Ask for 1-2 short teacher-note sentences per page when speaker notes are supported, and state that notes must not appear in the visible body.
- Make interaction notes executable: say what the teacher does, how long it takes, what students or parents do, and how the teacher closes it.
- Include a final checklist that verifies exact count, the required culminating artifact, audience appropriateness, projection readability, teacher readiness, visual consistency, and complete page coverage.

## Output Formats

When the user asks for a framework, output:

- Courseware basic information.
- Audience-limited learning goals.
- Overall visual goal.
- Page-by-page 20/30/40-page outline.
- Each page's core content, final visible wording, visual idea, and executable interaction when applicable.
- Generation checks and teacher-ready acceptance criteria.

When the user asks for NotebookLM prompt, output:

- A single copy-ready prompt in Chinese.
- Follow the full sequence and constraints in **NotebookLM Prompt Construction**.
- If the request is for a Grade 1 opening class meeting, use the reference route instead of the generic 30-page pattern.
- If the request is for Grade 2 time management or homework planning, use the Grade 2 reference route.

When the user asks for PPT content, output:

- Page number.
- Slide title.
- On-slide text.
- Visual description.
- Teacher talk track, executable interaction, timing, expected response, and transition when applicable.

When the user asks for complete PPTX, generate the deck using the available PowerPoint workflow and verify:

- Page count is correct.
- Images or visual placeholders are present as required.
- Text is readable.
- Visible content contains no unfinished writing or asset placeholders.
- Teacher notes and interaction instructions are complete when the deck requires them.
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
- Are vocabulary, text density, examples, and interactions limited by the actual viewers rather than a generic grade label?
- Can a teacher use it directly in class or parent meeting?
- Are interaction instructions, timing, expected responses, and transitions clear enough to run immediately?
- Are all required materials already included or explicitly optional?
- Is every page focused on one clear idea?
- Is the language concrete and practical?
- Are there interaction points for student-facing decks?
- Is the style appropriate: lively for students, warm-professional for parents?
- Is the content different enough from common market templates?
- Are pictures supporting the text rather than replacing it?
- Does the title communicate the exact grade, meeting moment, and teacher benefit?
- Does the package reduce teacher preparation work with editable files, a lesson plan, talk track, or printable cards?
- Are market signals described honestly without treating "求课件/求分享" comments as proof of instructional quality?
