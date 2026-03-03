# Deployment Guide — Vercel + Hostinger Domain

## Step 1: Push to GitHub

Make sure your repo (`mohammadSelimReza/Personal-Portfolio`) is up to date:

```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

---

## Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Sign up / Log in** with your GitHub account
2. Click **"Add New Project"**
3. Select your repo: **`mohammadSelimReza/Personal-Portfolio`**
4. Vercel auto-detects Next.js — **leave all settings as default**
5. Click **"Deploy"**
6. Wait for the build to finish (~1–2 min)

> Your site is now live at `your-project.vercel.app`

---

## Step 3: Add Custom Domain on Vercel

1. In Vercel Dashboard → your project → **Settings** → **Domains**
2. Type `portfolio.selimreza.dev` → click **Add**
3. Vercel will show you the DNS records you need (a CNAME record)

---

## Step 4: Configure DNS at Hostinger

1. Log in to [Hostinger](https://hpanel.hostinger.com)
2. Go to **Domains** → select `selimreza.dev` → **DNS / Nameservers**
3. Under **DNS Records**, add:

| Type    | Name        | Target                  | TTL  |
|---------|-------------|-------------------------|------|
| CNAME   | `portfolio` | `cname.vercel-dns.com`  | 3600 |

4. **Save** the record
5. Wait 5–30 minutes for DNS propagation

---

## Step 5: Verify

1. Go back to Vercel Dashboard → **Settings** → **Domains**
2. The domain should show a ✅ green checkmark
3. SSL certificate is auto-provisioned by Vercel
4. Visit [https://portfolio.selimreza.dev](https://portfolio.selimreza.dev)

---

## Auto-Deployments

After this setup, **every push to `main`** will automatically redeploy your site on Vercel. No manual action needed.

---

## Notes

- **No environment variables** are needed — your project has none
- **`@vercel/analytics`** is already configured and will work automatically on Vercel
- **Images** are set to `unoptimized: true` in `next.config.mjs`, which is fine for a portfolio
- If you ever want Vercel's image optimization, remove `unoptimized: true` from the config
