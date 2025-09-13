# Oblivion Home-Assistant-Theme
Based on the Sci-Fi Movie 
# 🚀 Oblivion GMunk Theme for Home Assistant (made with Claude AI)

A stunning sci-fi theme for Home Assistant inspired by GMunk’s iconic interface design from the movie “Oblivion” (2013). Features the distinctive teal/cyan color palette, dark backgrounds, and futuristic aesthetics that made the movie’s UI legendary.

![Oblivion Theme Preview](assets/screenshots/overview.png)

## ✨ Features

- **🎨 Authentic GMunk Design**: Faithful recreation of the Oblivion movie interfaces
- **🌊 Signature Teal Accent**: The iconic bright cyan (#00D4FF) color throughout
- **🌙 True Dark Mode**: Deep space-black backgrounds for comfortable viewing
- **⚡ Animated Elements**: Optional JavaScript animations and particle effects
- **🎬 Video Backgrounds**: Support for animated backgrounds (optional)
- **📱 Responsive Design**: Looks great on desktop, tablet, and mobile
- **🔧 Highly Customizable**: Easy to modify colors and effects

## 🖼️ Screenshots

|Overview                                      |Entities                                      |Logbook                                     |
|----------------------------------------------|----------------------------------------------|--------------------------------------------|
|![Overview](examples/screenshots/overview.png)|![Entities](examples/screenshots/entities.png)|![Logbook](examples/screenshots/logbook.png)|

## 🚀 Quick Installation

### Method 1: HACS (Recommended)

1. Open HACS in your Home Assistant
1. Go to “Frontend” section
1. Click the “+” button
1. Search for “Oblivion GMunk Theme”
1. Install the theme
1. Restart Home Assistant
1. Go to your profile and select “Oblivion GMunk” theme

### Method 2: Manual Installation

1. Download the `oblivion_gmunk.yaml` file from the [themes folder](themes/)
1. Copy it to your `config/themes/` directory
1. Add this to your `configuration.yaml` if not already present:
   
   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```
1. Restart Home Assistant
1. Go to your profile and select “Oblivion GMunk” theme

### Method 3: One-Click Install Script

```bash
curl -sSL https://raw.githubusercontent.com/yourusername/oblivion-gmunk-homeassistant-theme/main/install.sh | bash
```

## 🎬 Enhanced Features (Optional)

### Animated Backgrounds

Enable stunning particle effects and animations:

```yaml
# Add to your configuration.yaml
panel_custom:
  - name: oblivion-panel
    sidebar_title: Oblivion
    sidebar_icon: mdi:space-invaders
    js_url: /local/themes/oblivion/js/oblivion_animations.js
```

### Video Backgrounds

For the ultimate cinematic experience:

```yaml
# In your Lovelace configuration
views:
  - title: Home
    background: /local/themes/oblivion/videos/oblivion_background.mp4
```

## 🎨 Customization

### Color Variants

The theme includes several color variants you can switch between:

- `oblivion_gmunk` - Original teal theme
- `oblivion_orange` - Alternative orange variant
- `oblivion_purple` - Purple variant
- `oblivion_minimal` - Minimalist version

### Custom CSS

Add custom styling with:

```yaml
# In your configuration.yaml
frontend:
  extra_module_url:
    - /local/themes/oblivion/css/custom.css
```

## 📋 Requirements

- Home Assistant 2023.4.0 or newer
- Modern web browser with CSS Grid support
- Optional: HACS for easy installation

## 🐛 Troubleshooting

### Theme not appearing

1. Ensure the theme file is in the correct directory: `config/themes/`
1. Check that themes are enabled in `configuration.yaml`
1. Restart Home Assistant completely
1. Clear your browser cache

### Colors look wrong

1. Make sure you’ve selected the theme in your user profile
1. Check browser developer tools for CSS conflicts
1. Verify you’re using a supported browser

### Performance issues

1. Disable animations if experiencing lag:
   
   ```yaml
   oblivion_gmunk_no_animations: true
   ```
1. Use static backgrounds instead of video/animated ones

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

### Reporting Issues

- Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Include screenshots and browser information
- Check existing issues before creating new ones

### Feature Requests

- Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Explain the use case and expected behavior

## 📄 License

This project is licensed under the MIT License - see the <LICENSE> file for details.

## 🙏 Acknowledgments

- **GMunk (Bradley Munkowitz)** - Original interface design for Oblivion movie
- **Universal Pictures** - Oblivion movie (2013)
- **Home Assistant Community** - For the amazing platform
- **Contributors** - Everyone who helped improve this theme

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/oblivion-gmunk-homeassistant-theme&type=Date)](https://star-history.com/#yourusername/oblivion-gmunk-homeassistant-theme&Date)

## 📞 Support

- 💬 [Home Assistant Community Forum](https://community.home-assistant.io/)
- 🐛 [GitHub Issues](https://github.com/yourusername/oblivion-gmunk-homeassistant-theme/issues)
- 💡 [Feature Requests](https://github.com/yourusername/oblivion-gmunk-homeassistant-theme/discussions)

-----

Made with ❤️ for the Home Assistant community

*“Are you an effective team?” - Oblivion (2013)*
