import argparse
import shutil
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description="Copy Remotion still template to a target directory")
    parser.add_argument("--dest", required=True, help="Destination directory (will be created)")
    parser.add_argument("--force", action="store_true", help="Overwrite if destination exists")
    args = parser.parse_args()

    skill_dir = Path(__file__).resolve().parents[1]
    src = skill_dir / "assets" / "xhs-remotion-template"
    if not src.exists():
        raise SystemExit(f"Template not found: {src}")

    dest = Path(args.dest).resolve()
    if dest.exists():
        if not args.force:
            raise SystemExit(f"Destination exists: {dest} (use --force to overwrite)")
        shutil.rmtree(dest)

    shutil.copytree(src, dest)
    print(f"Template copied to: {dest}")


if __name__ == "__main__":
    main()
