# دليل الإعداد السريع - نظام التتبع البسيط

هذا النظام يستخدم JSONBin.io - خدمة مجانية وسهلة جداً!

## الميزات

- ✅ عداد الزيارات الكلي
- ✅ قائمة بكل زيارة مع التاريخ والوقت
- ✅ لا يحتاج سيرفر
- ✅ لا يحتاج تسجيل دخول
- ✅ مجاني تماماً

## خطوات الإعداد (5 دقائق فقط!)

### الخطوة 1: إنشاء حساب JSONBin

1. اذهب إلى [jsonbin.io](https://jsonbin.io)
2. اضغط "Sign Up" أو "Login with GitHub"
3. سجل الدخول (مجاني)

### الخطوة 2: إنشاء Bin جديد

1. بعد تسجيل الدخول، اضغط "+ Create New Bin"
2. في محرر JSON، أدخل:
```json
{
  "totalVisits": 0,
  "visits": []
}
```
3. اضغط "Create"

### الخطوة 3: الحصول على JSONBin ID

1. بعد الإنشاء، سترى Bin جديد
2. رابط Bin سيكون مثل:
   ```
   https://jsonbin.io/your-username/your-bin-id
   ```
3. **JSONBin ID** هو الجزء الأخير من الرابط (مثلاً: `65f1a2b3c4d5e6f7g8h9i0j1`)

### الخطوة 4: الحصول على API Key

1. اضغط على أيقونة "API Keys" في القائمة الجانبية
2. اضغط "Create New API Key"
3. أدخل اسم (مثلاً: "tracking")
4. اضغط "Create"
5. انسخ الـ API Key (يبدأ بـ `$2a$10$...`)

### الخطوة 5: تحديث tracker-simple.js

افتح ملف `tracker-simple.js` واستبدل:

```javascript
const JSONBIN_ID = 'YOUR_JSONBIN_ID';
const JSONBIN_API_KEY = 'YOUR_JSONBIN_API_KEY';
```

مع:
```javascript
const JSONBIN_ID = '65f1a2b3c4d5e6f7g8h9i0j1'; // معرف Bin الخاص بك
const JSONBIN_API_KEY = '$2a$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // API Key الخاص بك
```

### الخطوة 6: رفع الملفات إلى GitHub

ارفع الملفات التالية:
- `lectures.html` (مع tracker-simple.js)
- `stats-simple.html`
- `tracker-simple.js` (المحدث)

### الخطوة 7: تفعيل GitHub Pages

1. Settings → Pages
2. Source = "Deploy from a branch"
3. Branch = "main", Folder = "/ (root)"
4. Save

### الخطوة 8: عرض الإحصائيات

1. افتح `stats-simple.html` على GitHub Pages
2. أدخل JSONBin ID و API Key
3. اضغط "حفظ الإعدادات"
4. شاهد الإحصائيات!

## البيانات المحفوظة

البيانات ستكون بهذا الشكل:
```json
{
  "totalVisits": 150,
  "visits": [
    {
      "date": "٢٠/١٠/٢٠٢٤",
      "time": "١٥:٣٠:٤٥",
      "timestamp": "2024-10-20T15:30:45.000Z"
    },
    {
      "date": "٢٠/١٠/٢٠٢٤",
      "time": "١٦:٤٥:٢٠",
      "timestamp": "2024-10-20T16:45:20.000Z"
    }
  ]
}
```

## الحدود المجانية (JSONBin Free Tier)

- 10,000 طلب يومياً
- 1 MB حجم البيانات
- 50 Bin

م suffisant للمواقع الصغيرة!

## الأمان

- لا تشارك API Key مع أحد
- يمكنك إنشاء API Key قراءة فقط إذا أردت فقط عرض الإحصائيات
- JSONBin آمن للبيانات البسيطة

## استكشاف الأخطاء

### التتبع لا يعمل

تأكد من:
- JSONBin ID صحيح في tracker-simple.js
- API Key صحيح
- Console في المتصفح لا يظهر أخطاء

### الإحصائيات لا تظهر

تأكد من:
- إدخال JSONBin ID و API Key في stats-simple.html
- Bin موجود ونشط
- API Key لديه صلاحيات قراءة

### البيانات لا تُحفظ

تأكد من:
- API Key لديه صلاحيات كتابة
- لم تتجاوز الحدود المجانية

## الملفات المطلوبة للرفع

- `lectures.html`
- `stats-simple.html`
- `tracker-simple.js`
- `.gitignore`

## الملفات التي لا ترفع

- أي ملفات تنتهي بـ `_backup`
- الملفات القديمة (worker.js, wrangler.toml, tracker.js, admin.html)
