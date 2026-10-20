/**
 * نظام تتبع بسيط - JSONBin.io
 * يحفظ عدد الزيارات + قائمة بالزيارات مع التاريخ والوقت
 */

// معرفات JSONBin
const JSONBIN_ID = '6ad757f1ffd5d160537bcba8';
const JSONBIN_API_KEY = '$2a$10$5XV4cv13WAX9LKpYN8sl.eYlUl2h60NrVCa43JwI5egkKyoucMRoO';

// إضافة زيارة جديدة
async function addVisit() {
  try {
    // قراءة البيانات الحالية
    const readResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY
      }
    });

    if (!readResponse.ok) {
      throw new Error('فشل قراءة البيانات');
    }

    const readData = await readResponse.json();
    let currentData = readData.record;

    // إذا كانت البيانات فارغة، أنشئها
    if (!currentData) {
      currentData = {
        totalVisits: 0,
        visits: []
      };
    }

    // إضافة زيارة جديدة
    const now = new Date();
    const newVisit = {
      date: now.toLocaleDateString('ar-EG'),
      time: now.toLocaleTimeString('ar-EG'),
      timestamp: now.toISOString()
    };

    currentData.totalVisits++;
    currentData.visits.push(newVisit);

    // حفظ البيانات المحدثة
    const writeResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify(currentData)
    });

    if (!writeResponse.ok) {
      throw new Error('فشل حفظ البيانات');
    }

    // تمت إضافة الزيارة بنجاح (تم إخفاء الرسائل من Console)

  } catch (error) {
    // خطأ في التتبع (تم إخفاء الرسائل من Console)
  }
}

// تنفيذ عند تحميل الصفحة
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addVisit);
} else {
  addVisit();
}
