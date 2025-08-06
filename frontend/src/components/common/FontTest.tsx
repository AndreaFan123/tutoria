import { getFontClassByLocale } from "@/lib/utils";

interface FontTestProps {
  locale: string;
}

export default function FontTest({ locale }: FontTestProps) {
  const fontClass = getFontClassByLocale(locale);

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-4">Font Test - {locale}</h3>

      <div className={`${fontClass} text-xl mb-4`}>
        {locale === "zh-TW" ? (
          <>
            <p>這是繁體中文字體測試</p>
            <p>使用 Noto Sans TC 字體</p>
            <p>English text mixed with Chinese</p>
          </>
        ) : (
          <>
            <p>This is English font test</p>
            <p>Using Mulish font</p>
            <p>Mixed with 中文文字</p>
          </>
        )}
      </div>

      <div className="text-sm text-gray-600">
        <p>Font Class: {fontClass}</p>
        <p>Locale: {locale}</p>
      </div>
    </div>
  );
}
