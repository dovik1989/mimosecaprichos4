@echo off
title Mimos e Caprichos - Auto Commit & Sync
echo Iniciando Auto-Commit & Sync Watcher...
node "%~dp0scripts\watch-sync.js" %*
pause

