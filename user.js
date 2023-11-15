/* 
Mozilla User Preferences

Do not manually edit prefs.js file.

If you make changes to prefs.js file while the application is running,
the changes will be overwritten when the application exits.

To change a preference value, you can either:
  - modify it via the UI (e.g. via about:config in the browser); or
  - set it within a user.js file in your profile.


This set of prefs are extra hardened with a reduced preference for:

  - Hardware acceleration of website components 
  - Video and graphics rendering 

It completely disallows session cookies, autoplay and other audio-video 
related queries from webservers.  

It de-clutters the browser's homepage and settings page, and gets rid of 
Firefox bloatware like "pocket", search suggestions, and discovery stream.

However, it does allow safe-browsing and web compatibility shims.

This browser profile's main purpose is for viewing plain-text webpages,
while reducing likelihood of browser and device fingerprinting methods
being implemented against it. 

Use a different browser profile for regular browsing with session storage.
*/

user_pref("accessibility.typeaheadfind.flashBar", 0);

user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
user_pref("app.normandy.migrationsApplied", 12);
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.normandy.user_id", "");

user_pref("app.shield.optoutstudies.enabled", false);

user_pref("app.update.background.previous.reasons", "[\"app.update.auto=false\"]");
user_pref("app.update.background.rolledout", true);
user_pref("app.update.download.attempts", 0);
user_pref("app.update.notifyDuringDownload", true);
user_pref("app.update.service.enabled", false);

user_pref("beacon.enabled", false);

user_pref("breakpad.reportURL", "");

user_pref("browser.aboutConfig.showWarning", false);

user_pref("browser.bookmarks.addedImportButton", false);
user_pref("browser.bookmarks.openInTabClosesMenu", false);

user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.enable", false);

user_pref("browser.contentblocking.category", "custom");

user_pref("browser.discovery.enabled", false);

user_pref("browser.display.use_system_colors", false);

user_pref("browser.download.animateNotifications", false);
user_pref("browser.download.manager.addToRecentDocs", false);

user_pref("browser.formfill.enable", false);

user_pref("browser.migrate.bookmarks-file.enabled", false);

user_pref("browser.newtab.preload", false);

user_pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

user_pref("browser.newtabpage.activity-stream.impressionId", "");

user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showRecentSaves", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.pinned", "[]");

user_pref("browser.newtabpage.storageVersion", 1);

user_pref("browser.pageActions.persistedActions", "");

user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.pagethumbnails.storage_version", 3);

user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.places.speculativeConnect.enabled", false);

user_pref("browser.privacySegmentation.createdShortcut", true);

user_pref("browser.privatebrowsing.autostart", true);
user_pref("browser.privatebrowsing.resetPBM.showConfirmationDialog", false);

user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);

user_pref("browser.search.geoip.url", "");
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.suggest.enabled", false);

user_pref("browser.selfsupport.url", "");

user_pref("browser.sessionstore.closedTabsFromAllWindows", false);
user_pref("browser.sessionstore.closedTabsFromClosedWindows", false);
user_pref("browser.sessionstore.collect_session_storage", false);
user_pref("browser.sessionstore.collect_zoom", false);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.persist_closed_tabs_between_sessions", false);
user_pref("browser.sessionstore.platform_collection", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.restore_on_demand", false);
user_pref("browser.sessionstore.restore_tabs_lazily", false);
user_pref("browser.sessionstore.resume_from_crash", false);

user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.defaultBrowserCheckCount", 1);
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);
user_pref("browser.shell.shortcutFavicons", false);

user_pref("browser.startup.couldRestoreSession.count", 1);
user_pref("browser.startup.homepage", "chrome://browser/content/blanktab.html");
user_pref("browser.startup.homepage_override.buildID", "");
user_pref("browser.startup.homepage_override.mstone", "ignore");

user_pref("browser.startup.page", 0);
user_pref("browser.tabs.animate", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

user_pref("browser.toolbars.bookmarks.showOtherBookmarks", false);
user_pref("browser.toolbars.bookmarks.visibility", "never");

user_pref("browser.urlbar.addons.featureGate", false);

user_pref("browser.urlbar.quicksuggest.allowPositionInSuggestions", false);
user_pref("browser.urlbar.quicksuggest.scenario", "");
user_pref("browser.urlbar.quicksuggest.shouldShowOnboardingDialog", false);

user_pref("browser.urlbar.richSuggestions.featureGate", false);
user_pref("browser.urlbar.richSuggestions.tail", false);

user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.quickactions", false);
user_pref("browser.urlbar.shortcuts.tabs", false);

user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);

user_pref("browser.urlbar.speculativeConnect.enabled", false);

user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.clipboard", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.mdn", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.pocket", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.remotetab", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.weather", false);

user_pref("browser.urlbar.trimURLs", false);

user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);

user_pref("captivedetect.canonicalContent", "");
user_pref("captivedetect.canonicalURL", "");

user_pref("config.trim_on_minimize", true);

user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 2);

user_pref("devtools.aboutdebugging.showHiddenAddons", true);

user_pref("devtools.netmonitor.features.newEditAndResend", false);
user_pref("devtools.performance.popup.intro-displayed", true);

user_pref("devtools.screenshot.audio.enabled", false);

user_pref("dom.battery.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.event.contextmenu.enabled", false);
user_pref("dom.forms.autocomplete.formautofill", false);

user_pref("dom.push.userAgentID", "");

user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);

/*
Get any required addons or extensions from addons.mozilla.com
then update them manually 
*/
user_pref("extensions.getAddons.browserMappings.url", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.get.url", "");
user_pref("extensions.getAddons.langpacks.url", "");
user_pref("extensions.getAddons.link.url", "");
user_pref("extensions.getAddons.search.browseURL", "");

user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.addresses.ignoreAutocompleteOff", false);

user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.creditCards.ignoreAutocompleteOff", false);

user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.getAddons.cache.enabled", false);

user_pref("extensions.htmlaboutaddons.inline-options.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

user_pref("extensions.pictureinpicture.enable_picture_in_picture_overrides", false);

user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.bffApi", "");
user_pref("extensions.pocket.bffRecentSaves", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.loggedOutVariant", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.oAuthConsumerKeyBff", "");
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.site", "");

user_pref("extensions.screenshots.disabled", true);

/* 
for extensions.quarantinedDomains.list and extensions.systemAddonSet
see the following articles: 
  - https://support.mozilla.org/en-US/kb/quarantined-domains 
  - https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AMRemoteSettings-overview.html
  
*/
user_pref("extensions.systemAddonSet", "{\"schema\":1,\"addons\":{}}");
 
/*
for extensions.ui.dictionary.hidden and extensions.ui.lastCategory 
see the following articles:
  - https://support.mozilla.org/en-US/questions/1410331
  
*/
user_pref("extensions.ui.dictionary.hidden", false);
user_pref("extensions.ui.extension.hidden", false);
user_pref("extensions.ui.locale.hidden", false);
user_pref("extensions.ui.sitepermission.hidden", false);

/* 
for things related to web compatibility, see: 
  - https://www.reddit.com/r/webdev/comments/cd1lob/how_firefox_68_tackles_web_compatibility_issues/
  - https://www.otsukare.info/2021/01/22/site-interventions-and-webdriver
  - https://github.com/karlcow
  
*/
user_pref("extensions.webcompat.enable_shims", true);
user_pref("extensions.webcompat.perform_injections", true);
user_pref("extensions.webcompat.perform_ua_overrides", true);

user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.wifi.uri", false);

user_pref("gfx-shader-check.device-id", "");

user_pref("idle.lastDailyNotification", 0);

user_pref("intl.tsf.expose_url.allowed", false);

user_pref("javascript.use_us_english_locale", true);

user_pref("layers.acceleration.disabled", true);
user_pref("layers.amd-switchable-gfx.enabled", false);
user_pref("layers.async-pan-zoom.enabled", false);
user_pref("layers.deaa.enabled", false);
user_pref("layers.gpu-process.enabled", false);
user_pref("layers.offmainthreadcomposition.async-animations", false);
user_pref("layers.shared-buffer-provider.enabled", false);

user_pref("layout.css.always_underline_links", true);

user_pref("media.autoplay.block-event.enabled", true);
user_pref("media.autoplay.default", 5);
user_pref("media.eme.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

user_pref("media.navigator.enabled", false);
user_pref("media.navigator.permission.disabled", true);
user_pref("media.navigator.video.enabled", false);

user_pref("media.peerconnection.allow_old_setParameters", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

user_pref("media.videocontrols.picture-in-picture.video-toggle.first-seen-secs", 0);

user_pref("network.IDN_show_punycode", true);
user_pref("network.auth.subresource-http-auth-allow", 1);

user_pref("network.captive-portal-service.enabled", false);

user_pref("network.connectivity-service.enabled", false);
user_pref("network.connectivity-service.nat64-check", false);

user_pref("network.cookie.alwaysAcceptSessionCookies", false);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.noPersistentStorage", true);
user_pref("network.cookie.sameSite.schemeful", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);

user_pref("network.dns.disablePrefetch", true);
user_pref("network.gio.supported-protocols", "");

user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 1);
user_pref("network.http.referer.defaultPolicy.pbmode", 1);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("network.http.sendRefererHeader", 1);
user_pref("network.http.sendSecureXSiteReferrer", false);
user_pref("network.http.speculative-parallel-limit", 0);

user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

user_pref("network.websocket.enabled", false);

user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enablePrintAutoRotate", false);
user_pref("pdfjs.enableScripting", false);
user_pref("pdfjs.enableStampEditor", false);
user_pref("pdfjs.enableXfa", false);
user_pref("pdfjs.enabledCache.state", false);
user_pref("pdfjs.handleOctetStream", false);
user_pref("pdfjs.migrationVersion", 2);

user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);
user_pref("permissions.manager.defaultsUrl", "");

user_pref("places.history.enabled", false);

user_pref("plugins.enumerable_names", "");

user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);

user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.fingerprintingProtection", true);

user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);

user_pref("privacy.history.custom", true);
user_pref("privacy.purge_trackers.date_in_cookie_database", "0");

user_pref("privacy.query_stripping.enabled.pbmode", true);

user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.pbmode", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

user_pref("privacy.sanitize.pending", "[{\"id\":\"shutdown\",\"itemsToClear\":[\"cache\",\"cookies\",\"offlineApps\"],\"options\":{}}]");

user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.timeSpan", 0);

user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

user_pref("privacy.userContext.about_newtab_segregation.enabled", false);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", false);

user_pref("privacy.userContext.extension", true);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

user_pref("privacy.webrtc.globalMuteToggles", true);

user_pref("privacy.window.maxInnerHeight", 1080); // choose a suitable value for spoofed screen size
user_pref("privacy.window.maxInnerWidth", 1920);

user_pref("sanity-test.device-id", "");
user_pref("sanity-test.running", false);

user_pref("security.OCSP.require", true);
user_pref("security.enterprise_roots.enabled", false);

user_pref("security.oskeystore.test.encrypted", "");
user_pref("security.oskeystore.test.label", "");


user_pref("security.pki.cert_short_lifetime_in_days", 1);

user_pref("security.tls.enable_0rtt_data", false);

/*
for services.settings.main.xxxx.last_check
leave existing value in prefs.js

halt all services.sync activities
*/

user_pref("services.sync.clients.lastSync", "0");
user_pref("services.sync.declinedEngines", "");
user_pref("services.sync.engine.addons", false);
user_pref("services.sync.engine.addresses.available", true);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.engine.bookmarks.validation.enabled", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.passwords.validation.enabled", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.globalScore", 0);
user_pref("services.sync.log.appender.file.logOnError", false);
user_pref("services.sync.log.appender.file.logOnSuccess", false);
user_pref("services.sync.nextSync", 0);
user_pref("services.sync.prefs.sync.accessibility.blockautorefresh", false);
user_pref("services.sync.prefs.sync.accessibility.browsewithcaret", false);
user_pref("services.sync.prefs.sync.accessibility.typeaheadfind", false);
user_pref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", false);
user_pref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", false);
user_pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", false);
user_pref("services.sync.prefs.sync.browser.contentblocking.category", false);
user_pref("services.sync.prefs.sync.browser.contentblocking.features.strict", false);
user_pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("services.sync.prefs.sync.browser.ctrlTab.sortByRecentlyUsed", false);
user_pref("services.sync.prefs.sync.browser.discovery.enabled", false);
user_pref("services.sync.prefs.sync.browser.download.useDownloadDir", false);
user_pref("services.sync.prefs.sync.browser.firefox-view.feature-tour", false);
user_pref("services.sync.prefs.sync.browser.formfill.enable", false);
user_pref("services.sync.prefs.sync.browser.link.open_newwindow", false);
user_pref("services.sync.prefs.sync.browser.menu.showViewImageInfo", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.rows", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.topstories.rows", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSearch", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.topSitesRows", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.enabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.pinned", false);
user_pref("services.sync.prefs.sync.browser.pdfjs.feature-tour", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
user_pref("services.sync.prefs.sync.browser.search.update", false);
user_pref("services.sync.prefs.sync.browser.search.widget.inNavBar", false);
user_pref("services.sync.prefs.sync.browser.startup.homepage", false);
user_pref("services.sync.prefs.sync.browser.startup.page", false);
user_pref("services.sync.prefs.sync.browser.startup.upgradeDialog.enabled", false);
user_pref("services.sync.prefs.sync.browser.tabs.loadInBackground", false);
user_pref("services.sync.prefs.sync.browser.tabs.warnOnClose", false);
user_pref("services.sync.prefs.sync.browser.tabs.warnOnOpen", false);
user_pref("services.sync.prefs.sync.browser.taskbar.previews.enable", false);
user_pref("services.sync.prefs.sync.browser.urlbar.maxRichResults", false);
user_pref("services.sync.prefs.sync.browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.engines", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", false);
user_pref("services.sync.prefs.sync.dom.disable_open_during_load", false);
user_pref("services.sync.prefs.sync.dom.disable_window_flip", false);
user_pref("services.sync.prefs.sync.dom.disable_window_move_resize", false);
user_pref("services.sync.prefs.sync.dom.event.contextmenu.enabled", false);
user_pref("services.sync.prefs.sync.dom.security.https_only_mode", false);
user_pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled", false);
user_pref("services.sync.prefs.sync.dom.security.https_only_mode_ever_enabled_pbm", false);
user_pref("services.sync.prefs.sync.dom.security.https_only_mode_pbm", false);
user_pref("services.sync.prefs.sync.extensions.activeThemeID", false);
user_pref("services.sync.prefs.sync.extensions.update.enabled", false);
user_pref("services.sync.prefs.sync.general.autoScroll", false);
user_pref("services.sync.prefs.sync.general.smoothScroll", false);
user_pref("services.sync.prefs.sync.intl.accept_languages", false);
user_pref("services.sync.prefs.sync.intl.regional_prefs.use_os_locales", false);
user_pref("services.sync.prefs.sync.layout.spellcheckDefault", false);
user_pref("services.sync.prefs.sync.media.autoplay.default", false);
user_pref("services.sync.prefs.sync.media.eme.enabled", false);
user_pref("services.sync.prefs.sync.media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("services.sync.prefs.sync.network.cookie.cookieBehavior", false);
user_pref("services.sync.prefs.sync.network.cookie.thirdparty.sessionOnly", false);
user_pref("services.sync.prefs.sync.permissions.default.image", false);
user_pref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", false);
user_pref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.history", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", false);
user_pref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", false);
user_pref("services.sync.prefs.sync.privacy.donottrackheader.enabled", false);
user_pref("services.sync.prefs.sync.privacy.globalprivacycontrol.enabled", false);
user_pref("services.sync.prefs.sync.privacy.reduceTimerPrecision", false);
user_pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", false);
user_pref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", false);
user_pref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", false);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.cryptomining.enabled", false);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.enabled", false);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", false);
user_pref("services.sync.prefs.sync.privacy.userContext.enabled", false);
user_pref("services.sync.prefs.sync.privacy.userContext.newTabContainerOnLeftClick.enabled", false);
user_pref("services.sync.prefs.sync.security.default_personal_cert", false);
user_pref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", false);
user_pref("services.sync.prefs.sync.signon.autofillForms", false);
user_pref("services.sync.prefs.sync.signon.generation.enabled", false);
user_pref("services.sync.prefs.sync.signon.management.page.breach-alerts.enabled", false);
user_pref("services.sync.prefs.sync.signon.rememberSignons", false);
user_pref("services.sync.prefs.sync.spellchecker.dictionary", false);
user_pref("services.sync.prefs.sync.ui.osk.enabled", false);
user_pref("services.sync.sendVersionInfo", false);
user_pref("services.sync.syncedTabs.showRemoteIcons", false);

user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.autocompleteOff", false);
user_pref("signon.backup.enabled", false);
user_pref("signon.capture.inputChanges.enabled", false);
user_pref("signon.formRemovalCapture.enabled", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.improvedPasswordRules.enabled", false);
user_pref("signon.includeOtherSubdomainsInLookup", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.os-auth.enabled", false);
user_pref("signon.management.page.vulnerable-passwords.enabled", false);
user_pref("signon.passwordEditCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.recipes.remoteRecipes.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.signupDetection.enabled", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.usernameOnlyForm.enabled", false);

user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url", "");

user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.crashreporter.include_context_heap", false);
// user_pref("toolkit.startup.last_success", -1);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
// user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

user_pref("webextensions.storage.sync.enabled", false);

user_pref("webgl.disabled", true);
