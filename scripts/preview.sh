#!/usr/bin/env bash
# Temporary preview: static server on 127.0.0.1:4173 + Cloudflare quick tunnel (no account/login).
# Box DNS is broken for the tunnel edge, so edge IPs (resolved via DoH) are passed explicitly.
set -e
cd "$(dirname "$0")/.."
pgrep -f "serve $PWD/dist" >/dev/null || (nohup npx --prefix tools-verify serve "$PWD/dist" -l tcp://127.0.0.1:4173 --no-clipboard --config "$PWD/dist/serve.json" > /tmp/alcode_serve.log 2>&1 &)
pgrep -f "cloudflared tunnel .*--url http://127.0.0.1:4173" >/dev/null || (cd /workspace/tunnel && nohup ./cloudflared tunnel --no-autoupdate --protocol http2 --edge 198.41.192.7:7844 --edge 198.41.200.13:7844 --url http://127.0.0.1:4173 > /tmp/alcode_tunnel.log 2>&1 &)
sleep 15; grep -ao "https://[a-z0-9-]*\.trycloudflare\.com" /tmp/alcode_tunnel.log | head -1
