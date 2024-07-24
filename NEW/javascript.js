function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  // Mengambil parameter dari URL
  var Card = e.parameter.Card;
  var Company = e.parameter.Company;

  // Menambahkan baris baru ke spreadsheet dengan timestamp, nama barang
  sheet.appendRow([new Date(), Card, Company]);

  // Menampilkan pesan sukses
  return ContentService.createTextOutput("Success");
}
