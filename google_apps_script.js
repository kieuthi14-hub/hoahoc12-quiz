// ==========================================
// MÃ GOOGLE APPS SCRIPT CHO MÔN HÓA HỌC 12
// Dành cho cô Trương Thùy Linh Kiều
// ==========================================

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var submissions = [];
  
  for (var i = 1; i < data.length; i++) {
    submissions.push({
      timestamp: data[i][0],
      subCode: data[i][1],
      name: data[i][2],
      className: data[i][3],
      lesson: data[i][4],
      score: data[i][5],
      correctCount: data[i][6],
      timeElapsed: data[i][7],
      tabSwitchCount: data[i][8],
      isViolation: data[i][9]
    });
  }
  
  return ContentService.createTextOutput(JSON.stringify({ submissions: submissions }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Tự động tạo hàng tiêu đề nếu bảng đang trống
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Thời gian nộp",
      "Mã nộp bài",
      "Họ và tên học sinh",
      "Lớp",
      "Bài học",
      "Điểm số (/10)",
      "Số câu đúng",
      "Thời gian làm",
      "Số lần rời màn hình",
      "Vi phạm thi"
    ]);
  }
  
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp || new Date(),
    data.subCode,
    data.name,
    data.className,
    data.lesson,
    data.score,
    data.correctCount,
    data.timeElapsed,
    data.tabSwitchCount || 0,
    data.isViolation ? "CÓ" : "KHÔNG"
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
