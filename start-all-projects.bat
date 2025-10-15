@echo off
echo Starting all projects for interview demo...
echo.
echo Opening 3 terminal windows:
echo 1. Portfolio (localhost:3000)
echo 2. Next.js E-Commerce (localhost:3001)
echo 3. Angular Social Media (localhost:4200)
echo.

start "Portfolio - React" cmd /k "cd /d D:\CODE\DEVs\arkan-portfolio && npm run dev"
timeout /t 2 /nobreak >nul

start "E-Commerce - Next.js" cmd /k "cd /d C:\nextjs-ecommerce && npm run dev"
timeout /t 2 /nobreak >nul

start "Social Media - Angular" cmd /k "cd /d C:\angular-task-manager && npm start"

echo.
echo All projects are starting!
echo Wait for them to compile, then open http://localhost:3000 in your browser.
echo.
pause

