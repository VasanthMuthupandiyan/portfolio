# PowerShell script to deploy dist contents to root for GitHub Pages
Write-Host "Building project..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful. Copying files..." -ForegroundColor Green
    
    # Remove old files (but keep source files)
    if (Test-Path "index.html") { Remove-Item "index.html" }
    if (Test-Path "assets") { Remove-Item -Recurse -Force "assets" }
    
    # Copy dist contents to root
    Copy-Item "dist\*" "." -Recurse -Force
    
    Write-Host "Files copied to root. Committing changes..." -ForegroundColor Green
    git add .
    git commit -m "Deploy: Update GitHub Pages files in root"
    git push origin main
    
    Write-Host "Deployment complete!" -ForegroundColor Green
    Write-Host "Your site should be available at: https://vasanthmuthupandiyan.github.io/portfolio/" -ForegroundColor Cyan
} else {
    Write-Host "Build failed!" -ForegroundColor Red
}