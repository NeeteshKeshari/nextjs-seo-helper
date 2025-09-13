# 📦 nextjs-seo-helper

**nextjs-seo-helper** is a simple yet powerful npm package designed to help Next.js developers manage SEO metadata, structured data, and sitemap generation in a consistent and automated way.  
It works smoothly with **Next.js Pages Router** projects.

---

## ✅ Features

- ✅ Easily inject SEO meta tags:
  - Title
  - Meta Description
  - Canonical URL
  - Open Graph (OG) tags
  - Structured Data (JSON-LD)

- ✅ Automatically generate a `sitemap.xml`
  - Supports static or dynamic pages
  - Generates the file directly in your `public/` folder

---

## 🚀 Benefits

- 📚 Centralized SEO logic
- ✅ Works out-of-the-box with Next.js Pages Router
- 🚀 Saves time: no need to manually manage meta tags or sitemaps
- 🔧 Fully customizable
- ✅ Structured Data support for better search engine understanding
- ✅ Compatible with modern Next.js projects

---

## ⚡️ Installation

<pre>
npm install nextjs-seo-helper
</pre>


✅ Usage Instructions
1️⃣ Inject SEO Metadata in Next.js Pages

Use the <SeoHead /> component in your Next.js pages to easily inject SEO metadata.

```
import { SeoHead } from 'nextjs-seo-helper';

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Home Page"
        description="Welcome to the home page of our awesome site"
        canonical="https://example.com/"
        openGraph={{
          title: "Home Page OG Title",
          description: "Home page Open Graph description",
          images: [{ url: "https://example.com/image.png" }],
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://example.com/",
          "name": "Example Site",
        }}
      />
    </>
  );
}
```


2️⃣ Generate sitemap.xml
Step 1: Create Sitemap Generator Script

Create a file at scripts/generate-sitemap.mjs:

```
import { generateSitemap } from 'nextjs-seo-helper';

const pages = ['/', '/about', '/login'];
const siteUrl = 'https://example.com';

generateSitemap(pages, siteUrl);
```

Step 2: Run Manually

```
node scripts/generate-sitemap.mjs
```

Step 3: Or Add as a Postbuild Step

In your package.json:
```
{
  "scripts": {
    "build": "next build",
    "postbuild": "node scripts/generate-sitemap.mjs"
  }
}
```

After running, the sitemap will be generated at:
```
/public/sitemap.xml
```

------------------------------------------------------------------------------------
⚠️ Limitations

❌ Works only with Next.js Pages Router (App Router not supported yet).

⚠️ Does not auto-discover pages — you must pass an array of page paths manually.

❌ No built-in dynamic data fetching for sitemap generation (custom logic required).

⚠️ Metadata injection works at the page level only (server-level injection not supported).

------------------------------------------------------------------------------------

✅ Planned Future Enhancements

Auto page discovery for dynamic projects

App Router support

Support for advanced sitemap features (last modified, multi-language)

------------------------------------------
Made with ❤️ for Next.js developers.

------------------------------------------

## 👤 Author

**Neetesh Keshari [Engineering Manager]**

- GitHub: [https://github.com/neeteshkeshari](https://github.com/neeteshkeshari)
- Website: [https://linktr.ee/neeteshkeshari](https://linktr.ee/neeteshkeshari)
- LinkedIn: [https://www.linkedin.com/in/neeteshkeshari/](https://www.linkedin.com/in/neeteshkeshari/)

