$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$tools = Join-Path $root ".tools"
$gitDir = Join-Path $tools "PortableGit"
$download = Join-Path $tools "PortableGit.7z.exe"

if (Test-Path (Join-Path $gitDir "cmd\git.exe")) {
  Write-Host "Portable Git already exists: $gitDir" -ForegroundColor Green
  exit 0
}

New-Item -ItemType Directory -Force -Path $tools | Out-Null

Write-Host "Fetching latest Git for Windows PortableGit release..." -ForegroundColor Cyan
$release = Invoke-RestMethod "https://api.github.com/repos/git-for-windows/git/releases/latest"
$asset = $release.assets |
  Where-Object { $_.name -like "PortableGit-*-64-bit.7z.exe" } |
  Select-Object -First 1

if (-not $asset) {
  throw "PortableGit 64-bit asset was not found in the latest release."
}

Write-Host "Downloading $($asset.name)..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $download

Write-Host "Extracting Portable Git..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $gitDir | Out-Null
& $download -y "-o$gitDir" | Out-Null

$git = Join-Path $gitDir "cmd\git.exe"
if (-not (Test-Path $git)) {
  throw "git.exe was not found after extraction: $git"
}

Write-Host "Portable Git installed:" -ForegroundColor Green
& $git --version
