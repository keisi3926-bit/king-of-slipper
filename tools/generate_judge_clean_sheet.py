from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "judge-insiders-sheet.png"
OUTPUT = ROOT / "assets" / "judge-insiders-clean.png"


def main():
    source = Image.open(SOURCE).convert("RGB")
    width, height = source.size
    label_width = 280
    header_height = 106
    cols = 4
    rows = 6
    cell_width = (width - label_width) / cols
    cell_height = (height - header_height) / rows
    icon_size = 256
    crop_size = int(min(cell_width - 18, cell_height - 18, 154))
    sheet = Image.new("RGB", (icon_size * cols, icon_size * rows), (250, 250, 248))

    for row in range(rows):
        for col in range(cols):
            cell_left = label_width + col * cell_width
            cell_top = header_height + row * cell_height
            cell_right = cell_left + cell_width
            cell_bottom = cell_top + cell_height

            focus_x = cell_left + cell_width * 0.57
            focus_y = cell_top + cell_height * 0.55
            half = crop_size / 2
            left = max(cell_left + 8, min(focus_x - half, cell_right - crop_size - 8))
            top = max(cell_top + 8, min(focus_y - half, cell_bottom - crop_size - 8))
            box = (
                int(round(left)),
                int(round(top)),
                int(round(left + crop_size)),
                int(round(top + crop_size)),
            )
            crop = source.crop(box).resize((icon_size, icon_size), Image.Resampling.LANCZOS)
            sheet.paste(crop, (col * icon_size, row * icon_size))

    sheet.save(OUTPUT)
    print(f"wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
