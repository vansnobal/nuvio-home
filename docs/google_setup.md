
# Google Sheets & Apps Script Setup Guide

Follow these steps to create your own "backend" for collecting email subscriptions using Google Sheets.

## 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like `Nuvio Email Subscribers`.
3. In the first row, set the headers:
   - A1: `Date`
   - B1: `Email`

## 2. Open Apps Script
1. Click on **Extensions** > **Apps Script** in the menu bar.
2. Rename the project to `Email Collector` (top left).
3. Delete any code in the `Code.gs` file and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([new Date(), data.email]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy as Web App
1. Click on the blue **Deploy** button > **New deployment**.
2. Click the gear icon (Select type) > **Web app**.
3. Fill in the details:
   - **Description**: Email Collector
   - **Execute as**: Me (your email) -> *Important!*
   - **Who has access**: **Anyone** -> *Crucial! This allows the website to send data without login.*
4. Click **Deploy**.
5. During the first deployment, you will be asked to **Authorize access**.
   - Click "Review permissions".
   - Choose your account.
   - You might see "Google hasn't verified this app" (since you just made it). Click **Advanced** > **Go to Email Collector (unsafe)**.
   - Click **Allow**.

## 4. Copy the Web App URL
1. Copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).
2. You will need to paste this URL into the `SubscribeModal` component in the frontend code.
