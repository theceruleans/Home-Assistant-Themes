#!/bin/bash

# Oblivion GMunk Theme Installer for Home Assistant

# This script will automatically download and install the theme

set -e

# Colors for output

RED=’\033[0;31m’
GREEN=’\033[0;32m’
BLUE=’\033[0;34m’
YELLOW=’\033[1;33m’
CYAN=’\033[0;36m’
NC=’\033[0m’ # No Color

# Configuration

REPO_URL=“https://raw.githubusercontent.com/yourusername/oblivion-gmunk-homeassistant-theme/main”
THEME_NAME=“oblivion_gmunk”
DEFAULT_HA_CONFIG=”/config”

# ASCII Art Banner

echo -e “${CYAN}”
cat << “EOF”
▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░▌          ▐░░░░░░░░░░░▌▐░▌             ▐░░░░░░░░░░░▌▐░░▌      ▐░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌           ▀▀▀▀█░█▀▀▀▀ ▐░▌             ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌
▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌     ▐░▌             ▐░▌          ▐░▌▐░▌    ▐░▌
▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌               ▐░▌     ▐░▌             ▐░▌          ▐░▌ ▐░▌   ▐░▌
▐░▌       ▐░▌▐░░░░░░░░░░▌ ▐░▌               ▐░▌     ▐░▌             ▐░▌          ▐░▌  ▐░▌  ▐░▌
▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌               ▐░▌     ▐░▌             ▐░▌          ▐░▌   ▐░▌ ▐░▌
▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌     ▐░▌             ▐░▌          ▐░▌    ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌
▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀

```
                        GMunk Theme Installer for Home Assistant
```

EOF
echo -e “${NC}”

# Functions

print_status() {
echo -e “${BLUE}[INFO]${NC} $1”
}

print_success() {
echo -e “${GREEN}[SUCCESS]${NC} $1”
}

print_warning() {
echo -e “${YELLOW}[WARNING]${NC} $1”
}

print_error() {
echo -e “${RED}[ERROR]${NC} $1”
}

check_command() {
if ! command -v $1 &> /dev/null
