# 🚀 Deployment Guide - Tech Intervention

## Quick Start Deployment

### Step 1: Supabase Setup (5 minutes)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose a name: `tech-intervention`
   - Set a strong database password (save it!)
   - Select region closest to your users (Europe for Romania)

2. **Run Database Schema**
   - In Supabase dashboard, go to **SQL Editor**
   - Click "New Query"
   - Copy entire contents of `supabase/schema.sql`
   - Click "Run" or press `Ctrl+Enter`
   - Verify: You should see 4 tables created (tickets, leads, testimonials, ticket_status_history)

3. **Get API Credentials**
   - Go to **Project Settings** → **API**
   - Copy these two values:
     - `Project URL` (looks like: https://xxxxx.supabase.co)
     - `anon public` key (long string starting with "eyJ...")

### Step 2: Vercel Deployment (3 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tech Intervention website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   Before deploying, add these in Vercel:
   
   ```
   NEXT_PUBLIC_SUPABASE_URL = <your-supabase-project-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY = <your-supabase-anon-key>
   NEXT_PUBLIC_SITE_URL = <your-vercel-domain>
   ```

4. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Step 3: Post-Deployment Configuration

1. **Update Site URL**
   - After first deploy, copy your Vercel URL (e.g., `tech-intervention.vercel.app`)
   - Go back to Vercel → Settings → Environment Variables
   - Update `NEXT_PUBLIC_SITE_URL` with your actual domain
   - Redeploy (Deployments → click "..." → Redeploy)

2. **Test Key Features**
   - [ ] Contact form submits to Supabase
   - [ ] Repair tracker works with test ticket
   - [ ] Testimonials display correctly
   - [ ] All links work
   - [ ] Mobile responsive

3. **SEO Setup**
   - Submit sitemap to Google Search Console: `your-domain.com/sitemap.xml`
   - Add Google Analytics (optional)
   - Update Google verification code in `app/layout.tsx`

### Step 4: Create Test Data

To test the Repair Tracker, add a test ticket in Supabase:

1. Go to Supabase → **Table Editor** → **tickets**
2. Click "Insert row"
3. Fill in:
   ```
   customer_name: Test User
   email: test@example.com
   phone: 0712345678
   device_brand: Dell
   device_model: XPS 15
   service_type: screen_replacement
   problem_description: Screen cracked
   status: diagnosing
   is_emergency: false
   ```
4. The ticket_number will auto-generate (e.g., `TI-260131-001`)
5. Test the tracker with this ticket number!

## Custom Domain Setup

### Option 1: Buy Domain (Recommended)

1. **Purchase domain** (e.g., `techintervention.ro` from a registrar)
2. In Vercel → Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

### Option 2: Use Free Vercel Domain

Your site is already live at: `your-project.vercel.app`

## Advanced Configuration

### Email Notifications (Future Enhancement)

To add email notifications when forms are submitted:

1. Use Supabase Edge Functions or
2. Set up Vercel Serverless Functions with:
   - SendGrid
   - Resend
   - AWS SES

### Analytics Setup

Add to `app/layout.tsx`:

```typescript
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Monitoring

Recommended tools:
- **Vercel Analytics** (built-in, enable in dashboard)
- **Sentry** for error tracking
- **Uptime Robot** for uptime monitoring

## Troubleshooting

### Issue: Contact form not submitting

**Solution**: Check Supabase RLS policies
```sql
-- Run this in Supabase SQL Editor
SELECT * FROM pg_policies WHERE tablename = 'leads';
```
Ensure "Public can insert leads" policy exists.

### Issue: Repair tracker not finding tickets

**Solution**: 
1. Verify ticket exists in Supabase
2. Check ticket_number format is uppercase: `TI-260131-001`
3. Verify Supabase URL in environment variables

### Issue: Testimonials not showing

**Solution**: 
```sql
-- Approve sample testimonials
UPDATE testimonials SET approved = true WHERE approved = false;
```

### Issue: Build fails on Vercel

**Solution**: Check the build logs. Common issues:
- Missing environment variables
- TypeScript errors
- Dependency issues (run `npm install` locally to verify)

## Maintenance

### Regular Tasks

**Weekly**:
- Check for new contact form submissions in Supabase
- Review and approve new testimonials
- Update ticket statuses

**Monthly**:
- Review analytics
- Update service prices if needed
- Backup Supabase database

### Database Backups

Supabase provides automatic backups, but for extra safety:

1. Go to Supabase → Database → Backups
2. Enable automatic backups
3. Or manually export: `pg_dump` via CLI

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check Supabase logs (Logs & Observability)
3. Verify environment variables are set correctly
4. Clear browser cache and test in incognito

## Security Checklist

- [x] Supabase RLS policies enabled
- [x] Environment variables secured (not committed to git)
- [x] HTTPS enabled (automatic with Vercel)
- [ ] Add rate limiting (use Vercel Edge Config)
- [ ] Set up CORS if needed
- [ ] Enable Supabase auth for admin dashboard (future)

---

**Estimated Total Setup Time**: 10-15 minutes

**Cost**: 
- Supabase: Free tier (up to 500MB database, 50K monthly active users)
- Vercel: Free tier (100GB bandwidth, unlimited deployments)
- **Total**: $0/month for MVP 🎉
