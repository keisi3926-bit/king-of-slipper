$ErrorActionPreference = "Stop"

$port = 8787
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Get-LanAddress {
  $candidates = Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object {
      $_.IPAddress -notlike "127.*" -and
      $_.IPAddress -notlike "169.254.*" -and
      $_.PrefixOrigin -ne "WellKnown"
    } |
    Sort-Object InterfaceMetric, InterfaceIndex

  if (-not $candidates) {
    throw "LAN IP address was not found. Connect this PC and your phone to the same Wi-Fi, then try again."
  }

  return $candidates[0].IPAddress
}

$ip = Get-LanAddress
$gameUrl = "http://${ip}:${port}/index.html"
$qrUrl = "http://127.0.0.1:${port}/mobile-qr.html?url=$([uri]::EscapeDataString($gameUrl))"

Write-Host ""
Write-Host "KING OF Slipper mobile test server" -ForegroundColor Yellow
Write-Host "Game URL: $gameUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Keep this window open."
Write-Host "2. Connect your phone to the same Wi-Fi as this PC."
Write-Host "3. Scan the QR code page that opens."
Write-Host ""

Set-Location $root
Start-Process $qrUrl
python -m http.server $port --bind 0.0.0.0
