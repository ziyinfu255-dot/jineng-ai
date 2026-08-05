# Audience-Ready Courseware Specification

## Contents

1. Priority and workflow
2. Courseware basic information
3. Audience-limited learning goals
4. Viewer capability matrix
5. Overall visual goal
6. Teacher-ready page specification
7. Generation checks
8. Reusable prompt shell

## 1. Priority and Workflow

Apply this reference to every class-meeting or parent-meeting framework, NotebookLM prompt, page script, and PPTX deck.

Use this priority order:

1. Identify who will view the slides and what they can understand or do.
2. Define what the teacher must accomplish during the available class time.
3. Choose content depth, language, interaction, and visual style from that audience profile.
4. Build a complete teaching flow with a concrete final takeaway or artifact.
5. Verify that the teacher can present immediately without rewriting or inventing missing steps.

Topic-specific references are examples beneath this general specification. Do not let one topic's page count, artifact, story, or visual metaphor become a universal default.

## 2. Courseware Basic Information

Always define these fields before writing the page sequence:

- **Courseware title**: topic plus a child- or parent-friendly benefit when appropriate.
- **Primary viewers**: exact kindergarten class, primary grade, parents, or a mixed audience.
- **Viewer capability**: reading level, attention span, prior school experience, discussion ability, and ability to complete a task independently.
- **Presenter**: usually a homeroom teacher; state another role only when known.
- **Use case**: opening class meeting, parent meeting, midterm review, final summary, safety lesson, habit lesson, transition lesson, or another specified occasion.
- **Teaching duration**: an estimated delivery range that matches the page count and interactions.
- **Exact slide count**: use the user's count; otherwise apply the skill default.
- **Aspect ratio**: default to 16:9 unless specified otherwise.
- **Classroom setting**: whole-class projection, parent meeting, small group, online meeting, or take-home resource.
- **Culminating action**: what viewers will say, choose, practise, sign, plan, or take away by the end.
- **Required materials**: only items already available in class or supplied in the deck; mark additional items optional.

Do not stop at a generic label such as "primary students." Convert it into constraints, for example:

> Grade 2 students can read short phrases and simple tables, follow three- to five-step routines, make basic comparisons, and complete a guided plan. Avoid long explanations and abstract productivity language.

## 3. Audience-Limited Learning Goals

Use 3-5 observable goals. Select from four goal types:

- **Knowledge**: recognize, identify, distinguish, or explain something in simple language.
- **Action**: demonstrate, order, choose, rehearse, complete, or apply a routine.
- **Emotion or identity**: feel safe, build belonging, gain confidence, or accept responsibility without pressure.
- **Output**: complete a card, checklist, plan, agreement, timetable, reflection, or parent action list.

Write goals that can be observed during the lesson.

Prefer:

- "学生能按顺序说出课前准备的三个步骤。"
- "家长能选择两项本周可以执行的家庭支持行动。"

Avoid:

- "提升综合素养。"
- "加强意识。"
- "促进全面发展。"

Every goal must fit the available teaching time. Do not require an independent written reflection from viewers who cannot yet write it, or a complex discussion from viewers with a short attention span.

## 4. Viewer Capability Matrix

### Kindergarten Small Class

- Use teacher-spoken phrases, single actions, pointing, imitation, and emotional reassurance.
- Keep visible words minimal; let pictures carry recognition while the teacher carries explanation.
- Use familiar scenes such as entering class, eating, toileting, napping, and meeting the teacher.
- Avoid written worksheets, multi-step choices, abstract rules, and long sitting periods.

### Kindergarten Middle Class

- Use short rules, two-step routines, picture sorting, imitation, and simple peer situations.
- Support expression with sentence starters and visual choices.
- Keep interactions brief and physical.

### Kindergarten Senior Class

- Use three-step routines, simple sequencing, transition-to-primary scenes, task awareness, and guided oral reflection.
- Allow light matching, sorting, and mark-making, but do not assume fluent reading or independent writing.

### Grade 1-2 Students

- Use concrete school and home scenes, short sentences, repeatable classroom language, and visible action sequences.
- Prefer choosing, judging, ordering, rehearsing, and completing a small guided artifact.
- Add a light interaction every 2-3 pages.
- Avoid dense discipline lists, adult terminology, abstract values without actions, and speed competition.
- For Grade 1, prioritize reassurance and identity before rules.
- For Grade 2, build on familiar routines and introduce simple comparison, estimation, planning, and checking.

### Grade 3-4 Students

- Use realistic dilemmas, cause-and-effect, checklists, simple planning, peer discussion, and short reflection.
- Reduce decorative cartoon density and increase diagrams, timelines, and scenario cards.
- Let students explain a choice rather than only identify a correct answer.

### Grade 5-6 Students

- Use self-assessment, planning tools, tradeoffs, peer discussion, transition preparation, and emotional support.
- Use a clean youth-oriented style rather than childish mascots.
- Allow more text than lower grades, but keep one main idea per slide and avoid lecture-heavy paragraphs.

### Parents

- Use warm, professional, concrete language.
- Focus on what parents will observe, say, stop, start, or repeat at home.
- Use examples, checklists, simple charts, timelines, and communication boundaries.
- Avoid childish decoration, blame, anxiety-heavy claims, and slogans without actions.
- Distinguish teacher responsibilities, parent responsibilities, and shared responsibilities.

### Mixed Student and Parent Audience

- Separate student-facing and parent-facing sections visibly.
- Do not force one vocabulary level or visual style onto both groups.
- Use shared pages only for agreements, celebrations, demonstrations, or joint commitments.

## 5. Overall Visual Goal

Define the visual goal from the viewers, not only from the topic.

Always specify:

- Style and emotional tone.
- Main and supporting colors.
- Background treatment.
- Illustration or photo treatment.
- Recurring characters and consistency rules when characters are used.
- Text density and projection readability.
- Scene types that make the lesson concrete.
- Forbidden aesthetics.

Audience guidance:

- **Kindergarten**: large scene illustrations, strong emotional cues, minimal visible text, soft warm colors.
- **Grade 1-2**: clean picture-book or flat illustration, large readable words, familiar campus and family scenes, simple icons and sequences.
- **Grade 3-4**: fresh school-magazine style, scenario cards, timelines, diagrams, moderate illustration.
- **Grade 5-6**: clean youth-oriented editorial style, restrained color, planning tools, reflection cards, limited childish decoration.
- **Parents**: warm professional teacher style, clean grids, moderate classroom imagery, checklists, timelines, and simple data displays.

For every audience:

- Separate body text from complex images.
- Use one dominant visual idea per page.
- Keep titles and body text readable from the back of a classroom.
- Avoid corporate dashboards for students and preschool styling for older students or parents.
- Avoid unrequested training camps, heavy level-clearing, ranking, trophies, and competitive metaphors.

## 6. Teacher-Ready Page Specification

For each page, provide enough information for direct delivery:

1. **Visible title**: short and immediately understandable.
2. **Visible wording**: finished sentences, questions, choices, instructions, or table content; never a writing placeholder.
3. **Visual direction**: a concrete scene, diagram, card set, timeline, or table that supports the teaching point.
4. **Teacher note**: 1-2 concise sentences explaining how to introduce or close the page when notes are supported or requested.
5. **Interaction**: only where useful, but make it executable.

An executable interaction states:

- Teacher action or exact question.
- Approximate duration.
- Student or parent action.
- Expected response form, such as a gesture, one sentence, card choice, pair discussion, or completed plan.
- A short closing line that connects back to the lesson.
- Required material, if any.

Example:

> 教师展示三幅课间场景，请学生用手势判断“可以”或“需要调整”；用时2分钟；请两名学生说明理由；教师以“先做好需要的事，再安全休息”收束。无需额外材料。

Do not write interactions as vague instructions such as "开展讨论" or "组织小游戏".

Teacher-ready rules:

- Do not leave "补充案例", "插入图片", "可自行发挥", or similar placeholders.
- Do not require the teacher to search for an external video, image, story, or data source unless the user requested it.
- Put printable cards, tables, checklists, or agreements directly in the deck or delivery package.
- Make slide transitions logical so the teacher can explain why the next page follows.
- Keep teacher notes separate from visible slide text.
- Make the ending actionable: choose, sign, rehearse, plan, take home, or agree on a next step.

## 7. Generation Checks

End every NotebookLM prompt with a tailored checklist. Also apply it when reviewing a framework or PPTX.

### Structure

- Exact page count is correct.
- All requested topics appear in a logical teaching sequence.
- Every page has one clear function.
- Opening, development, practice, application, and ending are complete.
- The culminating action or artifact is included and usable.

### Audience Fit

- Vocabulary, sentence length, abstraction, examples, and text density match the actual viewers.
- Interactions match their reading, writing, speaking, and attention abilities.
- Tone is reassuring and concrete for younger children, increasingly reflective for older students, and practical and respectful for parents.
- Content does not rely on shame, fear, comparison, or unrealistic self-control.

### Teacher Readiness

- All visible text is final and can be shown directly.
- The teacher does not need to rewrite slides or invent missing examples.
- Every interaction includes action, time, response, closing, and materials.
- Speaker notes are concise and usable when supported.
- Required handouts or tables are present; extras are clearly optional.

### Visual and Technical Quality

- Each content page has a matching visual.
- Recurring characters, palette, and illustration style remain consistent.
- Body text does not sit over busy imagery.
- Text is projection-safe and tables are legible.
- Structural prompt labels do not appear in the rendered slides.
- The file opens correctly and the page count is verified when generating PPTX.

## 8. Reusable Prompt Shell

Use the following order when composing a NotebookLM prompt. Replace every bracketed item with final content; do not return bracketed placeholders to the user.

### A. Courseware Basic Information

- Title
- Primary viewers and capability constraints
- Presenter and use case
- Teaching duration
- Exact page count and aspect ratio
- Classroom setting
- Culminating action or artifact
- Required or optional materials

### B. Learning Goals

- 3-5 observable audience-appropriate goals
- Include an action goal and a final output goal whenever the lesson permits

### C. Overall Visual Goal

- Audience-specific style and emotional tone
- Palette and background
- Illustration or photo rules
- Recurring-character rules
- Text density and projection rules
- Forbidden aesthetics

### D. Page-by-Page Requirements

For every page, specify:

- Visible title
- Exact visible wording
- Visual scene or information design
- Executable interaction when applicable
- Teacher-note intent when supported

### E. Generation Checks

- Exact page count
- Complete coverage
- Audience fit
- Teacher readiness
- Interaction operability
- Final artifact readiness
- Visual consistency
- No structural labels on slides
