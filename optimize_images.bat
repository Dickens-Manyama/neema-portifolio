@echo off
echo Creating optimized image directory...
if not exist "optimized_images" mkdir optimized_images

echo.
echo This script would optimize images if ImageMagick is installed.
echo For now, manually optimize these large images:
echo.

echo Large images that should be optimized:
echo - env.JPG (9.5MB) - Recommend resize to 1920x1080, 85%% quality
echo - givingback2.JPG (6.7MB) - Recommend resize to 800x600, 85%% quality  
echo - givingback6.JPG (4.6MB) - Recommend resize to 800x600, 85%% quality
echo - env2.jpg (4.2MB) - Recommend resize to 800x600, 85%% quality
echo - givingback4.jpg (2.2MB) - Recommend resize to 800x600, 85%% quality

echo.
echo Optimization recommendations:
echo 1. Use online tools like TinyPNG.com or Squoosh.app
echo 2. Resize hero images to 1920x1080 pixels
echo 3. Resize other images to 800x600 pixels  
echo 4. Use 85%% JPEG quality
echo 5. Consider converting some to WebP format

echo.
echo Current image usage in website:
echo - Hero background: env.JPG
echo - Hero portrait: about.jpg
echo - About section: about2.jpg
echo - Leadership: meeting3.jpg
echo - Media: podcast.jpg
echo - Youth: l1.jpg  
echo - Charity gallery: charity.jpg, givingback.jpg, charity2.jpg

echo.
pause