SOLAR SYSTEM — IPHONE SAFARI FROZEN POPUP FIX

UPDATE ONLY marker.html IN YOUR GITHUB REPOSITORY

1. Open https://github.com/Ashwath1427/AR
2. Click marker.html, then Edit (pencil).
3. Replace its entire contents with the marker.html from this folder.
4. Commit changes. Wait for GitHub Pages to update.
5. On iPhone, open your GitHub Pages URL directly in Safari, refresh, and tap Start Camera AR.
6. If Safari asks for CAMERA permission, tap Allow. No motion sensor popup is needed.
7. Point at the complete printed HIRO marker, then use touch controls.

CHANGES
- Disables A-Frame motion sensor permission UI (caused the white Deny / Allow popup).
- Disables A-Frame camera look-controls (not needed for HIRO marker AR).
- Keeps AR.js camera video in front of dark page and behind transparent 3D canvas.
- Prevents a double camera-open request that can freeze iPhone Safari.
- Prevents the gesture layer from blocking permission dialogs before HIRO is detected.
- Preserves all planets, saved layout, pinch/drag/rotate, and orbit animations.

LIMITATION: Marker tracking still requires a visible marker and enough camera light.
This is not a persistent world anchor; saved adjustments are relative to HIRO.
This package is syntax-checked, not tested on a physical iPhone.
