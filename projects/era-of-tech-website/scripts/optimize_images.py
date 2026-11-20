"""Convert raw portfolio screenshots (../screenshots/*.png) into optimised WebP files
in public/images/work/. Run: npm run images  (needs Python 3 + Pillow)."""
from pathlib import Path
from PIL import Image

SRC = Path(__file__).resolve().parents[2] / "screenshots"
OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "work"
OUT.mkdir(parents=True, exist_ok=True)

# source file stem -> case-study slug
MAP = {
    "staging": "carpl",
    "plaiss": "plaiss",
    "camelia": "camelia",
    "silverstorey": "silver-storey",
    "robam-uae": "robam-uae",
    "drdolor": "dr-dolor",
}

for stem, slug in MAP.items():
    for suffix, widths in (("", (1440, 800)), ("-mobile", (390,))):
        src = SRC / f"{stem}{suffix}.png"
        if not src.exists():
            print("missing", src); continue
        im = Image.open(src).convert("RGB")
        for w in widths:
            img = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            name = f"{slug}{suffix}" + ("" if w == widths[0] else f"-{w}") + ".webp"
            img.save(OUT / name, "WEBP", quality=78, method=6)
            print("wrote", name, img.size, (OUT / name).stat().st_size // 1024, "KB")
