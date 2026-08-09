#!/usr/bin/env python3

import argparse
from pathlib import Path

from docx import Document
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor


DEFAULT_FONT = "Hiragino Sans GB"


def set_run_font(run, font_name=DEFAULT_FONT, size=12, bold=False, color=None):
    run.font.name = font_name
    for slot in ("w:ascii", "w:hAnsi", "w:eastAsia", "w:cs"):
        run._element.rPr.rFonts.set(qn(slot), font_name)
    run.font.size = Pt(size)
    run.bold = bold
    if color:
        run.font.color.rgb = RGBColor.from_string(color)


def set_cell_shading(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), fill)
    tc_pr.append(shd)


def set_cell_border(cell, color="8AA07D", size="8"):
    tc_pr = cell._tc.get_or_add_tcPr()
    borders = tc_pr.first_child_found_in("w:tcBorders")
    if borders is None:
        borders = OxmlElement("w:tcBorders")
        tc_pr.append(borders)
    for edge in ("top", "left", "bottom", "right"):
        elem = borders.find(qn(f"w:{edge}"))
        if elem is None:
            elem = OxmlElement(f"w:{edge}")
            borders.append(elem)
        elem.set(qn("w:val"), "single")
        elem.set(qn("w:sz"), size)
        elem.set(qn("w:color"), color)


def format_body_paragraph(paragraph, indent=True, spacing=1.42):
    pf = paragraph.paragraph_format
    pf.line_spacing_rule = WD_LINE_SPACING.MULTIPLE
    pf.line_spacing = spacing
    pf.space_after = Pt(0)
    pf.space_before = Pt(0)
    pf.widow_control = True
    if indent:
        pf.first_line_indent = Cm(0.74)


def add_title(doc, title, font_name=DEFAULT_FONT):
    paragraph = doc.add_paragraph()
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    paragraph.paragraph_format.space_after = Pt(6)
    paragraph.paragraph_format.keep_with_next = True
    run = paragraph.add_run(title)
    set_run_font(run, font_name=font_name, size=18, bold=True, color="234B3A")


def add_board_table(doc, lines, font_name=DEFAULT_FONT):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True
    cell = table.cell(0, 0)
    set_cell_shading(cell, "F6F3E7")
    set_cell_border(cell, color="A8925D", size="10")
    cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
    cell.text = ""
    paragraph = cell.paragraphs[0]
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    paragraph.paragraph_format.space_before = Pt(4)
    paragraph.paragraph_format.space_after = Pt(4)
    paragraph.paragraph_format.line_spacing_rule = WD_LINE_SPACING.MULTIPLE
    paragraph.paragraph_format.line_spacing = 1.2
    run = paragraph.add_run("\n".join(lines))
    set_run_font(run, font_name=font_name, size=10.5, color="4A463A")


def build_doc(md_path, out_path, mode, font_name=DEFAULT_FONT):
    lines = Path(md_path).read_text(encoding="utf-8").splitlines()
    doc = Document()
    sec = doc.sections[0]
    sec.top_margin = Cm(2.5)
    sec.bottom_margin = Cm(2.5)
    sec.left_margin = Cm(2.8)
    sec.right_margin = Cm(2.8)

    normal = doc.styles["Normal"]
    normal.font.name = font_name
    for slot in ("w:ascii", "w:hAnsi", "w:eastAsia", "w:cs"):
        normal._element.rPr.rFonts.set(qn(slot), font_name)
    normal.font.size = Pt(12)

    title = ""
    current_heading = ""
    in_code = False
    board_buffer = []

    for raw in lines:
        line = raw.rstrip()
        stripped = line.strip()

        if stripped.startswith("# "):
            title = stripped[2:].strip()
            continue

        if not title:
            continue

        if not doc.paragraphs:
            add_title(doc, title, font_name=font_name)

        if stripped.startswith("```"):
            in_code = not in_code
            if not in_code and board_buffer:
                add_board_table(doc, board_buffer, font_name=font_name)
                board_buffer = []
            continue

        if in_code:
            if "板书设计" in current_heading:
                board_buffer.append(line)
            continue

        if not stripped:
            continue

        if stripped.startswith("## "):
            current_heading = stripped[3:].strip()
            paragraph = doc.add_paragraph()
            paragraph.paragraph_format.space_before = Pt(8)
            paragraph.paragraph_format.space_after = Pt(2)
            paragraph.paragraph_format.keep_with_next = True
            run = paragraph.add_run(current_heading)
            set_run_font(run, font_name=font_name, size=13.5, bold=True, color="2E5A4A")
            continue

        if stripped.startswith("### "):
            current_heading = stripped[4:].strip()
            paragraph = doc.add_paragraph()
            paragraph.paragraph_format.space_before = Pt(6)
            paragraph.paragraph_format.space_after = Pt(1)
            paragraph.paragraph_format.keep_with_next = True
            run = paragraph.add_run(current_heading)
            set_run_font(run, font_name=font_name, size=12, bold=True, color="3D5C7A")
            continue

        if stripped.startswith("- "):
            paragraph = doc.add_paragraph(style="List Bullet")
            pf = paragraph.paragraph_format
            pf.line_spacing_rule = WD_LINE_SPACING.MULTIPLE
            pf.line_spacing = 1.3
            pf.space_before = Pt(0)
            pf.space_after = Pt(0)
            run = paragraph.add_run(stripped[2:].strip())
            set_run_font(run, font_name=font_name, size=11.5)
            continue

        if stripped.startswith("**") and stripped.endswith("**") and stripped.count("**") == 2:
            paragraph = doc.add_paragraph()
            paragraph.paragraph_format.space_before = Pt(4)
            paragraph.paragraph_format.space_after = Pt(0)
            paragraph.paragraph_format.keep_with_next = True
            run = paragraph.add_run(stripped[2:-2])
            set_run_font(run, font_name=font_name, size=11.5, bold=True, color="444444")
            continue

        short_centered = (
            mode == "script"
            and len(stripped) <= 22
            and any(token in stripped for token in ("；", "。", "：", "，"))
            and not stripped.startswith(("同学们", "老师", "为什么", "所以", "现在", "下面", "最后", "如果", "请", "来"))
        )
        no_indent = stripped.endswith("：") or stripped.startswith(
            (
                "人人有地块",
                "讲台前排净",
                "卫生角整理",
                "值日分工好",
                "扫帚拖把靠墙站",
                "簸箕挂好不添乱",
                "垃圾入桶套好袋",
                "抹布洗净挂起晒",
                "我承诺",
                "值日生，真光荣",
                "你扫地",
                "教室美",
                "一个班级",
            )
        )

        paragraph = doc.add_paragraph()
        format_body_paragraph(
            paragraph,
            indent=not no_indent,
            spacing=1.42 if mode == "script" else 1.35,
        )
        if short_centered:
            paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
            paragraph.paragraph_format.first_line_indent = Cm(0)
        run = paragraph.add_run(stripped)
        set_run_font(run, font_name=font_name, size=12 if mode == "script" else 11.5)

    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    doc.save(out_path)


def parse_args():
    parser = argparse.ArgumentParser(
        description="Export any subset of detailed script, preview script, and lesson plan to separate Word documents."
    )
    parser.add_argument("--script-md", help="Path to the detailed script Markdown file")
    parser.add_argument("--script-docx", help="Output path for the detailed script Word file")
    parser.add_argument("--preview-md", help="Path to the preview script Markdown file")
    parser.add_argument("--preview-docx", help="Output path for the preview script Word file")
    parser.add_argument("--lesson-md", help="Path to the lesson plan Markdown file")
    parser.add_argument("--lesson-docx", help="Output path for the lesson plan Word file")
    parser.add_argument(
        "--font",
        default=DEFAULT_FONT,
        help=f"Chinese font to write into every Word font slot (default: {DEFAULT_FONT})",
    )
    args = parser.parse_args()
    pairs = (
        ("--script-md", args.script_md, "--script-docx", args.script_docx),
        ("--preview-md", args.preview_md, "--preview-docx", args.preview_docx),
        ("--lesson-md", args.lesson_md, "--lesson-docx", args.lesson_docx),
    )
    for md_flag, md_path, out_flag, out_path in pairs:
        if bool(md_path) != bool(out_path):
            parser.error(f"{md_flag} and {out_flag} must be supplied together")
    if not any((args.script_md, args.preview_md, args.lesson_md)):
        parser.error("supply at least one Markdown/output pair")
    return args


def main():
    args = parse_args()
    if args.script_md:
        build_doc(args.script_md, args.script_docx, mode="script", font_name=args.font)
    if args.preview_md:
        build_doc(args.preview_md, args.preview_docx, mode="script", font_name=args.font)
    if args.lesson_md:
        build_doc(args.lesson_md, args.lesson_docx, mode="lesson", font_name=args.font)


if __name__ == "__main__":
    main()
