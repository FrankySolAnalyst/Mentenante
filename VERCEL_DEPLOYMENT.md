# 🚀 Vercel Deployment Guide - Tech Intervention

## ✅ Quick Deploy to Vercel (5 Minutes)

Your website is ready to go live! Follow these steps:

---

## 📋 Prerequisites

Before deploying, make sure you have:
- [x] GitHub repository created (or ready to create)
- [x] Supabase project set up
- [x] Supabase credentials ready

---

## 🚀 Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

#### Step 1: Push to GitHub (If Not Done)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Tech Intervention website"

# Add GitHub remote (replace with YOUR repo URL)
git remote add origin https://github.com/YOUR_USERNAME/tech-intervention.git

# Push
git push -u origin main
```

#### Step 2: Import to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub account
3. **Click "Add New..."** → **"Project"**
4. **Import your GitHub repository**
   - Find `tech-intervention` in the list
   - Click "Import"

#### Step 3: Configure Project

Vercel will auto-detect Next.js settings:

**Framework Preset**: Next.js ✅ (auto-detected)
**Root Directory**: `./` ✅ (default)
**Build Command**: `npm run build` ✅ (auto-filled)
**Output Directory**: `.next` ✅ (auto-filled)

#### Step 4: Add Environment Variables

**CRITICAL:** Add these before deploying!

Click **"Environment Variables"** and add:

| Name | Value | Source |
|------|-------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SITE_URL` | Leave empty for now | Will update after first deploy |

**How to get Supabase credentials:**
1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Go to Settings → API
4. Copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

#### Step 5: Deploy!

1. **Click "Deploy"**
2. **Wait 2-3 minutes** while Vercel builds
3. **Success!** Your site is live 🎉

You'll get a URL like:
```
https://tech-intervention-xxxxx.vercel.app
```

#### Step 6: Update Site URL

1. **Copy your Vercel URL**
2. Go back to **Vercel Dashboard** → **Settings** → **Environment Variables**
3. **Edit** `NEXT_PUBLIC_SITE_URL`
4. **Paste** your Vercel URL
5. **Save**
6. **Redeploy**: Deployments → click "..." → "Redeploy"

---

### Option 2: Deploy without GitHub (Quick Test)

If you want to test without GitHub:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Choose your account
# - Link to existing project? No
# - Project name? tech-intervention
# - Directory? ./
# - Override settings? No

# Production deploy
vercel --prod
```

---

## 🔧 Post-Deployment Configuration

### 1. Custom Domain (Optional)

**Free subdomain**: You get `*.vercel.app` for free

**Custom domain** (techintervention.ro):
1. Go to Vercel Dashboard → **Settings** → **Domains**
2. **Add Domain**: Enter `techintervention.ro`
3. **Follow DNS instructions** (add A/CNAME records)
4. Wait for DNS propagation (5-60 minutes)
5. ✅ Your site is live on your domain!

### 2. Update Supabase Allowed URLs

Important for security:

1. Go to **Supabase Dashboard**
2. **Settings** → **API** → **API Settings**
3. Add your Vercel URL to **Site URL**: `https://your-site.vercel.app`
4. Add to **Redirect URLs**: `https://your-site.vercel.app/**`
5. **Save**

### 3. Update Contact Information

In your deployed site, update:
- Phone number: Search for `0123 456 789` in code
- WhatsApp number: Update in `components/whatsapp-button.tsx`
- Email: Update in footer and contact sections
- Business hours: Update in `components/urgency-indicator.tsx`

### 4. Google Search Console

Submit your sitemap:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: Your Vercel URL
3. Verify ownership (use meta tag method)
4. Submit sitemap: `https://your-site.vercel.app/sitemap.xml`

---

## 🎯 Environment Variables Explained

### Required Variables:

**NEXT_PUBLIC_SUPABASE_URL**
- Where: Supabase Dashboard → Settings → API → Project URL
- Example: `https://abcdefghijklmn.supabase.co`
- Purpose: Database connection

**NEXT_PUBLIC_SUPABASE_ANON_KEY**
- Where: Supabase Dashboard → Settings → API → anon public key
- Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (long string)
- Purpose: Public API access key

**NEXT_PUBLIC_SITE_URL**
- Where: Your Vercel deployment URL
- Example: `https://tech-intervention.vercel.app`
- Purpose: SEO metadata, OpenGraph images

---

## ✅ Deployment Checklist

### Before Deploy:
- [ ] Code pushed to GitHub
- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Environment variables ready
- [ ] .env.local NOT in repository (check!)

### During Deploy:
- [ ] Vercel project imported
- [ ] Framework detected (Next.js)
- [ ] Environment variables added
- [ ] Build successful
- [ ] Deployment live

### After Deploy:
- [ ] Site URL updated in env vars
- [ ] Supabase URLs updated
- [ ] Custom domain added (optional)
- [ ] Contact info updated
- [ ] Google Search Console submitted
- [ ] Analytics added (optional)

---

## 🔄 Auto-Deploy on Git Push

Once connected to GitHub:

1. **Make changes** to your code
2. **Commit and push** to GitHub
3. **Vercel auto-deploys** (takes 2-3 minutes)
4. **Live automatically** on your URL

**Preview Deployments:**
- Every branch gets a preview URL
- Test features before merging to main
- Share previews with team/clients

---

## 📊 Expected Build Output

```
✓ Compiling...
✓ Static page generation complete
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization

Route (app)                              Size
┌ ○ /                                   142 kB
├ ○ /api/og                             0 B
└ ○ /_not-found                         871 B

○  (Static)  prerendered as static HTML

Build time: ~45-60 seconds
```

---

## ⚡ Performance Scores (Expected)

After deployment, check with [PageSpeed Insights](https://pagespeed.web.dev/):

**Expected Scores:**
- Performance: 90-95
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

**Lighthouse Metrics:**
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.0s
- Cumulative Layout Shift: <0.1

---

## 🐛 Troubleshooting

### Build Fails: "Cannot find module"

**Solution**: Check package.json dependencies
```bash
npm install
npm run build
```

### Environment Variables Not Working

**Solution**: 
1. Check variable names (must start with `NEXT_PUBLIC_`)
2. Redeploy after adding variables
3. Clear build cache: Deployments → ... → "Redeploy"

### Supabase Connection Error

**Solution**:
1. Verify URL and key are correct
2. Check Supabase project is active
3. Verify RLS policies allow public access

### Custom Domain Not Working

**Solution**:
1. Check DNS records are correct
2. Wait for propagation (up to 48 hours)
3. Use Vercel's DNS checker
4. Try `dig yourdomain.com` to verify

---

## 💰 Vercel Pricing

### Free Tier (Hobby):
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Web analytics (basic)

**Perfect for your site!** You'll likely stay within free tier.

### Pro Tier ($20/month):
- 1TB bandwidth
- Priority support
- Advanced analytics
- Team collaboration

**Only needed if:**
- >100GB bandwidth/month
- Multiple team members
- Need advanced features

---

## 🎉 Success Indicators

After successful deployment, you should see:

✅ **Deployment Status**: Ready
✅ **Build Time**: ~1-2 minutes
✅ **Site URL**: `https://your-site.vercel.app`
✅ **HTTPS**: Automatic (green padlock)
✅ **Page loads**: <2 seconds
✅ **Mobile responsive**: Works perfectly
✅ **All features work**: Forms, tracker, etc.

---

## 📞 Need Help?

### Vercel Support:
- [Documentation](https://vercel.com/docs)
- [Community Discord](https://vercel.com/discord)
- [Support Portal](https://vercel.com/support)

### Common Issues:
- [Build errors](https://vercel.com/docs/errors)
- [Environment variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom domains](https://vercel.com/docs/concepts/projects/domains)

---

## 🚀 Ready to Deploy!

**Fastest path to production:**

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **Import repository**
4. **Add environment variables** (3 variables)
5. **Click Deploy**
6. **Wait 2-3 minutes**
7. **Your site is LIVE!** 🎉

**After deployment, you'll have:**
- ✅ Professional URL
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploy on push
- ✅ Analytics dashboard
- ✅ Custom domain support

---

**Let's deploy your site now! Follow the steps above and let me know if you need help!** 🚀

**Estimated time: 5-10 minutes** ⏱️
