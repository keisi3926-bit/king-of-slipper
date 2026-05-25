$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$assets = Join-Path $root "assets"

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Host "ffmpeg was not found. Install ffmpeg, then run this script again." -ForegroundColor Yellow
  Write-Host "Recommended: winget install Gyan.FFmpeg"
  exit 1
}

$tracks = @(
  "haou-theme",
  "haou-victory-theme",
  "jin-theme",
  "jin-victory-theme"
)

foreach ($track in $tracks) {
  $input = Join-Path $assets "$track.wav"
  $webOutput = Join-Path $assets "$track.mp3"
  $mobileOutput = Join-Path $assets "$track-mobile.mp3"

  if (-not (Test-Path $input)) {
    Write-Host "Skip: $input was not found." -ForegroundColor DarkYellow
    continue
  }

  Write-Host "Encoding $track web mp3..." -ForegroundColor Cyan
  ffmpeg -y -i $input -codec:a libmp3lame -b:a 128k -ar 44100 $webOutput

  Write-Host "Encoding $track mobile mp3..." -ForegroundColor Cyan
  ffmpeg -y -i $input -codec:a libmp3lame -b:a 80k -ar 44100 -ac 2 $mobileOutput
}

Write-Host "Audio compression complete." -ForegroundColor Green
