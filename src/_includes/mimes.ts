/* eslint-disable max-len */

export const _MIME_TYPES = ["application","zz-application","audio","text","image","model","chemical","x-epoc","video","font","message","flv-application","multipart"] as const

export const _MIME_NAMES = [["vnd.lotus-1-2-3","x-lotus123","x-123","lotus123","wk1","x-t602","andrew-inset","applixware","x-applix-word","atom+xml","atomcat+xml","atomsvc+xml","ccxml+xml","cdmi-capability","cdmi-container","cdmi-domain","cdmi-object","cdmi-queue","cu-seeme","davmount+xml","docbook+xml","x-docbook+xml","vnd.oasis.docbook+xml","dssc+der","dssc+xml","ecmascript","emma+xml","epub+zip","exi","font-tdpfr","vnd.truedoc","gml+xml","gpx+xml","gpx","x-gpx+xml","x-gpx","gxf","hyperstudio","inkml+xml","ipfix","java-archive","x-jar","x-java-archive","java-serialized-object","java-vm","x-java","java","java-byte-code","x-java-class","x-java-vm","json","schema+json","jsonml+json","lost+xml","mac-binhex40","mac-compactpro","mads+xml","marc","marcxml+xml","mathematica","x-mathematica","mathml+xml","mbox","mediaservercontrol+xml","metalink+xml","metalink4+xml","mets+xml","mods+xml","mp21","mp4","msword","vnd.ms-word","x-msword","msword-template","mxf","octet-stream","x-sony-bbeb","x-sharedlib","x-xar","oda","oebps-package+xml","ogg","x-ogg","omdoc+xml","onenote","oxps","patch-ops-error+xml","pdf","x-pdf","acrobat","nappdf","pgp-encrypted","pgp","pgp-signature","pgp-keys","pics-rules","pkcs10","pkcs7-mime","pkcs7-signature","pkcs8","pkix-attr-cert","pkix-cert","pkix-crl","pkix-pkipath","pkixcmp","pls+xml","pls","postscript","illustrator","vnd.adobe.illustrator","prs.cww","pskc+xml","rdf+xml","reginfo+xml","relax-ng-compact-syntax","x-rnc","resource-lists+xml","resource-lists-diff+xml","rls-services+xml","rpki-ghostbusters","vnd.gerber","x-gerber","rpki-manifest","rpki-roa","rsd+xml","rss+xml","rtf","sbml+xml","scvp-cv-request","scvp-cv-response","scvp-vp-request","scvp-vp-response","sdp","vnd.stardivision.impress-packed","x-sdp","vnd.sdp","set-payment-initiation","set-registration-initiation","shf+xml","smil+xml","x-sami","smil","sparql-query","sparql-results+xml","srgs","srgs+xml","sru+xml","ssdl+xml","ssml+xml","tei+xml","thraud+xml","timestamped-data","vnd.3gpp.pic-bw-large","vnd.3gpp.pic-bw-small","vnd.3gpp.pic-bw-var","vnd.3gpp2.tcap","vnd.3m.post-it-notes","vnd.accpac.simply.aso","vnd.accpac.simply.imp","vnd.acucobol","vnd.acucorp","vnd.adobe.air-application-installer-package+zip","vnd.adobe.formscentral.fcdt","vnd.adobe.fxp","vnd.adobe.xdp+xml","vnd.adobe.xfdf","vnd.ahead.space","vnd.airzip.filesecure.azf","vnd.airzip.filesecure.azs","vnd.amazon.ebook","vnd.americandynamics.acc","vnd.amiga.ami","vnd.android.package-archive","vnd.anser-web-certificate-issue-initiation","vnd.anser-web-funds-transfer-initiation","vnd.antix.game-component","vnd.apple.installer+xml","vnd.apple.mpegurl","m3u","vnd.aristanetworks.swi","vnd.astraea-software.iota","vnd.audiograph","vnd.blueice.multipass","vnd.bmi","vnd.businessobjects","vnd.chemdraw+xml","vnd.chipnuts.karaoke-mmd","vnd.cinderella","vnd.claymore","vnd.cloanto.rp9","vnd.clonk.c4group","vnd.cluetrust.cartomobile-config","vnd.cluetrust.cartomobile-config-pkg","vnd.commonspace","vnd.contact.cmsg","vnd.cosmocaller","vnd.crick.clicker","vnd.crick.clicker.keyboard","vnd.crick.clicker.palette","vnd.crick.clicker.template","vnd.crick.clicker.wordbank","vnd.criticaltools.wbs+xml","vnd.ctc-posml","vnd.cups-ppd","vnd.curl.car","vnd.curl.pcurl","vnd.dart","vnd.data-vision.rdz","vnd.dece.data","vnd.dece.ttml+xml","vnd.dece.unspecified","vnd.dece.zip","vnd.denovo.fcselayout-link","vnd.dna","vnd.dolby.mlp","vnd.dpgraph","vnd.dreamfactory","vnd.ds-keypoint","vnd.dvb.ait","vnd.dvb.service","vnd.dynageo","vnd.ecowin.chart","vnd.enliven","vnd.epson.esf","vnd.epson.msf","vnd.epson.quickanime","vnd.epson.salt","vnd.epson.ssf","vnd.eszigno3+xml","vnd.ezpix-album","vnd.ezpix-package","vnd.fdf","vnd.fdsn.mseed","vnd.fdsn.seed","vnd.flographit","vnd.fluxtime.clip","vnd.framemaker","x-frame","vnd.frogans.fnc","vnd.frogans.ltf","vnd.fsc.weblaunch","vnd.fujitsu.oasys","vnd.fujitsu.oasys2","vnd.fujitsu.oasys3","vnd.fujitsu.oasysgp","vnd.fujitsu.oasysprs","vnd.fujixerox.ddd","vnd.fujixerox.docuworks","vnd.fujixerox.docuworks.binder","vnd.fuzzysheet","vnd.genomatix.tuxedo","vnd.geogebra.file","vnd.geogebra.slides","vnd.geogebra.tool","vnd.geometry-explorer","vnd.geonext","vnd.geoplan","vnd.geospace","vnd.gmx","vnd.google-earth.kml+xml","vnd.google-earth.kmz","vnd.grafeq","vnd.groove-account","vnd.groove-help","vnd.groove-identity-message","vnd.groove-injector","vnd.groove-tool-message","vnd.groove-tool-template","vnd.groove-vcard","vnd.hal+xml","vnd.handheld-entertainment+xml","vnd.hbci","vnd.hhe.lesson-player","vnd.hp-hpgl","vnd.hp-hpid","vnd.hp-hps","vnd.hp-jlyt","vnd.hp-pcl","vnd.hp-pclxl","vnd.hydrostatix.sof-data","vnd.ibm.minipay","vnd.ibm.modcap","vnd.ibm.rights-management","vnd.ibm.secure-container","vnd.iccprofile","vnd.igloader","vnd.immervision-ivp","vnd.immervision-ivu","vnd.insors.igm","vnd.intercon.formnet","vnd.intergeo","vnd.intu.qbo","vnd.intu.qfx","vnd.ipunplugged.rcprofile","vnd.irepository.package+xml","vnd.is-xpr","vnd.isac.fcs","vnd.jam","vnd.jcp.javame.midlet-rms","vnd.rn-realmedia","vnd.rn-realmedia-vbr","vnd.jisp","vnd.joost.joda-archive","vnd.kahootz","vnd.kde.karbon","x-karbon","vnd.kde.kchart","x-kchart","vnd.kde.kformula","x-kformula","vnd.kde.kivio","x-kivio","vnd.kde.kontour","x-kontour","vnd.kde.kpresenter","x-kpresenter","vnd.kde.kspread","x-kspread","vnd.kde.kword","x-kword","vnd.kenameaapp","vnd.kidspiration","vnd.kinar","vnd.koan","vnd.kodak-descriptor","vnd.las.las+xml","vnd.llamagraphics.life-balance.desktop","vnd.llamagraphics.life-balance.exchange+xml","vnd.lotus-approach","vnd.lotus-freelance","vnd.lotus-notes","vnd.lotus-organizer","vnd.lotus-screencam","vnd.lotus-wordpro","vnd.macports.portpkg","vnd.mcd","vnd.medcalcdata","vnd.mediastation.cdkey","vnd.mfer","vnd.mfmp","vnd.micrografx.flo","vnd.micrografx.igx","vnd.mif","x-mif","vnd.mobius.daf","vnd.mobius.dis","vnd.mobius.mbk","vnd.mobius.mqy","vnd.mobius.msl","vnd.mobius.plc","vnd.mobius.txf","vnd.mophun.application","vnd.mophun.certificate","vnd.mozilla.xul+xml","vnd.ms-artgalry","vnd.ms-cab-compressed","vnd.ms-excel","msexcel","x-msexcel","vnd.ms-excel.addin.macroenabled.12","vnd.ms-excel.addin.macroEnabled.12","vnd.ms-excel.sheet.binary.macroenabled.12","vnd.ms-excel.sheet.binary.macroEnabled.12","vnd.ms-excel.sheet.macroenabled.12","vnd.ms-excel.sheet.macroEnabled.12","vnd.ms-excel.template.macroenabled.12","vnd.ms-excel.template.macroEnabled.12","vnd.ms-fontobject","vnd.ms-htmlhelp","x-chm","vnd.ms-ims","vnd.ms-lrm","vnd.ms-officetheme","vnd.ms-pki.seccat","vnd.ms-pki.stl","vnd.ms-powerpoint","powerpoint","mspowerpoint","x-mspowerpoint","vnd.ms-powerpoint.addin.macroenabled.12","vnd.ms-powerpoint.addin.macroEnabled.12","vnd.ms-powerpoint.presentation.macroenabled.12","vnd.ms-powerpoint.presentation.macroEnabled.12","vnd.ms-powerpoint.slide.macroenabled.12","vnd.ms-powerpoint.slide.macroEnabled.12","vnd.ms-powerpoint.slideshow.macroenabled.12","vnd.ms-powerpoint.slideshow.macroEnabled.12","vnd.ms-powerpoint.template.macroenabled.12","vnd.ms-powerpoint.template.macroEnabled.12","vnd.ms-project","vnd.ms-word.document.macroenabled.12","vnd.ms-word.document.macroEnabled.12","vnd.ms-word.template.macroenabled.12","vnd.ms-word.template.macroEnabled.12","vnd.ms-works","vnd.ms-wpl","vnd.ms-xpsdocument","xps","vnd.mseq","vnd.musician","vnd.muvee.style","vnd.mynfc","vnd.neurolanguage.nlu","vnd.nitf","vnd.noblenet-directory","vnd.noblenet-sealer","vnd.noblenet-web","vnd.nokia.n-gage.data","vnd.nokia.n-gage.symbian.install","vnd.nokia.radio-preset","vnd.nokia.radio-presets","vnd.novadigm.edm","vnd.novadigm.edx","vnd.novadigm.ext","vnd.oasis.opendocument.chart","vnd.oasis.opendocument.chart-template","vnd.oasis.opendocument.database","vnd.oasis.opendocument.base","vnd.sun.xml.base","vnd.oasis.opendocument.formula","vnd.oasis.opendocument.formula-template","vnd.oasis.opendocument.graphics","vnd.oasis.opendocument.graphics-template","vnd.oasis.opendocument.image","vnd.oasis.opendocument.image-template","vnd.oasis.opendocument.presentation","vnd.oasis.opendocument.presentation-template","vnd.oasis.opendocument.spreadsheet","vnd.oasis.opendocument.spreadsheet-template","vnd.oasis.opendocument.text","vnd.oasis.opendocument.text-master","vnd.oasis.opendocument.text-template","vnd.oasis.opendocument.text-web","vnd.olpc-sugar","vnd.oma.dd2+xml","vnd.openofficeorg.extension","vnd.openxmlformats-officedocument.presentationml.presentation","vnd.openxmlformats-officedocument.presentationml.slide","vnd.openxmlformats-officedocument.presentationml.slideshow","vnd.openxmlformats-officedocument.presentationml.template","vnd.openxmlformats-officedocument.spreadsheetml.sheet","vnd.openxmlformats-officedocument.spreadsheetml.template","vnd.openxmlformats-officedocument.wordprocessingml.document","vnd.openxmlformats-officedocument.wordprocessingml.template","vnd.osgeo.mapguide.package","x-magicpoint","vnd.osgi.dp","vnd.osgi.subsystem","vnd.palm","x-ms-pdb","x-aportisdoc","x-palm-database","vnd.pawaafile","vnd.pg.format","vnd.pg.osasli","vnd.picsel","vnd.pmi.widget","vnd.pocketlearn","vnd.powerbuilder6","vnd.previewsystems.box","vnd.proteus.magazine","vnd.publishare-delta-tree","vnd.pvi.ptid1","vnd.quark.quarkxpress","vnd.realvnc.bed","vnd.recordare.musicxml","vnd.recordare.musicxml+xml","vnd.rig.cryptonote","vnd.rim.cod","vnd.route66.link66+xml","vnd.sailingtracker.track","vnd.seemail","vnd.sema","vnd.semd","vnd.semf","vnd.shana.informed.formdata","vnd.shana.informed.formtemplate","vnd.shana.informed.interchange","vnd.shana.informed.package","vnd.simtech-mindmapper","vnd.smaf","x-smaf","vnd.smart.teacher","vnd.solent.sdkm+xml","vnd.spotfire.dxp","vnd.spotfire.sfs","vnd.squashfs","vnd.stardivision.calc","x-starcalc","vnd.stardivision.draw","x-stardraw","vnd.stardivision.impress","x-starimpress","vnd.stardivision.math","x-starmath","vnd.stardivision.writer","x-starwriter","vnd.stardivision.writer-global","x-starwriter-global","vnd.stepmania.package","vnd.stepmania.stepchart","vnd.sun.xml.calc","vnd.sun.xml.calc.template","vnd.sun.xml.draw","vnd.sun.xml.draw.template","vnd.sun.xml.impress","vnd.sun.xml.impress.template","vnd.sun.xml.math","vnd.sun.xml.writer","vnd.sun.xml.writer.global","vnd.sun.xml.writer.template","vnd.sus-calendar","vnd.svd","vnd.symbian.install","vnd.syncml+xml","vnd.syncml.dm+wbxml","vnd.syncml.dm+xml","vnd.tao.intent-module-archive","vnd.tcpdump.pcap","x-pcap","pcap","vnd.tmobile-livetv","vnd.trid.tpt","vnd.triscape.mxs","vnd.trueapp","vnd.ufdl","vnd.uiq.theme","vnd.umajin","vnd.unity","vnd.uoml+xml","vnd.vcx","vnd.visio","tga","x-targa","x-tga","vnd.visionary","vnd.vsf","vnd.wap.wbxml","vnd.wap.wmlc","vnd.wap.wmlscriptc","vnd.webturbo","vnd.wolfram.player","vnd.wordperfect","x-wordperfect","wordperfect","vnd.wqd","vnd.wt.stf","vnd.xara","vnd.xfdl","vnd.yamaha.hv-dic","vnd.yamaha.hv-script","vnd.yamaha.hv-voice","vnd.yamaha.openscoreformat","vnd.yamaha.openscoreformat.osfpvg+xml","vnd.yamaha.smaf-audio","vnd.yamaha.smaf-phrase","vnd.yellowriver-custom-menu","vnd.zul","vnd.zzazz.deck+xml","voicexml+xml","wasm","widget","winhlp","wsdl+xml","wspolicy+xml","x-7z-compressed","x-abiword","x-ace-compressed","x-ace","x-apple-diskimage","x-authorware-bin","x-authorware-map","x-authorware-seg","x-bcpio","x-bittorrent","x-blorb","x-bzip","x-bzip1","x-bzip2","bzip2","x-cbr","vnd.comicbook-rar","x-cbt","vnd.comicbook+zip","x-cbz","x-cb7","x-cdlink","x-cfs-compressed","x-chat","x-chess-pgn","vnd.chess-pgn","x-conference","x-netshow-channel","x-cpio","x-csh","x-debian-package","vnd.debian.binary-package","x-deb","x-dgc-compressed","x-director","x-doom","x-wii-wad","x-doom-wad","x-dtbncx+xml","x-dtbook+xml","x-dtbresource+xml","x-godot-resource","x-dvi","x-envoy","x-eva","x-font-bdf","x-font-ghostscript","x-font-type1","x-font-linux-psf","x-font-pcf","x-cisco-vpn-settings","x-font-snf","x-font-afm","x-freearc","x-futuresplash","vnd.adobe.flash.movie","x-shockwave-flash","futuresplash","x-gca-compressed","x-glulx","x-gnumeric","x-gramps-xml","x-gtar","x-tar","x-hdf","x-install-instructions","x-iso9660-image","x-sega-cd-rom","x-sega-pico-rom","x-saturn-rom","x-dreamcast-rom","x-wii-rom","x-wii-iso-image","x-wbfs","x-wia","x-gamecube-rom","x-gamecube-iso-image","vnd.efi.iso","x-cd-image","x-java-jnlp-file","x-latex","x-tex","x-lzh-compressed","x-lha","x-mie","x-mobipocket-ebook","x-ms-application","x-ms-shortcut","x-win-lnk","x-ms-wmd","x-ms-wmz","x-msmetafile","x-ms-xbap","x-msaccess","vnd.ms-access","msaccess","vnd.msaccess","mdb","x-mdb","x-lmdb","x-msbinder","x-mscardfile","x-msclip","x-msdownload","x-dosexec","x-ms-dos-executable","x-ms-ne-executable","vnd.microsoft.portable-executable","x-bat","bat","x-msi","x-msmediaview","x-wmf","wmf","x-emf","emf","x-msmoney","x-mspublisher","vnd.ms-publisher","x-msschedule","x-msterminal","x-mswrite","x-netcdf","x-nzb","x-pkcs12","pkcs12","x-pkcs7-certificates","x-pkcs7-certreqresp","x-rar-compressed","vnd.rar","x-rar","x-research-info-systems","x-sh","x-shellscript","x-shar","x-silverlight-app","x-sql","sql","x-stuffit","stuffit","x-sit","x-stuffitx","x-sitx","x-subrip","x-srt","x-sv4cpio","x-sv4crc","x-t3vm-image","x-tads","x-tcl","x-tex-tfm","x-texinfo","x-tgif","prs.wavefront-obj","x-ustar","x-wais-source","x-x509-ca-cert","x-xfig","x-xliff+xml","xliff+xml","x-xliff","x-xpinstall","x-xz","x-zmachine","xaml+xml","xcap-diff+xml","xenc+xml","xhtml+xml","xml","xslt+xml","xml-dtd","xop+xml","xproc+xml","xspf+xml","x-xspf+xml","xv+xml","yang","yin+xml","zip","x-zip-compressed","x-zip","x-apple-systemprofiler+xml","x-ms-asx","ram","x-font-otf","x-font-ttf","font-woff","photoshop","x-photoshop","x-nintendo-3ds-rom","ico","ics","x-javascript","javascript","x-troff","x-perl","x-troff-man","x-linguist","x-flash-video","vnd.ms-asf","x-atari-2600-rom","x-atari-7800-rom","x-atari-lynx-rom","vnd.amazon.mobi8-ebook","x-mobi8-ebook","x-partial-download","x-wwf","wwf","x-windows-themepack","vnd.apple.keynote","x-iwork-keynote-sffkey","pkcs8-encrypted","raml+yaml","sieve","x-sqlite2","vnd.sqlite3","x-sqlite3","x-gedcom","x-go-sgf","x-godot-scene","x-godot-shader","x-gdscript","its+xml","toml","yaml","x-yaml","vnd.corel-draw","cdr","coreldraw","x-cdr","x-coreldraw","vnd.ms-visio.drawing.main+xml","vnd.ms-visio.template.main+xml","vnd.ms-visio.stencil.main+xml","vnd.ms-visio.drawing.macroEnabled.main+xml","vnd.ms-visio.template.macroEnabled.main+xml","vnd.ms-visio.stencil.macroEnabled.main+xml","gnunet-directory","vnd.ms-tnef","ms-tnef","x-starchart","vnd.stardivision.chart","x-starmail","x-genesis-rom","vnd.stardivision.mail","vnd.oasis.opendocument.text-flat-xml","vnd.oasis.opendocument.text-master-template","vnd.oasis.opendocument.graphics-flat-xml","vnd.oasis.opendocument.presentation-flat-xml","vnd.oasis.opendocument.spreadsheet-flat-xml","vnd.apache.parquet","x-parquet","x-pcapng","vnd.youtube.yt","x-spss-por","x-spss-sav","x-spss-savefile","x-xbel","x-cue","x-amipro","x-applix-spreadsheet","x-archive","x-arj","x-asar","x-asp","x-awk","x-blender","x-bzdvi","x-bzip1-compressed-tar","x-bzip2-compressed-tar","x-bzip-compressed-tar","x-bzip3","x-bzip3-compressed-tar","x-bzpdf","x-bzpostscript","x-rzip","x-rzip-compressed-tar","x-lrzip","x-lrzip-compressed-tar","vnd.efi.img","x-raw-disk-image","x-raw-floppy-disk-image","x-fd-file","x-raw-disk-image-xz-compressed","x-compressed-iso","x-iso9660-appimage","vnd.appimage","x-cdrdao-toc","x-gd-rom-cue","x-discjuggler-cd-image","x-compress","x-compressed-tar","x-cpio-compressed","vnd.dbf","dbase","dbf","x-dbase","x-dbf","x-mame-chd","x-nintendo-ds-rom","x-nintendo-3ds-executable","x-nintendo-switch-xci","x-nx-xci","x-pc-engine-rom","x-thomson-cartridge-memo7","x-thomson-cassette","x-hfe-floppy-image","x-hfe-file","x-thomson-sap-image","x-sap-file","x-designer","x-gtk-builder","x-desktop","x-gnome-app-info","x-fictionbook+xml","x-fictionbook","x-zip-compressed-fb2","x-dia-diagram","x-dia-shape","x-e-theme","x-egon","x-fluid","x-gz-font-linux-psf","x-font-speedo","x-font-ttx","x-gameboy-rom","x-gameboy-color-rom","x-gba-rom","x-virtual-boy-rom","x-genesis-32x-rom","x-gettext-translation","x-glade","x-gnucash","x-gnuplot","x-graphite","x-gzdvi","gzip","x-gzip","x-gzpdf","x-gzpostscript","x-java-keystore","x-java-jce-keystore","x-java-pack200","json5","jrd+json","json-patch+json","ld+json","x-ipynb+json","vnd.coffeescript","x-jbuilder-project","x-kexi-connectiondata","x-kexiproject-shortcut","x-kexiproject-sqlite2","x-kexiproject-sqlite3","x-vnd.kde.kexi","x-kexiproject-sqlite","x-killustrator","x-kpovmodeler","x-krita","x-kugar","x-lhz","x-lyx","x-lz4","x-lz4-compressed-tar","x-lzip","x-lzip-compressed-tar","x-lzpdf","x-lzma","x-lzma-compressed-tar","x-lzop","x-qpress","zlib","x-mimearchive","x-powershell","x-mswinurl","x-msx-rom","x-m4","x-n64-rom","x-neo-geo-pocket-rom","x-neo-geo-pocket-color-rom","x-nes-rom","x-object","annodex","x-annodex","microsoftpatch","microsoftupdate","appx","msix","appxbundle","msixbundle","appinstaller","x-oleo","x-pak","x-par2","x-pagemaker","x-php","x-planperfect","x-pocket-word","x-pw","x-python-bytecode","x-qtiplot","x-quattropro","x-quicktime-media-link","x-quicktimeplayer","x-qw","x-dar","x-alz","x-reject","x-rpm","x-redhat-package-manager","x-source-rpm","x-ruby","x-markaby","x-shared-library-la","x-fishscript","x-nuscript","x-shorten","x-siag","x-sg1000-rom","x-sms-rom","x-gamegear-rom","vnd.nintendo.snes.rom","x-snes-rom","x-tarz","x-tex-gf","x-tex-pk","x-theme","x-trash","x-tzo","x-xz-compressed-tar","x-zpaq","zstd","x-zstd-compressed-tar","x-xzpdf","x-wpg","x-wonderswan-rom","x-wonderswan-color-rom","x-zoo","x-ms-wim","x-ufraw","dicom","fits","x-navi-animation","x-vhd-disk","x-virtualbox-vhd","owl+xml","x-sylk","x-gettext","hta","xml-external-parsed-entity","x-hwp","vnd.haansoft-hwp","x-hwt","vnd.haansoft-hwt","vnd.emusic-emusic_package","geo+json","vnd.geo+json","x-ica","x-it87","x-ccmx","x-bsdiff","trig","x-trig","vnd.apple.numbers","x-iwork-numbers-sffnumbers","vnd.apple.pages","x-iwork-pages-sffpages","vnd.apple.pkpass","x-amiga-disk-format","vnd.flatpak","vnd.xdgapp","vnd.flatpak.repo","vnd.flatpak.ref","vnd.snap","vnd.ms-3mfdocument","x-fds-disk","ovf","x-virtualbox-ova","x-qed-disk","x-qemu-disk","x-vhdx-disk","x-virtualbox-vhdx","x-vmdk-disk","x-virtualbox-vmdk","x-vdi-disk","x-virtualbox-vdi","x-appleworks-document","x-bps-patch","x-ips-patch","x-pyspread-spreadsheet","x-pyspread-bz-spreadsheet","x-openzim","x-openvpn-profile","x-modrinth-modpack+zip","x-qbrew","cbor","x-eris-link+cbor","x-gerber-job","x-excellon","x-tiled-tmx","x-tiled-tsx","x-ole-storage","x-executable","x-iff","x-matroska","x-riff"],["zz-winassoc-123","zz-winassoc-doc","zz-winassoc-cab","zz-winassoc-xls","zz-winassoc-hlp","zz-winassoc-mdb","zz-winassoc-cdr","zz-winassoc-uu"],["x-mod","x-scpls","scpls","x-mpegurl","mpegurl","x-mp3-playlist","m3u","x-m3u","x-musepack","x-psf","adpcm","basic","midi","x-midi","mp4","x-m4a","m4a","mpeg","x-mp3","x-mpg","x-mpeg","mp3","mp2","x-mp2","ogg","x-vorbis+ogg","vorbis","x-vorbis","x-flac+ogg","x-oggflac","x-ogg","x-speex+ogg","x-speex","x-opus+ogg","s3m","x-s3m","silk","vnd.dece.audio","vnd.digital-winds","vnd.dra","vnd.dts","x-dts","vnd.dts.hd","x-dtshd","vnd.lucent.voice","vnd.ms-playready.media.pya","vnd.nuera.ecelp4800","vnd.nuera.ecelp7470","vnd.nuera.ecelp9600","vnd.rip","webm","x-aac","aac","x-aiff","x-aifc","x-aiffc","x-caf","x-flac","flac","x-matroska","x-ms-wax","x-ms-asx","x-ms-wma","wma","x-pn-realaudio","vnd.rn-realaudio","vnd.m-realaudio","x-pn-realaudio-plugin","x-wav","vnd.wave","wav","xm","x-xm","prs.sid","3gpp","3gpp-encrypted","x-rn-3gpp-amr","x-rn-3gpp-amr-encrypted","x-rn-3gpp-amr-wb","x-rn-3gpp-amr-wb-encrypted","3gpp2","x-amzxml","x-gsm","x-iriver-pla","annodex","x-annodex","x-shorten","x-iMelody","iMelody","x-xmf","xmf","mobile-xmf","vnd.nokia.mobile-xmf","ac3","AMR","amr-encrypted","AMR-WB","amr-wb-encrypted","x-ape","x-pn-audibleaudio","vnd.audible","vnd.audible.aax","vnd.audible.aaxc","x-dff","dff","x-dsf","dsf","x-dsd","dsd","x-it","x-tak","x-wavpack","x-wavpack-correction","x-mo3","usac","x-m4r","x-m4b","x-minipsf","x-psflib","x-stm","x-voc","x-xi","x-tta","tta"],["vnd.graphviz","plain","rdf","rust","rss","rtf","x-dart","x-scala","org","x-scheme","x-gettext-translation-template","x-pot","x-devicetree-binary","x-tex","x-sh","x-sql","tcl","x-tcl","x-texinfo","xml","x-dtd","x-devicetree-source","vnd.dvb.subtitle","x-microdvd","x-mpsub","x-subviewer","ico","cache-manifest","calendar","x-vcalendar","css","csv","x-comma-separated-values","x-csv","html","javascript","jscript","n3","x-log","prs.lines.tag","richtext","sgml","tab-separated-values","troff","x-troff","x-perl","x-troff-me","x-troff-ms","turtle","uri-list","vcard","directory","x-vcard","vnd.curl","vnd.curl.dcurl","vnd.curl.mcurl","vnd.curl.scurl","vnd.fly","vnd.fmi.flexstor","vnd.in3d.3dml","vnd.in3d.spot","vnd.sun.j2me.app-descriptor","vnd.wap.wml","vnd.wap.wmlscript","x-asm","x-c","x-csrc","x-c++src","x-chdr","x-c++hdr","x-fortran","x-java-source","x-java","x-nfo","x-opml","x-opml+xml","x-pascal","x-setext","x-sfv","x-uuencode","vnd.trolltech.linguist","vnd.qt.linguist","mathml","vnd.familysearch.gedcom","gedcom","yaml","x-yaml","ecmascript","x-kaitai-struct","x-qml","x-vb","markdown","x-markdown","x-modelica","x-groovy","x-gradle","jscript.encode","x-lyx","x-ocl","x-cobol","x-reject","x-crystal","crystal","julia","x-fish","x-nu","vtt","x-mpl2","x-ssa","x-iMelody","x-mrml","vnd.rn-realtext","x-txt2tags","x-verilog","x-svhdr","x-svsrc","x-vhdl","x-rst","spreadsheet","vnd.senx.warpscript","x-adasrc","x-bibtex","x-blueprint","x-cmake","x-common-lisp","csv-schema","x-csharp","x-vala","x-ooc","x-dcl","x-dsl","x-dsrc","x-eiffel","x-emacs-lisp","x-elixir","x-erlang","x-genie","x-gettext-translation","x-po","x-gherkin","x-component","x-google-video-pointer","google-video-pointer","x-haskell","x-idl","x-ldif","x-lilypond","x-literate-haskell","x-makefile","x-moc","x-ms-regedit","x-mof","x-mup","x-nix","x-objcsrc","x-matlab","x-octave","x-objc++src","x-troff-mm","x-ocaml","x-opencl-src","x-patch","x-diff","x-nim","x-nimscript","x-go","x-python2","x-python","x-python3","x-cython","x-sagemath","x-lua","x-rpm-spec","x-sass","x-scss","x-typst","x-twig","x-uil","x-basic","vbscript","vbs","vbscript.encode","x-xmi","x-xslfo","x-iptables","x-dbus-service","x-systemd-unit","xml-external-parsed-entity","x.gcode","x-gcode-gx","x-kotlin","x-readme"],["pdf","x-eps","x-gimp-gbr","x-tga","targa","tga","x-icb","x-targa","x-kodak-dcr","x-pfm","wmf","x-wmf","x-win-metafile","emf","x-emf","x-xfig","avif","avif-sequence","bmp","x-bmp","x-MS-bmp","cgm","g3fax","fax-g3","gif","ief","jpeg","pjpeg","jxl","ktx","png","apng","vnd.mozilla.apng","prs.btif","sgi","x-sgi","svg+xml","svg+xml-compressed","tiff","vnd.adobe.photoshop","psd","x-psd","photoshop","x-photoshop","vnd.dece.graphic","vnd.djvu","x-djvu","x.djvu","vnd.djvu+multipage","vnd.dvb.subtitle","vnd.dwg","vnd.dxf","vnd.fastbidsheet","vnd.fpx","x-fpx","vnd.fst","vnd.fujixerox.edmics-mmr","vnd.fujixerox.edmics-rlc","vnd.ms-modi","vnd.ms-photo","jxr","vnd.net-fpx","vnd.wap.wbmp","vnd.xiff","webp","x-3ds","x-cmu-raster","x-cmx","x-freehand","x-icon","vnd.microsoft.icon","ico","icon","x-ico","x-mrsid-image","x-pcx","vnd.zbrush.pcx","x-pict","x-portable-anymap","x-portable-bitmap","x-portable-graymap","x-portable-pixmap","x-rgb","x-xbitmap","x-xpixmap","x-xpm","x-xwindowdump","jpm","cdr","x-cdr","jpx","x-quicktime","x-skencil","vnd.rn-realpix","heif","heic","heic-sequence","heif-sequence","hej2k","x-jp2-codestream","jp2","jpeg2000","jpeg2000-image","x-jpeg2000-image","openraster","x-dds","x-exr","x-adobe-dng","x-canon-crw","x-canon-cr2","x-canon-cr3","x-fuji-raf","x-kodak-k25","x-kodak-kdc","x-minolta-mrw","x-nikon-nef","x-nikon-nrw","x-olympus-orf","x-panasonic-rw","x-panasonic-raw","x-panasonic-rw2","x-panasonic-raw2","x-pentax-pef","x-sigma-x3f","x-sony-srf","x-sony-sr2","x-sony-arw","rle","x-applix-graphics","x-bzeps","x-compressed-xcf","x-fits","fits","x-gzeps","x-icns","x-ilbm","x-iff","x-jng","x-lwo","x-lws","x-macpaint","x-msod","x-photo-cd","x-sun-raster","x-win-bitmap","x-xcf","x-gimp-gih","x-gimp-pat","x-kiss-cel","ktx2","astc","qoi","x-sct","x-pxr","x-dcraw"],["stl","x.stl-ascii","x.stl-binary","obj","iges","mesh","vnd.collada+xml","vnd.dwf","vnd.gdl","vnd.gtw","vnd.vtu","vrml","x3d+binary","x3d+vrml","x3d+xml","gltf-binary","gltf+json","mtl","3mf","step"],["x-pdb","x-cdx","x-cif","x-cmdf","x-cml","x-csml","x-xyz"],["x-sisx-app"],["mp2t","mpeg","x-mpeg","mpeg-system","x-mpeg-system","x-mpeg2","x-theora+ogg","x-theora","ogg","x-ogg","x-ms-wvx","x-ms-wax","x-ms-wmx","3gpp","3gp","3gpp-encrypted","3gpp2","h261","h263","h264","jpeg","jpm","mj2","mp4","mp4v-es","x-m4v","quicktime","vnd.dece.hd","vnd.dece.mobile","vnd.dece.pd","vnd.dece.sd","vnd.dece.video","vnd.dvb.file","vnd.fvt","vnd.mpegurl","x-mpegurl","vnd.ms-playready.media.pyv","vnd.uvvu.mp4","vnd.vivo","vivo","webm","x-f4v","x-fli","x-flic","fli","x-flv","flv","x-matroska","x-matroska-3d","x-mng","x-ms-asf","x-ms-wm","x-ms-asf-plugin","x-ms-vob","x-ms-wmv","x-msvideo","vnd.avi","x-avi","avi","divx","msvideo","vnd.divx","x-sgi-movie","x-smv","x-javafx","vnd.youtube.yt","annodex","x-annodex","x-ogm+ogg","x-ogm","vnd.rn-realvideo","x-real-video","x-mjpeg","dv","x-nsv","vnd.radgamettools.bink","vnd.radgamettools.smacker"],["collection","otf","ttf","woff","woff2"],["rfc822"],["octet-stream"],["related"]] as const

export const _EXTENSIONS = {"123":[0,0,0,1,0,2,0,3,0,4,1,0],"602":[0,5],"669":[2,0],"ez":[0,6],"aw":[0,7,0,8],"atom":[0,9],"atomcat":[0,10],"atomsvc":[0,11],"ccxml":[0,12],"cdmia":[0,13],"cdmic":[0,14],"cdmid":[0,15],"cdmio":[0,16],"cdmiq":[0,17],"cu":[0,18],"davmount":[0,19],"dbk":[0,20,0,21,0,22],"dssc":[0,23],"xdssc":[0,24],"ecma":[0,25],"emma":[0,26],"epub":[0,27],"exi":[0,28],"pfr":[0,29,0,30],"gml":[0,31],"gpx":[0,32,0,33,0,34,0,35],"gxf":[0,36],"stk":[0,37],"ink":[0,38],"inkml":[0,38],"ipfix":[0,39],"jar":[0,40,0,41,0,42],"ser":[0,43],"class":[0,44,0,45,0,46,0,47,0,48,0,49],"json":[0,50,0,51],"jsonml":[0,52],"lostxml":[0,53],"hqx":[0,54],"cpt":[0,55],"mads":[0,56],"mrc":[0,57],"mrcx":[0,58],"ma":[0,59],"nb":[0,59,0,60],"mb":[0,59],"mathml":[0,61],"mbox":[0,62],"mscml":[0,63],"metalink":[0,64],"meta4":[0,65],"mets":[0,66],"mods":[0,67],"m21":[0,68],"mp21":[0,68],"mp4s":[0,69],"doc":[0,70,0,71,0,72,1,1],"dot":[0,70,0,73,3,0],"mxf":[0,74],"bin":[0,75],"dms":[0,75],"lrf":[0,75,0,76],"mar":[0,75],"so":[0,75,0,77],"dist":[0,75],"distz":[0,75],"pkg":[0,75,0,78],"bpk":[0,75],"dump":[0,75],"elc":[0,75],"deploy":[0,75],"oda":[0,79],"opf":[0,80],"ogx":[0,81,0,82],"omdoc":[0,83],"onetoc":[0,84],"onetoc2":[0,84],"onetmp":[0,84],"onepkg":[0,84],"oxps":[0,85],"xer":[0,86],"pdf":[0,87,0,88,4,0,0,89,0,90],"pgp":[0,91,0,92,0,93,0,94],"asc":[0,93,3,1,0,91,0,92,0,94],"sig":[0,93],"prf":[0,95],"p10":[0,96],"p7m":[0,97],"p7c":[0,97],"p7s":[0,98],"p8":[0,99],"ac":[0,100],"cer":[0,101],"crl":[0,102],"pkipath":[0,103],"pki":[0,104],"pls":[0,105,2,1,0,106,2,2],"ai":[0,107,0,108,0,109],"eps":[0,107,4,1],"ps":[0,107],"cww":[0,110],"pskcxml":[0,111],"rdf":[0,112,3,2],"rif":[0,113],"rnc":[0,114,0,115],"rl":[0,116],"rld":[0,117],"rs":[0,118,3,3],"gbr":[0,119,4,2,0,120,0,121],"mft":[0,122],"roa":[0,123],"rsd":[0,124],"rss":[0,125,3,4],"rtf":[0,126,3,5],"sbml":[0,127],"scq":[0,128],"scs":[0,129],"spq":[0,130],"spp":[0,131],"sdp":[0,132,0,133,0,134,0,135],"setpay":[0,136],"setreg":[0,137],"shf":[0,138],"smi":[0,139,0,140,0,141],"smil":[0,139,0,141],"rq":[0,142],"srx":[0,143],"gram":[0,144],"grxml":[0,145],"sru":[0,146],"ssdl":[0,147],"ssml":[0,148],"tei":[0,149],"teicorpus":[0,149],"tfi":[0,150],"tsd":[0,151],"plb":[0,152],"psb":[0,153],"pvb":[0,154],"tcap":[0,155],"pwn":[0,156],"aso":[0,157],"imp":[0,158],"acu":[0,159],"atc":[0,160],"acutc":[0,160],"air":[0,161],"fcdt":[0,162],"fxp":[0,163],"fxpl":[0,163],"xdp":[0,164],"xfdf":[0,165],"ahead":[0,166],"azf":[0,167],"azs":[0,168],"azw":[0,169],"acc":[0,170],"ami":[0,171],"apk":[0,172],"cii":[0,173],"fti":[0,174],"atx":[0,175],"mpkg":[0,176],"m3u8":[0,177,2,3,2,4,0,178,2,5,2,6,2,7],"swi":[0,179],"iota":[0,180],"aep":[0,181],"mpm":[0,182],"bmi":[0,183],"rep":[0,184],"cdxml":[0,185],"mmd":[0,186],"cdy":[0,187],"cla":[0,188],"rp9":[0,189],"c4g":[0,190],"c4d":[0,190],"c4f":[0,190],"c4p":[0,190],"c4u":[0,190],"c11amc":[0,191],"c11amz":[0,192],"csp":[0,193],"cdbcmsg":[0,194],"cmc":[0,195],"clkx":[0,196],"clkk":[0,197],"clkp":[0,198],"clkt":[0,199],"clkw":[0,200],"wbs":[0,201],"pml":[0,202],"ppd":[0,203],"car":[0,204],"pcurl":[0,205],"dart":[0,206,3,6],"rdz":[0,207],"uvf":[0,208],"uvvf":[0,208],"uvd":[0,208],"uvvd":[0,208],"uvt":[0,209],"uvvt":[0,209],"uvx":[0,210],"uvvx":[0,210],"uvz":[0,211],"uvvz":[0,211],"fe_launch":[0,212],"dna":[0,213],"mlp":[0,214],"dpg":[0,215],"dfac":[0,216],"kpxx":[0,217],"ait":[0,218],"svc":[0,219],"geo":[0,220],"mag":[0,221],"nml":[0,222],"esf":[0,223],"msf":[0,224],"qam":[0,225],"slt":[0,226],"ssf":[0,227],"es3":[0,228],"et3":[0,228],"ez2":[0,229],"ez3":[0,230],"fdf":[0,231],"mseed":[0,232],"seed":[0,233],"dataless":[0,233],"gph":[0,234],"ftc":[0,235],"fm":[0,236,0,237],"frame":[0,236],"maker":[0,236],"book":[0,236],"fnc":[0,238],"ltf":[0,239],"fsc":[0,240],"oas":[0,241],"oa2":[0,242],"oa3":[0,243],"fg5":[0,244],"bh2":[0,245],"ddd":[0,246],"xdw":[0,247],"xbd":[0,248],"fzs":[0,249],"txd":[0,250],"ggb":[0,251],"ggs":[0,252],"ggt":[0,253],"gex":[0,254],"gre":[0,254],"gxt":[0,255],"g2w":[0,256],"g3w":[0,257],"gmx":[0,258],"kml":[0,259],"kmz":[0,260],"gqf":[0,261],"gqs":[0,261],"gac":[0,262],"ghf":[0,263],"gim":[0,264],"grv":[0,265],"gtm":[0,266],"tpl":[0,267],"vcg":[0,268],"hal":[0,269],"zmm":[0,270],"hbci":[0,271],"les":[0,272],"hpgl":[0,273],"hpid":[0,274],"hps":[0,275],"jlt":[0,276],"pcl":[0,277],"pclxl":[0,278],"sfd-hdstx":[0,279],"mpy":[0,280],"afp":[0,281],"listafp":[0,281],"list3820":[0,281],"irm":[0,282],"sc":[0,283,3,7],"icc":[0,284],"icm":[0,284],"igl":[0,285],"ivp":[0,286],"ivu":[0,287],"igm":[0,288],"xpw":[0,289],"xpx":[0,289],"i2g":[0,290],"qbo":[0,291],"qfx":[0,292],"rcprofile":[0,293],"irp":[0,294],"xpr":[0,295],"fcs":[0,296],"jam":[0,297],"rms":[0,298,0,299,0,300],"jisp":[0,301],"joda":[0,302],"ktz":[0,303],"ktr":[0,303],"karbon":[0,304,0,305],"chrt":[0,306,0,307],"kfo":[0,308,0,309],"flw":[0,310,0,311],"kon":[0,312,0,313],"kpr":[0,314,0,315],"kpt":[0,314,0,315],"ksp":[0,316,0,317],"kwd":[0,318,0,319],"kwt":[0,318,0,319],"htke":[0,320],"kia":[0,321],"kne":[0,322],"knp":[0,322],"skp":[0,323],"skd":[0,323],"skt":[0,323],"skm":[0,323],"sse":[0,324],"lasxml":[0,325],"lbd":[0,326],"lbe":[0,327],"apr":[0,328],"pre":[0,329],"nsf":[0,330],"org":[0,331,3,8],"scm":[0,332,3,9],"lwp":[0,333],"portpkg":[0,334],"mcd":[0,335],"mc1":[0,336],"cdkey":[0,337],"mwf":[0,338],"mfm":[0,339],"flo":[0,340],"igx":[0,341],"mif":[0,342,0,343],"daf":[0,344],"dis":[0,345],"mbk":[0,346],"mqy":[0,347],"msl":[0,348],"plc":[0,349],"txf":[0,350],"mpn":[0,351],"mpc":[0,352,2,8],"xul":[0,353],"cil":[0,354],"cab":[0,355,1,2],"xls":[0,356,0,357,0,358,1,3],"xlm":[0,356,0,357,0,358,1,3],"xla":[0,356,0,357,0,358,1,3],"xlc":[0,356,0,357,0,358,1,3],"xlt":[0,356,0,357,0,358,1,3],"xlw":[0,356,0,357,0,358,1,3],"xlam":[0,359,0,360],"xlsb":[0,361,0,362],"xlsm":[0,363,0,364],"xltm":[0,365,0,366],"eot":[0,367],"chm":[0,368,0,369],"ims":[0,370],"lrm":[0,371],"thmx":[0,372],"cat":[0,373],"stl":[0,374,5,0,5,1,5,2],"ppt":[0,375,0,376,0,377,0,378],"pps":[0,375,0,376,0,377,0,378],"pot":[0,375,3,10,3,11,0,376,0,377,0,378],"ppam":[0,379,0,380],"pptm":[0,381,0,382],"sldm":[0,383,0,384],"ppsm":[0,385,0,386],"potm":[0,387,0,388],"mpp":[0,389,2,8],"mpt":[0,389],"docm":[0,390,0,391],"dotm":[0,392,0,393],"wps":[0,394],"wks":[0,394,0,0,0,1,0,2,0,3,0,4,1,0],"wcm":[0,394],"wdb":[0,394],"wpl":[0,395],"xps":[0,396,0,397],"mseq":[0,398],"mus":[0,399],"msty":[0,400],"taglet":[0,401],"nlu":[0,402],"ntf":[0,403],"nitf":[0,403],"nnd":[0,404],"nns":[0,405],"nnw":[0,406],"ngdat":[0,407],"n-gage":[0,408],"rpst":[0,409],"rpss":[0,410],"edm":[0,411],"edx":[0,412],"ext":[0,413],"odc":[0,414],"otc":[0,415],"odb":[0,416,0,417,0,418],"odf":[0,419],"odft":[0,420],"odg":[0,421],"otg":[0,422],"odi":[0,423],"oti":[0,424],"odp":[0,425],"otp":[0,426],"ods":[0,427],"ots":[0,428],"odt":[0,429],"odm":[0,430],"ott":[0,431],"oth":[0,432],"xo":[0,433],"dd2":[0,434],"oxt":[0,435],"pptx":[0,436],"sldx":[0,437],"ppsx":[0,438],"potx":[0,439],"xlsx":[0,440],"xltx":[0,441],"docx":[0,442],"dotx":[0,443],"mgp":[0,444,0,445],"dp":[0,446],"esa":[0,447],"pdb":[0,448,0,449,0,450,6,0,0,451],"pqa":[0,448,0,451],"oprc":[0,448,0,451],"paw":[0,452],"str":[0,453],"ei6":[0,454],"efif":[0,455],"wg":[0,456],"plf":[0,457],"pbd":[0,458],"box":[0,459],"mgz":[0,460],"qps":[0,461],"ptid":[0,462],"qxd":[0,463],"qxt":[0,463],"qwd":[0,463],"qwt":[0,463],"qxl":[0,463],"qxb":[0,463],"bed":[0,464],"mxl":[0,465],"musicxml":[0,466],"cryptonote":[0,467],"cod":[0,468],"rm":[0,299,0,300],"rmvb":[0,300,0,299],"link66":[0,469],"st":[0,470],"see":[0,471],"sema":[0,472],"semd":[0,473],"semf":[0,474],"ifm":[0,475],"itp":[0,476],"iif":[0,477],"ipk":[0,478],"twd":[0,479],"twds":[0,479],"mmf":[0,480,0,481],"teacher":[0,482],"sdkm":[0,483],"sdkd":[0,483],"dxp":[0,484],"sfs":[0,485,0,486],"sdc":[0,487,0,488],"sda":[0,489,0,490],"sdd":[0,491,0,492],"smf":[0,493,0,494],"sdw":[0,495,0,496],"vor":[0,495,0,496],"sgl":[0,497,0,498],"smzip":[0,499],"sm":[0,500],"sxc":[0,501],"stc":[0,502],"sxd":[0,503],"std":[0,504],"sxi":[0,505],"sti":[0,506],"sxm":[0,507],"sxw":[0,508],"sxg":[0,509],"stw":[0,510],"sus":[0,511],"susp":[0,511],"svd":[0,512],"sis":[0,513],"sisx":[0,513,7,0],"xsm":[0,514],"bdm":[0,515,8,0],"xdm":[0,516],"tao":[0,517],"pcap":[0,518,0,519,0,520],"cap":[0,518,0,519,0,520],"dmp":[0,518,0,519,0,520],"tmo":[0,521],"tpt":[0,522],"mxs":[0,523],"tra":[0,524],"ufd":[0,525],"ufdl":[0,525],"utz":[0,526],"umj":[0,527],"unityweb":[0,528],"uoml":[0,529],"vcx":[0,530],"vsd":[0,531],"vst":[0,531,4,3,0,532,0,533,0,534,4,4,4,5,4,6,4,7],"vss":[0,531],"vsw":[0,531],"vis":[0,535],"vsf":[0,536],"wbxml":[0,537],"wmlc":[0,538],"wmlsc":[0,539],"wtb":[0,540],"nbp":[0,541],"wpd":[0,542,0,543,0,544],"wqd":[0,545],"stf":[0,546],"xar":[0,547,0,78],"xfdl":[0,548],"hvd":[0,549],"hvs":[0,550],"hvp":[0,551],"osf":[0,552],"osfpvg":[0,553],"saf":[0,554],"spf":[0,555],"cmp":[0,556],"zir":[0,557],"zirz":[0,557],"zaz":[0,558],"vxml":[0,559],"wasm":[0,560],"wgt":[0,561],"hlp":[0,562,1,4],"wsdl":[0,563],"wspolicy":[0,564],"7z":[0,565],"abw":[0,566],"ace":[0,567,0,568],"dmg":[0,569],"aab":[0,570],"x32":[0,570],"u32":[0,570],"vox":[0,570],"aam":[0,571],"aas":[0,572],"bcpio":[0,573],"torrent":[0,574],"blb":[0,575],"blorb":[0,575],"bz":[0,576,0,577],"bz2":[0,578,0,579,0,576],"boz":[0,578],"cbr":[0,580,0,581],"cba":[0,580],"cbt":[0,580,0,582],"cbz":[0,580,0,583,0,584],"cb7":[0,580,0,585],"vcd":[0,586],"cfs":[0,587],"chat":[0,588],"pgn":[0,589,0,590],"nsc":[0,591,0,592],"cpio":[0,593],"csh":[0,594],"deb":[0,595,0,596,0,597],"udeb":[0,595,0,596,0,597],"dgc":[0,598],"dir":[0,599],"dcr":[0,599,4,8],"dxr":[0,599],"cst":[0,599],"cct":[0,599],"cxt":[0,599],"w3d":[0,599],"fgd":[0,599],"swa":[0,599],"wad":[0,600,0,601,0,602],"ncx":[0,603],"dtb":[0,604,3,12],"res":[0,605,0,606],"dvi":[0,607],"evy":[0,608],"eva":[0,609],"bdf":[0,610],"gsf":[0,611,0,612],"psf":[0,613,2,9],"pcf":[0,614,0,615],"snf":[0,616],"pfa":[0,612],"pfb":[0,612],"pfm":[0,612,4,9],"afm":[0,612,0,617],"arc":[0,618],"spl":[0,619,0,620,0,621,0,622],"gca":[0,623],"ulx":[0,624],"gnumeric":[0,625],"gramps":[0,626],"gtar":[0,627,0,628],"hdf":[0,629],"install":[0,630],"iso":[0,631,0,632,0,633,0,634,0,635,0,636,0,637,0,638,0,639,0,640,0,641,0,642,0,643],"jnlp":[0,644],"latex":[0,645,3,13,0,646],"lzh":[0,647,0,648],"lha":[0,647,0,648],"mie":[0,649],"prc":[0,650,0,448,0,451],"mobi":[0,650],"application":[0,651],"lnk":[0,652,0,653],"wmd":[0,654],"wmz":[0,655,0,656],"xbap":[0,657],"mdb":[0,658,0,659,0,660,0,661,0,662,0,663,1,5,0,664],"obd":[0,665],"crd":[0,666],"clp":[0,667],"exe":[0,668,0,669,0,670,0,671,0,672],"dll":[0,668,0,670,0,671,0,672],"com":[0,668],"bat":[0,668,0,673,0,674],"msi":[0,668,0,675],"mvb":[0,676],"m13":[0,676],"m14":[0,676],"wmf":[0,656,4,10,4,11,4,12,0,677,0,678],"emf":[0,656,4,13,4,14,0,679,0,680],"emz":[0,656],"mny":[0,681],"pub":[0,682,0,683],"scd":[0,684],"trm":[0,685],"wri":[0,686],"nc":[0,687],"cdf":[0,687],"nzb":[0,688],"p12":[0,689,0,690],"pfx":[0,689,0,690],"p7b":[0,691],"spc":[0,691],"p7r":[0,692],"rar":[0,693,0,694,0,695],"ris":[0,696],"sh":[0,697,0,698,3,14],"shar":[0,699],"swf":[0,621,0,620,0,622],"xap":[0,700],"sql":[0,701,0,702,3,15],"sit":[0,703,0,704,0,705],"sitx":[0,706,0,707],"srt":[0,708,0,709],"sv4cpio":[0,710],"sv4crc":[0,711],"t3":[0,712],"gam":[0,713],"tar":[0,628,0,627],"tcl":[0,714,3,16,3,17],"tex":[0,646,3,13],"tfm":[0,715],"texinfo":[0,716,3,18],"texi":[0,716,3,18],"obj":[0,717,5,3,0,718],"ustar":[0,719],"src":[0,720],"der":[0,721],"crt":[0,721],"fig":[0,722,4,15],"xlf":[0,723,0,724,0,725],"xpi":[0,726],"xz":[0,727],"z1":[0,728],"z2":[0,728],"z3":[0,728],"z4":[0,728],"z5":[0,728],"z6":[0,728],"z7":[0,728],"z8":[0,728],"xaml":[0,729],"xdf":[0,730],"xenc":[0,731],"xhtml":[0,732],"xht":[0,732],"xml":[0,733,3,19],"xsl":[0,733,0,734],"dtd":[0,735,3,20],"xop":[0,736],"xpl":[0,737],"xslt":[0,734],"xspf":[0,738,0,739],"mxml":[0,740],"xhvml":[0,740],"xvml":[0,740],"xvm":[0,740],"yang":[0,741],"yin":[0,742],"zip":[0,743,0,744,0,745],"adp":[2,10],"au":[2,11],"snd":[2,11],"mid":[2,12,2,13],"midi":[2,12,2,13],"kar":[2,12,2,13],"rmi":[2,12],"m4a":[2,14,2,15,2,16],"mp4a":[2,14],"mpga":[2,17,2,18,2,19,2,20,2,21],"mp2":[2,17,2,22,2,23,8,1,8,2,8,3,8,4,8,5],"mp2a":[2,17],"mp3":[2,17,2,18,2,19,2,20,2,21],"m2a":[2,17],"m3a":[2,17],"oga":[2,24,2,25,2,26,2,27,2,28,2,29,2,30,2,31],"ogg":[2,24,8,6,8,7,8,8,8,9,2,25,2,26,2,27,2,28,2,29,2,30,2,31],"spx":[2,24,0,746,2,32,2,31],"opus":[2,24,2,33,2,30],"s3m":[2,34,2,35],"sil":[2,36],"uva":[2,37],"uvva":[2,37],"eol":[2,38],"dra":[2,39],"dts":[2,40,2,41,3,21],"dtshd":[2,42,2,43],"lvp":[2,44],"pya":[2,45],"ecelp4800":[2,46],"ecelp7470":[2,47],"ecelp9600":[2,48],"rip":[2,49],"weba":[2,50],"aac":[2,51,2,52],"aif":[2,53],"aiff":[2,53],"aifc":[2,53,2,54,2,55],"caf":[2,56],"flac":[2,57,2,58],"mka":[2,59],"m3u":[2,3,0,177,2,4,0,178,2,5,2,6,2,7],"wax":[2,60,2,61,8,10,8,11,8,12,0,747],"wma":[2,62,2,63],"ram":[2,64,0,748],"ra":[2,64,2,65,2,66],"rmp":[2,67],"wav":[2,68,2,69,2,70],"xm":[2,71,2,72],"cdx":[6,1],"cif":[6,2],"cmdf":[6,3],"cml":[6,4],"csml":[6,5],"xyz":[6,6],"ttc":[9,0],"otf":[9,1,0,420,0,749],"ttf":[9,2,0,750],"woff":[9,3,0,751],"woff2":[9,4],"avif":[4,16,4,17],"bmp":[4,18,4,19,4,20],"cgm":[4,21],"g3":[4,22,4,23],"gif":[4,24],"ief":[4,25],"jpeg":[4,26,4,27],"jpg":[4,26,4,27],"jpe":[4,26,4,27],"jxl":[4,28],"ktx":[4,29],"png":[4,30,4,31,4,32],"btif":[4,33],"sgi":[4,34,4,35],"svg":[4,36],"svgz":[4,36,4,37],"tiff":[4,38],"tif":[4,38],"psd":[4,39,4,40,4,41,4,42,4,43,0,752,0,753],"uvi":[4,44],"uvvi":[4,44],"uvg":[4,44],"uvvg":[4,44],"djvu":[4,45,4,46,4,47,4,48],"djv":[4,45,4,46,4,47,4,48],"sub":[4,49,3,22,3,23,3,24,3,25],"dwg":[4,50],"dxf":[4,51],"fbs":[4,52],"fpx":[4,53,4,54],"fst":[4,55],"mmr":[4,56],"rlc":[4,57],"mdi":[4,58],"wdp":[4,59,4,60],"npx":[4,61],"wbmp":[4,62],"xif":[4,63],"webp":[4,64],"3ds":[4,65,0,754],"ras":[4,66],"cmx":[4,67],"fh":[4,68],"fhc":[4,68],"fh4":[4,68],"fh5":[4,68],"fh7":[4,68],"ico":[4,69,4,70,0,755,4,71,4,72,4,73,3,26],"sid":[4,74,2,73],"pcx":[4,75,4,76],"pic":[4,77],"pct":[4,77],"pnm":[4,78],"pbm":[4,79],"pgm":[4,80],"ppm":[4,81],"rgb":[4,82],"tga":[4,3,0,532,0,533,0,534,4,4,4,5,4,6,4,7],"xbm":[4,83],"xpm":[4,84,4,85],"xwd":[4,86],"eml":[10,0],"mime":[10,0],"igs":[5,4],"iges":[5,4],"msh":[5,5],"mesh":[5,5],"silo":[5,5],"dae":[5,6],"dwf":[5,7],"gdl":[5,8],"gtw":[5,9],"vtu":[5,10],"wrl":[5,11],"vrml":[5,11],"x3db":[5,12],"x3dbz":[5,12],"x3dv":[5,13],"x3dvz":[5,13],"x3d":[5,14],"x3dz":[5,14],"appcache":[3,27],"ics":[3,28,3,29,0,756],"ifb":[3,28,3,29,0,756],"css":[3,30],"csv":[3,31,3,32,3,33],"html":[3,34,0,732],"htm":[3,34,0,732],"js":[3,35,0,757,0,758,3,36],"mjs":[3,35,0,757,0,758,3,36],"n3":[3,37],"txt":[3,1],"text":[3,1],"conf":[3,1],"def":[3,1],"list":[3,1],"log":[3,1,3,38],"in":[3,1],"dsc":[3,39],"rtx":[3,40],"sgml":[3,41],"sgm":[3,41],"tsv":[3,42],"t":[3,43,0,759,3,44,0,760,3,45],"tr":[3,43,0,759,3,44],"roff":[3,43,0,759,3,44],"man":[3,43,0,761],"me":[3,43,3,46],"ms":[3,43,3,47],"ttl":[3,48],"uri":[3,49],"uris":[3,49],"urls":[3,49],"vcard":[3,50,3,51,3,52],"curl":[3,53],"dcurl":[3,54],"mcurl":[3,55],"scurl":[3,56],"fly":[3,57],"flx":[3,58],"gv":[3,0],"3dml":[3,59],"spot":[3,60],"jad":[3,61],"wml":[3,62],"wmls":[3,63],"s":[3,64],"asm":[3,64],"c":[3,65,3,66],"cc":[3,65,3,67],"cxx":[3,65,3,67],"cpp":[3,65,3,67],"h":[3,65,3,68],"hh":[3,65,3,69],"dic":[3,65],"f":[3,70],"for":[3,70],"f77":[3,70],"f90":[3,70],"java":[3,71,3,72],"nfo":[3,73],"opml":[3,74,3,75],"p":[3,76],"pas":[3,76],"etx":[3,77],"sfv":[3,78],"uu":[3,79],"vcs":[3,29,3,28,0,756],"vcf":[3,52,3,50,3,51],"3gp":[8,13,8,14,2,74,8,15,2,75,2,76,2,77,2,78,2,79],"3g2":[8,16,2,80],"h261":[8,17],"h263":[8,18],"h264":[8,19],"jpgv":[8,20],"jpm":[8,21,4,87],"jpgm":[8,21,4,87],"mj2":[8,22],"mjp2":[8,22],"ts":[8,0,3,80,0,762,3,81],"m2t":[8,0],"m2ts":[8,0],"mts":[8,0],"mp4":[8,23,8,24,8,25],"mp4v":[8,23],"mpg4":[8,23],"mpeg":[8,1,8,2,8,3,8,4,8,5],"mpg":[8,1,8,2,8,3,8,4,8,5],"mpe":[8,1,8,2,8,3,8,4,8,5],"m1v":[8,1],"m2v":[8,1],"ogv":[8,8,8,9],"qt":[8,26],"mov":[8,26],"uvh":[8,27],"uvvh":[8,27],"uvm":[8,28],"uvvm":[8,28],"uvp":[8,29],"uvvp":[8,29],"uvs":[8,30],"uvvs":[8,30],"uvv":[8,31],"uvvv":[8,31],"dvb":[8,32],"fvt":[8,33],"mxu":[8,34,8,35],"m4u":[8,34,8,35],"pyv":[8,36],"uvu":[8,37],"uvvu":[8,37],"viv":[8,38,8,39],"webm":[8,40],"f4v":[8,41,8,23,8,24,8,25],"fli":[8,42,8,43,8,44],"flv":[8,45,0,763,11,0,8,46],"m4v":[8,25,8,23,8,24],"mkv":[8,47],"mk3d":[8,47,8,48],"mks":[8,47],"mng":[8,49],"asf":[8,50,0,764,8,51,8,52],"asx":[8,50,2,61,8,10,8,11,8,12,0,747],"vob":[8,53,8,1,8,2,8,3,8,4,8,5],"wm":[8,51],"wmv":[8,54],"wmx":[8,12,2,61,8,10,8,11,0,747],"wvx":[8,10,2,61,8,11,8,12,0,747],"avi":[8,55,8,56,8,57,8,58,8,59,8,60,8,61],"movie":[8,62],"smv":[8,63],"a26":[0,765],"a78":[0,766],"lnx":[0,767],"azw3":[0,768,0,769],"kfx":[0,768,0,769],"mml":[0,61,3,82],"wkdownload":[0,770],"crdownload":[0,770],"part":[0,770],"wwf":[0,771,0,772],"themepack":[0,773],"amz":[2,81],"gsm":[2,82],"pla":[2,83],"gpg":[0,91,0,92,0,93,0,94],"skr":[0,94],"pkr":[0,94],"key":[0,774,0,775,0,94],"p8e":[0,776],"raml":[0,777],"siv":[0,778],"sieve":[0,778],"sml":[0,139,0,141],"kino":[0,139,0,141],"sqlite2":[0,779],"sqlite3":[0,780,0,781],"ged":[3,83,0,782,3,84],"gedcom":[3,83,0,782,3,84],"fxm":[8,64],"sgf":[0,783],"tres":[0,606],"scn":[0,784],"tscn":[0,784],"escn":[0,784],"gdshader":[0,785],"gd":[0,786],"its":[0,787],"xliff":[0,724,0,725],"toml":[0,788],"yaml":[0,789,0,790,3,85,3,86],"yml":[0,789,0,790,3,85,3,86],"cdr":[0,791,0,792,0,793,0,794,0,795,4,88,4,89,1,6],"wk1":[0,0,0,1,0,2,0,3,0,4,1,0],"wk3":[0,0,0,1,0,2,0,3,0,4,1,0],"wk4":[0,0,0,1,0,2,0,3,0,4,1,0],"lmdb":[0,664],"xll":[0,356,0,357,0,358,1,3],"xld":[0,356,0,357,0,358,1,3],"ppz":[0,375,0,376,0,377,0,378],"vsdx":[0,796],"vstx":[0,797],"vssx":[0,798],"vsdm":[0,799],"vstm":[0,800],"vssm":[0,801],"xlr":[0,394],"gnd":[0,802],"tnef":[0,803,0,804],"tnf":[0,803,0,804],"sds":[0,805,0,806],"smd":[0,807,0,808],"sdm":[0,809],"fodt":[0,810],"otm":[0,811],"fodg":[0,812],"fodp":[0,813],"fods":[0,814],"parquet":[0,815,0,816],"pcapng":[0,817],"ntar":[0,817],"wp":[0,542,0,543,0,544],"wp4":[0,542,0,543,0,544],"wp5":[0,542,0,543,0,544],"wp6":[0,542,0,543,0,544],"wpp":[0,542,0,543,0,544],"yt":[8,65,0,818],"por":[0,819],"sav":[0,820,0,821],"zsav":[0,820,0,821],"xbel":[0,822],"7z.001":[0,565],"abw.CRASHED":[0,566],"abw.gz":[0,566],"zabw":[0,566],"cue":[0,823],"sam":[0,824],"pdc":[0,450],"brk":[6,0],"as":[0,825],"a":[0,826],"ar":[0,826],"lib":[0,826],"arj":[0,827],"asar":[0,828],"asp":[0,829],"awk":[0,830],"blend":[0,831],"blender":[0,831],"dvi.bz2":[0,832],"tar.bz":[0,833],"tbz":[0,833],"tar.bz2":[0,834,0,835],"tbz2":[0,834,0,835],"tb2":[0,834,0,835],"bz3":[0,836],"tar.bz3":[0,837],"tbz3":[0,837],"pdf.bz2":[0,838],"ps.bz2":[0,839],"rz":[0,840],"tar.rz":[0,841],"trz":[0,841],"lrz":[0,842],"tar.lrz":[0,843],"tlrz":[0,843],"raw-disk-image":[0,844,0,845],"img":[0,844,0,845],"fd":[0,846,0,847],"qd":[0,846,0,847],"raw-disk-image.xz":[0,848],"img.xz":[0,848],"iso9660":[0,642,0,643,0,631],"cso":[0,849],"appimage":[0,850,0,851],"toc":[0,852],"gdi":[0,853],"cdi":[0,854],"Z":[0,855],"tar.gz":[0,856],"tgz":[0,856],"cpio.gz":[0,857],"dbf":[0,858,0,859,0,860,0,861,0,862],"es":[0,25,3,87],"chd":[0,863],"nds":[0,864],"cci":[0,754],"3dsx":[0,865],"xci":[0,866,0,867],"pce":[0,868],"m7":[0,869],"k7":[0,870],"hfe":[0,871,0,872],"sap":[0,873,0,874],"ui":[0,875,0,876],"ksy":[3,88],"qml":[3,89],"qmltypes":[3,89],"qmlproject":[3,89],"desktop":[0,877,0,878],"kdelnk":[0,877,0,878],"fb2":[0,879,0,880],"fb2.zip":[0,881],"dia":[0,882],"shape":[0,883],"etheme":[0,884],"egon":[0,885],"fl":[0,886],"psf.gz":[0,887],"pcf.Z":[0,614],"pcf.gz":[0,614],"spd":[0,888],"ttx":[0,889],"gb":[0,890],"sgb":[0,890],"gbc":[0,891],"cgb":[0,891],"gba":[0,892],"agb":[0,892],"vb":[0,893,3,90],"gen":[0,808],"md":[3,91,3,92,0,808],"sgd":[0,808],"32x":[0,894],"mdx":[0,894],"gmo":[0,895],"mo":[3,93,0,895],"glade":[0,896],"gnucash":[0,897],"gnc":[0,897],"xac":[0,897],"gp":[0,898],"gplt":[0,898],"gnuplot":[0,898],"gra":[0,899],"dvi.gz":[0,900],"gz":[0,901,0,902],"pdf.gz":[0,903],"ps.gz":[0,904],"hdf4":[0,629],"h4":[0,629],"hdf5":[0,629],"h5":[0,629],"groovy":[3,94],"gvy":[3,94],"gy":[3,94],"gsh":[3,94],"gradle":[3,95],"jks":[0,905],"ks":[0,905],"jceks":[0,906],"pack":[0,907],"jsm":[3,35,0,757,0,758,3,36],"jse":[3,96],"json5":[0,908],"jrd":[0,909],"json-patch":[0,910],"jsonld":[0,911],"ipynb":[0,912],"coffee":[0,913],"jpr":[0,914],"jpx":[0,914,4,90],"kexic":[0,915],"kexis":[0,916],"kexi":[0,917,0,918,0,919,0,920],"kil":[0,921],"kpm":[0,922],"kra":[0,923],"krz":[0,923],"kud":[0,924],"lhz":[0,925],"lyx":[0,926,3,97],"lz4":[0,927],"tar.lz4":[0,928],"lz":[0,929],"tar.lz":[0,930],"pdf.lz":[0,931],"lzma":[0,932],"tar.lzma":[0,933],"tlz":[0,933],"lzo":[0,934],"qp":[0,935],"zz":[0,936],"mhtml":[0,937],"mht":[0,937],"ocl":[3,98],"cbl":[3,99],"cob":[3,99],"cpl":[0,668,0,670,0,671,0,672],"drv":[0,668,0,670,0,671,0,672],"scr":[0,668,0,670,0,671,0,672],"efi":[0,672],"ocx":[0,672],"sys":[0,672],"ps1":[0,938],"url":[0,939],"msx":[0,940],"m4":[0,941],"n64":[0,942],"z64":[0,942],"v64":[0,942],"ngp":[0,943],"ngc":[0,944],"nes":[0,945],"nez":[0,945],"unf":[0,945],"unif":[0,945],"o":[0,946],"mod":[0,946,2,0],"anx":[0,947,0,948],"axv":[8,66,8,67],"axa":[2,84,2,85],"ogm":[8,68,8,69],"qxp":[0,463],"msp":[0,949],"msu":[0,950],"appx":[0,951],"msix":[0,952],"appxbundle":[0,953],"msixbundle":[0,954],"appinstaller":[0,955],"oleo":[0,956],"pak":[0,957],"PAR2":[0,958],"par2":[0,958],"pl":[0,760,3,45],"PL":[0,760,3,45],"pm":[0,959,0,760,3,45],"al":[0,760,3,45],"perl":[0,760,3,45],"pod":[0,760,3,45],"php":[0,960],"php3":[0,960],"php4":[0,960],"php5":[0,960],"phps":[0,960],"pln":[0,961],"psw":[0,962],"pw":[0,963],"pyc":[0,964],"pyo":[0,964],"qti":[0,965],"qti.gz":[0,965],"wb1":[0,966],"wb2":[0,966],"wb3":[0,966],"qpw":[0,966],"qtl":[0,967,0,968],"qif":[0,969,4,91],"dar":[0,970],"alz":[0,971],"rej":[3,100,0,972],"rpm":[0,973,0,974],"src.rpm":[0,975],"spm":[0,975],"rb":[0,976],"mab":[0,977],"cr":[3,101,3,102],"jl":[3,103],"la":[0,978],"fish":[0,979,3,104],"nu":[0,980,3,105],"shn":[0,981,2,86],"siag":[0,982],"sk":[4,92],"sk1":[4,92],"sg":[0,983],"sms":[0,984],"gg":[0,985],"sfc":[0,986,0,987],"smc":[0,986,0,987],"vtt":[3,106],"sami":[0,140],"mpl":[3,107,8,0],"ssa":[3,108],"ass":[3,108,2,52,2,51],"imy":[3,109,2,87,2,88],"ime":[3,109,2,87,2,88],"smaf":[0,480,0,481],"mrml":[3,110],"mrl":[3,110],"xmf":[2,89,2,90],"mxmf":[2,91,2,92],"gem":[0,628,0,627],"tar.Z":[0,988],"taz":[0,988],"gf":[0,989],"pk":[0,990],"theme":[0,991],"bak":[0,992],"old":[0,992],"sik":[0,992],"tar.lzo":[0,993],"tzo":[0,993],"tar.xz":[0,994],"txz":[0,994],"zpaq":[0,995],"zst":[0,996],"tar.zst":[0,997],"tzst":[0,997],"pdf.xz":[0,998],"wpg":[0,999],"ws":[0,1000],"wsc":[0,1001],"cert":[0,721],"pem":[0,721],"zoo":[0,1002],"zipx":[0,743,0,744,0,745],"wim":[0,1003],"swm":[0,1003],"ac3":[2,93],"amr":[2,94,2,95],"awb":[2,96,2,97],"psid":[2,73],"aiffc":[2,54,2,55],"ape":[2,98],"aa":[2,99,2,100],"aax":[2,101],"aaxc":[2,102],"dff":[2,103,2,104],"dsf":[2,105,2,106,2,107,2,108],"it":[2,109],"tak":[2,110],"wv":[2,111],"wvp":[2,111],"wvc":[2,112],"mo3":[2,113],"adts":[2,52,2,51],"loas":[2,114],"xhe":[2,114],"f4a":[2,14,2,15,2,16],"m4r":[2,115],"lrv":[8,23,8,24,8,25],"m4b":[2,116],"f4b":[2,116],"3gpp":[8,13,8,14,2,74,8,15,2,75,2,76,2,77,2,78,2,79],"3ga":[8,13,8,14,2,74,8,15,2,75,2,76,2,77,2,78,2,79],"3gp2":[8,16,2,80],"3gpp2":[8,16,2,80],"ult":[2,0],"uni":[2,0],"m15":[2,0],"mtm":[2,0],"med":[2,0],"vlc":[2,3,2,4,0,178,2,5,2,6,2,7],"minipsf":[2,117],"psflib":[2,118],"mp+":[2,8],"rax":[2,65,2,64,2,66],"rv":[8,70,8,71],"rvx":[8,70,8,71],"rmj":[0,299,0,300],"rmm":[0,299,0,300],"rmx":[0,299,0,300],"rp":[4,93],"rt":[3,111],"stm":[2,119],"voc":[2,120],"xi":[2,121],"tta":[2,122,2,123],"dib":[4,18,4,19,4,20],"heic":[4,94,4,95,4,96,4,97],"heif":[4,94,4,95,4,96,4,97],"hif":[4,94,4,95,4,96,4,97],"hej2":[4,98],"jfif":[4,26,4,27],"mjpeg":[8,72],"mjpg":[8,72],"j2c":[4,99],"j2k":[4,99],"jpc":[4,99],"jp2":[4,100,4,101,4,102,4,103],"jpg2":[4,100,4,101,4,102,4,103],"jpf":[4,90],"ora":[4,104],"dds":[4,105],"exr":[4,106],"pict":[4,77],"pict1":[4,77],"pict2":[4,77],"ufraw":[0,1004],"dng":[4,107],"crw":[4,108],"cr2":[4,109],"cr3":[4,110],"raf":[4,111],"k25":[4,112],"kdc":[4,113],"mrw":[4,114],"nef":[4,115],"nrw":[4,116],"orf":[4,117],"raw":[4,118,4,119],"rw2":[4,120,4,121],"pef":[4,122],"x3f":[4,123],"srf":[4,124],"sr2":[4,125],"arw":[4,126],"apng":[4,31,4,32],"rle":[4,127],"svg.gz":[4,37],"jxr":[4,60,4,59],"hdp":[4,60,4,59],"ag":[4,128],"eps.bz2":[4,129],"epsi.bz2":[4,129],"epsf.bz2":[4,129],"xcf.gz":[4,130],"xcf.bz2":[4,130],"dcm":[0,1005],"docbook":[0,20,0,21,0,22],"epsi":[4,1],"epsf":[4,1],"fits":[0,1006,4,131,4,132],"fit":[0,1006,4,131,4,132],"fts":[0,1006,4,131,4,132],"eps.gz":[4,133],"epsi.gz":[4,133],"epsf.gz":[4,133],"icns":[4,134],"iff":[4,135,4,136],"ilbm":[4,135,4,136],"lbm":[4,135,4,136],"jng":[4,137],"lwo":[4,138],"lwob":[4,138],"lws":[4,139],"pntg":[4,140],"msod":[4,141],"pcd":[4,142],"sun":[4,143],"icb":[4,3,0,532,0,533,0,534,4,4,4,5,4,6,4,7],"tpic":[4,3,0,532,0,533,0,534,4,4,4,5,4,6,4,7],"vda":[4,3,0,532,0,533,0,534,4,4,4,5,4,6,4,7],"cur":[4,144],"ani":[0,1007],"xcf":[4,145],"gih":[4,146],"pat":[4,147],"cel":[4,148],"kcf":[4,148],"glb":[5,15],"gltf":[5,16],"vrm":[5,11],"mtl":[5,17],"icalendar":[3,28,3,29,0,756],"vct":[3,50,3,51,3,52],"gcrd":[3,50,3,51,3,52],"t2t":[3,112],"v":[3,113],"svh":[3,114],"sv":[3,115],"vhd":[3,116,0,1008,0,1009],"vhdl":[3,116],"rdfs":[0,112,3,2],"owl":[0,112,3,2],"rst":[3,117],"owx":[0,1010],"sylk":[0,1011,3,118],"slk":[0,1011,3,118],"mc2":[3,119],"adb":[3,120],"ads":[3,120],"bib":[3,121],"blp":[3,122],"hp":[3,69],"hpp":[3,69],"h++":[3,69],"hxx":[3,69],"C":[3,67],"c++":[3,67],"cmake":[3,123],"asd":[3,124],"fasl":[3,124],"lisp":[3,124],"ros":[3,124],"csvs":[3,125],"cs":[3,126],"vala":[3,127],"vapi":[3,127],"ooc":[3,128],"dcl":[3,129],"dsl":[3,130],"d":[3,131],"di":[3,131],"e":[3,132],"eif":[3,132],"el":[3,133],"ex":[3,134],"exs":[3,134],"erl":[3,135],"f95":[3,70],"gs":[3,136],"po":[3,137,3,138,0,1012],"feature":[3,139],"hta":[0,1013],"htc":[3,140],"manifest":[3,27],"gvp":[3,141,3,142],"hs":[3,143],"idl":[3,144],"ldif":[3,145],"ly":[3,146],"lhs":[3,147],"mk":[3,148],"mak":[3,148],"mkd":[3,91,3,92],"markdown":[3,91,3,92],"moc":[3,149],"reg":[3,150],"mof":[3,151],"mup":[3,152],"not":[3,152],"nix":[3,153],"m":[3,154,3,155,3,156],"mm":[3,157,3,158],"ml":[3,159],"mli":[3,159],"cl":[3,160],"diff":[3,161,3,162],"patch":[3,161,3,162],"nim":[3,163],"nims":[3,164],"nimble":[3,164],"go":[3,165],"py":[3,166,3,167,3,168],"py3":[3,168],"pyi":[3,168],"py2":[3,166],"wsgi":[3,167],"pxd":[3,169],"pxi":[3,169],"pyx":[3,169],"sage":[3,170],"lua":[3,171],"spec":[3,172],"sass":[3,173],"scala":[3,7],"ss":[3,9],"scss":[3,174],"tk":[3,16,3,17],"ltx":[3,13,0,646],"sty":[3,13,0,646],"cls":[3,13,0,646],"dtx":[3,13,0,646],"ins":[3,13,0,646],"typ":[3,175],"twig":[3,176],"uil":[3,177],"uue":[3,79,1,7],"bas":[3,178],"vbs":[3,179,3,180],"vbe":[3,181],"xmi":[3,182],"fo":[3,183],"xslfo":[3,183],"iptables":[3,184],"service":[3,185,3,186],"automount":[3,186],"device":[3,186],"mount":[3,186],"path":[3,186],"scope":[3,186],"slice":[3,186],"socket":[3,186],"swap":[3,186],"target":[3,186],"timer":[3,186],"xbl":[0,733,3,19],"xsd":[0,733,3,19],"rng":[0,733,3,19],"ent":[0,1014,3,187],"dv":[8,73],"cpi":[8,0],"clpi":[8,0],"mpls":[8,0],"bdmv":[8,0],"m1u":[8,34,8,35],"moov":[8,26],"qtvr":[8,26],"qtif":[4,91],"ktx2":[4,149],"astc":[4,150],"vivo":[8,38,8,39],"flc":[8,43,8,44,8,42],"hwp":[0,1015,0,1016],"hwt":[0,1017,0,1018],"avf":[8,56,8,57,8,58,8,59,8,60,8,61,8,55],"divx":[8,56,8,57,8,58,8,59,8,60,8,61,8,55],"nsv":[8,74],"emp":[0,1019],"geojson":[0,1020,0,1021],"geo.json":[0,1020,0,1021],"ica":[0,1022],"it87":[0,1023],"ccmx":[0,1024],"bsdiff":[0,1025],"trig":[0,1026,0,1027],"numbers":[0,1028,0,1029],"pages":[0,1030,0,1031],"pkpass":[0,1032],"p65":[0,959],"pm6":[0,959],"pmd":[0,959],"adf":[0,1033],"flatpak":[0,1034,0,1035],"xdgapp":[0,1034,0,1035],"flatpakrepo":[0,1036],"flatpakref":[0,1037],"sqfs":[0,486],"sqsh":[0,486],"squashfs":[0,486],"snap":[0,1038],"3mf":[5,18,0,1039],"step":[5,19],"stp":[5,19],"gcode":[3,188],"gx":[3,189],"fds":[0,1040],"ova":[0,1041,0,1042],"qed":[0,1043],"qcow2":[0,1044],"qcow":[0,1044],"vpc":[0,1008,0,1009],"vhdx":[0,1045,0,1046],"vmdk":[0,1047,0,1048],"vdi":[0,1049,0,1050],"cwk":[0,1051],"bps":[0,1052],"ips":[0,1053],"pysu":[0,1054],"pys":[0,1055],"kt":[3,190],"dtsi":[3,21],"avifs":[4,16,4,17],"qoi":[4,151],"bik":[8,75],"bk2":[8,75],"smk":[8,76],"zim":[0,1056],"qs":[0,142],"openvpn":[0,1057],"ovpn":[0,1057],"mrpack":[0,1058],"qbrew":[0,1059],"cbor":[0,1060],"eris":[0,1061],"gbrjob":[0,1062],"drl":[0,1063],"tmx":[0,1064],"tsx":[0,1065],"sct":[4,152],"pxr":[4,153]} as const

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
    "application/octet-stream",
    "application/x-sony-bbeb"
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
    "application/vnd.stardivision.impress-packed",
    "application/x-sdp",
    "application/vnd.sdp"
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
    "application/vnd.oasis.opendocument.base",
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
    "chemical/x-pdb",
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
    "application/vnd.spotfire.sfs",
    "application/vnd.squashfs"
  ],
  "sdc": [
    "application/vnd.stardivision.calc",
    "application/x-starcalc"
  ],
  "sda": [
    "application/vnd.stardivision.draw",
    "application/x-stardraw"
  ],
  "sdd": [
    "application/vnd.stardivision.impress",
    "application/x-starimpress"
  ],
  "smf": [
    "application/vnd.stardivision.math",
    "application/x-starmath"
  ],
  "sdw": [
    "application/vnd.stardivision.writer",
    "application/x-starwriter"
  ],
  "vor": [
    "application/vnd.stardivision.writer",
    "application/x-starwriter"
  ],
  "sgl": [
    "application/vnd.stardivision.writer-global",
    "application/x-starwriter-global"
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
    "application/x-bzip",
    "application/x-bzip1"
  ],
  "bz2": [
    "application/x-bzip2",
    "application/bzip2",
    "application/x-bzip"
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
    "application/x-font-type1",
    "image/x-pfm"
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
    "application/x-ms-shortcut",
    "application/x-win-lnk"
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
    "application/x-dosexec",
    "application/x-ms-dos-executable",
    "application/x-ms-ne-executable",
    "application/vnd.microsoft.portable-executable"
  ],
  "dll": [
    "application/x-msdownload",
    "application/x-ms-dos-executable",
    "application/x-ms-ne-executable",
    "application/vnd.microsoft.portable-executable"
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
    "model/obj",
    "application/prs.wavefront-obj"
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
  "avif": [
    "image/avif",
    "image/avif-sequence"
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
  "jxl": [
    "image/jxl"
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
    "image/vnd.fpx",
    "image/x-fpx"
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
    "text/calendar",
    "text/x-vcalendar",
    "application/ics"
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
    "application/javascript",
    "text/jscript"
  ],
  "mjs": [
    "text/javascript",
    "application/x-javascript",
    "application/javascript",
    "text/jscript"
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
  "ts": [
    "video/mp2t",
    "text/vnd.trolltech.linguist",
    "application/x-linguist",
    "text/vnd.qt.linguist"
  ],
  "m2t": [
    "video/mp2t"
  ],
  "m2ts": [
    "video/mp2t"
  ],
  "mts": [
    "video/mp2t"
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
  "its": [
    "application/its+xml"
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
    "application/x-starchart",
    "application/vnd.stardivision.chart"
  ],
  "smd": [
    "application/x-starmail",
    "application/x-genesis-rom"
  ],
  "sdm": [
    "application/vnd.stardivision.mail"
  ],
  "fodt": [
    "application/vnd.oasis.opendocument.text-flat-xml"
  ],
  "otm": [
    "application/vnd.oasis.opendocument.text-master-template"
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
  "parquet": [
    "application/vnd.apache.parquet",
    "application/x-parquet"
  ],
  "pcapng": [
    "application/x-pcapng"
  ],
  "ntar": [
    "application/x-pcapng"
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
  "brk": [
    "chemical/x-pdb"
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
  "lib": [
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
  "blender": [
    "application/x-blender"
  ],
  "dvi.bz2": [
    "application/x-bzdvi"
  ],
  "tar.bz": [
    "application/x-bzip1-compressed-tar"
  ],
  "tbz": [
    "application/x-bzip1-compressed-tar"
  ],
  "tar.bz2": [
    "application/x-bzip2-compressed-tar",
    "application/x-bzip-compressed-tar"
  ],
  "tbz2": [
    "application/x-bzip2-compressed-tar",
    "application/x-bzip-compressed-tar"
  ],
  "tb2": [
    "application/x-bzip2-compressed-tar",
    "application/x-bzip-compressed-tar"
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
  "rz": [
    "application/x-rzip"
  ],
  "tar.rz": [
    "application/x-rzip-compressed-tar"
  ],
  "trz": [
    "application/x-rzip-compressed-tar"
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
  "xci": [
    "application/x-nintendo-switch-xci",
    "application/x-nx-xci"
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
    "application/x-virtual-boy-rom",
    "text/x-vb"
  ],
  "gen": [
    "application/x-genesis-rom"
  ],
  "md": [
    "text/markdown",
    "text/x-markdown",
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
    "application/javascript",
    "text/jscript"
  ],
  "jse": [
    "text/jscript.encode"
  ],
  "json5": [
    "application/json5"
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
  "cpl": [
    "application/x-msdownload",
    "application/x-ms-dos-executable",
    "application/x-ms-ne-executable",
    "application/vnd.microsoft.portable-executable"
  ],
  "drv": [
    "application/x-msdownload",
    "application/x-ms-dos-executable",
    "application/x-ms-ne-executable",
    "application/vnd.microsoft.portable-executable"
  ],
  "scr": [
    "application/x-msdownload",
    "application/x-ms-dos-executable",
    "application/x-ms-ne-executable",
    "application/vnd.microsoft.portable-executable"
  ],
  "efi": [
    "application/vnd.microsoft.portable-executable"
  ],
  "ocx": [
    "application/vnd.microsoft.portable-executable"
  ],
  "sys": [
    "application/vnd.microsoft.portable-executable"
  ],
  "ps1": [
    "application/x-powershell"
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
  "qxp": [
    "application/vnd.quark.quarkxpress"
  ],
  "msp": [
    "application/microsoftpatch"
  ],
  "msu": [
    "application/microsoftupdate"
  ],
  "appx": [
    "application/appx"
  ],
  "msix": [
    "application/msix"
  ],
  "appxbundle": [
    "application/appxbundle"
  ],
  "msixbundle": [
    "application/msixbundle"
  ],
  "appinstaller": [
    "application/appinstaller"
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
  "qpw": [
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
  "hej2": [
    "image/hej2k"
  ],
  "jfif": [
    "image/jpeg",
    "image/pjpeg"
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
    "application/docbook+xml",
    "application/x-docbook+xml",
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
  "cel": [
    "image/x-kiss-cel"
  ],
  "kcf": [
    "image/x-kiss-cel"
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
  "icalendar": [
    "text/calendar",
    "text/x-vcalendar",
    "application/ics"
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
    "application/x-sylk",
    "text/spreadsheet"
  ],
  "slk": [
    "application/x-sylk",
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
  "hta": [
    "application/hta"
  ],
  "htc": [
    "text/x-component"
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
  "nix": [
    "text/x-nix"
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
    "text/x-python2",
    "text/x-python",
    "text/x-python3"
  ],
  "py3": [
    "text/x-python3"
  ],
  "pyi": [
    "text/x-python3"
  ],
  "py2": [
    "text/x-python2"
  ],
  "wsgi": [
    "text/x-python"
  ],
  "pxd": [
    "text/x-cython"
  ],
  "pxi": [
    "text/x-cython"
  ],
  "pyx": [
    "text/x-cython"
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
  "bas": [
    "text/x-basic"
  ],
  "vbs": [
    "text/vbscript",
    "text/vbs"
  ],
  "vbe": [
    "text/vbscript.encode"
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
  "sqfs": [
    "application/vnd.squashfs"
  ],
  "sqsh": [
    "application/vnd.squashfs"
  ],
  "squashfs": [
    "application/vnd.squashfs"
  ],
  "snap": [
    "application/vnd.snap"
  ],
  "3mf": [
    "model/3mf",
    "application/vnd.ms-3mfdocument"
  ],
  "step": [
    "model/step"
  ],
  "stp": [
    "model/step"
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
  "qbrew": [
    "application/x-qbrew"
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
  ],
  "sct": [
    "image/x-sct"
  ],
  "pxr": [
    "image/x-pxr"
  ]
}
