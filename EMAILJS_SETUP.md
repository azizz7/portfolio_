# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form functionality in the portfolio website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, click on "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended):
   - **Gmail**: Select "Gmail" and connect your Google account
   - **Outlook**: Select "Outlook" and connect your Microsoft account
   - **Custom SMTP**: Use any email provider with SMTP settings

4. Give your service a name (e.g., "Portfolio Contact")
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. In the EmailJS dashboard, click on "Email Templates"
2. Click "Create New Template"
3. Set up your template with the following content:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: New Contact Form Message from {{from_name}}

### Template Content:
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Template Variables:
Make sure these variables are included:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content

4. Set the "To Email" to: `azizbarwani5253@gmail.com`
5. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. In the EmailJS dashboard, go to "Account" → "General"
2. Find your **Public Key** (User ID)
3. Copy this key

## Step 5: Set Environment Variables

1. Create a `.env.local` file in your project root directory
2. Add the following variables with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important**: 
- Replace the placeholder values with your actual EmailJS credentials
- The `.env.local` file is already included in `.gitignore` so your keys won't be committed to version control
- All environment variables must start with `REACT_APP_` to be accessible in React

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (`azizbarwani5253@gmail.com`) for the test message

## Troubleshooting

### Common Issues:

1. **"Failed to send message"**
   - Check if all environment variables are correctly set
   - Verify Service ID, Template ID, and Public Key are correct
   - Ensure your email service is properly connected

2. **Environment variables not working**
   - Make sure they start with `REACT_APP_`
   - Restart your development server after adding variables
   - Check for typos in variable names

3. **Template not receiving variables**
   - Verify template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Check that the template is saved and active

### Testing Template:
You can test your template directly in the EmailJS dashboard:
1. Go to your template
2. Click "Test It"
3. Fill in test values and send

## Production Deployment

For Vercel deployment:
1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the same three environment variables:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
4. Redeploy your project

## Security Notes

- EmailJS Public Key is safe to expose in client-side code
- The `.env.local` file keeps your keys secure during development
- For production, use Vercel's environment variables feature
- Consider setting up rate limiting in EmailJS dashboard to prevent spam

## Support

If you encounter issues:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. Verify your EmailJS dashboard for any error messages
3. Check browser console for any JavaScript errors
4. Test the EmailJS service directly from their dashboard

---

**Note**: The contact form is already implemented and ready to use once EmailJS is properly configured.
