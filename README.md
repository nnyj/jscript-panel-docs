# JScript Panel 3 Docs Archive

Mirror of the deleted JScript Panel 3 (`foo_jscript_panel3`) documentation site.

- component: JScript Panel 3 for foobar2000, final release 3.8.5 (2024-11-18), abandoned by author
- the `jscript-panel` GitHub org (source, releases, this docs site) was deleted late Dec 2024 / early Jan 2025
- author's parting note on the release page: `This component is now abandoned. I'm providing the download and documentation only.`
- C++ source has no known surviving fork, these docs are the remaining API reference

## Component download

- 3.8.5 component attached to this repo's Releases page
- other mirrors: [ZoeySamples/foobar2000-JScriptPanel3-contributions](https://github.com/ZoeySamples/foobar2000-JScriptPanel3-contributions) (3.8.5),
  [woodkin/JScript-Panel](https://github.com/woodkin/JScript-Panel) (3.8.5),
  [Dronf3/JScript-Panel-3---foobar2k](https://github.com/Dronf3/JScript-Panel-3---foobar2k) (3.4.34, last Win7 / fb2k 1.6 compatible)
- 3.8.5 requires Windows 10+ and foobar2000 2.1+

## Structure

- `html/` - raw canonical archive, one `index.html` per page mirroring site path
- `md/` - regenerated markdown, convenience copies derived from the HTML
- `html_to_md.js` - converter, run `node html_to_md.js` to regenerate `md/` from `html/`

Each page saved from its latest available 200 snapshot (mostly Dec 2024, the final site state).
Fetched via `https://web.archive.org/web/<timestamp>id_/<url>` (id_ = no wayback toolbar).

## Pages (86)

| md file | snapshot | site path |
| --- | --- | --- |
| home.md | 20241208093147 | / |
| docs_index.md | 20241202032044 | /docs/ |
| window.md | 20241202011942 | /docs/namespaces/window/ |
| fb.md | 20241201222857 | /docs/namespaces/fb/ |
| plman.md | 20241209183504 | /docs/namespaces/plman/ |
| utils.md | 20241201213827 | /docs/namespaces/utils/ |
| console.md | 20241202062706 | /docs/namespaces/console/ |
| graphics.md | 20241201212617 | /docs/interfaces/IJSGraphics/ |
| ijsbitmap.md | 20241201212500 | /docs/interfaces/IJSBitmap/ |
| ijsimage.md | 20241201212759 | /docs/interfaces/IJSImage/ |
| imenuobj.md | 20241209195451 | /docs/interfaces/IMenuObj/ |
| imetadbhandle.md | 20241201204103 | /docs/interfaces/IMetadbHandle/ |
| imetadbhandlelist.md | 20241202020132 | /docs/interfaces/IMetadbHandleList/ |
| itooltip.md | 20241201233647 | /docs/interfaces/ITooltip/ |
| itextlayout.md | 20241201225846 | /docs/interfaces/ITextLayout/ |
| ithememanager.md | 20231116002914 | /docs/interfaces/IThemeManager/ |
| ititlformat.md | 20241201211823 | /docs/interfaces/ITitleFormat/ |
| icontextmenumanager.md | 20241201233149 | /docs/interfaces/IContextMenuManager/ |
| idropaction.md | 20241202013920 | /docs/interfaces/IDropAction/ |
| ifileinfo.md | 20241201222351 | /docs/interfaces/IFileInfo/ |
| imainmenumanager.md | 20241201204141 | /docs/interfaces/IMainMenuManager/ |
| iplayingitemlocation.md | 20241201211215 | /docs/interfaces/IPlayingItemLocation/ |
| iprofiler.md | 20241201231245 | /docs/interfaces/IProfiler/ |
| iselectionholder.md | 20231116002844 | /docs/interfaces/ISelectionHolder/ |
| iaudiochunk.md | 20241201233409 | /docs/interfaces/IAudioChunk/ |
| callbacks.md | 20241201231640 | /docs/callbacks/ |
| callbacks_component.md | 20241201212725 | /docs/callbacks/component/ |
| callbacks_foobar2000.md | 20241201213445 | /docs/callbacks/foobar2000/ |
| callbacks_windows.md | 20241201212558 | /docs/callbacks/windows/ |
| changelog.md | 20241201204200 | /docs/changes/ |
| changelog_3-0-0.md | 20240223165633 | /docs/changes/3-0-0/ |
| changelog_3-0-x.md | 20241201204945 | /docs/changes/3-0-x/ |
| changelog_3-1-0.md | 20240223173046 | /docs/changes/3-1-0/ |
| changelog_3-1-x.md | 20241202043150 | /docs/changes/3-1-x/ |
| changelog_3-2-0.md | 20230602094218 | /docs/changes/3-2-0/ |
| changelog_3-2-x.md | 20241201222434 | /docs/changes/3-2-x/ |
| changelog_3-3-0.md | 20230705132158 | /docs/changes/3-3-0/ |
| changelog_3-3-x.md | 20241201204841 | /docs/changes/3-3-x/ |
| changelog_3-4-x.md | 20241201221423 | /docs/changes/3-4-x/ |
| changelog_3-5-x.md | 20241209200538 | /docs/changes/3-5-x/ |
| changelog_3-6-x.md | 20241201210652 | /docs/changes/3-6-x/ |
| changelog_3-7-x.md | 20241201205526 | /docs/changes/3-7-x/ |
| changelog_upgrading.md | 20241201204010 | /docs/changes/upgrading/ |
| configuration_window.md | 20241201220212 | /docs/configuration-window/ |
| flags.md | 20241201220606 | /docs/flags/ |
| fonts_old.md | 20231116002930 | /docs/fonts/ |
| preprocessors.md | 20241201214413 | /docs/preprocessors/ |
| styling_ranges_old.md | 20231116002952 | /docs/styling-ranges-text/ |
| tips.md | 20241201213258 | /docs/tips/ |
| upgrading.md | 20231116002912 | /docs/upgrading/ |
| guide_country_flags.md | 20241201204341 | /docs/guides/country-flags/ |
| guide_font_rgb.md | 20241202012346 | /docs/guides/font-rgb/ |
| guide_fonts.md | 20241202091541 | /docs/guides/fonts/ |
| guide_gradients.md | 20240926190024 | /docs/guides/gradients/ |
| guide_playback_statistics.md | 20241202034027 | /docs/guides/playback-statistics/ |
| guide_styling_ranges.md | 20241202000138 | /docs/guides/styling-ranges-text/ |
| guide_web_requests.md | 20241209202650 | /docs/guides/web-requests/ |
| samples.md | 20241201210203 | /gallery/ |
| sample_album_art.md | 20241202003500 | /gallery/album-art/ |
| sample_allmusic.md | 20241201212142 | /gallery/allmusic/ |
| sample_images.md | 20241201204901 | /gallery/images/ |
| sample_jsplaylist.md | 20241202001434 | /gallery/jsplaylist/ |
| sample_lastfm_bio.md | 20241201205917 | /gallery/lastfm-bio/ |
| sample_lastfm_info.md | 20241201230833 | /gallery/lastfm-info/ |
| sample_musicbrainz.md | 20241201223928 | /gallery/musicbrainz/ |
| sample_play_log.md | 20241209192410 | /gallery/play-log/ |
| sample_properties_other_info.md | 20241201205236 | /gallery/properties-other-info/ |
| sample_seekbar_button.md | 20241201210604 | /gallery/seekbar-button/ |
| sample_smooth_browser.md | 20241201214300 | /gallery/smooth-browser/ |
| sample_smooth_playlist.md | 20241201204457 | /gallery/smooth-playlist/ |
| sample_smooth_playlist_manager.md | 20241201225724 | /gallery/smooth-playlist-manager/ |
| sample_spectrogram_seekbar.md | 20241201220252 | /gallery/spectrogram-seekbar/ |
| sample_text_display.md | 20241201212944 | /gallery/text-display/ |
| sample_text_reader.md | 20241202013530 | /gallery/text-reader/ |
| sample_thumbs.md | 20241201222259 | /gallery/thumbs/ |
| sample_track_info_seekbar.md | 20231116002856 | /gallery/track-info-seekbar-buttons/ |
| sample_track_info_seekbar_vol.md | 20240417031358 | /gallery/track-info-seekbar-buttons-volume/ |
| sample_vu_meter.md | 20241201214143 | /gallery/vu-meter/ |
| other.md | 20240417020242 | /other/ |
| other_cover_utils.md | 20240315221505 | /other/cover-utils/ |
| other_lastfm_playcount_sync.md | 20240417021436 | /other/lastfm-playcount-sync/ |
| other_musicbrainz64.md | 20240417033941 | /other/musicbrainz64/ |
| other_play_track.md | 20240417014219 | /other/play-track/ |
| other_playlist_fix.md | 20240417023251 | /other/playlist-fix/ |
| other_queue_viewer.md | 20240417014408 | /other/queue-viewer/ |
| other_run_main.md | 20240417033357 | /other/run-main/ |
