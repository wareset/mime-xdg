/* eslint-disable max-len */

export const _MIME_TYPES = ["application","zz-application","audio","text","image","model","x-epoc","video","chemical","font","message","flv-application","multipart"] as const

export const _MIME_NAMES = [["vnd.lotus-1-2-3","x-lotus123","x-123","lotus123","wk1","x-t602","andrew-inset","applixware","x-applix-word","atom+xml","atomcat+xml","atomsvc+xml","ccxml+xml","cdmi-capability","cdmi-container","cdmi-domain","cdmi-object","cdmi-queue","cu-seeme","davmount+xml","docbook+xml","x-docbook+xml","vnd.oasis.docbook+xml","dssc+der","dssc+xml","ecmascript","emma+xml","epub+zip","exi","font-tdpfr","vnd.truedoc","gml+xml","gpx+xml","gpx","x-gpx+xml","x-gpx","gxf","hyperstudio","inkml+xml","ipfix","java-archive","x-jar","x-java-archive","java-serialized-object","java-vm","x-java","java","java-byte-code","x-java-class","x-java-vm","json","schema+json","jsonml+json","lost+xml","mac-binhex40","mac-compactpro","mads+xml","marc","marcxml+xml","mathematica","x-mathematica","mathml+xml","mbox","mediaservercontrol+xml","metalink+xml","metalink4+xml","mets+xml","mods+xml","mp21","mp4","msword","vnd.ms-word","x-msword","msword-template","mxf","octet-stream","x-sharedlib","x-xar","oda","oebps-package+xml","ogg","x-ogg","omdoc+xml","onenote","oxps","patch-ops-error+xml","pdf","x-pdf","acrobat","nappdf","pgp-encrypted","pgp","pgp-signature","pgp-keys","pics-rules","pkcs10","pkcs7-mime","pkcs7-signature","pkcs8","pkix-attr-cert","pkix-cert","pkix-crl","pkix-pkipath","pkixcmp","pls+xml","pls","postscript","illustrator","vnd.adobe.illustrator","prs.cww","pskc+xml","rdf+xml","reginfo+xml","relax-ng-compact-syntax","x-rnc","resource-lists+xml","resource-lists-diff+xml","rls-services+xml","rpki-ghostbusters","vnd.gerber","x-gerber","rpki-manifest","rpki-roa","rsd+xml","rss+xml","rtf","sbml+xml","scvp-cv-request","scvp-cv-response","scvp-vp-request","scvp-vp-response","sdp","x-sdp","vnd.sdp","vnd.stardivision.impress","set-payment-initiation","set-registration-initiation","shf+xml","smil+xml","x-sami","smil","sparql-query","sparql-results+xml","srgs","srgs+xml","sru+xml","ssdl+xml","ssml+xml","tei+xml","thraud+xml","timestamped-data","vnd.3gpp.pic-bw-large","vnd.3gpp.pic-bw-small","vnd.3gpp.pic-bw-var","vnd.3gpp2.tcap","vnd.3m.post-it-notes","vnd.accpac.simply.aso","vnd.accpac.simply.imp","vnd.acucobol","vnd.acucorp","vnd.adobe.air-application-installer-package+zip","vnd.adobe.formscentral.fcdt","vnd.adobe.fxp","vnd.adobe.xdp+xml","vnd.adobe.xfdf","vnd.ahead.space","vnd.airzip.filesecure.azf","vnd.airzip.filesecure.azs","vnd.amazon.ebook","vnd.americandynamics.acc","vnd.amiga.ami","vnd.android.package-archive","vnd.anser-web-certificate-issue-initiation","vnd.anser-web-funds-transfer-initiation","vnd.antix.game-component","vnd.apple.installer+xml","vnd.apple.mpegurl","m3u","vnd.aristanetworks.swi","vnd.astraea-software.iota","vnd.audiograph","vnd.blueice.multipass","vnd.bmi","vnd.businessobjects","vnd.chemdraw+xml","vnd.chipnuts.karaoke-mmd","vnd.cinderella","vnd.claymore","vnd.cloanto.rp9","vnd.clonk.c4group","vnd.cluetrust.cartomobile-config","vnd.cluetrust.cartomobile-config-pkg","vnd.commonspace","vnd.contact.cmsg","vnd.cosmocaller","vnd.crick.clicker","vnd.crick.clicker.keyboard","vnd.crick.clicker.palette","vnd.crick.clicker.template","vnd.crick.clicker.wordbank","vnd.criticaltools.wbs+xml","vnd.ctc-posml","vnd.cups-ppd","vnd.curl.car","vnd.curl.pcurl","vnd.dart","vnd.data-vision.rdz","vnd.dece.data","vnd.dece.ttml+xml","vnd.dece.unspecified","vnd.dece.zip","vnd.denovo.fcselayout-link","vnd.dna","vnd.dolby.mlp","vnd.dpgraph","vnd.dreamfactory","vnd.ds-keypoint","vnd.dvb.ait","vnd.dvb.service","vnd.dynageo","vnd.ecowin.chart","vnd.enliven","vnd.epson.esf","vnd.epson.msf","vnd.epson.quickanime","vnd.epson.salt","vnd.epson.ssf","vnd.eszigno3+xml","vnd.ezpix-album","vnd.ezpix-package","vnd.fdf","vnd.fdsn.mseed","vnd.fdsn.seed","vnd.flographit","vnd.fluxtime.clip","vnd.framemaker","x-frame","vnd.frogans.fnc","vnd.frogans.ltf","vnd.fsc.weblaunch","vnd.fujitsu.oasys","vnd.fujitsu.oasys2","vnd.fujitsu.oasys3","vnd.fujitsu.oasysgp","vnd.fujitsu.oasysprs","vnd.fujixerox.ddd","vnd.fujixerox.docuworks","vnd.fujixerox.docuworks.binder","vnd.fuzzysheet","vnd.genomatix.tuxedo","vnd.geogebra.file","vnd.geogebra.slides","vnd.geogebra.tool","vnd.geometry-explorer","vnd.geonext","vnd.geoplan","vnd.geospace","vnd.gmx","vnd.google-earth.kml+xml","vnd.google-earth.kmz","vnd.grafeq","vnd.groove-account","vnd.groove-help","vnd.groove-identity-message","vnd.groove-injector","vnd.groove-tool-message","vnd.groove-tool-template","vnd.groove-vcard","vnd.hal+xml","vnd.handheld-entertainment+xml","vnd.hbci","vnd.hhe.lesson-player","vnd.hp-hpgl","vnd.hp-hpid","vnd.hp-hps","vnd.hp-jlyt","vnd.hp-pcl","vnd.hp-pclxl","vnd.hydrostatix.sof-data","vnd.ibm.minipay","vnd.ibm.modcap","vnd.ibm.rights-management","vnd.ibm.secure-container","vnd.iccprofile","vnd.igloader","vnd.immervision-ivp","vnd.immervision-ivu","vnd.insors.igm","vnd.intercon.formnet","vnd.intergeo","vnd.intu.qbo","vnd.intu.qfx","vnd.ipunplugged.rcprofile","vnd.irepository.package+xml","vnd.is-xpr","vnd.isac.fcs","vnd.jam","vnd.jcp.javame.midlet-rms","vnd.rn-realmedia","vnd.rn-realmedia-vbr","vnd.jisp","vnd.joost.joda-archive","vnd.kahootz","vnd.kde.karbon","x-karbon","vnd.kde.kchart","x-kchart","vnd.kde.kformula","x-kformula","vnd.kde.kivio","x-kivio","vnd.kde.kontour","x-kontour","vnd.kde.kpresenter","x-kpresenter","vnd.kde.kspread","x-kspread","vnd.kde.kword","x-kword","vnd.kenameaapp","vnd.kidspiration","vnd.kinar","vnd.koan","vnd.kodak-descriptor","vnd.las.las+xml","vnd.llamagraphics.life-balance.desktop","vnd.llamagraphics.life-balance.exchange+xml","vnd.lotus-approach","vnd.lotus-freelance","vnd.lotus-notes","vnd.lotus-organizer","vnd.lotus-screencam","vnd.lotus-wordpro","vnd.macports.portpkg","vnd.mcd","vnd.medcalcdata","vnd.mediastation.cdkey","vnd.mfer","vnd.mfmp","vnd.micrografx.flo","vnd.micrografx.igx","vnd.mif","x-mif","vnd.mobius.daf","vnd.mobius.dis","vnd.mobius.mbk","vnd.mobius.mqy","vnd.mobius.msl","vnd.mobius.plc","vnd.mobius.txf","vnd.mophun.application","vnd.mophun.certificate","vnd.mozilla.xul+xml","vnd.ms-artgalry","vnd.ms-cab-compressed","vnd.ms-excel","msexcel","x-msexcel","vnd.ms-excel.addin.macroenabled.12","vnd.ms-excel.addin.macroEnabled.12","vnd.ms-excel.sheet.binary.macroenabled.12","vnd.ms-excel.sheet.binary.macroEnabled.12","vnd.ms-excel.sheet.macroenabled.12","vnd.ms-excel.sheet.macroEnabled.12","vnd.ms-excel.template.macroenabled.12","vnd.ms-excel.template.macroEnabled.12","vnd.ms-fontobject","vnd.ms-htmlhelp","x-chm","vnd.ms-ims","vnd.ms-lrm","vnd.ms-officetheme","vnd.ms-pki.seccat","vnd.ms-pki.stl","vnd.ms-powerpoint","powerpoint","mspowerpoint","x-mspowerpoint","vnd.ms-powerpoint.addin.macroenabled.12","vnd.ms-powerpoint.addin.macroEnabled.12","vnd.ms-powerpoint.presentation.macroenabled.12","vnd.ms-powerpoint.presentation.macroEnabled.12","vnd.ms-powerpoint.slide.macroenabled.12","vnd.ms-powerpoint.slide.macroEnabled.12","vnd.ms-powerpoint.slideshow.macroenabled.12","vnd.ms-powerpoint.slideshow.macroEnabled.12","vnd.ms-powerpoint.template.macroenabled.12","vnd.ms-powerpoint.template.macroEnabled.12","vnd.ms-project","vnd.ms-word.document.macroenabled.12","vnd.ms-word.document.macroEnabled.12","vnd.ms-word.template.macroenabled.12","vnd.ms-word.template.macroEnabled.12","vnd.ms-works","vnd.ms-wpl","vnd.ms-xpsdocument","xps","vnd.mseq","vnd.musician","vnd.muvee.style","vnd.mynfc","vnd.neurolanguage.nlu","vnd.nitf","vnd.noblenet-directory","vnd.noblenet-sealer","vnd.noblenet-web","vnd.nokia.n-gage.data","vnd.nokia.n-gage.symbian.install","vnd.nokia.radio-preset","vnd.nokia.radio-presets","vnd.novadigm.edm","vnd.novadigm.edx","vnd.novadigm.ext","vnd.oasis.opendocument.chart","vnd.oasis.opendocument.chart-template","vnd.oasis.opendocument.database","vnd.sun.xml.base","vnd.oasis.opendocument.formula","vnd.oasis.opendocument.formula-template","vnd.oasis.opendocument.graphics","vnd.oasis.opendocument.graphics-template","vnd.oasis.opendocument.image","vnd.oasis.opendocument.image-template","vnd.oasis.opendocument.presentation","vnd.oasis.opendocument.presentation-template","vnd.oasis.opendocument.spreadsheet","vnd.oasis.opendocument.spreadsheet-template","vnd.oasis.opendocument.text","vnd.oasis.opendocument.text-master","vnd.oasis.opendocument.text-template","vnd.oasis.opendocument.text-web","vnd.olpc-sugar","vnd.oma.dd2+xml","vnd.openofficeorg.extension","vnd.openxmlformats-officedocument.presentationml.presentation","vnd.openxmlformats-officedocument.presentationml.slide","vnd.openxmlformats-officedocument.presentationml.slideshow","vnd.openxmlformats-officedocument.presentationml.template","vnd.openxmlformats-officedocument.spreadsheetml.sheet","vnd.openxmlformats-officedocument.spreadsheetml.template","vnd.openxmlformats-officedocument.wordprocessingml.document","vnd.openxmlformats-officedocument.wordprocessingml.template","vnd.osgeo.mapguide.package","x-magicpoint","vnd.osgi.dp","vnd.osgi.subsystem","vnd.palm","x-ms-pdb","x-aportisdoc","x-palm-database","vnd.pawaafile","vnd.pg.format","vnd.pg.osasli","vnd.picsel","vnd.pmi.widget","vnd.pocketlearn","vnd.powerbuilder6","vnd.previewsystems.box","vnd.proteus.magazine","vnd.publishare-delta-tree","vnd.pvi.ptid1","vnd.quark.quarkxpress","vnd.realvnc.bed","vnd.recordare.musicxml","vnd.recordare.musicxml+xml","vnd.rig.cryptonote","vnd.rim.cod","vnd.route66.link66+xml","vnd.sailingtracker.track","vnd.seemail","vnd.sema","vnd.semd","vnd.semf","vnd.shana.informed.formdata","vnd.shana.informed.formtemplate","vnd.shana.informed.interchange","vnd.shana.informed.package","vnd.simtech-mindmapper","vnd.smaf","x-smaf","vnd.smart.teacher","vnd.solent.sdkm+xml","vnd.spotfire.dxp","vnd.spotfire.sfs","vnd.stardivision.calc","vnd.stardivision.draw","vnd.stardivision.math","vnd.stardivision.writer","vnd.stardivision.writer-global","vnd.stepmania.package","vnd.stepmania.stepchart","vnd.sun.xml.calc","vnd.sun.xml.calc.template","vnd.sun.xml.draw","vnd.sun.xml.draw.template","vnd.sun.xml.impress","vnd.sun.xml.impress.template","vnd.sun.xml.math","vnd.sun.xml.writer","vnd.sun.xml.writer.global","vnd.sun.xml.writer.template","vnd.sus-calendar","vnd.svd","vnd.symbian.install","vnd.syncml+xml","vnd.syncml.dm+wbxml","vnd.syncml.dm+xml","vnd.tao.intent-module-archive","vnd.tcpdump.pcap","x-pcap","pcap","vnd.tmobile-livetv","vnd.trid.tpt","vnd.triscape.mxs","vnd.trueapp","vnd.ufdl","vnd.uiq.theme","vnd.umajin","vnd.unity","vnd.uoml+xml","vnd.vcx","vnd.visio","tga","x-targa","x-tga","vnd.visionary","vnd.vsf","vnd.wap.wbxml","vnd.wap.wmlc","vnd.wap.wmlscriptc","vnd.webturbo","vnd.wolfram.player","vnd.wordperfect","x-wordperfect","wordperfect","vnd.wqd","vnd.wt.stf","vnd.xara","vnd.xfdl","vnd.yamaha.hv-dic","vnd.yamaha.hv-script","vnd.yamaha.hv-voice","vnd.yamaha.openscoreformat","vnd.yamaha.openscoreformat.osfpvg+xml","vnd.yamaha.smaf-audio","vnd.yamaha.smaf-phrase","vnd.yellowriver-custom-menu","vnd.zul","vnd.zzazz.deck+xml","voicexml+xml","wasm","widget","winhlp","wsdl+xml","wspolicy+xml","x-7z-compressed","x-abiword","x-ace-compressed","x-ace","x-apple-diskimage","x-authorware-bin","x-authorware-map","x-authorware-seg","x-bcpio","x-bittorrent","x-blorb","x-bzip","x-bzip2","bzip2","x-cbr","vnd.comicbook-rar","x-cbt","vnd.comicbook+zip","x-cbz","x-cb7","x-cdlink","x-cfs-compressed","x-chat","x-chess-pgn","vnd.chess-pgn","x-conference","x-netshow-channel","x-cpio","x-csh","x-debian-package","vnd.debian.binary-package","x-deb","x-dgc-compressed","x-director","x-doom","x-wii-wad","x-doom-wad","x-dtbncx+xml","x-dtbook+xml","x-dtbresource+xml","x-godot-resource","x-dvi","x-envoy","x-eva","x-font-bdf","x-font-ghostscript","x-font-type1","x-font-linux-psf","x-font-pcf","x-cisco-vpn-settings","x-font-snf","x-font-afm","x-freearc","x-futuresplash","vnd.adobe.flash.movie","x-shockwave-flash","futuresplash","x-gca-compressed","x-glulx","x-gnumeric","x-gramps-xml","x-gtar","x-tar","x-hdf","x-install-instructions","x-iso9660-image","x-sega-cd-rom","x-sega-pico-rom","x-saturn-rom","x-dreamcast-rom","x-wii-rom","x-wii-iso-image","x-wbfs","x-wia","x-gamecube-rom","x-gamecube-iso-image","vnd.efi.iso","x-cd-image","x-java-jnlp-file","x-latex","x-tex","x-lzh-compressed","x-lha","x-mie","x-mobipocket-ebook","x-ms-application","x-ms-shortcut","x-ms-wmd","x-ms-wmz","x-msmetafile","x-ms-xbap","x-msaccess","vnd.ms-access","msaccess","vnd.msaccess","mdb","x-mdb","x-lmdb","x-msbinder","x-mscardfile","x-msclip","x-msdownload","x-ms-dos-executable","x-bat","bat","x-msi","x-msmediaview","x-wmf","wmf","x-emf","emf","x-msmoney","x-mspublisher","vnd.ms-publisher","x-msschedule","x-msterminal","x-mswrite","x-netcdf","x-nzb","x-pkcs12","pkcs12","x-pkcs7-certificates","x-pkcs7-certreqresp","x-rar-compressed","vnd.rar","x-rar","x-research-info-systems","x-sh","x-shellscript","x-shar","x-silverlight-app","x-sql","sql","x-stuffit","stuffit","x-sit","x-stuffitx","x-sitx","x-subrip","x-srt","x-sv4cpio","x-sv4crc","x-t3vm-image","x-tads","x-tcl","x-tex-tfm","x-texinfo","x-tgif","x-ustar","x-wais-source","x-x509-ca-cert","x-xfig","x-xliff+xml","xliff+xml","x-xliff","x-xpinstall","x-xz","x-zmachine","xaml+xml","xcap-diff+xml","xenc+xml","xhtml+xml","xml","xslt+xml","xml-dtd","xop+xml","xproc+xml","xspf+xml","x-xspf+xml","xv+xml","yang","yin+xml","zip","x-zip-compressed","x-zip","x-apple-systemprofiler+xml","x-ms-asx","ram","x-font-otf","x-font-ttf","font-woff","photoshop","x-photoshop","x-nintendo-3ds-rom","ico","ics","x-javascript","javascript","x-troff","x-perl","x-troff-man","x-flash-video","vnd.ms-asf","x-atari-2600-rom","x-atari-7800-rom","x-atari-lynx-rom","vnd.amazon.mobi8-ebook","x-mobi8-ebook","x-partial-download","x-wwf","wwf","x-windows-themepack","vnd.apple.keynote","x-iwork-keynote-sffkey","pkcs8-encrypted","raml+yaml","sieve","x-sqlite2","vnd.sqlite3","x-sqlite3","x-gedcom","x-go-sgf","x-godot-scene","x-godot-shader","x-gdscript","toml","yaml","x-yaml","vnd.corel-draw","cdr","coreldraw","x-cdr","x-coreldraw","vnd.ms-visio.drawing.main+xml","vnd.ms-visio.template.main+xml","vnd.ms-visio.stencil.main+xml","vnd.ms-visio.drawing.macroEnabled.main+xml","vnd.ms-visio.template.macroEnabled.main+xml","vnd.ms-visio.stencil.macroEnabled.main+xml","gnunet-directory","vnd.ms-tnef","ms-tnef","vnd.stardivision.chart","vnd.stardivision.mail","x-genesis-rom","vnd.oasis.opendocument.text-flat-xml","vnd.oasis.opendocument.graphics-flat-xml","vnd.oasis.opendocument.presentation-flat-xml","vnd.oasis.opendocument.spreadsheet-flat-xml","vnd.youtube.yt","x-spss-por","x-spss-sav","x-spss-savefile","x-xbel","x-cue","x-amipro","x-applix-spreadsheet","x-archive","x-arj","x-asar","x-asp","x-awk","x-blender","x-bzdvi","x-bzip-compressed-tar","x-bzip2-compressed-tar","x-bzip3","x-bzip3-compressed-tar","x-bzpdf","x-bzpostscript","x-lrzip","x-lrzip-compressed-tar","vnd.efi.img","x-raw-disk-image","x-raw-floppy-disk-image","x-fd-file","x-raw-disk-image-xz-compressed","x-compressed-iso","x-iso9660-appimage","vnd.appimage","x-cdrdao-toc","x-gd-rom-cue","x-discjuggler-cd-image","x-compress","x-compressed-tar","x-cpio-compressed","vnd.dbf","dbase","dbf","x-dbase","x-dbf","x-mame-chd","x-nintendo-ds-rom","x-nintendo-3ds-executable","x-pc-engine-rom","x-thomson-cartridge-memo7","x-thomson-cassette","x-hfe-floppy-image","x-hfe-file","x-thomson-sap-image","x-sap-file","x-designer","x-gtk-builder","x-desktop","x-gnome-app-info","x-fictionbook+xml","x-fictionbook","x-zip-compressed-fb2","x-dia-diagram","x-dia-shape","x-e-theme","x-egon","x-fluid","x-gz-font-linux-psf","x-font-speedo","x-font-ttx","x-gameboy-rom","x-gameboy-color-rom","x-gba-rom","x-virtual-boy-rom","x-genesis-32x-rom","x-gettext-translation","x-glade","x-gnucash","x-gnuplot","x-graphite","x-gzdvi","gzip","x-gzip","x-gzpdf","x-gzpostscript","x-java-keystore","x-java-jce-keystore","x-java-pack200","jrd+json","json-patch+json","ld+json","x-ipynb+json","vnd.coffeescript","x-jbuilder-project","x-kexi-connectiondata","x-kexiproject-shortcut","x-kexiproject-sqlite2","x-kexiproject-sqlite3","x-vnd.kde.kexi","x-kexiproject-sqlite","x-killustrator","x-kpovmodeler","x-krita","x-kugar","x-lhz","x-linguist","x-lyx","x-lz4","x-lz4-compressed-tar","x-lzip","x-lzip-compressed-tar","x-lzpdf","x-lzma","x-lzma-compressed-tar","x-lzop","x-qpress","zlib","x-mimearchive","x-mswinurl","x-msx-rom","x-m4","x-n64-rom","x-neo-geo-pocket-rom","x-neo-geo-pocket-color-rom","x-nes-rom","x-object","annodex","x-annodex","x-oleo","x-pak","x-par2","x-pagemaker","x-php","x-planperfect","x-pocket-word","x-pw","x-python-bytecode","x-qtiplot","x-quattropro","x-quicktime-media-link","x-quicktimeplayer","x-qw","x-dar","x-alz","x-reject","x-rpm","x-redhat-package-manager","x-source-rpm","x-ruby","x-markaby","x-shared-library-la","x-fishscript","x-nuscript","x-shorten","x-siag","x-sg1000-rom","x-sms-rom","x-gamegear-rom","vnd.nintendo.snes.rom","x-snes-rom","x-tarz","x-tex-gf","x-tex-pk","x-theme","x-trash","x-tzo","x-xz-compressed-tar","x-zpaq","zstd","x-zstd-compressed-tar","x-xzpdf","x-wpg","x-wonderswan-rom","x-wonderswan-color-rom","x-zoo","x-ms-wim","x-ufraw","dicom","fits","x-navi-animation","x-vhd-disk","x-virtualbox-vhd","owl+xml","x-gettext","xml-external-parsed-entity","x-hwp","vnd.haansoft-hwp","x-hwt","vnd.haansoft-hwt","vnd.emusic-emusic_package","geo+json","vnd.geo+json","x-ica","x-it87","x-ccmx","x-bsdiff","trig","x-trig","vnd.apple.numbers","x-iwork-numbers-sffnumbers","vnd.apple.pages","x-iwork-pages-sffpages","vnd.apple.pkpass","x-amiga-disk-format","vnd.flatpak","vnd.xdgapp","vnd.flatpak.repo","vnd.flatpak.ref","vnd.squashfs","vnd.snap","vnd.ms-3mfdocument","x-fds-disk","ovf","x-virtualbox-ova","x-qed-disk","x-qemu-disk","x-vhdx-disk","x-virtualbox-vhdx","x-vmdk-disk","x-virtualbox-vmdk","x-vdi-disk","x-virtualbox-vdi","x-appleworks-document","x-bps-patch","x-ips-patch","x-pyspread-spreadsheet","x-pyspread-bz-spreadsheet","x-openzim","x-openvpn-profile","x-modrinth-modpack+zip","cbor","x-eris-link+cbor","x-gerber-job","x-excellon","x-tiled-tmx","x-tiled-tsx","x-ole-storage","x-iff","x-matroska","x-riff"],["zz-winassoc-123","zz-winassoc-doc","zz-winassoc-cab","zz-winassoc-xls","zz-winassoc-hlp","zz-winassoc-mdb","zz-winassoc-cdr","zz-winassoc-uu"],["x-mod","x-scpls","scpls","x-mpegurl","mpegurl","x-mp3-playlist","m3u","x-m3u","x-musepack","x-psf","adpcm","basic","midi","x-midi","mp4","x-m4a","m4a","mpeg","x-mp3","x-mpg","x-mpeg","mp3","mp2","x-mp2","ogg","x-vorbis+ogg","vorbis","x-vorbis","x-flac+ogg","x-oggflac","x-ogg","x-speex+ogg","x-speex","x-opus+ogg","s3m","x-s3m","silk","vnd.dece.audio","vnd.digital-winds","vnd.dra","vnd.dts","x-dts","vnd.dts.hd","x-dtshd","vnd.lucent.voice","vnd.ms-playready.media.pya","vnd.nuera.ecelp4800","vnd.nuera.ecelp7470","vnd.nuera.ecelp9600","vnd.rip","webm","x-aac","aac","x-aiff","x-aifc","x-aiffc","x-caf","x-flac","flac","x-matroska","x-ms-wax","x-ms-asx","x-ms-wma","wma","x-pn-realaudio","vnd.rn-realaudio","vnd.m-realaudio","x-pn-realaudio-plugin","x-wav","vnd.wave","wav","xm","x-xm","prs.sid","3gpp","3gpp-encrypted","x-rn-3gpp-amr","x-rn-3gpp-amr-encrypted","x-rn-3gpp-amr-wb","x-rn-3gpp-amr-wb-encrypted","3gpp2","x-amzxml","x-gsm","x-iriver-pla","annodex","x-annodex","x-shorten","x-iMelody","iMelody","x-xmf","xmf","mobile-xmf","vnd.nokia.mobile-xmf","ac3","AMR","amr-encrypted","AMR-WB","amr-wb-encrypted","x-ape","x-pn-audibleaudio","vnd.audible","vnd.audible.aax","vnd.audible.aaxc","x-dff","dff","x-dsf","dsf","x-dsd","dsd","x-it","x-tak","x-wavpack","x-wavpack-correction","x-mo3","usac","x-m4r","x-m4b","x-minipsf","x-psflib","x-stm","x-voc","x-xi","x-tta","tta"],["vnd.graphviz","plain","rdf","rust","rss","rtf","x-dart","x-scala","org","x-scheme","x-gettext-translation-template","x-pot","x-devicetree-binary","x-tex","x-sh","x-sql","tcl","x-tcl","x-texinfo","xml","x-dtd","x-devicetree-source","vnd.dvb.subtitle","x-microdvd","x-mpsub","x-subviewer","ico","cache-manifest","calendar","x-vcalendar","css","csv","x-comma-separated-values","x-csv","html","javascript","n3","x-log","prs.lines.tag","richtext","sgml","tab-separated-values","troff","x-troff","x-perl","x-troff-me","x-troff-ms","turtle","uri-list","vcard","directory","x-vcard","vnd.curl","vnd.curl.dcurl","vnd.curl.mcurl","vnd.curl.scurl","vnd.fly","vnd.fmi.flexstor","vnd.in3d.3dml","vnd.in3d.spot","vnd.sun.j2me.app-descriptor","vnd.wap.wml","vnd.wap.wmlscript","x-asm","x-c","x-csrc","x-c++src","x-chdr","x-c++hdr","x-fortran","x-java-source","x-java","x-nfo","x-opml","x-opml+xml","x-pascal","x-setext","x-sfv","x-uuencode","mathml","vnd.familysearch.gedcom","gedcom","yaml","x-yaml","ecmascript","x-kaitai-struct","x-qml","x-modelica","x-groovy","x-gradle","vnd.trolltech.linguist","vnd.qt.linguist","x-lyx","x-ocl","x-cobol","x-reject","x-crystal","crystal","julia","x-fish","x-nu","vtt","x-mpl2","x-ssa","x-iMelody","x-mrml","vnd.rn-realtext","x-txt2tags","x-verilog","x-svhdr","x-svsrc","x-vhdl","x-rst","spreadsheet","vnd.senx.warpscript","x-adasrc","x-bibtex","x-blueprint","x-cmake","x-common-lisp","csv-schema","x-csharp","x-vala","x-ooc","x-dcl","x-dsl","x-dsrc","x-eiffel","x-emacs-lisp","x-elixir","x-erlang","x-genie","x-gettext-translation","x-po","x-gherkin","x-google-video-pointer","google-video-pointer","x-haskell","x-idl","x-ldif","x-lilypond","x-literate-haskell","x-makefile","markdown","x-markdown","x-moc","x-ms-regedit","x-mof","x-mup","x-objcsrc","x-matlab","x-octave","x-objc++src","x-troff-mm","x-ocaml","x-opencl-src","x-patch","x-diff","x-nim","x-nimscript","x-go","x-python","x-python3","x-sagemath","x-lua","x-rpm-spec","x-sass","x-scss","x-typst","x-twig","x-uil","vbscript","vbs","x-xmi","x-xslfo","x-iptables","x-dbus-service","x-systemd-unit","xml-external-parsed-entity","x.gcode","x-gcode-gx","x-kotlin","x-readme"],["pdf","x-eps","x-gimp-gbr","x-tga","targa","tga","x-icb","x-targa","x-kodak-dcr","wmf","x-wmf","x-win-metafile","emf","x-emf","x-xfig","bmp","x-bmp","x-MS-bmp","cgm","g3fax","fax-g3","gif","ief","jpeg","pjpeg","ktx","png","apng","vnd.mozilla.apng","prs.btif","sgi","x-sgi","svg+xml","svg+xml-compressed","tiff","vnd.adobe.photoshop","psd","x-psd","photoshop","x-photoshop","vnd.dece.graphic","vnd.djvu","x-djvu","x.djvu","vnd.djvu+multipage","vnd.dvb.subtitle","vnd.dwg","vnd.dxf","vnd.fastbidsheet","vnd.fpx","vnd.fst","vnd.fujixerox.edmics-mmr","vnd.fujixerox.edmics-rlc","vnd.ms-modi","vnd.ms-photo","jxr","vnd.net-fpx","vnd.wap.wbmp","vnd.xiff","webp","x-3ds","x-cmu-raster","x-cmx","x-freehand","x-icon","vnd.microsoft.icon","ico","icon","x-ico","x-mrsid-image","x-pcx","vnd.zbrush.pcx","x-pict","x-portable-anymap","x-portable-bitmap","x-portable-graymap","x-portable-pixmap","x-rgb","x-xbitmap","x-xpixmap","x-xpm","x-xwindowdump","jpm","cdr","x-cdr","jpx","x-quicktime","x-skencil","vnd.rn-realpix","heif","heic","heic-sequence","heif-sequence","x-jp2-codestream","jp2","jpeg2000","jpeg2000-image","x-jpeg2000-image","jxl","openraster","x-dds","x-exr","x-adobe-dng","x-canon-crw","x-canon-cr2","x-canon-cr3","x-fuji-raf","x-kodak-k25","x-kodak-kdc","x-minolta-mrw","x-nikon-nef","x-nikon-nrw","x-olympus-orf","x-panasonic-rw","x-panasonic-raw","x-panasonic-rw2","x-panasonic-raw2","x-pentax-pef","x-sigma-x3f","x-sony-srf","x-sony-sr2","x-sony-arw","rle","x-applix-graphics","x-bzeps","x-compressed-xcf","x-fits","fits","x-gzeps","x-icns","x-ilbm","x-iff","x-jng","x-lwo","x-lws","x-macpaint","x-msod","x-photo-cd","x-sun-raster","x-win-bitmap","x-xcf","x-gimp-gih","x-gimp-pat","ktx2","astc","avif","avif-sequence","qoi","x-dcraw"],["stl","x.stl-ascii","x.stl-binary","obj","iges","mesh","vnd.collada+xml","vnd.dwf","vnd.gdl","vnd.gtw","vnd.mts","vnd.vtu","vrml","x3d+binary","x3d+vrml","x3d+xml","gltf-binary","gltf+json","mtl","3mf"],["x-sisx-app"],["mp2t","mpeg","x-mpeg","mpeg-system","x-mpeg-system","x-mpeg2","x-theora+ogg","x-theora","ogg","x-ogg","x-ms-wvx","x-ms-wax","x-ms-wmx","3gpp","3gp","3gpp-encrypted","3gpp2","h261","h263","h264","jpeg","jpm","mj2","mp4","mp4v-es","x-m4v","quicktime","vnd.dece.hd","vnd.dece.mobile","vnd.dece.pd","vnd.dece.sd","vnd.dece.video","vnd.dvb.file","vnd.fvt","vnd.mpegurl","x-mpegurl","vnd.ms-playready.media.pyv","vnd.uvvu.mp4","vnd.vivo","vivo","webm","x-f4v","x-fli","x-flic","fli","x-flv","flv","x-matroska","x-matroska-3d","x-mng","x-ms-asf","x-ms-wm","x-ms-asf-plugin","x-ms-vob","x-ms-wmv","x-msvideo","vnd.avi","x-avi","avi","divx","msvideo","vnd.divx","x-sgi-movie","x-smv","x-javafx","vnd.youtube.yt","annodex","x-annodex","x-ogm+ogg","x-ogm","vnd.rn-realvideo","x-real-video","x-mjpeg","dv","x-nsv","vnd.radgamettools.bink","vnd.radgamettools.smacker"],["x-cdx","x-cif","x-cmdf","x-cml","x-csml","x-xyz"],["collection","otf","ttf","woff","woff2"],["rfc822"],["octet-stream"],["related"]] as const

export const _EXTENSIONS = {"123":[0,0,0,1,0,2,0,3,0,4,1,0],"602":[0,5],"669":[2,0],"ez":[0,6],"aw":[0,7,0,8],"atom":[0,9],"atomcat":[0,10],"atomsvc":[0,11],"ccxml":[0,12],"cdmia":[0,13],"cdmic":[0,14],"cdmid":[0,15],"cdmio":[0,16],"cdmiq":[0,17],"cu":[0,18],"davmount":[0,19],"dbk":[0,20,0,21,0,22],"dssc":[0,23],"xdssc":[0,24],"ecma":[0,25],"emma":[0,26],"epub":[0,27],"exi":[0,28],"pfr":[0,29,0,30],"gml":[0,31],"gpx":[0,32,0,33,0,34,0,35],"gxf":[0,36],"stk":[0,37],"ink":[0,38],"inkml":[0,38],"ipfix":[0,39],"jar":[0,40,0,41,0,42],"ser":[0,43],"class":[0,44,0,45,0,46,0,47,0,48,0,49],"json":[0,50,0,51],"jsonml":[0,52],"lostxml":[0,53],"hqx":[0,54],"cpt":[0,55],"mads":[0,56],"mrc":[0,57],"mrcx":[0,58],"ma":[0,59],"nb":[0,59,0,60],"mb":[0,59],"mathml":[0,61],"mbox":[0,62],"mscml":[0,63],"metalink":[0,64],"meta4":[0,65],"mets":[0,66],"mods":[0,67],"m21":[0,68],"mp21":[0,68],"mp4s":[0,69],"doc":[0,70,0,71,0,72,1,1],"dot":[0,70,0,73,3,0],"mxf":[0,74],"bin":[0,75],"dms":[0,75],"lrf":[0,75],"mar":[0,75],"so":[0,75,0,76],"dist":[0,75],"distz":[0,75],"pkg":[0,75,0,77],"bpk":[0,75],"dump":[0,75],"elc":[0,75],"deploy":[0,75],"oda":[0,78],"opf":[0,79],"ogx":[0,80,0,81],"omdoc":[0,82],"onetoc":[0,83],"onetoc2":[0,83],"onetmp":[0,83],"onepkg":[0,83],"oxps":[0,84],"xer":[0,85],"pdf":[0,86,0,87,4,0,0,88,0,89],"pgp":[0,90,0,91,0,92,0,93],"asc":[0,92,3,1,0,90,0,91,0,93],"sig":[0,92],"prf":[0,94],"p10":[0,95],"p7m":[0,96],"p7c":[0,96],"p7s":[0,97],"p8":[0,98],"ac":[0,99],"cer":[0,100],"crl":[0,101],"pkipath":[0,102],"pki":[0,103],"pls":[0,104,2,1,0,105,2,2],"ai":[0,106,0,107,0,108],"eps":[0,106,4,1],"ps":[0,106],"cww":[0,109],"pskcxml":[0,110],"rdf":[0,111,3,2],"rif":[0,112],"rnc":[0,113,0,114],"rl":[0,115],"rld":[0,116],"rs":[0,117,3,3],"gbr":[0,118,4,2,0,119,0,120],"mft":[0,121],"roa":[0,122],"rsd":[0,123],"rss":[0,124,3,4],"rtf":[0,125,3,5],"sbml":[0,126],"scq":[0,127],"scs":[0,128],"spq":[0,129],"spp":[0,130],"sdp":[0,131,0,132,0,133,0,134],"setpay":[0,135],"setreg":[0,136],"shf":[0,137],"smi":[0,138,0,139,0,140],"smil":[0,138,0,140],"rq":[0,141],"srx":[0,142],"gram":[0,143],"grxml":[0,144],"sru":[0,145],"ssdl":[0,146],"ssml":[0,147],"tei":[0,148],"teicorpus":[0,148],"tfi":[0,149],"tsd":[0,150],"plb":[0,151],"psb":[0,152],"pvb":[0,153],"tcap":[0,154],"pwn":[0,155],"aso":[0,156],"imp":[0,157],"acu":[0,158],"atc":[0,159],"acutc":[0,159],"air":[0,160],"fcdt":[0,161],"fxp":[0,162],"fxpl":[0,162],"xdp":[0,163],"xfdf":[0,164],"ahead":[0,165],"azf":[0,166],"azs":[0,167],"azw":[0,168],"acc":[0,169],"ami":[0,170],"apk":[0,171],"cii":[0,172],"fti":[0,173],"atx":[0,174],"mpkg":[0,175],"m3u8":[0,176,2,3,2,4,0,177,2,5,2,6,2,7],"swi":[0,178],"iota":[0,179],"aep":[0,180],"mpm":[0,181],"bmi":[0,182],"rep":[0,183],"cdxml":[0,184],"mmd":[0,185],"cdy":[0,186],"cla":[0,187],"rp9":[0,188],"c4g":[0,189],"c4d":[0,189],"c4f":[0,189],"c4p":[0,189],"c4u":[0,189],"c11amc":[0,190],"c11amz":[0,191],"csp":[0,192],"cdbcmsg":[0,193],"cmc":[0,194],"clkx":[0,195],"clkk":[0,196],"clkp":[0,197],"clkt":[0,198],"clkw":[0,199],"wbs":[0,200],"pml":[0,201],"ppd":[0,202],"car":[0,203],"pcurl":[0,204],"dart":[0,205,3,6],"rdz":[0,206],"uvf":[0,207],"uvvf":[0,207],"uvd":[0,207],"uvvd":[0,207],"uvt":[0,208],"uvvt":[0,208],"uvx":[0,209],"uvvx":[0,209],"uvz":[0,210],"uvvz":[0,210],"fe_launch":[0,211],"dna":[0,212],"mlp":[0,213],"dpg":[0,214],"dfac":[0,215],"kpxx":[0,216],"ait":[0,217],"svc":[0,218],"geo":[0,219],"mag":[0,220],"nml":[0,221],"esf":[0,222],"msf":[0,223],"qam":[0,224],"slt":[0,225],"ssf":[0,226],"es3":[0,227],"et3":[0,227],"ez2":[0,228],"ez3":[0,229],"fdf":[0,230],"mseed":[0,231],"seed":[0,232],"dataless":[0,232],"gph":[0,233],"ftc":[0,234],"fm":[0,235,0,236],"frame":[0,235],"maker":[0,235],"book":[0,235],"fnc":[0,237],"ltf":[0,238],"fsc":[0,239],"oas":[0,240],"oa2":[0,241],"oa3":[0,242],"fg5":[0,243],"bh2":[0,244],"ddd":[0,245],"xdw":[0,246],"xbd":[0,247],"fzs":[0,248],"txd":[0,249],"ggb":[0,250],"ggs":[0,251],"ggt":[0,252],"gex":[0,253],"gre":[0,253],"gxt":[0,254],"g2w":[0,255],"g3w":[0,256],"gmx":[0,257],"kml":[0,258],"kmz":[0,259],"gqf":[0,260],"gqs":[0,260],"gac":[0,261],"ghf":[0,262],"gim":[0,263],"grv":[0,264],"gtm":[0,265],"tpl":[0,266],"vcg":[0,267],"hal":[0,268],"zmm":[0,269],"hbci":[0,270],"les":[0,271],"hpgl":[0,272],"hpid":[0,273],"hps":[0,274],"jlt":[0,275],"pcl":[0,276],"pclxl":[0,277],"sfd-hdstx":[0,278],"mpy":[0,279],"afp":[0,280],"listafp":[0,280],"list3820":[0,280],"irm":[0,281],"sc":[0,282,3,7],"icc":[0,283],"icm":[0,283],"igl":[0,284],"ivp":[0,285],"ivu":[0,286],"igm":[0,287],"xpw":[0,288],"xpx":[0,288],"i2g":[0,289],"qbo":[0,290],"qfx":[0,291],"rcprofile":[0,292],"irp":[0,293],"xpr":[0,294],"fcs":[0,295],"jam":[0,296],"rms":[0,297,0,298,0,299],"jisp":[0,300],"joda":[0,301],"ktz":[0,302],"ktr":[0,302],"karbon":[0,303,0,304],"chrt":[0,305,0,306],"kfo":[0,307,0,308],"flw":[0,309,0,310],"kon":[0,311,0,312],"kpr":[0,313,0,314],"kpt":[0,313,0,314],"ksp":[0,315,0,316],"kwd":[0,317,0,318],"kwt":[0,317,0,318],"htke":[0,319],"kia":[0,320],"kne":[0,321],"knp":[0,321],"skp":[0,322],"skd":[0,322],"skt":[0,322],"skm":[0,322],"sse":[0,323],"lasxml":[0,324],"lbd":[0,325],"lbe":[0,326],"apr":[0,327],"pre":[0,328],"nsf":[0,329],"org":[0,330,3,8],"scm":[0,331,3,9],"lwp":[0,332],"portpkg":[0,333],"mcd":[0,334],"mc1":[0,335],"cdkey":[0,336],"mwf":[0,337],"mfm":[0,338],"flo":[0,339],"igx":[0,340],"mif":[0,341,0,342],"daf":[0,343],"dis":[0,344],"mbk":[0,345],"mqy":[0,346],"msl":[0,347],"plc":[0,348],"txf":[0,349],"mpn":[0,350],"mpc":[0,351,2,8],"xul":[0,352],"cil":[0,353],"cab":[0,354,1,2],"xls":[0,355,0,356,0,357,1,3],"xlm":[0,355,0,356,0,357,1,3],"xla":[0,355,0,356,0,357,1,3],"xlc":[0,355,0,356,0,357,1,3],"xlt":[0,355,0,356,0,357,1,3],"xlw":[0,355,0,356,0,357,1,3],"xlam":[0,358,0,359],"xlsb":[0,360,0,361],"xlsm":[0,362,0,363],"xltm":[0,364,0,365],"eot":[0,366],"chm":[0,367,0,368],"ims":[0,369],"lrm":[0,370],"thmx":[0,371],"cat":[0,372],"stl":[0,373,5,0,5,1,5,2],"ppt":[0,374,0,375,0,376,0,377],"pps":[0,374,0,375,0,376,0,377],"pot":[0,374,3,10,3,11,0,375,0,376,0,377],"ppam":[0,378,0,379],"pptm":[0,380,0,381],"sldm":[0,382,0,383],"ppsm":[0,384,0,385],"potm":[0,386,0,387],"mpp":[0,388,2,8],"mpt":[0,388],"docm":[0,389,0,390],"dotm":[0,391,0,392],"wps":[0,393],"wks":[0,393,0,0,0,1,0,2,0,3,0,4,1,0],"wcm":[0,393],"wdb":[0,393],"wpl":[0,394],"xps":[0,395,0,396],"mseq":[0,397],"mus":[0,398],"msty":[0,399],"taglet":[0,400],"nlu":[0,401],"ntf":[0,402],"nitf":[0,402],"nnd":[0,403],"nns":[0,404],"nnw":[0,405],"ngdat":[0,406],"n-gage":[0,407],"rpst":[0,408],"rpss":[0,409],"edm":[0,410],"edx":[0,411],"ext":[0,412],"odc":[0,413],"otc":[0,414],"odb":[0,415,0,416],"odf":[0,417],"odft":[0,418],"odg":[0,419],"otg":[0,420],"odi":[0,421],"oti":[0,422],"odp":[0,423],"otp":[0,424],"ods":[0,425],"ots":[0,426],"odt":[0,427],"odm":[0,428],"ott":[0,429],"oth":[0,430],"xo":[0,431],"dd2":[0,432],"oxt":[0,433],"pptx":[0,434],"sldx":[0,435],"ppsx":[0,436],"potx":[0,437],"xlsx":[0,438],"xltx":[0,439],"docx":[0,440],"dotx":[0,441],"mgp":[0,442,0,443],"dp":[0,444],"esa":[0,445],"pdb":[0,446,0,447,0,448,0,449],"pqa":[0,446,0,449],"oprc":[0,446,0,449],"paw":[0,450],"str":[0,451],"ei6":[0,452],"efif":[0,453],"wg":[0,454],"plf":[0,455],"pbd":[0,456],"box":[0,457],"mgz":[0,458],"qps":[0,459],"ptid":[0,460],"qxd":[0,461],"qxt":[0,461],"qwd":[0,461],"qwt":[0,461],"qxl":[0,461],"qxb":[0,461],"bed":[0,462],"mxl":[0,463],"musicxml":[0,464],"cryptonote":[0,465],"cod":[0,466],"rm":[0,298,0,299],"rmvb":[0,299,0,298],"link66":[0,467],"st":[0,468],"see":[0,469],"sema":[0,470],"semd":[0,471],"semf":[0,472],"ifm":[0,473],"itp":[0,474],"iif":[0,475],"ipk":[0,476],"twd":[0,477],"twds":[0,477],"mmf":[0,478,0,479],"teacher":[0,480],"sdkm":[0,481],"sdkd":[0,481],"dxp":[0,482],"sfs":[0,483],"sdc":[0,484],"sda":[0,485],"sdd":[0,134],"smf":[0,486],"sdw":[0,487,0,488],"vor":[0,487,0,488],"sgl":[0,488,0,487],"smzip":[0,489],"sm":[0,490],"sxc":[0,491],"stc":[0,492],"sxd":[0,493],"std":[0,494],"sxi":[0,495],"sti":[0,496],"sxm":[0,497],"sxw":[0,498],"sxg":[0,499],"stw":[0,500],"sus":[0,501],"susp":[0,501],"svd":[0,502],"sis":[0,503],"sisx":[0,503,6,0],"xsm":[0,504],"bdm":[0,505,7,0],"xdm":[0,506],"tao":[0,507],"pcap":[0,508,0,509,0,510],"cap":[0,508,0,509,0,510],"dmp":[0,508,0,509,0,510],"tmo":[0,511],"tpt":[0,512],"mxs":[0,513],"tra":[0,514],"ufd":[0,515],"ufdl":[0,515],"utz":[0,516],"umj":[0,517],"unityweb":[0,518],"uoml":[0,519],"vcx":[0,520],"vsd":[0,521],"vst":[0,521,4,3,0,522,0,523,0,524,4,4,4,5,4,6,4,7],"vss":[0,521],"vsw":[0,521],"vis":[0,525],"vsf":[0,526],"wbxml":[0,527],"wmlc":[0,528],"wmlsc":[0,529],"wtb":[0,530],"nbp":[0,531],"wpd":[0,532,0,533,0,534],"wqd":[0,535],"stf":[0,536],"xar":[0,537,0,77],"xfdl":[0,538],"hvd":[0,539],"hvs":[0,540],"hvp":[0,541],"osf":[0,542],"osfpvg":[0,543],"saf":[0,544],"spf":[0,545],"cmp":[0,546],"zir":[0,547],"zirz":[0,547],"zaz":[0,548],"vxml":[0,549],"wasm":[0,550],"wgt":[0,551],"hlp":[0,552,1,4],"wsdl":[0,553],"wspolicy":[0,554],"7z":[0,555],"abw":[0,556],"ace":[0,557,0,558],"dmg":[0,559],"aab":[0,560],"x32":[0,560],"u32":[0,560],"vox":[0,560],"aam":[0,561],"aas":[0,562],"bcpio":[0,563],"torrent":[0,564],"blb":[0,565],"blorb":[0,565],"bz":[0,566],"bz2":[0,567,0,568],"boz":[0,567],"cbr":[0,569,0,570],"cba":[0,569],"cbt":[0,569,0,571],"cbz":[0,569,0,572,0,573],"cb7":[0,569,0,574],"vcd":[0,575],"cfs":[0,576],"chat":[0,577],"pgn":[0,578,0,579],"nsc":[0,580,0,581],"cpio":[0,582],"csh":[0,583],"deb":[0,584,0,585,0,586],"udeb":[0,584,0,585,0,586],"dgc":[0,587],"dir":[0,588],"dcr":[0,588,4,8],"dxr":[0,588],"cst":[0,588],"cct":[0,588],"cxt":[0,588],"w3d":[0,588],"fgd":[0,588],"swa":[0,588],"wad":[0,589,0,590,0,591],"ncx":[0,592],"dtb":[0,593,3,12],"res":[0,594,0,595],"dvi":[0,596],"evy":[0,597],"eva":[0,598],"bdf":[0,599],"gsf":[0,600,0,601],"psf":[0,602,2,9],"pcf":[0,603,0,604],"snf":[0,605],"pfa":[0,601],"pfb":[0,601],"pfm":[0,601],"afm":[0,601,0,606],"arc":[0,607],"spl":[0,608,0,609,0,610,0,611],"gca":[0,612],"ulx":[0,613],"gnumeric":[0,614],"gramps":[0,615],"gtar":[0,616,0,617],"hdf":[0,618],"install":[0,619],"iso":[0,620,0,621,0,622,0,623,0,624,0,625,0,626,0,627,0,628,0,629,0,630,0,631,0,632],"jnlp":[0,633],"latex":[0,634,3,13,0,635],"lzh":[0,636,0,637],"lha":[0,636,0,637],"mie":[0,638],"prc":[0,639,0,446,0,449],"mobi":[0,639],"application":[0,640],"lnk":[0,641],"wmd":[0,642],"wmz":[0,643,0,644],"xbap":[0,645],"mdb":[0,646,0,647,0,648,0,649,0,650,0,651,1,5,0,652],"obd":[0,653],"crd":[0,654],"clp":[0,655],"exe":[0,656,0,657],"dll":[0,656],"com":[0,656],"bat":[0,656,0,658,0,659],"msi":[0,656,0,660],"mvb":[0,661],"m13":[0,661],"m14":[0,661],"wmf":[0,644,4,9,4,10,4,11,0,662,0,663],"emf":[0,644,4,12,4,13,0,664,0,665],"emz":[0,644],"mny":[0,666],"pub":[0,667,0,668],"scd":[0,669],"trm":[0,670],"wri":[0,671],"nc":[0,672],"cdf":[0,672],"nzb":[0,673],"p12":[0,674,0,675],"pfx":[0,674,0,675],"p7b":[0,676],"spc":[0,676],"p7r":[0,677],"rar":[0,678,0,679,0,680],"ris":[0,681],"sh":[0,682,0,683,3,14],"shar":[0,684],"swf":[0,610,0,609,0,611],"xap":[0,685],"sql":[0,686,0,687,3,15],"sit":[0,688,0,689,0,690],"sitx":[0,691,0,692],"srt":[0,693,0,694],"sv4cpio":[0,695],"sv4crc":[0,696],"t3":[0,697],"gam":[0,698],"tar":[0,617,0,616],"tcl":[0,699,3,16,3,17],"tex":[0,635,3,13],"tfm":[0,700],"texinfo":[0,701,3,18],"texi":[0,701,3,18],"obj":[0,702,5,3],"ustar":[0,703],"src":[0,704],"der":[0,705],"crt":[0,705],"fig":[0,706,4,14],"xlf":[0,707,0,708,0,709],"xpi":[0,710],"xz":[0,711],"z1":[0,712],"z2":[0,712],"z3":[0,712],"z4":[0,712],"z5":[0,712],"z6":[0,712],"z7":[0,712],"z8":[0,712],"xaml":[0,713],"xdf":[0,714],"xenc":[0,715],"xhtml":[0,716],"xht":[0,716],"xml":[0,717,3,19],"xsl":[0,717,0,718],"dtd":[0,719,3,20],"xop":[0,720],"xpl":[0,721],"xslt":[0,718],"xspf":[0,722,0,723],"mxml":[0,724],"xhvml":[0,724],"xvml":[0,724],"xvm":[0,724],"yang":[0,725],"yin":[0,726],"zip":[0,727,0,728,0,729],"adp":[2,10],"au":[2,11],"snd":[2,11],"mid":[2,12,2,13],"midi":[2,12,2,13],"kar":[2,12,2,13],"rmi":[2,12],"m4a":[2,14,2,15,2,16],"mp4a":[2,14],"mpga":[2,17,2,18,2,19,2,20,2,21],"mp2":[2,17,2,22,2,23,7,1,7,2,7,3,7,4,7,5],"mp2a":[2,17],"mp3":[2,17,2,18,2,19,2,20,2,21],"m2a":[2,17],"m3a":[2,17],"oga":[2,24,2,25,2,26,2,27,2,28,2,29,2,30,2,31],"ogg":[2,24,7,6,7,7,7,8,7,9,2,25,2,26,2,27,2,28,2,29,2,30,2,31],"spx":[2,24,0,730,2,32,2,31],"opus":[2,24,2,33,2,30],"s3m":[2,34,2,35],"sil":[2,36],"uva":[2,37],"uvva":[2,37],"eol":[2,38],"dra":[2,39],"dts":[2,40,2,41,3,21],"dtshd":[2,42,2,43],"lvp":[2,44],"pya":[2,45],"ecelp4800":[2,46],"ecelp7470":[2,47],"ecelp9600":[2,48],"rip":[2,49],"weba":[2,50],"aac":[2,51,2,52],"aif":[2,53],"aiff":[2,53],"aifc":[2,53,2,54,2,55],"caf":[2,56],"flac":[2,57,2,58],"mka":[2,59],"m3u":[2,3,0,176,2,4,0,177,2,5,2,6,2,7],"wax":[2,60,2,61,7,10,7,11,7,12,0,731],"wma":[2,62,2,63],"ram":[2,64,0,732],"ra":[2,64,2,65,2,66],"rmp":[2,67],"wav":[2,68,2,69,2,70],"xm":[2,71,2,72],"cdx":[8,0],"cif":[8,1],"cmdf":[8,2],"cml":[8,3],"csml":[8,4],"xyz":[8,5],"ttc":[9,0],"otf":[9,1,0,418,0,733],"ttf":[9,2,0,734],"woff":[9,3,0,735],"woff2":[9,4],"bmp":[4,15,4,16,4,17],"cgm":[4,18],"g3":[4,19,4,20],"gif":[4,21],"ief":[4,22],"jpeg":[4,23,4,24],"jpg":[4,23,4,24],"jpe":[4,23,4,24],"ktx":[4,25],"png":[4,26,4,27,4,28],"btif":[4,29],"sgi":[4,30,4,31],"svg":[4,32],"svgz":[4,32,4,33],"tiff":[4,34],"tif":[4,34],"psd":[4,35,4,36,4,37,4,38,4,39,0,736,0,737],"uvi":[4,40],"uvvi":[4,40],"uvg":[4,40],"uvvg":[4,40],"djvu":[4,41,4,42,4,43,4,44],"djv":[4,41,4,42,4,43,4,44],"sub":[4,45,3,22,3,23,3,24,3,25],"dwg":[4,46],"dxf":[4,47],"fbs":[4,48],"fpx":[4,49],"fst":[4,50],"mmr":[4,51],"rlc":[4,52],"mdi":[4,53],"wdp":[4,54,4,55],"npx":[4,56],"wbmp":[4,57],"xif":[4,58],"webp":[4,59],"3ds":[4,60,0,738],"ras":[4,61],"cmx":[4,62],"fh":[4,63],"fhc":[4,63],"fh4":[4,63],"fh5":[4,63],"fh7":[4,63],"ico":[4,64,4,65,0,739,4,66,4,67,4,68,3,26],"sid":[4,69,2,73],"pcx":[4,70,4,71],"pic":[4,72],"pct":[4,72],"pnm":[4,73],"pbm":[4,74],"pgm":[4,75],"ppm":[4,76],"rgb":[4,77],"tga":[4,3,0,522,0,523,0,524,4,4,4,5,4,6,4,7],"xbm":[4,78],"xpm":[4,79,4,80],"xwd":[4,81],"eml":[10,0],"mime":[10,0],"igs":[5,4],"iges":[5,4],"msh":[5,5],"mesh":[5,5],"silo":[5,5],"dae":[5,6],"dwf":[5,7],"gdl":[5,8],"gtw":[5,9],"mts":[5,10,7,0],"vtu":[5,11],"wrl":[5,12],"vrml":[5,12],"x3db":[5,13],"x3dbz":[5,13],"x3dv":[5,14],"x3dvz":[5,14],"x3d":[5,15],"x3dz":[5,15],"appcache":[3,27],"ics":[3,28,3,29,0,740],"ifb":[3,28],"css":[3,30],"csv":[3,31,3,32,3,33],"html":[3,34,0,716],"htm":[3,34,0,716],"js":[3,35,0,741,0,742],"mjs":[3,35,0,741,0,742],"n3":[3,36],"txt":[3,1],"text":[3,1],"conf":[3,1],"def":[3,1],"list":[3,1],"log":[3,1,3,37],"in":[3,1],"dsc":[3,38],"rtx":[3,39],"sgml":[3,40],"sgm":[3,40],"tsv":[3,41],"t":[3,42,0,743,3,43,0,744,3,44],"tr":[3,42,0,743,3,43],"roff":[3,42,0,743,3,43],"man":[3,42,0,745],"me":[3,42,3,45],"ms":[3,42,3,46],"ttl":[3,47],"uri":[3,48],"uris":[3,48],"urls":[3,48],"vcard":[3,49,3,50,3,51],"curl":[3,52],"dcurl":[3,53],"mcurl":[3,54],"scurl":[3,55],"fly":[3,56],"flx":[3,57],"gv":[3,0],"3dml":[3,58],"spot":[3,59],"jad":[3,60],"wml":[3,61],"wmls":[3,62],"s":[3,63],"asm":[3,63],"c":[3,64,3,65],"cc":[3,64,3,66],"cxx":[3,64,3,66],"cpp":[3,64,3,66],"h":[3,64,3,67],"hh":[3,64,3,68],"dic":[3,64],"f":[3,69],"for":[3,69],"f77":[3,69],"f90":[3,69],"java":[3,70,3,71],"nfo":[3,72],"opml":[3,73,3,74],"p":[3,75],"pas":[3,75],"etx":[3,76],"sfv":[3,77],"uu":[3,78],"vcs":[3,29,3,28,0,740],"vcf":[3,51,3,49,3,50],"3gp":[7,13,7,14,2,74,7,15,2,75,2,76,2,77,2,78,2,79],"3g2":[7,16,2,80],"h261":[7,17],"h263":[7,18],"h264":[7,19],"jpgv":[7,20],"jpm":[7,21,4,82],"jpgm":[7,21,4,82],"mj2":[7,22],"mjp2":[7,22],"mp4":[7,23,7,24,7,25],"mp4v":[7,23],"mpg4":[7,23],"mpeg":[7,1,7,2,7,3,7,4,7,5],"mpg":[7,1,7,2,7,3,7,4,7,5],"mpe":[7,1,7,2,7,3,7,4,7,5],"m1v":[7,1],"m2v":[7,1],"ogv":[7,8,7,9],"qt":[7,26],"mov":[7,26],"uvh":[7,27],"uvvh":[7,27],"uvm":[7,28],"uvvm":[7,28],"uvp":[7,29],"uvvp":[7,29],"uvs":[7,30],"uvvs":[7,30],"uvv":[7,31],"uvvv":[7,31],"dvb":[7,32],"fvt":[7,33],"mxu":[7,34,7,35],"m4u":[7,34,7,35],"pyv":[7,36],"uvu":[7,37],"uvvu":[7,37],"viv":[7,38,7,39],"webm":[7,40],"f4v":[7,41,7,23,7,24,7,25],"fli":[7,42,7,43,7,44],"flv":[7,45,0,746,11,0,7,46],"m4v":[7,25,7,23,7,24],"mkv":[7,47],"mk3d":[7,47,7,48],"mks":[7,47],"mng":[7,49],"asf":[7,50,0,747,7,51,7,52],"asx":[7,50,2,61,7,10,7,11,7,12,0,731],"vob":[7,53,7,1,7,2,7,3,7,4,7,5],"wm":[7,51],"wmv":[7,54],"wmx":[7,12,2,61,7,10,7,11,0,731],"wvx":[7,10,2,61,7,11,7,12,0,731],"avi":[7,55,7,56,7,57,7,58,7,59,7,60,7,61],"movie":[7,62],"smv":[7,63],"a26":[0,748],"a78":[0,749],"lnx":[0,750],"azw3":[0,751,0,752],"kfx":[0,751,0,752],"mml":[0,61,3,79],"wkdownload":[0,753],"crdownload":[0,753],"part":[0,753],"wwf":[0,754,0,755],"themepack":[0,756],"amz":[2,81],"gsm":[2,82],"pla":[2,83],"gpg":[0,90,0,91,0,92,0,93],"skr":[0,93],"pkr":[0,93],"key":[0,757,0,758,0,93],"p8e":[0,759],"raml":[0,760],"siv":[0,761],"sieve":[0,761],"sml":[0,138,0,140],"kino":[0,138,0,140],"sqlite2":[0,762],"sqlite3":[0,763,0,764],"ged":[3,80,0,765,3,81],"gedcom":[3,80,0,765,3,81],"fxm":[7,64],"sgf":[0,766],"tres":[0,595],"scn":[0,767],"tscn":[0,767],"escn":[0,767],"gdshader":[0,768],"gd":[0,769],"xliff":[0,708,0,709],"toml":[0,770],"yaml":[0,771,0,772,3,82,3,83],"yml":[0,771,0,772,3,82,3,83],"cdr":[0,773,0,774,0,775,0,776,0,777,4,83,4,84,1,6],"wk1":[0,0,0,1,0,2,0,3,0,4,1,0],"wk3":[0,0,0,1,0,2,0,3,0,4,1,0],"wk4":[0,0,0,1,0,2,0,3,0,4,1,0],"lmdb":[0,652],"xll":[0,355,0,356,0,357,1,3],"xld":[0,355,0,356,0,357,1,3],"ppz":[0,374,0,375,0,376,0,377],"vsdx":[0,778],"vstx":[0,779],"vssx":[0,780],"vsdm":[0,781],"vstm":[0,782],"vssm":[0,783],"xlr":[0,393],"gnd":[0,784],"tnef":[0,785,0,786],"tnf":[0,785,0,786],"sds":[0,787],"smd":[0,788,0,789],"fodt":[0,790],"fodg":[0,791],"fodp":[0,792],"fods":[0,793],"wp":[0,532,0,533,0,534],"wp4":[0,532,0,533,0,534],"wp5":[0,532,0,533,0,534],"wp6":[0,532,0,533,0,534],"wpp":[0,532,0,533,0,534],"yt":[7,65,0,794],"por":[0,795],"sav":[0,796,0,797],"zsav":[0,796,0,797],"xbel":[0,798],"7z.001":[0,555],"abw.CRASHED":[0,556],"abw.gz":[0,556],"zabw":[0,556],"cue":[0,799],"sam":[0,800],"pdc":[0,448],"as":[0,801],"a":[0,802],"ar":[0,802],"arj":[0,803],"asar":[0,804],"asp":[0,805],"awk":[0,806],"blend":[0,807],"BLEND":[0,807],"blender":[0,807],"dvi.bz2":[0,808],"tar.bz":[0,809],"tbz":[0,809],"tar.bz2":[0,810],"tbz2":[0,810],"tb2":[0,810],"bz3":[0,811],"tar.bz3":[0,812],"tbz3":[0,812],"pdf.bz2":[0,813],"ps.bz2":[0,814],"lrz":[0,815],"tar.lrz":[0,816],"tlrz":[0,816],"raw-disk-image":[0,817,0,818],"img":[0,817,0,818],"fd":[0,819,0,820],"qd":[0,819,0,820],"raw-disk-image.xz":[0,821],"img.xz":[0,821],"iso9660":[0,631,0,632,0,620],"cso":[0,822],"appimage":[0,823,0,824],"toc":[0,825],"gdi":[0,826],"cdi":[0,827],"Z":[0,828],"tar.gz":[0,829],"tgz":[0,829],"cpio.gz":[0,830],"dbf":[0,831,0,832,0,833,0,834,0,835],"es":[0,25,3,84],"chd":[0,836],"nds":[0,837],"cci":[0,738],"3dsx":[0,838],"pce":[0,839],"m7":[0,840],"k7":[0,841],"hfe":[0,842,0,843],"sap":[0,844,0,845],"ui":[0,846,0,847],"ksy":[3,85],"qml":[3,86],"qmltypes":[3,86],"qmlproject":[3,86],"desktop":[0,848,0,849],"kdelnk":[0,848,0,849],"fb2":[0,850,0,851],"fb2.zip":[0,852],"dia":[0,853],"shape":[0,854],"etheme":[0,855],"egon":[0,856],"fl":[0,857],"psf.gz":[0,858],"pcf.Z":[0,603],"pcf.gz":[0,603],"spd":[0,859],"ttx":[0,860],"gb":[0,861],"sgb":[0,861],"gbc":[0,862],"cgb":[0,862],"gba":[0,863],"agb":[0,863],"vb":[0,864],"gen":[0,789],"sgd":[0,789],"32x":[0,865],"mdx":[0,865],"gmo":[0,866],"mo":[3,87,0,866],"glade":[0,867],"gnucash":[0,868],"gnc":[0,868],"xac":[0,868],"gp":[0,869],"gplt":[0,869],"gnuplot":[0,869],"gra":[0,870],"dvi.gz":[0,871],"gz":[0,872,0,873],"pdf.gz":[0,874],"ps.gz":[0,875],"hdf4":[0,618],"h4":[0,618],"hdf5":[0,618],"h5":[0,618],"groovy":[3,88],"gvy":[3,88],"gy":[3,88],"gsh":[3,88],"gradle":[3,89],"jks":[0,876],"ks":[0,876],"jceks":[0,877],"pack":[0,878],"jsm":[3,35,0,741,0,742],"jrd":[0,879],"json-patch":[0,880],"jsonld":[0,881],"ipynb":[0,882],"coffee":[0,883],"jpr":[0,884],"jpx":[0,884,4,85],"kexic":[0,885],"kexis":[0,886],"kexi":[0,887,0,888,0,889,0,890],"kil":[0,891],"kpm":[0,892],"kra":[0,893],"krz":[0,893],"kud":[0,894],"lhz":[0,895],"ts":[3,90,0,896,3,91,7,0],"lyx":[0,897,3,92],"lz4":[0,898],"tar.lz4":[0,899],"lz":[0,900],"tar.lz":[0,901],"pdf.lz":[0,902],"lzma":[0,903],"tar.lzma":[0,904],"tlz":[0,904],"lzo":[0,905],"qp":[0,906],"zz":[0,907],"mhtml":[0,908],"mht":[0,908],"ocl":[3,93],"cbl":[3,94],"cob":[3,94],"url":[0,909],"msx":[0,910],"m4":[0,911],"n64":[0,912],"z64":[0,912],"v64":[0,912],"ngp":[0,913],"ngc":[0,914],"nes":[0,915],"nez":[0,915],"unf":[0,915],"unif":[0,915],"o":[0,916],"mod":[0,916,2,0],"anx":[0,917,0,918],"axv":[7,66,7,67],"axa":[2,84,2,85],"ogm":[7,68,7,69],"oleo":[0,919],"pak":[0,920],"PAR2":[0,921],"par2":[0,921],"pl":[0,744,3,44],"PL":[0,744,3,44],"pm":[0,922,0,744,3,44],"al":[0,744,3,44],"perl":[0,744,3,44],"pod":[0,744,3,44],"php":[0,923],"php3":[0,923],"php4":[0,923],"php5":[0,923],"phps":[0,923],"pln":[0,924],"psw":[0,925],"pw":[0,926],"pyc":[0,927],"pyo":[0,927],"qti":[0,928],"qti.gz":[0,928],"wb1":[0,929],"wb2":[0,929],"wb3":[0,929],"qtl":[0,930,0,931],"qif":[0,932,4,86],"dar":[0,933],"alz":[0,934],"rej":[3,95,0,935],"rpm":[0,936,0,937],"src.rpm":[0,938],"spm":[0,938],"rb":[0,939],"mab":[0,940],"cr":[3,96,3,97],"jl":[3,98],"la":[0,941],"fish":[0,942,3,99],"nu":[0,943,3,100],"shn":[0,944,2,86],"siag":[0,945],"sk":[4,87],"sk1":[4,87],"sg":[0,946],"sms":[0,947],"gg":[0,948],"sfc":[0,949,0,950],"smc":[0,949,0,950],"vtt":[3,101],"sami":[0,139],"mpl":[3,102,7,0],"ssa":[3,103],"ass":[3,103,2,52,2,51],"imy":[3,104,2,87,2,88],"ime":[3,104,2,87,2,88],"smaf":[0,478,0,479],"mrml":[3,105],"mrl":[3,105],"xmf":[2,89,2,90],"mxmf":[2,91,2,92],"gem":[0,617,0,616],"tar.Z":[0,951],"taz":[0,951],"gf":[0,952],"pk":[0,953],"theme":[0,954],"bak":[0,955],"old":[0,955],"sik":[0,955],"tar.lzo":[0,956],"tzo":[0,956],"tar.xz":[0,957],"txz":[0,957],"zpaq":[0,958],"zst":[0,959],"tar.zst":[0,960],"tzst":[0,960],"pdf.xz":[0,961],"wpg":[0,962],"ws":[0,963],"wsc":[0,964],"cert":[0,705],"pem":[0,705],"zoo":[0,965],"zipx":[0,727,0,728,0,729],"wim":[0,966],"swm":[0,966],"ac3":[2,93],"amr":[2,94,2,95],"awb":[2,96,2,97],"psid":[2,73],"aiffc":[2,54,2,55],"ape":[2,98],"aa":[2,99,2,100],"aax":[2,101],"aaxc":[2,102],"dff":[2,103,2,104],"dsf":[2,105,2,106,2,107,2,108],"it":[2,109],"tak":[2,110],"wv":[2,111],"wvp":[2,111],"wvc":[2,112],"mo3":[2,113],"adts":[2,52,2,51],"loas":[2,114],"xhe":[2,114],"f4a":[2,14,2,15,2,16],"m4r":[2,115],"lrv":[7,23,7,24,7,25],"m4b":[2,116],"f4b":[2,116],"3gpp":[7,13,7,14,2,74,7,15,2,75,2,76,2,77,2,78,2,79],"3ga":[7,13,7,14,2,74,7,15,2,75,2,76,2,77,2,78,2,79],"3gp2":[7,16,2,80],"3gpp2":[7,16,2,80],"ult":[2,0],"uni":[2,0],"m15":[2,0],"mtm":[2,0],"med":[2,0],"vlc":[2,3,2,4,0,177,2,5,2,6,2,7],"minipsf":[2,117],"psflib":[2,118],"mp+":[2,8],"rax":[2,65,2,64,2,66],"rv":[7,70,7,71],"rvx":[7,70,7,71],"rmj":[0,298,0,299],"rmm":[0,298,0,299],"rmx":[0,298,0,299],"rp":[4,88],"rt":[3,106],"stm":[2,119],"voc":[2,120],"xi":[2,121],"tta":[2,122,2,123],"dib":[4,15,4,16,4,17],"heic":[4,89,4,90,4,91,4,92],"heif":[4,89,4,90,4,91,4,92],"hif":[4,89,4,90,4,91,4,92],"mjpeg":[7,72],"mjpg":[7,72],"j2c":[4,93],"j2k":[4,93],"jpc":[4,93],"jp2":[4,94,4,95,4,96,4,97],"jpg2":[4,94,4,95,4,96,4,97],"jpf":[4,85],"jxl":[4,98],"ora":[4,99],"dds":[4,100],"exr":[4,101],"pict":[4,72],"pict1":[4,72],"pict2":[4,72],"ufraw":[0,967],"dng":[4,102],"crw":[4,103],"cr2":[4,104],"cr3":[4,105],"raf":[4,106],"k25":[4,107],"kdc":[4,108],"mrw":[4,109],"nef":[4,110],"nrw":[4,111],"orf":[4,112],"raw":[4,113,4,114],"rw2":[4,115,4,116],"pef":[4,117],"x3f":[4,118],"srf":[4,119],"sr2":[4,120],"arw":[4,121],"apng":[4,27,4,28],"rle":[4,122],"svg.gz":[4,33],"jxr":[4,55,4,54],"hdp":[4,55,4,54],"ag":[4,123],"eps.bz2":[4,124],"epsi.bz2":[4,124],"epsf.bz2":[4,124],"xcf.gz":[4,125],"xcf.bz2":[4,125],"dcm":[0,968],"docbook":[0,21,0,20,0,22],"epsi":[4,1],"epsf":[4,1],"fits":[0,969,4,126,4,127],"fit":[0,969,4,126,4,127],"fts":[0,969,4,126,4,127],"eps.gz":[4,128],"epsi.gz":[4,128],"epsf.gz":[4,128],"icns":[4,129],"iff":[4,130,4,131],"ilbm":[4,130,4,131],"lbm":[4,130,4,131],"jng":[4,132],"lwo":[4,133],"lwob":[4,133],"lws":[4,134],"pntg":[4,135],"msod":[4,136],"pcd":[4,137],"sun":[4,138],"icb":[4,3,0,522,0,523,0,524,4,4,4,5,4,6,4,7],"tpic":[4,3,0,522,0,523,0,524,4,4,4,5,4,6,4,7],"vda":[4,3,0,522,0,523,0,524,4,4,4,5,4,6,4,7],"cur":[4,139],"ani":[0,970],"xcf":[4,140],"gih":[4,141],"pat":[4,142],"glb":[5,16],"gltf":[5,17],"vrm":[5,12],"mtl":[5,18],"vct":[3,49,3,50,3,51],"gcrd":[3,49,3,50,3,51],"t2t":[3,107],"v":[3,108],"svh":[3,109],"sv":[3,110],"vhd":[3,111,0,971,0,972],"vhdl":[3,111],"rdfs":[0,111,3,2],"owl":[0,111,3,2],"rst":[3,112],"owx":[0,973],"sylk":[3,113],"slk":[3,113],"mc2":[3,114],"adb":[3,115],"ads":[3,115],"bib":[3,116],"blp":[3,117],"hp":[3,68],"hpp":[3,68],"h++":[3,68],"hxx":[3,68],"C":[3,66],"c++":[3,66],"cmake":[3,118],"asd":[3,119],"fasl":[3,119],"lisp":[3,119],"ros":[3,119],"csvs":[3,120],"cs":[3,121],"vala":[3,122],"vapi":[3,122],"ooc":[3,123],"dcl":[3,124],"dsl":[3,125],"d":[3,126],"di":[3,126],"e":[3,127],"eif":[3,127],"el":[3,128],"ex":[3,129],"exs":[3,129],"erl":[3,130],"f95":[3,69],"gs":[3,131],"po":[3,132,3,133,0,974],"feature":[3,134],"manifest":[3,27],"gvp":[3,135,3,136],"hs":[3,137],"idl":[3,138],"ldif":[3,139],"ly":[3,140],"lhs":[3,141],"mk":[3,142],"mak":[3,142],"md":[3,143,3,144],"mkd":[3,143,3,144],"markdown":[3,143,3,144],"moc":[3,145],"reg":[3,146],"mof":[3,147],"mup":[3,148],"not":[3,148],"m":[3,149,3,150,3,151],"mm":[3,152,3,153],"ml":[3,154],"mli":[3,154],"cl":[3,155],"diff":[3,156,3,157],"patch":[3,156,3,157],"nim":[3,158],"nims":[3,159],"nimble":[3,159],"go":[3,160],"py":[3,161,3,162],"py3":[3,162],"py3x":[3,162],"pyi":[3,162],"pyx":[3,161],"wsgi":[3,161],"sage":[3,163],"lua":[3,164],"spec":[3,165],"sass":[3,166],"scala":[3,7],"ss":[3,9],"scss":[3,167],"tk":[3,16,3,17],"ltx":[3,13,0,635],"sty":[3,13,0,635],"cls":[3,13,0,635],"dtx":[3,13,0,635],"ins":[3,13,0,635],"typ":[3,168],"twig":[3,169],"uil":[3,170],"uue":[3,78,1,7],"vbs":[3,171,3,172],"xmi":[3,173],"fo":[3,174],"xslfo":[3,174],"iptables":[3,175],"service":[3,176,3,177],"automount":[3,177],"device":[3,177],"mount":[3,177],"path":[3,177],"scope":[3,177],"slice":[3,177],"socket":[3,177],"swap":[3,177],"target":[3,177],"timer":[3,177],"xbl":[0,717,3,19],"xsd":[0,717,3,19],"rng":[0,717,3,19],"ent":[0,975,3,178],"dv":[7,73],"m2t":[7,0],"m2ts":[7,0],"cpi":[7,0],"clpi":[7,0],"mpls":[7,0],"bdmv":[7,0],"m1u":[7,34,7,35],"moov":[7,26],"qtvr":[7,26],"qtif":[4,86],"ktx2":[4,143],"astc":[4,144],"vivo":[7,38,7,39],"flc":[7,43,7,44,7,42],"hwp":[0,976,0,977],"hwt":[0,978,0,979],"avf":[7,56,7,57,7,58,7,59,7,60,7,61,7,55],"divx":[7,56,7,57,7,58,7,59,7,60,7,61,7,55],"nsv":[7,74],"emp":[0,980],"geojson":[0,981,0,982],"geo.json":[0,981,0,982],"ica":[0,983],"it87":[0,984],"ccmx":[0,985],"bsdiff":[0,986],"trig":[0,987,0,988],"numbers":[0,989,0,990],"pages":[0,991,0,992],"pkpass":[0,993],"p65":[0,922],"pm6":[0,922],"pmd":[0,922],"adf":[0,994],"flatpak":[0,995,0,996],"xdgapp":[0,995,0,996],"flatpakrepo":[0,997],"flatpakref":[0,998],"sqsh":[0,999],"snap":[0,1000],"3mf":[5,19,0,1001],"gcode":[3,179],"gx":[3,180],"fds":[0,1002],"ova":[0,1003,0,1004],"qed":[0,1005],"qcow2":[0,1006],"qcow":[0,1006],"vpc":[0,971,0,972],"vhdx":[0,1007,0,1008],"vmdk":[0,1009,0,1010],"vdi":[0,1011,0,1012],"cwk":[0,1013],"bps":[0,1014],"ips":[0,1015],"pysu":[0,1016],"pys":[0,1017],"kt":[3,181],"dtsi":[3,21],"avif":[4,145,4,146],"avifs":[4,145,4,146],"qoi":[4,147],"bik":[7,75],"bk2":[7,75],"smk":[7,76],"zim":[0,1018],"qs":[0,141],"openvpn":[0,1019],"ovpn":[0,1019],"mrpack":[0,1020],"cbor":[0,1021],"eris":[0,1022],"gbrjob":[0,1023],"drl":[0,1024],"tmx":[0,1025],"tsx":[0,1026]} as const

export type TypeExtnames = {
  "123": [
    "application/vnd.lotus-1-2-3",
    "application/x-lotus123",
    "application/x-123",
    "application/lotus123",
    "application/wk1",
    "zz-application/zz-winassoc-123"
  ],
  "602": [
    "application/x-t602"
  ],
  "669": [
    "audio/x-mod"
  ],
  "ez": [
    "application/andrew-inset"
  ],
  "aw": [
    "application/applixware",
    "application/x-applix-word"
  ],
  "atom": [
    "application/atom+xml"
  ],
  "atomcat": [
    "application/atomcat+xml"
  ],
  "atomsvc": [
    "application/atomsvc+xml"
  ],
  "ccxml": [
    "application/ccxml+xml"
  ],
  "cdmia": [
    "application/cdmi-capability"
  ],
  "cdmic": [
    "application/cdmi-container"
  ],
  "cdmid": [
    "application/cdmi-domain"
  ],
  "cdmio": [
    "application/cdmi-object"
  ],
  "cdmiq": [
    "application/cdmi-queue"
  ],
  "cu": [
    "application/cu-seeme"
  ],
  "davmount": [
    "application/davmount+xml"
  ],
  "dbk": [
    "application/docbook+xml",
    "application/x-docbook+xml",
    "application/vnd.oasis.docbook+xml"
  ],
  "dssc": [
    "application/dssc+der"
  ],
  "xdssc": [
    "application/dssc+xml"
  ],
  "ecma": [
    "application/ecmascript"
  ],
  "emma": [
    "application/emma+xml"
  ],
  "epub": [
    "application/epub+zip"
  ],
  "exi": [
    "application/exi"
  ],
  "pfr": [
    "application/font-tdpfr",
    "application/vnd.truedoc"
  ],
  "gml": [
    "application/gml+xml"
  ],
  "gpx": [
    "application/gpx+xml",
    "application/gpx",
    "application/x-gpx+xml",
    "application/x-gpx"
  ],
  "gxf": [
    "application/gxf"
  ],
  "stk": [
    "application/hyperstudio"
  ],
  "ink": [
    "application/inkml+xml"
  ],
  "inkml": [
    "application/inkml+xml"
  ],
  "ipfix": [
    "application/ipfix"
  ],
  "jar": [
    "application/java-archive",
    "application/x-jar",
    "application/x-java-archive"
  ],
  "ser": [
    "application/java-serialized-object"
  ],
  "class": [
    "application/java-vm",
    "application/x-java",
    "application/java",
    "application/java-byte-code",
    "application/x-java-class",
    "application/x-java-vm"
  ],
  "json": [
    "application/json",
    "application/schema+json"
  ],
  "jsonml": [
    "application/jsonml+json"
  ],
  "lostxml": [
    "application/lost+xml"
  ],
  "hqx": [
    "application/mac-binhex40"
  ],
  "cpt": [
    "application/mac-compactpro"
  ],
  "mads": [
    "application/mads+xml"
  ],
  "mrc": [
    "application/marc"
  ],
  "mrcx": [
    "application/marcxml+xml"
  ],
  "ma": [
    "application/mathematica"
  ],
  "nb": [
    "application/mathematica",
    "application/x-mathematica"
  ],
  "mb": [
    "application/mathematica"
  ],
  "mathml": [
    "application/mathml+xml"
  ],
  "mbox": [
    "application/mbox"
  ],
  "mscml": [
    "application/mediaservercontrol+xml"
  ],
  "metalink": [
    "application/metalink+xml"
  ],
  "meta4": [
    "application/metalink4+xml"
  ],
  "mets": [
    "application/mets+xml"
  ],
  "mods": [
    "application/mods+xml"
  ],
  "m21": [
    "application/mp21"
  ],
  "mp21": [
    "application/mp21"
  ],
  "mp4s": [
    "application/mp4"
  ],
  "doc": [
    "application/msword",
    "application/vnd.ms-word",
    "application/x-msword",
    "zz-application/zz-winassoc-doc"
  ],
  "dot": [
    "application/msword",
    "application/msword-template",
    "text/vnd.graphviz"
  ],
  "mxf": [
    "application/mxf"
  ],
  "bin": [
    "application/octet-stream"
  ],
  "dms": [
    "application/octet-stream"
  ],
  "lrf": [
    "application/octet-stream"
  ],
  "mar": [
    "application/octet-stream"
  ],
  "so": [
    "application/octet-stream",
    "application/x-sharedlib"
  ],
  "dist": [
    "application/octet-stream"
  ],
  "distz": [
    "application/octet-stream"
  ],
  "pkg": [
    "application/octet-stream",
    "application/x-xar"
  ],
  "bpk": [
    "application/octet-stream"
  ],
  "dump": [
    "application/octet-stream"
  ],
  "elc": [
    "application/octet-stream"
  ],
  "deploy": [
    "application/octet-stream"
  ],
  "oda": [
    "application/oda"
  ],
  "opf": [
    "application/oebps-package+xml"
  ],
  "ogx": [
    "application/ogg",
    "application/x-ogg"
  ],
  "omdoc": [
    "application/omdoc+xml"
  ],
  "onetoc": [
    "application/onenote"
  ],
  "onetoc2": [
    "application/onenote"
  ],
  "onetmp": [
    "application/onenote"
  ],
  "onepkg": [
    "application/onenote"
  ],
  "oxps": [
    "application/oxps"
  ],
  "xer": [
    "application/patch-ops-error+xml"
  ],
  "pdf": [
    "application/pdf",
    "application/x-pdf",
    "image/pdf",
    "application/acrobat",
    "application/nappdf"
  ],
  "pgp": [
    "application/pgp-encrypted",
    "application/pgp",
    "application/pgp-signature",
    "application/pgp-keys"
  ],
  "asc": [
    "application/pgp-signature",
    "text/plain",
    "application/pgp-encrypted",
    "application/pgp",
    "application/pgp-keys"
  ],
  "sig": [
    "application/pgp-signature"
  ],
  "prf": [
    "application/pics-rules"
  ],
  "p10": [
    "application/pkcs10"
  ],
  "p7m": [
    "application/pkcs7-mime"
  ],
  "p7c": [
    "application/pkcs7-mime"
  ],
  "p7s": [
    "application/pkcs7-signature"
  ],
  "p8": [
    "application/pkcs8"
  ],
  "ac": [
    "application/pkix-attr-cert"
  ],
  "cer": [
    "application/pkix-cert"
  ],
  "crl": [
    "application/pkix-crl"
  ],
  "pkipath": [
    "application/pkix-pkipath"
  ],
  "pki": [
    "application/pkixcmp"
  ],
  "pls": [
    "application/pls+xml",
    "audio/x-scpls",
    "application/pls",
    "audio/scpls"
  ],
  "ai": [
    "application/postscript",
    "application/illustrator",
    "application/vnd.adobe.illustrator"
  ],
  "eps": [
    "application/postscript",
    "image/x-eps"
  ],
  "ps": [
    "application/postscript"
  ],
  "cww": [
    "application/prs.cww"
  ],
  "pskcxml": [
    "application/pskc+xml"
  ],
  "rdf": [
    "application/rdf+xml",
    "text/rdf"
  ],
  "rif": [
    "application/reginfo+xml"
  ],
  "rnc": [
    "application/relax-ng-compact-syntax",
    "application/x-rnc"
  ],
  "rl": [
    "application/resource-lists+xml"
  ],
  "rld": [
    "application/resource-lists-diff+xml"
  ],
  "rs": [
    "application/rls-services+xml",
    "text/rust"
  ],
  "gbr": [
    "application/rpki-ghostbusters",
    "image/x-gimp-gbr",
    "application/vnd.gerber",
    "application/x-gerber"
  ],
  "mft": [
    "application/rpki-manifest"
  ],
  "roa": [
    "application/rpki-roa"
  ],
  "rsd": [
    "application/rsd+xml"
  ],
  "rss": [
    "application/rss+xml",
    "text/rss"
  ],
  "rtf": [
    "application/rtf",
    "text/rtf"
  ],
  "sbml": [
    "application/sbml+xml"
  ],
  "scq": [
    "application/scvp-cv-request"
  ],
  "scs": [
    "application/scvp-cv-response"
  ],
  "spq": [
    "application/scvp-vp-request"
  ],
  "spp": [
    "application/scvp-vp-response"
  ],
  "sdp": [
    "application/sdp",
    "application/x-sdp",
    "application/vnd.sdp",
    "application/vnd.stardivision.impress"
  ],
  "setpay": [
    "application/set-payment-initiation"
  ],
  "setreg": [
    "application/set-registration-initiation"
  ],
  "shf": [
    "application/shf+xml"
  ],
  "smi": [
    "application/smil+xml",
    "application/x-sami",
    "application/smil"
  ],
  "smil": [
    "application/smil+xml",
    "application/smil"
  ],
  "rq": [
    "application/sparql-query"
  ],
  "srx": [
    "application/sparql-results+xml"
  ],
  "gram": [
    "application/srgs"
  ],
  "grxml": [
    "application/srgs+xml"
  ],
  "sru": [
    "application/sru+xml"
  ],
  "ssdl": [
    "application/ssdl+xml"
  ],
  "ssml": [
    "application/ssml+xml"
  ],
  "tei": [
    "application/tei+xml"
  ],
  "teicorpus": [
    "application/tei+xml"
  ],
  "tfi": [
    "application/thraud+xml"
  ],
  "tsd": [
    "application/timestamped-data"
  ],
  "plb": [
    "application/vnd.3gpp.pic-bw-large"
  ],
  "psb": [
    "application/vnd.3gpp.pic-bw-small"
  ],
  "pvb": [
    "application/vnd.3gpp.pic-bw-var"
  ],
  "tcap": [
    "application/vnd.3gpp2.tcap"
  ],
  "pwn": [
    "application/vnd.3m.post-it-notes"
  ],
  "aso": [
    "application/vnd.accpac.simply.aso"
  ],
  "imp": [
    "application/vnd.accpac.simply.imp"
  ],
  "acu": [
    "application/vnd.acucobol"
  ],
  "atc": [
    "application/vnd.acucorp"
  ],
  "acutc": [
    "application/vnd.acucorp"
  ],
  "air": [
    "application/vnd.adobe.air-application-installer-package+zip"
  ],
  "fcdt": [
    "application/vnd.adobe.formscentral.fcdt"
  ],
  "fxp": [
    "application/vnd.adobe.fxp"
  ],
  "fxpl": [
    "application/vnd.adobe.fxp"
  ],
  "xdp": [
    "application/vnd.adobe.xdp+xml"
  ],
  "xfdf": [
    "application/vnd.adobe.xfdf"
  ],
  "ahead": [
    "application/vnd.ahead.space"
  ],
  "azf": [
    "application/vnd.airzip.filesecure.azf"
  ],
  "azs": [
    "application/vnd.airzip.filesecure.azs"
  ],
  "azw": [
    "application/vnd.amazon.ebook"
  ],
  "acc": [
    "application/vnd.americandynamics.acc"
  ],
  "ami": [
    "application/vnd.amiga.ami"
  ],
  "apk": [
    "application/vnd.android.package-archive"
  ],
  "cii": [
    "application/vnd.anser-web-certificate-issue-initiation"
  ],
  "fti": [
    "application/vnd.anser-web-funds-transfer-initiation"
  ],
  "atx": [
    "application/vnd.antix.game-component"
  ],
  "mpkg": [
    "application/vnd.apple.installer+xml"
  ],
  "m3u8": [
    "application/vnd.apple.mpegurl",
    "audio/x-mpegurl",
    "audio/mpegurl",
    "application/m3u",
    "audio/x-mp3-playlist",
    "audio/m3u",
    "audio/x-m3u"
  ],
  "swi": [
    "application/vnd.aristanetworks.swi"
  ],
  "iota": [
    "application/vnd.astraea-software.iota"
  ],
  "aep": [
    "application/vnd.audiograph"
  ],
  "mpm": [
    "application/vnd.blueice.multipass"
  ],
  "bmi": [
    "application/vnd.bmi"
  ],
  "rep": [
    "application/vnd.businessobjects"
  ],
  "cdxml": [
    "application/vnd.chemdraw+xml"
  ],
  "mmd": [
    "application/vnd.chipnuts.karaoke-mmd"
  ],
  "cdy": [
    "application/vnd.cinderella"
  ],
  "cla": [
    "application/vnd.claymore"
  ],
  "rp9": [
    "application/vnd.cloanto.rp9"
  ],
  "c4g": [
    "application/vnd.clonk.c4group"
  ],
  "c4d": [
    "application/vnd.clonk.c4group"
  ],
  "c4f": [
    "application/vnd.clonk.c4group"
  ],
  "c4p": [
    "application/vnd.clonk.c4group"
  ],
  "c4u": [
    "application/vnd.clonk.c4group"
  ],
  "c11amc": [
    "application/vnd.cluetrust.cartomobile-config"
  ],
  "c11amz": [
    "application/vnd.cluetrust.cartomobile-config-pkg"
  ],
  "csp": [
    "application/vnd.commonspace"
  ],
  "cdbcmsg": [
    "application/vnd.contact.cmsg"
  ],
  "cmc": [
    "application/vnd.cosmocaller"
  ],
  "clkx": [
    "application/vnd.crick.clicker"
  ],
  "clkk": [
    "application/vnd.crick.clicker.keyboard"
  ],
  "clkp": [
    "application/vnd.crick.clicker.palette"
  ],
  "clkt": [
    "application/vnd.crick.clicker.template"
  ],
  "clkw": [
    "application/vnd.crick.clicker.wordbank"
  ],
  "wbs": [
    "application/vnd.criticaltools.wbs+xml"
  ],
  "pml": [
    "application/vnd.ctc-posml"
  ],
  "ppd": [
    "application/vnd.cups-ppd"
  ],
  "car": [
    "application/vnd.curl.car"
  ],
  "pcurl": [
    "application/vnd.curl.pcurl"
  ],
  "dart": [
    "application/vnd.dart",
    "text/x-dart"
  ],
  "rdz": [
    "application/vnd.data-vision.rdz"
  ],
  "uvf": [
    "application/vnd.dece.data"
  ],
  "uvvf": [
    "application/vnd.dece.data"
  ],
  "uvd": [
    "application/vnd.dece.data"
  ],
  "uvvd": [
    "application/vnd.dece.data"
  ],
  "uvt": [
    "application/vnd.dece.ttml+xml"
  ],
  "uvvt": [
    "application/vnd.dece.ttml+xml"
  ],
  "uvx": [
    "application/vnd.dece.unspecified"
  ],
  "uvvx": [
    "application/vnd.dece.unspecified"
  ],
  "uvz": [
    "application/vnd.dece.zip"
  ],
  "uvvz": [
    "application/vnd.dece.zip"
  ],
  "fe_launch": [
    "application/vnd.denovo.fcselayout-link"
  ],
  "dna": [
    "application/vnd.dna"
  ],
  "mlp": [
    "application/vnd.dolby.mlp"
  ],
  "dpg": [
    "application/vnd.dpgraph"
  ],
  "dfac": [
    "application/vnd.dreamfactory"
  ],
  "kpxx": [
    "application/vnd.ds-keypoint"
  ],
  "ait": [
    "application/vnd.dvb.ait"
  ],
  "svc": [
    "application/vnd.dvb.service"
  ],
  "geo": [
    "application/vnd.dynageo"
  ],
  "mag": [
    "application/vnd.ecowin.chart"
  ],
  "nml": [
    "application/vnd.enliven"
  ],
  "esf": [
    "application/vnd.epson.esf"
  ],
  "msf": [
    "application/vnd.epson.msf"
  ],
  "qam": [
    "application/vnd.epson.quickanime"
  ],
  "slt": [
    "application/vnd.epson.salt"
  ],
  "ssf": [
    "application/vnd.epson.ssf"
  ],
  "es3": [
    "application/vnd.eszigno3+xml"
  ],
  "et3": [
    "application/vnd.eszigno3+xml"
  ],
  "ez2": [
    "application/vnd.ezpix-album"
  ],
  "ez3": [
    "application/vnd.ezpix-package"
  ],
  "fdf": [
    "application/vnd.fdf"
  ],
  "mseed": [
    "application/vnd.fdsn.mseed"
  ],
  "seed": [
    "application/vnd.fdsn.seed"
  ],
  "dataless": [
    "application/vnd.fdsn.seed"
  ],
  "gph": [
    "application/vnd.flographit"
  ],
  "ftc": [
    "application/vnd.fluxtime.clip"
  ],
  "fm": [
    "application/vnd.framemaker",
    "application/x-frame"
  ],
  "frame": [
    "application/vnd.framemaker"
  ],
  "maker": [
    "application/vnd.framemaker"
  ],
  "book": [
    "application/vnd.framemaker"
  ],
  "fnc": [
    "application/vnd.frogans.fnc"
  ],
  "ltf": [
    "application/vnd.frogans.ltf"
  ],
  "fsc": [
    "application/vnd.fsc.weblaunch"
  ],
  "oas": [
    "application/vnd.fujitsu.oasys"
  ],
  "oa2": [
    "application/vnd.fujitsu.oasys2"
  ],
  "oa3": [
    "application/vnd.fujitsu.oasys3"
  ],
  "fg5": [
    "application/vnd.fujitsu.oasysgp"
  ],
  "bh2": [
    "application/vnd.fujitsu.oasysprs"
  ],
  "ddd": [
    "application/vnd.fujixerox.ddd"
  ],
  "xdw": [
    "application/vnd.fujixerox.docuworks"
  ],
  "xbd": [
    "application/vnd.fujixerox.docuworks.binder"
  ],
  "fzs": [
    "application/vnd.fuzzysheet"
  ],
  "txd": [
    "application/vnd.genomatix.tuxedo"
  ],
  "ggb": [
    "application/vnd.geogebra.file"
  ],
  "ggs": [
    "application/vnd.geogebra.slides"
  ],
  "ggt": [
    "application/vnd.geogebra.tool"
  ],
  "gex": [
    "application/vnd.geometry-explorer"
  ],
  "gre": [
    "application/vnd.geometry-explorer"
  ],
  "gxt": [
    "application/vnd.geonext"
  ],
  "g2w": [
    "application/vnd.geoplan"
  ],
  "g3w": [
    "application/vnd.geospace"
  ],
  "gmx": [
    "application/vnd.gmx"
  ],
  "kml": [
    "application/vnd.google-earth.kml+xml"
  ],
  "kmz": [
    "application/vnd.google-earth.kmz"
  ],
  "gqf": [
    "application/vnd.grafeq"
  ],
  "gqs": [
    "application/vnd.grafeq"
  ],
  "gac": [
    "application/vnd.groove-account"
  ],
  "ghf": [
    "application/vnd.groove-help"
  ],
  "gim": [
    "application/vnd.groove-identity-message"
  ],
  "grv": [
    "application/vnd.groove-injector"
  ],
  "gtm": [
    "application/vnd.groove-tool-message"
  ],
  "tpl": [
    "application/vnd.groove-tool-template"
  ],
  "vcg": [
    "application/vnd.groove-vcard"
  ],
  "hal": [
    "application/vnd.hal+xml"
  ],
  "zmm": [
    "application/vnd.handheld-entertainment+xml"
  ],
  "hbci": [
    "application/vnd.hbci"
  ],
  "les": [
    "application/vnd.hhe.lesson-player"
  ],
  "hpgl": [
    "application/vnd.hp-hpgl"
  ],
  "hpid": [
    "application/vnd.hp-hpid"
  ],
  "hps": [
    "application/vnd.hp-hps"
  ],
  "jlt": [
    "application/vnd.hp-jlyt"
  ],
  "pcl": [
    "application/vnd.hp-pcl"
  ],
  "pclxl": [
    "application/vnd.hp-pclxl"
  ],
  "sfd-hdstx": [
    "application/vnd.hydrostatix.sof-data"
  ],
  "mpy": [
    "application/vnd.ibm.minipay"
  ],
  "afp": [
    "application/vnd.ibm.modcap"
  ],
  "listafp": [
    "application/vnd.ibm.modcap"
  ],
  "list3820": [
    "application/vnd.ibm.modcap"
  ],
  "irm": [
    "application/vnd.ibm.rights-management"
  ],
  "sc": [
    "application/vnd.ibm.secure-container",
    "text/x-scala"
  ],
  "icc": [
    "application/vnd.iccprofile"
  ],
  "icm": [
    "application/vnd.iccprofile"
  ],
  "igl": [
    "application/vnd.igloader"
  ],
  "ivp": [
    "application/vnd.immervision-ivp"
  ],
  "ivu": [
    "application/vnd.immervision-ivu"
  ],
  "igm": [
    "application/vnd.insors.igm"
  ],
  "xpw": [
    "application/vnd.intercon.formnet"
  ],
  "xpx": [
    "application/vnd.intercon.formnet"
  ],
  "i2g": [
    "application/vnd.intergeo"
  ],
  "qbo": [
    "application/vnd.intu.qbo"
  ],
  "qfx": [
    "application/vnd.intu.qfx"
  ],
  "rcprofile": [
    "application/vnd.ipunplugged.rcprofile"
  ],
  "irp": [
    "application/vnd.irepository.package+xml"
  ],
  "xpr": [
    "application/vnd.is-xpr"
  ],
  "fcs": [
    "application/vnd.isac.fcs"
  ],
  "jam": [
    "application/vnd.jam"
  ],
  "rms": [
    "application/vnd.jcp.javame.midlet-rms",
    "application/vnd.rn-realmedia",
    "application/vnd.rn-realmedia-vbr"
  ],
  "jisp": [
    "application/vnd.jisp"
  ],
  "joda": [
    "application/vnd.joost.joda-archive"
  ],
  "ktz": [
    "application/vnd.kahootz"
  ],
  "ktr": [
    "application/vnd.kahootz"
  ],
  "karbon": [
    "application/vnd.kde.karbon",
    "application/x-karbon"
  ],
  "chrt": [
    "application/vnd.kde.kchart",
    "application/x-kchart"
  ],
  "kfo": [
    "application/vnd.kde.kformula",
    "application/x-kformula"
  ],
  "flw": [
    "application/vnd.kde.kivio",
    "application/x-kivio"
  ],
  "kon": [
    "application/vnd.kde.kontour",
    "application/x-kontour"
  ],
  "kpr": [
    "application/vnd.kde.kpresenter",
    "application/x-kpresenter"
  ],
  "kpt": [
    "application/vnd.kde.kpresenter",
    "application/x-kpresenter"
  ],
  "ksp": [
    "application/vnd.kde.kspread",
    "application/x-kspread"
  ],
  "kwd": [
    "application/vnd.kde.kword",
    "application/x-kword"
  ],
  "kwt": [
    "application/vnd.kde.kword",
    "application/x-kword"
  ],
  "htke": [
    "application/vnd.kenameaapp"
  ],
  "kia": [
    "application/vnd.kidspiration"
  ],
  "kne": [
    "application/vnd.kinar"
  ],
  "knp": [
    "application/vnd.kinar"
  ],
  "skp": [
    "application/vnd.koan"
  ],
  "skd": [
    "application/vnd.koan"
  ],
  "skt": [
    "application/vnd.koan"
  ],
  "skm": [
    "application/vnd.koan"
  ],
  "sse": [
    "application/vnd.kodak-descriptor"
  ],
  "lasxml": [
    "application/vnd.las.las+xml"
  ],
  "lbd": [
    "application/vnd.llamagraphics.life-balance.desktop"
  ],
  "lbe": [
    "application/vnd.llamagraphics.life-balance.exchange+xml"
  ],
  "apr": [
    "application/vnd.lotus-approach"
  ],
  "pre": [
    "application/vnd.lotus-freelance"
  ],
  "nsf": [
    "application/vnd.lotus-notes"
  ],
  "org": [
    "application/vnd.lotus-organizer",
    "text/org"
  ],
  "scm": [
    "application/vnd.lotus-screencam",
    "text/x-scheme"
  ],
  "lwp": [
    "application/vnd.lotus-wordpro"
  ],
  "portpkg": [
    "application/vnd.macports.portpkg"
  ],
  "mcd": [
    "application/vnd.mcd"
  ],
  "mc1": [
    "application/vnd.medcalcdata"
  ],
  "cdkey": [
    "application/vnd.mediastation.cdkey"
  ],
  "mwf": [
    "application/vnd.mfer"
  ],
  "mfm": [
    "application/vnd.mfmp"
  ],
  "flo": [
    "application/vnd.micrografx.flo"
  ],
  "igx": [
    "application/vnd.micrografx.igx"
  ],
  "mif": [
    "application/vnd.mif",
    "application/x-mif"
  ],
  "daf": [
    "application/vnd.mobius.daf"
  ],
  "dis": [
    "application/vnd.mobius.dis"
  ],
  "mbk": [
    "application/vnd.mobius.mbk"
  ],
  "mqy": [
    "application/vnd.mobius.mqy"
  ],
  "msl": [
    "application/vnd.mobius.msl"
  ],
  "plc": [
    "application/vnd.mobius.plc"
  ],
  "txf": [
    "application/vnd.mobius.txf"
  ],
  "mpn": [
    "application/vnd.mophun.application"
  ],
  "mpc": [
    "application/vnd.mophun.certificate",
    "audio/x-musepack"
  ],
  "xul": [
    "application/vnd.mozilla.xul+xml"
  ],
  "cil": [
    "application/vnd.ms-artgalry"
  ],
  "cab": [
    "application/vnd.ms-cab-compressed",
    "zz-application/zz-winassoc-cab"
  ],
  "xls": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xlm": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xla": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xlc": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xlt": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xlw": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xlam": [
    "application/vnd.ms-excel.addin.macroenabled.12",
    "application/vnd.ms-excel.addin.macroEnabled.12"
  ],
  "xlsb": [
    "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
  ],
  "xlsm": [
    "application/vnd.ms-excel.sheet.macroenabled.12",
    "application/vnd.ms-excel.sheet.macroEnabled.12"
  ],
  "xltm": [
    "application/vnd.ms-excel.template.macroenabled.12",
    "application/vnd.ms-excel.template.macroEnabled.12"
  ],
  "eot": [
    "application/vnd.ms-fontobject"
  ],
  "chm": [
    "application/vnd.ms-htmlhelp",
    "application/x-chm"
  ],
  "ims": [
    "application/vnd.ms-ims"
  ],
  "lrm": [
    "application/vnd.ms-lrm"
  ],
  "thmx": [
    "application/vnd.ms-officetheme"
  ],
  "cat": [
    "application/vnd.ms-pki.seccat"
  ],
  "stl": [
    "application/vnd.ms-pki.stl",
    "model/stl",
    "model/x.stl-ascii",
    "model/x.stl-binary"
  ],
  "ppt": [
    "application/vnd.ms-powerpoint",
    "application/powerpoint",
    "application/mspowerpoint",
    "application/x-mspowerpoint"
  ],
  "pps": [
    "application/vnd.ms-powerpoint",
    "application/powerpoint",
    "application/mspowerpoint",
    "application/x-mspowerpoint"
  ],
  "pot": [
    "application/vnd.ms-powerpoint",
    "text/x-gettext-translation-template",
    "text/x-pot",
    "application/powerpoint",
    "application/mspowerpoint",
    "application/x-mspowerpoint"
  ],
  "ppam": [
    "application/vnd.ms-powerpoint.addin.macroenabled.12",
    "application/vnd.ms-powerpoint.addin.macroEnabled.12"
  ],
  "pptm": [
    "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
  ],
  "sldm": [
    "application/vnd.ms-powerpoint.slide.macroenabled.12",
    "application/vnd.ms-powerpoint.slide.macroEnabled.12"
  ],
  "ppsm": [
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
  ],
  "potm": [
    "application/vnd.ms-powerpoint.template.macroenabled.12",
    "application/vnd.ms-powerpoint.template.macroEnabled.12"
  ],
  "mpp": [
    "application/vnd.ms-project",
    "audio/x-musepack"
  ],
  "mpt": [
    "application/vnd.ms-project"
  ],
  "docm": [
    "application/vnd.ms-word.document.macroenabled.12",
    "application/vnd.ms-word.document.macroEnabled.12"
  ],
  "dotm": [
    "application/vnd.ms-word.template.macroenabled.12",
    "application/vnd.ms-word.template.macroEnabled.12"
  ],
  "wps": [
    "application/vnd.ms-works"
  ],
  "wks": [
    "application/vnd.ms-works",
    "application/vnd.lotus-1-2-3",
    "application/x-lotus123",
    "application/x-123",
    "application/lotus123",
    "application/wk1",
    "zz-application/zz-winassoc-123"
  ],
  "wcm": [
    "application/vnd.ms-works"
  ],
  "wdb": [
    "application/vnd.ms-works"
  ],
  "wpl": [
    "application/vnd.ms-wpl"
  ],
  "xps": [
    "application/vnd.ms-xpsdocument",
    "application/xps"
  ],
  "mseq": [
    "application/vnd.mseq"
  ],
  "mus": [
    "application/vnd.musician"
  ],
  "msty": [
    "application/vnd.muvee.style"
  ],
  "taglet": [
    "application/vnd.mynfc"
  ],
  "nlu": [
    "application/vnd.neurolanguage.nlu"
  ],
  "ntf": [
    "application/vnd.nitf"
  ],
  "nitf": [
    "application/vnd.nitf"
  ],
  "nnd": [
    "application/vnd.noblenet-directory"
  ],
  "nns": [
    "application/vnd.noblenet-sealer"
  ],
  "nnw": [
    "application/vnd.noblenet-web"
  ],
  "ngdat": [
    "application/vnd.nokia.n-gage.data"
  ],
  "n-gage": [
    "application/vnd.nokia.n-gage.symbian.install"
  ],
  "rpst": [
    "application/vnd.nokia.radio-preset"
  ],
  "rpss": [
    "application/vnd.nokia.radio-presets"
  ],
  "edm": [
    "application/vnd.novadigm.edm"
  ],
  "edx": [
    "application/vnd.novadigm.edx"
  ],
  "ext": [
    "application/vnd.novadigm.ext"
  ],
  "odc": [
    "application/vnd.oasis.opendocument.chart"
  ],
  "otc": [
    "application/vnd.oasis.opendocument.chart-template"
  ],
  "odb": [
    "application/vnd.oasis.opendocument.database",
    "application/vnd.sun.xml.base"
  ],
  "odf": [
    "application/vnd.oasis.opendocument.formula"
  ],
  "odft": [
    "application/vnd.oasis.opendocument.formula-template"
  ],
  "odg": [
    "application/vnd.oasis.opendocument.graphics"
  ],
  "otg": [
    "application/vnd.oasis.opendocument.graphics-template"
  ],
  "odi": [
    "application/vnd.oasis.opendocument.image"
  ],
  "oti": [
    "application/vnd.oasis.opendocument.image-template"
  ],
  "odp": [
    "application/vnd.oasis.opendocument.presentation"
  ],
  "otp": [
    "application/vnd.oasis.opendocument.presentation-template"
  ],
  "ods": [
    "application/vnd.oasis.opendocument.spreadsheet"
  ],
  "ots": [
    "application/vnd.oasis.opendocument.spreadsheet-template"
  ],
  "odt": [
    "application/vnd.oasis.opendocument.text"
  ],
  "odm": [
    "application/vnd.oasis.opendocument.text-master"
  ],
  "ott": [
    "application/vnd.oasis.opendocument.text-template"
  ],
  "oth": [
    "application/vnd.oasis.opendocument.text-web"
  ],
  "xo": [
    "application/vnd.olpc-sugar"
  ],
  "dd2": [
    "application/vnd.oma.dd2+xml"
  ],
  "oxt": [
    "application/vnd.openofficeorg.extension"
  ],
  "pptx": [
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ],
  "sldx": [
    "application/vnd.openxmlformats-officedocument.presentationml.slide"
  ],
  "ppsx": [
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
  ],
  "potx": [
    "application/vnd.openxmlformats-officedocument.presentationml.template"
  ],
  "xlsx": [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ],
  "xltx": [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
  ],
  "docx": [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ],
  "dotx": [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
  ],
  "mgp": [
    "application/vnd.osgeo.mapguide.package",
    "application/x-magicpoint"
  ],
  "dp": [
    "application/vnd.osgi.dp"
  ],
  "esa": [
    "application/vnd.osgi.subsystem"
  ],
  "pdb": [
    "application/vnd.palm",
    "application/x-ms-pdb",
    "application/x-aportisdoc",
    "application/x-palm-database"
  ],
  "pqa": [
    "application/vnd.palm",
    "application/x-palm-database"
  ],
  "oprc": [
    "application/vnd.palm",
    "application/x-palm-database"
  ],
  "paw": [
    "application/vnd.pawaafile"
  ],
  "str": [
    "application/vnd.pg.format"
  ],
  "ei6": [
    "application/vnd.pg.osasli"
  ],
  "efif": [
    "application/vnd.picsel"
  ],
  "wg": [
    "application/vnd.pmi.widget"
  ],
  "plf": [
    "application/vnd.pocketlearn"
  ],
  "pbd": [
    "application/vnd.powerbuilder6"
  ],
  "box": [
    "application/vnd.previewsystems.box"
  ],
  "mgz": [
    "application/vnd.proteus.magazine"
  ],
  "qps": [
    "application/vnd.publishare-delta-tree"
  ],
  "ptid": [
    "application/vnd.pvi.ptid1"
  ],
  "qxd": [
    "application/vnd.quark.quarkxpress"
  ],
  "qxt": [
    "application/vnd.quark.quarkxpress"
  ],
  "qwd": [
    "application/vnd.quark.quarkxpress"
  ],
  "qwt": [
    "application/vnd.quark.quarkxpress"
  ],
  "qxl": [
    "application/vnd.quark.quarkxpress"
  ],
  "qxb": [
    "application/vnd.quark.quarkxpress"
  ],
  "bed": [
    "application/vnd.realvnc.bed"
  ],
  "mxl": [
    "application/vnd.recordare.musicxml"
  ],
  "musicxml": [
    "application/vnd.recordare.musicxml+xml"
  ],
  "cryptonote": [
    "application/vnd.rig.cryptonote"
  ],
  "cod": [
    "application/vnd.rim.cod"
  ],
  "rm": [
    "application/vnd.rn-realmedia",
    "application/vnd.rn-realmedia-vbr"
  ],
  "rmvb": [
    "application/vnd.rn-realmedia-vbr",
    "application/vnd.rn-realmedia"
  ],
  "link66": [
    "application/vnd.route66.link66+xml"
  ],
  "st": [
    "application/vnd.sailingtracker.track"
  ],
  "see": [
    "application/vnd.seemail"
  ],
  "sema": [
    "application/vnd.sema"
  ],
  "semd": [
    "application/vnd.semd"
  ],
  "semf": [
    "application/vnd.semf"
  ],
  "ifm": [
    "application/vnd.shana.informed.formdata"
  ],
  "itp": [
    "application/vnd.shana.informed.formtemplate"
  ],
  "iif": [
    "application/vnd.shana.informed.interchange"
  ],
  "ipk": [
    "application/vnd.shana.informed.package"
  ],
  "twd": [
    "application/vnd.simtech-mindmapper"
  ],
  "twds": [
    "application/vnd.simtech-mindmapper"
  ],
  "mmf": [
    "application/vnd.smaf",
    "application/x-smaf"
  ],
  "teacher": [
    "application/vnd.smart.teacher"
  ],
  "sdkm": [
    "application/vnd.solent.sdkm+xml"
  ],
  "sdkd": [
    "application/vnd.solent.sdkm+xml"
  ],
  "dxp": [
    "application/vnd.spotfire.dxp"
  ],
  "sfs": [
    "application/vnd.spotfire.sfs"
  ],
  "sdc": [
    "application/vnd.stardivision.calc"
  ],
  "sda": [
    "application/vnd.stardivision.draw"
  ],
  "sdd": [
    "application/vnd.stardivision.impress"
  ],
  "smf": [
    "application/vnd.stardivision.math"
  ],
  "sdw": [
    "application/vnd.stardivision.writer",
    "application/vnd.stardivision.writer-global"
  ],
  "vor": [
    "application/vnd.stardivision.writer",
    "application/vnd.stardivision.writer-global"
  ],
  "sgl": [
    "application/vnd.stardivision.writer-global",
    "application/vnd.stardivision.writer"
  ],
  "smzip": [
    "application/vnd.stepmania.package"
  ],
  "sm": [
    "application/vnd.stepmania.stepchart"
  ],
  "sxc": [
    "application/vnd.sun.xml.calc"
  ],
  "stc": [
    "application/vnd.sun.xml.calc.template"
  ],
  "sxd": [
    "application/vnd.sun.xml.draw"
  ],
  "std": [
    "application/vnd.sun.xml.draw.template"
  ],
  "sxi": [
    "application/vnd.sun.xml.impress"
  ],
  "sti": [
    "application/vnd.sun.xml.impress.template"
  ],
  "sxm": [
    "application/vnd.sun.xml.math"
  ],
  "sxw": [
    "application/vnd.sun.xml.writer"
  ],
  "sxg": [
    "application/vnd.sun.xml.writer.global"
  ],
  "stw": [
    "application/vnd.sun.xml.writer.template"
  ],
  "sus": [
    "application/vnd.sus-calendar"
  ],
  "susp": [
    "application/vnd.sus-calendar"
  ],
  "svd": [
    "application/vnd.svd"
  ],
  "sis": [
    "application/vnd.symbian.install"
  ],
  "sisx": [
    "application/vnd.symbian.install",
    "x-epoc/x-sisx-app"
  ],
  "xsm": [
    "application/vnd.syncml+xml"
  ],
  "bdm": [
    "application/vnd.syncml.dm+wbxml",
    "video/mp2t"
  ],
  "xdm": [
    "application/vnd.syncml.dm+xml"
  ],
  "tao": [
    "application/vnd.tao.intent-module-archive"
  ],
  "pcap": [
    "application/vnd.tcpdump.pcap",
    "application/x-pcap",
    "application/pcap"
  ],
  "cap": [
    "application/vnd.tcpdump.pcap",
    "application/x-pcap",
    "application/pcap"
  ],
  "dmp": [
    "application/vnd.tcpdump.pcap",
    "application/x-pcap",
    "application/pcap"
  ],
  "tmo": [
    "application/vnd.tmobile-livetv"
  ],
  "tpt": [
    "application/vnd.trid.tpt"
  ],
  "mxs": [
    "application/vnd.triscape.mxs"
  ],
  "tra": [
    "application/vnd.trueapp"
  ],
  "ufd": [
    "application/vnd.ufdl"
  ],
  "ufdl": [
    "application/vnd.ufdl"
  ],
  "utz": [
    "application/vnd.uiq.theme"
  ],
  "umj": [
    "application/vnd.umajin"
  ],
  "unityweb": [
    "application/vnd.unity"
  ],
  "uoml": [
    "application/vnd.uoml+xml"
  ],
  "vcx": [
    "application/vnd.vcx"
  ],
  "vsd": [
    "application/vnd.visio"
  ],
  "vst": [
    "application/vnd.visio",
    "image/x-tga",
    "application/tga",
    "application/x-targa",
    "application/x-tga",
    "image/targa",
    "image/tga",
    "image/x-icb",
    "image/x-targa"
  ],
  "vss": [
    "application/vnd.visio"
  ],
  "vsw": [
    "application/vnd.visio"
  ],
  "vis": [
    "application/vnd.visionary"
  ],
  "vsf": [
    "application/vnd.vsf"
  ],
  "wbxml": [
    "application/vnd.wap.wbxml"
  ],
  "wmlc": [
    "application/vnd.wap.wmlc"
  ],
  "wmlsc": [
    "application/vnd.wap.wmlscriptc"
  ],
  "wtb": [
    "application/vnd.webturbo"
  ],
  "nbp": [
    "application/vnd.wolfram.player"
  ],
  "wpd": [
    "application/vnd.wordperfect",
    "application/x-wordperfect",
    "application/wordperfect"
  ],
  "wqd": [
    "application/vnd.wqd"
  ],
  "stf": [
    "application/vnd.wt.stf"
  ],
  "xar": [
    "application/vnd.xara",
    "application/x-xar"
  ],
  "xfdl": [
    "application/vnd.xfdl"
  ],
  "hvd": [
    "application/vnd.yamaha.hv-dic"
  ],
  "hvs": [
    "application/vnd.yamaha.hv-script"
  ],
  "hvp": [
    "application/vnd.yamaha.hv-voice"
  ],
  "osf": [
    "application/vnd.yamaha.openscoreformat"
  ],
  "osfpvg": [
    "application/vnd.yamaha.openscoreformat.osfpvg+xml"
  ],
  "saf": [
    "application/vnd.yamaha.smaf-audio"
  ],
  "spf": [
    "application/vnd.yamaha.smaf-phrase"
  ],
  "cmp": [
    "application/vnd.yellowriver-custom-menu"
  ],
  "zir": [
    "application/vnd.zul"
  ],
  "zirz": [
    "application/vnd.zul"
  ],
  "zaz": [
    "application/vnd.zzazz.deck+xml"
  ],
  "vxml": [
    "application/voicexml+xml"
  ],
  "wasm": [
    "application/wasm"
  ],
  "wgt": [
    "application/widget"
  ],
  "hlp": [
    "application/winhlp",
    "zz-application/zz-winassoc-hlp"
  ],
  "wsdl": [
    "application/wsdl+xml"
  ],
  "wspolicy": [
    "application/wspolicy+xml"
  ],
  "7z": [
    "application/x-7z-compressed"
  ],
  "abw": [
    "application/x-abiword"
  ],
  "ace": [
    "application/x-ace-compressed",
    "application/x-ace"
  ],
  "dmg": [
    "application/x-apple-diskimage"
  ],
  "aab": [
    "application/x-authorware-bin"
  ],
  "x32": [
    "application/x-authorware-bin"
  ],
  "u32": [
    "application/x-authorware-bin"
  ],
  "vox": [
    "application/x-authorware-bin"
  ],
  "aam": [
    "application/x-authorware-map"
  ],
  "aas": [
    "application/x-authorware-seg"
  ],
  "bcpio": [
    "application/x-bcpio"
  ],
  "torrent": [
    "application/x-bittorrent"
  ],
  "blb": [
    "application/x-blorb"
  ],
  "blorb": [
    "application/x-blorb"
  ],
  "bz": [
    "application/x-bzip"
  ],
  "bz2": [
    "application/x-bzip2",
    "application/bzip2"
  ],
  "boz": [
    "application/x-bzip2"
  ],
  "cbr": [
    "application/x-cbr",
    "application/vnd.comicbook-rar"
  ],
  "cba": [
    "application/x-cbr"
  ],
  "cbt": [
    "application/x-cbr",
    "application/x-cbt"
  ],
  "cbz": [
    "application/x-cbr",
    "application/vnd.comicbook+zip",
    "application/x-cbz"
  ],
  "cb7": [
    "application/x-cbr",
    "application/x-cb7"
  ],
  "vcd": [
    "application/x-cdlink"
  ],
  "cfs": [
    "application/x-cfs-compressed"
  ],
  "chat": [
    "application/x-chat"
  ],
  "pgn": [
    "application/x-chess-pgn",
    "application/vnd.chess-pgn"
  ],
  "nsc": [
    "application/x-conference",
    "application/x-netshow-channel"
  ],
  "cpio": [
    "application/x-cpio"
  ],
  "csh": [
    "application/x-csh"
  ],
  "deb": [
    "application/x-debian-package",
    "application/vnd.debian.binary-package",
    "application/x-deb"
  ],
  "udeb": [
    "application/x-debian-package",
    "application/vnd.debian.binary-package",
    "application/x-deb"
  ],
  "dgc": [
    "application/x-dgc-compressed"
  ],
  "dir": [
    "application/x-director"
  ],
  "dcr": [
    "application/x-director",
    "image/x-kodak-dcr"
  ],
  "dxr": [
    "application/x-director"
  ],
  "cst": [
    "application/x-director"
  ],
  "cct": [
    "application/x-director"
  ],
  "cxt": [
    "application/x-director"
  ],
  "w3d": [
    "application/x-director"
  ],
  "fgd": [
    "application/x-director"
  ],
  "swa": [
    "application/x-director"
  ],
  "wad": [
    "application/x-doom",
    "application/x-wii-wad",
    "application/x-doom-wad"
  ],
  "ncx": [
    "application/x-dtbncx+xml"
  ],
  "dtb": [
    "application/x-dtbook+xml",
    "text/x-devicetree-binary"
  ],
  "res": [
    "application/x-dtbresource+xml",
    "application/x-godot-resource"
  ],
  "dvi": [
    "application/x-dvi"
  ],
  "evy": [
    "application/x-envoy"
  ],
  "eva": [
    "application/x-eva"
  ],
  "bdf": [
    "application/x-font-bdf"
  ],
  "gsf": [
    "application/x-font-ghostscript",
    "application/x-font-type1"
  ],
  "psf": [
    "application/x-font-linux-psf",
    "audio/x-psf"
  ],
  "pcf": [
    "application/x-font-pcf",
    "application/x-cisco-vpn-settings"
  ],
  "snf": [
    "application/x-font-snf"
  ],
  "pfa": [
    "application/x-font-type1"
  ],
  "pfb": [
    "application/x-font-type1"
  ],
  "pfm": [
    "application/x-font-type1"
  ],
  "afm": [
    "application/x-font-type1",
    "application/x-font-afm"
  ],
  "arc": [
    "application/x-freearc"
  ],
  "spl": [
    "application/x-futuresplash",
    "application/vnd.adobe.flash.movie",
    "application/x-shockwave-flash",
    "application/futuresplash"
  ],
  "gca": [
    "application/x-gca-compressed"
  ],
  "ulx": [
    "application/x-glulx"
  ],
  "gnumeric": [
    "application/x-gnumeric"
  ],
  "gramps": [
    "application/x-gramps-xml"
  ],
  "gtar": [
    "application/x-gtar",
    "application/x-tar"
  ],
  "hdf": [
    "application/x-hdf"
  ],
  "install": [
    "application/x-install-instructions"
  ],
  "iso": [
    "application/x-iso9660-image",
    "application/x-sega-cd-rom",
    "application/x-sega-pico-rom",
    "application/x-saturn-rom",
    "application/x-dreamcast-rom",
    "application/x-wii-rom",
    "application/x-wii-iso-image",
    "application/x-wbfs",
    "application/x-wia",
    "application/x-gamecube-rom",
    "application/x-gamecube-iso-image",
    "application/vnd.efi.iso",
    "application/x-cd-image"
  ],
  "jnlp": [
    "application/x-java-jnlp-file"
  ],
  "latex": [
    "application/x-latex",
    "text/x-tex",
    "application/x-tex"
  ],
  "lzh": [
    "application/x-lzh-compressed",
    "application/x-lha"
  ],
  "lha": [
    "application/x-lzh-compressed",
    "application/x-lha"
  ],
  "mie": [
    "application/x-mie"
  ],
  "prc": [
    "application/x-mobipocket-ebook",
    "application/vnd.palm",
    "application/x-palm-database"
  ],
  "mobi": [
    "application/x-mobipocket-ebook"
  ],
  "application": [
    "application/x-ms-application"
  ],
  "lnk": [
    "application/x-ms-shortcut"
  ],
  "wmd": [
    "application/x-ms-wmd"
  ],
  "wmz": [
    "application/x-ms-wmz",
    "application/x-msmetafile"
  ],
  "xbap": [
    "application/x-ms-xbap"
  ],
  "mdb": [
    "application/x-msaccess",
    "application/vnd.ms-access",
    "application/msaccess",
    "application/vnd.msaccess",
    "application/mdb",
    "application/x-mdb",
    "zz-application/zz-winassoc-mdb",
    "application/x-lmdb"
  ],
  "obd": [
    "application/x-msbinder"
  ],
  "crd": [
    "application/x-mscardfile"
  ],
  "clp": [
    "application/x-msclip"
  ],
  "exe": [
    "application/x-msdownload",
    "application/x-ms-dos-executable"
  ],
  "dll": [
    "application/x-msdownload"
  ],
  "com": [
    "application/x-msdownload"
  ],
  "bat": [
    "application/x-msdownload",
    "application/x-bat",
    "application/bat"
  ],
  "msi": [
    "application/x-msdownload",
    "application/x-msi"
  ],
  "mvb": [
    "application/x-msmediaview"
  ],
  "m13": [
    "application/x-msmediaview"
  ],
  "m14": [
    "application/x-msmediaview"
  ],
  "wmf": [
    "application/x-msmetafile",
    "image/wmf",
    "image/x-wmf",
    "image/x-win-metafile",
    "application/x-wmf",
    "application/wmf"
  ],
  "emf": [
    "application/x-msmetafile",
    "image/emf",
    "image/x-emf",
    "application/x-emf",
    "application/emf"
  ],
  "emz": [
    "application/x-msmetafile"
  ],
  "mny": [
    "application/x-msmoney"
  ],
  "pub": [
    "application/x-mspublisher",
    "application/vnd.ms-publisher"
  ],
  "scd": [
    "application/x-msschedule"
  ],
  "trm": [
    "application/x-msterminal"
  ],
  "wri": [
    "application/x-mswrite"
  ],
  "nc": [
    "application/x-netcdf"
  ],
  "cdf": [
    "application/x-netcdf"
  ],
  "nzb": [
    "application/x-nzb"
  ],
  "p12": [
    "application/x-pkcs12",
    "application/pkcs12"
  ],
  "pfx": [
    "application/x-pkcs12",
    "application/pkcs12"
  ],
  "p7b": [
    "application/x-pkcs7-certificates"
  ],
  "spc": [
    "application/x-pkcs7-certificates"
  ],
  "p7r": [
    "application/x-pkcs7-certreqresp"
  ],
  "rar": [
    "application/x-rar-compressed",
    "application/vnd.rar",
    "application/x-rar"
  ],
  "ris": [
    "application/x-research-info-systems"
  ],
  "sh": [
    "application/x-sh",
    "application/x-shellscript",
    "text/x-sh"
  ],
  "shar": [
    "application/x-shar"
  ],
  "swf": [
    "application/x-shockwave-flash",
    "application/vnd.adobe.flash.movie",
    "application/futuresplash"
  ],
  "xap": [
    "application/x-silverlight-app"
  ],
  "sql": [
    "application/x-sql",
    "application/sql",
    "text/x-sql"
  ],
  "sit": [
    "application/x-stuffit",
    "application/stuffit",
    "application/x-sit"
  ],
  "sitx": [
    "application/x-stuffitx",
    "application/x-sitx"
  ],
  "srt": [
    "application/x-subrip",
    "application/x-srt"
  ],
  "sv4cpio": [
    "application/x-sv4cpio"
  ],
  "sv4crc": [
    "application/x-sv4crc"
  ],
  "t3": [
    "application/x-t3vm-image"
  ],
  "gam": [
    "application/x-tads"
  ],
  "tar": [
    "application/x-tar",
    "application/x-gtar"
  ],
  "tcl": [
    "application/x-tcl",
    "text/tcl",
    "text/x-tcl"
  ],
  "tex": [
    "application/x-tex",
    "text/x-tex"
  ],
  "tfm": [
    "application/x-tex-tfm"
  ],
  "texinfo": [
    "application/x-texinfo",
    "text/x-texinfo"
  ],
  "texi": [
    "application/x-texinfo",
    "text/x-texinfo"
  ],
  "obj": [
    "application/x-tgif",
    "model/obj"
  ],
  "ustar": [
    "application/x-ustar"
  ],
  "src": [
    "application/x-wais-source"
  ],
  "der": [
    "application/x-x509-ca-cert"
  ],
  "crt": [
    "application/x-x509-ca-cert"
  ],
  "fig": [
    "application/x-xfig",
    "image/x-xfig"
  ],
  "xlf": [
    "application/x-xliff+xml",
    "application/xliff+xml",
    "application/x-xliff"
  ],
  "xpi": [
    "application/x-xpinstall"
  ],
  "xz": [
    "application/x-xz"
  ],
  "z1": [
    "application/x-zmachine"
  ],
  "z2": [
    "application/x-zmachine"
  ],
  "z3": [
    "application/x-zmachine"
  ],
  "z4": [
    "application/x-zmachine"
  ],
  "z5": [
    "application/x-zmachine"
  ],
  "z6": [
    "application/x-zmachine"
  ],
  "z7": [
    "application/x-zmachine"
  ],
  "z8": [
    "application/x-zmachine"
  ],
  "xaml": [
    "application/xaml+xml"
  ],
  "xdf": [
    "application/xcap-diff+xml"
  ],
  "xenc": [
    "application/xenc+xml"
  ],
  "xhtml": [
    "application/xhtml+xml"
  ],
  "xht": [
    "application/xhtml+xml"
  ],
  "xml": [
    "application/xml",
    "text/xml"
  ],
  "xsl": [
    "application/xml",
    "application/xslt+xml"
  ],
  "dtd": [
    "application/xml-dtd",
    "text/x-dtd"
  ],
  "xop": [
    "application/xop+xml"
  ],
  "xpl": [
    "application/xproc+xml"
  ],
  "xslt": [
    "application/xslt+xml"
  ],
  "xspf": [
    "application/xspf+xml",
    "application/x-xspf+xml"
  ],
  "mxml": [
    "application/xv+xml"
  ],
  "xhvml": [
    "application/xv+xml"
  ],
  "xvml": [
    "application/xv+xml"
  ],
  "xvm": [
    "application/xv+xml"
  ],
  "yang": [
    "application/yang"
  ],
  "yin": [
    "application/yin+xml"
  ],
  "zip": [
    "application/zip",
    "application/x-zip-compressed",
    "application/x-zip"
  ],
  "adp": [
    "audio/adpcm"
  ],
  "au": [
    "audio/basic"
  ],
  "snd": [
    "audio/basic"
  ],
  "mid": [
    "audio/midi",
    "audio/x-midi"
  ],
  "midi": [
    "audio/midi",
    "audio/x-midi"
  ],
  "kar": [
    "audio/midi",
    "audio/x-midi"
  ],
  "rmi": [
    "audio/midi"
  ],
  "m4a": [
    "audio/mp4",
    "audio/x-m4a",
    "audio/m4a"
  ],
  "mp4a": [
    "audio/mp4"
  ],
  "mpga": [
    "audio/mpeg",
    "audio/x-mp3",
    "audio/x-mpg",
    "audio/x-mpeg",
    "audio/mp3"
  ],
  "mp2": [
    "audio/mpeg",
    "audio/mp2",
    "audio/x-mp2",
    "video/mpeg",
    "video/x-mpeg",
    "video/mpeg-system",
    "video/x-mpeg-system",
    "video/x-mpeg2"
  ],
  "mp2a": [
    "audio/mpeg"
  ],
  "mp3": [
    "audio/mpeg",
    "audio/x-mp3",
    "audio/x-mpg",
    "audio/x-mpeg",
    "audio/mp3"
  ],
  "m2a": [
    "audio/mpeg"
  ],
  "m3a": [
    "audio/mpeg"
  ],
  "oga": [
    "audio/ogg",
    "audio/x-vorbis+ogg",
    "audio/vorbis",
    "audio/x-vorbis",
    "audio/x-flac+ogg",
    "audio/x-oggflac",
    "audio/x-ogg",
    "audio/x-speex+ogg"
  ],
  "ogg": [
    "audio/ogg",
    "video/x-theora+ogg",
    "video/x-theora",
    "video/ogg",
    "video/x-ogg",
    "audio/x-vorbis+ogg",
    "audio/vorbis",
    "audio/x-vorbis",
    "audio/x-flac+ogg",
    "audio/x-oggflac",
    "audio/x-ogg",
    "audio/x-speex+ogg"
  ],
  "spx": [
    "audio/ogg",
    "application/x-apple-systemprofiler+xml",
    "audio/x-speex",
    "audio/x-speex+ogg"
  ],
  "opus": [
    "audio/ogg",
    "audio/x-opus+ogg",
    "audio/x-ogg"
  ],
  "s3m": [
    "audio/s3m",
    "audio/x-s3m"
  ],
  "sil": [
    "audio/silk"
  ],
  "uva": [
    "audio/vnd.dece.audio"
  ],
  "uvva": [
    "audio/vnd.dece.audio"
  ],
  "eol": [
    "audio/vnd.digital-winds"
  ],
  "dra": [
    "audio/vnd.dra"
  ],
  "dts": [
    "audio/vnd.dts",
    "audio/x-dts",
    "text/x-devicetree-source"
  ],
  "dtshd": [
    "audio/vnd.dts.hd",
    "audio/x-dtshd"
  ],
  "lvp": [
    "audio/vnd.lucent.voice"
  ],
  "pya": [
    "audio/vnd.ms-playready.media.pya"
  ],
  "ecelp4800": [
    "audio/vnd.nuera.ecelp4800"
  ],
  "ecelp7470": [
    "audio/vnd.nuera.ecelp7470"
  ],
  "ecelp9600": [
    "audio/vnd.nuera.ecelp9600"
  ],
  "rip": [
    "audio/vnd.rip"
  ],
  "weba": [
    "audio/webm"
  ],
  "aac": [
    "audio/x-aac",
    "audio/aac"
  ],
  "aif": [
    "audio/x-aiff"
  ],
  "aiff": [
    "audio/x-aiff"
  ],
  "aifc": [
    "audio/x-aiff",
    "audio/x-aifc",
    "audio/x-aiffc"
  ],
  "caf": [
    "audio/x-caf"
  ],
  "flac": [
    "audio/x-flac",
    "audio/flac"
  ],
  "mka": [
    "audio/x-matroska"
  ],
  "m3u": [
    "audio/x-mpegurl",
    "application/vnd.apple.mpegurl",
    "audio/mpegurl",
    "application/m3u",
    "audio/x-mp3-playlist",
    "audio/m3u",
    "audio/x-m3u"
  ],
  "wax": [
    "audio/x-ms-wax",
    "audio/x-ms-asx",
    "video/x-ms-wvx",
    "video/x-ms-wax",
    "video/x-ms-wmx",
    "application/x-ms-asx"
  ],
  "wma": [
    "audio/x-ms-wma",
    "audio/wma"
  ],
  "ram": [
    "audio/x-pn-realaudio",
    "application/ram"
  ],
  "ra": [
    "audio/x-pn-realaudio",
    "audio/vnd.rn-realaudio",
    "audio/vnd.m-realaudio"
  ],
  "rmp": [
    "audio/x-pn-realaudio-plugin"
  ],
  "wav": [
    "audio/x-wav",
    "audio/vnd.wave",
    "audio/wav"
  ],
  "xm": [
    "audio/xm",
    "audio/x-xm"
  ],
  "cdx": [
    "chemical/x-cdx"
  ],
  "cif": [
    "chemical/x-cif"
  ],
  "cmdf": [
    "chemical/x-cmdf"
  ],
  "cml": [
    "chemical/x-cml"
  ],
  "csml": [
    "chemical/x-csml"
  ],
  "xyz": [
    "chemical/x-xyz"
  ],
  "ttc": [
    "font/collection"
  ],
  "otf": [
    "font/otf",
    "application/vnd.oasis.opendocument.formula-template",
    "application/x-font-otf"
  ],
  "ttf": [
    "font/ttf",
    "application/x-font-ttf"
  ],
  "woff": [
    "font/woff",
    "application/font-woff"
  ],
  "woff2": [
    "font/woff2"
  ],
  "bmp": [
    "image/bmp",
    "image/x-bmp",
    "image/x-MS-bmp"
  ],
  "cgm": [
    "image/cgm"
  ],
  "g3": [
    "image/g3fax",
    "image/fax-g3"
  ],
  "gif": [
    "image/gif"
  ],
  "ief": [
    "image/ief"
  ],
  "jpeg": [
    "image/jpeg",
    "image/pjpeg"
  ],
  "jpg": [
    "image/jpeg",
    "image/pjpeg"
  ],
  "jpe": [
    "image/jpeg",
    "image/pjpeg"
  ],
  "ktx": [
    "image/ktx"
  ],
  "png": [
    "image/png",
    "image/apng",
    "image/vnd.mozilla.apng"
  ],
  "btif": [
    "image/prs.btif"
  ],
  "sgi": [
    "image/sgi",
    "image/x-sgi"
  ],
  "svg": [
    "image/svg+xml"
  ],
  "svgz": [
    "image/svg+xml",
    "image/svg+xml-compressed"
  ],
  "tiff": [
    "image/tiff"
  ],
  "tif": [
    "image/tiff"
  ],
  "psd": [
    "image/vnd.adobe.photoshop",
    "image/psd",
    "image/x-psd",
    "image/photoshop",
    "image/x-photoshop",
    "application/photoshop",
    "application/x-photoshop"
  ],
  "uvi": [
    "image/vnd.dece.graphic"
  ],
  "uvvi": [
    "image/vnd.dece.graphic"
  ],
  "uvg": [
    "image/vnd.dece.graphic"
  ],
  "uvvg": [
    "image/vnd.dece.graphic"
  ],
  "djvu": [
    "image/vnd.djvu",
    "image/x-djvu",
    "image/x.djvu",
    "image/vnd.djvu+multipage"
  ],
  "djv": [
    "image/vnd.djvu",
    "image/x-djvu",
    "image/x.djvu",
    "image/vnd.djvu+multipage"
  ],
  "sub": [
    "image/vnd.dvb.subtitle",
    "text/vnd.dvb.subtitle",
    "text/x-microdvd",
    "text/x-mpsub",
    "text/x-subviewer"
  ],
  "dwg": [
    "image/vnd.dwg"
  ],
  "dxf": [
    "image/vnd.dxf"
  ],
  "fbs": [
    "image/vnd.fastbidsheet"
  ],
  "fpx": [
    "image/vnd.fpx"
  ],
  "fst": [
    "image/vnd.fst"
  ],
  "mmr": [
    "image/vnd.fujixerox.edmics-mmr"
  ],
  "rlc": [
    "image/vnd.fujixerox.edmics-rlc"
  ],
  "mdi": [
    "image/vnd.ms-modi"
  ],
  "wdp": [
    "image/vnd.ms-photo",
    "image/jxr"
  ],
  "npx": [
    "image/vnd.net-fpx"
  ],
  "wbmp": [
    "image/vnd.wap.wbmp"
  ],
  "xif": [
    "image/vnd.xiff"
  ],
  "webp": [
    "image/webp"
  ],
  "3ds": [
    "image/x-3ds",
    "application/x-nintendo-3ds-rom"
  ],
  "ras": [
    "image/x-cmu-raster"
  ],
  "cmx": [
    "image/x-cmx"
  ],
  "fh": [
    "image/x-freehand"
  ],
  "fhc": [
    "image/x-freehand"
  ],
  "fh4": [
    "image/x-freehand"
  ],
  "fh5": [
    "image/x-freehand"
  ],
  "fh7": [
    "image/x-freehand"
  ],
  "ico": [
    "image/x-icon",
    "image/vnd.microsoft.icon",
    "application/ico",
    "image/ico",
    "image/icon",
    "image/x-ico",
    "text/ico"
  ],
  "sid": [
    "image/x-mrsid-image",
    "audio/prs.sid"
  ],
  "pcx": [
    "image/x-pcx",
    "image/vnd.zbrush.pcx"
  ],
  "pic": [
    "image/x-pict"
  ],
  "pct": [
    "image/x-pict"
  ],
  "pnm": [
    "image/x-portable-anymap"
  ],
  "pbm": [
    "image/x-portable-bitmap"
  ],
  "pgm": [
    "image/x-portable-graymap"
  ],
  "ppm": [
    "image/x-portable-pixmap"
  ],
  "rgb": [
    "image/x-rgb"
  ],
  "tga": [
    "image/x-tga",
    "application/tga",
    "application/x-targa",
    "application/x-tga",
    "image/targa",
    "image/tga",
    "image/x-icb",
    "image/x-targa"
  ],
  "xbm": [
    "image/x-xbitmap"
  ],
  "xpm": [
    "image/x-xpixmap",
    "image/x-xpm"
  ],
  "xwd": [
    "image/x-xwindowdump"
  ],
  "eml": [
    "message/rfc822"
  ],
  "mime": [
    "message/rfc822"
  ],
  "igs": [
    "model/iges"
  ],
  "iges": [
    "model/iges"
  ],
  "msh": [
    "model/mesh"
  ],
  "mesh": [
    "model/mesh"
  ],
  "silo": [
    "model/mesh"
  ],
  "dae": [
    "model/vnd.collada+xml"
  ],
  "dwf": [
    "model/vnd.dwf"
  ],
  "gdl": [
    "model/vnd.gdl"
  ],
  "gtw": [
    "model/vnd.gtw"
  ],
  "mts": [
    "model/vnd.mts",
    "video/mp2t"
  ],
  "vtu": [
    "model/vnd.vtu"
  ],
  "wrl": [
    "model/vrml"
  ],
  "vrml": [
    "model/vrml"
  ],
  "x3db": [
    "model/x3d+binary"
  ],
  "x3dbz": [
    "model/x3d+binary"
  ],
  "x3dv": [
    "model/x3d+vrml"
  ],
  "x3dvz": [
    "model/x3d+vrml"
  ],
  "x3d": [
    "model/x3d+xml"
  ],
  "x3dz": [
    "model/x3d+xml"
  ],
  "appcache": [
    "text/cache-manifest"
  ],
  "ics": [
    "text/calendar",
    "text/x-vcalendar",
    "application/ics"
  ],
  "ifb": [
    "text/calendar"
  ],
  "css": [
    "text/css"
  ],
  "csv": [
    "text/csv",
    "text/x-comma-separated-values",
    "text/x-csv"
  ],
  "html": [
    "text/html",
    "application/xhtml+xml"
  ],
  "htm": [
    "text/html",
    "application/xhtml+xml"
  ],
  "js": [
    "text/javascript",
    "application/x-javascript",
    "application/javascript"
  ],
  "mjs": [
    "text/javascript",
    "application/x-javascript",
    "application/javascript"
  ],
  "n3": [
    "text/n3"
  ],
  "txt": [
    "text/plain"
  ],
  "text": [
    "text/plain"
  ],
  "conf": [
    "text/plain"
  ],
  "def": [
    "text/plain"
  ],
  "list": [
    "text/plain"
  ],
  "log": [
    "text/plain",
    "text/x-log"
  ],
  "in": [
    "text/plain"
  ],
  "dsc": [
    "text/prs.lines.tag"
  ],
  "rtx": [
    "text/richtext"
  ],
  "sgml": [
    "text/sgml"
  ],
  "sgm": [
    "text/sgml"
  ],
  "tsv": [
    "text/tab-separated-values"
  ],
  "t": [
    "text/troff",
    "application/x-troff",
    "text/x-troff",
    "application/x-perl",
    "text/x-perl"
  ],
  "tr": [
    "text/troff",
    "application/x-troff",
    "text/x-troff"
  ],
  "roff": [
    "text/troff",
    "application/x-troff",
    "text/x-troff"
  ],
  "man": [
    "text/troff",
    "application/x-troff-man"
  ],
  "me": [
    "text/troff",
    "text/x-troff-me"
  ],
  "ms": [
    "text/troff",
    "text/x-troff-ms"
  ],
  "ttl": [
    "text/turtle"
  ],
  "uri": [
    "text/uri-list"
  ],
  "uris": [
    "text/uri-list"
  ],
  "urls": [
    "text/uri-list"
  ],
  "vcard": [
    "text/vcard",
    "text/directory",
    "text/x-vcard"
  ],
  "curl": [
    "text/vnd.curl"
  ],
  "dcurl": [
    "text/vnd.curl.dcurl"
  ],
  "mcurl": [
    "text/vnd.curl.mcurl"
  ],
  "scurl": [
    "text/vnd.curl.scurl"
  ],
  "fly": [
    "text/vnd.fly"
  ],
  "flx": [
    "text/vnd.fmi.flexstor"
  ],
  "gv": [
    "text/vnd.graphviz"
  ],
  "3dml": [
    "text/vnd.in3d.3dml"
  ],
  "spot": [
    "text/vnd.in3d.spot"
  ],
  "jad": [
    "text/vnd.sun.j2me.app-descriptor"
  ],
  "wml": [
    "text/vnd.wap.wml"
  ],
  "wmls": [
    "text/vnd.wap.wmlscript"
  ],
  "s": [
    "text/x-asm"
  ],
  "asm": [
    "text/x-asm"
  ],
  "c": [
    "text/x-c",
    "text/x-csrc"
  ],
  "cc": [
    "text/x-c",
    "text/x-c++src"
  ],
  "cxx": [
    "text/x-c",
    "text/x-c++src"
  ],
  "cpp": [
    "text/x-c",
    "text/x-c++src"
  ],
  "h": [
    "text/x-c",
    "text/x-chdr"
  ],
  "hh": [
    "text/x-c",
    "text/x-c++hdr"
  ],
  "dic": [
    "text/x-c"
  ],
  "f": [
    "text/x-fortran"
  ],
  "for": [
    "text/x-fortran"
  ],
  "f77": [
    "text/x-fortran"
  ],
  "f90": [
    "text/x-fortran"
  ],
  "java": [
    "text/x-java-source",
    "text/x-java"
  ],
  "nfo": [
    "text/x-nfo"
  ],
  "opml": [
    "text/x-opml",
    "text/x-opml+xml"
  ],
  "p": [
    "text/x-pascal"
  ],
  "pas": [
    "text/x-pascal"
  ],
  "etx": [
    "text/x-setext"
  ],
  "sfv": [
    "text/x-sfv"
  ],
  "uu": [
    "text/x-uuencode"
  ],
  "vcs": [
    "text/x-vcalendar",
    "text/calendar",
    "application/ics"
  ],
  "vcf": [
    "text/x-vcard",
    "text/vcard",
    "text/directory"
  ],
  "3gp": [
    "video/3gpp",
    "video/3gp",
    "audio/3gpp",
    "video/3gpp-encrypted",
    "audio/3gpp-encrypted",
    "audio/x-rn-3gpp-amr",
    "audio/x-rn-3gpp-amr-encrypted",
    "audio/x-rn-3gpp-amr-wb",
    "audio/x-rn-3gpp-amr-wb-encrypted"
  ],
  "3g2": [
    "video/3gpp2",
    "audio/3gpp2"
  ],
  "h261": [
    "video/h261"
  ],
  "h263": [
    "video/h263"
  ],
  "h264": [
    "video/h264"
  ],
  "jpgv": [
    "video/jpeg"
  ],
  "jpm": [
    "video/jpm",
    "image/jpm"
  ],
  "jpgm": [
    "video/jpm",
    "image/jpm"
  ],
  "mj2": [
    "video/mj2"
  ],
  "mjp2": [
    "video/mj2"
  ],
  "mp4": [
    "video/mp4",
    "video/mp4v-es",
    "video/x-m4v"
  ],
  "mp4v": [
    "video/mp4"
  ],
  "mpg4": [
    "video/mp4"
  ],
  "mpeg": [
    "video/mpeg",
    "video/x-mpeg",
    "video/mpeg-system",
    "video/x-mpeg-system",
    "video/x-mpeg2"
  ],
  "mpg": [
    "video/mpeg",
    "video/x-mpeg",
    "video/mpeg-system",
    "video/x-mpeg-system",
    "video/x-mpeg2"
  ],
  "mpe": [
    "video/mpeg",
    "video/x-mpeg",
    "video/mpeg-system",
    "video/x-mpeg-system",
    "video/x-mpeg2"
  ],
  "m1v": [
    "video/mpeg"
  ],
  "m2v": [
    "video/mpeg"
  ],
  "ogv": [
    "video/ogg",
    "video/x-ogg"
  ],
  "qt": [
    "video/quicktime"
  ],
  "mov": [
    "video/quicktime"
  ],
  "uvh": [
    "video/vnd.dece.hd"
  ],
  "uvvh": [
    "video/vnd.dece.hd"
  ],
  "uvm": [
    "video/vnd.dece.mobile"
  ],
  "uvvm": [
    "video/vnd.dece.mobile"
  ],
  "uvp": [
    "video/vnd.dece.pd"
  ],
  "uvvp": [
    "video/vnd.dece.pd"
  ],
  "uvs": [
    "video/vnd.dece.sd"
  ],
  "uvvs": [
    "video/vnd.dece.sd"
  ],
  "uvv": [
    "video/vnd.dece.video"
  ],
  "uvvv": [
    "video/vnd.dece.video"
  ],
  "dvb": [
    "video/vnd.dvb.file"
  ],
  "fvt": [
    "video/vnd.fvt"
  ],
  "mxu": [
    "video/vnd.mpegurl",
    "video/x-mpegurl"
  ],
  "m4u": [
    "video/vnd.mpegurl",
    "video/x-mpegurl"
  ],
  "pyv": [
    "video/vnd.ms-playready.media.pyv"
  ],
  "uvu": [
    "video/vnd.uvvu.mp4"
  ],
  "uvvu": [
    "video/vnd.uvvu.mp4"
  ],
  "viv": [
    "video/vnd.vivo",
    "video/vivo"
  ],
  "webm": [
    "video/webm"
  ],
  "f4v": [
    "video/x-f4v",
    "video/mp4",
    "video/mp4v-es",
    "video/x-m4v"
  ],
  "fli": [
    "video/x-fli",
    "video/x-flic",
    "video/fli"
  ],
  "flv": [
    "video/x-flv",
    "application/x-flash-video",
    "flv-application/octet-stream",
    "video/flv"
  ],
  "m4v": [
    "video/x-m4v",
    "video/mp4",
    "video/mp4v-es"
  ],
  "mkv": [
    "video/x-matroska"
  ],
  "mk3d": [
    "video/x-matroska",
    "video/x-matroska-3d"
  ],
  "mks": [
    "video/x-matroska"
  ],
  "mng": [
    "video/x-mng"
  ],
  "asf": [
    "video/x-ms-asf",
    "application/vnd.ms-asf",
    "video/x-ms-wm",
    "video/x-ms-asf-plugin"
  ],
  "asx": [
    "video/x-ms-asf",
    "audio/x-ms-asx",
    "video/x-ms-wvx",
    "video/x-ms-wax",
    "video/x-ms-wmx",
    "application/x-ms-asx"
  ],
  "vob": [
    "video/x-ms-vob",
    "video/mpeg",
    "video/x-mpeg",
    "video/mpeg-system",
    "video/x-mpeg-system",
    "video/x-mpeg2"
  ],
  "wm": [
    "video/x-ms-wm"
  ],
  "wmv": [
    "video/x-ms-wmv"
  ],
  "wmx": [
    "video/x-ms-wmx",
    "audio/x-ms-asx",
    "video/x-ms-wvx",
    "video/x-ms-wax",
    "application/x-ms-asx"
  ],
  "wvx": [
    "video/x-ms-wvx",
    "audio/x-ms-asx",
    "video/x-ms-wax",
    "video/x-ms-wmx",
    "application/x-ms-asx"
  ],
  "avi": [
    "video/x-msvideo",
    "video/vnd.avi",
    "video/x-avi",
    "video/avi",
    "video/divx",
    "video/msvideo",
    "video/vnd.divx"
  ],
  "movie": [
    "video/x-sgi-movie"
  ],
  "smv": [
    "video/x-smv"
  ],
  "a26": [
    "application/x-atari-2600-rom"
  ],
  "a78": [
    "application/x-atari-7800-rom"
  ],
  "lnx": [
    "application/x-atari-lynx-rom"
  ],
  "azw3": [
    "application/vnd.amazon.mobi8-ebook",
    "application/x-mobi8-ebook"
  ],
  "kfx": [
    "application/vnd.amazon.mobi8-ebook",
    "application/x-mobi8-ebook"
  ],
  "mml": [
    "application/mathml+xml",
    "text/mathml"
  ],
  "wkdownload": [
    "application/x-partial-download"
  ],
  "crdownload": [
    "application/x-partial-download"
  ],
  "part": [
    "application/x-partial-download"
  ],
  "wwf": [
    "application/x-wwf",
    "application/wwf"
  ],
  "themepack": [
    "application/x-windows-themepack"
  ],
  "amz": [
    "audio/x-amzxml"
  ],
  "gsm": [
    "audio/x-gsm"
  ],
  "pla": [
    "audio/x-iriver-pla"
  ],
  "gpg": [
    "application/pgp-encrypted",
    "application/pgp",
    "application/pgp-signature",
    "application/pgp-keys"
  ],
  "skr": [
    "application/pgp-keys"
  ],
  "pkr": [
    "application/pgp-keys"
  ],
  "key": [
    "application/vnd.apple.keynote",
    "application/x-iwork-keynote-sffkey",
    "application/pgp-keys"
  ],
  "p8e": [
    "application/pkcs8-encrypted"
  ],
  "raml": [
    "application/raml+yaml"
  ],
  "siv": [
    "application/sieve"
  ],
  "sieve": [
    "application/sieve"
  ],
  "sml": [
    "application/smil+xml",
    "application/smil"
  ],
  "kino": [
    "application/smil+xml",
    "application/smil"
  ],
  "sqlite2": [
    "application/x-sqlite2"
  ],
  "sqlite3": [
    "application/vnd.sqlite3",
    "application/x-sqlite3"
  ],
  "ged": [
    "text/vnd.familysearch.gedcom",
    "application/x-gedcom",
    "text/gedcom"
  ],
  "gedcom": [
    "text/vnd.familysearch.gedcom",
    "application/x-gedcom",
    "text/gedcom"
  ],
  "fxm": [
    "video/x-javafx"
  ],
  "sgf": [
    "application/x-go-sgf"
  ],
  "tres": [
    "application/x-godot-resource"
  ],
  "scn": [
    "application/x-godot-scene"
  ],
  "tscn": [
    "application/x-godot-scene"
  ],
  "escn": [
    "application/x-godot-scene"
  ],
  "gdshader": [
    "application/x-godot-shader"
  ],
  "gd": [
    "application/x-gdscript"
  ],
  "xliff": [
    "application/xliff+xml",
    "application/x-xliff"
  ],
  "toml": [
    "application/toml"
  ],
  "yaml": [
    "application/yaml",
    "application/x-yaml",
    "text/yaml",
    "text/x-yaml"
  ],
  "yml": [
    "application/yaml",
    "application/x-yaml",
    "text/yaml",
    "text/x-yaml"
  ],
  "cdr": [
    "application/vnd.corel-draw",
    "application/cdr",
    "application/coreldraw",
    "application/x-cdr",
    "application/x-coreldraw",
    "image/cdr",
    "image/x-cdr",
    "zz-application/zz-winassoc-cdr"
  ],
  "wk1": [
    "application/vnd.lotus-1-2-3",
    "application/x-lotus123",
    "application/x-123",
    "application/lotus123",
    "application/wk1",
    "zz-application/zz-winassoc-123"
  ],
  "wk3": [
    "application/vnd.lotus-1-2-3",
    "application/x-lotus123",
    "application/x-123",
    "application/lotus123",
    "application/wk1",
    "zz-application/zz-winassoc-123"
  ],
  "wk4": [
    "application/vnd.lotus-1-2-3",
    "application/x-lotus123",
    "application/x-123",
    "application/lotus123",
    "application/wk1",
    "zz-application/zz-winassoc-123"
  ],
  "lmdb": [
    "application/x-lmdb"
  ],
  "xll": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "xld": [
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "zz-application/zz-winassoc-xls"
  ],
  "ppz": [
    "application/vnd.ms-powerpoint",
    "application/powerpoint",
    "application/mspowerpoint",
    "application/x-mspowerpoint"
  ],
  "vsdx": [
    "application/vnd.ms-visio.drawing.main+xml"
  ],
  "vstx": [
    "application/vnd.ms-visio.template.main+xml"
  ],
  "vssx": [
    "application/vnd.ms-visio.stencil.main+xml"
  ],
  "vsdm": [
    "application/vnd.ms-visio.drawing.macroEnabled.main+xml"
  ],
  "vstm": [
    "application/vnd.ms-visio.template.macroEnabled.main+xml"
  ],
  "vssm": [
    "application/vnd.ms-visio.stencil.macroEnabled.main+xml"
  ],
  "xlr": [
    "application/vnd.ms-works"
  ],
  "gnd": [
    "application/gnunet-directory"
  ],
  "tnef": [
    "application/vnd.ms-tnef",
    "application/ms-tnef"
  ],
  "tnf": [
    "application/vnd.ms-tnef",
    "application/ms-tnef"
  ],
  "sds": [
    "application/vnd.stardivision.chart"
  ],
  "smd": [
    "application/vnd.stardivision.mail",
    "application/x-genesis-rom"
  ],
  "fodt": [
    "application/vnd.oasis.opendocument.text-flat-xml"
  ],
  "fodg": [
    "application/vnd.oasis.opendocument.graphics-flat-xml"
  ],
  "fodp": [
    "application/vnd.oasis.opendocument.presentation-flat-xml"
  ],
  "fods": [
    "application/vnd.oasis.opendocument.spreadsheet-flat-xml"
  ],
  "wp": [
    "application/vnd.wordperfect",
    "application/x-wordperfect",
    "application/wordperfect"
  ],
  "wp4": [
    "application/vnd.wordperfect",
    "application/x-wordperfect",
    "application/wordperfect"
  ],
  "wp5": [
    "application/vnd.wordperfect",
    "application/x-wordperfect",
    "application/wordperfect"
  ],
  "wp6": [
    "application/vnd.wordperfect",
    "application/x-wordperfect",
    "application/wordperfect"
  ],
  "wpp": [
    "application/vnd.wordperfect",
    "application/x-wordperfect",
    "application/wordperfect"
  ],
  "yt": [
    "video/vnd.youtube.yt",
    "application/vnd.youtube.yt"
  ],
  "por": [
    "application/x-spss-por"
  ],
  "sav": [
    "application/x-spss-sav",
    "application/x-spss-savefile"
  ],
  "zsav": [
    "application/x-spss-sav",
    "application/x-spss-savefile"
  ],
  "xbel": [
    "application/x-xbel"
  ],
  "7z.001": [
    "application/x-7z-compressed"
  ],
  "abw.CRASHED": [
    "application/x-abiword"
  ],
  "abw.gz": [
    "application/x-abiword"
  ],
  "zabw": [
    "application/x-abiword"
  ],
  "cue": [
    "application/x-cue"
  ],
  "sam": [
    "application/x-amipro"
  ],
  "pdc": [
    "application/x-aportisdoc"
  ],
  "as": [
    "application/x-applix-spreadsheet"
  ],
  "a": [
    "application/x-archive"
  ],
  "ar": [
    "application/x-archive"
  ],
  "arj": [
    "application/x-arj"
  ],
  "asar": [
    "application/x-asar"
  ],
  "asp": [
    "application/x-asp"
  ],
  "awk": [
    "application/x-awk"
  ],
  "blend": [
    "application/x-blender"
  ],
  "BLEND": [
    "application/x-blender"
  ],
  "blender": [
    "application/x-blender"
  ],
  "dvi.bz2": [
    "application/x-bzdvi"
  ],
  "tar.bz": [
    "application/x-bzip-compressed-tar"
  ],
  "tbz": [
    "application/x-bzip-compressed-tar"
  ],
  "tar.bz2": [
    "application/x-bzip2-compressed-tar"
  ],
  "tbz2": [
    "application/x-bzip2-compressed-tar"
  ],
  "tb2": [
    "application/x-bzip2-compressed-tar"
  ],
  "bz3": [
    "application/x-bzip3"
  ],
  "tar.bz3": [
    "application/x-bzip3-compressed-tar"
  ],
  "tbz3": [
    "application/x-bzip3-compressed-tar"
  ],
  "pdf.bz2": [
    "application/x-bzpdf"
  ],
  "ps.bz2": [
    "application/x-bzpostscript"
  ],
  "lrz": [
    "application/x-lrzip"
  ],
  "tar.lrz": [
    "application/x-lrzip-compressed-tar"
  ],
  "tlrz": [
    "application/x-lrzip-compressed-tar"
  ],
  "raw-disk-image": [
    "application/vnd.efi.img",
    "application/x-raw-disk-image"
  ],
  "img": [
    "application/vnd.efi.img",
    "application/x-raw-disk-image"
  ],
  "fd": [
    "application/x-raw-floppy-disk-image",
    "application/x-fd-file"
  ],
  "qd": [
    "application/x-raw-floppy-disk-image",
    "application/x-fd-file"
  ],
  "raw-disk-image.xz": [
    "application/x-raw-disk-image-xz-compressed"
  ],
  "img.xz": [
    "application/x-raw-disk-image-xz-compressed"
  ],
  "iso9660": [
    "application/vnd.efi.iso",
    "application/x-cd-image",
    "application/x-iso9660-image"
  ],
  "cso": [
    "application/x-compressed-iso"
  ],
  "appimage": [
    "application/x-iso9660-appimage",
    "application/vnd.appimage"
  ],
  "toc": [
    "application/x-cdrdao-toc"
  ],
  "gdi": [
    "application/x-gd-rom-cue"
  ],
  "cdi": [
    "application/x-discjuggler-cd-image"
  ],
  "Z": [
    "application/x-compress"
  ],
  "tar.gz": [
    "application/x-compressed-tar"
  ],
  "tgz": [
    "application/x-compressed-tar"
  ],
  "cpio.gz": [
    "application/x-cpio-compressed"
  ],
  "dbf": [
    "application/vnd.dbf",
    "application/dbase",
    "application/dbf",
    "application/x-dbase",
    "application/x-dbf"
  ],
  "es": [
    "application/ecmascript",
    "text/ecmascript"
  ],
  "chd": [
    "application/x-mame-chd"
  ],
  "nds": [
    "application/x-nintendo-ds-rom"
  ],
  "cci": [
    "application/x-nintendo-3ds-rom"
  ],
  "3dsx": [
    "application/x-nintendo-3ds-executable"
  ],
  "pce": [
    "application/x-pc-engine-rom"
  ],
  "m7": [
    "application/x-thomson-cartridge-memo7"
  ],
  "k7": [
    "application/x-thomson-cassette"
  ],
  "hfe": [
    "application/x-hfe-floppy-image",
    "application/x-hfe-file"
  ],
  "sap": [
    "application/x-thomson-sap-image",
    "application/x-sap-file"
  ],
  "ui": [
    "application/x-designer",
    "application/x-gtk-builder"
  ],
  "ksy": [
    "text/x-kaitai-struct"
  ],
  "qml": [
    "text/x-qml"
  ],
  "qmltypes": [
    "text/x-qml"
  ],
  "qmlproject": [
    "text/x-qml"
  ],
  "desktop": [
    "application/x-desktop",
    "application/x-gnome-app-info"
  ],
  "kdelnk": [
    "application/x-desktop",
    "application/x-gnome-app-info"
  ],
  "fb2": [
    "application/x-fictionbook+xml",
    "application/x-fictionbook"
  ],
  "fb2.zip": [
    "application/x-zip-compressed-fb2"
  ],
  "dia": [
    "application/x-dia-diagram"
  ],
  "shape": [
    "application/x-dia-shape"
  ],
  "etheme": [
    "application/x-e-theme"
  ],
  "egon": [
    "application/x-egon"
  ],
  "fl": [
    "application/x-fluid"
  ],
  "psf.gz": [
    "application/x-gz-font-linux-psf"
  ],
  "pcf.Z": [
    "application/x-font-pcf"
  ],
  "pcf.gz": [
    "application/x-font-pcf"
  ],
  "spd": [
    "application/x-font-speedo"
  ],
  "ttx": [
    "application/x-font-ttx"
  ],
  "gb": [
    "application/x-gameboy-rom"
  ],
  "sgb": [
    "application/x-gameboy-rom"
  ],
  "gbc": [
    "application/x-gameboy-color-rom"
  ],
  "cgb": [
    "application/x-gameboy-color-rom"
  ],
  "gba": [
    "application/x-gba-rom"
  ],
  "agb": [
    "application/x-gba-rom"
  ],
  "vb": [
    "application/x-virtual-boy-rom"
  ],
  "gen": [
    "application/x-genesis-rom"
  ],
  "sgd": [
    "application/x-genesis-rom"
  ],
  "32x": [
    "application/x-genesis-32x-rom"
  ],
  "mdx": [
    "application/x-genesis-32x-rom"
  ],
  "gmo": [
    "application/x-gettext-translation"
  ],
  "mo": [
    "text/x-modelica",
    "application/x-gettext-translation"
  ],
  "glade": [
    "application/x-glade"
  ],
  "gnucash": [
    "application/x-gnucash"
  ],
  "gnc": [
    "application/x-gnucash"
  ],
  "xac": [
    "application/x-gnucash"
  ],
  "gp": [
    "application/x-gnuplot"
  ],
  "gplt": [
    "application/x-gnuplot"
  ],
  "gnuplot": [
    "application/x-gnuplot"
  ],
  "gra": [
    "application/x-graphite"
  ],
  "dvi.gz": [
    "application/x-gzdvi"
  ],
  "gz": [
    "application/gzip",
    "application/x-gzip"
  ],
  "pdf.gz": [
    "application/x-gzpdf"
  ],
  "ps.gz": [
    "application/x-gzpostscript"
  ],
  "hdf4": [
    "application/x-hdf"
  ],
  "h4": [
    "application/x-hdf"
  ],
  "hdf5": [
    "application/x-hdf"
  ],
  "h5": [
    "application/x-hdf"
  ],
  "groovy": [
    "text/x-groovy"
  ],
  "gvy": [
    "text/x-groovy"
  ],
  "gy": [
    "text/x-groovy"
  ],
  "gsh": [
    "text/x-groovy"
  ],
  "gradle": [
    "text/x-gradle"
  ],
  "jks": [
    "application/x-java-keystore"
  ],
  "ks": [
    "application/x-java-keystore"
  ],
  "jceks": [
    "application/x-java-jce-keystore"
  ],
  "pack": [
    "application/x-java-pack200"
  ],
  "jsm": [
    "text/javascript",
    "application/x-javascript",
    "application/javascript"
  ],
  "jrd": [
    "application/jrd+json"
  ],
  "json-patch": [
    "application/json-patch+json"
  ],
  "jsonld": [
    "application/ld+json"
  ],
  "ipynb": [
    "application/x-ipynb+json"
  ],
  "coffee": [
    "application/vnd.coffeescript"
  ],
  "jpr": [
    "application/x-jbuilder-project"
  ],
  "jpx": [
    "application/x-jbuilder-project",
    "image/jpx"
  ],
  "kexic": [
    "application/x-kexi-connectiondata"
  ],
  "kexis": [
    "application/x-kexiproject-shortcut"
  ],
  "kexi": [
    "application/x-kexiproject-sqlite2",
    "application/x-kexiproject-sqlite3",
    "application/x-vnd.kde.kexi",
    "application/x-kexiproject-sqlite"
  ],
  "kil": [
    "application/x-killustrator"
  ],
  "kpm": [
    "application/x-kpovmodeler"
  ],
  "kra": [
    "application/x-krita"
  ],
  "krz": [
    "application/x-krita"
  ],
  "kud": [
    "application/x-kugar"
  ],
  "lhz": [
    "application/x-lhz"
  ],
  "ts": [
    "text/vnd.trolltech.linguist",
    "application/x-linguist",
    "text/vnd.qt.linguist",
    "video/mp2t"
  ],
  "lyx": [
    "application/x-lyx",
    "text/x-lyx"
  ],
  "lz4": [
    "application/x-lz4"
  ],
  "tar.lz4": [
    "application/x-lz4-compressed-tar"
  ],
  "lz": [
    "application/x-lzip"
  ],
  "tar.lz": [
    "application/x-lzip-compressed-tar"
  ],
  "pdf.lz": [
    "application/x-lzpdf"
  ],
  "lzma": [
    "application/x-lzma"
  ],
  "tar.lzma": [
    "application/x-lzma-compressed-tar"
  ],
  "tlz": [
    "application/x-lzma-compressed-tar"
  ],
  "lzo": [
    "application/x-lzop"
  ],
  "qp": [
    "application/x-qpress"
  ],
  "zz": [
    "application/zlib"
  ],
  "mhtml": [
    "application/x-mimearchive"
  ],
  "mht": [
    "application/x-mimearchive"
  ],
  "ocl": [
    "text/x-ocl"
  ],
  "cbl": [
    "text/x-cobol"
  ],
  "cob": [
    "text/x-cobol"
  ],
  "url": [
    "application/x-mswinurl"
  ],
  "msx": [
    "application/x-msx-rom"
  ],
  "m4": [
    "application/x-m4"
  ],
  "n64": [
    "application/x-n64-rom"
  ],
  "z64": [
    "application/x-n64-rom"
  ],
  "v64": [
    "application/x-n64-rom"
  ],
  "ngp": [
    "application/x-neo-geo-pocket-rom"
  ],
  "ngc": [
    "application/x-neo-geo-pocket-color-rom"
  ],
  "nes": [
    "application/x-nes-rom"
  ],
  "nez": [
    "application/x-nes-rom"
  ],
  "unf": [
    "application/x-nes-rom"
  ],
  "unif": [
    "application/x-nes-rom"
  ],
  "o": [
    "application/x-object"
  ],
  "mod": [
    "application/x-object",
    "audio/x-mod"
  ],
  "anx": [
    "application/annodex",
    "application/x-annodex"
  ],
  "axv": [
    "video/annodex",
    "video/x-annodex"
  ],
  "axa": [
    "audio/annodex",
    "audio/x-annodex"
  ],
  "ogm": [
    "video/x-ogm+ogg",
    "video/x-ogm"
  ],
  "oleo": [
    "application/x-oleo"
  ],
  "pak": [
    "application/x-pak"
  ],
  "PAR2": [
    "application/x-par2"
  ],
  "par2": [
    "application/x-par2"
  ],
  "pl": [
    "application/x-perl",
    "text/x-perl"
  ],
  "PL": [
    "application/x-perl",
    "text/x-perl"
  ],
  "pm": [
    "application/x-pagemaker",
    "application/x-perl",
    "text/x-perl"
  ],
  "al": [
    "application/x-perl",
    "text/x-perl"
  ],
  "perl": [
    "application/x-perl",
    "text/x-perl"
  ],
  "pod": [
    "application/x-perl",
    "text/x-perl"
  ],
  "php": [
    "application/x-php"
  ],
  "php3": [
    "application/x-php"
  ],
  "php4": [
    "application/x-php"
  ],
  "php5": [
    "application/x-php"
  ],
  "phps": [
    "application/x-php"
  ],
  "pln": [
    "application/x-planperfect"
  ],
  "psw": [
    "application/x-pocket-word"
  ],
  "pw": [
    "application/x-pw"
  ],
  "pyc": [
    "application/x-python-bytecode"
  ],
  "pyo": [
    "application/x-python-bytecode"
  ],
  "qti": [
    "application/x-qtiplot"
  ],
  "qti.gz": [
    "application/x-qtiplot"
  ],
  "wb1": [
    "application/x-quattropro"
  ],
  "wb2": [
    "application/x-quattropro"
  ],
  "wb3": [
    "application/x-quattropro"
  ],
  "qtl": [
    "application/x-quicktime-media-link",
    "application/x-quicktimeplayer"
  ],
  "qif": [
    "application/x-qw",
    "image/x-quicktime"
  ],
  "dar": [
    "application/x-dar"
  ],
  "alz": [
    "application/x-alz"
  ],
  "rej": [
    "text/x-reject",
    "application/x-reject"
  ],
  "rpm": [
    "application/x-rpm",
    "application/x-redhat-package-manager"
  ],
  "src.rpm": [
    "application/x-source-rpm"
  ],
  "spm": [
    "application/x-source-rpm"
  ],
  "rb": [
    "application/x-ruby"
  ],
  "mab": [
    "application/x-markaby"
  ],
  "cr": [
    "text/x-crystal",
    "text/crystal"
  ],
  "jl": [
    "text/julia"
  ],
  "la": [
    "application/x-shared-library-la"
  ],
  "fish": [
    "application/x-fishscript",
    "text/x-fish"
  ],
  "nu": [
    "application/x-nuscript",
    "text/x-nu"
  ],
  "shn": [
    "application/x-shorten",
    "audio/x-shorten"
  ],
  "siag": [
    "application/x-siag"
  ],
  "sk": [
    "image/x-skencil"
  ],
  "sk1": [
    "image/x-skencil"
  ],
  "sg": [
    "application/x-sg1000-rom"
  ],
  "sms": [
    "application/x-sms-rom"
  ],
  "gg": [
    "application/x-gamegear-rom"
  ],
  "sfc": [
    "application/vnd.nintendo.snes.rom",
    "application/x-snes-rom"
  ],
  "smc": [
    "application/vnd.nintendo.snes.rom",
    "application/x-snes-rom"
  ],
  "vtt": [
    "text/vtt"
  ],
  "sami": [
    "application/x-sami"
  ],
  "mpl": [
    "text/x-mpl2",
    "video/mp2t"
  ],
  "ssa": [
    "text/x-ssa"
  ],
  "ass": [
    "text/x-ssa",
    "audio/aac",
    "audio/x-aac"
  ],
  "imy": [
    "text/x-iMelody",
    "audio/x-iMelody",
    "audio/iMelody"
  ],
  "ime": [
    "text/x-iMelody",
    "audio/x-iMelody",
    "audio/iMelody"
  ],
  "smaf": [
    "application/vnd.smaf",
    "application/x-smaf"
  ],
  "mrml": [
    "text/x-mrml"
  ],
  "mrl": [
    "text/x-mrml"
  ],
  "xmf": [
    "audio/x-xmf",
    "audio/xmf"
  ],
  "mxmf": [
    "audio/mobile-xmf",
    "audio/vnd.nokia.mobile-xmf"
  ],
  "gem": [
    "application/x-tar",
    "application/x-gtar"
  ],
  "tar.Z": [
    "application/x-tarz"
  ],
  "taz": [
    "application/x-tarz"
  ],
  "gf": [
    "application/x-tex-gf"
  ],
  "pk": [
    "application/x-tex-pk"
  ],
  "theme": [
    "application/x-theme"
  ],
  "bak": [
    "application/x-trash"
  ],
  "old": [
    "application/x-trash"
  ],
  "sik": [
    "application/x-trash"
  ],
  "tar.lzo": [
    "application/x-tzo"
  ],
  "tzo": [
    "application/x-tzo"
  ],
  "tar.xz": [
    "application/x-xz-compressed-tar"
  ],
  "txz": [
    "application/x-xz-compressed-tar"
  ],
  "zpaq": [
    "application/x-zpaq"
  ],
  "zst": [
    "application/zstd"
  ],
  "tar.zst": [
    "application/x-zstd-compressed-tar"
  ],
  "tzst": [
    "application/x-zstd-compressed-tar"
  ],
  "pdf.xz": [
    "application/x-xzpdf"
  ],
  "wpg": [
    "application/x-wpg"
  ],
  "ws": [
    "application/x-wonderswan-rom"
  ],
  "wsc": [
    "application/x-wonderswan-color-rom"
  ],
  "cert": [
    "application/x-x509-ca-cert"
  ],
  "pem": [
    "application/x-x509-ca-cert"
  ],
  "zoo": [
    "application/x-zoo"
  ],
  "zipx": [
    "application/zip",
    "application/x-zip-compressed",
    "application/x-zip"
  ],
  "wim": [
    "application/x-ms-wim"
  ],
  "swm": [
    "application/x-ms-wim"
  ],
  "ac3": [
    "audio/ac3"
  ],
  "amr": [
    "audio/AMR",
    "audio/amr-encrypted"
  ],
  "awb": [
    "audio/AMR-WB",
    "audio/amr-wb-encrypted"
  ],
  "psid": [
    "audio/prs.sid"
  ],
  "aiffc": [
    "audio/x-aifc",
    "audio/x-aiffc"
  ],
  "ape": [
    "audio/x-ape"
  ],
  "aa": [
    "audio/x-pn-audibleaudio",
    "audio/vnd.audible"
  ],
  "aax": [
    "audio/vnd.audible.aax"
  ],
  "aaxc": [
    "audio/vnd.audible.aaxc"
  ],
  "dff": [
    "audio/x-dff",
    "audio/dff"
  ],
  "dsf": [
    "audio/x-dsf",
    "audio/dsf",
    "audio/x-dsd",
    "audio/dsd"
  ],
  "it": [
    "audio/x-it"
  ],
  "tak": [
    "audio/x-tak"
  ],
  "wv": [
    "audio/x-wavpack"
  ],
  "wvp": [
    "audio/x-wavpack"
  ],
  "wvc": [
    "audio/x-wavpack-correction"
  ],
  "mo3": [
    "audio/x-mo3"
  ],
  "adts": [
    "audio/aac",
    "audio/x-aac"
  ],
  "loas": [
    "audio/usac"
  ],
  "xhe": [
    "audio/usac"
  ],
  "f4a": [
    "audio/mp4",
    "audio/x-m4a",
    "audio/m4a"
  ],
  "m4r": [
    "audio/x-m4r"
  ],
  "lrv": [
    "video/mp4",
    "video/mp4v-es",
    "video/x-m4v"
  ],
  "m4b": [
    "audio/x-m4b"
  ],
  "f4b": [
    "audio/x-m4b"
  ],
  "3gpp": [
    "video/3gpp",
    "video/3gp",
    "audio/3gpp",
    "video/3gpp-encrypted",
    "audio/3gpp-encrypted",
    "audio/x-rn-3gpp-amr",
    "audio/x-rn-3gpp-amr-encrypted",
    "audio/x-rn-3gpp-amr-wb",
    "audio/x-rn-3gpp-amr-wb-encrypted"
  ],
  "3ga": [
    "video/3gpp",
    "video/3gp",
    "audio/3gpp",
    "video/3gpp-encrypted",
    "audio/3gpp-encrypted",
    "audio/x-rn-3gpp-amr",
    "audio/x-rn-3gpp-amr-encrypted",
    "audio/x-rn-3gpp-amr-wb",
    "audio/x-rn-3gpp-amr-wb-encrypted"
  ],
  "3gp2": [
    "video/3gpp2",
    "audio/3gpp2"
  ],
  "3gpp2": [
    "video/3gpp2",
    "audio/3gpp2"
  ],
  "ult": [
    "audio/x-mod"
  ],
  "uni": [
    "audio/x-mod"
  ],
  "m15": [
    "audio/x-mod"
  ],
  "mtm": [
    "audio/x-mod"
  ],
  "med": [
    "audio/x-mod"
  ],
  "vlc": [
    "audio/x-mpegurl",
    "audio/mpegurl",
    "application/m3u",
    "audio/x-mp3-playlist",
    "audio/m3u",
    "audio/x-m3u"
  ],
  "minipsf": [
    "audio/x-minipsf"
  ],
  "psflib": [
    "audio/x-psflib"
  ],
  "mp+": [
    "audio/x-musepack"
  ],
  "rax": [
    "audio/vnd.rn-realaudio",
    "audio/x-pn-realaudio",
    "audio/vnd.m-realaudio"
  ],
  "rv": [
    "video/vnd.rn-realvideo",
    "video/x-real-video"
  ],
  "rvx": [
    "video/vnd.rn-realvideo",
    "video/x-real-video"
  ],
  "rmj": [
    "application/vnd.rn-realmedia",
    "application/vnd.rn-realmedia-vbr"
  ],
  "rmm": [
    "application/vnd.rn-realmedia",
    "application/vnd.rn-realmedia-vbr"
  ],
  "rmx": [
    "application/vnd.rn-realmedia",
    "application/vnd.rn-realmedia-vbr"
  ],
  "rp": [
    "image/vnd.rn-realpix"
  ],
  "rt": [
    "text/vnd.rn-realtext"
  ],
  "stm": [
    "audio/x-stm"
  ],
  "voc": [
    "audio/x-voc"
  ],
  "xi": [
    "audio/x-xi"
  ],
  "tta": [
    "audio/x-tta",
    "audio/tta"
  ],
  "dib": [
    "image/bmp",
    "image/x-bmp",
    "image/x-MS-bmp"
  ],
  "heic": [
    "image/heif",
    "image/heic",
    "image/heic-sequence",
    "image/heif-sequence"
  ],
  "heif": [
    "image/heif",
    "image/heic",
    "image/heic-sequence",
    "image/heif-sequence"
  ],
  "hif": [
    "image/heif",
    "image/heic",
    "image/heic-sequence",
    "image/heif-sequence"
  ],
  "mjpeg": [
    "video/x-mjpeg"
  ],
  "mjpg": [
    "video/x-mjpeg"
  ],
  "j2c": [
    "image/x-jp2-codestream"
  ],
  "j2k": [
    "image/x-jp2-codestream"
  ],
  "jpc": [
    "image/x-jp2-codestream"
  ],
  "jp2": [
    "image/jp2",
    "image/jpeg2000",
    "image/jpeg2000-image",
    "image/x-jpeg2000-image"
  ],
  "jpg2": [
    "image/jp2",
    "image/jpeg2000",
    "image/jpeg2000-image",
    "image/x-jpeg2000-image"
  ],
  "jpf": [
    "image/jpx"
  ],
  "jxl": [
    "image/jxl"
  ],
  "ora": [
    "image/openraster"
  ],
  "dds": [
    "image/x-dds"
  ],
  "exr": [
    "image/x-exr"
  ],
  "pict": [
    "image/x-pict"
  ],
  "pict1": [
    "image/x-pict"
  ],
  "pict2": [
    "image/x-pict"
  ],
  "ufraw": [
    "application/x-ufraw"
  ],
  "dng": [
    "image/x-adobe-dng"
  ],
  "crw": [
    "image/x-canon-crw"
  ],
  "cr2": [
    "image/x-canon-cr2"
  ],
  "cr3": [
    "image/x-canon-cr3"
  ],
  "raf": [
    "image/x-fuji-raf"
  ],
  "k25": [
    "image/x-kodak-k25"
  ],
  "kdc": [
    "image/x-kodak-kdc"
  ],
  "mrw": [
    "image/x-minolta-mrw"
  ],
  "nef": [
    "image/x-nikon-nef"
  ],
  "nrw": [
    "image/x-nikon-nrw"
  ],
  "orf": [
    "image/x-olympus-orf"
  ],
  "raw": [
    "image/x-panasonic-rw",
    "image/x-panasonic-raw"
  ],
  "rw2": [
    "image/x-panasonic-rw2",
    "image/x-panasonic-raw2"
  ],
  "pef": [
    "image/x-pentax-pef"
  ],
  "x3f": [
    "image/x-sigma-x3f"
  ],
  "srf": [
    "image/x-sony-srf"
  ],
  "sr2": [
    "image/x-sony-sr2"
  ],
  "arw": [
    "image/x-sony-arw"
  ],
  "apng": [
    "image/apng",
    "image/vnd.mozilla.apng"
  ],
  "rle": [
    "image/rle"
  ],
  "svg.gz": [
    "image/svg+xml-compressed"
  ],
  "jxr": [
    "image/jxr",
    "image/vnd.ms-photo"
  ],
  "hdp": [
    "image/jxr",
    "image/vnd.ms-photo"
  ],
  "ag": [
    "image/x-applix-graphics"
  ],
  "eps.bz2": [
    "image/x-bzeps"
  ],
  "epsi.bz2": [
    "image/x-bzeps"
  ],
  "epsf.bz2": [
    "image/x-bzeps"
  ],
  "xcf.gz": [
    "image/x-compressed-xcf"
  ],
  "xcf.bz2": [
    "image/x-compressed-xcf"
  ],
  "dcm": [
    "application/dicom"
  ],
  "docbook": [
    "application/x-docbook+xml",
    "application/docbook+xml",
    "application/vnd.oasis.docbook+xml"
  ],
  "epsi": [
    "image/x-eps"
  ],
  "epsf": [
    "image/x-eps"
  ],
  "fits": [
    "application/fits",
    "image/x-fits",
    "image/fits"
  ],
  "fit": [
    "application/fits",
    "image/x-fits",
    "image/fits"
  ],
  "fts": [
    "application/fits",
    "image/x-fits",
    "image/fits"
  ],
  "eps.gz": [
    "image/x-gzeps"
  ],
  "epsi.gz": [
    "image/x-gzeps"
  ],
  "epsf.gz": [
    "image/x-gzeps"
  ],
  "icns": [
    "image/x-icns"
  ],
  "iff": [
    "image/x-ilbm",
    "image/x-iff"
  ],
  "ilbm": [
    "image/x-ilbm",
    "image/x-iff"
  ],
  "lbm": [
    "image/x-ilbm",
    "image/x-iff"
  ],
  "jng": [
    "image/x-jng"
  ],
  "lwo": [
    "image/x-lwo"
  ],
  "lwob": [
    "image/x-lwo"
  ],
  "lws": [
    "image/x-lws"
  ],
  "pntg": [
    "image/x-macpaint"
  ],
  "msod": [
    "image/x-msod"
  ],
  "pcd": [
    "image/x-photo-cd"
  ],
  "sun": [
    "image/x-sun-raster"
  ],
  "icb": [
    "image/x-tga",
    "application/tga",
    "application/x-targa",
    "application/x-tga",
    "image/targa",
    "image/tga",
    "image/x-icb",
    "image/x-targa"
  ],
  "tpic": [
    "image/x-tga",
    "application/tga",
    "application/x-targa",
    "application/x-tga",
    "image/targa",
    "image/tga",
    "image/x-icb",
    "image/x-targa"
  ],
  "vda": [
    "image/x-tga",
    "application/tga",
    "application/x-targa",
    "application/x-tga",
    "image/targa",
    "image/tga",
    "image/x-icb",
    "image/x-targa"
  ],
  "cur": [
    "image/x-win-bitmap"
  ],
  "ani": [
    "application/x-navi-animation"
  ],
  "xcf": [
    "image/x-xcf"
  ],
  "gih": [
    "image/x-gimp-gih"
  ],
  "pat": [
    "image/x-gimp-pat"
  ],
  "glb": [
    "model/gltf-binary"
  ],
  "gltf": [
    "model/gltf+json"
  ],
  "vrm": [
    "model/vrml"
  ],
  "mtl": [
    "model/mtl"
  ],
  "vct": [
    "text/vcard",
    "text/directory",
    "text/x-vcard"
  ],
  "gcrd": [
    "text/vcard",
    "text/directory",
    "text/x-vcard"
  ],
  "t2t": [
    "text/x-txt2tags"
  ],
  "v": [
    "text/x-verilog"
  ],
  "svh": [
    "text/x-svhdr"
  ],
  "sv": [
    "text/x-svsrc"
  ],
  "vhd": [
    "text/x-vhdl",
    "application/x-vhd-disk",
    "application/x-virtualbox-vhd"
  ],
  "vhdl": [
    "text/x-vhdl"
  ],
  "rdfs": [
    "application/rdf+xml",
    "text/rdf"
  ],
  "owl": [
    "application/rdf+xml",
    "text/rdf"
  ],
  "rst": [
    "text/x-rst"
  ],
  "owx": [
    "application/owl+xml"
  ],
  "sylk": [
    "text/spreadsheet"
  ],
  "slk": [
    "text/spreadsheet"
  ],
  "mc2": [
    "text/vnd.senx.warpscript"
  ],
  "adb": [
    "text/x-adasrc"
  ],
  "ads": [
    "text/x-adasrc"
  ],
  "bib": [
    "text/x-bibtex"
  ],
  "blp": [
    "text/x-blueprint"
  ],
  "hp": [
    "text/x-c++hdr"
  ],
  "hpp": [
    "text/x-c++hdr"
  ],
  "h++": [
    "text/x-c++hdr"
  ],
  "hxx": [
    "text/x-c++hdr"
  ],
  "C": [
    "text/x-c++src"
  ],
  "c++": [
    "text/x-c++src"
  ],
  "cmake": [
    "text/x-cmake"
  ],
  "asd": [
    "text/x-common-lisp"
  ],
  "fasl": [
    "text/x-common-lisp"
  ],
  "lisp": [
    "text/x-common-lisp"
  ],
  "ros": [
    "text/x-common-lisp"
  ],
  "csvs": [
    "text/csv-schema"
  ],
  "cs": [
    "text/x-csharp"
  ],
  "vala": [
    "text/x-vala"
  ],
  "vapi": [
    "text/x-vala"
  ],
  "ooc": [
    "text/x-ooc"
  ],
  "dcl": [
    "text/x-dcl"
  ],
  "dsl": [
    "text/x-dsl"
  ],
  "d": [
    "text/x-dsrc"
  ],
  "di": [
    "text/x-dsrc"
  ],
  "e": [
    "text/x-eiffel"
  ],
  "eif": [
    "text/x-eiffel"
  ],
  "el": [
    "text/x-emacs-lisp"
  ],
  "ex": [
    "text/x-elixir"
  ],
  "exs": [
    "text/x-elixir"
  ],
  "erl": [
    "text/x-erlang"
  ],
  "f95": [
    "text/x-fortran"
  ],
  "gs": [
    "text/x-genie"
  ],
  "po": [
    "text/x-gettext-translation",
    "text/x-po",
    "application/x-gettext"
  ],
  "feature": [
    "text/x-gherkin"
  ],
  "manifest": [
    "text/cache-manifest"
  ],
  "gvp": [
    "text/x-google-video-pointer",
    "text/google-video-pointer"
  ],
  "hs": [
    "text/x-haskell"
  ],
  "idl": [
    "text/x-idl"
  ],
  "ldif": [
    "text/x-ldif"
  ],
  "ly": [
    "text/x-lilypond"
  ],
  "lhs": [
    "text/x-literate-haskell"
  ],
  "mk": [
    "text/x-makefile"
  ],
  "mak": [
    "text/x-makefile"
  ],
  "md": [
    "text/markdown",
    "text/x-markdown"
  ],
  "mkd": [
    "text/markdown",
    "text/x-markdown"
  ],
  "markdown": [
    "text/markdown",
    "text/x-markdown"
  ],
  "moc": [
    "text/x-moc"
  ],
  "reg": [
    "text/x-ms-regedit"
  ],
  "mof": [
    "text/x-mof"
  ],
  "mup": [
    "text/x-mup"
  ],
  "not": [
    "text/x-mup"
  ],
  "m": [
    "text/x-objcsrc",
    "text/x-matlab",
    "text/x-octave"
  ],
  "mm": [
    "text/x-objc++src",
    "text/x-troff-mm"
  ],
  "ml": [
    "text/x-ocaml"
  ],
  "mli": [
    "text/x-ocaml"
  ],
  "cl": [
    "text/x-opencl-src"
  ],
  "diff": [
    "text/x-patch",
    "text/x-diff"
  ],
  "patch": [
    "text/x-patch",
    "text/x-diff"
  ],
  "nim": [
    "text/x-nim"
  ],
  "nims": [
    "text/x-nimscript"
  ],
  "nimble": [
    "text/x-nimscript"
  ],
  "go": [
    "text/x-go"
  ],
  "py": [
    "text/x-python",
    "text/x-python3"
  ],
  "py3": [
    "text/x-python3"
  ],
  "py3x": [
    "text/x-python3"
  ],
  "pyi": [
    "text/x-python3"
  ],
  "pyx": [
    "text/x-python"
  ],
  "wsgi": [
    "text/x-python"
  ],
  "sage": [
    "text/x-sagemath"
  ],
  "lua": [
    "text/x-lua"
  ],
  "spec": [
    "text/x-rpm-spec"
  ],
  "sass": [
    "text/x-sass"
  ],
  "scala": [
    "text/x-scala"
  ],
  "ss": [
    "text/x-scheme"
  ],
  "scss": [
    "text/x-scss"
  ],
  "tk": [
    "text/tcl",
    "text/x-tcl"
  ],
  "ltx": [
    "text/x-tex",
    "application/x-tex"
  ],
  "sty": [
    "text/x-tex",
    "application/x-tex"
  ],
  "cls": [
    "text/x-tex",
    "application/x-tex"
  ],
  "dtx": [
    "text/x-tex",
    "application/x-tex"
  ],
  "ins": [
    "text/x-tex",
    "application/x-tex"
  ],
  "typ": [
    "text/x-typst"
  ],
  "twig": [
    "text/x-twig"
  ],
  "uil": [
    "text/x-uil"
  ],
  "uue": [
    "text/x-uuencode",
    "zz-application/zz-winassoc-uu"
  ],
  "vbs": [
    "text/vbscript",
    "text/vbs"
  ],
  "xmi": [
    "text/x-xmi"
  ],
  "fo": [
    "text/x-xslfo"
  ],
  "xslfo": [
    "text/x-xslfo"
  ],
  "iptables": [
    "text/x-iptables"
  ],
  "service": [
    "text/x-dbus-service",
    "text/x-systemd-unit"
  ],
  "automount": [
    "text/x-systemd-unit"
  ],
  "device": [
    "text/x-systemd-unit"
  ],
  "mount": [
    "text/x-systemd-unit"
  ],
  "path": [
    "text/x-systemd-unit"
  ],
  "scope": [
    "text/x-systemd-unit"
  ],
  "slice": [
    "text/x-systemd-unit"
  ],
  "socket": [
    "text/x-systemd-unit"
  ],
  "swap": [
    "text/x-systemd-unit"
  ],
  "target": [
    "text/x-systemd-unit"
  ],
  "timer": [
    "text/x-systemd-unit"
  ],
  "xbl": [
    "application/xml",
    "text/xml"
  ],
  "xsd": [
    "application/xml",
    "text/xml"
  ],
  "rng": [
    "application/xml",
    "text/xml"
  ],
  "ent": [
    "application/xml-external-parsed-entity",
    "text/xml-external-parsed-entity"
  ],
  "dv": [
    "video/dv"
  ],
  "m2t": [
    "video/mp2t"
  ],
  "m2ts": [
    "video/mp2t"
  ],
  "cpi": [
    "video/mp2t"
  ],
  "clpi": [
    "video/mp2t"
  ],
  "mpls": [
    "video/mp2t"
  ],
  "bdmv": [
    "video/mp2t"
  ],
  "m1u": [
    "video/vnd.mpegurl",
    "video/x-mpegurl"
  ],
  "moov": [
    "video/quicktime"
  ],
  "qtvr": [
    "video/quicktime"
  ],
  "qtif": [
    "image/x-quicktime"
  ],
  "ktx2": [
    "image/ktx2"
  ],
  "astc": [
    "image/astc"
  ],
  "vivo": [
    "video/vnd.vivo",
    "video/vivo"
  ],
  "flc": [
    "video/x-flic",
    "video/fli",
    "video/x-fli"
  ],
  "hwp": [
    "application/x-hwp",
    "application/vnd.haansoft-hwp"
  ],
  "hwt": [
    "application/x-hwt",
    "application/vnd.haansoft-hwt"
  ],
  "avf": [
    "video/vnd.avi",
    "video/x-avi",
    "video/avi",
    "video/divx",
    "video/msvideo",
    "video/vnd.divx",
    "video/x-msvideo"
  ],
  "divx": [
    "video/vnd.avi",
    "video/x-avi",
    "video/avi",
    "video/divx",
    "video/msvideo",
    "video/vnd.divx",
    "video/x-msvideo"
  ],
  "nsv": [
    "video/x-nsv"
  ],
  "emp": [
    "application/vnd.emusic-emusic_package"
  ],
  "geojson": [
    "application/geo+json",
    "application/vnd.geo+json"
  ],
  "geo.json": [
    "application/geo+json",
    "application/vnd.geo+json"
  ],
  "ica": [
    "application/x-ica"
  ],
  "it87": [
    "application/x-it87"
  ],
  "ccmx": [
    "application/x-ccmx"
  ],
  "bsdiff": [
    "application/x-bsdiff"
  ],
  "trig": [
    "application/trig",
    "application/x-trig"
  ],
  "numbers": [
    "application/vnd.apple.numbers",
    "application/x-iwork-numbers-sffnumbers"
  ],
  "pages": [
    "application/vnd.apple.pages",
    "application/x-iwork-pages-sffpages"
  ],
  "pkpass": [
    "application/vnd.apple.pkpass"
  ],
  "p65": [
    "application/x-pagemaker"
  ],
  "pm6": [
    "application/x-pagemaker"
  ],
  "pmd": [
    "application/x-pagemaker"
  ],
  "adf": [
    "application/x-amiga-disk-format"
  ],
  "flatpak": [
    "application/vnd.flatpak",
    "application/vnd.xdgapp"
  ],
  "xdgapp": [
    "application/vnd.flatpak",
    "application/vnd.xdgapp"
  ],
  "flatpakrepo": [
    "application/vnd.flatpak.repo"
  ],
  "flatpakref": [
    "application/vnd.flatpak.ref"
  ],
  "sqsh": [
    "application/vnd.squashfs"
  ],
  "snap": [
    "application/vnd.snap"
  ],
  "3mf": [
    "model/3mf",
    "application/vnd.ms-3mfdocument"
  ],
  "gcode": [
    "text/x.gcode"
  ],
  "gx": [
    "text/x-gcode-gx"
  ],
  "fds": [
    "application/x-fds-disk"
  ],
  "ova": [
    "application/ovf",
    "application/x-virtualbox-ova"
  ],
  "qed": [
    "application/x-qed-disk"
  ],
  "qcow2": [
    "application/x-qemu-disk"
  ],
  "qcow": [
    "application/x-qemu-disk"
  ],
  "vpc": [
    "application/x-vhd-disk",
    "application/x-virtualbox-vhd"
  ],
  "vhdx": [
    "application/x-vhdx-disk",
    "application/x-virtualbox-vhdx"
  ],
  "vmdk": [
    "application/x-vmdk-disk",
    "application/x-virtualbox-vmdk"
  ],
  "vdi": [
    "application/x-vdi-disk",
    "application/x-virtualbox-vdi"
  ],
  "cwk": [
    "application/x-appleworks-document"
  ],
  "bps": [
    "application/x-bps-patch"
  ],
  "ips": [
    "application/x-ips-patch"
  ],
  "pysu": [
    "application/x-pyspread-spreadsheet"
  ],
  "pys": [
    "application/x-pyspread-bz-spreadsheet"
  ],
  "kt": [
    "text/x-kotlin"
  ],
  "dtsi": [
    "text/x-devicetree-source"
  ],
  "avif": [
    "image/avif",
    "image/avif-sequence"
  ],
  "avifs": [
    "image/avif",
    "image/avif-sequence"
  ],
  "qoi": [
    "image/qoi"
  ],
  "bik": [
    "video/vnd.radgamettools.bink"
  ],
  "bk2": [
    "video/vnd.radgamettools.bink"
  ],
  "smk": [
    "video/vnd.radgamettools.smacker"
  ],
  "zim": [
    "application/x-openzim"
  ],
  "qs": [
    "application/sparql-query"
  ],
  "openvpn": [
    "application/x-openvpn-profile"
  ],
  "ovpn": [
    "application/x-openvpn-profile"
  ],
  "mrpack": [
    "application/x-modrinth-modpack+zip"
  ],
  "cbor": [
    "application/cbor"
  ],
  "eris": [
    "application/x-eris-link+cbor"
  ],
  "gbrjob": [
    "application/x-gerber-job"
  ],
  "drl": [
    "application/x-excellon"
  ],
  "tmx": [
    "application/x-tiled-tmx"
  ],
  "tsx": [
    "application/x-tiled-tsx"
  ]
}
