import calendar
from datetime import datetime

from fastapi import FastAPI
import i18n

app = FastAPI()
DEFAULT_LANGUAGE = "en"

i18n.set("file_format", "json")
i18n.set("filename_format", "{namespace}.{format}")
i18n.set("skip_locale_root_data", True)
i18n.set("use_locale_dirs", True)
i18n.load_path.append("public/locales")


@app.get("/today/")
async def today(language: str = DEFAULT_LANGUAGE):
    day: str = calendar.day_name[datetime.today().weekday()].lower()
    i18n.set("locale", language)
    i18n.set("fallback", DEFAULT_LANGUAGE)
    return {"day": i18n.t(f"translation.{day}"), "language": language, "key": day}
