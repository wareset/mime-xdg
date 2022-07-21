/* eslint-disable max-len */

export const _MIME_TYPES = ["application","zz-application","audio","text","image","model","x-epoc","video","chemical","font","message","flv-application","multipart"] as const

export const _MIME_NAMES = [["vnd.lotus-1-2-3","x-lotus123","x-123","lotus123","wk1","x-t602","andrew-inset","applixware","x-applix-word","atom+xml","atomcat+xml","atomsvc+xml","ccxml+xml","cdmi-capability","cdmi-container","cdmi-domain","cdmi-object","cdmi-queue","cu-seeme","davmount+xml","docbook+xml","x-docbook+xml","vnd.oasis.docbook+xml","dssc+der","dssc+xml","ecmascript","emma+xml","epub+zip","exi","font-tdpfr","gml+xml","gpx+xml","gpx","x-gpx+xml","x-gpx","gxf","hyperstudio","inkml+xml","ipfix","java-archive","x-java-archive","x-jar","java-serialized-object","java-vm","x-java","java","java-byte-code","x-java-class","x-java-vm","json","schema+json","jsonml+json","lost+xml","mac-binhex40","mac-compactpro","mads+xml","marc","marcxml+xml","mathematica","x-mathematica","mathml+xml","mbox","mediaservercontrol+xml","metalink+xml","metalink4+xml","mets+xml","mods+xml","mp21","mp4","msword","vnd.ms-word","x-msword","msword-template","mxf","octet-stream","x-sharedlib","x-xar","oda","oebps-package+xml","ogg","x-ogg","omdoc+xml","onenote","oxps","patch-ops-error+xml","pdf","x-pdf","acrobat","nappdf","pgp-encrypted","pgp","pgp-signature","pgp-keys","pics-rules","pkcs10","pkcs7-mime","pkcs7-signature","pkcs8","pkix-attr-cert","pkix-cert","pkix-crl","pkix-pkipath","pkixcmp","pls+xml","pls","postscript","illustrator","vnd.adobe.illustrator","prs.cww","pskc+xml","rdf+xml","reginfo+xml","relax-ng-compact-syntax","x-rnc","resource-lists+xml","resource-lists-diff+xml","rls-services+xml","rpki-ghostbusters","rpki-manifest","rpki-roa","rsd+xml","rss+xml","rtf","sbml+xml","scvp-cv-request","scvp-cv-response","scvp-vp-request","scvp-vp-response","sdp","x-sdp","vnd.sdp","vnd.stardivision.impress","set-payment-initiation","set-registration-initiation","shf+xml","smil+xml","x-sami","smil","sparql-query","sparql-results+xml","srgs","srgs+xml","sru+xml","ssdl+xml","ssml+xml","tei+xml","thraud+xml","timestamped-data","vnd.3gpp.pic-bw-large","vnd.3gpp.pic-bw-small","vnd.3gpp.pic-bw-var","vnd.3gpp2.tcap","vnd.3m.post-it-notes","vnd.accpac.simply.aso","vnd.accpac.simply.imp","vnd.acucobol","vnd.acucorp","vnd.adobe.air-application-installer-package+zip","vnd.adobe.formscentral.fcdt","vnd.adobe.fxp","vnd.adobe.xdp+xml","vnd.adobe.xfdf","vnd.ahead.space","vnd.airzip.filesecure.azf","vnd.airzip.filesecure.azs","vnd.amazon.ebook","vnd.americandynamics.acc","vnd.amiga.ami","vnd.android.package-archive","vnd.anser-web-certificate-issue-initiation","vnd.anser-web-funds-transfer-initiation","vnd.antix.game-component","vnd.apple.installer+xml","vnd.apple.mpegurl","m3u","vnd.aristanetworks.swi","vnd.astraea-software.iota","vnd.audiograph","vnd.blueice.multipass","vnd.bmi","vnd.businessobjects","vnd.chemdraw+xml","vnd.chipnuts.karaoke-mmd","vnd.cinderella","vnd.claymore","vnd.cloanto.rp9","vnd.clonk.c4group","vnd.cluetrust.cartomobile-config","vnd.cluetrust.cartomobile-config-pkg","vnd.commonspace","vnd.contact.cmsg","vnd.cosmocaller","vnd.crick.clicker","vnd.crick.clicker.keyboard","vnd.crick.clicker.palette","vnd.crick.clicker.template","vnd.crick.clicker.wordbank","vnd.criticaltools.wbs+xml","vnd.ctc-posml","vnd.cups-ppd","vnd.curl.car","vnd.curl.pcurl","vnd.dart","vnd.data-vision.rdz","vnd.dece.data","vnd.dece.ttml+xml","vnd.dece.unspecified","vnd.dece.zip","vnd.denovo.fcselayout-link","vnd.dna","vnd.dolby.mlp","vnd.dpgraph","vnd.dreamfactory","vnd.ds-keypoint","vnd.dvb.ait","vnd.dvb.service","vnd.dynageo","vnd.ecowin.chart","vnd.enliven","vnd.epson.esf","vnd.epson.msf","vnd.epson.quickanime","vnd.epson.salt","vnd.epson.ssf","vnd.eszigno3+xml","vnd.ezpix-album","vnd.ezpix-package","vnd.fdf","vnd.fdsn.mseed","vnd.fdsn.seed","vnd.flographit","vnd.fluxtime.clip","vnd.framemaker","x-frame","vnd.frogans.fnc","vnd.frogans.ltf","vnd.fsc.weblaunch","vnd.fujitsu.oasys","vnd.fujitsu.oasys2","vnd.fujitsu.oasys3","vnd.fujitsu.oasysgp","vnd.fujitsu.oasysprs","vnd.fujixerox.ddd","vnd.fujixerox.docuworks","vnd.fujixerox.docuworks.binder","vnd.fuzzysheet","vnd.genomatix.tuxedo","vnd.geogebra.file","vnd.geogebra.tool","vnd.geometry-explorer","vnd.geonext","vnd.geoplan","vnd.geospace","vnd.gmx","vnd.google-earth.kml+xml","vnd.google-earth.kmz","vnd.grafeq","vnd.groove-account","vnd.groove-help","vnd.groove-identity-message","vnd.groove-injector","vnd.groove-tool-message","vnd.groove-tool-template","vnd.groove-vcard","vnd.hal+xml","vnd.handheld-entertainment+xml","vnd.hbci","vnd.hhe.lesson-player","vnd.hp-hpgl","vnd.hp-hpid","vnd.hp-hps","vnd.hp-jlyt","vnd.hp-pcl","vnd.hp-pclxl","vnd.hydrostatix.sof-data","vnd.ibm.minipay","vnd.ibm.modcap","vnd.ibm.rights-management","vnd.ibm.secure-container","vnd.iccprofile","vnd.igloader","vnd.immervision-ivp","vnd.immervision-ivu","vnd.insors.igm","vnd.intercon.formnet","vnd.intergeo","vnd.intu.qbo","vnd.intu.qfx","vnd.ipunplugged.rcprofile","vnd.irepository.package+xml","vnd.is-xpr","vnd.isac.fcs","vnd.jam","vnd.jcp.javame.midlet-rms","vnd.rn-realmedia","vnd.rn-realmedia-vbr","vnd.jisp","vnd.joost.joda-archive","vnd.kahootz","vnd.kde.karbon","x-karbon","vnd.kde.kchart","x-kchart","vnd.kde.kformula","x-kformula","vnd.kde.kivio","x-kivio","vnd.kde.kontour","x-kontour","vnd.kde.kpresenter","x-kpresenter","vnd.kde.kspread","x-kspread","vnd.kde.kword","x-kword","vnd.kenameaapp","vnd.kidspiration","vnd.kinar","vnd.koan","vnd.kodak-descriptor","vnd.las.las+xml","vnd.llamagraphics.life-balance.desktop","vnd.llamagraphics.life-balance.exchange+xml","vnd.lotus-approach","vnd.lotus-freelance","vnd.lotus-notes","vnd.lotus-organizer","vnd.lotus-screencam","vnd.lotus-wordpro","vnd.macports.portpkg","vnd.mcd","vnd.medcalcdata","vnd.mediastation.cdkey","vnd.mfer","vnd.mfmp","vnd.micrografx.flo","vnd.micrografx.igx","vnd.mif","x-mif","vnd.mobius.daf","vnd.mobius.dis","vnd.mobius.mbk","vnd.mobius.mqy","vnd.mobius.msl","vnd.mobius.plc","vnd.mobius.txf","vnd.mophun.application","vnd.mophun.certificate","vnd.mozilla.xul+xml","vnd.ms-artgalry","vnd.ms-cab-compressed","vnd.ms-excel","msexcel","x-msexcel","vnd.ms-excel.addin.macroenabled.12","vnd.ms-excel.addin.macroEnabled.12","vnd.ms-excel.sheet.binary.macroenabled.12","vnd.ms-excel.sheet.binary.macroEnabled.12","vnd.ms-excel.sheet.macroenabled.12","vnd.ms-excel.sheet.macroEnabled.12","vnd.ms-excel.template.macroenabled.12","vnd.ms-excel.template.macroEnabled.12","vnd.ms-fontobject","vnd.ms-htmlhelp","x-chm","vnd.ms-ims","vnd.ms-lrm","vnd.ms-officetheme","vnd.ms-pki.seccat","vnd.ms-pki.stl","vnd.ms-powerpoint","powerpoint","mspowerpoint","x-mspowerpoint","vnd.ms-powerpoint.addin.macroenabled.12","vnd.ms-powerpoint.addin.macroEnabled.12","vnd.ms-powerpoint.presentation.macroenabled.12","vnd.ms-powerpoint.presentation.macroEnabled.12","vnd.ms-powerpoint.slide.macroenabled.12","vnd.ms-powerpoint.slide.macroEnabled.12","vnd.ms-powerpoint.slideshow.macroenabled.12","vnd.ms-powerpoint.slideshow.macroEnabled.12","vnd.ms-powerpoint.template.macroenabled.12","vnd.ms-powerpoint.template.macroEnabled.12","vnd.ms-project","vnd.ms-word.document.macroenabled.12","vnd.ms-word.document.macroEnabled.12","vnd.ms-word.template.macroenabled.12","vnd.ms-word.template.macroEnabled.12","vnd.ms-works","vnd.ms-wpl","vnd.ms-xpsdocument","xps","vnd.mseq","vnd.musician","vnd.muvee.style","vnd.mynfc","vnd.neurolanguage.nlu","vnd.nitf","vnd.noblenet-directory","vnd.noblenet-sealer","vnd.noblenet-web","vnd.nokia.n-gage.data","vnd.nokia.n-gage.symbian.install","vnd.nokia.radio-preset","vnd.nokia.radio-presets","vnd.novadigm.edm","vnd.novadigm.edx","vnd.novadigm.ext","vnd.oasis.opendocument.chart","vnd.oasis.opendocument.chart-template","vnd.oasis.opendocument.database","vnd.sun.xml.base","vnd.oasis.opendocument.formula","vnd.oasis.opendocument.formula-template","vnd.oasis.opendocument.graphics","vnd.oasis.opendocument.graphics-template","vnd.oasis.opendocument.image","vnd.oasis.opendocument.image-template","vnd.oasis.opendocument.presentation","vnd.oasis.opendocument.presentation-template","vnd.oasis.opendocument.spreadsheet","vnd.oasis.opendocument.spreadsheet-template","vnd.oasis.opendocument.text","vnd.oasis.opendocument.text-master","vnd.oasis.opendocument.text-template","vnd.oasis.opendocument.text-web","vnd.olpc-sugar","vnd.oma.dd2+xml","vnd.openofficeorg.extension","vnd.openxmlformats-officedocument.presentationml.presentation","vnd.openxmlformats-officedocument.presentationml.slide","vnd.openxmlformats-officedocument.presentationml.slideshow","vnd.openxmlformats-officedocument.presentationml.template","vnd.openxmlformats-officedocument.spreadsheetml.sheet","vnd.openxmlformats-officedocument.spreadsheetml.template","vnd.openxmlformats-officedocument.wordprocessingml.document","vnd.openxmlformats-officedocument.wordprocessingml.template","vnd.osgeo.mapguide.package","x-magicpoint","vnd.osgi.dp","vnd.osgi.subsystem","vnd.palm","x-aportisdoc","x-palm-database","vnd.pawaafile","vnd.pg.format","vnd.pg.osasli","vnd.picsel","vnd.pmi.widget","vnd.pocketlearn","vnd.powerbuilder6","vnd.previewsystems.box","vnd.proteus.magazine","vnd.publishare-delta-tree","vnd.pvi.ptid1","vnd.quark.quarkxpress","vnd.realvnc.bed","vnd.recordare.musicxml","vnd.recordare.musicxml+xml","vnd.rig.cryptonote","vnd.rim.cod","vnd.route66.link66+xml","vnd.sailingtracker.track","vnd.seemail","vnd.sema","vnd.semd","vnd.semf","vnd.shana.informed.formdata","vnd.shana.informed.formtemplate","vnd.shana.informed.interchange","vnd.shana.informed.package","vnd.simtech-mindmapper","vnd.smaf","x-smaf","vnd.smart.teacher","vnd.solent.sdkm+xml","vnd.spotfire.dxp","vnd.spotfire.sfs","vnd.stardivision.calc","vnd.stardivision.draw","vnd.stardivision.math","vnd.stardivision.writer","vnd.stardivision.writer-global","vnd.stepmania.package","vnd.stepmania.stepchart","vnd.sun.xml.calc","vnd.sun.xml.calc.template","vnd.sun.xml.draw","vnd.sun.xml.draw.template","vnd.sun.xml.impress","vnd.sun.xml.impress.template","vnd.sun.xml.math","vnd.sun.xml.writer","vnd.sun.xml.writer.global","vnd.sun.xml.writer.template","vnd.sus-calendar","vnd.svd","vnd.symbian.install","vnd.syncml+xml","vnd.syncml.dm+wbxml","vnd.syncml.dm+xml","vnd.tao.intent-module-archive","vnd.tcpdump.pcap","x-pcap","pcap","vnd.tmobile-livetv","vnd.trid.tpt","vnd.triscape.mxs","vnd.trueapp","vnd.ufdl","vnd.uiq.theme","vnd.umajin","vnd.unity","vnd.uoml+xml","vnd.vcx","vnd.visio","tga","x-targa","x-tga","vnd.visionary","vnd.vsf","vnd.wap.wbxml","vnd.wap.wmlc","vnd.wap.wmlscriptc","vnd.webturbo","vnd.wolfram.player","vnd.wordperfect","x-wordperfect","wordperfect","vnd.wqd","vnd.wt.stf","vnd.xara","vnd.xfdl","vnd.yamaha.hv-dic","vnd.yamaha.hv-script","vnd.yamaha.hv-voice","vnd.yamaha.openscoreformat","vnd.yamaha.openscoreformat.osfpvg+xml","vnd.yamaha.smaf-audio","vnd.yamaha.smaf-phrase","vnd.yellowriver-custom-menu","vnd.zul","vnd.zzazz.deck+xml","voicexml+xml","widget","winhlp","wsdl+xml","wspolicy+xml","x-7z-compressed","x-abiword","x-ace-compressed","x-ace","x-apple-diskimage","x-authorware-bin","x-authorware-map","x-authorware-seg","x-bcpio","x-bittorrent","x-blorb","x-bzip","x-bzip2","bzip2","x-cbr","vnd.comicbook-rar","x-cbt","vnd.comicbook+zip","x-cbz","x-cb7","x-cdlink","x-cfs-compressed","x-chat","x-chess-pgn","vnd.chess-pgn","x-conference","x-netshow-channel","x-cpio","x-csh","x-debian-package","vnd.debian.binary-package","x-deb","x-dgc-compressed","x-director","x-doom","x-wii-wad","x-doom-wad","x-dtbncx+xml","x-dtbook+xml","x-dtbresource+xml","x-godot-resource","x-dvi","x-envoy","x-eva","x-font-bdf","x-font-ghostscript","x-font-type1","x-font-linux-psf","x-font-pcf","x-cisco-vpn-settings","x-font-snf","x-font-afm","x-freearc","x-futuresplash","vnd.adobe.flash.movie","x-shockwave-flash","futuresplash","x-gca-compressed","x-glulx","x-gnumeric","x-gramps-xml","x-gtar","x-tar","x-hdf","x-install-instructions","x-iso9660-image","x-sega-cd-rom","x-sega-pico-rom","x-saturn-rom","x-dreamcast-rom","x-wii-rom","x-wii-iso-image","x-wbfs","x-wia","x-gamecube-rom","x-gamecube-iso-image","x-cd-image","x-java-jnlp-file","x-latex","x-tex","x-lzh-compressed","x-lha","x-mie","x-mobipocket-ebook","x-ms-application","x-ms-shortcut","x-ms-wmd","x-ms-wmz","x-msmetafile","x-ms-xbap","x-msaccess","vnd.ms-access","msaccess","vnd.msaccess","mdb","x-mdb","x-msbinder","x-mscardfile","x-msclip","x-msdownload","x-ms-dos-executable","x-msi","x-msmediaview","x-wmf","wmf","x-emf","emf","x-msmoney","x-mspublisher","vnd.ms-publisher","x-msschedule","x-msterminal","x-mswrite","x-netcdf","x-nzb","x-pkcs12","pkcs12","x-pkcs7-certificates","x-pkcs7-certreqresp","x-rar-compressed","vnd.rar","x-rar","x-research-info-systems","x-sh","x-shellscript","x-shar","x-silverlight-app","x-sql","sql","x-stuffit","stuffit","x-sit","x-stuffitx","x-subrip","x-srt","x-sv4cpio","x-sv4crc","x-t3vm-image","x-tads","x-tcl","x-tex-tfm","x-texinfo","x-tgif","x-ustar","x-wais-source","x-x509-ca-cert","x-xfig","x-xliff+xml","xliff+xml","x-xliff","x-xpinstall","x-xz","x-zmachine","xaml+xml","xcap-diff+xml","xenc+xml","xhtml+xml","xml","xslt+xml","xml-dtd","xop+xml","xproc+xml","xspf+xml","x-xspf+xml","xv+xml","yang","yin+xml","zip","x-zip-compressed","x-zip","x-apple-systemprofiler+xml","x-ms-asx","ram","x-font-otf","x-font-ttf","font-woff","photoshop","x-photoshop","x-nintendo-3ds-rom","ico","ics","x-javascript","javascript","x-troff","x-perl","x-troff-man","x-flash-video","vnd.ms-asf","x-atari-2600-rom","x-atari-7800-rom","x-atari-lynx-rom","vnd.amazon.mobi8-ebook","x-mobi8-ebook","x-partial-download","x-wwf","wwf","x-windows-themepack","vnd.apple.keynote","x-iwork-keynote-sffkey","pkcs8-encrypted","raml+yaml","sieve","x-sqlite2","vnd.sqlite3","x-sqlite3","x-gedcom","x-go-sgf","x-godot-scene","x-godot-shader","x-gdscript","toml","x-yaml","vnd.corel-draw","cdr","coreldraw","x-cdr","x-coreldraw","vnd.ms-visio.drawing.main+xml","vnd.ms-visio.template.main+xml","vnd.ms-visio.stencil.main+xml","vnd.ms-visio.drawing.macroEnabled.main+xml","vnd.ms-visio.template.macroEnabled.main+xml","vnd.ms-visio.stencil.macroEnabled.main+xml","gnunet-directory","vnd.ms-tnef","ms-tnef","vnd.stardivision.chart","vnd.stardivision.mail","x-genesis-rom","vnd.oasis.opendocument.text-flat-xml","vnd.oasis.opendocument.graphics-flat-xml","vnd.oasis.opendocument.presentation-flat-xml","vnd.oasis.opendocument.spreadsheet-flat-xml","vnd.youtube.yt","x-spss-por","x-spss-sav","x-spss-savefile","x-xbel","x-cue","x-amipro","x-applix-spreadsheet","x-archive","x-arj","x-asar","x-asp","x-awk","x-blender","x-bzdvi","x-bzip-compressed-tar","x-bzpdf","x-bzpostscript","x-lrzip","x-lrzip-compressed-tar","x-raw-disk-image","x-raw-floppy-disk-image","x-fd-file","x-raw-disk-image-xz-compressed","x-compressed-iso","x-iso9660-appimage","vnd.appimage","x-cdrdao-toc","x-gd-rom-cue","x-discjuggler-cd-image","x-compress","x-compressed-tar","x-cpio-compressed","x-dbf","x-dbase","dbf","dbase","x-mame-chd","x-nintendo-ds-rom","x-nintendo-3ds-executable","x-pc-engine-rom","x-thomson-cartridge-memo7","x-thomson-cassette","x-hfe-floppy-image","x-hfe-file","x-thomson-sap-image","x-sap-file","x-designer","x-gtk-builder","x-desktop","x-gnome-app-info","x-fictionbook+xml","x-fictionbook","x-zip-compressed-fb2","x-dia-diagram","x-dia-shape","x-e-theme","x-egon","x-fluid","x-gz-font-linux-psf","x-font-speedo","x-font-ttx","x-gameboy-rom","x-gameboy-color-rom","x-gba-rom","x-virtual-boy-rom","x-genesis-32x-rom","x-gettext-translation","x-glade","x-gnucash","x-gnuplot","x-graphite","x-gzdvi","gzip","x-gzip","x-gzpdf","x-gzpostscript","x-java-keystore","x-java-jce-keystore","x-java-pack200","jrd+json","json-patch+json","ld+json","x-ipynb+json","vnd.coffeescript","x-jbuilder-project","x-kexi-connectiondata","x-kexiproject-shortcut","x-kexiproject-sqlite2","x-kexiproject-sqlite3","x-vnd.kde.kexi","x-kexiproject-sqlite","x-killustrator","x-kpovmodeler","x-krita","x-kugar","x-lhz","x-linguist","x-lyx","x-lz4","x-lz4-compressed-tar","x-lzip","x-lzip-compressed-tar","x-lzpdf","x-lzma","x-lzma-compressed-tar","x-lzop","x-qpress","zlib","x-mimearchive","x-mswinurl","x-msx-rom","x-m4","x-n64-rom","x-neo-geo-pocket-rom","x-neo-geo-pocket-color-rom","x-nes-rom","x-object","annodex","x-annodex","x-oleo","x-pak","x-par2","x-pagemaker","x-php","x-planperfect","x-pocket-word","x-pw","x-python-bytecode","x-qtiplot","x-quattropro","x-quicktime-media-link","x-quicktimeplayer","x-qw","x-dar","x-alz","x-reject","x-rpm","x-redhat-package-manager","x-source-rpm","x-ruby","x-markaby","x-shared-library-la","x-shorten","x-siag","x-sg1000-rom","x-sms-rom","x-gamegear-rom","vnd.nintendo.snes.rom","x-snes-rom","x-tarz","x-tex-gf","x-tex-pk","x-theme","x-trash","x-tzo","x-xz-compressed-tar","zstd","x-zstd-compressed-tar","x-xzpdf","x-wpg","x-wonderswan-rom","x-wonderswan-color-rom","x-zoo","x-ms-wim","x-ufraw","dicom","fits","x-navi-animation","x-vhd-disk","x-virtualbox-vhd","owl+xml","x-gettext","xml-external-parsed-entity","x-hwp","vnd.haansoft-hwp","x-hwt","vnd.haansoft-hwt","vnd.emusic-emusic_package","geo+json","vnd.geo+json","x-ica","x-it87","x-ccmx","x-bsdiff","trig","x-trig","vnd.apple.numbers","x-iwork-numbers-sffnumbers","vnd.apple.pages","x-iwork-pages-sffpages","vnd.apple.pkpass","x-amiga-disk-format","vnd.flatpak","vnd.xdgapp","vnd.flatpak.repo","vnd.flatpak.ref","vnd.squashfs","vnd.snap","vnd.ms-3mfdocument","x-fds-disk","ovf","x-virtualbox-ova","x-qed-disk","x-qemu-disk","x-vhdx-disk","x-virtualbox-vhdx","x-vmdk-disk","x-virtualbox-vmdk","x-vdi-disk","x-virtualbox-vdi","x-appleworks-document","x-bps-patch","x-ips-patch","x-pyspread-spreadsheet","x-pyspread-bz-spreadsheet","x-openzim","x-ole-storage","x-iff","x-matroska","x-riff"],["zz-winassoc-123","zz-winassoc-doc","zz-winassoc-cab","zz-winassoc-xls","zz-winassoc-hlp","zz-winassoc-mdb","zz-winassoc-cdr","zz-winassoc-uu"],["x-mod","x-scpls","scpls","x-mpegurl","mpegurl","x-mp3-playlist","m3u","x-m3u","x-musepack","x-psf","adpcm","basic","midi","x-midi","mp4","x-m4a","m4a","mpeg","x-mp3","x-mpg","x-mpeg","mp3","mp2","x-mp2","ogg","x-vorbis+ogg","vorbis","x-vorbis","x-flac+ogg","x-oggflac","x-ogg","x-speex+ogg","x-speex","x-opus+ogg","s3m","x-s3m","silk","vnd.dece.audio","vnd.digital-winds","vnd.dra","vnd.dts","x-dts","vnd.dts.hd","x-dtshd","vnd.lucent.voice","vnd.ms-playready.media.pya","vnd.nuera.ecelp4800","vnd.nuera.ecelp7470","vnd.nuera.ecelp9600","vnd.rip","webm","x-aac","aac","x-aiff","x-aifc","x-aiffc","x-caf","x-flac","flac","x-matroska","x-ms-wax","x-ms-asx","x-ms-wma","wma","x-pn-realaudio","vnd.rn-realaudio","vnd.m-realaudio","x-pn-realaudio-plugin","x-wav","wav","vnd.wave","xm","x-xm","prs.sid","3gpp","3gpp-encrypted","x-rn-3gpp-amr","x-rn-3gpp-amr-encrypted","x-rn-3gpp-amr-wb","x-rn-3gpp-amr-wb-encrypted","3gpp2","x-amzxml","x-gsm","x-iriver-pla","annodex","x-annodex","x-shorten","x-iMelody","iMelody","x-xmf","xmf","mobile-xmf","vnd.nokia.mobile-xmf","ac3","AMR","amr-encrypted","AMR-WB","amr-wb-encrypted","x-ape","x-pn-audibleaudio","vnd.audible","vnd.audible.aax","x-dff","dff","x-dsf","dsf","x-dsd","dsd","x-it","x-tak","x-wavpack","x-wavpack-correction","x-mo3","usac","x-m4r","x-m4b","x-minipsf","x-psflib","x-stm","x-voc","x-xi","x-tta","tta"],["vnd.graphviz","plain","rdf","rust","rss","rtf","x-dart","x-scala","org","x-scheme","x-gettext-translation-template","x-pot","x-devicetree-binary","x-tex","x-sh","x-sql","tcl","x-tcl","x-texinfo","xml","x-dtd","x-devicetree-source","vnd.dvb.subtitle","x-microdvd","x-mpsub","x-subviewer","ico","cache-manifest","calendar","x-vcalendar","css","csv","x-comma-separated-values","x-csv","html","javascript","n3","x-log","prs.lines.tag","richtext","sgml","tab-separated-values","troff","x-troff","x-perl","x-troff-me","x-troff-ms","turtle","uri-list","vcard","directory","x-vcard","vnd.curl","vnd.curl.dcurl","vnd.curl.mcurl","vnd.curl.scurl","vnd.fly","vnd.fmi.flexstor","vnd.in3d.3dml","vnd.in3d.spot","vnd.sun.j2me.app-descriptor","vnd.wap.wml","vnd.wap.wmlscript","x-asm","x-c","x-csrc","x-c++src","x-chdr","x-c++hdr","x-fortran","x-java-source","x-java","x-nfo","x-opml","x-opml+xml","x-pascal","x-setext","x-sfv","x-uuencode","mathml","gedcom","yaml","x-yaml","ecmascript","x-kaitai-struct","x-qml","x-modelica","x-groovy","x-gradle","vnd.trolltech.linguist","vnd.qt.linguist","x-lyx","x-ocl","x-cobol","x-reject","x-crystal","crystal","vtt","x-mpl2","x-ssa","x-iMelody","x-mrml","vnd.rn-realtext","x-txt2tags","x-verilog","x-svhdr","x-svsrc","x-vhdl","x-rst","spreadsheet","vnd.senx.warpscript","x-adasrc","x-bibtex","x-cmake","x-common-lisp","csv-schema","x-csharp","x-vala","x-ooc","x-dcl","x-dsl","x-dsrc","x-eiffel","x-emacs-lisp","x-elixir","x-erlang","x-genie","x-gettext-translation","x-po","x-gherkin","x-google-video-pointer","google-video-pointer","x-haskell","x-idl","x-ldif","x-lilypond","x-literate-haskell","x-makefile","markdown","x-markdown","x-moc","x-ms-regedit","x-mof","x-mup","x-objcsrc","x-matlab","x-octave","x-objc++src","x-troff-mm","x-ocaml","x-opencl-src","x-patch","x-diff","x-go","x-python","x-python3","x-sagemath","x-lua","x-rpm-spec","x-sass","x-scss","x-twig","x-uil","vbscript","vbs","x-xmi","x-xslfo","x-iptables","x-dbus-service","x-systemd-unit","xml-external-parsed-entity","x.gcode","x-gcode-gx","x-kotlin","x-readme"],["pdf","x-eps","x-gimp-gbr","x-tga","targa","tga","x-icb","x-targa","x-kodak-dcr","wmf","x-wmf","x-win-metafile","emf","x-emf","x-xfig","bmp","x-bmp","x-MS-bmp","cgm","g3fax","fax-g3","gif","ief","jpeg","pjpeg","ktx","png","prs.btif","sgi","x-sgi","svg+xml","svg+xml-compressed","tiff","vnd.adobe.photoshop","psd","x-psd","photoshop","x-photoshop","vnd.dece.graphic","vnd.djvu","x-djvu","x.djvu","vnd.djvu+multipage","vnd.dvb.subtitle","vnd.dwg","vnd.dxf","vnd.fastbidsheet","vnd.fpx","vnd.fst","vnd.fujixerox.edmics-mmr","vnd.fujixerox.edmics-rlc","vnd.ms-modi","vnd.ms-photo","vnd.net-fpx","vnd.wap.wbmp","vnd.xiff","webp","x-3ds","x-cmu-raster","x-cmx","x-freehand","x-icon","vnd.microsoft.icon","ico","icon","x-ico","x-mrsid-image","x-pcx","vnd.zbrush.pcx","x-pict","x-portable-anymap","x-portable-bitmap","x-portable-graymap","x-portable-pixmap","x-rgb","x-xbitmap","x-xpixmap","x-xpm","x-xwindowdump","jpm","cdr","x-cdr","jpx","x-quicktime","x-skencil","vnd.rn-realpix","heif","heic","heic-sequence","heif-sequence","x-jp2-codestream","jp2","jpeg2000","jpeg2000-image","x-jpeg2000-image","jxl","openraster","x-dds","x-exr","x-adobe-dng","x-canon-crw","x-canon-cr2","x-canon-cr3","x-fuji-raf","x-kodak-k25","x-kodak-kdc","x-minolta-mrw","x-nikon-nef","x-nikon-nrw","x-olympus-orf","x-panasonic-rw","x-panasonic-raw","x-panasonic-rw2","x-panasonic-raw2","x-pentax-pef","x-sigma-x3f","x-sony-srf","x-sony-sr2","x-sony-arw","rle","x-applix-graphics","x-bzeps","x-compressed-xcf","x-fits","fits","x-gzeps","x-icns","x-ilbm","x-iff","x-jng","x-lwo","x-lws","x-macpaint","x-msod","x-photo-cd","x-sun-raster","x-win-bitmap","x-xcf","x-gimp-gih","x-gimp-pat","ktx2","astc","avif","avif-sequence","x-dcraw"],["stl","x.stl-ascii","x.stl-binary","obj","iges","mesh","vnd.collada+xml","vnd.dwf","vnd.gdl","vnd.gtw","vnd.mts","vnd.vtu","vrml","x3d+binary","x3d+vrml","x3d+xml","gltf-binary","gltf+json","mtl","3mf"],["x-sisx-app"],["mp2t","mpeg","x-mpeg","mpeg-system","x-mpeg-system","x-mpeg2","x-theora+ogg","x-theora","ogg","x-ogg","x-ms-wvx","x-ms-wax","x-ms-wmx","3gpp","3gp","3gpp-encrypted","3gpp2","h261","h263","h264","jpeg","jpm","mj2","mp4","mp4v-es","x-m4v","quicktime","vnd.dece.hd","vnd.dece.mobile","vnd.dece.pd","vnd.dece.sd","vnd.dece.video","vnd.dvb.file","vnd.fvt","vnd.mpegurl","x-mpegurl","vnd.ms-playready.media.pyv","vnd.uvvu.mp4","vnd.vivo","vivo","webm","x-f4v","x-fli","x-flic","fli","x-flv","flv","x-matroska","x-matroska-3d","x-mng","x-ms-asf","x-ms-wm","x-ms-asf-plugin","x-ms-vob","x-ms-wmv","x-msvideo","x-avi","avi","divx","msvideo","vnd.divx","x-sgi-movie","x-smv","x-javafx","vnd.youtube.yt","annodex","x-annodex","x-ogm+ogg","x-ogm","vnd.rn-realvideo","x-real-video","x-mjpeg","dv","x-nsv","vnd.radgamettools.bink","vnd.radgamettools.smacker"],["x-cdx","x-cif","x-cmdf","x-cml","x-csml","x-xyz"],["collection","otf","ttf","woff","woff2"],["rfc822"],["octet-stream"],["related"]] as const

export const _EXTENSIONS = {"123":[0,0,0,1,0,2,0,3,0,4,1,0],"602":[0,5],"669":[2,0],"ez":[0,6],"aw":[0,7,0,8],"atom":[0,9],"atomcat":[0,10],"atomsvc":[0,11],"ccxml":[0,12],"cdmia":[0,13],"cdmic":[0,14],"cdmid":[0,15],"cdmio":[0,16],"cdmiq":[0,17],"cu":[0,18],"davmount":[0,19],"dbk":[0,20,0,21,0,22],"dssc":[0,23],"xdssc":[0,24],"ecma":[0,25],"emma":[0,26],"epub":[0,27],"exi":[0,28],"pfr":[0,29],"gml":[0,30],"gpx":[0,31,0,32,0,33,0,34],"gxf":[0,35],"stk":[0,36],"ink":[0,37],"inkml":[0,37],"ipfix":[0,38],"jar":[0,39,0,40,0,41],"ser":[0,42],"class":[0,43,0,44,0,45,0,46,0,47,0,48],"json":[0,49,0,50],"jsonml":[0,51],"lostxml":[0,52],"hqx":[0,53],"cpt":[0,54],"mads":[0,55],"mrc":[0,56],"mrcx":[0,57],"ma":[0,58],"nb":[0,58,0,59],"mb":[0,58],"mathml":[0,60],"mbox":[0,61],"mscml":[0,62],"metalink":[0,63],"meta4":[0,64],"mets":[0,65],"mods":[0,66],"m21":[0,67],"mp21":[0,67],"mp4s":[0,68],"doc":[0,69,0,70,0,71,1,1],"dot":[0,69,0,72,3,0],"mxf":[0,73],"bin":[0,74],"dms":[0,74],"lrf":[0,74],"mar":[0,74],"so":[0,74,0,75],"dist":[0,74],"distz":[0,74],"pkg":[0,74,0,76],"bpk":[0,74],"dump":[0,74],"elc":[0,74],"deploy":[0,74],"oda":[0,77],"opf":[0,78],"ogx":[0,79,0,80],"omdoc":[0,81],"onetoc":[0,82],"onetoc2":[0,82],"onetmp":[0,82],"onepkg":[0,82],"oxps":[0,83],"xer":[0,84],"pdf":[0,85,0,86,4,0,0,87,0,88],"pgp":[0,89,0,90,0,91,0,92],"asc":[0,91,3,1,0,89,0,90,0,92],"sig":[0,91],"prf":[0,93],"p10":[0,94],"p7m":[0,95],"p7c":[0,95],"p7s":[0,96],"p8":[0,97],"ac":[0,98],"cer":[0,99],"crl":[0,100],"pkipath":[0,101],"pki":[0,102],"pls":[0,103,2,1,0,104,2,2],"ai":[0,105,0,106,0,107],"eps":[0,105,4,1],"ps":[0,105],"cww":[0,108],"pskcxml":[0,109],"rdf":[0,110,3,2],"rif":[0,111],"rnc":[0,112,0,113],"rl":[0,114],"rld":[0,115],"rs":[0,116,3,3],"gbr":[0,117,4,2],"mft":[0,118],"roa":[0,119],"rsd":[0,120],"rss":[0,121,3,4],"rtf":[0,122,3,5],"sbml":[0,123],"scq":[0,124],"scs":[0,125],"spq":[0,126],"spp":[0,127],"sdp":[0,128,0,129,0,130,0,131],"setpay":[0,132],"setreg":[0,133],"shf":[0,134],"smi":[0,135,0,136,0,137],"smil":[0,135,0,137],"rq":[0,138],"srx":[0,139],"gram":[0,140],"grxml":[0,141],"sru":[0,142],"ssdl":[0,143],"ssml":[0,144],"tei":[0,145],"teicorpus":[0,145],"tfi":[0,146],"tsd":[0,147],"plb":[0,148],"psb":[0,149],"pvb":[0,150],"tcap":[0,151],"pwn":[0,152],"aso":[0,153],"imp":[0,154],"acu":[0,155],"atc":[0,156],"acutc":[0,156],"air":[0,157],"fcdt":[0,158],"fxp":[0,159],"fxpl":[0,159],"xdp":[0,160],"xfdf":[0,161],"ahead":[0,162],"azf":[0,163],"azs":[0,164],"azw":[0,165],"acc":[0,166],"ami":[0,167],"apk":[0,168],"cii":[0,169],"fti":[0,170],"atx":[0,171],"mpkg":[0,172],"m3u8":[0,173,2,3,2,4,0,174,2,5,2,6,2,7],"swi":[0,175],"iota":[0,176],"aep":[0,177],"mpm":[0,178],"bmi":[0,179],"rep":[0,180],"cdxml":[0,181],"mmd":[0,182],"cdy":[0,183],"cla":[0,184],"rp9":[0,185],"c4g":[0,186],"c4d":[0,186],"c4f":[0,186],"c4p":[0,186],"c4u":[0,186],"c11amc":[0,187],"c11amz":[0,188],"csp":[0,189],"cdbcmsg":[0,190],"cmc":[0,191],"clkx":[0,192],"clkk":[0,193],"clkp":[0,194],"clkt":[0,195],"clkw":[0,196],"wbs":[0,197],"pml":[0,198],"ppd":[0,199],"car":[0,200],"pcurl":[0,201],"dart":[0,202,3,6],"rdz":[0,203],"uvf":[0,204],"uvvf":[0,204],"uvd":[0,204],"uvvd":[0,204],"uvt":[0,205],"uvvt":[0,205],"uvx":[0,206],"uvvx":[0,206],"uvz":[0,207],"uvvz":[0,207],"fe_launch":[0,208],"dna":[0,209],"mlp":[0,210],"dpg":[0,211],"dfac":[0,212],"kpxx":[0,213],"ait":[0,214],"svc":[0,215],"geo":[0,216],"mag":[0,217],"nml":[0,218],"esf":[0,219],"msf":[0,220],"qam":[0,221],"slt":[0,222],"ssf":[0,223],"es3":[0,224],"et3":[0,224],"ez2":[0,225],"ez3":[0,226],"fdf":[0,227],"mseed":[0,228],"seed":[0,229],"dataless":[0,229],"gph":[0,230],"ftc":[0,231],"fm":[0,232,0,233],"frame":[0,232],"maker":[0,232],"book":[0,232],"fnc":[0,234],"ltf":[0,235],"fsc":[0,236],"oas":[0,237],"oa2":[0,238],"oa3":[0,239],"fg5":[0,240],"bh2":[0,241],"ddd":[0,242],"xdw":[0,243],"xbd":[0,244],"fzs":[0,245],"txd":[0,246],"ggb":[0,247],"ggt":[0,248],"gex":[0,249],"gre":[0,249],"gxt":[0,250],"g2w":[0,251],"g3w":[0,252],"gmx":[0,253],"kml":[0,254],"kmz":[0,255],"gqf":[0,256],"gqs":[0,256],"gac":[0,257],"ghf":[0,258],"gim":[0,259],"grv":[0,260],"gtm":[0,261],"tpl":[0,262],"vcg":[0,263],"hal":[0,264],"zmm":[0,265],"hbci":[0,266],"les":[0,267],"hpgl":[0,268],"hpid":[0,269],"hps":[0,270],"jlt":[0,271],"pcl":[0,272],"pclxl":[0,273],"sfd-hdstx":[0,274],"mpy":[0,275],"afp":[0,276],"listafp":[0,276],"list3820":[0,276],"irm":[0,277],"sc":[0,278,3,7],"icc":[0,279],"icm":[0,279],"igl":[0,280],"ivp":[0,281],"ivu":[0,282],"igm":[0,283],"xpw":[0,284],"xpx":[0,284],"i2g":[0,285],"qbo":[0,286],"qfx":[0,287],"rcprofile":[0,288],"irp":[0,289],"xpr":[0,290],"fcs":[0,291],"jam":[0,292],"rms":[0,293,0,294,0,295],"jisp":[0,296],"joda":[0,297],"ktz":[0,298],"ktr":[0,298],"karbon":[0,299,0,300],"chrt":[0,301,0,302],"kfo":[0,303,0,304],"flw":[0,305,0,306],"kon":[0,307,0,308],"kpr":[0,309,0,310],"kpt":[0,309,0,310],"ksp":[0,311,0,312],"kwd":[0,313,0,314],"kwt":[0,313,0,314],"htke":[0,315],"kia":[0,316],"kne":[0,317],"knp":[0,317],"skp":[0,318],"skd":[0,318],"skt":[0,318],"skm":[0,318],"sse":[0,319],"lasxml":[0,320],"lbd":[0,321],"lbe":[0,322],"apr":[0,323],"pre":[0,324],"nsf":[0,325],"org":[0,326,3,8],"scm":[0,327,3,9],"lwp":[0,328],"portpkg":[0,329],"mcd":[0,330],"mc1":[0,331],"cdkey":[0,332],"mwf":[0,333],"mfm":[0,334],"flo":[0,335],"igx":[0,336],"mif":[0,337,0,338],"daf":[0,339],"dis":[0,340],"mbk":[0,341],"mqy":[0,342],"msl":[0,343],"plc":[0,344],"txf":[0,345],"mpn":[0,346],"mpc":[0,347,2,8],"xul":[0,348],"cil":[0,349],"cab":[0,350,1,2],"xls":[0,351,0,352,0,353,1,3],"xlm":[0,351,0,352,0,353,1,3],"xla":[0,351,0,352,0,353,1,3],"xlc":[0,351,0,352,0,353,1,3],"xlt":[0,351,0,352,0,353,1,3],"xlw":[0,351,0,352,0,353,1,3],"xlam":[0,354,0,355],"xlsb":[0,356,0,357],"xlsm":[0,358,0,359],"xltm":[0,360,0,361],"eot":[0,362],"chm":[0,363,0,364],"ims":[0,365],"lrm":[0,366],"thmx":[0,367],"cat":[0,368],"stl":[0,369,5,0,5,1,5,2],"ppt":[0,370,0,371,0,372,0,373],"pps":[0,370,0,371,0,372,0,373],"pot":[0,370,3,10,3,11,0,371,0,372,0,373],"ppam":[0,374,0,375],"pptm":[0,376,0,377],"sldm":[0,378,0,379],"ppsm":[0,380,0,381],"potm":[0,382,0,383],"mpp":[0,384,2,8],"mpt":[0,384],"docm":[0,385,0,386],"dotm":[0,387,0,388],"wps":[0,389],"wks":[0,389,0,0,0,1,0,2,0,3,0,4,1,0],"wcm":[0,389],"wdb":[0,389],"wpl":[0,390],"xps":[0,391,0,392],"mseq":[0,393],"mus":[0,394],"msty":[0,395],"taglet":[0,396],"nlu":[0,397],"ntf":[0,398],"nitf":[0,398],"nnd":[0,399],"nns":[0,400],"nnw":[0,401],"ngdat":[0,402],"n-gage":[0,403],"rpst":[0,404],"rpss":[0,405],"edm":[0,406],"edx":[0,407],"ext":[0,408],"odc":[0,409],"otc":[0,410],"odb":[0,411,0,412],"odf":[0,413],"odft":[0,414],"odg":[0,415],"otg":[0,416],"odi":[0,417],"oti":[0,418],"odp":[0,419],"otp":[0,420],"ods":[0,421],"ots":[0,422],"odt":[0,423],"odm":[0,424],"ott":[0,425],"oth":[0,426],"xo":[0,427],"dd2":[0,428],"oxt":[0,429],"pptx":[0,430],"sldx":[0,431],"ppsx":[0,432],"potx":[0,433],"xlsx":[0,434],"xltx":[0,435],"docx":[0,436],"dotx":[0,437],"mgp":[0,438,0,439],"dp":[0,440],"esa":[0,441],"pdb":[0,442,0,443,0,444],"pqa":[0,442,0,444],"oprc":[0,442,0,444],"paw":[0,445],"str":[0,446],"ei6":[0,447],"efif":[0,448],"wg":[0,449],"plf":[0,450],"pbd":[0,451],"box":[0,452],"mgz":[0,453],"qps":[0,454],"ptid":[0,455],"qxd":[0,456],"qxt":[0,456],"qwd":[0,456],"qwt":[0,456],"qxl":[0,456],"qxb":[0,456],"bed":[0,457],"mxl":[0,458],"musicxml":[0,459],"cryptonote":[0,460],"cod":[0,461],"rm":[0,294,0,295],"rmvb":[0,295,0,294],"link66":[0,462],"st":[0,463],"see":[0,464],"sema":[0,465],"semd":[0,466],"semf":[0,467],"ifm":[0,468],"itp":[0,469],"iif":[0,470],"ipk":[0,471],"twd":[0,472],"twds":[0,472],"mmf":[0,473,0,474],"teacher":[0,475],"sdkm":[0,476],"sdkd":[0,476],"dxp":[0,477],"sfs":[0,478],"sdc":[0,479],"sda":[0,480],"sdd":[0,131],"smf":[0,481],"sdw":[0,482,0,483],"vor":[0,482,0,483],"sgl":[0,483,0,482],"smzip":[0,484],"sm":[0,485],"sxc":[0,486],"stc":[0,487],"sxd":[0,488],"std":[0,489],"sxi":[0,490],"sti":[0,491],"sxm":[0,492],"sxw":[0,493],"sxg":[0,494],"stw":[0,495],"sus":[0,496],"susp":[0,496],"svd":[0,497],"sis":[0,498],"sisx":[0,498,6,0],"xsm":[0,499],"bdm":[0,500,7,0],"xdm":[0,501],"tao":[0,502],"pcap":[0,503,0,504,0,505],"cap":[0,503,0,504,0,505],"dmp":[0,503,0,504,0,505],"tmo":[0,506],"tpt":[0,507],"mxs":[0,508],"tra":[0,509],"ufd":[0,510],"ufdl":[0,510],"utz":[0,511],"umj":[0,512],"unityweb":[0,513],"uoml":[0,514],"vcx":[0,515],"vsd":[0,516],"vst":[0,516,4,3,0,517,0,518,0,519,4,4,4,5,4,6,4,7],"vss":[0,516],"vsw":[0,516],"vis":[0,520],"vsf":[0,521],"wbxml":[0,522],"wmlc":[0,523],"wmlsc":[0,524],"wtb":[0,525],"nbp":[0,526],"wpd":[0,527,0,528,0,529],"wqd":[0,530],"stf":[0,531],"xar":[0,532,0,76],"xfdl":[0,533],"hvd":[0,534],"hvs":[0,535],"hvp":[0,536],"osf":[0,537],"osfpvg":[0,538],"saf":[0,539],"spf":[0,540],"cmp":[0,541],"zir":[0,542],"zirz":[0,542],"zaz":[0,543],"vxml":[0,544],"wgt":[0,545],"hlp":[0,546,1,4],"wsdl":[0,547],"wspolicy":[0,548],"7z":[0,549],"abw":[0,550],"ace":[0,551,0,552],"dmg":[0,553],"aab":[0,554],"x32":[0,554],"u32":[0,554],"vox":[0,554],"aam":[0,555],"aas":[0,556],"bcpio":[0,557],"torrent":[0,558],"blb":[0,559],"blorb":[0,559],"bz":[0,560,0,561,0,562],"bz2":[0,561,0,560,0,562],"boz":[0,561],"cbr":[0,563,0,564],"cba":[0,563],"cbt":[0,563,0,565],"cbz":[0,563,0,566,0,567],"cb7":[0,563,0,568],"vcd":[0,569],"cfs":[0,570],"chat":[0,571],"pgn":[0,572,0,573],"nsc":[0,574,0,575],"cpio":[0,576],"csh":[0,577],"deb":[0,578,0,579,0,580],"udeb":[0,578,0,579,0,580],"dgc":[0,581],"dir":[0,582],"dcr":[0,582,4,8],"dxr":[0,582],"cst":[0,582],"cct":[0,582],"cxt":[0,582],"w3d":[0,582],"fgd":[0,582],"swa":[0,582],"wad":[0,583,0,584,0,585],"ncx":[0,586],"dtb":[0,587,3,12],"res":[0,588,0,589],"dvi":[0,590],"evy":[0,591],"eva":[0,592],"bdf":[0,593],"gsf":[0,594,0,595],"psf":[0,596,2,9],"pcf":[0,597,0,598],"snf":[0,599],"pfa":[0,595],"pfb":[0,595],"pfm":[0,595],"afm":[0,595,0,600],"arc":[0,601],"spl":[0,602,0,603,0,604,0,605],"gca":[0,606],"ulx":[0,607],"gnumeric":[0,608],"gramps":[0,609],"gtar":[0,610,0,611],"hdf":[0,612],"install":[0,613],"iso":[0,614,0,615,0,616,0,617,0,618,0,619,0,620,0,621,0,622,0,623,0,624,0,625],"jnlp":[0,626],"latex":[0,627,3,13,0,628],"lzh":[0,629,0,630],"lha":[0,629,0,630],"mie":[0,631],"prc":[0,632,0,442,0,444],"mobi":[0,632],"application":[0,633],"lnk":[0,634],"wmd":[0,635],"wmz":[0,636,0,637],"xbap":[0,638],"mdb":[0,639,0,640,0,641,0,642,0,643,0,644,1,5],"obd":[0,645],"crd":[0,646],"clp":[0,647],"exe":[0,648,0,649],"dll":[0,648],"com":[0,648],"bat":[0,648],"msi":[0,648,0,650],"mvb":[0,651],"m13":[0,651],"m14":[0,651],"wmf":[0,637,4,9,4,10,4,11,0,652,0,653],"emf":[0,637,4,12,4,13,0,654,0,655],"emz":[0,637],"mny":[0,656],"pub":[0,657,0,658],"scd":[0,659],"trm":[0,660],"wri":[0,661],"nc":[0,662],"cdf":[0,662],"nzb":[0,663],"p12":[0,664,0,665],"pfx":[0,664,0,665],"p7b":[0,666],"spc":[0,666],"p7r":[0,667],"rar":[0,668,0,669,0,670],"ris":[0,671],"sh":[0,672,0,673,3,14],"shar":[0,674],"swf":[0,604,0,603,0,605],"xap":[0,675],"sql":[0,676,0,677,3,15],"sit":[0,678,0,679,0,680],"sitx":[0,681],"srt":[0,682,0,683],"sv4cpio":[0,684],"sv4crc":[0,685],"t3":[0,686],"gam":[0,687],"tar":[0,611,0,610],"tcl":[0,688,3,16,3,17],"tex":[0,628,3,13],"tfm":[0,689],"texinfo":[0,690,3,18],"texi":[0,690,3,18],"obj":[0,691,5,3],"ustar":[0,692],"src":[0,693],"der":[0,694],"crt":[0,694],"fig":[0,695,4,14],"xlf":[0,696,0,697,0,698],"xpi":[0,699],"xz":[0,700],"z1":[0,701],"z2":[0,701],"z3":[0,701],"z4":[0,701],"z5":[0,701],"z6":[0,701],"z7":[0,701],"z8":[0,701],"xaml":[0,702],"xdf":[0,703],"xenc":[0,704],"xhtml":[0,705],"xht":[0,705],"xml":[0,706,3,19],"xsl":[0,706,0,707],"dtd":[0,708,3,20],"xop":[0,709],"xpl":[0,710],"xslt":[0,707],"xspf":[0,711,0,712],"mxml":[0,713],"xhvml":[0,713],"xvml":[0,713],"xvm":[0,713],"yang":[0,714],"yin":[0,715],"zip":[0,716,0,717,0,718],"adp":[2,10],"au":[2,11],"snd":[2,11],"mid":[2,12,2,13],"midi":[2,12,2,13],"kar":[2,12,2,13],"rmi":[2,12],"m4a":[2,14,2,15,2,16],"mp4a":[2,14],"mpga":[2,17,2,18,2,19,2,20,2,21],"mp2":[2,17,2,22,2,23,7,1,7,2,7,3,7,4,7,5],"mp2a":[2,17],"mp3":[2,17,2,18,2,19,2,20,2,21],"m2a":[2,17],"m3a":[2,17],"oga":[2,24,2,25,2,26,2,27,2,28,2,29,2,30,2,31],"ogg":[2,24,7,6,7,7,7,8,7,9,2,25,2,26,2,27,2,28,2,29,2,30,2,31],"spx":[2,24,0,719,2,32,2,31],"opus":[2,24,2,33,2,30],"s3m":[2,34,2,35],"sil":[2,36],"uva":[2,37],"uvva":[2,37],"eol":[2,38],"dra":[2,39],"dts":[2,40,2,41,3,21],"dtshd":[2,42,2,43],"lvp":[2,44],"pya":[2,45],"ecelp4800":[2,46],"ecelp7470":[2,47],"ecelp9600":[2,48],"rip":[2,49],"weba":[2,50],"aac":[2,51,2,52],"aif":[2,53],"aiff":[2,53],"aifc":[2,53,2,54,2,55],"caf":[2,56],"flac":[2,57,2,58],"mka":[2,59],"m3u":[2,3,0,173,2,4,0,174,2,5,2,6,2,7],"wax":[2,60,2,61,7,10,7,11,7,12,0,720],"wma":[2,62,2,63],"ram":[2,64,0,721],"ra":[2,64,2,65,2,66],"rmp":[2,67],"wav":[2,68,2,69,2,70],"xm":[2,71,2,72],"cdx":[8,0],"cif":[8,1],"cmdf":[8,2],"cml":[8,3],"csml":[8,4],"xyz":[8,5],"ttc":[9,0],"otf":[9,1,0,414,0,722],"ttf":[9,2,0,723],"woff":[9,3,0,724],"woff2":[9,4],"bmp":[4,15,4,16,4,17],"cgm":[4,18],"g3":[4,19,4,20],"gif":[4,21],"ief":[4,22],"jpeg":[4,23,4,24],"jpg":[4,23,4,24],"jpe":[4,23,4,24],"ktx":[4,25],"png":[4,26],"btif":[4,27],"sgi":[4,28,4,29],"svg":[4,30],"svgz":[4,30,4,31],"tiff":[4,32],"tif":[4,32],"psd":[4,33,4,34,4,35,4,36,4,37,0,725,0,726],"uvi":[4,38],"uvvi":[4,38],"uvg":[4,38],"uvvg":[4,38],"djvu":[4,39,4,40,4,41,4,42],"djv":[4,39,4,40,4,41,4,42],"sub":[4,43,3,22,3,23,3,24,3,25],"dwg":[4,44],"dxf":[4,45],"fbs":[4,46],"fpx":[4,47],"fst":[4,48],"mmr":[4,49],"rlc":[4,50],"mdi":[4,51],"wdp":[4,52],"npx":[4,53],"wbmp":[4,54],"xif":[4,55],"webp":[4,56],"3ds":[4,57,0,727],"ras":[4,58],"cmx":[4,59],"fh":[4,60],"fhc":[4,60],"fh4":[4,60],"fh5":[4,60],"fh7":[4,60],"ico":[4,61,4,62,0,728,4,63,4,64,4,65,3,26],"sid":[4,66,2,73],"pcx":[4,67,4,68],"pic":[4,69],"pct":[4,69],"pnm":[4,70],"pbm":[4,71],"pgm":[4,72],"ppm":[4,73],"rgb":[4,74],"tga":[4,3,0,517,0,518,0,519,4,4,4,5,4,6,4,7],"xbm":[4,75],"xpm":[4,76,4,77],"xwd":[4,78],"eml":[10,0],"mime":[10,0],"igs":[5,4],"iges":[5,4],"msh":[5,5],"mesh":[5,5],"silo":[5,5],"dae":[5,6],"dwf":[5,7],"gdl":[5,8],"gtw":[5,9],"mts":[5,10,7,0],"vtu":[5,11],"wrl":[5,12],"vrml":[5,12],"x3db":[5,13],"x3dbz":[5,13],"x3dv":[5,14],"x3dvz":[5,14],"x3d":[5,15],"x3dz":[5,15],"appcache":[3,27],"ics":[3,28,3,29,0,729],"ifb":[3,28],"css":[3,30],"csv":[3,31,3,32,3,33],"html":[3,34,0,705],"htm":[3,34,0,705],"js":[3,35,0,730,0,731],"mjs":[3,35,0,730,0,731],"n3":[3,36],"txt":[3,1],"text":[3,1],"conf":[3,1],"def":[3,1],"list":[3,1],"log":[3,1,3,37],"in":[3,1],"dsc":[3,38],"rtx":[3,39],"sgml":[3,40],"sgm":[3,40],"tsv":[3,41],"t":[3,42,0,732,3,43,0,733,3,44],"tr":[3,42,0,732,3,43],"roff":[3,42,0,732,3,43],"man":[3,42,0,734],"me":[3,42,3,45],"ms":[3,42,3,46],"ttl":[3,47],"uri":[3,48],"uris":[3,48],"urls":[3,48],"vcard":[3,49,3,50,3,51],"curl":[3,52],"dcurl":[3,53],"mcurl":[3,54],"scurl":[3,55],"fly":[3,56],"flx":[3,57],"gv":[3,0],"3dml":[3,58],"spot":[3,59],"jad":[3,60],"wml":[3,61],"wmls":[3,62],"s":[3,63],"asm":[3,63],"c":[3,64,3,65],"cc":[3,64,3,66],"cxx":[3,64,3,66],"cpp":[3,64,3,66],"h":[3,64,3,67],"hh":[3,64,3,68],"dic":[3,64],"f":[3,69],"for":[3,69],"f77":[3,69],"f90":[3,69],"java":[3,70,3,71],"nfo":[3,72],"opml":[3,73,3,74],"p":[3,75],"pas":[3,75],"etx":[3,76],"sfv":[3,77],"uu":[3,78],"vcs":[3,29,3,28,0,729],"vcf":[3,51,3,49,3,50],"3gp":[7,13,7,14,2,74,7,15,2,75,2,76,2,77,2,78,2,79],"3g2":[7,16,2,80],"h261":[7,17],"h263":[7,18],"h264":[7,19],"jpgv":[7,20],"jpm":[7,21,4,79],"jpgm":[7,21,4,79],"mj2":[7,22],"mjp2":[7,22],"mp4":[7,23,7,24,7,25],"mp4v":[7,23],"mpg4":[7,23],"mpeg":[7,1,7,2,7,3,7,4,7,5],"mpg":[7,1,7,2,7,3,7,4,7,5],"mpe":[7,1,7,2,7,3,7,4,7,5],"m1v":[7,1],"m2v":[7,1],"ogv":[7,8,7,9],"qt":[7,26],"mov":[7,26],"uvh":[7,27],"uvvh":[7,27],"uvm":[7,28],"uvvm":[7,28],"uvp":[7,29],"uvvp":[7,29],"uvs":[7,30],"uvvs":[7,30],"uvv":[7,31],"uvvv":[7,31],"dvb":[7,32],"fvt":[7,33],"mxu":[7,34,7,35],"m4u":[7,34,7,35],"pyv":[7,36],"uvu":[7,37],"uvvu":[7,37],"viv":[7,38,7,39],"webm":[7,40],"f4v":[7,41,7,23,7,24,7,25],"fli":[7,42,7,43,7,44],"flv":[7,45,0,735,11,0,7,46],"m4v":[7,25,7,23,7,24],"mkv":[7,47],"mk3d":[7,47,7,48],"mks":[7,47],"mng":[7,49],"asf":[7,50,0,736,7,51,7,52],"asx":[7,50,2,61,7,10,7,11,7,12,0,720],"vob":[7,53,7,1,7,2,7,3,7,4,7,5],"wm":[7,51],"wmv":[7,54],"wmx":[7,12,2,61,7,10,7,11,0,720],"wvx":[7,10,2,61,7,11,7,12,0,720],"avi":[7,55,7,56,7,57,7,58,7,59,7,60],"movie":[7,61],"smv":[7,62],"a26":[0,737],"a78":[0,738],"lnx":[0,739],"azw3":[0,740,0,741],"kfx":[0,740,0,741],"mml":[0,60,3,79],"wkdownload":[0,742],"crdownload":[0,742],"part":[0,742],"wwf":[0,743,0,744],"themepack":[0,745],"amz":[2,81],"gsm":[2,82],"pla":[2,83],"gpg":[0,89,0,90,0,91,0,92],"skr":[0,92],"pkr":[0,92],"key":[0,746,0,747,0,92],"p8e":[0,748],"raml":[0,749],"siv":[0,750],"sml":[0,135,0,137],"kino":[0,135,0,137],"sqlite2":[0,751],"sqlite3":[0,752,0,753],"ged":[0,754,3,80],"gedcom":[0,754,3,80],"fxm":[7,63],"sgf":[0,755],"tres":[0,589],"scn":[0,756],"tscn":[0,756],"escn":[0,756],"gdshader":[0,757],"gd":[0,758],"xliff":[0,697,0,698],"toml":[0,759],"yaml":[0,760,3,81,3,82],"yml":[0,760,3,81,3,82],"cdr":[0,761,0,762,0,763,0,764,0,765,4,80,4,81,1,6],"wk1":[0,0,0,1,0,2,0,3,0,4,1,0],"wk3":[0,0,0,1,0,2,0,3,0,4,1,0],"wk4":[0,0,0,1,0,2,0,3,0,4,1,0],"xll":[0,351,0,352,0,353,1,3],"xld":[0,351,0,352,0,353,1,3],"ppz":[0,370,0,371,0,372,0,373],"vsdx":[0,766],"vstx":[0,767],"vssx":[0,768],"vsdm":[0,769],"vstm":[0,770],"vssm":[0,771],"xlr":[0,389],"gnd":[0,772],"tnef":[0,773,0,774],"tnf":[0,773,0,774],"sds":[0,775],"smd":[0,776,0,777],"fodt":[0,778],"fodg":[0,779],"fodp":[0,780],"fods":[0,781],"wp":[0,527,0,528,0,529],"wp4":[0,527,0,528,0,529],"wp5":[0,527,0,528,0,529],"wp6":[0,527,0,528,0,529],"wpp":[0,527,0,528,0,529],"yt":[7,64,0,782],"por":[0,783],"sav":[0,784,0,785],"zsav":[0,784,0,785],"xbel":[0,786],"7z.001":[0,549],"abw.CRASHED":[0,550],"abw.gz":[0,550],"zabw":[0,550],"cue":[0,787],"sam":[0,788],"pdc":[0,443],"as":[0,789],"a":[0,790],"ar":[0,790],"arj":[0,791],"asar":[0,792],"asp":[0,793],"awk":[0,794],"blend":[0,795],"BLEND":[0,795],"blender":[0,795],"dvi.bz2":[0,796],"tar.bz2":[0,797],"tar.bz":[0,797],"tbz2":[0,797],"tbz":[0,797],"tb2":[0,797],"pdf.bz2":[0,798],"ps.bz2":[0,799],"lrz":[0,800],"tar.lrz":[0,801],"tlrz":[0,801],"raw-disk-image":[0,802],"img":[0,802],"fd":[0,803,0,804],"qd":[0,803,0,804],"raw-disk-image.xz":[0,805],"img.xz":[0,805],"iso9660":[0,625,0,614],"cso":[0,806],"appimage":[0,807,0,808],"toc":[0,809],"gdi":[0,810],"cdi":[0,811],"Z":[0,812],"tar.gz":[0,813],"tgz":[0,813],"cpio.gz":[0,814],"dbf":[0,815,0,816,0,817,0,818],"es":[0,25,3,83],"chd":[0,819],"nds":[0,820],"cci":[0,727],"3dsx":[0,821],"pce":[0,822],"m7":[0,823],"k7":[0,824],"hfe":[0,825,0,826],"sap":[0,827,0,828],"ui":[0,829,0,830],"ksy":[3,84],"qml":[3,85],"qmltypes":[3,85],"qmlproject":[3,85],"desktop":[0,831,0,832],"kdelnk":[0,831,0,832],"fb2":[0,833,0,834],"fb2.zip":[0,835],"dia":[0,836],"shape":[0,837],"etheme":[0,838],"egon":[0,839],"fl":[0,840],"psf.gz":[0,841],"pcf.Z":[0,597],"pcf.gz":[0,597],"spd":[0,842],"ttx":[0,843],"gb":[0,844],"sgb":[0,844],"gbc":[0,845],"cgb":[0,845],"gba":[0,846],"agb":[0,846],"vb":[0,847],"gen":[0,777],"sgd":[0,777],"32x":[0,848],"mdx":[0,848],"gmo":[0,849],"mo":[3,86,0,849],"glade":[0,850],"gnucash":[0,851],"gnc":[0,851],"xac":[0,851],"gp":[0,852],"gplt":[0,852],"gnuplot":[0,852],"gra":[0,853],"dvi.gz":[0,854],"gz":[0,855,0,856],"pdf.gz":[0,857],"ps.gz":[0,858],"hdf4":[0,612],"h4":[0,612],"hdf5":[0,612],"h5":[0,612],"groovy":[3,87],"gvy":[3,87],"gy":[3,87],"gsh":[3,87],"gradle":[3,88],"jks":[0,859],"ks":[0,859],"jceks":[0,860],"pack":[0,861],"jsm":[3,35,0,730,0,731],"jrd":[0,862],"json-patch":[0,863],"jsonld":[0,864],"ipynb":[0,865],"coffee":[0,866],"jpr":[0,867],"jpx":[0,867,4,82],"kexic":[0,868],"kexis":[0,869],"kexi":[0,870,0,871,0,872,0,873],"kil":[0,874],"kpm":[0,875],"kra":[0,876],"krz":[0,876],"kud":[0,877],"lhz":[0,878],"ts":[3,89,0,879,3,90,7,0],"lyx":[0,880,3,91],"lz4":[0,881],"tar.lz4":[0,882],"lz":[0,883],"tar.lz":[0,884],"pdf.lz":[0,885],"lzma":[0,886],"tar.lzma":[0,887],"tlz":[0,887],"lzo":[0,888],"qp":[0,889],"zz":[0,890],"mhtml":[0,891],"mht":[0,891],"ocl":[3,92],"cbl":[3,93],"cob":[3,93],"url":[0,892],"msx":[0,893],"m4":[0,894],"n64":[0,895],"z64":[0,895],"v64":[0,895],"ngp":[0,896],"ngc":[0,897],"nes":[0,898],"nez":[0,898],"unf":[0,898],"unif":[0,898],"o":[0,899],"mod":[0,899,2,0],"anx":[0,900,0,901],"axv":[7,65,7,66],"axa":[2,84,2,85],"ogm":[7,67,7,68],"oleo":[0,902],"pak":[0,903],"PAR2":[0,904],"par2":[0,904],"pl":[0,733,3,44],"PL":[0,733,3,44],"pm":[0,905,0,733,3,44],"al":[0,733,3,44],"perl":[0,733,3,44],"pod":[0,733,3,44],"php":[0,906],"php3":[0,906],"php4":[0,906],"php5":[0,906],"phps":[0,906],"pln":[0,907],"psw":[0,908],"pw":[0,909],"pyc":[0,910],"pyo":[0,910],"qti":[0,911],"qti.gz":[0,911],"wb1":[0,912],"wb2":[0,912],"wb3":[0,912],"qtl":[0,913,0,914],"qif":[0,915,4,83],"dar":[0,916],"alz":[0,917],"rej":[3,94,0,918],"rpm":[0,919,0,920],"src.rpm":[0,921],"spm":[0,921],"rb":[0,922],"mab":[0,923],"cr":[3,95,3,96],"la":[0,924],"shn":[0,925,2,86],"siag":[0,926],"sk":[4,84],"sk1":[4,84],"sg":[0,927],"sms":[0,928],"gg":[0,929],"sfc":[0,930,0,931],"smc":[0,930,0,931],"vtt":[3,97],"sami":[0,136],"mpl":[3,98,7,0],"ssa":[3,99],"ass":[3,99,2,52,2,51],"imy":[3,100,2,87,2,88],"ime":[3,100,2,87,2,88],"smaf":[0,473,0,474],"mrml":[3,101],"mrl":[3,101],"xmf":[2,89,2,90],"mxmf":[2,91,2,92],"gem":[0,611,0,610],"tar.Z":[0,932],"taz":[0,932],"gf":[0,933],"pk":[0,934],"theme":[0,935],"bak":[0,936],"old":[0,936],"sik":[0,936],"tar.lzo":[0,937],"tzo":[0,937],"tar.xz":[0,938],"txz":[0,938],"zst":[0,939],"tar.zst":[0,940],"tzst":[0,940],"pdf.xz":[0,941],"wpg":[0,942],"ws":[0,943],"wsc":[0,944],"cert":[0,694],"pem":[0,694],"zoo":[0,945],"zipx":[0,716,0,717,0,718],"wim":[0,946],"swm":[0,946],"ac3":[2,93],"amr":[2,94,2,95],"awb":[2,96,2,97],"psid":[2,73],"aiffc":[2,54,2,55],"ape":[2,98],"aa":[2,99,2,100],"aax":[2,101],"dff":[2,102,2,103],"dsf":[2,104,2,105,2,106,2,107],"it":[2,108],"tak":[2,109],"wv":[2,110],"wvp":[2,110],"wvc":[2,111],"mo3":[2,112],"adts":[2,52,2,51],"loas":[2,113],"xhe":[2,113],"f4a":[2,14,2,15,2,16],"m4r":[2,114],"lrv":[7,23,7,24,7,25],"m4b":[2,115],"f4b":[2,115],"3gpp":[7,13,7,14,2,74,7,15,2,75,2,76,2,77,2,78,2,79],"3ga":[7,13,7,14,2,74,7,15,2,75,2,76,2,77,2,78,2,79],"3gp2":[7,16,2,80],"3gpp2":[7,16,2,80],"ult":[2,0],"uni":[2,0],"m15":[2,0],"mtm":[2,0],"med":[2,0],"vlc":[2,3,2,4,0,174,2,5,2,6,2,7],"minipsf":[2,116],"psflib":[2,117],"mp+":[2,8],"rax":[2,65,2,64,2,66],"rv":[7,69,7,70],"rvx":[7,69,7,70],"rmj":[0,294,0,295],"rmm":[0,294,0,295],"rmx":[0,294,0,295],"rp":[4,85],"rt":[3,102],"stm":[2,118],"voc":[2,119],"xi":[2,120],"tta":[2,121,2,122],"dib":[4,15,4,16,4,17],"heic":[4,86,4,87,4,88,4,89],"heif":[4,86,4,87,4,88,4,89],"hif":[4,86,4,87,4,88,4,89],"mjpeg":[7,71],"mjpg":[7,71],"j2c":[4,90],"j2k":[4,90],"jpc":[4,90],"jp2":[4,91,4,92,4,93,4,94],"jpg2":[4,91,4,92,4,93,4,94],"jpf":[4,82],"jxl":[4,95],"ora":[4,96],"dds":[4,97],"exr":[4,98],"pict":[4,69],"pict1":[4,69],"pict2":[4,69],"ufraw":[0,947],"dng":[4,99],"crw":[4,100],"cr2":[4,101],"cr3":[4,102],"raf":[4,103],"k25":[4,104],"kdc":[4,105],"mrw":[4,106],"nef":[4,107],"nrw":[4,108],"orf":[4,109],"raw":[4,110,4,111],"rw2":[4,112,4,113],"pef":[4,114],"x3f":[4,115],"srf":[4,116],"sr2":[4,117],"arw":[4,118],"rle":[4,119],"svg.gz":[4,31],"ag":[4,120],"eps.bz2":[4,121],"epsi.bz2":[4,121],"epsf.bz2":[4,121],"xcf.gz":[4,122],"xcf.bz2":[4,122],"dcm":[0,948],"docbook":[0,21,0,20,0,22],"epsi":[4,1],"epsf":[4,1],"fits":[0,949,4,123,4,124],"fit":[0,949,4,123,4,124],"fts":[0,949,4,123,4,124],"eps.gz":[4,125],"epsi.gz":[4,125],"epsf.gz":[4,125],"icns":[4,126],"iff":[4,127,4,128],"ilbm":[4,127,4,128],"lbm":[4,127,4,128],"jng":[4,129],"lwo":[4,130],"lwob":[4,130],"lws":[4,131],"pntg":[4,132],"msod":[4,133],"pcd":[4,134],"sun":[4,135],"icb":[4,3,0,517,0,518,0,519,4,4,4,5,4,6,4,7],"tpic":[4,3,0,517,0,518,0,519,4,4,4,5,4,6,4,7],"vda":[4,3,0,517,0,518,0,519,4,4,4,5,4,6,4,7],"cur":[4,136],"ani":[0,950],"xcf":[4,137],"gih":[4,138],"pat":[4,139],"glb":[5,16],"gltf":[5,17],"vrm":[5,12],"mtl":[5,18],"vct":[3,49,3,50,3,51],"gcrd":[3,49,3,50,3,51],"t2t":[3,103],"v":[3,104],"svh":[3,105],"sv":[3,106],"vhd":[3,107,0,951,0,952],"vhdl":[3,107],"rdfs":[0,110,3,2],"owl":[0,110,3,2],"rst":[3,108],"owx":[0,953],"sylk":[3,109],"slk":[3,109],"mc2":[3,110],"adb":[3,111],"ads":[3,111],"bib":[3,112],"hp":[3,68],"hpp":[3,68],"h++":[3,68],"hxx":[3,68],"C":[3,66],"c++":[3,66],"cmake":[3,113],"asd":[3,114],"fasl":[3,114],"lisp":[3,114],"ros":[3,114],"csvs":[3,115],"cs":[3,116],"vala":[3,117],"vapi":[3,117],"ooc":[3,118],"dcl":[3,119],"dsl":[3,120],"d":[3,121],"di":[3,121],"e":[3,122],"eif":[3,122],"el":[3,123],"ex":[3,124],"exs":[3,124],"erl":[3,125],"f95":[3,69],"gs":[3,126],"po":[3,127,3,128,0,954],"feature":[3,129],"manifest":[3,27],"gvp":[3,130,3,131],"hs":[3,132],"idl":[3,133],"ldif":[3,134],"ly":[3,135],"lhs":[3,136],"mk":[3,137],"mak":[3,137],"md":[3,138,3,139],"mkd":[3,138,3,139],"markdown":[3,138,3,139],"moc":[3,140],"reg":[3,141],"mof":[3,142],"mup":[3,143],"not":[3,143],"m":[3,144,3,145,3,146],"mm":[3,147,3,148],"ml":[3,149],"mli":[3,149],"cl":[3,150],"diff":[3,151,3,152],"patch":[3,151,3,152],"go":[3,153],"py":[3,154,3,155],"py3":[3,155],"py3x":[3,155],"pyi":[3,155],"pyx":[3,154],"wsgi":[3,154],"sage":[3,156],"lua":[3,157],"spec":[3,158],"sass":[3,159],"scala":[3,7],"ss":[3,9],"scss":[3,160],"tk":[3,16,3,17],"ltx":[3,13,0,628],"sty":[3,13,0,628],"cls":[3,13,0,628],"dtx":[3,13,0,628],"ins":[3,13,0,628],"twig":[3,161],"uil":[3,162],"uue":[3,78,1,7],"vbs":[3,163,3,164],"xmi":[3,165],"fo":[3,166],"xslfo":[3,166],"iptables":[3,167],"service":[3,168,3,169],"automount":[3,169],"device":[3,169],"mount":[3,169],"path":[3,169],"scope":[3,169],"slice":[3,169],"socket":[3,169],"swap":[3,169],"target":[3,169],"timer":[3,169],"xbl":[0,706,3,19],"xsd":[0,706,3,19],"rng":[0,706,3,19],"ent":[0,955,3,170],"dv":[7,72],"m2t":[7,0],"m2ts":[7,0],"cpi":[7,0],"clpi":[7,0],"mpls":[7,0],"bdmv":[7,0],"m1u":[7,34,7,35],"moov":[7,26],"qtvr":[7,26],"qtif":[4,83],"ktx2":[4,140],"astc":[4,141],"vivo":[7,38,7,39],"flc":[7,43,7,44,7,42],"hwp":[0,956,0,957],"hwt":[0,958,0,959],"avf":[7,55,7,56,7,57,7,58,7,59,7,60],"divx":[7,55,7,56,7,57,7,58,7,59,7,60],"nsv":[7,73],"emp":[0,960],"geojson":[0,961,0,962],"geo.json":[0,961,0,962],"ica":[0,963],"it87":[0,964],"ccmx":[0,965],"bsdiff":[0,966],"trig":[0,967,0,968],"numbers":[0,969,0,970],"pages":[0,971,0,972],"pkpass":[0,973],"p65":[0,905],"pm6":[0,905],"pmd":[0,905],"adf":[0,974],"flatpak":[0,975,0,976],"xdgapp":[0,975,0,976],"flatpakrepo":[0,977],"flatpakref":[0,978],"sqsh":[0,979],"snap":[0,980],"3mf":[5,19,0,981],"gcode":[3,171],"gx":[3,172],"fds":[0,982],"ova":[0,983,0,984],"qed":[0,985],"qcow2":[0,986],"qcow":[0,986],"vpc":[0,951,0,952],"vhdx":[0,987,0,988],"vmdk":[0,989,0,990],"vdi":[0,991,0,992],"cwk":[0,993],"bps":[0,994],"ips":[0,995],"pysu":[0,996],"pys":[0,997],"kt":[3,173],"dtsi":[3,21],"avif":[4,142,4,143],"avifs":[4,142,4,143],"bik":[7,74],"bk2":[7,74],"smk":[7,75],"zim":[0,998],"qs":[0,138]} as const

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
    "application/font-tdpfr"
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
    "application/x-java-archive",
    "application/x-jar"
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
    "image/x-gimp-gbr"
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
    "application/x-bzip",
    "application/x-bzip2",
    "application/bzip2"
  ],
  "bz2": [
    "application/x-bzip2",
    "application/x-bzip",
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
    "zz-application/zz-winassoc-mdb"
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
    "application/x-msdownload"
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
    "application/x-stuffitx"
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
    "audio/wav",
    "audio/vnd.wave"
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
    "image/png"
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
    "image/vnd.ms-photo"
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
    "application/x-gedcom",
    "text/gedcom"
  ],
  "gedcom": [
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
    "application/x-yaml",
    "text/yaml",
    "text/x-yaml"
  ],
  "yml": [
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
  "tar.bz2": [
    "application/x-bzip-compressed-tar"
  ],
  "tar.bz": [
    "application/x-bzip-compressed-tar"
  ],
  "tbz2": [
    "application/x-bzip-compressed-tar"
  ],
  "tbz": [
    "application/x-bzip-compressed-tar"
  ],
  "tb2": [
    "application/x-bzip-compressed-tar"
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
    "application/x-raw-disk-image"
  ],
  "img": [
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
    "application/x-dbf",
    "application/x-dbase",
    "application/dbf",
    "application/dbase"
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
  "la": [
    "application/x-shared-library-la"
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
  "rle": [
    "image/rle"
  ],
  "svg.gz": [
    "image/svg+xml-compressed"
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
    "video/x-msvideo",
    "video/x-avi",
    "video/avi",
    "video/divx",
    "video/msvideo",
    "video/vnd.divx"
  ],
  "divx": [
    "video/x-msvideo",
    "video/x-avi",
    "video/avi",
    "video/divx",
    "video/msvideo",
    "video/vnd.divx"
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
  ]
}
