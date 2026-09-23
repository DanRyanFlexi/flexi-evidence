# Flexi Evidence Capture v4 — SharePoint Setup Guide

## What you need to do (one-time setup, ~15 minutes)

---

## Step 1 — Create the SharePoint Site

1. Go to your Microsoft 365 admin or SharePoint home
2. Create a new **Team Site** called:
   ```
   Flexi Evidence Capture
   ```
3. Note the URL — it will look like:
   ```
   https://youthpluseduau.sharepoint.com/sites/FlexiEvidence
   ```

---

## Step 2 — Create the Students List

1. On the new site, click **New → List**
2. Name it exactly: `Students`
3. Add these columns (all Single line of text unless noted):

| Column Name | Type |
|---|---|
| FirstName | Single line of text |
| LastName | Single line of text |
| YearLevel | Single line of text |
| Campus | Choice: FAME, Elizabeth, Davoren Park, Geraldton, Other |

---

## Step 3 — Create the Evidence Records List

1. Click **New → List**
2. Name it exactly: `EvidenceRecords`
3. Add these columns:

| Column Name | Type |
|---|---|
| StudentName | Single line of text |
| StudentID | Single line of text |
| AdjustmentTypes | Multiple lines of text |
| Observation | Multiple lines of text |
| Impact | Multiple lines of text |
| StaffName | Single line of text |
| Campus | Choice: FAME, Elizabeth, Davoren Park, Geraldton, Other |
| ReviewDate | Date and Time |
| CapturedDate | Date and Time |

4. Enable **Attachments** on the list (Settings → Advanced → Attachments: Enabled)

---

## Step 4 — Set Permissions

Grant access to all staff who will use the app:
1. Site Settings → Site Permissions
2. Add staff as **Members** (can add/edit their own records)
3. Add site leaders as **Owners** (can view all records)

---

## Step 5 — Host the App Files

Upload all 4 files to a SharePoint Document Library:
- `flexi-evidence-pwa.html`
- `manifest.json`
- `sw.js`
- `icon-192.png`
- `icon-512.png`

**Important:** SharePoint blocks direct HTML execution.
Use one of these options instead:

### Option A — Azure Static Web App (Recommended)
Free hosting that works perfectly on iPhone:
1. Go to portal.azure.com
2. Create a Static Web App (free tier)
3. Upload the 5 files
4. Share the generated URL with staff

### Option B — GitHub Pages (Free)
1. Create a private GitHub repo
2. Upload the 5 files
3. Enable GitHub Pages
4. Share the URL

### Option C — Ask your IT team
Request a simple web hosting location within your M365 tenant.

---

## Step 6 — Connect the App

1. Open the app URL in Safari (iPhone) or Chrome (Android)
2. Tap **Settings** (bottom nav)
3. Enter your SharePoint Site URL
4. Tap **Test** to confirm connection
5. Tap **Save & Connect**

---

## Step 7 — Install on Staff Phones

### iPhone (Safari)
1. Open the app URL in **Safari** (not Chrome)
2. Tap the **Share** button (box with arrow)
3. Scroll down → **Add to Home Screen**
4. Tap **Add**

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap the **⋮ menu**
3. Tap **Add to Home Screen** or **Install App**

---

## That's it! 🎉

Staff will see the Flexi Evidence icon on their home screen.
All evidence syncs automatically to SharePoint after saving.
Site leaders can view all records in the SharePoint list directly.

---

## Troubleshooting

**"Sync failed"** → Make sure staff are signed in to Microsoft 365 in their browser before opening the app.

**Camera not working** → App must be served over HTTPS (Azure/GitHub Pages handles this automatically).

**SharePoint test fails** → Check the site URL has no trailing slash and staff have Member permissions.
