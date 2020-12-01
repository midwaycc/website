#!/bin/sh

VIDEO="$1"
VIDEO_PREFIX=$(echo "$VIDEO" | cut -f 1 -d '.')

# To cut off the first 0.1 seconds of a video:
# ffmpeg -i static/backdrop.m4v -ss 00:00:00.1 static/backdrop-cut.m4v

ffmpeg -i "$VIDEO" -c:v libx264 -crf 28 -preset veryslow -c:a copy "$VIDEO_PREFIX-compressed.mp4"
ffmpeg -i "$VIDEO_PREFIX-compressed.mp4" -c:v copy -c:a copy -movflags faststart "$VIDEO_PREFIX-faststart.mp4"
ffmpeg -i "$VIDEO_PREFIX-faststart.mp4" -c:v copy -an "$VIDEO_PREFIX-silent.mp4"

mv "$VIDEO_PREFIX-silent.mp4" "$VIDEO_PREFIX-optimized.mp4"
rm "$VIDEO_PREFIX-faststart.mp4"
rm "$VIDEO_PREFIX-compressed.mp4"
