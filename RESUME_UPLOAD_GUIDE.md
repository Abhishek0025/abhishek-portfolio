# How to Upload Your Resume

## Quick Steps

1. **Prepare your resume PDF**
   - Save your resume as a PDF file
   - Name it: `resume.pdf` (lowercase, no spaces)
   - Make sure it's optimized (under 2MB recommended)

2. **Add to your project**
   - Navigate to the `public` folder in your project
   - Place your `resume.pdf` file directly in the `public` folder
   - The file path should be: `public/resume.pdf`

3. **Verify it works**
   - Run `npm run dev` to start your development server
   - Click the "Resume" button in the navigation bar
   - The PDF should download automatically

## File Structure

Your project structure should look like this:

```
Portfolio/
├── public/
│   ├── resume.pdf          ← Your resume goes here
│   └── vite.svg
├── src/
└── ...
```

## Alternative: Using a Different File Name

If you want to use a different filename, update the download link in:
- `src/components/Navbar.jsx` (line with `href="/resume.pdf"`)
- `src/components/MobileMenu.jsx` (line with `href="/resume.pdf"`)
- `src/components/sections/Contact.jsx` (line with `href="/resume.pdf"`)

Change `/resume.pdf` to `/your-filename.pdf`

## Tips

- **File size**: Keep it under 2MB for faster downloads
- **File name**: Use lowercase, no spaces (e.g., `resume.pdf` or `abhishek-resume.pdf`)
- **Format**: PDF is recommended for professional portfolios
- **Testing**: Always test the download button after adding your resume

## Troubleshooting

**Resume doesn't download?**
- Check that the file is in the `public` folder (not `src/public`)
- Verify the filename matches exactly (case-sensitive)
- Clear browser cache and try again
- Check browser console for errors

**File too large?**
- Compress your PDF using online tools like SmallPDF or ILovePDF
- Remove unnecessary images or reduce image quality

