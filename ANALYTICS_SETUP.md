# Google Analytics Setup Guide

This guide will help you set up Google Analytics to track traffic on your portfolio website.

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"** or **"Admin"** (gear icon)
4. Click **"Create Account"**
5. Enter an account name (e.g., "William Bryant Portfolio")
6. Configure data-sharing settings (optional)
7. Click **"Next"**

## Step 2: Set Up a Property

1. Property name: "Portfolio Website"
2. Reporting time zone: Select your time zone
3. Currency: USD (or your preference)
4. Click **"Next"**

## Step 3: Add Business Information

1. Industry category: "Arts & Entertainment"
2. Business size: Select appropriate size
3. How you plan to use Analytics: Check relevant options
4. Click **"Create"**
5. Accept the Terms of Service

## Step 4: Set Up Data Stream

1. Choose platform: **"Web"**
2. Website URL: `https://williamrenebryant.com` (or your actual domain)
3. Stream name: "Portfolio Website"
4. Click **"Create stream"**

## Step 5: Get Your Measurement ID

1. After creating the stream, you'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`
2. Copy this ID

## Step 6: Add to Your Website

1. Open the file: `/app/layout.tsx`
2. Find all instances of `GA_MEASUREMENT_ID`
3. Replace with your actual Measurement ID (e.g., `G-ABC123XYZ`)

**Before:**
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

**After:**
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"
  strategy="afterInteractive"
/>
```

Also update the second instance in the inline script:
```javascript
gtag('config', 'G-ABC123XYZ');
```

## Step 7: Deploy and Test

1. Deploy your updated website
2. Visit your live website
3. In Google Analytics, go to **Reports** → **Realtime**
4. You should see your visit appear within seconds

## What You Can Track

Once set up, Google Analytics will show you:

- **Visitors**: How many people visit your site
- **Page Views**: Which pages are most popular
- **Traffic Sources**: How people find you (Google search, Instagram, direct, etc.)
- **Demographics**: Age, gender, location of your audience
- **Devices**: Desktop vs mobile traffic
- **Behavior Flow**: How users navigate through your site

## Useful Reports for Actors

- **Acquisition Overview**: See which social media or websites send you traffic
- **Pages and Screens**: Which performances/projects get the most views
- **Events**: Track clicks on your demo reels, resume downloads, contact form submissions

## Privacy Considerations

Google Analytics is GDPR compliant when configured properly. For enhanced privacy:
- Consider adding a privacy policy page
- Enable IP anonymization (already configured in the setup)
- Inform users about cookie usage

## Alternative: Plausible Analytics

If you prefer a privacy-focused, simpler alternative:
- [Plausible.io](https://plausible.io/) - Lightweight, no cookies, GDPR compliant
- Costs $9/month but much simpler and more privacy-friendly
- Let me know if you'd prefer this instead!

## Need Help?

If you run into any issues or have questions about the setup, feel free to ask!
