# Latest local source and Puture reference handoff

## Supply the current Windows project

The cloud checkout cannot inspect your Windows disk. A GitHub checkpoint does not include uncommitted or untracked local work. Save all files in VS Code, then open PowerShell in the project folder and run:

```powershell
git status --short
git log -1 --format="%H %s"
```

Copy both outputs into the chat with a ZIP of the current project. Include src, public, docs if present, package.json, package-lock.json, and root configuration/instruction files. Exclude node_modules, .next, .git, and all .env or credential files. Use File Explorer to select and compress those folders/files, or this explicit PowerShell selection:

```powershell
$sourceItems = @(
  'src', 'public', 'docs', 'package.json', 'package-lock.json',
  'next.config.ts', 'next-env.d.ts', 'tsconfig.json',
  'eslint.config.mjs', 'postcss.config.mjs',
  'AGENTS.md', 'CLAUDE.md', 'README.md', '.gitignore'
) | Where-Object { Test-Path -LiteralPath $_ }
Compress-Archive -LiteralPath $sourceItems -DestinationPath '..\khizar-studio-latest.zip'
```

If that ZIP is over 30 MiB, upload source/configuration separately from public assets. Mention any additional source directories or custom config files outside this list. Keep your local project untouched; do not reset or discard changes to prepare the handoff.

After receipt, compare against d90e862, preserve the supplied state, re-audit recently updated sections, and apply only necessary infrastructure repairs. Do not automatically overwrite root instructions or the newly approved documents when integrating an archive.

## Supply Puture clips: preferred

Each uploaded clip should be below 30 MiB, leaving room beneath the 32 MiB transfer limit. Preserve normal playback speed and transitions. Include the opening, a floating-object transformation, a dark-to-light handoff, and project-screen choreography. Name clips in playback order and mention where each starts in the full recording.

For a simple visual method, use a video editor you already have (for example Windows Clipchamp): split the recording into 10–20 second segments, export each at 720p, check each file's size, and upload them separately. Trim at points that keep the lead-in and completion of each transition.

If FFmpeg is already installed, run this in PowerShell in the recording folder. It recompresses, caps bitrate, removes audio, and creates approximately 15-second clips:

```powershell
New-Item -ItemType Directory -Path '.\puture-clips'
ffmpeg -i '.\iPhone-13-PRO-puture.co.kr-794p-oklcda4r7.webm' -map 0:v:0 -an -vf "scale=720:1280:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30" -c:v libx264 -preset medium -crf 23 -maxrate 1800k -bufsize 3600k -force_key_frames "expr:gte(t,n_forced*15)" -f segment -segment_time 15 -reset_timestamps 1 '.\puture-clips\puture-%02d.mp4'
Get-ChildItem '.\puture-clips\*.mp4' | Select-Object Name,@{Name='MiB';Expression={[math]::Round($_.Length / 1MB, 2)}}
```

Check sizes before uploading. Shorter clips preserve motion evidence better than isolated screenshots. Do not change playback speed or cut out the transitions being studied.

## Extracted frames: useful supplement

For a sequence of compositions, extract two frames per second:

```powershell
New-Item -ItemType Directory -Path '.\puture-frames'
ffmpeg -i '.\iPhone-13-PRO-puture.co.kr-794p-oklcda4r7.webm' -vf "fps=2,scale=540:-2" -q:v 3 '.\puture-frames\frame-%04d.jpg'
```

Upload a small numbered selection or ZIPs under 30 MiB. Include before/during/after frames for each important transition. Frames help study composition, depth, typography, and lighting; clips are necessary to assess easing, holds, camera movement, and scroll continuity.
