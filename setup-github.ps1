# KING of Slipper first GitHub setup script

$ErrorActionPreference = "Stop"

$repoName = "king-of-slipper"
$githubUser = "keisi3926-bit"
$branch = "main"
$portableGit = Join-Path $PSScriptRoot ".tools\PortableGit\cmd\git.exe"

if (Test-Path $portableGit) {
  $git = $portableGit
} else {
  $gitCommand = Get-Command git -ErrorAction SilentlyContinue
  if (-not $gitCommand) {
    Write-Host "git was not found. Run .\install-portable-git.ps1 first." -ForegroundColor Yellow
    exit 1
  }
  $git = $gitCommand.Source
}

& $git init
& $git branch -M $branch

& $git add .
& $git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "No staged changes to commit." -ForegroundColor Yellow
} else {
  & $git commit -m "Initial commit: King of Slipper beta"
}

$remotes = & $git remote
if ($remotes -contains "origin") {
  & $git remote remove origin
}
& $git remote add origin "https://github.com/$githubUser/$repoName.git"

& $git push -u origin $branch
