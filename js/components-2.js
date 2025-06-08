// Header Component */
Vue.component('main-header', {  
  data: function() { 
	return {
      left: true,
	  right: true,
	  title_ta: 'சித்த',
	  title_en: 'Siddha Refines',
	  language: this.$root.language
	}		
  },
  props: {
	title: ''
  }, 
  created: function() {
	
  },
  methods: {
    updateValue: function () {
      // this.$emit('input', value); 
	  this.$root.updateLanguage(this.language);
    },
	showLanguage: function() {
      this.$root.showLng();
    },
	showMenu: function() {
	  this.$root.$refs.menu.enableMenu()
	}
  }, 
  watch: {
    $route(to, from) {
      this.language = this.$root.language;  
    }
  }, 
  template: '#main-header'
});

// Language Component */
Vue.component('language-component', {
  data: function () {
	return {
	  language: this.$root.language
    }
  }, 
  methods: {
    updateValue: function () {
      // this.$emit('input', value); 
	  this.$root.updateLanguage(this.language);
	  this.language = this.$root.language;
    }
  },
  template: '#language'
});
const date = new Date();
 
  
Vue.component('home', {
  data: function() {
   return {
	language: this.$root.language,
	list: [
	  {'tn': 'மூலிகை', 'en': 'Plant kingdom','id':1},
	  {'tn': 'உலோகம்', 'en': 'Metals','id':2},
	  {'tn': 'பஞ்ச சூதம்', 'en': 'Mercury compounds','id':3},
	  {'tn': 'பாடாணம்', 'en': 'Minerals','id':4},
	  {'tn': 'காரசாரம்', 'en': 'Salts','id':5},
	  {'tn': 'நவமணி', 'en': 'Nine Gems','id':6},
	  {'tn': 'உபரசம்', 'en': 'Secondary minerals','id':7},
	  {'tn': 'சீவம்', 'en': 'Animal kingdom','id':8},
	  {'tn': 'திரவப் பொருள்கள்', 'en': 'Liquids','id':9}
	]
   } 
  },
  methods: {
	img: function(id) {
	  return `img/list-${id}.jpg`;	
	},
	view: function(id) {
	  this.$router.push(`list/${id}`).catch(()=>{});
	}
  },
  watch: {
    $route(to, from) {
      this.language = this.$root.language;  
    }
  },
  template: '#home'
}); 

Vue.component('side-menu', {
  data: function() {
	return {
	  showmeu: false, 
	  language: this.$root.language
	}
  },
  watch: {
    $route(to, from) {
	   this.login = storage.getItem('TAPSTEP');
	   this.language = this.$root.language;  
    }
  }, 
  beforeRouteUpdate () {
    this.login = storage.getItem('TAPSTEP');
  },
  created: function () { 
	this.$root.$refs.menu = this;
	
  },
  methods: {
	enableMenu: function() {
	  this.showmeu = true;  
	}, 
	close: function() {
	  this.showmeu = false;	
	}, 
	share: function() {
	  // this is the complete list of currently supported params you can pass to the plugin (all optional) 
	  window.plugins.socialsharing.share('Siddha Refines', 'Share Siddha Refines with your Friends and Family', null, 'http://google.com');
	},
	updateColor: function(cl) {
	  document.body.classList = cl;
	  this.showmeu = false;	
	}
  },
  template: '#side-menu'
});
 
Vue.component('list', {
  data: function() {
   return {
	language: this.$root.language,
	id: this.$route.params.id,
	sndata: [],
	sndataAc: [],
	title_tn: '', 
	title_en: '',
	title_nam: '',
	search: '',
	list: {
	  '1': {
	    'tn': 'மூலிகை',
	    'en': 'Plant kingdom',
		'data': [
  {
    "id": "general_purification",
    "tn": "பொதுவான சுத்தி", 
	"nam": "General purification"
  },
  {
    "id": "abrus_precatorius_kundri",
    "tn": "அகில்",
    "en": "Aquilaria agallocha",
    "nam": "(Agil)"
  },
  {
    "id": "aconitum_ferox_naabi",
    "tn": "அக்கரகாரம்",
    "en": "Anacyclus pyrethrum",
	"nam": "(Akkarakaaram)"
  },
  {
    "id": "aconitum_heterophyllum_athividayam",
    "tn": "அதிமதுரம்",
    "en": "Glycyrrhiza glabra",
	"nam": "(Athimaduram)"
  },
  {
    "id": "aconitum_napellus_iruvi",
    "tn": "அதிவிடயம்",
    "en": "Aconitum heterophyllum ",
"nam": "(Athividayam)"
  },
  {
    "id": "acorus_calamus_vasambu",
    "tn": "அபினி",
    "en": "Papaver somniferum "	,
"nam": "(Abini)"
  },
  {
    "id": "allium_sativum_vellai_vengaayam",
    "tn": "அமுக்கிரா",
    "en": "Withania somnifera "	,
"nam": "(Amukkara)"
  },
  {
    "id": "aloe_barbadensis_kumari",
    "tn": "அரத்தை",
    "en": "Alpinia galanga ",
"nam": "(Araththai)"
  },
  {
    "id": "aloe_littoralis_kariyabolam",
    "tn": "அறுகன் வேர்",
    "en": "Cynodon dactylon "
	,
"nam": "(Arugan root)"
  },
  {
    "id": "alpinia_galanga_araththai",
    "tn": "ஆமணக்கு விதை",
    "en": "Ricinus communis ",
"nam": "(Aamanakku seed)"
  },
  {
    "id": "alpinia_officinarum_sittrarathai",
    "tn": "ஆற்றுத்தும்மட்டி",
    "en": "Citrullus colocynthis ",
"nam": "(Aatru thumatti)"
  },
  {
    "id": "anacyclus_pyrethrum_akkarakaaram",
    "tn": "ஆனைத்திப்பிலி",
    "en": "Scindapsus officinalis ",
"nam": "(Aanai thippili)"
  },
  {
    "id": "andrographis_paniculata_nilavembu",
    "tn": "இஞ்சி",
    "en": "Zingiber officinale ",
"nam": "(Inji)"
  },
  {
    "id": "anethum_graveolens_kaatu_sathakuppai",
    "tn": "இஞ்சி சாறு",
    "en": "Zingiber officinale ",
"nam": "(Inji saaru)"
  },
  {
    "id": "anethum_graveolens_sathakuppai",
    "tn": "இருவி",
    "en": "Aconitum napellus ",
"nam": "(Iruvi)"
  },
  {
    "id": "aquilaria_agallocha_agil",
    "tn": "இலவங்கப்பட்டை",
    "en": "Cinnamomum verum ",
"nam": "(Lavanga pattai)"
  },
  {
    "id": "aristolochia_indica_echchuramooli",
    "tn": "இலவங்கப்பத்திரி",
    "en": "Cinnamomum tamala ",
"nam": "(Lavanga pathiri)"
  },
  {
    "id": "asparagus_racemosus_thaneervittan_kizhangu",
    "tn": "ஈச்சுரமூலி",
    "en": "Aristolochia indica ",
"nam": "(Echchuramooli)"
  },
  {
    "id": "boswellia_serrata_kundhirigam",
    "tn": "ஊமத்தன் விதை",
    "en": "Datura metal ",
"nam": "(Oomathai seed)"
  },
  {
    "id": "brassica_alba_venkadugu",
    "tn": "எட்டிக்கொட்டை",
    "en": "Strychnos nux-vomica",
"nam": "(Etti)"
  },
  {
    "id": "brassica_juncea_kadugu",
    "tn": "ஏலம்",
    "en": "Elettaria cardamomum ",
"nam": "(Elam)"
  },
  {
    "id": "butea_monosperma_palaasu_vithai",
    "tn": "ஓமம்",
    "en": "Carum copticum ",
"nam": "(Omam)"
  },
  {
    "id": "caesalpinia_bonduc_kazharchi_seed",
    "tn": "கஞ்சா",
    "en": "Cannabis sativa ",
"nam": "(Kanja)"
  },
  {
    "id": "cannabis_sativa_kanja",
    "tn": "கடலுறிஞ்சிப்பட்டை",
    "en": "Salacia reticulata ",
"nam": "(Kadalurinji pattai)"
  },
  {
    "id": "carum_copticum_omam",
    "tn": "கடுகு",
    "en": "Brassica juncea ",
"nam": "(Kadugu)"
  },
  {
    "id": "cassia_senna_nilaavarai",
    "tn": "கடுகுரோகிணி",
    "en": "Picrorhiza scrophulariiflora ",
"nam": "(Kadugurohini)"
  },
  {
    "id": "cedrus_deodara_devadaru",
    "tn": "கடுக்காய்",
    "en": "Terminalia chebula ",
"nam": "(Kadukkai)"
  },
  {
    "id": "celastrus_paniculatus_vaaluluvai",
    "tn": "கரியபோளம்",
    "en": "Aloe littoralis ",
"nam": "(Kariyabolam)"
  },
  {
    "id": "centella_asiatica_vallarai",
    "tn": "கருஞ்சீரகம்",
    "en": "Nigella sativa ",
"nam": "(Karunjeeragam)"
  },
  {
    "id": "cinnamomum_tamala_lavanga_pathiri",
    "tn": "கரும்பு",
    "en": "Saccharum officinarum ",
"nam": "(Karumbu)"
  },
  {
    "id": "cinnamomum_verum_lavangappattai",
    "tn": "கலப்பைக் கிழங்கு",
    "en": "Gloriosa superba ",
"nam": "(Kalappai kizhangu)"
  },
  {
    "id": "cissampelos_pareira_vattathiruppi",
    "tn": "கழற்சி கொட்டை",
    "en": "Caesalpinia bonduc ",
"nam": "(Kazharchi seed)"
  },
  {
    "id": "cissus_quadrangularis_pirandai",
    "tn": "கற்கடகசிங்கி",
    "en": "Rhus succedanea ",
"nam": "(Karkadagasingi)"
  },
  {
    "id": "citrullus_colocynthis_aatru_thumatti",
    "tn": "கஸ்தூரி மஞ்சள்",
    "en": "Curcuma aromatica ",
"nam": "(Kasturi manjal)"
  },
  {
    "id": "clerodendrum_serratum_siruthekku",
    "tn": "காக்கணம்",
    "en": "Clitoria ternatea ",
"nam": "(Kaakkanam)"
  },
  {
    "id": "clitoria_ternatea_kaakkanam",
    "tn": "காட்டாத்திப்பூ",
    "en": "Woodfordia fruticosa ",
"nam": "(Kaattathi poo)"
  },
  {
    "id": "commiphora_myrrha_vaalenthirabolam",
    "tn": "காட்டு சதகுப்பை",
    "en": "Anethum graveolens ",
"nam": "(Kaatu sathakuppai)"
  },
  {
    "id": "coptis_teeta_peetharohini",
    "tn": "காட்டு மிளகு",
    "en": "Piper attenuatum ",
"nam": "(Kaatu milagu)"
  },
  {
    "id": "coriandrum_sativum_dhaniya",
    "tn": "கார்போகரிசி",
    "en": "Psoralea corylifolia ",
"nam": "(Kaarbogarisi)"
  },
  {
    "id": "coscinium_fenestratum_maramanjal",
    "tn": "கிச்சிலிக்கிழங்கு",
    "en": "Curcuma zedoaria ",
"nam": "(Kichilikizhangu)"
  },
  {
    "id": "costus_speciosus_koshtam",
    "tn": "கிராம்பு",
    "en": "Syzygium aromaticum ",
"nam": "(Kirambu)"
  },
  {
    "id": "crocus_sativus_kungumapoo",
    "tn": "குக்கில்",
    "en": "Shorea robusta ",
"nam": "(Kukkil)"
  },
  {
    "id": "croton_tiglium_nervaalam",
    "tn": "குங்குமப்பூ",
    "en": "Crocus sativus ",
"nam": "(Kungumapoo)"
  },
  {
    "id": "cuminum_cyminum_seerakam",
    "tn": "குந்திரிகம்",
    "en": "Boswellia serrata ",
"nam": "(Kundhirigam)"
  },
  {
    "id": "curculigo_orchioides_nilappanaikizhangu",
    "tn": "குமரி",
    "en": "Aloe barbadensis ",
"nam": "(Kumari)"
  },
  {
    "id": "curcuma_aromatica_kasturi_manjal",
    "tn": "குரோசாணி ஓமம்",
    "en": "Hyoscyamus niger ",
"nam": "(Kurosaani Omam)"
  },
  {
    "id": "curcuma_longa_manjal",
    "tn": "குன்றி",
    "en": "Abrus precatorius ",
"nam": "(Kundri)"
  },
  {
    "id": "curcuma_zedoaria_kichilikizhangu",
    "tn": "கூகைநீர்",
    "en": "Maranta arundinacea ",
"nam": "(Koogai neer)"
  },
  {
    "id": "curcuma_zedoaria_poolankizhangu",
    "tn": "கொறுக்காய்ப்புளி",
    "en": "Pithecellobium dulce ",
"nam": "(Korukkaipuli)"
  },
  {
    "id": "cynodon_dactylon_arugan_root",
    "tn": "கோட்டம்",
    "en": "Costus speciosus ",
"nam": "(Koshtam)"
  },
  {
    "id": "cyperus_rotundus_korai_kizhangu",
    "tn": "கோரைக்கிழங்கு",
    "en": "Cyperus rotundus ",
"nam": "(Korai kizhangu)"
  },
  {
    "id": "datura_metal_oomathai_seed",
    "tn": "சடாமாஞ்சில்",
    "en": "Nardostachys grandiflora ",
"nam": "(Sadamanjil)"
  },
  {
    "id": "elettaria_cardamomum_elam",
    "tn": "சதகுப்பை",
    "en": "Anethum graveolens ",
"nam": "(Sathakuppai)"
  },
  {
    "id": "elettaria_rigens_sittrelam",
    "tn": "சந்தனம்",
    "en": "Santalum album ",
"nam": "(Santhanam)"
  },
  {
    "id": "embelia_ribes_vaividangam",
    "tn": "சர்க்கரை",
    "en": "",
"nam": "Sugar"
  },
  {
    "id": "ferula_asafoetida_perungaayam",
    "tn": "சாதிக்காய்",
    "en": "Myristica fragrans ",
"nam": "(Jathikkai)"
  },
  {
    "id": "gloriosa_superba_kalappai_kizhangu",
    "tn": "சாதிப்பத்திரி",
    "en": "Myristica fragrans ",
"nam": "(Jathipathiri)"
  },
  {
    "id": "glycyrrhiza_glabra_athimaduram",
    "tn": "சித்திரமூல வேர்ப்பட்டை",
    "en": "Plumbago indica ",
"nam": "(Sithiramoola verpattai)"
  },
  {
    "id": "helicteres_isora_valampurikkai",
    "tn": "சிவதை வேர்",
    "en": "Operculina turpethum ",
"nam": "(Sivathai ver)"
  },
  {
    "id": "hydnocarpus_laurifolia_neeradimuthu",
    "tn": "சிறுதேக்கு",
    "en": "Clerodendrum serratum ",
"nam": "(Siruthekku)"
  },
  {
    "id": "hyoscyamus_niger_kurosaani_omam",
    "tn": "சிறுநாகப்பூ",
    "en": "Mesua ferrea ",
"nam": "(Sirunaaga poo)"
  },
  {
    "id": "maranta_arundinacea_koogai_neer",
    "tn": "சிற்றரத்தை",
    "en": "Alpinia officinarum ",
"nam": "(Sittrarathai)"
  },
  {
    "id": "mesua_ferrea_sirunaaga_poo",
    "tn": "சிற்றேலம்",
    "en": "Elettaria rigens ",
"nam": "(Sittrelam)"
  },
  {
    "id": "musa_paradisiaca_vaazhai_poo",
    "tn": "சீந்தில் கொடி",
    "en": "Tinospora cordifolia ",
"nam": "(Seendhil kodi)"
  },
  {
    "id": "myristica_fragrans_jathikkai",
    "tn": "சீரகம்",
    "en": "Cuminum cyminum ",
"nam": "(Seerakam)"
  },
  {
    "id": "myristica_fragrans_jathipathiri",
    "tn": "சுக்கு",
    "en": "Zingiber officinale ",
"nam": "(Sukku)"
  },
  {
    "id": "naaganam",
    "tn": "செஞ்சந்தனம்",
    "en": "Pterocarpus santalinus ",
"nam": "(Senchandhanam)"
  },
  {
    "id": "nardostachys_grandiflora_sadamanjil",
    "tn": "செவ்வியம்",
    "en": "Piper nigrum ",
"nam": "(Sevviyam)"
  },
  {
    "id": "nicotiana_tabacum_pugaiyilai",
    "tn": "சேராங்கொட்டை",
    "en": "Semecarpus anacardium ",
"nam": "(Seraangottai)"
  },
  {
    "id": "nigella_sativa_karunjeeragam",
    "tn": "தக்கோலம்",
    "en": "",
	"nam": "Thakkolam"
  },
  {
    "id": "operculina_turpethum_sivathai_ver",
    "tn": "தண்ணீர்விட்டான் கிழங்கு",
    "en": "Asparagus racemosus ",
"nam": "(Thaneervittan kizhangu)"
  },
  {
    "id": "papaver_somniferum_abini",
    "tn": "தனியா",
    "en": "Coriandrum sativum",
"nam": " (Dhaniya)"
  },
  {
    "id": "phyllanthus_emblica_nelikkai",
    "tn": "தாளிசபத்திரி",
    "en": "Taxus baccata",
"nam": "(Thaleesapathiri)"
  },
  {
    "id": "phyllanthus_emblica_nelli_vatral",
    "tn": "தான்றிக்காய்",
    "en": "Terminalia bellirica ",
"nam": "(Thandrikkai)"
  },
  {
    "id": "picrorhiza_scrophulariiflora_kadugurohini",
    "tn": "திப்பிலி",
    "en": "Piper longum ",
"nam": "(Thippili)"
  },
  {
    "id": "piper_attenuatum_kaaatu_milagu",
    "tn": "திப்பிலி மூலம்",
    "en": "Piper longum ",
"nam": "(Thippili moolam)"
  },
  {
    "id": "piper_betle_vetrilai",
    "tn": "தேவதாரு",
    "en": "Cedrus deodara ",
"nam": "(Devadaru)"
  },
  {
    "id": "piper_cubeba_vaalmilagu",
    "tn": "தேற்றான் கொட்டை",
    "en": "Strychnos potatorum ",
"nam": "(Thetrankottai)"
  },
  {
    "id": "piper_longum_thippili_moolam",
    "tn": "நாகணம்",
    "en": "",
	"nam": "Naaganam"
  },
  {
    "id": "piper_longum_thippili",
    "tn": "நாபி",
    "en": "Aconitum ferox ",
"nam": "(Naabi)"
  },
  {
    "id": "piper_nigrum_milagu",
    "tn": "நிலப்பனங்கிழங்கு",
    "en": "Curculigo orchioides ",
"nam": "(Nilappanaikizhangu)"
  },
  {
    "id": "piper_nigrum_sevviyam",
    "tn": "நிலவேம்பு",
    "en": "Andrographis paniculata ",
"nam": "(Nilavembu)"
  },
  {
    "id": "pithecellobium_dulce_korukkaipuli",
    "tn": "நிலாவாரை",
    "en": "Cassia senna ",
"nam": "(Nilaavarai)"
  },
  {
    "id": "plectranthus_vettiveroides_vilamichu_ver",
    "tn": "நீரடிமுத்து",
    "en": "Hydnocarpus laurifolia ",
"nam": "(Neeradimuthu)"
  },
  {
    "id": "plumbago_indica_sithiramoola_verpattai",
    "tn": "நெல்லி வற்றல்",
    "en": "Phyllanthus emblica ",
"nam": "(Nelli vatral)"
  },
  {
    "id": "psoralea_corylifolia_kaarbogarisi",
    "tn": "நெல்லிக்காய்",
    "en": "Phyllanthus emblica ",
"nam": "(Nelikkai)"
  },
  {
    "id": "pterocarpus_santalinus_senchandhanam",
    "tn": "நேர்வாளம்",
    "en": "Croton tiglium ",
"nam": "(Nervaalam)"
  },
  {
    "id": "quercus_infectoria_maasikkai",
    "tn": "பலாசு விதை",
    "en": "Butea monosperma ",
"nam": "(Palaasu vithai)"
  },
  {
    "id": "rhus_succedanea_karkadagasingi",
    "tn": "பறங்கிப்பட்டை",
    "en": "Smilax china ",
"nam": "(Parangisakkai)"
  },
  {
    "id": "ricinus_communis_aamanakku_seed",
    "tn": "பிரண்டை",
    "en": "Cissus quadrangularis ",
"nam": "(Pirandai)"
  },
  {
    "id": "rubia_cordifolia_manjitti",
    "tn": "பீதரோகிணி",
    "en": "Coptis teeta ",
"nam": "(Peetharohini)"
  },
  {
    "id": "saccharum_officinarum_karumbu",
    "tn": "புகையிலை",
    "en": "Nicotiana tabacum ",
"nam": "(Pugaiyilai)"
  },
  {
    "id": "salacia_reticulata_kadalurinji_pattai",
    "tn": "புளி",
    "en": "Tamarindus indica ",
"nam": "(Tamarind)"
  },
  {
    "id": "santalum_album_santhanam",
    "tn": "பூலாங்கிழங்கு",
    "en": "Curcuma zedoaria ",
"nam": "(Poolankizhangu)"
  },
  {
    "id": "scindapsus_officinalis_aanai_thippili",
    "tn": "பெருங்காயம்",
    "en": "Ferula asafoetida ",
"nam": "(Perungaayam)"
  },
  {
    "id": "semecarpus_anacardium_seraangottai",
    "tn": "மஞ்சள்",
    "en": "Curcuma longa ",
"nam": "(Manjal)"
  },
  {
    "id": "shorea_robusta_kukkil",
    "tn": "மஞ்சிட்டி",
    "en": "Rubia cordifolia ",
"nam": "(Manjitti)"
  },
  {
    "id": "smilax_china_parangipattai",
    "tn": "மரமஞ்சள்",
    "en": "Coscinium fenestratum ",
"nam": "(Maramanjal)"
  },
  {
    "id": "srychnos_nux-vomica_etti_seed",
    "tn": "மருளூமத்தை விதை",
    "en": "Xanthium strumarium ",
"nam": "(Marul umaththai)"
  },
  {
    "id": "strychnos_potatorum_thetrankottai",
    "tn": "மாசிக்காய்",
    "en": "Quercus infectoria ",
"nam": "(Maasikkai)"
  },
  {
    "id": "sugar",
    "tn": "மிளகு",
    "en": "Piper nigrum ",
"nam": "(Milagu)"
  },
  {
    "id": "syzygium_aromaticum_kirambu",
    "tn": "வசம்பு",
    "en": "Acorus calamus ",
"nam": "(Vasambu)"
  },
  {
    "id": "tamarindus_indica_tamarind",
    "tn": "வட்டத்திருப்பி",
    "en": "Cissampelos pareira ",
"nam": "(Vattathiruppi)"
  },
  {
    "id": "taxus_baccata_thaleesapathiri",
    "tn": "வலம்புரிக்காய்",
    "en": "Helicteres isora ",
"nam": "(Valampurikkai)"
  },
  {
    "id": "terminalia_bellirica_thandrikkai",
    "tn": "வல்லாரை",
    "en": "Centella asiatica ",
"nam": "(Vallarai)"
  },
  {
    "id": "terminalia_chebula_kadukkai",
    "tn": "வாய்விடங்கம்",
    "en": "Embelia ribes ",
"nam": "(Vaividangam)"
  },
  {
    "id": "thakkolam",
    "tn": "வாலுளுவை",
    "en": "Celastrus paniculatus ",
"nam": "(Vaaluluvai)"
  },
  {
    "id": "tinospora_cordifolia_seendhil_kodi",
    "tn": "வாலேந்திரபோளம்",
    "en": "Commiphora myrrha ",
"nam": "(Vaalenthirabolam)"
  },
  {
    "id": "trigonella_foenum_vendhayam",
    "tn": "வால்மிளகு",
    "en": "Piper cubeba ",
"nam": "(Vaalmilagu)"
  },
  {
    "id": "ventilago_maderaspatana_vembatam_pattai",
    "tn": "வாழைப்பூ",
    "en": "Musa paradisiaca ",
"nam": "(Vaazhai poo)"
  },
  {
    "id": "vetiveria_zizanioides_vettiver",
    "tn": "விலாமிச்சு வேர்",
    "en": "Plectranthus vettiveroides ",
"nam": "(Vilamichu ver)"
  },
  {
    "id": "withania_somnifera_amukkara",
    "tn": "வெட்டிவேர்",
    "en": "Vetiveria zizanioides ",
"nam": "(Vettiver)"
  },
  {
    "id": "woodfordia_fruticosa_kaattathi_poo",
    "tn": "வெட்பாலை அரிசி",
    "en": "Wrightia tinctoria ",
"nam": "(Vetpaalai arisi)"
  },
  {
    "id": "wrightia_tinctoria_vetpaalai_arisi",
    "tn": "வெண்கடுகு",
    "en": "Brassica alba",
"nam": " (Venkadugu)"
  },
  {
    "id": "xanthium_strumarium_marul_umaththai",
    "tn": "வெந்தயம்",
    "en": "Trigonella foenum ",
"nam": "(Vendhayam)"
  },
  {
    "id": "zingiber_officinale_inji_saaru",
    "tn": "வெள்ளை வெங்காயம்",
    "en": "Allium sativum ",
"nam": "(Vellai vengaayam)"
  },
  {
    "id": "zingiber_officinale_inji",
    "tn": "வெற்றிலை",
    "en": "Piper betle ",
"nam": "(Vetrilai)"
  },
  {
    "id": "zingiber_officinale_sukku",
    "tn": "வேம்பாடம் பட்டை",
    "en": "Ventilago maderaspatana ",
"nam": "(Vembatam pattai)"
  }
]
	  },
	  '2': {
	    'tn': 'உலோகம்',
	    'en': 'Metals',
		'data': [
  {
    "id": "brass_piththalai",
    "tn": "இரும்பு",
    "en": "Iron ",
	"nam": "(Irumbu)"
  },
  {
    "id": "bronze_venkalam",
    "tn": "ஈயம்",
    "en": "Lead ",
	"nam": "(Vangam)"
  },
  {
    "id": "cast_iron_thandavaalam",
    "tn": "எஃகு",
    "en": "Steel ",
	"nam": "(Urukku)"
  },
  {
    "id": "copper_chembu",
    "tn": "கருவங்கம்",
    "en": "Plumbum ",
	"nam": "(Karuvangam)"
  },
  {
    "id": "ferrosoferric_oxide_mandooram",
    "tn": "காந்தம்",
    "en": "Magnetic oxide of iron ",
	"nam": "(Kaandham)"
  },
  {
    "id": "gold_pon",
    "tn": "செம்பு",
    "en": "Copper ",
	"nam": "(Chembu)"
  },
  {
    "id": "iron_irumbu",
    "tn": "தண்டவாளம்",
    "en": "Cast iron ",
	"nam": "(Thandavaalam)"
  },
  {
    "id": "lead_vangam",
    "tn": "நாகம்",
    "en": "Zinc ",
	"nam": "(Naagam)"
  },
  {
    "id": "magnetic_oxide_of_iron_kaandham",
    "tn": "பித்தளை",
    "en": "Brass ",
	"nam": "(Piththalai)"
  },
  {
    "id": "plumbum_karuvangam",
    "tn": "பொன்",
    "en": "Gold ",
	"nam": "(Pon)"
  },
  {
    "id": "silver_velli",
    "tn": "மண்டூரம்",
    "en": "Ferrosoferric oxide ",
	"nam": "(Mandooram)"
  },
  {
    "id": "steel_urukku",
    "tn": "வெண்கலம்",
    "en": "Bronze ",
	"nam": "(Venkalam)"
  },
  {
    "id": "tin_velvangam",
    "tn": "வெள்வங்கம்",
    "en": "Tin ",
	"nam": "(Velvangam)"
  },
  {
    "id": "zinc_naagam",
    "tn": "வெள்ளி",
    "en": "Silver ",
	"nam": "(Velli)"
  }
]
	  },
	  '3': {
	    'tn': 'பஞ்ச சூதம்',
	    'en': 'Mercury compounds',
		'data': [
  {
    "id": "hydragyrum_rasam",
    "tn": "இரசம்",
    "en": "Hydragyrum ",
	"nam": "(Rasam)"
  },
  {
    "id": "red_sulphide_of_mercury_rasa_chenduram",
    "tn": "இரச செந்தூரம்",
    "en": "Red sulphide of Mercury ",
	"nam": "(Rasa Chenduram)"
  },
  {
    "id": "cinnabar_lingam",
    "tn": "இலிங்கம்",
    "en": "Cinnabar ",
	"nam": "(Lingam)"
  },
  {
    "id": "hydragyrum_subchloride_pooram",
    "tn": "பூரம்",
    "en": "Hydragyrum subchloride ",
	"nam": "(Pooram)"
  },
  {
    "id": "hydragyrum_perchloride_veeram",
    "tn": "வீரம்",
    "en": "Hydragyrum perchloride ",
	"nam": "(Veeram)"
  }
]
	  },
	  '4': {
	    'tn': 'பாடாணம்',
	    'en': 'Minerals',
		'data': [
  {
    "id": "general_purification1",
    "tn": "பொது சுத்தி",
    "en": "",
	"nam": "General purification"
  },
  {
    "id": "64_paadanam",
    "tn": "64 பாடாணங்கள்",
    "en": "",
	"nam": "64 Paadanam"
  },
  {
    "id": "navapaadanam",
    "tn": "நவபாடாணம்",
    "en": "",
	"nam": "Navapaadanam"
  },
  {
    "id": "pancha_paadanam",
    "tn": "பஞ்ச பாடாணம்",
    "en": "",
	"nam": "Pancha paadanam"
  },
  {
    "id": "anjanakkal",
    "tn": "அஞ்சனக்கல்",
    "en": "",
	"nam": "Anjanakkal"
  },
  {
    "id": "ayathotti_paadanam",
    "tn": "அயத்தொட்டி பாடாணம்",
    "en": "",
	"nam": "Ayathotti paadanam"
  },
  {
    "id": "eli_paadanam",
    "tn": "எலிப்பாடாணம்",
    "en": "",
	"nam": "Eli paadanam"
  },
  {
    "id": "gowri_paadanam",
    "tn": "கந்தகம்",
    "en": "",
	"nam": "Sulphur (Kandhagam)"
  },
  {
    "id": "kuthiraipal_paadanam",
    "tn": "குதிரைப்பல் பாடாணம்",
    "en": "",
	"nam": "Kuthiraipal paadanam"
  },
  {
    "id": "mirutharsingi",
    "tn": "கௌரி பாடாணம்",
    "en": "",
	"nam": "Gowri paadanam"
  },
  {
    "id": "mudithaaram",
    "tn": "தாளகம்",
    "en": "Yellow Orpiment ",
	"nam": "(Thaalagam)"
  },
  {
    "id": "red_orpiment_manosilai",
    "tn": "தொட்டிப்பாடாணம்",
    "en": "",
	"nam": "Thotti paadanam"
  },
  {
    "id": "sulphur_kandhagam",
    "tn": "மனோசிலை",
    "en": "Red Orpiment ",
	"nam": "(Manosilai)"
  },
  {
    "id": "thotti_paadanam",
    "tn": "மிருதார்சிங்கி",
    "en": "",
	"nam": "Mirutharsingi"
  },
  {
    "id": "white_arsenic_vellai_paadaanam",
    "tn": "முடிதாரம்",
    "en": "",
	"nam": "Mudithaaram"
  },
  {
    "id": "yellow_orpiment_thaalagam",
    "tn": "வெள்ளைப்பாடாணம்",
    "en": "White Arsenic ",
	"nam": "(Vellai Paadaanam)"
  }
]
	  },
	  '5': {
	    'tn': 'காரசாரம்',
	    'en': 'Salts',
		'data': [
  {
    "id": "attuppu_boiled_salt",
    "tn": "அட்டுப்பு",
    "en": "Attuppu",
	"nam": "(Boiled Salt)"
  },
  {
    "id": "appalakaaram_sodium_carbonate",
    "tn": "அப்பளகாரம்",
    "en": "Appalakaaram ",
	"nam": "(Sodium Carbonate)"
  },
  {
    "id": "indhuppu_rock_salt",
    "tn": "இந்துப்பு",
    "en": "Indhuppu ",
	"nam": "(Rock Salt)"
  },
  {
    "id": "evatchaaram_potassium_carbonate",
    "tn": "எவட்சாரம்",
    "en": "Evatchaaram ",
	"nam": "(Potassium Carbonate)"
  },
  {
    "id": "kalluppu",
    "tn": "கல்லுப்பு",
    "en": "",
	"nam": "Kalluppu"
  },
  {
    "id": "kariyuppu_sodium_chloride",
    "tn": "கறியுப்பு",
    "en": "Kariyuppu ",
	"nam": "(Sodium Chloride)"
  },
  {
    "id": "karpooram_camphor",
    "tn": "கற்பூரம்",
    "en": "Karpooram ",
	"nam": "(Camphor)"
  },
  {
    "id": "sakthisaaram",
    "tn": "சத்திச்சாரம்",
    "en": "",
    "nam": "Sakthichaaram"
  },
  {
    "id": "savukkaaram_washing_soda",
    "tn": "சவுக்காரம்",
    "en": "Savukkaaram ",
	"nam": "(Washing Soda)"
  },
  {
    "id": "navatchaaram_ammonium_chloride",
    "tn": "நவச்சாரம்",
    "en": "Navatchaaram ",
	"nam": "(Ammonium Chloride)"
  },
  {
    "id": "pachchai_karpooram_borneo_camphor",
    "tn": "பச்சைக்கற்பூரம்",
    "en": "Pachchai Karpooram ",
	"nam": "(Borneo Camphor)"
  },
  {
    "id": "padikaaram_alum",
    "tn": "படிகாரம்",
    "en": "Padikaaram",
	"nam": " (Alum)"
  },
  {
    "id": "pidaalavanam_black_salt",
    "tn": "பிடாலவணம்",
    "en": "Pidaalavanam ",
	"nam": "(Black Salt)"
  },
  {
    "id": "pooneeru_fuller_earth",
    "tn": "பூநீறு",
    "en": "Pooneeru ",
	"nam": "(Fuller's earth)"
  },
  {
    "id": "valaiyaluppu",
    "tn": "வளையலுப்பு",
    "en": "",
	"nam": "Valaiyaluppu"
  },
  {
    "id": "venkaaram_borax",
    "tn": "வெங்காரம்",
    "en": "Venkaaram ",
	"nam": "(Borax)"
  },
  {
    "id": "vediyuppu_potassium_nitrate",
    "tn": "வெடியுப்பு",
    "en": "Vediyuppu ",
	"nam": "(Potassium Nitrate)"
  }
]
	  },
	  '6': {
	    'tn': 'நவமணி',
	    'en': 'Nine Gems',
		'data': [
  {
    "id": "cinnamon",
    "tn": "கோமேதகம்",
    "en": "Cinnamon ",
	"nam": "(Komethakam)"
  },
  {
    "id": "sapphire",
    "tn": "நீலமணி",
    "en": "Sapphire",
	"nam": " (Neelamani)"
  },
  {
    "id": "coral",
    "tn": "பவழம்",
    "en": "Coral",
	"nam": " (Pavazham)"
  },
  {
    "id": "topaz",
    "tn": "புட்பராகம்",
    "en": "Topaz",
	"nam": "(Pushparagam)"
  },
  {
    "id": "maragatham",
    "tn": "மரகதம்",
    "en": "Emerald ",
	"nam": "(Maragatham)"
  },
  {
    "id": "maanikkam",
    "tn": "மாணிக்கம்",
    "en": "Ruby ",
	"nam": "(Maanikkam)"
  },
  {
    "id": "muthu",
    "tn": "முத்து",
    "en": "Pearl ",
	"nam": "(Muthu)"
  },
  {
    "id": "vaiduriyam",
    "tn": "வைடூரியம்",
    "en": "Cat's eye ",
	"nam": "(Vaiduriyam)"
  },
  {
    "id": "diamond",
    "tn": "வைரம்",
    "en": "Diamond ",
	"nam": "(Vairam)"
  }
]
	  },
	  '7': {
	    'tn': 'உபரசம்',
	    'en': 'Secondary Minerals',
		'data': [
  {
    "id": "abrakam_mica",
    "tn": "அப்பிரகம்",
    "en": "Abrakam ",
	"nam": "(Mica)"
  },
  {
    "id": "annabethi_ferrous_sulphate",
    "tn": "அன்னபேதி",
    "en": "Annabethi ",
	"nam": "(Ferrous sulphate)"
  },
  {
    "id": "kabari",
    "tn": "கபரி",
    "en": "",
	"nam": "Kabari"
  },
  {
    "id": "kappa_thutham",
    "tn": "கப்பா துத்தம்",
    "en": "",
	"nam": "Kappa thutham"
  },
  {
    "id": "kalnaar_asbestos",
    "tn": "கல்நார்",
    "en": "Kalnaar ",
	"nam": "(Asbestos)"
  },
  {
    "id": "kalmatham_erythrite",
    "tn": "கல்மதம்",
    "en": "Kalmatham ",
	"nam": "(Erythrite)"
  },
  {
    "id": "karchunnambu_lime_stone",
    "tn": "கற்சுண்ணாம்பு",
    "en": "Karchunnambu ",
	"nam": "(Lime stone)"
  },
  {
    "id": "karpoora_silasathu_foliated_gypsum",
    "tn": "கற்பூரசிலாசத்து",
    "en": "Karpoora Silasathu ",
	"nam": "(Foliated Gypsum)"
  },
  {
    "id": "kaavikkal",
    "tn": "காவிக்கல்",
    "en": "Kaavikkal ",
	"nam": "(Red ochre)"
  },
  {
    "id": "krishna_abrakam_black_mica",
    "tn": "கிருஷ்ண அப்பிரகம்",
    "en": "Krishna Abrakam ",
	"nam": "(Black Mica)"
  },
  {
    "id": "komoothira_silasathu",
    "tn": "கோமூத்திர சிலாசத்து",
    "en": "",
	"nam": "Komoothira Silasathu"
  },
  {
    "id": "saathirabedhi",
    "tn": "சாத்திரபேதி",
    "en": "",
	"nam": "Saathirabedhi"
  },
  {
    "id": "thutham",
    "tn": "துத்தம்",
    "en": "",
	"nam": "Thutham"
  },
  {
    "id": "thurusu_cupric_sulphate",
    "tn": "துருசு",
    "en": "Thurusu ",
	"nam": "(Cupric Sulphate)"
  },
  {
    "id": "nandukkal_fossil_stone_crab",
    "tn": "நண்டுக்கல்",
    "en": "Nandukkal ",
	"nam": "(Fossil stone Crab)"
  },
  {
    "id": "nimilai_pyrite",
    "tn": "நிமிளை",
    "en": "Nimilai",
	"nam": "(Pyrite)"
  },
  {
    "id": "pachchai_thutham",
    "tn": "பச்சைத்துத்தம்",
    "en": "",
	"nam": "Pachchai Thutham"
  },
  {
    "id": "pachchai_thurusu",
    "tn": "பச்சை துருசு",
    "en": "",
	"nam": "Pachchai Thurusu"
  },
  {
    "id": "padigam_quartz",
    "tn": "படிகம்",
    "en": "Padigam ",
	"nam": "(Quartz)"
  },
  {
    "id": "paal_thutham_white_vitriol",
    "tn": "பால் துத்தம்",
    "en": "Paal Thutham ",
	"nam": "(White vitriol)"
  },
  {
    "id": "ponnimilai_chalco_pyrite",
    "tn": "பொன்னிமிளை",
    "en": "Ponnimilai ",
	"nam": "(Chalco Pyrite)"
  },
  {
    "id": "madal_thutham_calamine",
    "tn": "மடல் துத்தம்",
    "en": "Madal Thutham ",
	"nam": "(Calamine)"
  },
  {
    "id": "vachira_abrakam",
    "tn": "வச்சிர அப்பிரகம்",
    "en": "",
	"nam": "Vachira Abrakam"
  },
  {
    "id": "vellai_abrakam_white_mica",
    "tn": "வெள்ளை அப்பிரகம்",
    "en": "Vellai Abrakam ",
	"nam": "(White Mica)"
  }
]
	  },
	  '8': {
	    'tn': 'சீவம்',
	    'en': 'Animal Kingdom',
		'data': [
  {
    "id": "ambar",
    "tn": "அம்பர்",
    "en": "",
	"nam": "Ambar"
  },
  {
    "id": "turtle_shell",
    "tn": "ஆமை ஓடு",
    "en": "",
	"nam": "Turtle shell"
  },
  {
    "id": "indhirakoba_poochi",
    "tn": "இந்திரகோபப் பூச்சி",
    "en": "",
	"nam": "Indhira koba poochi"
  },
  {
    "id": "feathers",
    "tn": "இறகுகள்",
    "en": "",
	"nam": "Feathers"
  },
  {
    "id": "bones",
    "tn": "எலும்புகள்",
    "en": "",
	"nam": "Bones"
  },
  {
    "id": "kadal_nurai",
    "tn": "கடல் நுரை",
    "en": "",
	"nam": "Kadal nurai"
  },
  {
    "id": "deer_musk_kasturi",
    "tn": "கஸ்தூரி",
    "en": "Deer musk ",
	"nam": "(Kasturi)"
  },
  {
    "id": "common_oyster_shell",
    "tn": "கிளிஞ்சல்",
    "en": "Common oyster shell",
	"nam": "(Kilinjal)"
  },
  {
    "id": "hoofs_kulambugal",
    "tn": "குளம்புகள்",
    "en": "Hoofs",
	"nam": "(Kulambugal)"
  },
  {
    "id": "kombarakku_lac",
    "tn": "கொம்பரக்கு",
    "en": "Kombarakku",
	"nam": "(Lac)"
  },
  {
    "id": "horns",
    "tn": "கொம்புகள்",
    "en": "",
	"nam": "Horns"
  },
  {
    "id": "ox_bile_korojanam",
    "tn": "கோரோசனம்",
    "en": "Ox bile ",
	"nam": "(Korojanam)"
  },
  {
    "id": "conch_shell_sangu",
    "tn": "சங்கு",
    "en": "Conch shell ",
	"nam": "(Sangu)"
  },
  {
    "id": "antlers_sirungi",
    "tn": "சிருங்கி",
    "en": "Antlers ",
	"nam": "(Sirungi)"
  },
  {
    "id": "teeth",
    "tn": "தந்த வகை",
    "en": "",
	"nam": "Teeth"
  },
  {
    "id": "honey",
    "tn": "தேன்",
    "en": "",
	"nam": "Honey"
  },
  {
    "id": "fresh_water_snail",
    "tn": "நத்தை",
    "en": "",
	"nam": "Fresh water snail"
  },
  {
    "id": "cowry_palagarai",
    "tn": "பலகறை",
    "en": "Cowry ",
	"nam": "(Palagarai)"
  },
  {
    "id": "coral1",
    "tn": "பவழப்புற்று",
    "en": "",
	"nam": "Coral"
  },
  {
    "id": "punugu",
    "tn": "புனுகு",
    "en": "",
	"nam": "Punugu"
  },
  {
    "id": "earthworm",
    "tn": "பூநாகம்",
    "en": "Earthworm ",
	"nam": "(Poonaagam)"
  },
  {
    "id": "skull",
    "tn": "மண்டை ஓடு",
    "en": "",
	"nam": "Skull"
  },
  {
    "id": "hair",
    "tn": "மயிர்",
    "en": "",
	"nam": "Hair"
  },
  {
    "id": "peacock_feather",
    "tn": "மயிலிறகு",
    "en": "",
	"nam": "Peacock feather"
  },
  {
    "id": "egg_shell",
    "tn": "முட்டை ஓடு",
    "en": "",
	"nam": "Egg shell"
  },
  {
    "id": "pearl_oyster_shell_muthu_chippi",
    "tn": "முத்துச்சிப்பி",
    "en": "Pearl oyster shell ",
	"nam": "(Muthu chippi)"
  },
  {
    "id": "wax",
    "tn": "மெழுகு",
    "en": "",
	"nam": "Wax"
  }
]
	  },
	  '9': {
	    'tn': 'திரவப்பொருள்கள்',
	    'en': 'Liquids',
		'data': [
  {
    "id": "10",
    "tn": "பால் பொருட்கள்",
    "en": "",
	"nam": "Milk and milk products"
  },
  {
    "id": "11",
    "tn": "நீர் வகை",
    "en": "",
	"nam": "Water varieties"
  },
  {
    "id": "12",
    "tn": "நெய் வகை",
    "en": "",
	"nam": "Oil varieties"
  }
]
	  },
	  '10': {
	    'tn': 'பால் பொருட்கள்',
	    'en': 'Milk and milk products',
		'data': [
  {
    "id": "breast_milk",
    "tn": "அமுதப்பால் (தாய்ப்பால்)",
    "en": "",
	"nam": "Breast Milk"
  },
  {
    "id": "goat_milk",
    "tn": "வெள்ளாட்டுப்பால்",
    "en": "",
	"nam": "Goat Milk"
  },
  {
    "id": "cow_milk",
    "tn": "பசும்பால்",
    "en": "",
	"nam": "Cow milk"
  },
  {
    "id": "curd",
    "tn": "தயிர்",
    "en": "",
	"nam": "Curd"
  },
  {
    "id": "butter_milk",
    "tn": "மோர்",
    "en": "",
	"nam": "Butter milk"
  },
  {
    "id": "butter",
    "tn": "வெண்ணெய்",
    "en": "",
	"nam": "Butter"
  },
  {
    "id": "ghee",
    "tn": "நெய்",
    "en": "",
	"nam": "Ghee"
  }
]
	  },
	  '11': {
	    'tn': 'நீர் வகை',
	    'en': 'Water varieties',
		'data': [
  {
    "id": "hail_stone",
    "tn": "ஆலங்கட்டி",
    "en": "",
	"nam": "Hail stone"
  },
  {
    "id": "tender_coconut_water",
    "tn": "இளநீர்",
    "en": "",
	"nam": "Tender Coconut water"
  },
  {
    "id": "rice_washed_filtrate_kazhuneer",
    "tn": "கழுநீர்",
    "en": "Rice washed filtrate ",
	"nam": "(Kazhuneer)"
  },
  {
    "id": "vinegar_kaadi",
    "tn": "காடி",
    "en": "Vinegar ",
	"nam": "(Kaadi)"
  },
  {
    "id": "water",
    "tn": "தண்ணீர்",
    "en": "",
	"nam": "Water"
  },
  {
    "id": "dew_water",
    "tn": "பனி நீர்",
    "en": "",
	"nam": "Dew water"
  },
  {
    "id": "pumpkin_water",
    "tn": "பூசணிக்காய் நீர்",
    "en": "",
	"nam": "Pumpkin water"
  },
  {
    "id": "hot_water",
    "tn": "வெந்நீர்",
    "en": "",
	"nam": "Hot water"
  },
  {
    "id": "animal_urine",
    "tn": "விலங்குகளின் நீர்",
    "en": "",
	"nam": "Animal urine"
  },
  {
    "id": "human_urine",
    "tn": "அமுரி",
    "en": "",
	"nam": "Human urine"
  }
]
	  },
	  '12': {
	    'tn': 'நெய் வகை',
	    'en': 'Oil varieties',
		'data': [
  {
    "id": "almond_oil",
    "tn": "வாதுமை நெய்",
    "en": "",
	"nam": "Almond oil"
  },
  {
    "id": "castor_oil",
    "tn": "ஆமணக்கு நெய்",
    "en": "",
	"nam": "Castor oil"
  },
  {
    "id": "coconut_oil",
    "tn": "தெங்கு நெய்",
    "en": "",
	"nam": "Coconut oil"
  },
  {
    "id": "mahua_oil",
    "tn": "இலுப்பை நெய்",
    "en": "",
	"nam": "Mahua oil"
  },
  {
    "id": "neem_oil",
    "tn": "வேம்பு நெய்",
    "en": "",
	"nam": "Neem oil"
  },
  {
    "id": "pungam_oil",
    "tn": "புங்கு நெய்",
    "en": "",
	"nam": "Pungam oil"
  }
]
	  }
	}
   } 
  },
  created: function() {
	this.renderData(); 
	let me = this; 
	window.addEventListener("keypress", function() {
		me.updateData(); 
	});
	window.addEventListener("onkeyup", function() {
		me.updateData();
	 
	});
	window.addEventListener("onkeydown", function() {
		me.updateData();
		
	});
  },
  methods: {
	img: function(id) {
	  return `img/list-${id}.jpg`;	
	},
	view: function(id) {
	  if ( id == 10 || id == 11 || id == 12 ) {
		this.$router.push(`/list/${id}`).catch(()=>{});
		return;
	  } 
	  this.$router.push(`/listinner/${id}/${this.id}`).catch(()=>{});
	},
	renderData: function() {
	  let id = this.id;
	  let data = this.list[`${id}`];
	  this.sndataAc = data.data;
	  this.sndata = this.sndataAc;
	  this.title_tn = data.tn;
	  this.title_en = data.en;
	},
	updateData: function() {  
	   if ( this.search != '' ) {
	      this.sndata = this.sndataAc.filter(item => { 
		    if ( this.language == 'tn' ) {
			  return item.tn.toLowerCase().includes(this.search.toLowerCase())
			} 
		    return item.nam.toLowerCase().includes(this.search.toLowerCase()) || (item.en != undefined &&  item.en.toLowerCase().includes(this.search.toLowerCase()) )
	      });
	   } else {
		 this.sndata = this.sndataAc;
	   }
	}
  },
  watch: {
    $route(to, from) {
	  this.language = this.$root.language;
	  this.id = this.$route.params.id;
	  this.renderData(); 
	}
  },
  template: '#list'
}); 



Vue.component('listinner', {
  data: function() {
   return {
	language: this.$root.language,
	id: this.$route.params.id,
	path: this.$route.params.path,
	currentX: 0, 
    swipedir: '',
    startX: '',
    startY: '',
    distX: '',
    distY: '',
    threshold: 150,
    restraint: 200,
    allowedTime: 600, // maximum time allowed to travel that distance
    elapsedTime: '',
    startTime: '',
	disableleft: true,
	disablerightt: false,
	sndata: [],
	total: 0,
	active: 0,
	sndataAc: [],
	width: '100%',
	title_tn: '', 
	title_en: '',
	title_nam: '',
	search: '',
	left: 0,
	widthper: 0,
	list: {
	  'general_purification': {
	    'tn': ' பொதுவான சுத்தி ',
	    'en': '',
		'nam': 'GENERAL PURIFICATION',
		'data': [{
		  'tn': '<h4>இலைகள்</h4><p><span class="list-style-v1"></span>இலைகளைத் தண்ணீரில் கழுவாமல் சுத்த வஸ்திரத்தால் துடைத்துப் பழுப்பு, அழுகல் முதலியவற்றை நீக்கல் வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span>பெரிய இலை - இவைகளில் பழுப்பானவை, அழுகியவை, உயிரிகள் தின்றவை முதலியவைகளை நீக்கிவிட்டு, தூய துணியால் நல்ல இலைகளை துடைத்துக் காம்பு, நரம்பு நீக்கி எடுத்துக் கொள்ளலாம்.</p><div class="ref"><p class="nubi">மருந்து செய் இயலும் கலையும்</p></div><p><span class="list-style-v1"></span>சிறிய இலை - இவற்றை நீரிலிட்டு கழுவி நீரை நன்கு வடித்து எடுத்துக் கொள்ளலாம்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<h4>LEAVES:</h4><p><span class="list-style-v1"></span>Leaves should be wiped with a clean cloth without washing them in water. Get rid of rotten and brown leaves.</p><p class="nubi">Sikitcha Ratna Deepam </p><p><span class="list-style-v1"></span>Large Leaves – Remove the stalks, midvein of leaves and wipe it with clean cloth. Don\'t use brown, rotten and insect eaten leaves.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p><p><span class="list-style-v1"></span>Small leaf – Pluck the small leaf from branch and rinse it thoroughly in water.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		},{
			'tn': '<h4>கிழங்கு</h4><p><span class="list-style-v1"></span>கிழங்கை நீரில் நன்றாகக் கழுவி எடுத்து, மேலேயுள்ள மீத்தோலைச் சீவிப் போக்கி, உள்நரம்புகளையும் நீக்கிக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<h4>TUBER (RHIZOME):</h4><p><span class="list-style-v1"></span>Wash the tuber thoroughly in water, peel off its outer skin and remove its internal veins to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<h4>பட்டை</h4><p><span class="list-style-v1"></span>பட்டையை சீலையால் துடைத்துச் சிறிய கத்தியால் இவற்றின் மேற்தோலை (மீத்தோல்) சுரண்டிப் போக்கிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<h4>BARK:</h4><p><span class="list-style-v1"></span>Wipe off the bark with a cloth and scrape off its epidermis with a knife to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<h4>பூக்கள்</h4><p><span class="list-style-v1"></span>காம்பு, புல்லிதழ், மகரந்தம் முதலியவைகளை நீக்கி இதழை மட்டும் எடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<h4 style="text-align: center;">FLOWERS:</h4><p><span class="list-style-v1"></span>Remove the stalk, calyx, pollens from flowers and use only the petals (corolla).</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<h4>வேர்</h4><p><span class="list-style-v1"></span>வேரில் ஒட்டிய மண்ணினைப் போக்கி தூய நீரில் கழுவி, எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<h4>ROOTS:</h4><p><span class="list-style-v1"></span>Rinse the roots thoroughly in clean water to remove the mud attached to it.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  }]
	  },
	  'abrus_precatorius_kundri': {
	    'tn': 'அகில் ',
	    'en': 'Aquilaria agallocha',
	    'nam': '(Agil)',
		'data': [{
			  'tn': '<p>அகிலின் வயிர பாகத்தை மட்டும் எடுத்துக் கொண்டு பொன் வறுவலாக வறுத்து உபயோகிக்கவும். மற்றைய பாகத்தைக் கழித்து விடுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			  'en': '<h4>Refining part: Heartwood</h4><p><span class="list-style-v1">Fry the heartwood of <i>Aquilaria agallocha</i> till it attains golden color or red color.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
			}]
	  }, 
	  'aconitum_ferox_naabi': {
	    'tn': 'அக்கரகாரம் ',
	    'en': 'Anacyclus pyrethrum',
		'nam': '(Akkarakaaram)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>அக்கரகாரத்தின் மேல்தோல் நீக்கி சிறு துண்டாக நறுக்கி உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span>Remove the epidermis of <i>Anacyclus pyrethrum</i>, cut it into small pieces and dry it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>அக்கரகாரத்தை ஒன்றிரண்டாய் தட்டி சிறுக வறுத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span>Pound the <i>Anacyclus pyrethrum</i> to pieces and roast it slightly to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  
	  
	  'castor_oil': {
	    'tn': 'ஆமணக்கு நெய் ',
	    'en': 'CASTOR OIL',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>ஆமணக்கு நெய்யைக் குப்பியில் அடைத்து கால் குப்பி மறையும்படி அதன் அடி பாகத்தை மணலுள் மறைத்து வைத்து இரண்டு நாள் சூரிய புடம் வைத்துத் தெளிவை வடித்தெடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span>Bottle the Castor oil, insolate it for two days with its bottom being buried in sand and filter the supernatant to get the purified oil.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'mahua_oil': {
	    'tn': 'இலுப்பை நெய்',
	    'en': 'MAHUA OIL',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>எழுத்தாணிப்பூண்டுக் குடிநீரை இலுப்பை நெய்க்குச் சமமாகக் கூட்டி எரித்து வடித்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Burn the Mahua oil with equal amount of decoction of Ezhuthaani poondu (<i>Stachytarpheta jamaicensis</i>) and filter it to get the purified oil.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'coconut_oil': {
	    'tn': 'தெங்கு நெய்',
	    'en': 'COCONUT OIL',
		'data': [{
		  'tn': '<p>தேங்காய் எண்ணெய்க்குச் சமமாகத் தேங்காய்ப்பால் விட்டுக் காய்ச்சி வடித்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Heat the Coconut oil with equal amount of coconut milk and filter it to get the purified oil.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'pungam_oil': {
	    'tn': 'புங்கு நெய்',
	    'en': 'PUNGAM OIL',
		'data': [{
		  'tn': '<p>புங்கு நெய்க்குச் சமன் புங்கன் பால் (புங்கன் சாறு) விட்டுக் காய்ச்சி வடிகட்டிக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Heat the Pungam oil with equal amount of milk or juice of Pungam (<i>Pongamia pinnata</i>) and filter it to get the purified oil.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'almond_oil': {
	    'tn': 'வாதுமை நெய்',
	    'en': 'ALMOND OIL',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வாதுமை நெய்யை ஒரு படிக பாத்திரத்தில் நிறைத்து, அரை பாகம் மறைய மணலில் புதைத்து 2 சாமம் இரவியில் வைத்து, அடி வண்டல் கலங்காமல் தெளிவை மாத்திரம் பஞ்சினால் தோய்த்துத் தோய்த்து மறு குப்பியில் பிழிந்து வடிகட்டுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span> வாதுமை நெய்யைக் குப்பியிலடைத்து அதன் அடிபாகத்தை மணலுள் மறைத்து வைத்து சூரியனில் காய வைத்துத் தெளிவை வடித்தெடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>Fill the Almond oil in a Glass bowl, insolate it with its bottom being buried in sand for 6 hours (2 Saamam). Collect the supernatant using cotton and squeeze it in another bowl to get the purified oil.</p><p class="nubi">Sikitcha Ratna Deepam</p><p><span class="list-style-v1"></span> Bottle the Almond oil. Insolate it with its bottom being buried in sand and filter the supernatant for use.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'neem_oil': {
	    'tn': 'வேம்பு நெய்',
	    'en': 'NEEM OIL',
		'data': [{
		  'tn': '<p>வேம்பு நெய்க்குச் சமமாக வேப்பம்பட்டைக் குடிநீர் கூட்டி எரித்து வடித்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Burn the Neem oil with equal amount of bark decoction of Neem (<i>Azadirachta indica</i>) and filter it to get the purified oil.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  
	  
	  
	  'hail_stone': {
	    'tn': 'ஆலங்கட்டி',
	    'en': 'HAIL STONE ',
	    'nam': '(AALANGATTI)',
		'data': [{
		  'tn': '<p>ஆலங்கட்டியைப் படிக பாத்திரத்திலேனும் மட்பாண்டத்திலேனும் போட்டுச் சிறிது கறிமஞ்சள் தூள் சேர்த்து 7 நாள் சூரிய புடம் வைத்துச் சீலையில் வடிகட்டிக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Put the Hail stone in a glassware or mud pot, add a little turmeric powder (<i>Curcuma longa</i>), keep this in the sunlight for 7 days and filter it to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'tender_coconut_water': {
	    'tn': 'இளநீர்',
	    'en': 'TENDER COCONUT WATER',
		'data': [{
		  'tn': '<p>மரத்தில் இருந்து கொண்டு வந்த இளநீரைக் கல்லில் மோதி உடைக்காமல் கத்தியால் சீவிச் சலத்தை உடனே வடிகட்டிக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Open the tender coconut with a knife and filter its sap to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'rice_washed_filtrate_kazhuneer': {
	    'tn': 'கழுநீர்',
	    'en': 'RICE WASHED FILTRATE',
	    'nam': '(KAZHUNEER)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> அரிசியை இரண்டாவது கழுவும் நீரை ஒரு சாமம் தெளிய வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span> முதன் முறை அரிசி கழுவிய நீரை விட்டு மறுமுறை கழுவிய நீரைப் பெற்றுக் கொள்ள வேண்டும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Allow the second rice washed filtrate to settle down for 3 hours (1 Saamam) to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p><p><span class="list-style-v1"></span> Use only the second time rice washed filtrate.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'vinegar_kaadi': {
	    'tn': 'காடி',
	    'en': 'VINEGAR',
		'nam': '(KAADI)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> காடியுள்ள பாண்டத்தை வாய் மூடி, 3 தினம் கடும் இரவியில் வைத்து மறுநாள் வண்டலை நீக்கி வடிகட்டிக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span> காடியைச் சூரியனில் காய வைத்து அடியில் படியும் வண்டல் நீக்கித் தெளிவை இறுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<p><span class="list-style-v1"></span> Insolate the Kaadi (Vinegar) for 3 days in a vessel with the mouth of vessel being closed with a cloth. Remove its residue and filter the supernatant to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p><p><span class="list-style-v1"></span> Dry the Kaadi under sunlight, remove the residue and filter the supernatant to get the purified liquid.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		}]
	  },
	  'water': {
	    'tn': 'தண்ணீர்',
	    'en': 'WATER',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சுத்த ஜலத்தை 7 மடிப்பாக மடித்த முரட்டுத் துணியால் 7 முறை வடிகட்டுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span> தூய துணியினூடாகவாவது பஞ்சினூடாகவாவது தண்ணீரை வடிகட்டி எடுக்க வேண்டும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><span class="list-style-v1"></span> Filter the clean water for 7 times through a seven folded thick cloth to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p><p><span class="list-style-v1"></span> Filter the water through a clean cloth or cotton to get the purified liquid.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		}]
	  },
	  'dew_water': {
	    'tn': 'பனி நீர்',
	    'en': 'DEW WATER',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> மெல்லிய சலவை செய்த சல்லாத் துணியை சுத்த நீரில் கசக்கிப் பிழிந்து உலர்த்தி இரவில் நெற்பயிர், அறுகம்புல் இவைகளின் மீது விரித்து காலை சூரிய உதயத்திற்கு முன் எடுத்துப் படிக பாத்திரத்தில் பிழிந்து வடிகட்டிக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span> வாழை இலைகளில் துளை செய்து அதில் சேரும் பனிநீரையும் எடுத்துக் கொள்ளலாம்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><span class="list-style-v1"></span> Spread a clean cloth over grasses at night, squeeze it in early morning and filter it in a glass vessel to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p><p><span class="list-style-v1"></span> Mould the banana leaf in a way that the dew water is collected in it.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		}]
	  },
	  'pumpkin_water': {
	    'tn': 'பூசணிக்காய் நீர்',
	    'en': 'PUMPKIN WATER',
		'data': [{
		  'tn': '<p>பூசணிக்காயை மேலே சிறிதளவு கீறி 12 கிராம் இந்துப்பைப் போட்டு அடியில் எழுத்தாணியால் துவாரம் செய்து மேலே தூக்கிக் கட்டி, அடியில் பீங்கான் வைத்து இறங்கும் நீர் எடுத்துக் கொள்ளவும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p>Scrape the pumpkin on the top slightly, add 12 g of Indhuppu in it, make a hole in the bottom and hang it. Collect the water oozing from pumpkin in a ceramic vessel.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'hot_water': {
	    'tn': 'வெந்நீர்',
	    'en': 'HOT WATER',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கரி நெருப்பில் தக்கபடி காய்ந்த நீரை மூன்று முறை கருத்த நிறமுள்ள சீலையால் வடிகட்டுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><span class="list-style-v1"></span> தூய துணியினூடாகவாவது பஞ்சினூடாகவாவது வெந்நீரை வடிகட்டி எடுக்க வேண்டும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<p><span class="list-style-v1"></span> Filter the hot water through a black cloth thrice to get the purified liquid.</p><p class="nubi">Sikitcha Ratna Deepam</p><p><span class="list-style-v1"></span> Filter the hot water through a clean cloth or cotton to get the purified liquid.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		}]
	  },
	  'animal_urine': {
	    'tn': 'விலங்குகளின் நீர்',
	    'en': 'ANIMAL’S URINE',
		'data': [{
		  'tn': '<p>வேண்டிய அளவு கோசலத்தை ஒரு புதுப்பாண்டத்திலிட்டு மத்தினால் அரை நாழிகை கடைந்து, அதிலுண்டாகும் நுரைகளை நீக்கிக் கெட்டியான சீலையில் வடிகட்டிக் கொள்க. இவ்வாறு 7 முறை செய்க. இது போலவே வெள்ளாடு, எருது, கழுதை, குதிரை, யானை, நாய் முதலியவைகளின் நீர்களையும் சுத்திகரித்தல் வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Churn the urine of cow for 12 minutes (half Naazhigai), then remove the foam and filter it through a thick cloth. Do this for 7 times. Similarly, the urine of goat, buffalo, donkey, horse, elephant, dog, etc., can be purified.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'human_urine': {
	    'tn': 'அமுரி (மனிதனின் நீர்)',
	    'en': 'HUMAN’S URINE',
		'data': [{
		  'tn': '<p>கலவி அறியாத சிறு குழந்தைகளின் சிறுநீரை வடிகட்டி எடுத்துக் கொள்ள வேண்டும். தொற்று நோய் ஏதும் இல்லாதது அறிந்து சிறுநீர் பெற்றுக் கோப்பையிலேனும், மட்பாண்டத்திலேனும் வடிகட்டிக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Collect the urine from disease free healthy children and filter it.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'aconitum_heterophyllum_athividayam': {
	    'tn': 'அதிமதுரம் ',
	    'en': 'Glycyrrhiza glabra',
		'nam': '(Athimaduram)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>அதிமதுரத்தைச் சுத்த ஜலத்தில் அலம்பி மேல் தோலைச் சீவிச் சிறு துண்டுகளாக நறுக்கி உலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span>Wash the <i>Glycyrrhiza glabra</i> in clean water, peel off its epidermal layer, make it into small pieces and dry it thoroughly.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'aconitum_napellus_iruvi': {
	    'tn': 'அதிவிடயம் ',
	    'en': 'Aconitum heterophyllum ',
		'nam': '(Athividayam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>அதிவிடயத்தின் மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span>Remove the epidermal layer of <i>Aconitum heterophyllum</i>, make it into small pieces and dry it under sunlight.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'acorus_calamus_vasambu': {
	    'tn': 'அபினி ',
	    'en': 'Papaver somniferum',
		'nam': '(Abini)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>சுமார் 510 கிராம் அபினிக்கு 2.1 லிட்டர் தீநீர் கூட்டி, அதை 3 பங்கு செய்து, ஒரு பங்கு நீராகிய 700 மி.லி நீரில் அபினியை நன்றாய்க் கரைத்து, ஒரு நாள் முற்றும் (24 மணி நேரம்) ஊறிய பின், வடிகட்டி, திப்பியில் இரண்டாவது பங்கு நீரைக் கொட்டிக் கரைத்து முன் போலவே செய்து, எஞ்சி நிற்கும் திப்பியை மூன்றாவது பங்கு நீரில் சேர்த்து முன்போலவே செய்து வடித்த நீர் யாவற்றையும் ஒன்றாகக் கூட்டி, நீர் எந்திரத்தில் காய்ச்சி, மெழுகு பதத்தில் எடுத்து, கல்கார்க்கு புட்டியில் சேமித்து வைத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Frozen latex</h4><p><span class="list-style-v1"></span>For detoxification of 510 g of <i>Papaver somniferum</i>, 2100 ml of distilled water is required. Mix 510 g of <i>Papaver somniferum</i> in 700 ml of distilled water, keep it for 24 hours, then filter it. To the residue, add another 700 ml of distilled water. Dissolve it well and filter it after 24 hours. To the remaining add another 700 ml of distilled water, dissolve well and filter it after 24 hours. Discard undissolved part and mix all the three filtrates. Boil this filtrate in a water bath till it  attains the consistency of wax. Store this material in a stoppered glass bottle.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அபினியுடன் சிறிது நெய் சேர்த்து மத்தித்து, வெற்றிலையில் தடவி நெருப்பனலில் வெதுப்பியெடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Frozen latex</h4><p><span class="list-style-v1"></span> Churn the <i>Papaver somniferum</i> with small amount of ghee, apply this over the betel leaf (<i>Piper betle</i>) and grill it. (Vethuppal)</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>வெங்காயத்தைத் துளைத்து அதனுள் அபினியை வைத்து இரண்டு சீலைமண் செய்து வெங்காயம் கருகாமல் வேக அவிபுடமாக வைத்தெடுத்துக் கொள்ளவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Frozen latex</h4><p><span class="list-style-v1"></span>Pierce the onion, stuff <i>Papaver somniferum</i> into it, then lute it twice and burn it without scorching the onion.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>ஜாதிக்காயைத் துளைத்து அதில் அபினியை வைத்து ஜாதிக்காய் தூள் கொண்டு அழுத்தி ஒரு மண்சீலை செய்து நெருப்பிலிட்டு வேகவிட்டு வைத்து அரைக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Frozen latex</h4><p><span class="list-style-v1"></span> Pierce the Jaathikkai (<i>Myristica fragrans</i>), stuff <i>Papaver somniferum</i> into it and lute it. Grill it and grind it to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>அபினியைப் போதுமான அளவு சுத்தமான நீரில் கரைத்துத் துணியின் வழியே வடிகட்டி, அத்துடன் சிறிது பசும்பால் சேர்த்துக் காய்ச்சவும். கலவை கெட்டியாகும் தருணத்தில், எரிப்பதை நிறுத்தித் தானாகவே குளிரச் செய்யவும். பின்னர் இதனை ஓர் கல்வத்தில் இட்டு, மேற்படி விழுது மூழ்கும் அளவிற்கு இஞ்சிச் சாறு ஊற்றி ஊற வைத்து, திரவாம்சத்தை வற்ற வைக்கவும். இவ்விதம் ஏழு தடவைகள் திரும்பத் திரும்ப ஊற வைத்து, நன்கு உலர்ந்த பின் எடுத்துப் பத்திரப்படுத்தவும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><h4>Refining part: Frozen latex</h4><span class="list-style-v1"></span>Dissolve the <i>Papaver somniferum</i> in clean water and filter it. Boil it with little amount of cow’s milk till it solidifies. On cooling, drench it in ginger juice and dry it. Perform this process for 7 times and store it after complete drying.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		}]
	  },
	  'allium_sativum_vellai_vengaayam': {
	    'tn': 'அமுக்கிரா ',
	    'en': 'Withania somnifera',
		'nam': '(Amukkara)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>அமுக்கிரா வேரைப் பாலில் வேக வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p><span class="list-style-v1"></span> Steam the <i>Withania somnifera</i> in cow’s milk to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>அமுக்கிராவை நன்கு உலர்த்தி இடித்துச் சூரணஞ்செய்து ஒரு புதுப்பாண்டத்தில் பாலைவிட்டு சீலையால் வேடுகட்டி அதில் இச்சூரணத்தை வைத்து மேல்சட்டி மூடி, ஒரு சாமம் எரித்த பின் சூரணத்தை இரவி முகத்தில் உலர்த்தி அரைத்தெடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p><span class="list-style-v1"></span>Take milk in a vessel and cover its mouth with a cloth. Place the <i>Withania somnifera</i> powder on the cloth, burn it for 3 hours (1 Saamam), insolate it and grind it.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'aloe_barbadensis_kumari': {
	    'tn': 'அரத்தை',
	    'en': 'Alpinia galanga',
		'nam': '(Araththai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>அரத்தையை மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p><span class="list-style-v1"></span>Peel off the epidermal layer of <i>Alpinia galanga</i>, cut into small pieces and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'aloe_littoralis_kariyabolam': {
	    'tn': 'அறுகன் வேர்',
	    'en': 'Cynodon dactylon',
		'nam': '(Arugan root)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>அறுகன் வேரின் கணுக்களை நீக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span><i>Cynodon dactylon</i> gets purified on removing its nodes. </p><p class="nubi">Mooligai Iyal  </p>',
		}]
	  },
	  'alpinia_galanga_araththai': {
	    'tn': 'ஆமணக்கு விதை',
	    'en': 'Ricinus communis',
		'nam': '(Aamanakku seed)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>ஆமணக்கு விதையை இளநீரில் வேக வைத்து கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span>Boil the <i>Ricinus communis</i> in tender coconut water and rinse it effectively to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'alpinia_officinarum_sittrarathai': {
	    'tn': 'ஆற்றுத்தும்மட்டி',
	    'en': 'Citrullus colocynthis',
		'nam': '(Aatru thumatti)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>ஆற்றுத்தும்மட்டியை வரகு வைக்கோலால் சுட்டு வெடிக்கும் பருவத்தில் உள்ளிருக்கும் விதை, மேல் தோல் இவைகளை நீக்கி, சதைப்பற்றை மாத்திரம் எடுத்து உபயோகிக்க வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span>Burn the <i>Citrullus colocynthis</i> in Kodo millet straw until it cracks with sound. Then remove the epicarp and seeds of it and use the fleshy part.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'anacyclus_pyrethrum_akkarakaaram': {
	    'tn': 'ஆனைத்திப்பிலி',
	    'en': 'Scindapsus officinalis',
		'nam': '(Aanai thippili)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>ஆனைத்திப்பிலியைக் காடியில் ஒரு சாமம் ஊற வைத்துப் பின் இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Soak the <i>Scindapsus officinalis</i> in vinegar (Kaadi) for 3 hours and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>ஆனைத்திப்பிலியைக் காடியிலாவது செம்மறியாட்டு மூத்திரத்திலாவது மூன்று மணி நேரம் நனைய வைத்து உலர்த்த சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>Soak the <i>Scindapsus officinalis</i> either in vinegar (Kaadi) or sheep’s urine for 3 hours and dry it effectively to get the purified form.</p><p class="nubi">Sarakku Suththi Sei Muraigal  </p>',
		}]
	  },
	  'andrographis_paniculata_nilavembu': {
	    'tn': 'இஞ்சி',
	    'en': 'Zingiber officinale',
		'nam': '(Inji)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>இஞ்சியின் மேல் தோலை நீக்கி, கழுவி எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p><span class="list-style-v1"></span>Peel off the skin of <i>Zingiber officinale</i> and rinse it off well to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'anethum_graveolens_kaatu_sathakuppai': {
	    'tn': 'இஞ்சி சாறு',
	    'en': 'Zingiber officinale',
		'nam': '(Inji saaru)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>இஞ்சியை அரைத்து நீரில் கலக்கி தெளிந்த பின் நீரை வடித்தெடுத்துக் கொண்டு கீழே நிற்கும் படிவை அகற்றி விடவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Juice of Rhizome</h4><p><span class="list-style-v1"></span>Grind the <i>Zingiber officinale</i> and mix it in water. Take the supernatant for use and dispose the sediment.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'anethum_graveolens_sathakuppai': {
	    'tn': 'இருவி (வச்சநாவி)',
	    'en': 'Aconitum napellus',
		'nam': '(Iruvi)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> இருவியை வெள்ளாட்டு மூத்திரத்தில் அல்லது கோமூத்திரத்தில் வேக வைத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Boil the <i>Aconitum napellus</i> in goat\'s urine or cow\'s urine to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இருவியை சிறுதுண்டுகளாக நறுக்கிப் பசுவின் நீரில் ஊறவிட்டு எடுத்து உலர்த்திக் கொள்ளலாம்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Soak the small pieces of <i>Aconitum napellus</i> in cow\'s urine and dry it to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>  இருவியைப் பசுவின் நீரில் அவிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Steam the Aconitum napellus  in cow\'s urine to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'aquilaria_agallocha_agil': {
	    'tn': 'இலவங்கப்பட்டை',
	    'en': 'Cinnamomum verum',
		'nam': '(Lavanga pattai)',
		'data': [{
		  'tn': '<p>இலவங்கப்பட்டையை வெயிலில் உலர்த்த வேண்டும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Bark</h4><p>Insolate the <i>Cinnamomum verum</i> effectively to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'aristolochia_indica_echchuramooli': {
	    'tn': 'இலவங்கப்பத்திரி (தமாலபத்திரி)',
	    'en': 'Cinnamomum tamala',
		'nam': '(Lavanga pathiri)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> இலவங்கப்பத்திரியை வெயிலில் உலர்த்த வேண்டும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Leaf</h4><p><span class="list-style-v1"></span> Dry the <i>Cinnamomum tamala</i> in sunlight to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இலவங்கப்பத்திரியிலுள்ள பெருநரம்புகளைக் களைந்து இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Remove the veins of <i>Cinnamomum tamala</i> and dry it under sunlight.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'asparagus_racemosus_thaneervittan_kizhangu': {
	    'tn': 'ஈச்சுரமூலிப்பட்டை',
	    'en': 'Aristolochia indica',
		'nam': '(Echchuramooli)',
		'data': [{
		  'tn': '<p>ஈச்சுரமூலிப்பட்டையைக் (தலைச்சுருளிப்பட்டை) கடும் வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root</h4><p>Dry the bark of <i>Aristolochia indica</i> in heavy sunlight.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'boswellia_serrata_kundhirigam': {
	    'tn': 'ஊமத்தன் விதை',
	    'en': 'Datura metal',
		'nam': '(Oomathai seed)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> ஊமத்தன் விதையை எலுமிச்சம்பழம் சாற்றில் மூன்று மணி நேரம் ஊறப்போட சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Soak the <i>Datura metal</i> seeds in lemon juice for 3 hours to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஊமத்தன் விதையை மூன்று மணி நேரம் தண்ணீரில் ஊறப்போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Drench the <i>Datura metal</i> seeds in water for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Sei Muraigal</p>',
		}]
	  },
	  'brassica_alba_venkadugu': {
	    'tn': 'எட்டிக்கொட்டை',
	    'en': 'Strychnos nux-vomica',
		'nam': '(Etti)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையை நாவற்பட்டைச் சாற்றில் 24 நிமிடம் ஊற வைத்து, நீரில் கழுவி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Soak the <i>Strychnos nux-vomica</i> in the bark juice of Naaval (<i>Syzygium cumini</i>) for 24 minutes and rinse it off with water to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையை நெல்லுடன் சேர்த்து அவித்துச் சிறுகீரைச் சாற்றில் 3 மணி நேரம் ஊற வைத்துக் கழுவி எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Steam the <i>Strychnos nux-vomica</i> with paddy, soak it in Sirukeerai juice (<i>Amaranthus tricolor</i>) for 3 hours and rinse it off to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையை நெல்லில் அவித்து சிறுகீரைச் சாற்றில் ஊற வைத்து பின்பு தேற்றான் விதைச் சாற்றில் வேகவிட்டு எடுத்துக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Steam the <i>Strychnos nux-vomica</i> with paddy and soak it in Sirukeerai juice (<i>Amaranthus tricolor</i>). Later boil it in seed juice of Thetraan (<i>Strychnos potatorum</i>) to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டி விதையை சிறுகீரைச் சாற்றில் மூன்று மணி நேரம் எரித்தெடுத்து மேல்தோல் சீவி விடவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Strychnos nux-vomica</i> in Sirukeerai juice (<i>Amaranthus tricolor</i>) for 3 hours and peel off its seed coat to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையை கரு ஊமத்தை சாற்றில் அவித்தெடுத்து மேல்தோல் சீவி விடவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Strychnos nux-vomica</i> in Karuoomathi juice (<i>Datura metal</i>) and peel off its seed coat to get the purified form.</p><p class="nubi">Mooligai Iyal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மணல் பரப்பி அதன் மேல் எட்டிக்கொட்டைகளைப் பரப்பி மேல் மணலிட்டு தண்ணீர் தெளித்து 3 நாட்கள் ஊறிய பின் எடுத்து தோல் சீவி எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Place the <i>Strychnos nux-vomica</i> between sand beds and sprinkle water on it. Take the seed after 3 days and peel off its seed coat to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையை சீவல் செய்து வெள்ளாட்டுப் பாலில் 30 நாழிகை ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Strychnos nux-vomica</i> slices in goat’s milk for 12 hours (30 Naazhigai) to get the purified form.</p><p class="nubi">Mooligai Iyal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையைப் பிளந்து மூன்று நாட்கள் காடியில் ஊறவிட்டு பின்னர் கோணியில் தேய்த்து எடுத்து வெயிலில் உலரவிட்டெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Split the <i>Strychnos nux-vomica</i> and soak it in vinegar (Kaadi) for 3 days. Then rub it with gunny bag and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Sei Muraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டிக்கொட்டையைக் குப்பைக்கீரைச் சாற்றில் மூன்று மணி நேரம் வேகவைத்து உலர்த்த சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Boil the <i>Strychnos nux-vomica</i> in Kuppai keerai juice (<i>Amaranthus spinosus</i>) for 3 hours and dry it effectively to get the purified form.</p><p class="nubi">Sarakku Suththi Sei Muraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எட்டி விதையைத் தேற்றான் வேர் மற்றும் சாற்றில் 48 நிமிடம் எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Strychnos nux-vomica</i> in Thetran root and juice (<i>Strychnos potatorum</i>) for 48 minutes to get the purified form.</p><p class="nubi">Sarakku Suththi Sei muraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>எட்டிக் கொட்டையைச் சிறு சிறு துண்டுகளாக வெட்டி, ஆமணக்குவேர்க் கஷாயத்தில் நன்றாகக் கொதிக்க வைத்துக் கழுவி உலர்த்தி எடுத்து, பின்னர் நெய்யில் பொரித்துக் கொள்ளவும். இதுவே இம்ப்காப்ஸ் முறை.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><span class="list-style-v1"></span>  Boil the <i>Strychnos nux-vomica</i> pieces in root decoction of Aamanakku (<i>Ricinus communis</i>) and rinse it off. After drying, roast it with ghee.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai </p>',
		}]
	  },
	  'brassica_juncea_kadugu': {
	    'tn': 'ஏலம்',
	    'en': 'Elettaria cardamomum',
		'nam': '(Elam)',
		'data': [{
		  'tn': '<p>ஏலத்தில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Exclude the impurities from the <i>Elettaria cardamomum</i> and insolate it.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'butea_monosperma_palaasu_vithai': {
	    'tn': 'ஓமம்',
	    'en': 'Carum copticum',
		'nam': '(Omam)',
		'data': [{
		  'tn': '<p>ஓமத்தைச் சுண்ணாம்பு நீரில் ஒரு சாமம் ஊற வைத்து எடுத்து உலர்த்தவும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Soak the <i>Carum copticum</i> in the supernatant of lime stone water for 3 hours (1 Saamam) and dry it effectively to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		}]
	  },
	  'caesalpinia_bonduc_kazharchi_seed': {
	    'tn': 'கஞ்சா',
	    'en': 'Cannabis sativa',
		'nam': '(Kanja)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கஞ்சாவின் விதை, காம்பு நீக்கி நீரில் நன்றாக ஊற வைத்துப் பிசைந்து, வடிகட்டி, மறுபடியும் புதிய நீரில் ஊற வைத்து, முன் செய்த முறைப்படிப் பிசைந்து எடுக்க வேண்டும். இவ்வாறு ஏழு முதல் பத்து முறைக்கு குறையாமல் செய்து, வெயிலில் உலர்த்தி, பசு நெய் விட்டு இளம்வறுப்பாய் வறுத்து எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Whole plant</h4><p><span class="list-style-v1"></span> Remove the seeds and stalks of <i>Cannabis sativa</i>. Soak it in water, knead it and filter it. Again soak it in fresh water and knead it in same manner as before. Do this atleast seven to ten times and then dry in sunlight. Later, slightly fry it in cow’s ghee.</p><p class="nubi">The Siddha Formulary of India  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கஞ்சாவின் விதை, காம்பு முதலியவற்றைப் போக்கி, ஓரிரவு சுத்த ஜலத்தில் சிறிது சோற்றுப்பு சேர்த்து ஊறப்போட்டு, அடுத்த நாள் ஏழு முறை பிசைந்து பிசைந்து கழுவிக் கெட்டி சீலையில் பிழிந்து, விடுதிகளாகச் செய்து இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Whole plant</h4><p><span class="list-style-v1"></span> After eliminating seeds and petioles, soak the <i>Cannabis sativa</i> leaf in Kariyuppu solution for one night. On the next day, knead and squeeze the juice from it for seven times. Then insolate it.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கஞ்சாவைப் பசும்பாலில் வேகவைத்து எடுத்து நீரில் நன்றாய் பத்து முறை பிசைந்து அலம்பி எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Whole plant</h4><p><span class="list-style-v1"></span> Boil the <i>Cannabis sativa</i> leaves in cow’s milk. Then knead it for ten times and rinse it off to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கஞ்சாவின் விதை, காம்பு நீக்கிவிட்டு, சோற்றுப்புக் கலந்த நீரில் ஊறவிட்டுப் பிசைந்து, நீரைப் பிழிந்து விட்டுக் காய வைத்து எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<h4>Refining part: Whole plant</h4><p><span class="list-style-v1"></span> After removing the seed and stalk, soak the <i>Cannabis sativa</i> leaf in Kariyuppu solution. Knead well and squeeze out the water from it. Later dry it to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		}]
	  },
	  'cannabis_sativa_kanja': {
	    'tn': 'கடலுறிஞ்சிப்பட்டை',
	    'en': 'Salacia reticulata',
		'nam': '(Kadalurinji pattai)',
		'data': [{
		  'tn': '<p>கடலுறிஞ்சிப்பட்டையைக் கடும் வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Bark</h4><p>Dry the <i>Salacia reticulata</i> in heavy sunlight to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'carum_copticum_omam': {
	    'tn': 'கடுகு',
	    'en': 'Brassica juncea',
		'nam': '(Kadugu)',
		'data': [{
		  'tn': '<p>கடுகை நன்றாய் ஆய்ந்து கடும் வெயிலில் இரண்டு நாள் உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Remove the impurities from <i>Brassica juncea</i> and dry it in sunlight for 2 days to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'cassia_senna_nilaavarai': {
	    'tn': 'கடுகுரோகிணி',
	    'en': 'Picrorhiza scrophulariiflora',
		'nam': '(Kadugurohini)',
		'data': [{
		  'tn': '<p>வேப்பிலைச்சாற்றிலேனும், நொச்சியிலைச் சாற்றிலேனும் கடுகுரோகிணியை ஒரு சாமம் ஊற வைத்து இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root and Rhizome</h4><p>Soak the <i>Picrorhiza scrophulariiflora</i> either in leaf juices of Neem (<i>Azadirachta indica</i>) or Notchi (<i>Vitex negundo</i>) for 3 hours (1 Saamam) and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'cedrus_deodara_devadaru': {
	    'tn': 'கடுக்காய்',
	    'en': 'Terminalia chebula',
		'nam': '(Kadukkai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கடுக்காயைக் கழுநீரில் ஊறப்போட்டு, மஞ்சள் நீரைப் போக்கிக் கொட்டையை நீக்கி உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Soak the <i>Terminalia chebula</i> in rice washed filtrate (Kazhuneer), remove its seed and dry it completely.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கடுக்காயின் மேற்பகுதியை எடுத்துக் கொண்டு கொட்டையை நீக்கிவிட சுத்தியாகும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Remove the seeds of <i>Terminalia chebula</i> and use its outer part.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		}]
	  },
	  'celastrus_paniculatus_vaaluluvai': {
	    'tn': 'கரியபோளம்',
	    'en': 'Aloe littoralis',
		'nam': '(Kariyabolam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கரியபோளத்தை வெள்ளாட்டு அமுரியில் கரைத்து வடித்து சுண்டக் காய்ச்சவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Dried Latex</h4><p><span class="list-style-v1"></span> Dissolve the <i>Aloe littoralis</i> latex in goat’s urine, filter it and heat it until the liquid gets reduced.</p><p class="nubi">Mooligai Iyal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கரியபோளத்தைக் காடி வார்த்து மூன்று மணி நேரம் அரைத்து வெயிலிலே வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Dried Latex</h4><p><span class="list-style-v1"></span> Grind the <i>Aloe littoralis</i> latex with vinegar (Kaadi) for 3 hours and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Sei Muraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கரியபோளத்தைக் காடியில் வேகவைக்கச் சுத்தியாம்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Dried Latex</h4><p><span class="list-style-v1"></span> Boil the <i>Aloe littoralis</i> latex in vinegar (Kaadi) to get the purified form.</p><p class="nubi">Saarakku Suththi Sei Muraigal</p>',
		}]
	  },
	  'centella_asiatica_vallarai': {
	    'tn': 'கருஞ்சீரகம்',
	    'en': 'Nigella sativa',
		'nam': '(Karunjeeragam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கருஞ்சீரகத்தை வறுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Roast the <i>Nigella sativa</i> to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருஞ்சீரகத்தை நன்றாய் ஆய்ந்து இரவியிலுலர்த்திப் பொன்மேனியாக வறுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Exclude the impurities from <i>Nigella sativa</i>, insolate it and roast it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருஞ்சீரகத்தைச் சுண்ணாம்புத் தெளிவு நீரில் மூன்று மணி நேரம் ஊறவைத்து உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Soak the <i>Nigella sativa</i> in supernatant of lime stone water for 3 hours and dry it completely to get the purified form.</p><p class="nubi">Sarakku Suththi Sei Muraigal </p>',
		}]
	  },
	  'cinnamomum_tamala_lavanga_pathiri': {
	    'tn': 'கரும்பு',
	    'en': ' Saccharum officinarum',
		'nam': '(Karumbu)',
		'data': [{
		  'tn': '<p>கரும்பின் மேல் தோலையும், கணுவையும் கழித்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Stem</h4><p>Remove the epidermis and nodes of <i>Saccharum officinarum</i> to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'cinnamomum_verum_lavangappattai': {
	    'tn': 'கலப்பைக் கிழங்கு',
	    'en': 'Gloriosa superba',
		'nam': '(Kalappai kizhangu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கலப்பைக்கிழங்கை சிறு சிறு துண்டுகளாக வெட்டி உப்பு சேர்த்த மோரில் ஏழு நாட்கள் இரவு தோறும் ஊறவைத்து,பகலில் வெயிலில் உலர்த்தி வர தூய்மையாகும்.</p><p class="nubi">குணபாடம் மூலிகை வகுப்பு</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p><span class="list-style-v1"></span> Soak small pieces of <i>Gloriosa superba</i> in salted butter milk for 7 days at night and insolate it on that same 7 days to get the purified form.</p><p class="nubi"> Gunapaadam Mooligai Vaguppu </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> கலப்பைக் கிழங்கைச் சிறு சிறு துண்டுகளாக நறுக்கி, கோமூத்திரத்தில் 24 மணி நேரம் வரை ஊற வைத்து, பின்னர் நீரில் கழுவி எடுத்து உலர்த்திப் பத்திரப்படுத்தவும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p><span class="list-style-v1"></span> Soak small pieces of <i>Gloriosa superba</i> in cow’s urine for 24 hours and then rinse it off with water. Later dry it well.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		}]
	  },
	  'cissampelos_pareira_vattathiruppi': {
	    'tn': 'கழற்சி கொட்டை',
	    'en': 'Caesalpinia bonduc',
		'nam': '(Kazharchi seed)',
		'data': [{
		  'tn': '<p>கழற்சி கொட்டையின் மேலோட்டை நீக்கிப் பருப்பை வெந்நீரில் கழுவி உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Rinse the <i>Caesalpinia bonduc</i> with hot water and dry it thoroughly.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'cissus_quadrangularis_pirandai': {
	    'tn': 'கற்கடகசிங்கி',
	    'en': 'Rhus succedanea',
		'nam': '(Karkadagasingi)',
		'data': [{
		  'tn': '<p>கற்கடகசிங்கியை வாதுமை எண்ணெயில் வறுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Gall</h4><p>Roast the <i>Rhus succedanea</i> in almond oil to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'citrullus_colocynthis_aatru_thumatti': {
	    'tn': 'கஸ்தூரி மஞ்சள்',
	    'en': 'Curcuma aromatica',
		'nam': '(Kasturi manjal)',
		'data': [{
		  'tn': '<p>கஸ்தூரி மஞ்சளின் மேல் தோல் நீக்கி சிறு துண்டாக நறுக்கி உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p>After removal of its epidermal layer, <i>Curcuma aromatica</i> is cut into small pieces. Then dry it effectively.<p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'clerodendrum_serratum_siruthekku': {
	    'tn': 'காக்கணம்',
	    'en': 'Clitoria ternatea',
		'nam': '(Kaakkanam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> காக்கணம் விதையை இளம் வறுப்பாய் வறுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் மூலிகை வகுப்பு</p>',
		  'en': '<h4>Refining part: Root and Seeds</h4><p><span class="list-style-v1"></span> Roast the <i>Clitoria ternatea</i> seeds slightly to get the purified form.</p><p class="nubi"> Gunapaadam Mooligai Vaguppu </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> காக்கணம் வேரைப் பாலில் வேகவைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் மூலிகை வகுப்பு</p>',
		  'en': '<h4>Refining part: Root and Seeds</h4><p><span class="list-style-v1"></span> Boil the <i>Clitoria ternatea</i> root in milk to get the purified form.</p><p class="nubi"> Gunapaadam Mooligai Vaguppu  </p>',
		}]
	  },
	  'clitoria_ternatea_kaakkanam': {
	    'tn': 'காட்டாத்திப்பூ',
	    'en': 'Woodfordia fruticosa',
		'nam': '(Kaattathi poo)',
		'data': [{
		  'tn': '<p>காட்டாத்திப்பூவில் இலை, காம்பு முதலியவற்றை நீக்கி வெயிலில் உலர்த்தவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Flower</h4><p>Remove leaves, petioles from <i>Woodfordia fruticosa</i> and then dry it in sunlight.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  }, 
	  'commiphora_myrrha_vaalenthirabolam': {
	    'tn': 'காட்டு சதகுப்பை',
	    'en': 'Anethum graveolens',
		'nam': '(Kaatu sathakuppai)',
		'data': [{
		  'tn': '<p>காட்டு சதகுப்பையில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Remove the dust particles from <i>Anethum graveolens</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'coptis_teeta_peetharohini': {
	    'tn': 'காட்டு மிளகு ',
	    'en': 'Piper attenuatum',
		'nam': '(Kaatu milagu)',
		'data': [{
		  'tn': '<p>காட்டு மிளகை வெற்றிலைச் சாற்றில் அரை நாழிகை ஊறப்போட்டு இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Soak the <i>Piper attenuatum</i> in betel leaf juice (<i>Piper betle</i>) for 12 minutes (½ Naazhigai) and then dry it in sunlight.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'coriandrum_sativum_dhaniya': {
	    'tn': 'கார்போகரிசி ',
	    'en': 'Psoralea corylifolia',
		'nam': '(Kaarbogarisi)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கார்போகரிசியைத் திருநீற்றுப் பச்சிலைச் சாற்றில் நனைத்து உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Soak the <i>Psoralea corylifolia</i>  in juice of Thiruneetru pachilai (<i>Ocimum basilicum</i>) and dry it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> கார்ப்போகரிசியைப் பாலில் அவித்து எடுத்து உலர்த்தச் சுத்தியாகும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Boil the <i>Psoralea corylifolia</i>  in milk and dry it to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna </p>',
		}]
	  },
	  'coscinium_fenestratum_maramanjal': {
	    'tn': 'கிச்சிலிக்கிழங்கு ',
	    'en': 'Curcuma zedoaria',
		'nam': '(Kichilikizhangu)',
		'data': [{
		  'tn': '<p>கிச்சிலிக்கிழங்கைக் கடுரவியிலுலர்த்தி இடித்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p>Dry the <i>Curcuma zedoaria</i> in sunlight and pulverize it.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'costus_speciosus_koshtam': {
	    'tn': 'கிராம்பு ',
	    'en': 'Syzygium aromaticum',
		'nam': '(Kirambu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கிராம்பில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Flower bud</h4><p><span class="list-style-v1"></span> Segregate the <i>Syzygium aromaticum</i> from its impurities and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> கிராம்பில் மொட்டுப்போல் உள்ள பூவை எடுத்து எறியவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Flower bud</h4><p><span class="list-style-v1"></span> Remove the dome part of <i>Syzygium aromaticum</i> to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'crocus_sativus_kungumapoo': {
	    'tn': 'குக்கில் ',
	    'en': 'Shorea robusta',
		'nam': '(Kukkil)',
		'data': [{
		  'tn': '<table><tbody><tr><td>1. வேப்பம்பட்டை</td></tr><tr><td>2. கண்டங்கத்திரி</td></tr><tr><td>3. சீந்தில்</td></tr><tr><td>4. கோரைக்கிழங்கு</td></tr><tr><td>5. நிலவேம்பு</td></tr><tr><td>6. ஆடாதோடை</td></tr><tr><td>7. வெண்ணொச்சி</td></tr><tr><td>8. பேய்ப்புடல்</td></tr></tbody></table><p><span class="list-style-v1"></span>  இவ்வெட்டினையும் ஒவ்வொரு பிடி ஒரு மட்கடத்திலிட்டு ஜலம் விட்டு, வேடுகட்டி, அதன்மேல் குக்கிலை வைத்து மேல் சட்டி மூடி, ஒரு சாமம் எரித்தெடுக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Resin</h4><table><tr><td>1. Vembu (Azadirachta indica)</td></tr><tr><td>2. Seendhil (<i>Tinospora cordifolia</i>)</td></tr><tr><td>3. Kandangathiri (<i>Solanum surattense</i>)</td></tr><tr><td>4. Koraikizhangu (<i>Cyperus rotundus</i>)</td></tr><tr><td>5. Nilavembu (<i>Andrographis paniculata</i>)</td><tr><td>6. Aadaathodai (<i>Justicia adhatoda</i>)</td></tr><tr><td>7. Peipudal (<i>Trichosanthes cucumerina</i>)</td></tr></tr><td>8 Vennotchi (<i>Vitex negundo</i>)</td></tr></table><p><span class="list-style-v1"></span>Put handful of each of bark of the above drugs together in pot of water. Cover the pot’s mouth with cloth, place the <i>Shorea robusta</i> on it, close it with a lid and burn it for 3 hours (1 Saamam) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குங்கிலியத்தைத் திரிபலாதி கஷாயத்தில் தோலாந்திரமாகக் கட்டி இரண்டு ஜாமமெரிக்கவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p><p><b>குறிப்பு: எல்லாவிதக் குங்கிலியங்களையும் இவ்வாறே சுத்தி செய்து கொள்க.</b></p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Shorea robusta</i> in Thiripala decoction for 6 hours (2 Saamam) by hanging it as Tholayandhiram to get the purified form.</p><p><b>Note:</b> All types of Kungiliam can get purified by this method.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குக்கிலை எருமை மோரில் ஒரு நாள் வரை ஊறப் போடவும்.</p><p class="nubi">மூலிகை இயல்</p></p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Shorea robusta</i> in buffalo’s butter milk for one day to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குக்கிலை வெளிப்பிரயோகமாக உபயோகிக்கும் போது சுத்தி செய்யத் தேவை இல்லை. ஆனால், உட்பிரயோகத்துக்குப் பசுப்பாலில் கழுவி எடுத்தோ அல்லது சீலையில் முடிந்து ஆறு மணி நேரம் இளநீரில் தோலாயந்திரமாக அவித்து எடுத்தோ உபயோகிக்கலாம்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p></p>',
		  'en': '<p><span class="list-style-v1"></span> Rinse the <i>Shorea robusta</i> with cow’s milk or burn the <i>Shorea robusta</i> in tender coconut water for 6 hours by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குக்கிலை எலுமிச்சம் பழச்சாற்றில் ஊறவைத்து உலர்த்தினால் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Shorea robusta</i> in lemon juice and dry it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> பேய்ப்புடல், வேப்பம்பட்டை, ஆடாதோடை இவற்றைச் சரி அளவு கூட்டி நீர்விட்டு வடித்து இவற்றில் குக்கில் பொடியைக் கலந்து வெயிலில் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<table><tr><td>1. Peipudal (<i>Trichosanthes cucumerina</i>)</td></tr><tr><td>2. Bark of Vembu (<i>Azadirachta indica</i>)</td></tr><tr><td>3. Adathodai (<i>Justicia adhatoda</i>)</td></tr></table><p><span class="list-style-v1"></span>Make decoction from equal amounts of above drugs. Mix the <i>Shorea robusta</i> powder in this decoction and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> கடுக்காய், தான்றிக்காய், நெல்லிமுள்ளி இவற்றைத் தனித்தனியே குடிநீராக்கிக் கொள்ளவும். குக்கிலைத் தோலாயந்திரமாகக் கட்டி ஒவ்வொரு குடிநீரிலும் மூன்று மணி நேரம் எரிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Shorea robusta</i> separately in decoctions of Kadukkai (<i>Terminalia chebula</i>), Thaandrikkai (<i>Terminalia bellirica</i>) and Nellimulli (<i>Phyllanthus emblica</i>) for 3 hours by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> வேப்பம் பட்டையை இடித்துக் குடிநீராக்கி அதில் குக்கிலைத் தோலாயந்திரமாக முடிந்து காய்ச்சிப் பிழிந்து எடுத்துக் கொள்ளவும். பின்னர் பூவரசம்பட்டை அல்லது பூவரசம் பூவில் கசாயம் வைத்து அதில் காய்ச்சிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Shorea robusta</i> in bark decoction of Vembu (<i>Azadirachta indica</i>) by hanging it as Tholayandhiram and then boil it in bark or flower decoction of Poovarasu (<i>Thespesia populnea</i>) to get the purified form.      </p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> திரிபலை, தேவதாரம், பேய்ப்புடல் இவற்றை இடித்துக் கஷாயம் செய்து அதில் குக்கிலைக் கிழிகட்டியிட்டு பன்னிரண்டு மணி நேரம் எரிக்கவும். பின்பு பேய்ப்புடல், பத்திரி, வேம்பின் பட்டை இவற்றைக் கஷாயம் செய்து அதிலிட்டுக் காய்ச்சிக் கொள்ள குக்கில் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<p><span class="list-style-v1"></span> Make the decoction from Thiripala, Peipudal (<i>Trichosanthes cucumerina</i>) and Devdaru (<i>Cedrus deodara</i>) together and burn the <i>Shorea robusta</i> in this decoction by hanging it as Tholayandhiram for 12 hours. Then boil it in decoction made of Peipudal (<i>Trichosanthes cucumerina</i>), Pathiri and bark of Vembu (<i>Azadirachta indica</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குங்கிலியத்தை மூட்டை கட்டி கடுக்காய், தான்றிக்காய்,நெல்லிக்காய் இவற்றின் கசாயத்திலே ஊறப்போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<p><span class="list-style-v1"></span>  Soak the <i>Shorea robusta</i> bundle in Thiripala decoction to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> வேப்பம்பட்டை, கண்டங்கத்திரிவேர், பேய்ப்புடல்,ஆடாதோடை இலை இவை வகைக்கு 35 கிராம் கூட்டி துவைத்து 2 லிட்டர் தண்ணீரில் போட்டு எட்டிலொன்றாகச் சுருக்கிக் கொள்ள வேண்டும். பானையில் சீலைகட்டி குங்கிலியம் மேலே வைத்து மூடி எரியவிட்டு மெழுகு பதமாக இறக்கவும். அந்த தண்ணீரில் குங்கிலியத்தைக் கழுவ சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p></p>',
		  'en': '<p><span class="list-style-v1"></span>  Mix 2 litres of water and 35 g each of bark of Vembu (<i>Azadirachta indica</i>), root of Kandangathiri (<i>Solanum surattense</i>), Peipudal (<i>Trichosanthes cucumerina</i>) and leaf of Adathoda (<i>Justicia adhatoda</i>) and boil this mixture to reduce by ⅛ (250 ml). Then vapour bath the <i>Shorea robusta</i> in water to Mezhugu patham and rinse it off with above decoction to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குங்கிலியத்தை முப்பலைக் கியாழத்திலாவது இளநீரிலாவது எரித்தெடுக்கலாம்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p></p>',
		  'en': '<p><span class="list-style-v1"></span>  Burn the <i>Shorea robusta</i> in Thiripala decoction or tender coconut water to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		}]
	  },
	  'croton_tiglium_nervaalam': {
	    'tn': 'குங்குமப்பூ ',
	    'en': 'Crocus sativus ',
		'nam': '(Kungumapoo)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> குங்குமப்பூவை ஒரு தூய காகிதத்தின் மேற்பரப்பி, நெருப்பனலில் காட்டி, நொறுங்கும் பதத்தில் எடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Androecium and Gynoecium</h4><p><span class="list-style-v1"></span> Spread the <i>Crocus sativus</i> on a clean paper and flame it till it breaks into pieces.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குங்குமப்பூவைச் சிறுக வறுத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Androecium and Gynoecium</h4><p><span class="list-style-v1"></span> Roast the <i>Crocus sativus</i> slightly to get the purified form.</p><p class="nubi">Mooligai Iyal</p>',
		}]
	  },
	  'cuminum_cyminum_seerakam': {
	    'tn': 'குந்திரிகம் (பறங்கி சாம்பிராணி) ',
	    'en': 'Boswellia serrata ',
		'nam': '(Kundhirigam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> குந்திரிகத்தை வேலம்பட்டைச் சாராயத்தில் போட்டு ஒரு நாள் ஊறவைத்து எடுத்துக்கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<h4>Refining part: Resin</h4><p><span class="list-style-v1"></span> Soak the <i>Boswellia serrata</i> in bark juice of Velam (<i>Acacia hilotica</i>) for one day to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> குந்திரிகத்திலுள்ள தூசுகள், மரப்பட்டைகளைப் புடைத்துச் சுத்தி செய்யவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Resin</h4><p><span class="list-style-v1"></span> Winnow away the dust particles and wood impurities from  <i>Boswellia serrata</i> to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna</p>',
		}]
	  },
	  'curculigo_orchioides_nilappanaikizhangu': {
	    'tn': 'குமரி (கற்றாழை) ',
	    'en': 'Aloe barbadensis ',
		'nam': '(Kumari)',
		'data': [{
		  'tn': '<p>கற்றாழையின் தோலை அகற்றி அதன் உள்ளிருக்கும் சோற்றை எடுத்து தண்ணீர் விட்டு நன்றாக அலம்பி நீரை வடிக்கவும். இவ்விதம் பத்து முறை செய்யக் குழகுழப்பு அடங்கிவிடும். இதை ஒரு மெல்லிய துணியில் முடிந்து கயிற்றில் தொங்க விட்டு ஓரிரவு கழித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Inner leaf gel</h4><p>Remove the green rind of <i>Aloe barbadensis</i> and rinse the leaf gel for 10 times. Then bundle it in a thin cloth and hang it for one night to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'curcuma_aromatica_kasturi_manjal': {
	    'tn': 'குரோசாணி ஓமம்',
	    'en': 'Hyoscyamus niger ',
		'nam': '(Kurosaani Omam)',
		'data': [{
		  'tn': '<p>குரோசாணி ஓமத்தில் காம்பு, குச்சி முதலியன போக்கி நன்றாய்த் தேய்த்துப் புடைத்து மண்ணைப் போக்கி உலர்த்திக் கொள்க.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Winnow away the dust particles, sand from the <i>Hyoscyamus niger</i>  and dry it effectively.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'curcuma_longa_manjal': {
	    'tn': 'குன்றி',
	    'en': 'Abrus precatorius ',
		'nam': '(Kundri)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> குன்றி விதையின் மேல்தோலை நீக்கி, உள்ளிருக்கும் விதை இலையை நீக்கிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Seeds and Root</h4><p><span class="list-style-v1"></span> Remove the seed coat and radicle of <i>Abrus precatorius</i> seed to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> குன்றி வேரை வெள்ளாட்டு மூத்திரத்தில் ஊறவைத்து உலர்த்திக் கொள்ளவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Seeds and Root</h4><p><span class="list-style-v1"></span> Soak the root of <i>Abrus precatorius</i> in goat’s urine and dry it to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'curcuma_zedoaria_kichilikizhangu': {
	    'tn': 'கூகைநீர்',
	    'en': 'Maranta arundinacea ',
		'nam': '(Koogai neer)',
		'data': [{
		  'tn': '<p>கூகைநீரை ஏழு முறை ஜலம்விட்டுக் கரைத்துக் கழுவித் தெளிந்தபின் வடிகட்டி, இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Flour from root tuber</h4><p>Dissolve the <i>Maranta arundinacea</i> in water for 7 times and filter it. Dry the precipitate in sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'curcuma_zedoaria_poolankizhangu': {
	    'tn': 'கொறுக்காய்ப்புளி',
	    'en': 'Pithecellobium dulce ',
		'nam': '(Korukkaipuli)',
		'data': [{
		  'tn': '<p>கொறுக்காய்ப்புளியில் ஜலம் தெளித்துப் பிசறி, நிழலில் ஒரு நாள் ஆறப்போட்டு எடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit pulp</h4><p>Knead the pulp of <i>Pithecellobium dulce</i> with water and dry it in shadow for one day to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'cynodon_dactylon_arugan_root': {
	    'tn': 'கோட்டம்',
	    'en': 'Costus speciosus',
		'nam': ' (Koshtam)',
		'data': [{
		  'tn': '<p>கோட்டத்தில் வேறொன்றுமில்லாமல் ஆய்ந்து இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p>Remove the unwanted particles from <i>Costus speciosus</i> and dry it in sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'cyperus_rotundus_korai_kizhangu': {
	    'tn': 'கோரைக்கிழங்கு',
	    'en': 'Cyperus rotundus ',
		'nam': '(Korai kizhangu)',
		'data': [{
		  'tn': '<p>கோரைக்கிழங்கை கடும்வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p>Dry the <i>Cyperus rotundus</i> in heavy sunlight to get the purified form. </p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'datura_metal_oomathai_seed': {
	    'tn': 'சடாமாஞ்சில் (கெந்தமாஞ்சில்)',
	    'en': 'Nardostachys grandiflora',
		'nam': '(Sadamanjil)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சடாமாஞ்சிலைக் கடுரவியில் ஒரு நாழிகை உலர வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root </h4><p><span class="list-style-v1"></span> Dry the <i>Nardostachys grandiflora</i> in heavy sunlight for 24 minutes (1 Naazhigai) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சடாமாஞ்சிலில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root </h4><p><span class="list-style-v1"></span> Remove the unwanted materials from the <i>Nardostachys grandiflora</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'elettaria_cardamomum_elam': {
	    'tn': 'சதகுப்பை',
	    'en': 'Anethum graveolens ',
		'nam': '(Sathakuppai)',
		'data': [{
		  'tn': '<p>சதகுப்பையில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Remove the unwanted materials from <i>Anethum graveolens</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'elettaria_rigens_sittrelam': {
	    'tn': 'சந்தனம்',
	    'en': 'Santalum album ',
		'nam': '(Santhanam)',
		'data': [{
		  'tn': '<p>சந்தனத்தின் வயிர பாகத்தை எடுத்துக் கொண்டு மற்றைய பாகத்தைக் கழித்து விடுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Heartwood</h4><p>Use only the heartwood of <i>Santalum album</i> and get rid of other parts.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'embelia_ribes_vaividangam': {
	    'tn': 'சர்க்கரை',
	    'en': '',
		'nam': 'Sugar',
		'data': [{
		  'tn': '<p>சர்க்கரையை அம்மியில் வைத்துக் கட்டியெல்லாம் நொறுங்கும் படி அரைத்து முறத்திலிட்டுக் கொழித்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Grind the Sugar and winnow it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'ferula_asafoetida_perungaayam': {
	    'tn': 'சாதிக்காய்',
	    'en': 'Myristica fragrans ',
		'nam': '(Jathikkai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சாதிக்காயின் மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seed kernel</h4><p><span class="list-style-v1"></span> Remove the outer shell of <i>Myristica fragrans</i>, cut the seed kernel into pieces and dry it under sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாதிக்காயின் மேல்தோல் நீக்கி நெய்யில் வறுத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Seed kernel</h4><p><span class="list-style-v1"></span> Remove the outer shell of <i>Myristica fragrans</i> and roast its seed kernel in the ghee.</p><p><b>Note: Roast the <i>Myristica fragrans</i> in ghee until it cracks with sound.</b></p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாதிக்காயின் மேல் தோலை நீக்கி, உட்பருப்பையே உபயோகிக்க வேண்டும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Seed kernel</h4><p><span class="list-style-v1"></span> Use only the seed kernel of <i>Myristica fragrans</i> and get rid of its outer shell.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna</p>',
		}]
	  },
	  'gloriosa_superba_kalappai_kizhangu': {
	    'tn': 'சாதிப்பத்திரி',
	    'en': 'Myristica fragrans ',
		'nam': '(Jathipathiri)',
		'data': [{
		  'tn': '<p>சாதிப்பத்திரியில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Aril of Nutmeg</h4><p> Remove the impurities from <i>Myristica fragrans</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'glycyrrhiza_glabra_athimaduram': {
	    'tn': 'சித்திரமூல வேர்ப்பட்டை (கொடிவேலி)',
	    'en': 'Plumbago indica ',
		'nam': '(Sithiramoola verpattai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சித்திரமூல வேர்ப்பட்டையின் உள் நரம்பை நீக்கி மேல் பட்டையை மாத்திரம் இடித்துச் சூரணம் செய்து, ஒரு வாயகன்ற பாத்திரத்தில் பால்விட்டு, வேடுகட்டி, அதன் மேல் சூரணத்தைப் பரப்பி, மேல்சட்டி மூடி, ஒரு சாமம் சிறுக எரித்துச் சூரணத்தை வடித்துலர்த்தி, மறுபடியும் கல்வத்திலிட்டரைத்து வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Remove the inner pith portion of root of <i>Plumbago indica</i> and powder the outer portion. Take milk in a vessel, cover its mouth with a cloth and place this powder on the cloth. Close it with a lid and burn it for 3 hours (1 Saamam). Dry and sieve it. Grind it again in mortar to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கொடிவேலி வேரைக் கழுவிய பின், பசும்பாலில் அமிழும்படி வைத்து அவித்து எடுத்து, பின் கழுவி, வேரின் வைரத்தை (நடு நரம்பு) நீக்கி விடச் சுத்தியாகும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Rinse the <i>Plumbago indica</i> root, soak and boil it in cow\'s milk. Then wash it and remove the vein of root to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna </p>',
		}]
	  },
	  'helicteres_isora_valampurikkai': {
	    'tn': 'சிவதை வேர்',
	    'en': 'Operculina turpethum ',
		'nam': '(Sivathai ver)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>சிவதையைப் பாலில் வேக வைத்து உலர்த்த சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Boil the <i>Operculina turpethum</i> root in milk and dry it</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சிவதை வேரின் நரம்புகளை நீக்கிப் பாலில் அவித்து வெயிலில் உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Remove the inner pith portion of <i>Operculina turpethum</i> root, boil it in milk and insolate it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'hydnocarpus_laurifolia_neeradimuthu': {
	    'tn': 'சிறுதேக்கு',
	    'en': 'Clerodendrum serratum ',
		'nam': '(Siruthekku)',
		'data': [{
		  'tn': '<p>சிறுதேக்கின் மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p>Remove the epidermis of <i>Clerodendrum serratum</i>, cut into pieces and dry it under sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'hyoscyamus_niger_kurosaani_omam': {
	    'tn': 'சிறுநாகப்பூ',
	    'en': 'Mesua ferrea ',
		'nam': '(Sirunaaga poo)',
		'data': [{
		  'tn': '<p>சிறுநாகப்பூவில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Flower</h4><p>Remove the impurities from <i>Mesua ferrea</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'maranta_arundinacea_koogai_neer': {
	    'tn': 'சிற்றரத்தை',
	    'en': 'Alpinia officinarum ',
		'nam': '(Sittrarathai)',
		'data': [{
		  'tn': '<p>சிற்றரத்தையை ஒன்றிரண்டாய் தட்டி சிறிது வறுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p>Break the <i>Alpinia officinarum</i> into pieces and roast it slightly to get the purified form.</p><p class="nubi">Mooligai Iyal</p>',
		}]
	  },
	  'mesua_ferrea_sirunaaga_poo': {
	    'tn': 'சிற்றேலம்',
	    'en': 'Elettaria rigens ',
		'nam': '(Sittrelam)',
		'data': [{
		  'tn': '<p>சிற்றேலத்தைப் பொன்வறுவலாக வறுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit and seeds</h4><p>Roast the <i>Elettaria rigens</i> to attain golden colour to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'musa_paradisiaca_vaazhai_poo': {
	    'tn': 'சீந்தில் கொடி',
	    'en': 'Tinospora cordifolia ',
		'nam': '(Seendhil kodi)',
		'data': [{
		  'tn': '<p>சீந்தில் கொடியின் மேல்தோலைச் சீவி நீக்கி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Stem</h4><p>Remove the epidermis of <i>Tinospora cordifolia</i> stem to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'myristica_fragrans_jathikkai': {
	    'tn': 'சீரகம்',
	    'en': 'Cuminum cyminum ',
		'nam': '(Seerakam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சீரகத்தைச் சுண்ணாம்பு நீரில் ஒரு சாமம் ஊறவைத்து எடுத்துக் காய வைத்துக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Soak the <i>Cuminum cyminum</i> in lime stone water for 3 hours (1 Saamam) and dry it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நற்சீரகத்தை வெயிலிலே ஆறு மணி நேரம் உலர்த்திச் சிறுக வறுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Dry the <i>Cuminum cyminum</i> in sunlight for 6 hours and roast it slightly.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'myristica_fragrans_jathipathiri': {
	    'tn': 'சுக்கு',
	    'en': 'Zingiber officinale ',
		'nam': '(Sukku)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சுக்கின் மேல்தோலைச் சீவி, உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Dried  Rhizome</h4><p><span class="list-style-v1"></span> Remove the scale leaf of <i>Zingiber officinale </i>and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஓர் எடை சுக்குக்கு இரண்டு எடை சுண்ணக்கல் சேர்த்துத் தாளித்து, ஒரு சாமம் சென்றபின் கழுவி உலர்த்தி மேல்தோலைச் சீவிக் கழிக்க வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Dried  Rhizome</h4><p><span class="list-style-v1"></span> Slake the <i>Zingiber officinale</i> (1 part) with lime stone (2 parts) and rinse it off after 3 hours (1 Saamam). Remove the outer layer to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சுக்கின் மேல்தோல் நீக்கி சுண்ணநீரில் ஒரு மணி நேரம் ஊறவைத்து எடுத்து உலர்த்தவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Dried  Rhizome</h4><p><span class="list-style-v1"></span> Remove the scale leaf of <i>Zingiber officinale</i>, soak it in lime stone solution for 1 hour and dry it.</p><p class="nubi">Mooligai Iyal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மாச்சுக்காகத் தெரிந்தெடுத்து கற்சுண்ணத்தில் இதைச் சேர்த்துத் தாளித்துக் கழுவி எடுத்து மேல்தோலைச் சீவி நீக்கிக் கொள்ள வேண்டும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<h4>Refining part: Dried  Rhizome</h4><p><span class="list-style-v1"></span> Slake the <i>Zingiber officinale</i> (Maasukku) with lime stone, rinse it off and remove its scale leaf to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சுக்கை நொச்சிச் சாற்றில் ஒன்பது முறை நனைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Dried  Rhizome</h4><p><span class="list-style-v1"></span> Dip the <i>Zingiber officinale</i> in juice of Notchi (<i>Vitex negundo</i>) for 9 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சுக்கைத் தோல் போக்கி சுண்ணாம்பு பூசி மூன்று மணி நேரம் வெயிலில் உலர்த்திக் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Dried  Rhizome</h4><p><span class="list-style-v1"></span> Remove the scale leaf of <i>Zingiber officinale</i>, coat it with lime stone, dry it in sunlight for 3 hours and rinse it off to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'naaganam': {
	    'tn': 'செஞ்சந்தனம்',
	    'en': 'Pterocarpus santalinus ',
		'nam': '(Senchandhanam)',
		'data': [{
		  'tn': '<p>செஞ்சந்தனத்தின் வயிர பாகத்தை எடுத்துக் கொண்டு மற்றைய பாகத்தைக் கழித்து விடுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Heartwood</h4><p>Use only the heartwood of <i>Pterocarpus santalinus</i> and get rid of other parts.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'nardostachys_grandiflora_sadamanjil': {
	    'tn': 'செவ்வியம்',
	    'en': 'Piper nigrum ',
		'nam': '(Sevviyam)',		
		'data': [{
		  'tn': '<p>செவ்வியத்தின் மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root </h4><p>Peel off the epidermis of <i>Piper nigrum</i>, chop into small pieces and dry it in sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'nicotiana_tabacum_pugaiyilai': {
	    'tn': 'சேராங்கொட்டை',
	    'en': 'Semecarpus anacardium ',
		'nam': '(Seraangottai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையின் மூக்கை வெட்டி, சுண்ணாம்புக்கல் நடுவில் வைத்து, கள் அல்லது காடிநீர் விட்டு 7 முறை தாளித்து கழுவி எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Chop the pseudocarp (nose tip) of <i>Semecarpus anacardium</i>, place it in lime stone heap and slake it with toddy or vinegar for 7 times. Then rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையைப் புளியிலை குடிநீரிலும், புரசம்பூக் குடிநீரிலும், பசுஞ்சாணிப்பாலிலும், கற்றாழைச்சாற்றிலும் முறையே வேக வைத்து எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Boil the <i>Semecarpus anacardium</i> separately in decoction of tamarind leaves, flower decoction of Purasam (<i>Butea monosperma</i>), cow dung juice and Aloe vera juice to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையினுடைய மூக்கை வெட்டி கழுநீரிலும், எருமைப்பாலிலும் ஒவ்வொரு சாமம் ஊற வைத்து, ஜலத்தில் அலம்பி இரவியில் உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Chop the pseudocarp (nose tip) of <i>Semecarpus anacardium</i> and soak it separately in rice washed filtrate (Kazhuneer) and buffalo\'s milk for 3 hours. Rinse it off with water and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையின் மூக்கை வெட்டி விட்டு மற்றவைகளை சிறு துண்டுகளாக்கி ஒரு மட்பாண்டத்திலிட்டு எருமைச்சாணத்தையும் ஒரு படி எருமை மூத்திரத்தையும் சேர்த்து அடுப்பு மேலேற்றி சுண்டக்காய்ச்சி எடுக்க சேராங்கொட்டையிலுள்ள விட எண்ணெய் அதில் இருந்து கசிந்து சாணத்தில் இறங்கும். அவ்விதம் இறங்கியதும் சாணம் கருநிறம் அடையும். அச்சமயத்தைப் பார்த்து பாண்டத்தை அடுப்பிலிருந்து இறக்கி, பருப்பை மட்டும் எடுத்து சுத்தமாக கழுவி துடைத்து கொள்ளவும். பிறகு வேறொரு பாண்டத்தை அடுப்பிலேற்றி அதில் ஒரு படி எருமையின் மோரை ஊற்றி, துடைத்து வைத்திருக்கும் பருப்புகளைப் போட்டு, தீ எரித்து, மோர் முற்றிலும் சுண்டும் வரையில் காய்ச்சி, பிறகு பருப்பை எடுக்கவும். இவ்விதம் சுத்தி செய்ய சேராங்கொட்டையின் கெட்ட வீரியம் குறைந்து நல்ல குணமுடையதாகும். பிறகு அதை எவ்விதமான மருந்து முறையிலும் உபயோகிக்கலாம்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Remove the pseudocarp (nose tip) of <i>Semecarpus anacardium</i>, cut it into small pieces and heat it in the mixture of buffalo dung and buffalo\'s urine of 1.3 liters (1 padi) till the poisonous oil spills out and dung turns black. Then rinse it off and wipe well. Burn this <i>Semecarpus anacardium</i> in buffalo\'s butter milk (1 padi) till the liquid gets evaporated. Rinse it to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையின் மூக்கை வெட்டி விட்டு சாணிப்பாலைக் கரைத்து அதனுள் போட்டு அடுப்பேற்றிக் கொதிக்க வைத்து எடுக்கவும். இப்படியே ஏழு தரம் கொதிக்க வைத்து எடுத்து கழுவி வைக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Chop the pseudocarp (nose tip) of <i>Semecarpus anacardium</i> and boil it in cow dung juice for 7 times. Rinse it off to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையைப் பாக்கு வெட்டியால் நான்கு துண்டுகளாக வெட்டிப் பசுவின் சாணம் கரைத்த நீரில் (சாணிப் பாலில்) ஊறப் போடவும். மூன்று நாட்களின் பின் அதனை எடுத்து நன்னீரில் கழுவிய பின்பு தோலாயந்திரத்தில் மீண்டும் சாணிப்பால் விட்டு அமிழ வைத்து அவித்து எடுத்துப் பின்னர் இளநீரினால் கழுவி எடுத்து உலர்த்திக் கொள்ளவும்.</p><p><b class="notes">குறிப்பு: இதனைக் கையாளும் பொழுது முற்காப்பாகக் கைகளில் நல்லெண்ணெயைப் பூசிக் கொள்ளவும்.</b></p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Soak the pseudocarp (nose tip) chopped <i>Semecarpus anacardium</i> in cow dung juice for three days. Rinse it off with clean water and boil it by immersing in cow dung juice as Tholayandhiram. Rinse it off with tender coconut water and dry it to get the purified form.</p><p><b>Note:</b> Ensure to apply sesame oil in hands before performing this purification process as a safety measure.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஒரு நாள் முழுமையும் நல்ல தண்ணீரில் ஊற வைத்து மறுநாள் எடுத்துக் கொள்ள சேராங்கொட்டை சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Soak the <i>Semecarpus anacardium</i> in pure water for one whole day and use it on next day to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையின் மூக்கை வெட்டி நல்லெண்ணெயில் வறுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Roast the pseudocarp (nose tip) chopped <i>Semecarpus anacardium</i> in sesame oil to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சேராங்கொட்டையின் மூக்கு போன்ற பகுதியை அதன் பால் உடலிற்படாமல் வெட்டி எரிந்துவிட்டு சாணப்பாலில் அல்லது சாணம் கரைத்த நீரில் போட்டு கொதிக்க வைத்துக் கழுவி எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Remove the pseudocarp (nose tip) of <i>Semecarpus anacardium</i>, boil it in cow dung juice and rinse it off to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பாக்கு வெட்டியால், சேராங்கொட்டையை பாக்கு வெட்டுவது போல நான்கு, நான்கு துண்டுகளாக வெட்டி, அதன் மூக்கு போன்ற பகுதியை பிரித்தெடுத்து நீக்கிவிட்டு, மற்ற பகுதிகளை பசுவின் சாணம் கரைத்த நீரில் மூன்று நாட்கள் ஊற வைக்கவும். ஊறிய சேராங்கொட்டையைப் பிரித்தெடுத்து, முதலில் சுத்தமான நீரிலும், பின்னர் இளநீரிலும் கழுவி எடுத்துக் கொண்டு வெயிலில் உலர்த்தவும். இதுவே இம்ப்காப்ஸ் முறை.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<h4>Refining part: Nut</h4><p><span class="list-style-v1"></span> Remove the pseudocarp (nose tip) of <i>Semecarpus anacardium</i> and cut it into 4 pieces. Soak this in cow dung juice for three days. Rinse it off with clean water and tender coconut water. Insolate it to get the purified form.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai </p>',
		}]
	  },
	  'nigella_sativa_karunjeeragam': {
	    'tn': 'தக்கோலம்',
	    'en': '',
		'nam': 'Thakkolam',
		'data': [{
		  'tn': '<p>தக்கோலத்தை வெயிலில் உலர்த்த வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Dry the Thakkolam in sunlight to get the purified form.</p><p class="nubi"> Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'operculina_turpethum_sivathai_ver': {
	    'tn': 'தண்ணீர்விட்டான் கிழங்கு',
	    'en': 'Asparagus racemosus ',
		'nam': '(Thaneervittan kizhangu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தண்ணீர்விட்டான் கிழங்கை உலர்த்தி இடித்துத் தூள் செய்து பால் ஆவியில் அவித்து வெயிலில் உலர்த்தி மீண்டும் அரைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p><span class="list-style-v1"></span> Pulverise the dried <i>Asparagus racemosus</i> and subject it to vapour bath of milk. Insolate it and grind it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நன்கு உலர்த்தி இடித்துச் சூரணம் செய்து ஒரு புதுப்பாண்டத்தில் பாலை விட்டு சீலையால் வேடுகட்டி, அதில் இச்சூரணத்தை வைத்து மேல்சட்டி மூடி, ஒரு சாமம் எரித்த பின் சூரணத்தை இரவிமுகத்தில் உலர்த்தி அரைத்தெடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p><span class="list-style-v1"></span> Take milk in a pot and cover its mouth with a cloth. Place the dried powder of <i>Asparagus racemosus</i> on this cloth and close it with a lid. Burn this for 3 hours (1 Saamam), insolate it and grind it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'papaver_somniferum_abini': {
	    'tn': 'தனியா (கொத்தமல்லி விதை)',
	    'en': 'Coriandrum sativum ',
		'nam': '(Dhaniya)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தனியாவை வெந்நீரிலேனும் பழரசத்திலேனும் கிழிகட்டி எரித்து இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Burn the <i>Coriandrum sativum</i> in hot water or lemon juice by hanging it as Tholayandhiram and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>கொத்தமல்லி விதையை வறுத்து நன்றாய் தேய்த்துப் புடைத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Fry the <i>Coriandrum sativum</i> and winnow it to get the purified form.</p><p class="nubi">Mooligai Iyal</p>',
		}]
	  },
	  'phyllanthus_emblica_nelikkai': {
	    'tn': 'தாளிசபத்திரி',
	    'en': 'Taxus baccata ',
		'nam': '(Thaleesapathiri)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தாளிசபத்திரியில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Leaf</h4><p><span class="list-style-v1"></span> Remove the impurities from <i>Taxus baccata</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தாளிசபத்திரியை வறுத்தெடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Leaf</h4><p><span class="list-style-v1"></span> Roast the <i>Taxus baccata</i> to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'phyllanthus_emblica_nelli_vatral': {
	    'tn': 'தான்றிக்காய்',
	    'en': 'Terminalia bellirica ',
		'nam': '(Thandrikkai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தான்றிக்காயின் கொட்டையை நீக்கி விட்டு மேற்பகுதியை எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Remove the seeds of <i>Terminalia bellirica</i> and use it.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தான்றிக்காயைத் தாழை விழுது சாற்றில் ஒரு சாமம் ஊற வைத்து விதையை நீக்கி இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Terminalia bellirica</i> in juice of Thaazhai vizhuthu (<i>Pandanus odoratissimus</i>) for 3 hours (1 Saamam), remove its seed and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'picrorhiza_scrophulariiflora_kadugurohini': {
	    'tn': 'திப்பிலி',
	    'en': 'Piper longum ',
		'nam': '(Thippili)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> திப்பிலியைக் கொடிவேலி இலைச்சாற்றில் ஒரு நாழிகை (24 நிமிடம்) ஊற வைத்துப் பின்னர் இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Soak the <i>Piper longum</i> in leaf juice of Kodiveli (<i>Plumbago indica</i>) for 24 minutes (1 Naazhigai) and dry it in sunlight.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> திப்பிலியைப் பழச்சாற்றில் ஊற வைத்தெடுத்துக் கழுவி வைத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Piper longum </i>in lemon juice and rinse it off to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> திப்பிலியைச் சித்திரமூலக் கசாயத்திலே மூன்று மணி நேரம் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Piper longum</i> in decoction of Kodiveli (<i>Plumbago indica</i>) for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> திப்பிலியைச் செம்மறியாட்டு மூத்திரத்திலாவது, காடியிலாவது மூன்று மணி நேரம் அரைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the <i>Piper longum</i> in sheep\'s urine or vinegar for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		}]
	  },
	  'piper_attenuatum_kaaatu_milagu': {
	    'tn': 'திப்பிலி மூலம்',
	    'en': 'Piper longum ',
		'nam': '(Thippili moolam)',
		'data': [{
		  'tn': '<p>திப்பிலி மூலத்தின் கணுக்களைப் போக்கி உலர வைத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Root</h4><p>Remove the nodes of the root of <i>Piper longum</i> and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'piper_betle_vetrilai': {
	    'tn': 'தேவதாரு',
	    'en': 'Cedrus deodara ',
		'nam': '(Devadaru)',
		'data': [{
		  'tn': '<p>தேவதாருவின் வைரத்தை எடுத்துப் பொன்வறுவலாய் வறுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Heartwood</h4><p>Roast the heartwood of <i>Cedrus deodara</i> to attain golden colour to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'piper_cubeba_vaalmilagu': {
	    'tn': 'தேற்றான் கொட்டை',
		'en': 'Strychnos potatorum',
		'nam': '(Thetrankottai)',
		'data': [{			
		  'tn': '<p><span class="list-style-v1"></span> தேற்றான் கொட்டையைப் பசும் பாலில் 24 நிமிடம் ஊற வைத்து, நீரில் கழுவி உலர்த்திக் கொள்ளவும். இதன் எடைக்கு நான்கு பங்கு சிறுகீரைச் சாற்றை விட்டு அரைப்பாகம் சுண்ட எரித்து, நீரில் கழுவி எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Soak the <i>Strychnos potatorum</i> in cow\'s milk for 24 minutes, wash it with water and dry it. Burn it with juice of Sirukeerai (<i>Amaranthus tricolor</i>). After this juice has been reduced to half, rinse it off with water.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தேற்றான் கொட்டையை ஒரு நாள் தண்ணீரில் வேக வைத்து மேல்தோலை ஓட்டு வில்லையின் மேல் தேய்த்து சுத்தமான நீரில் கழுவி துணியினால் துடைத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Strychnos potatorum</i> in water for one day, rub it against an earthen tile, rinse it off with water and wipe it well to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தேற்றான் கொட்டையைப் பசுவின் பாலில் 24 நிமிடங்கள் (ஒரு நாழிகை) ஊற வைத்து நீரில் கழுவி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Strychnos potatorum</i> in cow\'s milk for 24 minutes (1 Naazhigai) and rinse it off with water to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna </p>',
		}]
	  },
	  'piper_longum_thippili_moolam': {
	    'tn': 'நாகணம்',
	    'en': '',
		'nam': 'Naaganam',
		'data': [{
		  'tn': '<p>நாகணத்தை வில்லை வில்லையாக அறுத்து, ஒரு சட்டியில் நெய் தடவி, அதனிற்போட்டு வில்லைகள் வளையும்படி வறுத்தெடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Slice the Naaganam and roast it in a ghee coated pan till it bends to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'piper_longum_thippili': {
	    'tn': 'நாபி',
	    'en': 'Aconitum ferox ',
		'nam': '(Naabi)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைச் சிறுசிறு துண்டுகளாக்கி, பசு நீரில் ஒரு நாள் ஊற வைத்து, எடுத்து நீர் விட்டு கழுவி உலர்த்தி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Chop the <i>Aconitum ferox</i> into small pieces, soak it in cow\'s urine for one day and rinse it off with water to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் நாபிக்கு 210 கிராம் அதிகம் புளிக்காத மோர் விட்டு வெயிலில் வைக்கவும். இவ்வாறு பத்து நாட்கள் செய்யவும். இவ்வாறு பசுவெண்ணையிலும், பசுவின் சாணிப்பாலிலும் செய்து கழுவி எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 g of <i>Aconitum ferox</i>, pour 210 ml of butter milk and insolate it. Perform this process for 10 days. Repeat the same process with cow\'s butter and cow dung juice separately. Then rinse it off well to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைச் சிறுதுண்டுகளாக நறுக்கிக் கோநீரில் மூன்று நாள் ஊறப்போட்டுக் கோநீரை வடித்து இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Chop the <i>Aconitum ferox</i> into small pieces, soak it in cow\'s urine for three days and dry it in sunlight after draining away the cow\'s urine. </b></p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெள்ளாட்டு மூத்திரம் அல்லது கோமூத்திரத்தில் நாபியை வேக வைத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Aconitum ferox</i> in goat\'s urine or cow\'s urine to get the purified form.</p><p class="nubi">Mooligai Iyal  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைச் சிறு துண்டுகளாக நறுக்கிப் பசுவின் நீரில் ஊறவிட்டு எடுத்து உலர்த்திக் கொள்ளலாம்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the small pieces of <i>Aconitum ferox</i> in cow\'s urine and dry it to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைச் சிறுகீரைச் சாற்றில் ஒரு நாள் ஊறவைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Aconitum ferox</i> in juice of Sirukeerai (<i>Amaranthus tricolor</i>) for one day to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைப் பாக்கு போலே வெட்டி ஆட்டு மூத்திரத்திலாவது கோமியத்திலாவது மூன்று நாட்கள் ஊறப்போட்டுக் கழுவி நிழலில் உலர்த்திப் போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Chop the <i>Aconitum ferox</i> into pieces and soak it in goat\'s urine or cow\'s urine for 3 days. Rinse it and dry it in shadow.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெட்டின நாபியை எலுமிச்சம் பழச்சாற்றில் ஒரு நாள் ஊறப் போட்டுக் கழுவி, நிழலில் உலர்த்திப் பின்பு பசு மூத்திரத்தில் ஒரு நாள் ஊற வைத்துக் கழுவி நிழலில் உலர்த்த சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Aconitum ferox</i> pieces separately in lemon juice and cow\'s urine for one day. Rinse it off and dry it in shadow.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியை நாய் மூத்திரத்திலும், வெள்ளாட்டு மூத்திரத்திலும் தனித்தனியே ஒரு நாள் ஊற வைத்து எடுத்துக் கழுவிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Aconitum ferox</i> separately in dog\'s urine and goat\'s urine for one day and rinse it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைச் சிறுக வெட்டி கோமூத்திரத்திலாவது ஆட்டு மூத்திரத்திலாவது ஊறப்போட்டு மூன்று நாட்கள் வெயிலிலே வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the pieces of <i>Aconitum ferox</i> in cow\'s urine or goat\'s urine for 3 days and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> <b>நிருவிசம்</b> (விசமற்ற ஒரு வகை நாபிக் கிழங்கு) - இதைப் பசுவின் பாலில் அவிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Niruvisam [A type of non-poisonous Naabi]. Steam the Niruvisam in cow\'s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> <b>கருநாபி:</b> எருமை மூத்திரத்தில் கருநாபியை ஒன்றே கால் மணி நேரம் அவித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> <b> Karunaabi</b> <br /> Soak the small pieces of <i>Aconitum ferox</i> in cow\'s urine and dry it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எருமைத் தயிரில் அவிக்க நாபி சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Steam the <i>Aconitum ferox</i> in buffalo\'s curd to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைப் பசுவின் பாலிலே கொதிக்க வைத்து அதிலே மூன்று நாட்கள் ஊற வைக்கவும். பின் சிறுகீரைச் சாற்றில் ஒரு நாள் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Boil the <i>Aconitum ferox</i> in cow\'s milk and keep it soaked in that milk for 3 days. Then soak it in juice of Sirukeerai (<i>Amaranthus tricolor</i>) for one day to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியை வெள்ளாட்டு மூத்திரத்தில் மூன்று நாட்கள் ஊற வைத்துக் கழுவி உலர்த்தி, மறுநாள் பசுவின் நீரில் ஒரு சட்டியில் வேக வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Soak the <i>Aconitum ferox</i> in goat\'s urine for 3 days, rinse it off and dry it. Boil this in cow\'s urine to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைப் புளியங்கொட்டை பிரமாணம் நறுக்கி, ஒரு நாள் பசுவின் மூத்திரத்தில் ஊறப் போடவும். அடுத்த நாள் பசுவின் நெய்யில் ஊறப்போடவும். ஊறாவிட்டால் நெய்யைத் தடவி மூன்று நாட்கள் வெயிலிலே வைக்கவும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Cut the <i>Aconitum ferox</i> into pieces of tamarind seed size and soak it in cow\'s urine and cow\'s ghee separately for one day. If it is not soaked well, apply ghee on it and insolate it for 3 days.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> உலைமூடி நிறைய கோமியம் வார்த்து அதிலே நாபியைப் போட்டு மூன்று நாட்கள் வெயிலிலே வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Take the <i>Aconitum ferox</i> and cow\'s urine in an earthen lid and insolate this for 3 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைப் பருத்தியிலைச் சாற்றில் ஆறு மணி நேரம் ஊறப்போடவும். பின்னர் ஆமணக்கு இலையில் சுற்றி குப்பியில் சொருகி இருபத்து நான்கு நிமிடம் பொறுத்து எடுக்கவும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Aconitum ferox</i> in leaf juice of Paruththi (<i>Gossypium herbaceum</i>) for 6 hours. Wrap it in leaf of Aamanakku (<i>Ricinus communis</i>) and insert it in glass bottle. Then take it after 24 minutes to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியை சீந்தில் கசாயத்தில் தோலாயந்திரமாகக் கட்டி எரித்து எருக்கன் பாலில் ஊற வைத்து கோமியத்தில் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Aconitum ferox</i> in decoction of Seendhil (<i>Tinospora cordifolia</i>) as Tholayadhiram, soak it in the latex of Erukku (<i>Calotropis gigantea</i>) and rinse it with cow\'s urine to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாபியைச் சிறு சிறு துண்டுகளாக வெட்டி, பசுவின் சிறுநீரில் மூன்று நாட்கள் வரை ஊற வைக்கவும். தினமும் புதிய சிறுநீரைப் பயன்படுத்தவும். வெயிலில் நன்கு உலர்த்திய பின், தோலாயந்திரமாக பசுவின் சிறுநீரில் ஆறு மணி நேரம் கொதிக்க வைத்தெடுத்து நல்ல சூடான நீரில் கழுவி உலர்த்தவும். இதுவே இம்ப்காப்ஸ் முறை.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><span class="list-style-v1"></span> Immerse the <i>Aconitum ferox</i> pieces in cow\'s urine for 3 days [Daily use fresh urine] and insolate it. Boil it in cow\'s urine for 6 hours by hanging it as Tholayandhiram, rinse it with hot water and dry it.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai </p>',
		}]
	  },
	  'piper_nigrum_milagu': {
	    'tn': 'நிலப்பனங்கிழங்கு',
	    'en': 'Curculigo orchioides ',
		 'nam': '(Nilappanaikizhangu)',
		'data': [{
		  'tn': '<p>நிலப்பனங்கிழங்கை நன்கு உலர்த்தி இடித்துச் சூரணம் செய்து ஒரு புதுப்பாண்டத்தில் பாலைவிட்டு சீலையால் வேடுகட்டி அதில் இச்சூரணத்தை வைத்து மேல்சட்டி மூடி, ஒரு சாமமெரித்த பின் சூரணத்தை இரவிமுகத்தில் உலர்த்தி அரைத்தெடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p>Take milk in a pot, cover its mouth with a cloth and place the dried powder of <i>Curculigo orchioides</i> on that cloth. Close it with a lid and burn this for 3 hours (1 Saamam). Then dry it in sunlight and grind it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'piper_nigrum_sevviyam': {
	    'tn': 'நிலவேம்பு',
	    'en': 'Andrographis paniculata ',
		 'nam': '(Nilavembu)',
		'data': [{
		  'tn': '<p>நிலவேம்பைக் கடும் வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Leaf and stem</h4><p>Dry the <i>Andrographis paniculata</i> in heavy sunlight to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'pithecellobium_dulce_korukkaipuli': {
	    'tn': 'நிலாவாரை',
	    'en': 'Cassia senna ',
		 'nam': '(Nilaavarai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நிலாவாரையை இடித்துச் சூரணித்து ஒரு பாண்டத்தில் பால் விட்டு, வேடுகட்டிச் சூரணத்தை வைத்து மேல்சட்டி மூடி, ஒரு சாமம் எரித்தெடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Leaf </h4><p><span class="list-style-v1"></span> Take milk in a pot, cover its mouth with a cloth and place the dried powder of <i>Cassia senna</i> on it. Close it with a lid and burn this for 3 hours (1 Saamam) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நிலாவாரையில் கல், மண், காம்பு,காய் இவைகளை நீக்கி இலையை மாத்திரம் எடுத்து பசுவின் பாலில் வேக வைத்து நிழலில் உலர்த்தி எடுத்துக் கொள்ளவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Remove the impurities like stones, sand from it and boil the <i>Cassia senna</i> leaves in cow\'s milk. Dry it in shadow to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சூரத்து நிலாவாரையில் குச்சிகளை அகற்றி, பின் அதனைக் கிழிகட்டி பசும்பாலில் அரை மணி நேரம் வேக வைத்து எடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Cassia senna</i> (Soorathu Nilaavarai) in cow\'s milk for 30 minutes by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'plectranthus_vettiveroides_vilamichu_ver': {
	    'tn': 'நீரடிமுத்து',
	    'en': 'Hydnocarpus laurifolia ',
		 'nam': '(Neeradimuthu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நீரடிமுத்தை உடைத்து, அதன் ஓடுகளை நீக்கி விட்டு, பருப்பின் மேல்தோலைப் போக்கிக் கொள்ளவும் (கையால் கசக்க மேல்தோல் நீங்கும்)</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Break and remove the outer shell of <i>Hydnocarpus laurifolia</i> and eliminate its outer seed coat to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நீரடிமுத்தின் மேல் தோலையும், உள்ளிருக்கும் விதை முளையையும் நீக்கிட சுத்தியாகும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Remove the seed coat and radicle of <i>Hydnocarpus laurifolia</i> to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'plumbago_indica_sithiramoola_verpattai': {
	    'tn': 'நெல்லி வற்றல்',
	    'en': 'Phyllanthus emblica ',
		 'nam': '(Nelli vatral)',
		'data': [{
		  'tn': '<p>நெல்லி வற்றலைப் பால் விட்டு வேக வைத்துக் கொட்டையை நீக்கி உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Dried fruit</h4><p>Boil the dried <i>Phyllanthus emblica</i> in cow\'s milk, remove its seed and dry it.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'psoralea_corylifolia_kaarbogarisi': {
	    'tn': 'நெல்லிக்காய்',
	    'en': 'Phyllanthus emblica ',
		 'nam': '(Nelikkai)',
		'data': [{
		  'tn': '<p>நெல்லிக்காயின் சதைப் பகுதியை எடுத்துக் கொண்டு கொட்டையை நீக்கி விட வேண்டும். ஏனெனில் கொட்டை, அக நஞ்சாகக் கருதப்படுகிறது.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Remove the seeds and use the fleshy part of <i>Phyllanthus emblica</i>.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna </p>',
		}]
	  },
	  'pterocarpus_santalinus_senchandhanam': {
	    'tn': 'நேர்வாளம்',
	    'en': 'Croton tiglium ',
		 'nam': '(Nervaalam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> ஒரு பெரிய பாண்டத்தில், 70 மி.லி நெல்லிக்காய்ச்சாறு, 70 மி.லி கரிசலாங்கண்ணி சாறு, 70 மி.லி பசுஞ்சாணிப்பால் சேர்த்து, அதில் 35 கிராம் நேர்வாளத்தை மெல்லிய சீலையில் பொதிந்து தோலாயந்திரமாக கட்டி கமலாக்கினியாக எரித்து, இவ்வாறு மேலும் இருமுறை செய்து எடுத்து, மேலோடு மற்றும் நடுநரம்பு போக்கி கழுவி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span> Mix 70 ml each of fruit juice of Nelli (<i>Emblica officinalis</i>), juice of Karisaalai (<i>Eclipta prostrata</i>) and cow dung juice together. Boil 35 g of <i>Croton tiglium</i> bundle in this liquid concoction by hanging it as Tholayandhiram by Kamalaakini (Two fire woods). Repeat this process twice and exclude the outer shell and radicle of <i>Croton tiglium</i>. Rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைப் பசுஞ்சாணிப்பால், பசுவின் நீர், எலுமிச்சம் பழச்சாறு இவை மூன்றிலும் துணியில் முடிந்து போட்டு, தனித்தனியே வேக வைத்து எடுத்து ஓட்டையும், தோலையும், உள்ளிலையையும், நீக்கி பசு நெய் விட்டு வறுத்தெடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> separately in cow\'s urine, cow dung juice and lemon juice, then dry it. Fry it in cow\'s ghee after excluding the outer shell and radicle to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தை எருமைச்சாணியில் வேக வைத்து எடுத்தலம்பி ஒவ்வொன்றையும் பிளந்து, தோலை நீக்கி, நஞ்சென்னும் முளையையும் நீக்கி, தளர்ச்சியாக, மெல்லிய சீலையில் முடிந்து, பச்சரிசியுடன் சேர்த்துப் பொங்கி, அரிசி வெந்ததும் அம்முடிப்பை எடுத்தலம்பி மறுபடியும் முன் போல முடிப்பு கட்டிப் பாலில் எரித்துக் கழுவி, நிழலில் உலர்த்திச் சிறிது விளக்கெண்ணெய் விட்டுச் சட்டியில் வறுத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> in buffalo dung juice, rinse it off, discard the outer shell and radicle and bundle it. Boil this bundle separately with raw rice and milk, then rinse the <i>Croton tiglium</i>. Dry it in shadow and roast it with castor oil to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எருமைச் சாணத்தில் நேர்வாளப் பருப்புகளை கிழிகட்டி மூன்று மணி நேரம் எரித்து எடுத்து, கழுவி பருப்புகளை உடைத்து அதிலுள்ள முளையைப் போக்கி, பிறகு மோர்,பழச்சாறு சேர்த்து அதில் முளை போக்கிய பருப்புகளை இட்டு மூன்று மணி நேரம் எரித்தெடுத்து, உலர்த்தி, பிறகு வாணலியில் கொஞ்சம் விளக்கெண்ணெயிட்டு அதில் கொட்டைகளையிட்டு சிவப்பாக மணம் கிளம்பும் வரையில் வறுத்தெடுத்துக் கொள்ளவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Croton tiglium</i> in buffalo dung juice for 3 hours as Tholayandhiram, wash it, break it and remove the radicle. Then burn this seeds in the mixture of butter milk and lemon juice for 3 hours. Dry it and roast it with castor oil to attain redness along with the spread of aroma.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> புதிதான நேர்வாளக் கொட்டைகளை சாணம், ஆட்டுப் புழுக்கை, எரு சேர்ந்த மணலில் ஊன்றி, தண்ணீர் ஊற்றி வந்தால் இரண்டு வாரத்திற்குள் முளை வந்து அம்முளையினால் இரு பக்கங்களிலும் உள்ள பருப்பின் ஜவ்வானது நீங்கப் பெறுகிறது. முளைகளை கத்தரியினால் நறுக்கி எடுத்து, அதற்கு மேல் மற்ற சுத்திகளைச் செய்வது வெகு சிறப்பான சுத்தியாகும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burry the <i>Croton tiglium</i> in soil manured with cow dung & goat dung and water it for 2 weeks. Then chop the plumule of sprouted <i>Croton tiglium</i> and perform other purification processes.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாணம் கரைத்த நீரில் நேர்வாளத்தை வேக வைத்து எடுத்துக் கழுவி மேலோட்டை நீக்கி விட்டு, பழச்சாற்றில் ஊறவிட்டு விதைக் கதுப்புகளைப் பிளந்து முளையையும் சவ்வு போன்ற விதை இலைகளையும் நீக்கிப் பருப்பை உலர்த்தி எடுத்துச் சிறிது நெய் விட்டு வறுத்து எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> in cow dung juice, rinse it and remove the outer shell. Soak this in lemon juice, remove the radicle and dry it. Roast this with little ghee to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தை எலுமிச்சம் பழச்சாற்றில் ஊறப்போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Croton tiglium</i> in lemon juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பூவரசம்பூ ஊறிய தண்ணீரில் நேர்வாளக் கொட்டையை எட்டு நாட்கள் ஊறவைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Croton tiglium</i> in flower soaked water of Poovarasu (<i>Thespesia populnea</i>) for 8 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தை எருமைச்சாணி, அரைக்கீரை, கற்றாழைச்சாறு ஆகிய இவற்றில் தனித்தனியாக வேகவைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> separately in buffalo dung juice, juice of Araikkeerai (<i>Amaranthus tristis</i>) and Aloe vera juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைச் சாணியில் கொதிக்க வைத்துக் கொள்ளவும். இதனை 1.3 லிட்டர் காடியில் வேகவைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> separately in cow dung and vinegar (1.3 litres) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைப் பசுவின் பாலில் வேக வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> in cow\'s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாணிப்பால், புளியிலை சாறு, எருமைப்பால் இவற்றில் முறையே நேர்வாளத்தைக் கொதிக்க வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Boil the <i>Croton tiglium</i> separately in cow dung juice, tamarind leaf juice and buffalo\'s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தை எலுமிச்சம் பழத்தில் அடைத்து உமிக்காந்தலின் உள்ளே வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Stuff the <i>Croton tiglium</i> into lemon and keep it in ember to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைக் காடியில் பத்து நாட்கள் ஊறவைக்க சுத்தியாகும். சாணிப்பாலில் நேர்வாளத்தை வேகவைத்து, நஞ்சு போக்கி அரைக்கீரைச் சாற்றில் வேகவைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Croton tiglium</i> in vinegar (Kaadi) for 10 days to get the purified form (Or) Boil the <i>Croton tiglium</i> separately in cow dung juice and juice of Araikkeerai (<i>Amaranthus tristis</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைத் தோல் போக்கி பசுவின் நீரில் போட்டு வேக வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Remove the seed coat of <i>Croton tiglium</i> and boil it in cow\'s urine to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தின் ஓடு போக்கி பசுவின் சாணித் தண்ணீரில் வேக வைத்து உலர்த்த சுத்தியாகும். நேர்வாளத்தின் ஓடு போக்கி பருப்பை எடுத்து கற்றாழை சாற்றிலும், வெல்லப் பானகத்திலும், பசுவின் பாலிலும், நெய்யிலும் தினம் தனித்தனியே வேகவைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Remove the outer shell of <i>Croton tiglium</i>, boil it in cow dung juice and dry it to get the purified form.</p><p style="text-align: center;"><b>(or)</b></p><p>Remove the outer shell of <i>Croton tiglium</i> and boil it separately in Aloe vera juice, Paanagam, cow\'s milk and cow\'s ghee for one day to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எருமைச் சாணத்தில் காடி விட்டுக் கலந்து அதில் நேர்வாளத்தைப் போட்டுக் கொதிக்க வைத்து எடுத்துக் கொள்ளவும். நஞ்சு நீக்கிய நேர்வாளத்தை மோர், எலுமிச்சம் பழச்சாற்றில் கலந்து கொதிக்க வைத்து எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Boil the <i>Croton tiglium</i> in mixture of vinegar (Kaadi) and buffalo dung juice. Then boil it in mixture of butter milk and lemon juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைச் சாணியில் வேக வைத்து ஓட்டையும், முளையையும் நீக்கி தழுதாழை மடலில் வைத்து சாணி பூசி, உமிக்காந்தலில் வைத்து வேகவைத்துப் பின்பு கழுவி பாலில் வேகவைத்துக் கழுவி எலுமிச்சம் பழச்சாற்றில் ஊற வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Boil the <i>Croton tiglium</i> in cow dung and remove the outer shell and radicle, place it on the leaf of Thazhuthaazhai (<i>Clerodendrum phlomoidis</i>), daub it with cow dung and keep it in ember. After boiling, rinse it, again boil it in milk and wash it well. Then soak it in lemon juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நேர்வாளத்தைக் கற்றாழை சாற்றில் வேக வைத்துப் பிறகு எருமைச் சாணியில் வேக வைத்து நஞ்சு நீக்கி சிறுகீரை, பொன்னாங்காணியை நறுக்கிப் பாலில் போட்டு நேர்வாளமுங்கூடப் போட்டு வேக வைத்து உலர்த்தி, பசுவின் நெய்யில் வறுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Croton tiglium</i> separately in Aloe vera juice and buffalo dung juice. Then boil it in mixture of Sirukeerai (<i>Amaranthus tricolor</i>), Ponnaangaani (<i>Alternanthera sessilis</i>) and milk and roast it in cow\'s ghee to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பசுஞ்சாணம், புளியிலை, செம்மண் ஆகியவற்றைத் தேவையான அளவு எடுத்து ஒரு பாத்திரத்தில் போட்டு நீர்விட்டுக் கரைக்கவும். பின் அதற்குள் முடிச்சாகக் கட்டிய நேர்வாளத்தைப் போட்டு தோலாயந்திரமாக ஆறு மணித்தியாலங்களுக்கு நன்கு கொதிக்க வைக்கவும். பின்னர் நேர்வாள முடிச்சை வெளியே எடுத்து நன்கு கழுவி வைக்கவும். அடுத்ததாக நேர்வாளத்தின் கோதுகளை நீக்கி உள்ளிருக்கும் பருப்பை எடுத்துக் கூரிய கத்தியால் பிளந்து உள்ளிருக்கும் (நாக்கு) வித்திலையை நீக்கி விடவும். பிறகு பச்சையரிசியுடன் பிளந்த பருப்புக்களைச் சேர்த்து, நன்கு வேக வைத்துப் பருப்புக்களை மட்டும் பிரித்தெடுக்கவும். பின்னர் அதனை நீரில் கழுவி எலுமிச்சம் பழச் சாற்றினுள் ஊறப் போட்டு உலர்த்தவும். ஈற்றில் நெய்யில் வறுத்து எடுக்கவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Mix cow dung, tamarind leaf and red soil in water. Boil the <i>Croton tiglium</i> bundle in this mixture by hanging it as Tholayandhiram for 6 hours and rinse it off. Remove its outer shell and radicle, boil the seeds with raw rice and rinse it off. Soak this in lemon juice and dry it. Then roast it in ghee to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna</p>',
		}]
	  },
	  'quercus_infectoria_maasikkai': {
	    'tn': 'பலாசு விதை (முருக்கன் விதை)',
	    'en': 'Butea monosperma ',
		 'nam': '(Palaasu vithai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>பலாசு விதையை நீரில் ஊற வைத்து மேல்தோலை நீக்கி விட வேண்டும்..</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>', 
		  'en': '<h4>Refining part: Seeds</h4><p><span class="list-style-v1"></span>Soak the <i>Butea monosperma</i> in water and remove the seed coat to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		}]
	  },
	  'rhus_succedanea_karkadagasingi': {
	    'tn': 'பறங்கிப்பட்டை',
	    'en': 'Smilax china ',
		'nam': '(Parangisakkai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பறங்கிப்பட்டையை உலர்த்தி இடித்துச் சூரணம் செய்து பசுவின் பாலில் பிட்டவியல் செய்து காயவைத்து எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Root tuber</h4><p><span class="list-style-v1"></span> Take equal quantities of cow\'s milk and water in a pot and boil the <i>Smilax china</i> pieces in this mixture. After the mixture has been reduced to three-quarter (3/4), remove the pieces, wash it, remove its skin and dry it to get the purified form.</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பறங்கிப்பட்டையைச் சிறு துண்டுகளாக்கி, ஒரு பானையிலிட்டு, பசும்பாலும், சுத்த நீரும் சம அளவு சேர்த்து எரித்து முக்கால் பாகம் சுண்டிய பிறகு நீரில் கழுவி மேல்தோலை நீக்கி, உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><h4>Refining part: Root tuber</h4><span class="list-style-v1"></span> Take equal quantities of cow\'s milk and water in a pot and boil the <i>Smilax china</i> pieces in this mixture. After the mixture has been reduced to 3/4, remove the pieces, wash it, remove the skin and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'ricinus_communis_aamanakku_seed': {
	    'tn': 'பிரண்டை',
	    'en': 'Cissus quadrangularis',
		'nam': '(Pirandai)', 
		'data': [{
		  'tn': '<p>பிரண்டையின் கணுவை நீக்கி மேல்தோல் சீவி புளிப்பு மோரில் சிறிது உப்பிட்டு 3 நாள் ஊறப் போட்டு வெயிலில் உலர்த்த வேண்டும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Stem</h4><p>Remove the nodes and outer layer of <i>Cissus quadrangularis</i>. Add a little salt to sour butter milk and soak it in this mixture for 3 days. Insolate it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'rubia_cordifolia_manjitti': {
	    'tn': 'பீதரோகிணி',
	    'en': 'Coptis teeta ',
		'nam': '(Peetharohini)',
		'data': [{
		  'tn': '<p>பீதரோகிணியின் மேல்தோல் நீக்கி சிறு துண்டாக நறுக்கி உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root</h4><p>Remove the outer skin of <i>Coptis teeta</i>, cut it into small pieces and dry it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'saccharum_officinarum_karumbu': {
	    'tn': 'புகையிலை',
	    'en': 'Nicotiana tabacum ',
		'nam': '(Pugaiyilai)',
		'data': [{
		  'tn': '<p>புகையிலையை அகத்திக்கீரையின் நடுவில் வைத்து நீர் விட்டு எரித்தெடுத்துக் காய வைத்து எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Leaf</h4><p>Place the <i>Nicotiana tabacum</i> inside the leaves of Agathi (<i>Sesbania grandiflora</i>) and add water. Burn this and dry it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'salacia_reticulata_kadalurinji_pattai': {
	    'tn': 'புளி',
	    'en': 'Tamarindus indica ',
		'nam': '(Tamarind)',
		'data': [{
		  'tn': '<p>புளியின் கொட்டை, கோது முதலியவற்றை நீக்கி மூன்று நாள் வெயிலிலுலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Remove the fruit pod and seed of <i>Tamarindus indica</i> and insolate it for 3 days to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'santalum_album_santhanam': {
	    'tn': 'பூலாங்கிழங்கு',
	    'en': 'Curcuma zedoaria ',
		'nam': '(Poolankizhangu)',
		'data': [{
		  'tn': '<p>பூலாங்கிழங்கின் மேல்தோல் சீவி வெயிலில் உலர்த்தவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p>Scrape the outer skin of <i>Curcuma zedoaria</i> and insolate it.</p><p class="nubi">Mooligai Iyal  </p>',
		}]
	  },
	  'scindapsus_officinalis_aanai_thippili': {
	    'tn': 'பெருங்காயம்',
	    'en': 'Ferula asafoetida ',
		'nam': '(Perungaayam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தை வெற்றிலைச்சாற்றில் மூன்று மணி நேரம் ஊற வைத்து உலர்த்தி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Gum resin</h4><p><span class="list-style-v1"></span> Soak the <i>Ferula asafoetida</i> in betel leaf juice for 3 hours and dry it.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தை நெய்யில் பொரித்தெடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Fry the <i>Ferula asafoetida</i> in cow\'s ghee to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தைக் கரிநெருப்பில் பொரித்தேனும், தாமரை இலைச்சாற்றில் ஒரு நாழிகை ஊறவைத்து உலர்த்தியேனும் உபயோகிக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Roast the <i>Ferula asafoetida</i> in charcoal ember to get the purified form (Or) Soak the <i>Ferula asafoetida</i> in leaf juice of Thaamarai (<i>Nelumbo nucifera</i>) for 24 minutes (1 Naazhgai ) and dry it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தைப் பொரித்தெடுக்கத் தூய்மையாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<p><span class="list-style-v1"></span> Roast the <i>Ferula asafoetida</i> to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தைத் தாமரையிலைச் சாற்றில் மூன்று மணி நேரம் அரைத்து வெயிலிலே வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the <i>Ferula asafoetida</i> with leaf juice of Thaamarai (<i>Nelumbo nucifera</i>) for 3 hours and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தை தாமரைக்கிழங்கு சாற்றில் அரைத்து வெயிலில் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the <i>Ferula asafoetida</i> with rhizome juice of Thaamarai (<i>Nelumbo nucifera</i>) and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தை விளக்கெண்ணெயில் வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Ferula asafoetida</i> in castor oil to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருங்காயத்தை ஆட்டுப் பாலில் வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Ferula asafoetida</i> in goat\'s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'semecarpus_anacardium_seraangottai': {
	    'tn': 'மஞ்சள்',
	    'en': 'Curcuma longa ',
		'nam': '(Manjal)',
		'data': [{
		  'tn': '<p>மஞ்சளின் மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Rhizome</h4><p>Remove the outer skin of <i>Curcuma longa</i>, cut it into small pieces and dry it in sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'shorea_robusta_kukkil': {
	    'tn': 'மஞ்சிட்டி (மந்திட்டி)',
	    'en': 'Rubia cordifolia ',
		'nam': '(Manjitti)',
		'data': [{
		  'tn': '<p>மஞ்சிட்டியைக் கடுரவியில் உலர்த்தி இடித்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p>Dry the <i>Rubia cordifolia</i> in sunlight and pound it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'smilax_china_parangipattai': {
	    'tn': 'மரமஞ்சள்',
	    'en': 'Coscinium fenestratum ',
		'nam': '(Maramanjal)',
		'data': [{
		  'tn': '<p>மரமஞ்சளின் மேல்தோல் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Stem</h4><p>Peel off the outer skin of <i>Coscinium fenestratum</i>, cut it into small pieces and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'srychnos_nux-vomica_etti_seed': {
	    'tn': 'மருளூமத்தை விதை',
	    'en': 'Xanthium strumarium ',
		'nam': '(Marul umaththai)',
		'data': [{
		  'tn': '<p>மருளூமத்தை விதைகளைப் பழரசத்தில் ஒரு சாமம் ஊற வைத்து இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Soak the <i>Xanthium strumarium</i> seeds in lemon juice for 3 hours (1 Saamam) and dry it in sunlight.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'strychnos_potatorum_thetrankottai': {
	    'tn': 'மாசிக்காய்',
	    'en': 'Quercus infectoria',
		'nam': '(Maasikkai)',
		'data': [{
		  'tn': '<p>ஒரு வித பூச்சிகள் துளையிட அதிலிருந்து வருகிற பால் திரண்டு கட்டிப்படுவதே மாசிக்காயாகும்.</p><p><span class="list-style-v1"></span>மாசிக்காயைப் பசுவின் நெய்யில் பொரித்துக் கொள்ளவும். பொரிக்கும் போது மாசிக்காய் வெடிக்கும் பக்குவத்தில் எடுத்துக் கொள்ளவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p>Maasikkai is an oak gall formed in <i>Quercus infectoria</i> tree.</p><p><span class="list-style-v1"></span> Roast the <i>Quercus infectoria</i> in cow\'s ghee till it cracks to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அகப்படும் பூச்சிகள் வெளிப்படாததற்கு முன் மாசிக்காயை எடுத்து உலர்த்தி பொடித்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Dry and powder the <i>Quercus infectoria</i> before the insects in it escape.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மாசிக்காயைத் தேன் வார்த்து அரைத்து உருட்டி வளைத்துச் சுற்றி இரட்டைப் புடவையில் கட்டி கொள்ளுச்சாறு, கோமூத்திரம், காடி இவைகளிலே தோலாயந்திரமாக நாற்பத்தெட்டு மணி நேரம் எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the <i>Quercus infectoria</i> with honey and roll it as bundle in two layered cloth. Burn this in horse gram\'s juice, cow\'s urine and vinegar for 48 hours by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		}]
	  },
	  'sugar': {
	    'tn': 'மிளகு',
	    'en': 'Piper nigrum ',
		'nam': '(Milagu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> புளித்த மோரில் மிளகை ஒரு சாமம் ஊறப்போட்டு எடுத்து உலர்த்தி கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p><span class="list-style-v1"></span> Soak the <i>Piper nigrum</i> in sour butter milk for 3 hours (1 Saamam) and dry it.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மிளகைப் புளித்த மோரில் மூன்று நாள் ஊற வைத்தெடுத்து அம்மிளகை ஓட்டில் போட்டு வறுத்தெடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Piper nigrum</i> in sour butter milk for three days and fry it in earthern ware to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மிளகைத் தண்ணீரில் ஒரு நாள் ஊற வைக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Piper nigrum</i> in water for one day to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மிளகைச் சிறுதீயில் வாசனை கிளம்ப வறுத்தெடுக்கவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<p><span class="list-style-v1"></span> Fry the <i>Piper nigrum</i> in low flame till the odour begins to spread.</p><p class="nubi">Mooligai Iyal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கரிசலாங்கண்ணிச் சாற்றில் மிளகை ஏழு முறை நனைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Dip the <i>Piper nigrum</i> in juice of Karisaalai (<i>Eclipta prostrata</i>) for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மிளகை நெல்லிக்காய்ச் சாற்றில் ஊற வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Piper nigrum</i> in fruit juice of Nelli (<i>Phyllanthus emblica</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மிளகைக் காடியில் ஊறப்போட்டு வெயிலில் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the <i>Piper nigrum</i> in Vinegar (Kaadi) and dry it in sunlight to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மிளகை எலுமிச்சம் பழச்சாற்றில் அரைத்து வெயிலில் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the <i>Piper nigrum</i> in lemon juice and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'syzygium_aromaticum_kirambu': {
	    'tn': 'வசம்பு',
	    'en': 'Acorus calamus ',
		'nam': '(Vasambu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வசம்பைச் சுட்டுக் கரியாக்கிக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Root</h4><p><span class="list-style-v1"></span> Char the <i>Acorus calamus</i> to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வசம்பைத் தணலிலிட்டு எரிந்ததும் மணலுக்குள் புதைத்து அனலை ஆற்றிக் கரியாக்கிக் கொள்ள வேண்டும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the <i>Acorus calamus</i> in ember, burry it in the sand to subside its heat and char it to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		}]
	  },
	  'tamarindus_indica_tamarind': {
	    'tn': 'வட்டத்திருப்பி (பொன்முசுட்டை)',
	    'en': 'Cissampelos pareira ',
		'nam': '(Vattathiruppi)',
		'data': [{
		  'tn': '<p>வட்டத்திருப்பியின் மேல்தோலைச் சீவிச் சிறு துண்டுகளாக நறுக்கி இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Root</h4><p>Peel off the <i>Cissampelos pareira</i>, cut it into small pieces and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'taxus_baccata_thaleesapathiri': {
	    'tn': 'வலம்புரிக்காய்',
	    'en': 'Helicteres isora ',
		'nam': '(Valampurikkai)',
		'data': [{
		  'tn': '<p>வலம்புரிக்காயைக் கடும் வெயிலில் உலர்த்தவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Dry the <i>Helicteres isora</i> in heavy sunlight to get the purified form</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'terminalia_bellirica_thandrikkai': {
	    'tn': 'வல்லாரை',
	    'en': 'Centella asiatica ',
		'nam': '(Vallarai)',
		'data': [{
		  'tn': '<p>வல்லாரை இலையைக் காம்பு நீக்கி, பழுப்பு இலைகளை அகற்றி அலம்பி எடுக்கவும். பிறகு ஒரு பாத்திரத்தில் பசும்பாலும் தண்ணீரும் சம எடை கலந்து பாத்திரத்தின் வாய்க்குத் துணி கட்டி, அத்துணியில் இலைகளை இட்டு அவித்து எடுத்து நிழலில் உலர்த்தவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Leaves</h4><p>Remove the petiole and dried senile leaves of <i>Centella asiatica</i> and rinse it. Mix equal quantities of cow\'s milk and water in a vessel, cover its mouth with a cloth and place the rinsed <i>Centella asiatica</i> leaves on it. Steam this and dry in shadow to get the purified form.</p><p class="nubi">Mooligai Iyal</p>',
		}]
	  },
	  'terminalia_chebula_kadukkai': {
	    'tn': 'வாய்விடங்கம்',
	    'en': 'Embelia ribes ',
		'nam': '(Vaividangam)',
		'data': [{
		  'tn': '<p>வாய்விடங்கத்தில் வேறொன்றுமின்றி ஆய்ந்து இரவியிலுலர்த்தி வைத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Remove the impurities from <i>Embelia ribes</i> and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'thakkolam': {
	    'tn': 'வாலுளுவை',
	    'en': 'Celastrus paniculatus ',
		'nam': '(Vaaluluvai)',
		'data': [{
		  'tn': '<p>வாலுளுவையைச் சோற்றுக்கற்றாழைச் சாற்றில் கழுவி இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Rinse the <i>Celastrus paniculatus</i> with Aloe vera juice and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'tinospora_cordifolia_seendhil_kodi': {
	    'tn': 'வாலேந்திரபோளம் (வெள்ளைப்போளம்)',
	    'en': 'Commiphora myrrha ',
		'nam': '(Vaalenthirabolam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>வாலேந்திரபோளத்தைக் காடி வார்த்து மூன்று மணி நேரம் அரைத்து வெயிலிலே வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Gum resin</h4><p><span class="list-style-v1"></span> Grind the <i>Commiphora myrrha</i> with vinegar (Kaadi) for 3 hours and insolate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வாலேந்திரபோளத்தைக் காடியில் வேகவைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the <i>Commiphora myrrha</i> in vinegar (Kadi) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'trigonella_foenum_vendhayam': {
	    'tn': 'வால்மிளகு',
	    'en': 'Piper cubeba ',
		'nam': '(Vaalmilagu)',
		'data': [{
		  'tn': '<p>வால்மிளகின் காம்புகளை ஆய்ந்து வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Fruit</h4><p>Remove the tail like stalk of <i>Piper cubeba</i> and dry it in sunlight.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'ventilago_maderaspatana_vembatam_pattai': {
	    'tn': 'வாழைப்பூ',
	    'en': 'Musa paradisiaca ',
		'nam': '(Vaazhai poo)',
		'data': [{
		  'tn': '<p>வாழைப்பூவின் கள்ளனை நீக்கி விட்டு மோரில் இட்டு எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<h4>Refining part: Flower</h4><p>Remove the pistil of <i>Musa paradisiaca</i> flower and take it after dipping in butter milk.</p><p class="nubi">The Siddha Formulary of India </p>',
		}]
	  },
	  'vetiveria_zizanioides_vettiver': {
	    'tn': 'விலாமிச்சு வேர்',
	    'en': 'Plectranthus vettiveroides ',
		'nam': '(Vilamichu ver)',
		'data': [{
		  'tn': '<p>விலாமிச்சு வேரைச் சிறு துண்டாக வெட்டி வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root</h4><p>Cut the <i>Plectranthus vettiveroides</i> into small pieces and dry it in sunlight to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'withania_somnifera_amukkara': {
	    'tn': 'வெட்டிவேர்',
	    'en': 'Vetiveria zizanioides ',
		'nam': '(Vettiver)',
		'data': [{
		  'tn': '<p>வெட்டிவேரைச் சிறு துண்டாக வெட்டி வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Root</h4><p>Cut the <i>Vetiveria zizanioides</i> into small pieces and insolate it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'woodfordia_fruticosa_kaattathi_poo': {
	    'tn': 'வெட்பாலை அரிசி',
	    'en': 'Wrightia tinctoria ',
		'nam': '(Vetpaalai arisi)',
		'data': [{
		  'tn': '<p>வெட்பாலை அரிசியை வெயிலில் உலர்த்த வேண்டும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<h4>Refining part: Seeds (Rice)</h4><p>Dry the <i>Wrightia tinctoria</i> in sunlight to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'wrightia_tinctoria_vetpaalai_arisi': {
	    'tn': 'வெண்கடுகு',
	    'en': 'Brassica alba ',
		'nam': '(Venkadugu)',
		'data': [{
		  'tn': '<p>வெண்கடுகை நன்றாய் ஆய்ந்து கடும் வெயிலில் இரண்டு நாள் உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Remove the impurities from <i>Brassica alba</i> and insolate it for 2 days to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'xanthium_strumarium_marul_umaththai': {
	    'tn': 'வெந்தயம்',
	    'en': 'Trigonella foenum ',
		'nam': '(Vendhayam)',
		'data': [{
		  'tn': '<p>வெந்தயத்தை நீராகாரத் தெளிவில் அரை நாழிகை ஊறப்போட்டு உலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<h4>Refining part: Seeds</h4><p>Soak the <i>Trigonella foenum</i> in supernatant of fermented rice water (Neeraagaram) for 12 minutes (½ Naazhigai) and dry it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam  </p>',
		}]
	  },
	  'zingiber_officinale_inji_saaru': {
	    'tn': 'வெள்ளை வெங்காயம் (வெள்ளைப்பூண்டு)',
	    'en': 'Allium sativum ',
		'nam': '(Vellai vengaayam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வெள்ளைப்பூண்டு முளை வாங்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<h4>Refining part: Bulb</h4><p><span class="list-style-v1"></span> Peel off and remove the sprout leaf of <i>Allium sativum</i> to get the purified form</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெள்ளைப் பூண்டைப் பல்லுப் பல்லாக உடைத்து வெயிலில் உலர்த்தி தோல், வேர் ஆகியவற்றை நீக்கிக் கொள்ளவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Peel the <i>Allium sativum</i>, remove its root and dry it in sunlight.</p><p class="nubi">Siddha Pharmacopoeia – Jaffna </p>',
		}]
	  },
	  'zingiber_officinale_inji': {
	    'tn': 'வெற்றிலை',
	    'en': 'Piper betle ',
		'nam': '(Vetrilai)',
		'data': [{
		  'tn': '<p>வெற்றிலையின் காம்பு, நரம்புகளை அகற்றவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Leaf</h4><p>Remove the petiole and vein of <i>Piper betle</i> to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'zingiber_officinale_sukku': {
	    'tn': 'வேம்பாடம் பட்டை',
	    'en': 'Ventilago maderaspatana ',
		'nam': '(Vembatam pattai)',
		'data': [{
		  'tn': '<p>வேம்பாடம் பட்டையைக் காய வைத்து தூள் செய்யவும்.</p><p class="nubi">மூலிகை இயல்</p>',
		  'en': '<h4>Refining part: Root </h4><p>Dry the <i>Ventilago maderaspatana</i> and pulverize it to get the purified form.</p><p class="nubi">Mooligai Iyal </p>',
		}]
	  },
	  'brass_piththalai': {
		'tn': 'இரும்பு (அரப்பொடி)',
		'en': 'Iron',
		'nam': '(Irumbu)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> அயப் பொடிக்கு நாவற்பழச்சாற்றை மூழ்கும்படி விட்டு, சாறு சுண்டும் வரை வெயிலில் வைத்துக் கழுவவும். இவ்விதம் ஆறு முறை செய்ய அயம் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Iron powder is soaked in Naaval fruit juice (<i>Syzygium cumini</i>). Insolate it till the juice gets reduced. The process is done for 6 times to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் (1 பலம்) அயப்பொடிக்கு 210 கிராம் (6 பலம்) இலுப்பைப்பூச்சாறு விட்டு, காலை முதல் மாலை வரை வெயிலில் வைக்க வேண்டும். இவ்விதம் ஆறு நாட்கள் செய்து, இரண்டு நாட்கள் சாறு விடாமல் உலர்த்தி, பின்னும் இதைப் போல இரு முறை செய்து, 25 ஆம் நாள் முதல் பத்து நாட்கள் இடைவிடாமல் மேற்படி சாறு விட்டு, வெயிலில் வைத்துப் பின்பு, சாறு விடாமல் இரண்டு நாட்கள் உலர்த்தி நீர்விட்டுக் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 g of Iron powder, 210 ml of Mahua flower juice or extract (<i>Madhuca longifolia</i>) is added and keep it in sunlight for 6 days with fresh juice on each day. On 7th, 8th day dry this in sunlight without adding juice.  Again repeat this procedure twice. Then insolate the Iron powder with Mahua flower juice for 10 days and then dry it without adding juice for 2 days. Finally rinse it off with water to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அயத்தை சிவக்கக் காய்ச்சி, ஆறு மாத அன்னக்காடி, நல்லெண்ணெய், பசுநீர், கொள்ளுக் குடிநீர், இந்நான்கிலும் முறையே மும்மூன்று முறை தோய்த்தெடுத்துக் கழுவிக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p><p><b class="notes">குறிப்பு: நல்லெண்ணெயில் தோய்த்தெடுத்த பின் எண்ணெயை அகற்றுவதற்கு சிகைக்காய் (சீயக்காய்) அவித்த நீரில் அயத்தைத் தோய்த்தெடுக்கலாம் - சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</b></p></p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the red hot iron in six-month Vinegar (Six month Kaadi), sesame oil, cow\'s urine and horse gram\'s decoction (<i>Macrotyloma uniflorum</i>) separately for 3 times. Then it is rinsed off thoroughly.</p><p class="nubi">The Siddha Formulary of India</p><p><b>Note:</b> After soaking in sesame oil, Iron must be drenched in Seeyakkai (Acacia concinna) decoction to remove oil impurities. - Siddha Pharmacopoeia - Jaffna </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரும்பின் அரப்பொடியை எலுமிச்சம்பழச்சாறு, காடி, நாட்டுக் காட்டாமணக்குப்பால் இவை ஒவ்வொன்றிலும் மூன்று நாட்கள் ஊற வைத்துக் கழுவியெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Iron powder is soaked in lemon juice, vinegar (Kaadi) and latex of Naatu Kaataamanukku (<i>Jatropha curcas</i>) respectively for 3 days each. Then rinse it off with water effectively to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஒரு பலம் அயத்தை ஒரு பாண்டத்திலிட்டு அத்துடன் அல்லி வேர் 8 பலம் (280 கிராம்) மற்றும் புன்னை வேர் 8 பலம் (280 கிராம்) இடித்துப் போட்டு 16 பலம் (560 கிராம்) காடி விட்டு இரவும் பகலும் தீபாக்கினியாய் எரிக்க அயம் சுத்தியாகும். காடி குறைந்தால் மறுபடியும் அதே அளவு காடி வார்த்து எரிக்க அயம் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Pestle 280 g (8 balam) of roots of Alli (<i>Nymphaea nouchali</i>) and Punnai (<i>Calophyllum inophyllum</i>) and mix it with 560 g (16 balam) of vinegar (Kaadi).  Add 35 g (1 balam) of Iron to this mixture and burn it by Dheepakini (Flame of a lamp) day and night to get the purified iron. Add required amount of Kaadi if the quantity of Kaadi gets reduced.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அயத்தைத் தூளாக ராவிப் பழச்சாற்றில் 3 நாள் ஊற வைத்து அரைத்துக் கழுவி எடுக்கவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Iron powder in lemon juice for 3 days, grind it and rinse it off to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரும்பை அரத்தால் ராவிப்பொடி செய்து எலுமிச்சம் பழச்சாற்றில் ஊற வைத்து எடுத்து நல்லெண்ணெயில் மூன்று நாட்கள் ஊற வைத்தெடுத்து இரும்புச் சட்டியை அடுப்பில் வைத்து அரப்பொடித் தூளைக் கொட்டி நன்றாய் வறுத்துக் காடியில் கழுவி வேலம் பட்டைக் கியாழத்தில் போட்டு வேக வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Iron powder in lemon juice and sesame oil separately for 3 days. Roast this in an iron pan and rinse it off with vinegar (Kaadi).  Boil this in decoction of Velampattai (<i>Acacia nilotica</i>) to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அரப்பொடியை நல்லெண்ணெயிலும் வெற்றிலைச்சாற்றிலும் சுமார் அரை மணி நேரம் வேக வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the iron powder in sesame oil and betel leaf extract (<i>Piper betle</i>) separately for 30 minutes to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அயத்தொட்டியைப் பசும்பாலில் பன்னிரெண்டு மணி நேரம் ஊற வைத்து அதன் பின்பு தேனிலும் நெய்யிலும் எட்டெட்டு நாட்கள் ஊற வைத்தெடுக்கச் சுத்தியாகும். இவ்வாறு சுத்தி செய்யப்பட்ட அயத்தொட்டியை எவ்வித மருந்துகளுக்கும் பயன்படுத்தலாம்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Iron is soaked in cow’s milk for 12 hours. Then soak it separately in honey and ghee for 8 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அயப்பொடியைப் பழச்சாற்றில் மூன்று நாள் ஊறப்போட்டு எடுத்துக் கழுவிக் கொள்ளலாம். இவ்வாறு செய்தெடுத்த அரப்பொடியை எண்ணெயில் ஒரு நாள் ஊற வைத்தெடுத்து இரும்பு சட்டியிலிட்டு வறுத்து,கொள்ளுக் குடிநீரில் அல்லது வேலம்பட்டைக் குடிநீரில் பல முறை தோய்த்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the iron powder in lemon juice for 3 days and rinse it off. Immerse this in sesame oil for one day and roast it in iron pan.  Dip this in horse gram decoction (<i>Macrotyloma uniflorum</i>) or Velampattai decoction (<i>Acacia nilotica</i>) for several times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரும்பு கிண்ணத்தில் நல்லெண்ணெய் ஊற்றி அதில் அரப்பொடியைப் போட்டு வறுத்து எடுத்து மூன்று மணி நேரம் புளித்த காடி விட்டுக் கழுவிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Roast the iron powder with sesame oil in an iron bowl and soak this in sour vinegar (Kaadi) for 3 hours.  Rinse it off well to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருவேலம் பட்டை இடித்த சாற்றில் அரப்பொடியை ஆறு மணி நேரம் எரித்து வேகவிட்டு காடியில் கழுவி எடுத்துக் கொள்ள அரப்பொடி சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the iron powder in juice of Karuvelampattai (<i>Acacia nilotica</i>) for 6 hours and rinse it off with vinegar (Kaadi) thoroughly to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'bronze_venkalam': {
		'tn': 'ஈயம்',
		'en': 'Lead ',
		'nam': '(Vangam)',
		'data': [{
		  'tn': '<p>எண்ணெய், பசுவின் நீர், காடி, புளித்த மோர், சாணச்சாறு, எருக்கம் பால், வெள்ளாட்டுப் பால் இவை ஒவ்வொன்றிலும் ஏழு தரம் ஈயத்தை உருக்கி வார்க்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p>Melt the Vangam and pour it into sesame oil, cow\'s urine, vinegar (Kaadi), sour butter milk, cow dung juice, latex of  Erukku (<i>Calotropis gigantea</i>) and goat\'s milk separately for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'cast_iron_thandavaalam': {
		'tn': 'எஃகு (உருக்கு)',
		'en': 'Steel ',
		'nam': '(Urukku)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் உருக்குப் பொடியில் 210 கிராம் கொட்டை முந்திரிகை பூச்சாறு விட்டு காலை முதல் மாலை வரை ஆறு தினங்கள் வெயிலில் காய வைக்க வேண்டும். பின்னர் இரண்டு நாள் சாறு விடாமல் உலர்த்தி எடுக்கவும். இதே போல் இரண்டு முறை செய்யவும். பின்னர் இருபத்தைந்தாம் நாள் முதல் பத்து நாட்கள் தொடர்ந்து மேற்படி சாறு விட்டு வெயிலில் வைத்துப் பின்பு சாறு விடாமல் இரண்டு நாள் உலர்த்தி, நீர்விட்டுக் கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 g of Urukku powder, pour 210 ml of flower juice of Cashew (<i>Anacardium occidentale</i>) and insolate it for 6 days.  On next two days, insolate it without adding juice Perform this process twice. Then again insolate it with this juice for 10 days and on next two days dry it without adding juice. Rinse it off well to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தேய்ந்த பழைய உளியை உலையிலிட்டுக் காய்ச்சி வெள்ளாட்டுப் பிச்சில் தோய்க்க வெட்டையாகும். வெட்டையாகும் வரை தோய்க்க சுத்தியாகும். ஒவ்வொரு முறையும் புதிய பிச்சைப் பயன்படுத்த வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the worn out old chisel in furnace and soak it in goat’s bile. This process is repeated until the metal becomes rigid with fresh bile for each soaking. Thus Steel gets purified.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> உளியை, புளியிலை கனத்தில் தகடாக அடித்து, கொல்லனுலையில் சிவக்கக் காய்ச்சி, காடி, நல்லெண்ணெய், பசுவின் நீர், கொள்ளுக் குடிநீர் இவை ஒவ்வொன்றிலும் மும்மூன்று முறை தோய்த்து அரத்தால் அராவித் தூளாக்கிக் கொள்ள எஃகு சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Make the chisel into foil of Tamarind leaf\'s density and heat it to red hot in furnace. Then soak this in vinegar (Kaadi), sesame oil, cow\'s urine and horse gram\'s decoction (<i>Macrotyloma uniflorum</i>) separately for 3 times.  Powder it by rubbing with iron to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'copper_chembu': {
		'tn': 'கருவங்கம்',
		'en': 'Plumbum ',
		'nam': '(Karuvangam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நொச்சிச் சாற்றில் மஞ்சள் பொடியைக் கலந்து வைத்துக் கொண்டு அதில் கருவங்கத்தை உருக்கி சாய்க்கவும். இப்படி இரண்டு முறை செய்யவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix turmeric powder in leaf juice of Notchi (<i>Vitex negundo</i>).  Melt the Karuvangam and pour it into the above mixture.  Repeat the process twice to get the purified Karuvangam.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் வங்கப் பொடிக்கு 210 கிராம் ஐவேலி சமூலச்சாறு விட்டு ஒரு நாள் முழுதும் வெயிலில் வைத்து, மறுநாளும் அது போலவே செய்து இவ்வாறு பத்து நாள் செய்ய வேண்டும்.பின்னர் இரண்டு நாட்கள் சாறு விடாது உலர்த்தி, மறுபடியும் முன்போலவே ஒரு முறை செய்து, பிறகு ஒரு பானைக்குள் மேற்படி வங்கத்தையிட்டு அதில் மேற்படி சாறு 5.3 லிட்டர் விட்டு வாய் பொருத்தமுள்ள பாண்டத்தால் மூடிச் சீலை செய்து பூமியில் குழி தோண்டி அதற்குள்ளிட்டு சாம்பல் எருவால் மூடி இருபது நாட்கள் கழிந்த பிறகு எடுக்க பூமியினின்று எழும் ஆவியால் வங்கம் ஒருவிதச் சிறந்த குணத்தையடைந்து சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Insolate the Vangam powder (35 g) with 210 ml of Aiveli samoola juice (<i>Diplocyclos palmatus</i>) for 10 days. On next two days insolate it without adding juice and repeat this process once again. Then mix this Vangam in 5.3 liters of Aiveli samoola juice (<i>Diplocyclos palmatus</i>) in a pot and lute it. Place it in a pit and fill it with cow dung ash. Take it from the pit after 20 days to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருவங்கப் பொடியை நொச்சிச் சாற்றில் போட்டு வெயிலில் வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix the Karuvangam powder in Notchi juice (<i>Vitex negundo</i>) and insolate it to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெள்ளாட்டு நீரில் பிரண்டை வேர் கற்கத்தைப் போட்டு கலந்து நல்லெண்ணெயைச் சேர்த்து அதில் கருவங்கத்தை உருக்கிச் சாய்த்து ஆறவிட்டுக் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p><p><b>குறிப்பு: பத்து தரம் கருவங்கத்தை உருக்கிக் கொள்ள சுத்தியாகும் - யாகோபு வைத்தியம் 300</b></p>',
		  'en': '<p><span class="list-style-v1"></span> Mix the sesame oil with paste made out of goat\'s urine and Pirandai root (<i>Cissus quadrangularis</i>).  Melt and pour Karuvangam into this mixture.  Rinse it off on cooling to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu </p><p><b>Note:</b> Melt and pour the Karuvangam into this mixture for ten times to get the purified form - <b>Yagopu vaidhiyam 300.</b></p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பெருச்சாளி மலத்தினால் ஈயத்தின் நீரை வாங்கிவிடலாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Use Bandicoot feces to purify Karuvangam.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருவங்கத்தை உருக்கிப் பிரண்டையை அரைத்து கோநீரில் கலக்கியதில் 7 முறை சாய்த்து எடுக்கவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix the Pirandai (<i>Cissus quadrangularis</i>) paste in cow\'s urine.  Melt and pour the Karuvangam into this mixture for 7 times to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காரீயத்தை நல்லெண்ணெய், கோமூத்திரம், காடி, புளித்த மோர், கொள்ளுச்சாறு, எருக்கம்பால் இவற்றில் தனித்தனியே உருக்கி எடுத்துக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Karuvangam and pour it into sesame oil, cow\'s urine, vinegar (Kaadi), sour butter milk, horse gram\'s extract (<i>Macrotyloma uniflorum</i>) and latex of Erukku (<i>Calotropis gigantea</i>) separately to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 175 கிராம் காரீயத்தை உருக்கி நல்லெண்ணெயில் ஐந்து முறை வார்த்து பிறகு கொள்ளு அவித்த தண்ணீரில் ஐந்து முறை வார்க்கவும்.பிறகு சுண்ணாம்பு நீரில் ஐந்து முறை வார்க்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt 175 g of Karuvangam and pour it into sesame oil, horse gram decoction (<i>Macrotyloma uniflorum</i>) and limestone water separately for 5 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருவங்கத்தை உருக்கி மிகவும் எச்சரிக்கையாகக் காடியில் சாய்க்கவும். பின்னர் அதனை மீண்டும் உருக்கி, புளி இலைச் சாற்றில் சாய்க்கவும். இதே போல புளித்த மோர், குமரிச்சாறு, பசுவின் சிறுநீர், நல்லெண்ணெய் ஆகியவற்றிலும் அடுத்தடுத்து செய்து கழுவி உலர்த்திக் கொள்ளவும். கருவங்கத்தை சுத்தி செய்வதற்கு பாதுகாப்பானதொரு,பின்வரும் முறையைக் கடைபிடிக்கலாம். அதாவது கருவங்கத்தைச் சுத்தி செய்வதற்கான திரவங்களை ஒரு உரலுக்குள் ஊற்றி, உரலை ஒரு திரிகல்லின் (யந்திரக்கல்) மேற்கல்லாலே மூடி, காரீயத்தை (கருவங்கத்தை) நீண்டதொரு வால் கரண்டியிலிட்டு உருக்கி, திரிகல்லின் மேலேயுள்ள துளை வழியாய் ஊற்ற வேண்டும்.இம்முறையில் கருவங்கம் சீறினாலும், சுத்தி செய்பவருக்கு பாதுகாப்பு கிடைக்கும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Karuvangam and pour it into vinegar (Kaadi), Tamarind leaf juice, sour butter milk, Aloe vera juice, cow\'s urine and sesame oil separately.  Rinse it off well to get the purified form.  Usage of hand mill stone for this process ensures the safety of person.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		}]
	  },
	  'ferrosoferric_oxide_mandooram': {
		'tn': 'காந்தம் (அயகாந்தம்)',
		'en': 'MAGNETIC OXIDE OF IRON ',
		'nam': '(KAANDHAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தைக் கொல்லன் உலையிலிட்டுக் காய்ச்சி ஏழு அல்லது இருபத்தொரு முறை கொள்ளுக் குடிநீரில் தோய்த்து கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Kaandham in furnace, dip it in horse gram\'s decoction (<i>Macrotyloma uniflorum</i>) for 7 or 21 times and rinse it off well to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் காந்தப் பொடிக்கு, 210 கிராம் பொன்னாவாரை வேர்ப்பட்டைச்சாறு விட்டுக் காலை முதல் மாலை வரை வெயிலில் வைக்க வேண்டும்.இவ்விதம் பத்து நாட்கள் செய்து, இரண்டு நாட்கள் சாறு விடாமல் உலர்த்தி பின்னும் இது போல இருமுறை செய்து, கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 g of Kaandham powder, 210 g of root bark juice of Ponnaavaarai (<i>Senna occidentalis</i>) is added. Insolate this for 10 days. Then dry it under sunlight without adding the juice and perform this same process twice.  Rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தைப் பொடித்து முடிகட்டி, காடியிலும் கொள்ளுக் குடிநீரிலும் முறையே அவித்து எடுத்துக் கழுவி உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Kaandham powder and boil it in vinegar (Kaadi) and horse gram’s decoction (<i>Macrotyloma uniflorum</i>) separately.  Rinse it off finally to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஒரு பலம் காந்தத்தை ஒரு மண் சட்டியிலிட்டு கொன்றை இலைச்சாறு 8 பலம் விட்டு, வெயிலில் வைக்கவும். இவ்வாறே நாள் ஒன்றுக்கு எட்டெட்டு பலம் வீதம் ஒன்பது நாட்கள் விட்டு வெயிலில் வைத்துப் பின்பு துளசிச்சாறு ஒன்பது நாளும், வல்லாரைச் சாறு ஒன்பது நாளும் 27 நாள் ஆன பின் தூய்மை செய்ய காந்தம் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Insolate 35 g (1 balam) of Kaandham with the following juices of each 280 g (8 balam) to get the purified form.</p><table><tbody><tr><td>1st - 9th day</td><td>Kondrai leaf juice (<i>Cassia fistula</i>)</td></tr><tr><td>10th  - 18th day</td><td>Tulasi leaf juice (<i>Ocimum sanctum</i>)</td></tr><tr><td>19th -  27th day</td><td>Vallarai juice (<i>Centella asiatica</i>)</td></tr></tbody></table><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> எலுமிச்சம்பழச்சாறு, புளித்த காடி, புளித்த மோர் இவைகளில் முறையே மும்மூன்று நாள் தனித்தனியே காந்தத்தை ஊற வைத்து வெயிலில் வைத்துக் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Kaandham in lemon juice, vinegar (Kaadi), sour butter milk separately for 3 days. Insolate it and rinse it off to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தை எலுமிச்சம் பழச்சாறு, காடி, புளித்த மோர் இவற்றில் தனித்தனியாகக் கொதிக்க வைத்து எடுத்து பின்னர் சாண நீரில் ஏழு முறை காய்ச்சி எடுத்து கழுவி காய வைக்க சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Kaandham in lemon juice, vinegar (Kaadi) and sour butter milk separately. Then boil this in cow dung juice for 7 times, rinse it and dry it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தை எலுமிச்சம் பழச்சாறு, காடி, புளித்த மோர்க் கலவையில் கொதிக்க வைத்து எடுத்து பின்னர் சாண நீரில் ஏழு முறை காய்ச்ச சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Kaandham in liquid concoction of lemon juice, vinegar (Kaadi) and sour butter milk. Then boil this in cow dung juice for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தை எலுமிச்சம் பழச்சாற்றில் அரைத்து முக்கால் மணி நேரம் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Kaandham with lemon juice and take it after 45 minutes.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தை ஆலம்பாலில் ஒரு நாள் ஊற வைத்து உலர்த்த சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Kaandham in latex of Banyan tree (Aalampaal) (<i>Ficus benghalensis</i>) for 1 day to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஊசிக்காந்தத்தை எலுமிச்சம் பழச்சாற்றில் முக்கால் மணி நேரமும், காடியில் முக்கால் மணி நேரமும் ஊற வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Kaandham in lemon juice and vinegar (Kaadi) separately for 45 minutes to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>காந்தத்தைப் பொடி விழாமல் சிறுக வெட்டி கிழிகட்டி பானையில் விட்டு ஆடு, மாடு, கழுதை, குதிரை ஆகிய பிராணிகளின் மூத்திரத்தைக் கூட்டி ஏழு நாட்கள் தோலாயந்திரமாக எரிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Kaandham in a piece of cloth and hang it into the liquid concoction made of urines of goat,cow, donkey and horse.  Then burn it as Tholayandhiram for 7 days.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காந்தத்தை வரகு வைக்கோல் சேர்த்து எரித்து எடுத்துக் கொள்ளலாம்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the Kaandham with Kodo millet straw to get the purified form.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		}]
	  },
	  'gold_pon': {
		'tn': 'செம்பு (தாமிரம்)',
		'en': 'COPPER',
		'nam': '(CHEMBU)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> செம்பை ஈசல் இறகு போலத் தட்டிச் சிவக்கக் காய்ச்சி கொள்ளுக் குடிநீர், புளியிலைச் சாறு, கற்றாழைச்சாறு, புளித்த மோர், பொன்னாங்காணிச் சாறு இவைகளில் தனித்தனியே ஏழு தரம் தோய்த்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Chembu till it attains red hot.  Then dip it separately in horse gram’s decoction (<i>Macrotyloma uniflorum</i>), butter milk, Tamarind leaf juice, Aloe vera juice and leaf juice of Ponnangaani (<i>Alternanthera sessilis</i>) for 7 times.  Rinse it off well to get the purified form.</p><p class="nubi">The Siddha Formulary of India   </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் செம்பு பொடிக்கு, 210 கிராம் செம்பருத்தி இலைச்சாறு விட்டு வெயிலில் காலை முதல் மாலை வரை வைக்கவும். இவ்விதம் ஆறு நாட்கள் தினமும் சாறுவிட்டு உலர்த்தி வந்து, ஏழாம் நாள் முதல் இரண்டு நாட்கள் சாறுவிடாமல் வெயிலில் உலர்த்தவும்.பிறகு வெள்ளாட்டு நீரிலும், செந்நிறப் பசுவின் நீரிலும் முன் போலவே செய்யவும். முடிவில் 210 கிராம் முள்ளங்கிச்சாறு வீதம் பத்து நாட்கள் வரை விட்டு, மேற்கூறிய வண்ணமே ஒவ்வொரு நாளும் வெயிலில் வைத்து, பிறகு இரண்டு நாட்கள் சாறு விடாமலே உலர்த்தி, புதிய ஓட்டில் இட்டு, உமி நெருப்பில் ஈரம் சிறிதுமின்றி வறுத்து, தூய நீர் விட்டுக் கழுவி, துணியால் ஈரத்தைப் போக்கி, வெயிலில் ஈரமின்றி உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p><p><b>குறிப்பு: </b> ஒவ்வொரு சாறு அல்லது நீருக்கு மத்தியில் இரண்டு நாட்கள் உலர்த்தும்படிச் சொன்னபோதிலும், நீர் சுண்டி உலரவில்லையேல், உலரும் வரை வெயிலில் வைத்து நன்றாய் உலர்ந்த பின், அடுத்த நீரில் அல்லது சாற்றில் பாகப்படுத்த வேண்டும்.</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 g of Chembu, pour the following juices and insolate it. Then roast it in an earthen ware by using husk ember and rinse it off well. Wipe out the moisture and dry it in sunlight to get the purified form.</p><table><tr><td>1st – 6th</td><td>Pour 210 ml of leaf juice of Sembaruthi (<i>Gossypium arboreum</i>) daily and insolate it.</td></tr><tr><td>7th, 8th day</td><td>Insolate it without adding juice</td></tr><tr><td>9th – 14th day</td><td>Pour 210 ml of goat\'s urine daily and dry it in sunlight.</td></tr><tr><td>15th, 16th day</td><td>Insolate it without adding urine.</td></tr><tr><td>17th – 22nd day</td><td>Pour 210 ml of Cow\'s urine daily and dry it in sunlight.</td></tr><tr><td>23rd, 24th day</td><td>Insolate it without adding urine.</td></tr><tr><td>25th – 34th day</td><td>Pour 210 ml of Radish juice (<i>Raphanus sativus</i>) and insolate it</td></tr><tr><td>35th, 36th day</td><td>Insolate it without adding juice</td></tr></table><p><b>Note: In this process the successive juice is added after complete insolation from the previously added juice.</b></p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> செம்பைத் தகடாக்கிப் பழுக்கக் காய்ச்சி மோர், காடி, புளிய இலைச்சாறு, குப்பைமேனிச் சாறு இவற்றில் தனித்தனியே 7 முறை தோய்த்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Chembu to attain red hot and dip it separately in butter milk, vinegar (Kaadi), Tamarind leaf juice, leaf juice of Kuppaimeni (<i>Acalypha indica</i>) for 7 times to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> முருங்கையிலைக் கற்கம், கற்சுண்ணாம்பு இவைகளைக் கரைத்த நீரில் 7, 14, 21 தடவை செம்பைக் காய்ச்சித் தோய்த்தெடுக்க சுத்தியாகும்.விசேஷ ஊறல் நீங்கும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the lime stone and drumstick leaf paste (<i>Moringa oleifera</i>) in water.  Heat the Chembu and dip it in this mixture for 7/14/21 times to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தாமிரத்தைத் தகட்டித்துத் தாளகமும், சாரமும், பழச்சாறும், அமுரியும் ஒன்றாகச் சேர்த்துக் கலக்கி தாமிரத் தகட்டை அதில் போட்டுப் பத்து நாள் வெயிலில் வைத்து எடுத்துக் கழுவ சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Insolate the Chembu plate in the mixture of Thalagam, Navachaaram, lemon juice and human’s urine for 10 days and rinse it off to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கஞ்சாயிலைச் சாற்றில் தனித்தனியே ஏழு முறை உருக்கிக் கொள்ள தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Chembu and pour it into leaf juice of Kanja (<i>Cannabis sativa</i>) for 7 times to get the purified form</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சிறுகீரையை அரைத்து தாமிரத் தகட்டிற்குக் கவசம் செய்து, சீலைமண் செய்து, பத்து எருவில் புடம் போட தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Coat the paste of Sirukeerai (<i>Amaranthus tricolor</i>) over the Chembu plate, lute it and incinerate it with 10 cowdung cakes to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் செம்பைத் தகடாய்த் தட்டவும். சாணி கரைத்து அதில் அந்த தகட்டைப் போட்டு வேக வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Chembu plate (35 g) in cow dung juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> செம்புச் சல்லியை உருக்கி கடலாரைச் சாற்றில் தனித்தனியே ஏழு முறை உருக்க செம்பு சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Chembu and pour it into the juice of Kadalaarai [Wild sorrel of Marsilea genus] for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> செம்பைத் தகடாய்த் தட்டிக் கொள்ளவும். இரத்தினச் சுருட்டுப் பட்டையை அரைத்து அடைதட்டி செம்புத்தகட்டின் மேலே வைத்து, அவற்றின் மேலே அடை வைத்து பத்து எருவில் புடம் போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Rathina suruttu pattai and make it into a patty. Place this patty over the Chembu plate and incinerate it with 10 cow dung cakes to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> செம்பைத் தகடாய்த் தட்டி சிவக்கக் காய்ச்சி காடியிலும், பசுவின் நீரிலும்  மூன்று முறை தோய்த்து எடுக்கவும்.எலுமிச்சம் பழச்சாற்றில் கந்தகத்தை அரைத்து செம்புத் தகட்டில் பூசி பத்துப் புடம் போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Chembu to attain red hot and dip it separately in vinegar (Kaadi) and cow\'s urine for 3 times. Grind Kandhagam with lemon juice to a paste, coat this paste over Chembu and incinerate it 10 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> செம்பை மெல்லிய தகடாய்த் தட்டி சிவக்கக் காய்ச்சி, சாணச்சாற்றில் ஏழு முறை தோய்த்து எடுக்கவும். பின்னர் கற்றாழைச் சாறு, புளியிலைச்சாறு, மோர், பொன்னாங்காணிச்சாறு இவை ஒவ்வொன்றிலும் ஏழு முறை செம்புத் தகட்டைச் சிவக்கக் காய்ச்சித் தோய்த்திட தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Chembu foil to attain red hot and dip it separately in cow dung juice, juice of Aloe vera, Tamarind leaf juice, butter milk and juice of Ponnagaani (<i>Alternanthera sessilis</i>) for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> குஞ்சு பொரித்த முட்டைத் தோல், தொட்டால் வாடி சமன் எடை சேர்த்து அரைத்து தாமிரத்தை மெல்லியதாய்த் தட்டி, கவசம் செய்து, சீலைமண் மூன்று செய்து, பத்து எருவில் புடம் போடவும். இவ்வாறு மூன்று புடம் போட தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind equal parts of chick hatched egg shell and Thottaal vaadi (<i>Mimosa pudica</i>) together and coat this paste over the Chembu foil.  Lute it thrice and incinerate it with 10 cow dung cakes thrice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சீந்தில் கொடிவேர், செம்பருத்திப் பூ இவை இரண்டும் சமன் எடை எடுத்தரைத்து, சல்லிக்குக் கவசம் செய்து, சீலைமண் மூன்று செய்து பத்து எருவில் புடம் போட சுத்தியாகும். இப்படி இரண்டு முறை போட்டால் நல்லது.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind equal parts of root of Seendhil (<i>Tinospora cordifolia</i>) and flower of Sembaruthi (<i>Gossypium arboreum</i>) together and daub this over the Chembu. Lute it thrice and incinerate it with 10 cow dung cakes twice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> ஆகாசத் தாமரை இலையையும், மனோசிலையையும் சமமாக எடுத்து அரைத்து, அதைத் தாமிரச்சல்லிக்குக் கவசம் செய்து, சீலைமண் செய்து, பத்து எருவில் மூன்று முறை புடம் போடத் தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the equal parts of leaf of Aagaaya Thaamarai (<i>Pistia stratiotes</i>) and Red orpiment (<i>Manosilai</i>) together and coat this paste over the Chembu.  Lute it and incinerate it with 10 cow dung cakes thrice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கோழி முட்டை மஞ்சள் கரு எடுத்துத் தைலம் வாங்கி, அந்த தைலத்தில் வெடியுப்பு 4 கிராம், சீனக்காரம் 4 கிராம், வெண்காரம் 4 கிராம், வீரம் 4 கிராம்,  ஆகியவற்றைப் போடவும். தாமிரத்தைப் பழுக்கக் காய்ச்சி தைலத்தில் ஏழு முறை தோய்க்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix 4 g each of Vediyuppu, Seenaakaaram, Vengaram and Veeram with oil extracted from egg yolk (Anda thailam). Heat the Chembu to attain yellow color and dip it in this mixture for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> செப்பு நெருஞ்சிலை அரைத்து, செம்பு தகட்டுக்குக் கவசம் செய்து கொள்ளவும். பிறகு ஒன்றின் மேல் ஒன்று வைத்து ஒன்பது அங்குலத்தில் எருவடுக்கி, ஒன்பது முறை புடம் போட செம்பு சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Coat the paste of Seppu Nerunjil (<i>Indigofera enneaphylla</i>) over the Chembu plate and incinerate it for 9 times with cow dung cakes piled up for about 9 inches.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கழுதை நீர், கருங்குன்றிமணிச்சாறு, பழச்சாறு, கொள்ளு இலைச்சாறு இவை எல்லாம் சம பாகம் சேர்த்து, அதில் செம்பை ஏழு முறை உருக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix equal parts of donkey\'s urine, juice of Karungundrimani (Black variety of <i>Abrus precatorius</i>), lemon juice and leaf juice of horse gram (<i>Macrotyloma uniflorum</i>) together.  Melt and pour the Chembu into this liquid concoction for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பாறை உப்பு, சிலாசத்து, சூடன், நேர்வாளம் இவற்றைத் தாய்ப்பால் விட்டு அரைத்துக் கொள்ளவும். இதைத் தாமிரச்சல்லிக்குக் கவசம் செய்து, ஒன்றரை அங்குலத்தில் எருவடுக்கி புடம் போட தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind Paarai Uppu, Silasathu, Camphor and Nervaalam (<i>Croton tiglium</i>) with breast milk and coat this paste over Chembu.  Incinerate it with cowdung cakes piled up for about 1 ½  inches to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருங்குன்றிமணி இலையை அரைத்து, கொள்ளிலைச் சாற்றில் கரைத்துக் கொள்ள வேண்டும். தாமிரத்தைக் காய்ச்சி இந்தச் சாற்றில் தோய்க்கவும். மறுபடியும் எலுமிச்சம் பழச்சாறு, தேசி நீர் சேர்த்துத் தோய்க்கவும். பின்பு ஆற்று அலரி இலையை அரைத்து, தாமிரத்திற்குக் கவசம் செய்து, புடமிட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the leaf paste of Karungundrimani (Black variety of <i>Abrus precatorius</i>) in leaf juice of horse gram (<i>Macrotyloma uniflorum</i>). Heat the Chembu and dip it in this mixture.  Heat and dip the Chembu again in liquid conconction of lemon juice and donkey\'s urine. Then coat the Chembu with paste of Aattru Alari (<i>Polygonum glabrum</i>) and incinerate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> புளித்த மோரில் பச்சை மஞ்சளிட்டு இடித்துப் பிழிந்து கொண்டு, செம்பை உருக்கி பதினொரு முறை விட வேண்டும். பின்னர் பூசணிக்காய்ச் சாற்றுக்குள் பதினொரு முறை உருக்கிச் சாய்க்க வேண்டும். பின் வெண்ணொச்சி சாற்றில் வெற்றிலையை அரைத்துப் போட்டு பதினைந்து முறை உருக்கிக் கொள்ள செம்பு சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Melt and pour the Chembu into the liquid concoction of sour butter milk and fresh turmeric extract for 11 times. Perform this process in pumpkin juice for 11 times, then in the mixture of betel leaf paste (<i>Piper betle</i>) and leaf juice of Vennotchi (<i>Vitex negundo</i>) for 15 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தாமிரத்தைச் சல்லி போல நறுக்கிக் கொண்டு, புளித்த மோரில் ஏழு முறை உருக்கிச் சாய்க்க வேண்டும். பின்னர் எருக்கம் பாலில் ஏழு முறையும், நல்லெண்ணெய், பசு நீர், எலுமிச்சம் பழச்சாறு, பொன்னாங்காணிச் சாறு இவற்றில் ஒவ்வொரு முறையும் உருக்கிக் கொள்ள தாமிரம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt and pour the Chembu pieces in the following liquids to get the purified form.</p><table><tr><th>Liquids</th><th>Pouring times</th></tr><tr><td>1. Sour butter milk</td><td>7 times</td></tr><tr><td>2. Latex of Erukku (<i>Calotropis gigantea</i>)</td><td>7 times</td></tr><tr><td>3. Sesame oil</td><td>1 time</td></tr><tr><td>4. Cow\'s urine</td><td>1 time</td></tr><tr><td>5. Lemon juice</td><td>1 time</td></tr><tr><td>6. Juice of Ponnangaani (<i>Alternanthera sessilis</i>)</td><td>1 time</td></tr></table><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் தாமிரத்தை  கழுதை நீரில் எட்டு நாள் ஊற விட வேண்டும்.புளிநரளைச் சாறும், பழச்சாறும், எருமை மோரும் ஒவ்வொன்றும் 1.3 லிட்டர் எடுத்துக் கொள்ள வேண்டும். கொட்டை நீக்கிய கொறுக்காய்ப்புளி 35 கிராம், வெண்குன்றி 35 கிராம், புளிபொருக்கு (திப்பி) 35 கிராம், கற்சுண்ணம் 35 கிராம், இவற்றை இடித்துத் தூளாக்கி மேற்படி சாற்றில் கலந்து கொள்ள வேண்டும். தயிர் போன்ற அந்தக் கலவையில் தாமிரத்தைக் குகையிலிட்டு ஏழு முறை உருக்கிக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>  Soak the Chembu (35 g) in donkey\'s urine for 8 days. Take the liquid concoction of 1.3 liters each of juice of Pulinaralai (<i>Cyphostemma setosum</i>), lemon juice and buffalo\'s butter milk and mix this with 35 g powders each of Korukkaai Puli (<i>Garcinia cambogia</i>), Venkundri (<i>Abrus precatorius</i>), Puli porukku (Bark of Tamarind) and limestone. Melt the Chembu in crucible and pour it into this mixture for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'iron_irumbu': {
		'tn': 'தண்டவாளம்',
		'en': 'Cast iron',
		'nam': '(Thandavaalam)',
		'data': [{
		  'tn': '<p>தண்டவாளத் தூளை இரும்பு சட்டியில் போட்டு, பசுவின் மூத்திரத்தைத் தூள் மூழ்கும் வரை விட்டு, அடுப்பேற்றி தீயிட்டுக் கரண்டி கொண்டு கிண்டி சுண்ட வைக்கவும். இப்படி மும்முறை செய்ய தண்டவாளம் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Take cow\'s urine in an iron pan, immerse the Thandavaalam powder in it and heat it. Stir this until it attains thick consistency. This process is performed for 3 times to get the purified Thandavaalam.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'lead_vangam': {
		'tn': 'நாகம்',
		'en': 'Zinc',
		'nam': '(Naagam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>ஒரு சட்டியில் இலுப்பை நெய்யை ஊற்றி, இரண்டு நவச்சாரக் கட்டியெடுத்து அந்த இலுப்பை நெய்யுள்ள சட்டியின் இரண்டு பக்கங்களிலும் பக்கத்துக்கு ஒன்றாக அக்கட்டிகளை அந்நெய்யில் அரைக் கட்டி முழுகும்படி வைத்து, நாகத்தை இரும்புச் சட்டியிலிட்டு, உலையில் வைத்து உருக்கி இருபத்தொரு முறை அந்நெய்யில் ஊற்ற வேண்டும். ஒவ்வொரு முறையும் கழுவி உருக்க வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span>Pour Mahua oil in a vessel and keep two pieces of Navatchaaram (Ammonium chloride)  in either side of the vessel with partial immersion. Melt Naagam in iron pan by the furnace and pour it into this oil for 21 times to get the purified form</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> உருத்திராட்சம் இழைத்தெடுத்த குழம்பு 4 ½ பலத்தை, புன்னை மலரின் மகரந்தப் பொடியுடனே கலந்துள்ள தேன் (1 ⅛ பலம்) சேர்த்து, அதில் 1 பலம் துத்தநாகப் பொடியிட்டு வெயிலில் வைக்கவும். இவ்விதம் ஒரு மாத காலம் செய்து வர நாகம் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix 4 ½ balam of the Ruthraatcham seed paste (<i>Elaeocarpus ganitrus</i>) with 1 ⅛ balam of honey containing pollens of Punnai (Calophyllum inophyllum), add 35 g (1 balam) of Nagam powder to this mixture and insolate it. This procedure is performed for 1 month to get the purified Naagam. </p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> குழந்தை மூத்திரத்தில் பழச்சாறு சேர்த்து கற்சுண்ணம் போட்டு வைத்துக் கொண்டு, கரண்டியில் ஆட்டு நெய் சிறிது விட்டு, நாகத்தை உருக்கி, மேற்படி நீரில் பத்து முறை சாய்த்து  எடுக்க சுத்தியாகும். ஒருகால் சீறுமானால் நீர்ச்சட்டி விளிம்பில் நான்கு நவச்சாரத் துண்டுகளை (1½ அங்குலம்) (3.75 செ.மீ நீளம்) நீரில் படும்படி வைக்கவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Naagam with goat’s ghee, pour it into the liquid concoction of child’s urine, lemon juice and lime stone and then burn it.  This process is performed for 10 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இலுப்பைப் புண்ணாக்கைக் கரைத்துக் குழம்பாக்கி துத்த நாகத்துடன் இலுப்பை எண்ணெய் விட்டு உருக்கி 7 முறைக்குக் குறையாமலும் 21 முறைக்கு மிகாமலும் சாய்த்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Make solution of oil cake (Punnakku) of Iluppai (Madhuca longifolia).  Melt the Naagam with Mahua oil and pour it into this solution for 7-21 times to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> நாக வங்கத்தைத் தகடாய்த் தட்டிக் கொள்ளவும். நல்லெண்ணெய், பசு நீர், கள்ளிப்பால் இவற்றால் தனித்தனியே ஏழு முறை உருக்கிக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Make the Naagavangam into a foil.  Melt this foil and pour it separetely into sesame oil, cow’s urine and spurge milk (Euphorbia ligularia) for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> உரலுக்குள் இலுப்பை நெய் விட்டு வைத்து, அதைத் திருகை எந்திர மேற்கல்லால் மூடி, நாகத்தை உருக்கிக் கல்லின் துளை வழியாய் விட்டு, ஆறியதும் கழுவி எடுத்து மீண்டும் ஆறு முறை உருக்கி ஊற்றிக் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Pour Mahua oil into the mortar and cover it with the top stone of hand mill stone. Melt and pour Naagam through the hole of hand mill stone. On cooling, rinse it off well.  The process is repeated for 6 times to get the purified Naagam.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'magnetic_oxide_of_iron_kaandham': {
		'tn': 'பித்தளை',
		'en': 'Brass',
		'nam': '(Piththalai)',
		'data': [{
		  'tn': '<p>குப்பைமேனிச்சாறு, புளியிலைச்சாறு, வெள்ளாட்டுப் பால், கொள்ளுச்சாறு இவைகளைத் தனித்தனியாகவேனும், ஒன்றாகக் கலந்தேனும் வைத்துக் கொண்டு பித்தளையைத் தகட்டித்துச் சிவக்கக் காய்ச்சி அதில் மூன்று தடவை தோய்த்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Soak the red hot Piththalai foil in Kuppaimeni juice (<i>Acalypha indica</i>), Tamarind leaf juice, goat’s milk and horse gram extract (<i>Macrotyloma uniflorum</i>) separately for 3 times to get the purified form. This process can also be performed with liquid concoction of above liquids.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'plumbum_karuvangam': {
		'tn': 'பொன்',
		'en': 'Gold ',
		'nam': '(Pon)',
		'data': [{
		  'tn': '<p>பொன்னை மெல்லிய தகடாகத் தட்டி, செம்மண் பூசி, அகலில் இட்டு அடுப்பிலேற்றி வாட்டிக் கழுவி எடுத்துக் கொள்ளவும். இவ்வாறு ஆறு முறை செய்ய சுத்தியகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p>Daub the Gold plate with red mud, heat it in an earthen lid and rinse it off well. This process is performed for 6 times to get the purified form. </p><p class="nubi">The Siddha Formulary of India</p>',
		}]
	  },
	  'silver_velli': {
		'tn': 'மண்டூரம்',
		'en': 'Ferrosoferric oxide ',
		'nam': '(Mandooram)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கிட்டத்தைக் கல்லுரலிலிட்டு இடித்து வாயகன்ற ஒரு சட்டியிலிட்டு அதன் மேல் நான்கு பங்கு எடை புளியிலையைப் போட்டு, எண் மடங்கு நீர் விட்டு மூன்று மணி நேரம் வேகவிட்டு, ஆறியபின் இலையையும் பொடியையும் சேர்த்து நன்றாய்த் தேய்த்துக் கழுவி உலர்த்தி முறத்திலிட்டுப் புடைத்து இலையை நீக்கி விடுக. பிறகு கிட்டப்பொடியை அம்மியிலிட்டுப் பொடித்து ஒரு சட்டியிலிட்டு எட்டு பங்கு கோமூத்திரத்தை விட்டு அடுப்பேற்றிச் சிறு தீயால் எரித்து, மூத்திரம் சுண்டிய பின் இறக்கி, நீர்விட்டு கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span>Mix the pulverised Kittam (1 part), Tamarind leaf (4 parts) and water (8 parts) together and boil this for 3 hour. On cooling, rinse it off well,dry it and winnow away the tamarind leaf from it.  Triturate the Kittam powder and burn it with 8 volumes of cow’s urine.  Finally rinse it off well once all urine gets evaporated.</p><p class="nubi">The Siddha Formulary of India   </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> அயக்கிட்டத்தை உரலிலிட்டு இடித்து வஸ்திரகாயம் செய்து, ஒரு பீங்கான் பாத்திரத்தில் இட்டு அதன் மேல் நான்கு அங்குலம் நிற்கும் படியாகச் சீமை திராட்சைக் காடியை விட வேண்டும். இரண்டு வாரம் ஊறிய பின் வெள்ளைப் பூண்டை இடித்துப் பிழிந்த சாற்றை முன் போலவிட்டு ஒரு வாரம் ஊற வைக்க வேண்டும். ஊறவைக்கும் போது மூன்று நாட்களுக்கு ஒரு முறை பழைய சாற்றை நீக்கி புதிய சாற்றை விட வேண்டும். இவ்வாறு முறையே முன் சாறுகளால் செய்தபின் வாதுமை நெய்யில் அல்லது பசுவின் நெய்யில் சிட்டத்தை நன்றாய் வறுத்துப் பொடித்துக் கொள்வதே கிட்டத்தின் சுத்தி.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Ayakitta powder in Grape fermented liquid (Thiraatchai Kaadi) for 2 weeks and then soak it in garlic (<i>Allium sativum</i>) extract for one week.  Roast this with almond oil or cow’s ghee and pulverize it to fine powder to get the purified form.</p><p><b>Note: Use fresh liquids for every 3 days once.</b></p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu   </p>',
		}]
	  },
	  'steel_urukku': {
		'tn': 'வெண்கலம்',
		'en': 'Bronze',
		'nam': '(Venkalam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வெண்கலத்தை உருக்கி மூன்று முறை புளியிலைச் சாற்றில் ஊற்றி, பிறகு கொள்ளுக் குடிநீரில் மூன்று முறை ஊற்றி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Venkalam and pour it into Tamarind leaf juice and horse gram’s decoction (<i>Macrotyloma uniflorum</i>) separately for 3 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெண்கலத்தைப் புளித்த காடியில் மூன்று நாட்கள் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Venkalam in vinegar (Kaadi) for 3 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> உருக்கிய வெண்கலத்தைச் சாணகத்தில் துவைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Venkalam and dip it in cow dung juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெண்கலத்தை உலையில் இட்டு சிவக்கக் காய்ச்சிக் கொள்ளவும். பிறகு புளியிலைச் சாறு, தழுதாழைச்சாறு இவைகளில் தனித்தனியே மூன்று முறை தோய்க்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Dip the red hot Venkalam separately in Tamarind leaf juice and Thazhuthaazhai juice (<i>Clerodendrum phlomidis</i>) for 3 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'tin_velvangam': {
		'tn': 'வெள்வங்கம்',
		'en': 'Tin',
		'nam': '(Velvangam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நொச்சிச் சாற்றில் மஞ்சள் பொடியைக் கலந்து வைத்துக் கொண்டு அதில் வெள்வங்கத்தை உருக்கி சாய்க்கவும். இப்படி இரண்டு முறை செய்யவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix turmeric powder in leaf juice of Notchi (<i>Vitex negundo</i>).  Melt and pour the Velvangam into the above mixture.  Repeat the process twice to get the purified Velvangam.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் வங்கப் பொடிக்கு, 210 கிராம் ஐவேலிச் சமூலச்சாறு விட்டு, ஒரு நாள் முழுவதும் வெயிலில் வைத்து, மறுநாளும் அதுபோலவே செய்து, இவ்வாறு பத்து நாட்கள் வரைக்கும் செய்து, இரண்டு நாட்கள் சாறு விடாது உலர்த்தி, மறுபடியும் முன்போலவே ஒருமுறை செய்து, பிறகு ஒரு பானைக்குள் மேற்படி வங்கத்தை இட்டு, அதில் மேற்படி சாறு 5.3 லிட்டர் விட்டு, வாய் பொருத்தமுள்ள பாண்டத்தால் மூடிச் சீலை செய்து, பூமியில் குழி தோண்டி அதற்குள்ளிட்டு, சாம்பல் எருவால் மூடி, இருபது நாட்கள் கழிந்த பிறகு எடுக்க பூமியினின்று எழும் ஆவியால் வங்கம் ஒருவிதச் சிறந்த குணத்தையடைந்து சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Insolate the Velvangam powder (35 g) with 210 ml of Aiveli samoola juice (<i>Diplocyclos palmatus</i>) for 10 days.  On next two days insolate it without adding juice and repeat this process once again. Then mix this Vangam in 5.3 liters of Aiveli samoola juice (<i>Diplocyclos palmatus</i>) in a pot and lute it. Place it in a pit and fill the pit with cow dung ash.  Take it after 20 days to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெள்வங்கப் பொடியை நொச்சிச் சாற்றில் போட்டு வெயிலில் வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Velvangam powder in leaf juice of Notchi (<i>Vitex negundo</i>) and insolate it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> கருவங்கத்துக்குக் கூறப்பட்டுள்ள சுத்தி முறைகளை இங்கே வெள்வங்கத்துக்கும் கையாளலாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Follow the same purification process of Karuvangam to get the purified Velvangam.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெள்வங்கத்தை நல்லெண்ணெய் விட்டு உருக்கி 3 முறை மோரில் சாய்த்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p><p><b>குறிப்பு: இவ்வாறு கொள்ளுச் சாற்றிலும் சாய்த்தல் நன்று. சாய்ப்பதற்கு கல்லுரல் பயன்படுத்தலாம் - சிகிச்சா ரத்ந தீபம்</b></p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Velvangam with sesame oil and pour it into the butter milk for 3 times to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p><p><ul><b>Note:</b> The same process can be done with horse gram decoction (<i>Macrotyloma uniflorum</i>) instead of butter milk. For this process, ensure the usage of handmill stone. - Sikitcha Ratna Deepam</ul></p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இலுப்பை எண்ணெயில் நவச்சாரத்தூள் தூவி, அதில் வெள்வங்கத்தை ஏழு முறை உருக்கி சாய்க்க சுத்தியாகும். பின் சுத்த நீரில் கழுவி உலர்த்திப் பத்திரப்படுத்தவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p><p><b>குறிப்பு:இலுப்பை எண்ணெய்க்கு பதில் தேங்காய் எண்ணெயும் பயன்படுத்தலாம் - சரக்கு சுத்தி செய்முறைகள்</b></p>',
		  'en': '<p><span class="list-style-v1"></span> Mix Navaatchaara powder (Ammonium chloride) in Mahua oil. Melt and pour Velvangam into this mixture for 7 times. Then rinse it off with clean water to get the purified form.</p><p class="nubi">Siddha pharmacopoeia – Jaffna</p><p><b>Note:</b> Coconut oil can be used instead of Mahua oil - Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> காடி, மோர், பசு நீர், பழரசம் இவற்றில் தனித்தனியே வெள்வங்கத்தை உருக்கிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt and pour the Velvangam into vinegar (Kaadi), butter milk, cow’s urine and lemon juice separately to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'zinc_naagam': {
		'tn': 'வெள்ளி',
		'en': 'Silver ',
		'nam': '(Velli)',
		'data': [{
		  'tn': '<p>வெள்ளியைச் சுத்தி செய்யாமல் உபயோகித்தால், ஆயுள், சுக்கிலத் தாது பலம் இவற்றைக் குறைத்து, மலபந்தம், தாபம் இவைகளினால் தோன்றும் பிணிகளைப் பிறப்பிக்கும்.</p><p><span class="list-style-v1"></span> சரிகை வெள்ளியை உருக்கி, தகடாக்கித் தட்டிக் காய்ச்சி, மணித்தக்காளிச் சாற்றில் தோய்த்தெடுக்கவும். இங்ஙனம் வெள்ளி மடியும் வரையில் காய்ச்சிக் காய்ச்சித் தோய்த்துக் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Usage of impure Silver results in decreased life span, debilitating semen and also induce diseases due to constiption and heat. So, Silver must be detoxified before usage.</p><p><span class="list-style-v1"></span> Melt and make Silver lace into foil. Heat this foil, dip it in the fruit juice of Manithakkaali (<i>Solanum nigrum</i>). The process is repeated until the physical properties of Silver like luster, ductility, malleability etc., are altered. Rinse it off well to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மேற்கூறியவாறு வெள்ளியைப் பழுபாகற்கிழங்கின் சாற்றில் ஏழு முறை காய்ச்சித் தோய்த்துக் கழுவியெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Silver foil and dip it in tuber juice of Pazhupaagal (<i>Momordica dioica</i>) for 7 times. Rinse it off to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> மேற்கூறியவாறு வெள்ளியை, மகிழம்பூச் சாற்றிலாவது, பிரம தண்டியிலைச் சாற்றிலாவது காய்ச்சித் தோய்த்துக் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Silver and dip it either in the flower juice of Magizham (<i>Mimusops elengi</i>) or leaf juice of Brahmathandu (<i>Argemone mexicana</i>) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'hydragyrum_rasam': {
	    'tn': 'இரசம்',
	    'en': 'Hydragyrum ',
		'nam': '(Rasam)',
		'data': [{
		  'tn': '<p>இரசத்தை நல்லோரையில் 100, 50, 25, 12, 5, 1 என்னும் கணக்காய் எடுத்துச் சுத்தி செய்ய வேண்டும். 35 கிராமிற்குக் குறைவாக இரசத்தை சுத்தி செய்யக்கூடாது.</p><p><b>முக்கியக்குறிப்பு:-</b> எந்தக் காரணத்தைக் கொண்டும், பீங்கான் அல்லது கண்ணாடிப் பாத்திரத்தைத் தவிர, வேறு எந்த உலோகப் பாத்திரங்களையும், இரசத்தைச் சுத்தி செய்யப் பயன்படுத்தவே கூடாது. ஏனெனில், இரும்பைத் தவிர, மற்ற உலோகங்கள் பாதரசத்தில் எளிதில் கரைந்துவிடும். எனவே, இரசத்தைச் சுத்தி செய்வதற்கு உலோகப் பாத்திரங்களை உபயோகித்தால், பாதரசத்தில் உள்ள கசடுகளும், மலினங்களும் நீங்குவதற்குப் பதிலாகப் பாதரசமே மற்ற உலோகங்களைக் கிரகித்துக் கொண்டு சுத்தி அடைவதற்குப் பதிலாக மேலும் மாசடைந்துவிடும். இரசத்தைக் கையாளுபவர் கையில் மோதிரமோ, வளையலோ அணிந்திருத்தலாகாது.</p><p><span class="list-style-v1"></span> இரசத்தை செங்கல் பொடி, மஞ்சள் பொடி, வெல்லம், ஒட்டடை, அருகம்புல் இவற்றில் முறையே ஒவ்வொரு நாள் அரைத்துக் கழுவி எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p>Mercury should be refined only in Subha horai. Meanwhile, Mercury should not be refined to less than 35 grams.</p><p><b>Note: Use only ceramic or glassware to refine the Mercury under any circumstances. Don\'t utilize any metal utensils as metals other than iron can easily dissolve in Mercury. If any metal utensil is used to purify the Mercury, instead of removing the impurities, the Mercury itself will absorb other metals and become more polluted rather being refined.</b></p><p><span class="list-style-v1"></span> Grind the Rasam with brick powder, turmeric powder (<i>Curcuma longa</i>), jaggery, spider web and Arugam pul (<i>Cynodon dactylon</i>) separately for one day and rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் இரசத்தை, செங்கல் தூளிலும், மஞ்சட்பொடியிலும் ஒவ்வொரு மணி நேரம் ஆட்டி நீரில் அலம்பி 1.3 லிட்டர் குப்பைமேனி சாற்றிலிட்டு அடுப்பிலேற்றி சாறு சுண்டும்படி எரித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind 35 grams of Rasam with brick powder and turmeric (<i>Curcuma longa</i>) separately for 1 hour and rinse it with water. Afterwards, add 1.3 litres of Kuppaimeni juice (<i>Acalypha indica</i>) to Rasam and burn it until all the moisture content of the juice evaporates.</p><p class="nubi">The Siddha Formulary of India</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் (1 பலம்) இரசத்திற்குத் தும்பைச் சமூலச்சாறு (4 ¾ பலம்) விட்டு சூரிய புடம் வைக்கவும். இவ்வாறே 10 நாட்களுக்கு நாள்தோறும் புதிய சாறு விட்டு வெயிலில் வைக்கவும். பிறகு சாறு விடாமல் சாறு முற்றிலும் சுவறும்படி வெயிலில் வைத்தெடுக்கவும். இதை மேலும் ஒரு முறை செய்யவும். இவ்விரசம், அதனுடன் உள்ள தூள் ஆகியவற்றை ஒரு மட்பாண்டத்திலிட்டு 2 படி தும்பைச்சாறு விட்டுக் கவசம் செய்து பூமியில் 20 நாள் புதைத்தெடுத்துப் பின் நீர் விட்டுக் கழுவி எடுக்கவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 grams (1 balam) of Rasam, add 166 ml of Tumbai Samoola juice (<i>Leucas aspera</i>) and insolate. Perform this process for 10 days with fresh juice on each day. Then dry it under sunlight until all the juice evaporates. Repeat this procedure for one more time. Then transfer this Rasam to an earthen pot, add 2.6 litres of Tumbai juice (<i>Leucas aspera</i>) and lute it. Burry this for 20 days and then rinse the Rasam with water to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> வேண்டிய அளவு இரசத்தைத் தூய கெட்டித் துணியிலிட்டு ஆயிரம் முறை பிழிந்தெடுக்கவும். இதை ஒரு மண் சட்டியிலிட்டு அதன் மீது ஓர் அங்குலம் இருக்கும்படி சுத்த நீர் விட்டுச் சிறுதீயில் எரிக்கவும். நீர் குறையாமல் அந்த அளவைக் காத்துக் கொள்ளவும். நீர் கரு நிறமடைந்தவுடன் எடுத்து நீரை நீக்கிக் காடி நீரில் நான்கு அல்லது ஐந்து முறை கழுவி எடுக்க இரசம் பூரண சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Squeeze the required amount of Rasam through a clean cloth for thousand times, put it in an earthen pot, add pure water which should be in an inch measure above the Rasam and heat it. Care should be taken that the water content should not be reduced. Once the water turns black, discard the water and rinse the Rasam with vinegar (Kaadi) for 4 - 5 times to attain complete purification.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span></p><table><tr><th>சரக்கின் பெயர்</th><th>அளவு (கிராம்)</th></tr><tr><td>1. சித்திரமூல வேர்ப்பட்டைத்தூள்</td><td>35 கிராம்</td></tr><tr><td>2. திரிகடுகுப்பொடி</td><td>35 கிராம்</td></tr><tr><td>3. காயம்</td><td>35 கிராம்</td></tr><tr><td>4. இந்துப்புத்தூள்</td><td>35 கிராம்</td></tr></table><p>175 கிராம் (5 பலம்) இரசத்திற்கு, மேற்கண்ட தூள்களைச் சிறிது சிறிதாய்ச் சேர்த்துக் கல்வத்திலிட்டு முப்பத்தாறு மணி நேரம் அரைத்திடுக. பின்பு ஒரு குழல் கொண்டு தூள்களை ஊதி நீக்குக. இவ்விதம் ஏழு முறை செய்ய இரசம் உயர்தர சுத்தியை அடையும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span></p><table><tr><th>Drugs</th><th>Quantity</th></tr><tr><td>1. Root bark powder of Chithiramoolam (<i>Plumbago zeylanica</i>)</td><td>35 gram</td></tr><tr><td>2. Thirikadugu powder</td><td>35 gram</td></tr><tr><td>3. Asafoetida</td><td>35 gram</td></tr><tr><td>4. Indhuppu (Sindh salt)</td><td>35 gram</td></tr></table><p>Grind 175 grams (5 balam) of Rasam by adding the above tabled powders for 36 hours. Then blow out the powders by using a pipe. Perform this process for seven times to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> விதை நீக்கின மிளகாயில் இரசத்தை விட்டு, கோவை இலையை அரைத்து நான்கு விரற்கடை கனம் கவசித்து சீலைமண் ஏழு செய்து பத்து வறட்டியில் குக்கிடப்புடம் போட சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Pour the Rasam into the deseeded chilli and daub the paste of Kovai leaf (<i>Coccinia grandis</i>) of 4 finger breadth over this chilli. Lute it with 7 layers of cloth and incinerate it with 10 cow dung cakes (Kukkuda pudam) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> ஒட்டடை, வெல்லம், திரிகடுகு, மஞ்சள், கடுகு, செங்கல், உப்பு இவற்றில் ஒவ்வொன்றையும் தனித்தனியாக இரசத்துடன்  போட்டு அரைத்துக் கழுவி பின்னர் ஊமத்தைச்சாறு, தயிர், சுண்ணாம்பு நீர் இவற்றில் தனித்தனியாக 3 மணி நேரம் கழுவ இரசம் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Rasam with spider web, jaggery, Thirikadugu, turmeric, mustard, brick powder and salt separately and rinse it. Finally rinse it with Oomathai (<i>Datura metal</i>) juice, curd and limestone water seprately for 3 hours to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> எருக்கம் பாலில் இரசத்தை விட்டு ஒரு நாள் ஊறிய பின் இரசத்தைக் கல்வத்திலிட்டு செங்கல் தூளும், புகையீரல் தூளும், மஞ்சள் தூளும், சர்க்கரையும் அத்துடன் போட்டு அரைத்தெடுக்கச் சுத்தியாகும். முன் சுத்தித்த இரசத்தைக் கல்வத்திலிட்டு அத்துடன் வெள்ளைப் பூண்டை உரித்துப் போட்டு அரைத்து எடுக்க மிகுந்த சுத்தியாகும். இதைச் செந்தூரஞ்செய்யச் சகல காரியங்களுக்கும் உபயோகமாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Rasam in the latex of Erukku (<i>Calotropis gigantea</i>) for a day and grind it with brick powder, Spider web powder (Pugaiyeeral), turmeric powder (<i>Curcuma longa</i>) and sugar to get the purified form. Then grind this Rasam with garlic to attain superior purification.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span></p><table><tr><th>அரைப்பு சரக்கு</th><th>அரைப்பு நேரம்</th></tr><tr><td>1. ஒட்டடை</td><td>3 மணி நேரம்</td></tr><tr><td>2. செங்கட்டிமா</td><td>3 மணி நேரம்</td></tr><tr><td>3. மஞ்சள் தூள்</td><td>3 மணி நேரம்</td></tr></table><p>இரசத்தைக் கல்வத்திலிட்டு மேற்கண்டவற்றோடு அரைத்த பின் ஊது குழலால் ஊதி அவற்றை இரசத்திலிருந்து வேறுபடுத்தவும். பின்னர் வெற்றிலைச் சாறு விட்டரைத்து அதனைக் கழுவி எடுத்துத் துணியால் ஒற்றி நீரைப் போக்கவும். ஈற்றில் மாச்சீனி சேர்த்து அரைத்தால், சீனி வெள்ளையாகவே காணப்படும்.</p><p><b>குறிப்பு:</b> சீனி கறுப்பாக மாறுமாயின், இரசம் சுத்தியாகவில்லையென்று அறிந்து கொள்ள வேண்டும். அவ்விதம் இருப்பின், மேற்குறிப்பிட்ட சுத்தி முறையை மீண்டும் செய்யவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span></p><table><tr><th>Grinding drug</th><th>Grinding duration</th></tr><tr><td>1. Spider web</td><td>3 hours</td></tr><tr><td>2. Brick powder</td><td>3 hours</td></tr><tr><td>3. Turmeric powder (<i>Curcuma longa</i>)</td><td>3 hours</td></tr></table><p>Grind the Rasam with the above tabled items separately and blow out the powders using a pipe. Then grind the Rasam with juice of betel leaf (<i>Piper betle</i>), rinse it with water and wipe it with cloth to remove the moisture. At the end, the sugar should remain white on grinding with Rasam.</p><p><b>Note:</b> In case, the sugar turns black, it is noted that the Rasam is not purified completely. So, the above process has to be repeated again.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> இரசத்தை செங்கழுநீர்ச்சாற்றில் அரைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Rasam with Sengazhuneer  juice (<i>Nymphaea alba</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span></p><table><tr><th>இரசத்துடன் மசிக்க வேண்டிய சரக்கு</th><th>மசிப்பதன் பயன்</th></tr><tr><td>1. அழிஞ்சில் பட்டைச்சாறு, மாதுளைச்சாறு</td><td>இரசத்திலுள்ள விடம் போகும்</td></tr><tr><td>2. கொடிவேலிப்பட்டைச் சூரணம்</td><td>இரசத்திலுள்ள தோஷம் போகும்</td></tr><tr><td>3. கொன்றை வேர்ப்பட்டைச் சூரணம்</td><td>இரசத்திலுள்ள வேகம் தீரும்</td></tr><tr><td>4. கற்றாழை வேர் சூரணம்</td><td>இரசத்திலுள்ள ஏழு குறைகளும் தீரும்</td></tr></table><p>இவற்றில் ரசத்தை மசித்து சுத்தி செய்த பின்பு செங்கழுநீர்ச்சாறு, செங்கல் பொடி, கொன்றைப்பட்டை, கற்றாழைச்சாறு ஆகியவற்றில் முறையே மசிக்கவும். அதன் பின் வெள்ளைச்சீலையில் கொட்டிப் பிழிய இரசம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span></p><table><tr><th>Drugs to be grinded with Rasam</th><th>Benefits</th></tr><tr><td>1. Bark juice of Azhinjil (<i>Alangium salvifolium</i>) and Pomegranate juice</td><td>This removes the toxicity of Rasam.</td></tr><tr><td>2. Bark powder of Kodiveli (<i>Plumbago indica</i>)</td><td>This eliminates the side effects (Thodam) of Rasam.</td></tr><tr><td>3. Root bark powder of Kondrai (<i>Cassia fistula</i>)</td><td>This removes the vigor of Rasam.</td></tr><tr><td>4. Root powder of Aloe vera</td><td>This resolves the seven defects of Rasam.</td></tr></table><p>Grind the Rasam with the above tabled ingredients. Further, grind the Rasam with Sengazhuneer juice (<i>Nyphaea alba</i>), brick powder, bark of Kondrai (<i>Cassia fistula</i>), Aloe vera and squeeze it through a white cloth to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}, {
		  'tn': '<p><span class="list-style-v1"></span> இரசத்தைக் குழிக்கல்லில் இட்டு அழிஞ்சில் வேர்ப்பட்டைச் சாறு விட்டு ஒன்றரை மணி நேரம் மத்திக்கவும். திரிபலையிலுள்ள மூன்றையும் வெவ்வேறாய்ப் பொடி செய்து ஒவ்வொன்றிலும் 12 மணி நேரம் மத்திக்கவும். பின் கீழ்கண்டவற்றில் முறையே ஒவ்வொன்றிலும் மத்திக்க இரசம் சுத்தியாகும்.</p><table><tr><th>சரக்கின் பெயர்</th><th>இரசத்துடன் மத்திக்கும் நேரம்</th></tr><tr><td>1. கொன்றைவேர்ப் பட்டைச்சாறு</td><td>12 மணி நேரம்</td></tr><tr><td>2. சித்திரமூலவேர்ப் பொடி</td><td>12 மணி நேரம்</td></tr><tr><td>3. செங்கல் பொடி (ஒரு பிடி)</td><td>12 மணி நேரம்</td></tr><tr><td>4. சிறுகீரைச்சாறு</td><td>12 மணி நேரம்</td></tr><tr><td>5. கற்றாழைச்சாறு</td><td>12 மணி நேரம்</td></tr><tr><td>6. மஞ்சள் பொடி</td><td>12 மணி நேரம்</td></tr><tr><td>7. ஒட்டடை</td><td>12 மணி நேரம்</td></tr><tr><td>8. தேவதாரம் பூ</td><td>12 மணி நேரம்</td></tr><tr><td>9. சந்தனம்</td><td>12 மணி நேரம்</td></tr><tr><td>10. கையாந்தகரை</td><td>12 மணி நேரம்</td></tr><tr><td>11. கோவை இலை</td><td>12 மணி நேரம்</td></tr><tr><td>12. வெற்றிலை</td><td>12 மணி நேரம்</td></tr><tr><td>13. நிலப்பனை</td><td>12 மணி நேரம்</td></tr><tr><td>14. சாறுவேளை</td><td>12 மணி நேரம்</td></tr><tr><td>15. பூவரசம் பட்டை</td><td>12 மணி நேரம்</td></tr><tr><td>16. முருங்கை வேர்</td><td>12 மணி நேரம்</td></tr><tr><td>17. பாகலிலை</td><td>12 மணி நேரம்</td></tr><tr><td>18. மஞ்சணத்தி</td><td>12 மணி நேரம்</td></tr><tr><td>19. பூங்கொன்றை வேர்ப்பட்டை</td><td>12 மணி நேரம்</td></tr></table><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Rasam with root bark juice of Azhinjil (<i>Alangium salvifolium</i>) for 1 hour 30 minutes and also grind it with the powders of Kadukkai (<i>Terminalia chebula</i>), Nellikai (<i>Phyllanthus emblica</i>), Thandrikkai (<i>Terminalia bellirica</i>) separately for 12 hours. Then grind the Rasam with the below tabled ingredients to get the purified form.</p><table><tr><th>Gringing Drugs</th><th>Grinding Duration</th></tr><tr><td>1. Root bark juice of Kondrai (<i>Cassia fistula</i>)</td><td>12 hours</td></tr><tr><td>2. Root powder of Sithiramoolam (<i>Plumbago indica</i>)</td><td>12 hours</td></tr><tr><td>3. A handful of Brick powder</td><td>12 hours</td></tr><tr><td>4. Sirukeerai juice (<i>Amaranthus tricolor</i>)</td><td>12 hours</td></tr><tr><td>5. Aloe vera juice</td><td>12 hours</td></tr><tr><td>6. Turmeric powder (<i>Curcuma longa</i>)</td><td>12 hours</td></tr><tr><td>7. Spider web</td><td>12 hours</td></tr><tr><td>8. Flower of Devadaru (<i>Cedrus deodara</i>)</td><td>12 hours</td></tr><tr><td>9. Santhanam (<i>Santalum album</i>)</td><td>12 hours</td></tr><tr><td>10. Kaiyaandhakarai (<i>Eclipta prostrata</i>)</td><td>12 hours</td></tr><tr><td>11. Kovai leaf (<i>Coccinia grandis</i>)</td><td>12 hours</td></tr><tr><td>12. Betel leaf (<i>Piper betle</i>)</td><td>12 hours</td></tr><tr><td>13. Nilappanai (<i>Curculigo orchioides</i>)</td><td>12 hours</td></tr><tr><td>14. Chaaruvelai</td><td>12 hours</td></tr><tr><td>15. Bark of Poovarasu (<i>Thespesia populnea</i>)</td><td>12 hours</td></tr><tr><td>16.Root of Murungai (<i>Moringa oleifera</i>)</td><td>12 hours</td></tr><tr><td>17. Bitter guard leaf (<i>Momordica charantia</i>)</td><td>12 hours</td></tr><tr><td>18. Manjanaththi (<i>Morinda tinctoria</i>)</td><td>12 hours</td></tr><tr><td>19. Root bark of Poongondrai</td><td>12 hours.</td></tr></table><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'red_sulphide_of_mercury_rasa_chenduram': {
	    'tn': 'இரச செந்தூரம்',
	    'en': 'Red sulphide of mercury ',
		'nam': '(Rasa chenduram)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> இரச செந்தூரத்தைத் தாய்ப்பாலில் இருபத்து நான்கு மணி நேரம் ஊற வைத்துக் கழுவி, உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Rasa Chenduram in breast milk for 24 hours, rinse and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரச செந்தூரத்தை எலுமிச்சம் பழச்சாற்றில் இருபத்து நான்கு மணி நேரம் ஊற வைத்துக் கழுவி உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Rasa Chenduram in lemon juice for 24 hours, rinse and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India  </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரச செந்தூரத்தை வேப்பம்பட்டைக் குடிநீரில் பன்னிரெண்டு மணி நேரம் அரைத்து உலர்த்தி பொடியாக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Rasa Chenduram in bark decoction of Neem (<i>Azadirachta indica</i>) for 12 hours, then dry and powder it to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரச செந்தூரத்தைத் தாய்ப்பாலில் அரை நாள் ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Rasa Chenduram in breast milk for half a day to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இரச செந்தூரத்தைச் சிறு சிறு துண்டுகளாக உடைத்து, தாய்ப்பாலில் ஒரு நாளும், எலுமிச்சம் பழச்சாற்றில் ஒரு நாளும் ஊறப்போட்டுப் பின்பு கழுவி உலர்த்தி எடுக்க சுத்தியாகும். தாய்ப்பாலுக்குப் பதிலாகப் பசுப்பாலும் உபயோகிக்கலாம்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the broken pieces of Rasa Chenduram in breast milk and lemon juice separately for one day, then rinse and dry it. Instead of breast milk, cow\'s milk can be used to purify it.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		}]
	  },
	  'cinnabar_lingam': {
	    'tn': 'இலிங்கம்',
	    'en': 'Cinnabar',
		'nam': '(Lingam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தாய்ப்பாலிலும், எலுமிச்சம் பழச்சாற்றிலும் முறையே ஒவ்வொரு நாள் இலிங்கத்தை ஊற வைத்துக் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Lingam in breast milk and lemon juice separately for one day and rinse it off with water to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பசும்பால், பழச்சாறு, குப்பைமேனிச்சாறு இவைகளைச் சமனாய்க் கூட்டி இலிங்கத்தை சுருக்கிட்டு எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Prepare a liquid concoction of cow\'s milk, lemon juice and leaf juice of Kuppaimeni (<i>Acalypha indica</i>). Burn the Lingam by adding small quantity of this liquid concoction periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 1 வீசை (1400 கிராம்) அழிஞ்சில் பட்டையை 4 படி (5.2 லிட்டர்) புளித்த காடியில் போட்டு இரவு பனியில் வைத்து, மறுநாள் காலை நன்றாய்ப் பிசைந்து கலக்கி, அதில் 35 கிராம் இலிங்கத்தைச் சீலையில் கட்டியிட்டு, மேல்சட்டி மூடி சீலைமண் செய்து உலர்த்திக் கொள்ளவும். பிறகு பனியில் வைத்தெடுத்து அடுப்பேற்றி, விளக்கு போல நீர் வற்றும்படி 8 சாமம் எரித்து எடுத்து துடைத்து, முன் போலவே புளி கருணைச் (புளிநரளை) சமூலம் கலந்த காடிநீர், நன்னாரி வேர் கலந்த காடிநீர் இவ்விரண்டிலும் தனித்தனியாய் எரித்தெடுக்க இலிங்கம் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Take 1400 grams (1 Veesai) of Azhinjil bark (<i>Alangium salvifolium</i>), drop it in 5.2 liters (4 Padi) of Vinegar (Kaadi) and place this in dew for a night. On the next day, knead it and add 35 grams of Lingam bundled in a cloth, cover it with an earthen lid and lute it. Again place this in dew and later burn this with Deepam like flame  (Flame of a lamp) for 24 hours (8 Saamam) to evaporate the water content. Then wipe the Lingam and perform the above mentioned process with mixture of Pulikarunnai sammolam (<i>Vitis lanata</i>) &Vinegar (Kaadi) and mixtur of Nannaari root (<i>Hemidesmus indicus</i>) & Vinegar (Kaadi) separately to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தாய்ப்பாலில் இலிங்கத்தை அரை நாள் ஊற வைத்துப் பாலை நீக்கி மீண்டும் புதிதாகப் பால்விட்டு முன்போல ஊற வைக்கவும். இது போல் மூன்று முறை செய்ய இலிங்கம் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Lingam in breast milk for half a day and discard the milk. Perform this process for three times with fresh milk on each day to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> இலிங்கம் முங்கக் கூடியளவு தேன் விட்டு ஒரு நாள் ஊறிய பின்னெடுத்து, பின்பு அமுதப்பாலில் (தாய்ப்பால்) இலிங்கம், முங்கவிட்டு ஒரு நாள் ஊற வைத்து எடுத்து எலுமிச்சம் பழச்சாறும், குப்பைமேனிச்சாறும், அமுதப்பாலும் மூன்றும் சமமாய்க் கலந்து வைத்து கொண்டு ஒரு சட்டியை அடுப்பேற்றிக் காய வைத்து, அந்த சட்டிக்குள் இலிங்கத்தை வைத்துப் புகையாமல் கலந்து வைத்த சாற்றைச் சுருக்குக் கொடுத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Immerse the Lingam in honey and soak it for one day. Then, soak it in breast milk for another day. Prepare a liquid concoction with equal quantities of lemon juice, breast milk and Kuppaimeni juice (<i>Acalypha indica</i>). Place the soaked Lingam in a heated earthen vessel and burn it by adding small quantity of this liquid concoction periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> இலிங்கத்தைச் சிறு, சிறு துண்டுகளாக உடைத்து, போதுமான அளவு எலுமிச்சம்பழச்சாறு, குப்பைமேனிச்சாறு, தாய்ப்பால் ஆகியவை சேர்ந்த கலவையில் இட்டு அடுப்பில் ஏற்றி, கலவை முற்றும் வற்றும் வரை எரித்துச் சுண்டக் காய்ச்சி எடுத்து, கழுவி உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p><span class="list-style-v1"></span>Burn the small pieces of Lingam in a liquid concoction made out of lemon juice, breast milk and leaf juice of Kuppaimeni (<i>Acalypha indica</i>) until all the liquid content gets evaporated. Then rinse and dry it to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> தாய்ப்பாலில் பன்னிரெண்டு மணி நேரம் ஊற வைக்க இலிங்கம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Lingam in breast milk for 12 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாதிலிங்கம் எலுமிச்சம் பழச்சாற்றில் இரண்டு மணி நேரம் ஊற சுத்தியாகும். எருமைப்பாலில் கழுவி உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Lingam in lemon juice for 2 hours to get the purified form (Or) Rinse the Lingam with buffalo\'s milk and dry it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாதிலிங்கத்தைக் கொம்மட்டிக்காய் சாற்றிலும், மாதளங்காய் சாற்றிலும் ஊற வைத்துக் கழுவி உலர்த்தினால் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Lingam in juices of Kummatikkai (<i>Citrullus colcocynthis</i>) and Maadhalankai (<i>Punica granatum</i>), rinse it and dry to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாதிலிங்கத்தைத் தாய்ப்பால் அல்லது எலுமிச்சம் பழச்சாற்றில் அரைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Lingam with lemon juice or breast milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span>சாதிலிங்கத்துக்குப் பழச்சாறும், பருத்திப்பாலும், குப்பைமேனிச்சாறும் சேர்த்துச் சுருக்கிடச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span>Prepare a liquid concoction of lemon juice, Paruthipaal (<i>Gossypium hirsutum</i>) and Kuppaimeni juice (<i>Acalypha indica</i>).Then burn the Lingam by adding small quantity of this liquid concoction periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சாதிலிங்கத்தை எலுமிச்சம் பழச்சாற்றில் போட்டு ஒன்பது மணி நேரம் எரியிட்டு பின் வெள்ளாட்டுக் கோமியத்தில் போட்டு ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the Lingam in lemon juice for 9 hours, then soak it in goat\'s urine to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சுண்ணநீர், பூசணிக்காய் நீர், ஆவின் பால், எலுமிச்சம் பழக்குடிநீர் ஆகியவற்றில் அவிக்க சாதிலிங்கம் சுத்தியாகும். இதனை நொறுக்கி எலுமிச்சம் பழச்சாறு அல்லது தாய்ப்பாலில் மூன்று நாள் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Lingam in limestone water, pumpkin juice, cow\'s milk and decoction of lemon to get the purified form. (Or) Soak the Lingam in lemon juice or breast milk for three days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<span class="list-style-v1"></span><table><tr><th>சாறு</th><th>அளவு</th></tr><tr><td>1. முசுமுசுக்கை சமூலச்சாறு</td><td>650 மி.லி</td></tr><tr><td>2. உத்தாமணி சமூலச்சாறு</td><td>650 மி.லி</td></tr></table> <p>ஒரே கட்டியாய் இருக்கிற 35 கிராம் இலிங்கத்தை அப்பிரகத் தகட்டின் மீது வைத்து, தனித்தனியே மேற்கூறப்பட்ட சாற்றால் சுருக்கிட்டுக் கொள்ள இலிங்கம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<table><tr><th>Juice</th><th>Quantity</th></tr><tr><td>1. Musumusukkai samoola juice (Mukia maderaspatana)</td><td>650 ml</td></tr><tr><td>2. Uththaamani samoola juice (Pergularia daemia)</td><td>650 ml</td></tr></table><p><span class="list-style-v1"></span>Place 35 g of Lingam bar on a Mica plate and burn it by adding small quantity of the above tabled juices separately at regular intervals (Surukku koduthal process) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'hydragyrum_subchloride_pooram': {
	    'tn': 'பூரம்',
	    'en': 'Hydragyrum subchloride',
		'nam': '(Pooram)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கம்மாறு வெற்றிலை, மிளகு இவ்விரண்டும் 10 கிராம் வீதம் எடுத்து நீர் விட்டரைத்து, 1.3 லிட்டர் நீரில் கலந்து பூரத்தை சீலையில் முடிந்து தோலாயந்திரமாய் நீரில் அமிழும்படி செய்து, சிறுதீயாக எரிக்கவும். நீர் முக்கால் பாகம் சுண்டிய பிறகு பூரத்தை நீர் விட்டுக் கழுவி உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind 10 grams of betel leaf (<i>Piper betle</i>) and pepper (<i>Piper nigrum</i>) into a paste and dissolve this paste in 1.3 litres of water to make a liquid mixture. Bundle the Pooram in a cloth and immerse it in this liquid mixture by hanging it as Tholaayandhiram. Burn it until the three fourth of liquid portion gets reduced. Rinse and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் பூரத்திற்குத் தாய்ப்பாலினால் மூன்று மணி நேரம் சுருக்குக் கொடுத்துப் பிறகு வெள்ளைப்பூண்டுத் தைலத்தினால் ஒன்பது மணி நேரம் சுருக்கிட்டு எடுத்துக் கொள்ளவும்.</p><p><b>குறிப்பு:</b> இலேகியங்களில் சேர்க்க வேண்டிய பூரத்தை முசுமுசுக்கைச் சாற்றினால் சுருக்கிட்டுக் கழுவவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn 35 grams of Pooram by adding small quantity of breast milk periodically (Surukku Koduthal process) for 3 hours. Then burn it by adding small quantity of Poondu thailam periodically for 9 hours to get the purified form.</p><p><b>Note:</b> Burn the Pooram by adding small quantity of Musumusukkai juice (<i>Mukia maderaspatana</i>) periodically (Surukku koduthal process) and rinse it with water for its usage in Legiyam preparation.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வெற்றிலை, மிளகு இவற்றை அரைப்படி தண்ணீர் விட்டுக் குடிநீராக்கி, அதில் மூன்று நாட்கள் பூரத்தைக் கிழியாய்க் கட்டி ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Prepare a decoction out of betel leaf  (<i>Piper betle</i>) and pepper (<i>Piper nigrum</i>) by adding 650 ml of water. Bundle the Pooram in a cloth and allow it to soak in the above decoction for 3 days to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		}]
	  },
	  'hydragyrum_perchloride_veeram': {
	    'tn': 'சவ்வீரம்',
	    'en': 'Hydragyrum perchloride',
		'nam': '(Veeram)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> இளநீரில் சிறிது சூடனைக் கலந்து, ஒரு பானையிலிட்டு வீரத்தை தோலாயந்திரமாக நீரில் படாமல் அரை மணி நேரம் எரித்தெடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Take tender coconut water in an earthen pot and dissolve the camphor in it. Bundle the Veeram in a cloth and hang it in the above pot as Tholaayandhiram without reaching the liquid surface. Burn it for half an hour to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> பாகற்காயைப் பிளந்து நடுவில் சவ்வீரக்கட்டியை வைத்துக் கயிற்றால் கட்டி, தோலாயந்திரமாய் நீரில் முழுகாமல் இளநீர் அல்லது பழச்சாற்றில் ஒரு மணி நேரம் எரித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Take tender coconut water or lemon juice in an earthen pot. Stuff the Veeram inside the bitter gourd (<i>Momordica charantia</i>), tie it with a rope and hang it in the above pot as Tholaayandhiram without reaching the liquid surface. Burn it for 1 hour to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சவ்வீரத்தை ஒரு பீங்கானிலிட்டு அது மூழ்கும்படி முலைப்பால் (தாய்ப்பால்) அல்லது பசும்பால் விட்டு பால் முழுவதும் சுண்டும் வரை வெயிலில் வைத்து உலர்த்தி எடுத்துக் கொள்ளலாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Take the Veeram in a porcelain dish and add breast milk or cow\'s milk until it immerses. Insolate it until all the milk evaporates to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> படிகாரம் 35 கிராம், சூடன் 35 கிராம் இரண்டையும் பொடித்து வைத்துக் கொண்டு வீரக்கட்டிக்குச் சிறிது சிறிதாய் கிராசம் கொடுக்க வேண்டும். கிராசம் கொடுக்கும் போது வீரம் புகையா வண்ணம் பார்த்துக் கொள்ள வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix 35 g powders of Alum and camphor and heat the Veeram by sprinkling this mixture slowly (Kiraasam procedure) to Veeram to get the purified form.</p><p class="nubi"> Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் வீரக்கட்டிக்கு மிளகுக் குடிநீர் விட்டு ஆறு மணி நேரம் சுருக்குக் கொடுத்துப் பிறகு மிளகு கற்கத்திற்குள் வைத்து, ஒரு பாண்டத்தில் அரைப்படி (650 கிராம்) கறியுப்புடன் 35 கிராம் சூடனைக் கலந்து, அதற்குள் மேற்படி வீரத்தைப் புதைத்துச் சில மணி நேரம் சிறுதீயால் எரித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn 35 g of Veeram bar by adding small quantity of Pepper decoction (<i>Piper nigrum</i>) periodically for 6 hours (Surukku Koduthal process). Afterwards, stuff it inside the pepper paste (<i>Piper nigrum</i>) and place it in a pot containing the mixture of  650 grams ( ½ Padi) of Common salt and 35 grams of Camphor. Burn this for few hours to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> வீரம் எடைக்கு, 3 பங்கு மிளகைக் கஞ்சி விட்டு மெழுகுப்பதமாக அரைத்து, வீரத்துக்கு அங்கிபூட்டித் துணியில் முடிந்து இளநீரில் அழுந்தாமல் தோலாந்திரமாகக் கட்டி ஒன்றரை மணி நேரம் எரிக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Make pepper (3 parts) (<i>Piper nigrum</i>) into a paste with porridge. Stuff the Veeram (1 part) into this paste and tie it with a cloth. Take tender coconut water in a pot and hang the stuffed Veeram in it as Tholaayandhiram without reaching the liquid surface. Burn it for 1 hour 30 minutes to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சவ்வீரத்தை எருக்கம் பாலில் மூன்று நாட்கள் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Veeram in latex of Erukuku (<i>Calotropis gigantea</i>) for three days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> சவ்வீரத்தைத் தோலாயந்திரமாகக் கட்டி இளநீரில் அழுந்தாமல் அவித்துப் போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Veeram in a cloth and burn it in a pot containing tender coconut water by hanging it as Tholaayandhiram without reaching the liquid surface to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		}]
	  },
	  'general_purification1': {
	    'tn': 'பொது சுத்தி',
	    'en': '',
		'nam': 'GENERAL PURIFICATION',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பாடாணத்தை எருமைச் சாணத்தில் வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Paadaanam in buffalo’s dung to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பாடாணத்தைப் பசுவின் பாலில் முக்கால் மணி நேரம் வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Paadaanam in cow’s milk for 45 minutes to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பாடாணத்தைச் சிறுகீரையில் வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Paadaanam in Sirukeerai (<i>Amaranthus tricolor</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பாடாணத்தை எலுமிச்சம் பழத்தின் உள்ளே அடைத்து ஒரு புடம் போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Stuff the Paadaanam in lemon and incinerate it once to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  '64_paadanam': {
	    'tn': '64 பாடாணங்கள்',
	    'en': '',
		'nam': '64 PAADAANAM',
		'data': [{
		  'tn': '<p>1.</p><table><tr><th>திரவப்பொருள்கள்</th><th>அளவு</th></tr><tr><td>1. குப்பைமேனிச்சாறு</td><td>1 படி</td></tr><tr><td>2. வெற்றிலைச்சாறு</td><td>1 படி</td></tr><tr><td>3. செம்பருத்திச்சாறு</td><td>1 படி</td></tr><tr><td>4. எலுமிச்சம்பழச்சாறு</td><td>1 படி</td></tr><tr><td>5. சோற்றுக்கற்றாழைச்சாறு</td><td>1 படி</td></tr><tr><td>6. சிற்றமுரி</td><td>1 படி</td></tr><tr><td>7. அமுதப்பால்</td><td>¼ படி</td></tr></table><p> மேற்சொன்னவற்றை ஒன்றாகக் கலந்து, அதனுடன் படிகாரம், பாறையுப்பு, வெடிக்காரம், நவாச்சாரம் (வகைக்குப் கால் பலம்) ஆகியவற்றின் தூள் கலந்து, பாடாணத்தைக் கிழிகட்டி, காற்றில்லாத நிழலில் பதினைந்து நாள் வைத்தெடுத்து, பின் காடியில் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p>1.</p><table><tr><th>Liquids</th><th>Quantity</th></tr><tr><td>1. Kuppaimeni juice (<i>Acalypha indica</i>)</td><td>1  Padi  (1.3 liters)</td></tr><tr><td>2. Betel leaf juice (<i>Piper betle</i>)</td><td>1 Padi (1.3 liters)</td></tr><tr><td>3. Sembaruththi juice (<i>Gossypium arboreum</i>)</td><td>1 Padi (1.3 liters)</td></tr><tr><td>4. Lemon juice</td><td>1 Padi (1.3 liters)</td></tr><tr><td>5. Aloe vera juice</td><td>1 Padi (1.3 liters)</td></tr><tr><td>6. Child’s urine</td><td>1 Padi (1.3 liters)</td></tr><tr><td>7. Breast milk</td><td>¼ Padi (325 ml)</td></tr></table><p>Mix the above liquids together and add powders of Alum, Paaraiyuppu, Potassium nitrate (Vedikaaram), Navatchaaram each 8.75 g (¼  balam) to it. Hang the Paadaanam as Tholayandhiram into this liquid concoction for 15 days. Then soak it in vinegar (Kaadi) and rinse it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பாடாணத்தைக் குப்பைமேனி, தக்காளி, ஊமத்தை ஆகியவற்றின் சாறு, எலுமிச்சம் பழச்சாறும், சிறுநீரும், புளித்த காடியும் சமனாய்ச் சேர்த்து வெடியுப்பு, உப்புச்சுண்ணம், சீனம், நவச்சாரமும் வகைக்கு கால் பலம் எடுத்து, தூள் செய்து மேற்கண்ட சாற்றில் சேர்த்துப் பாடாணத்தைக் கிழியாய்க் கட்டி, ஒரு மண்டலம் கழித்து எடுத்து உலர்த்த நல்ல சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span>  Take and mix equal parts of juices of Kuppaimeni (<i>Acalypha indica</i>), Tomato (<i>Physalis minima</i>), Oomaththai (<i>Datura metal</i>), lemon juice, Urine and Vinegar (Kaadi) and add 8.75 g each of Potassium nitrate (Vediyuppu), Uppu chunnam , Alum (Seenam), Ammonium chloride (Navatchaaram) to it. Hang the Paadaanam as Tholayandhiram into this liquid concoction for 48 days (1 Mandalam). Dry it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  }]
	  },
	  'navapaadanam': {
	    'tn': 'நவபாடாணம்',
	    'en': '',
		'nam': 'NAVAPAADAANAM',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் பாடாணத்தைப் பொடித்து, சற்று தளர்ச்சியாய் முரட்டுத் துணியில் முடிந்து கொண்டு 35 கிராம் மிளகை நீர் விட்டு அரைத்து 1.3 லிட்டர் சிறுகீரைச் சாற்றில் கரைத்து, மட்பாண்டத்திலிட்டு அதில் பாடாண முடிப்பைக் கிழிகட்டிப் பாண்டத்தின் அடியிற்படாமல் தொங்கவிட்டு, அடுப்பேற்றிச் சிறுதீயாக எரித்து, சாறு சுண்டியவுடன் இறக்கி, நீர் விட்டுப் பாடாணத்தைக் கழுவி எடுத்துக் கொள்ளவும். இவ்வாறு மூன்று முறை செய்ய சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle 35 g of Navapaadaanam powder and burn it in mixture of Pepper (35g) paste and Sirukeerai juice (<i>Amaranthus tricolor</i>) (1.3 liters) without being immersed. Allow the liquid to get reduced and rinse it off with water. Perform this process thrice to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> 1 பலம் (35 கிராம்) பாடாணத்தைக் கல்வத்திலிட்டுப் பொடித்து, எலுமிச்சம் பழச்சாறு 3 பலம் (105 கிராம்) விட்டு அரைத்துச் சிறுவில்லைகளாய்ச் செய்து, உலர்த்திக் கொள்ள வேண்டும். இவ்வாறு ஏழு முறை செய்யவும். (அரைப்புப் புட சுத்தி)</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span>  Powder 35 g (1 balam) of Navapaadaanam and grind it with 105 ml (3 balam) of lemon juice. Make this into small pellets and dry it. Perform this process for 7 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> நவபாஷாணம் சுண்ணாம்பில் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Navapaadaanam gets purified in slaked lime.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'pancha_paadanam': {
	    'tn': 'பஞ்ச பாடாணம்',
	    'en': '',
		'nam': 'PANCHA PAADAANAM',
		'data': [{
		  'tn': '<p>பஞ்ச பாடாணத்திற்கு எலுமிச்சம் பழச்சாறு விட்டு அரைத்து, உருட்டிக் கொள்ளவும். அதை இரட்டை மடிப்புச் சீலையில் முடிந்து, சுண்ணாம்புத் தண்ணீரில் தோலாயந்திரமாகக் கட்டவும். பின்பு ஆறு மணி நேரம் அரைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p>Grind the Panchapaadaanam with lemon juice and bundle it in two layered cloth. Keep it in lime stone solution as Tholayandhiram. Then grind this for 6 hours to get the purified form.</p><p class="nubi"> Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'anjanakkal': {
	    'tn': 'அஞ்சனக்கல்',
	    'en': '',
		'nam': 'ANJANAKKAL',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நீலாஞ்சனத்தைப் பொடித்து, எலுமிச்சம்பழச்சாறு விட்டு அரைத்து, ஒரு நாள் வெயிலில் வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Neelanjana powder with lemon juice and insolate it for one day to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> அஞ்சனக்கல்லைத் திரிபலைக்குடிநீர், கரிசாலைச்சாறு இவைகளில் வேக வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Anjanakkal in Tiripala decoction and juice of Karisaalai (<i>Eclipta prostrata</i>) separately and rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மாதுளம்பழச்சாற்றில் அஞ்சனக்கல்லை ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Anjanakkal in Pomegranate juice (<i>Punica granatum</i>) to get the purified form. </p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> அஞ்சனக்கல்லைப் புளியாரைச் சாற்றில் ஒரு நாள் ஊற வைத்து எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Anjanakkal in juice of Puliyaarai (<i>Oxalis corniculata</i>) for one day to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'ayathotti_paadanam': {
	    'tn': 'அயத்தொட்டி பாடாணம்',
	    'en': '',
		'nam': 'AYATHOTTI PAADAANAM',
		'data': [{
		  'tn': '<p>அயத்தொட்டியைப் பசும் பாலில் நான்கு சாமம் ஊற வைத்தெடுத்துப் பின்பு தேனிலும் நெய்யிலும் எட்டெட்டு நாட்கள் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Soak the Ayathotti paadaanam in cow’s milk for 12 hours (4 Saamam). Then soak it separately in honey and ghee for 8 days to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}]
	  },
	  'eli_paadanam': {
	    'tn': 'எலிப்பாடாணம்',
	    'en': '',
		'nam': 'ELI PAADAANAM',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> எலிப்பாடாணத்தைப் பொடி செய்து, சீலையில் பொட்டணங்கட்டி, சுண்ணாம்புத் தண்ணீரில் ஆறு மணி நேரம் தோலாயந்திரமாக எரித்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Eli paadaanam powder and burn it in lime stone water for 6 hours by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சிறுகீரைச்சாறு, ஆவின்பால், கொள்ளுக்குடிநீர் இவற்றை மண் பாத்திரத்தில் ஊற்றி அதில் எலிப்பாடாணத்தைத் தோலாயந்திரமாகக் கட்டி எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Eli paadaanam in liquid concoction of Sirukeerai juice (<i>Amaranthus tricolor</i>), cow’s milk and horse gram decoction (<i>Macrotyloma uniflorum</i>) by hanging it as Tholayandhiram in a pot to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> எலிப்பாடாணத்தைத் தேனிலே மூன்று மணி நேரம் வேக வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Eli paadaanam in honey for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கற்றாழைச்சாற்றில் மூன்று மணி நேரம் வேக வைக்க எலிப்பாடாணம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Eli paadaanam in Aloe vera juice for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  }, 
	  'kuthiraipal_paadanam': {
	    'tn': 'குதிரைப்பல் பாடாணம்',
	    'en': '',
		'nam': 'KUTHIRAIPAL PAADAANAM',
		'data': [{
		  'tn': '<p>உழமண்ணைக் கரைத்துச் சீலையில் நனைத்து, ஒரு பலம் குதிரைப்பல் பாஷாணத்தின் மேல் தேங்காய் பிரமாணத்திற்குக் கனமாகச் சுற்றி, ஒரு பெரிய பானையில் முக்கால் பாகம் ஜலம் விட்டுத் தோலாயந்திரமாக மூன்று சாமம் எரிக்கவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Dip a cloth strip in Uzhaman solution (Fuller’s earth sand), wrap it around the Kuthiraipal paadaanam to a dense of coconut. Burn it by hanging it as Tholayandhiram in water for 9 hours (3 Saamam) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  }, 
	  'gowri_paadanam': {
		'tn': 'கந்தகம்',
		'en': 'Sulphur',
		'nam': '(Kandhagam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கந்தகத்தை ஒரு இரும்புக் கரண்டியிலிட்டுச் சிறிது பசு வெண்ணெய் இட்டு உருக்கிப் பசும்பாலில் சாய்க்கவும். இவ்விதம் 30 முறை செய்ய கந்தகம் சுத்தியாகும். ஒவ்வொரு முறையும் புதிய பாலையே உபயோகிக்க வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt the Kandhagam with cow’s butter in an iron ladle and pour it into cow’s milk. Perform this process for 30 times to get the purified form. Use fresh milk for each time.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மருதோன்றி இலைக் கற்கத்தைப் பசுவின் தயிரில் கலந்து, ஒரு சட்டியிலிட்டு, சீலையால் வேடுகட்டி, அதன் மேல் கந்தகத்தை வைத்து, மற்றொரு சட்டியால் மூடிச் சீலை செய்து, குழியில் மேற்சட்டியின் மேற்பக்கம் தெரியும்படி புதைக்கவும். இதன் மேல் வரட்டி அடுக்கிப் புடமிட, கந்தகம் உருகி, கீழிறங்கும். இதனை சேகரித்து கழுவி, உலர்த்தி, முன் போலவே ஆறு முறை செய்யவும்.</p><p><b>குறிப்பு: கந்தகம் சுத்தி செய்த பின் கந்தக மணம் தென்படக் கூடாது. கந்தக மணம் இல்லாமல் போகும் வரை சுத்தி செய்யப்பட வேண்டும்.</b></p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Mix leaf paste of Maruthondri (<i>Lawsonia inermis</i>) in cow’s curd and put it in an earthen pot. Cover the vessel’s mouth with a cloth, place the Kandhagam on that cloth and close it with a lid. Lute it, burry it in a pit with its upper surface being visible and incinerate it by piling cowdung cakes over it. Melted Kandhagam drains down. Collect and dry it. Repeat this process for 6 times to get the purified Kandhagam.</p><p><b>Note: Disappearance of Kandhagam odour indicates the well purified Kandhagam.</b></p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> புளியம் பழவோட்டைப் பற்றியிருக்கும் கசிவை ஊறவைத்திறுத்த நீர், காடி நீர், புளித்த மோர், காளான் சாறு இவைகளைத் தனித்தனி ஆறு பலமாக எடுத்துக் கலந்து, ஒரு சட்டியிலிட்டு, அச்சட்டிக்குச் சீலையினால் வேடுகட்டி அதன் மேல் ஒரு பலம் கந்தகத்தை வைத்து மேல்மூடி அடுப்பேற்றித் தீபாக்கினியாய் இரண்டு சாமம் எரிக்க மலினம் மேல் தங்கி கந்தகம் சுத்தியாகிக் கீழிறங்கும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Make liquid concoction with 6 balam (210 g) each of Tamarind fruit pod\'s extract, vinegar (Kaadi), sour butter milk and mushroom juice (<i>Agaricus campestris</i>) and take it in a vessel. Cover the vessel’s mouth with a cloth, place 1 balam (35 g) of Kandhagam on it and cover it with a lid. Burn this for 6 hours (2 Saamam) in Deepaakini (Flame of a lamp). Purified Kandhagam settles down and impurities float over the surface of liquid.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu  </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வாழைக்கட்டை நீரில் கந்தகத்தைப் பத்து முறை உருக்கி உருக்கிச் சாய்த்தெடுக்கச் சுத்தியாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Melt and pour the Kandhagam into Plantain juice (Vaazhai Kattai Neer) for 10 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சந்தனக்கியாழம், கோவையிலைச்சாறு, சோற்றுக்கற்றாழைச்சாறு, புளியாரைச்சாறு இவைகளில் ஒவ்வொன்றிலும் ஒவ்வொரு சாமம் கிழிகட்டி கந்தகத்தை எரிக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Kandhagam by hanging it as Tholayandhiram for 3 hours (1 Saamam) separately in decoction of Chandanam (<i>Santalum album</i>), leaf juice of Kovai (<i>Coccinia grandis</i>), Aloe vera juice, Juice of Puliyaarai (<i>Oxalis corniculata</i>) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பசும்பால் உள்ள சட்டியின் மேலே துணியால் வேடுகட்டி அந்தத் துணியின் மேலே கந்தகத்தைப் பரப்பி, அதன் மேல் கவுசட்டி போட்டு மூடி, புட்டு அவித்தது போல அடுப்பேற்றி அவிக்கக் கந்தகம் யாவும் உருகிப் பாலில் வீழும். இப்படி ஏழு தரம் செய்ய நல்ல சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Cover the mouth of a vessel containing cow’s milk with a cloth, place the Kandhagam on that cloth and close it with a lid. Heat to melt the Kandhagam so that it drains into the milk. Do this process for 7 times to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கந்தகத்தை ஆட்டுப்பாலிலே வேக வைத்துக் கழுவ சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Kandhagam in goat’s milk and rinse it off  to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கந்தகத்தை 2.6 லிட்டர் காட்டாமணக்குப் பாலில் மூன்று முறை காய்ச்ச சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Kandhagam in 2.6 liters of latex of Kaattamanakku (<i>Jatropha curcas</i>) thrice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> விளக்கெண்ணெயில் கந்தகத்தை உருக்கிச் சாய்க்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Melt the Kandhagam and pour it into Castor oil to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கந்தகத்தைப் பசுவின் நெய்யில் இட்டு உருக்கிப் பாலில் சாய்க்கவும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Melt the Kandhagam with cow’s ghee and pour it into milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கந்தகத்தைப் பொடியாக்கி, ஆமணக்கெண்ணெயில் போட்டு, கரைந்தவுடன் பசுவின் பாலில் ஊற்ற சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Put the Kandhagam powder in Castor oil and heat it to get dissolved. Pour this into the cow’s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கந்தகத்தைப் பொடியாக்கி, இரும்புச் சட்டியிலிட்டு, ஆமணக்கு எண்ணெய் விட்டு, முக்கால் மணி நேரம் இரண்டு விறகால் எரித்து, பசுவின் பால் காய்ச்சாமல் ஊற்ற சுத்தியாகும் அல்லது வெள்ளாட்டுப் பாலில் கந்தகத்தை வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Take the Kandhagam powder and Castor oil in an iron pan, burn it with two firewoods for 45 minutes and then pour it into raw cow’s milk to get the purified form (Or) Boil the Kandhagam in goat’s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கந்தகத்தை ஒரு இரும்புக் கரண்டியிலிட்டு, சிறிது பசு வெண்ணெய் விட்டு உருக்கிப் வாழைக்கட்டை நீரில் பத்து முறை உருக்கிச் சாய்த்தெடுக்கச் சுத்தியாகும். இம்முறையினால் கந்தகத்திலுள்ள எண்ணெய் நீங்குமென்றும் கூறுவர்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Melt the Kandhagam with cow’s butter in an iron ladle and pour it into Plantain juice (Vaazhai Kattai Neer). Perform this process for 10 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பசும்பால், புளித்தமோர், பசு நீர் இவற்றில் ஏதேனும் ஒன்றை எடுத்துக் கொள்ளவும். வாயகன்ற குடுவையுள் இவற்றுள் ஒன்றை ஊற்றி மேலே சீலைகட்டி தரைமட்டத்திற்குக் குடுவையைப் புதைத்து விட வேண்டும். கந்தகத்தைத் துணி மேலே வைத்து, சட்டி மூடி, சீலைமண் செய்து, ஓரிரு விரற்கடை அளவு எருவடுக்கி, புடமிடவும். ஆறின பிறகு எடுத்துக் கொள்ள கந்தகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Fill a pot with cow’s milk or sour butter milk or cow’s urine and cover its mouth with a cloth. Burry this pot with cloth alone being visible, place the Kandhagam on the cloth and close it with a lid. Lute it and incinerate it with cow dung cakes piled for about 1 or 2 digit unit. Take it after the heat subsides. </p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வாழைக்கிழங்குச்சாறும் பசும்பாலும் சம அளவாகக் கலந்து, ஒரு வாயகன்ற பானையிலிட்டு, சீலையால் வேடுகட்டி, அதன் மேல் கந்தகத்தை வைத்து, மற்றொரு சட்டியால் மூடிச் சீலை செய்து, குழியில் மேற்சட்டியின் மேற்பக்கம் தெரியும்படி புதைக்கவும். இதன் மேல் வரட்டி அடுக்கிப் புடமிட, கந்தகம் உருகி கீழிறங்கும். இதனை சேகரித்து கழுவி, உலர்த்தி, முன்போலவே ஆறு முறை செய்யவும்.</p><p><b>குறிப்பு: இவ்வாறு கந்தகத்தின் மணம் நீங்கும் வரை திரும்பத் திரும்பச் செய்யவும். சாம்பல் மொந்தன் வாழைக்கிழங்கு இதற்குச் சிறந்தது.</b></p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
			'en': '<p><span class="list-style-v1"></span>  Take the mixture of Plantain rhizome juice and cow’s milk in a wide mouthed pot, cover its mouth with a cloth and place the Kandhagam on that cloth. Close it with a lid, lute it and burry it with its upper surface being visible. Incinerate it by piling cow dung cakes over it. Repeat this process for 6 times to get the purified form.</p><p><b>Note: Perform this process until the odour of Kandhagam disappears. It is best to use rhizome of Saambal Mondhan plantain.</b> </p><p class="nubi">Siddha Pharmacopoeia - Jaffna </p>',
		}]
	  },
	  'mirutharsingi': {
		'tn': 'கௌரி பாடாணம்',
		'en': '',
		'nam': 'Gowri paadanam',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்தை அவுரியிலைச்சாறு, பாகற்காய்ச்சாறு இவை ஒவ்வொன்றிலும் மூன்று நாட்கள் ஊற வைத்து எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Keep the Gowri paadaanam soaked separately in leaf juice of Avuri (<i>Indigofera tinctoria</i>) and bitter guard juice (<i>Momordica charantina</i>)  for 3 days. Rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் கௌரி பாடாணத்தைத் தாய்ப்பாலில் மூன்று நாள் ஊற வைத்தெடுத்து, அகலிலிட்டு அடுப்பேற்றி, கொட்டைக்கரந்தைச் சாற்றால் ஆறு மணி நேரம் சுருக்குக் கொடுத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span>  Soak 35 g of Gowri paadaanam in breast milk for 3 days and burn it by adding small quantity of Kottaikarandhai juice (<i>Spaeranthus indius</i>) periodically for 6 hours (Surukku koduthal process) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்திற்குப் பன்றி நெய்யால் மூன்று மணி நேரம் சுருக்குக் கொடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Gowri paadaanam by adding small quantity of pig’s ghee periodically (Surukku koduthal process) for 3 hours to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணக் கட்டிக்குப் பிரமதண்டிப்பால் விட்டுச் சுருக்குக் கொடுத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Gowri paadaanam by adding small quantity of the latex of Brahmathandu (<i>Argemone mexicana</i>) periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> 1.3 லிட்டர் அமுரியில் 650 மி.லி எலுமிச்சம்பழச்சாறு கலந்து கொள்க. அதில் வெடியுப்பு, படிகாரம், சோற்றுப்பு இவற்றை வகைக்கு 35 கிராம் வீதம் கூட்டி, 175 கிராம் கௌரி பாடாணத்துக்குச் சுருக்குக் கொடுத்து, (எடை குறையாமல் பார்த்துக் கொள்ளவும்) பிறகு வெடியுப்பு, படிகாரம், சோற்றுப்பு இவற்றை வகைக்கு 35 கிராம் எடுத்து அமுரி, பழரசம் கலந்த நீரால் அரைத்து கௌரி பாடாணக்கட்டிக்குக் கவசம் கட்ட வேண்டும். கரி நெருப்பிட்ட கொம்முட்டி அடுப்பின் மீது அனலிட்டு, அதன் மீது கவசித்த கௌரி பாடாணத்தை வைத்து, வறட்டி புகையாமல் கவசம் வறண்ட பின் எடுத்து கவசத்தைச் சுத்த துணியால் துடைத்து, தாய்ப்பாலில் ஊற வைத்துக் கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Mix 35 g each of Vediyuppu (Pottasium nitrate), Padikaaram (Alum) and Sottruppu (Common salt) in mixture of human’s urine (1.3 liters) and lemon juice (650 ml). Burn the Gowri paadaanam by adding small quantity of this mixture periodically (Surukku koduthal process). Then grind 35 g each of Vediyuppu, Padikaaram and Sotruppu with the liquid concoction of human’s urine and lemon juice into a paste. Daub this paste over Gowri paadaanam, place it in charcoal ember and keep cow dung cakes over it. After cow dung cakes get dried on mild heating, take and wipe Gowri paadaanam with clean cloth, soak in breast milk and rinse it off to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span></p><div class="table-responsive"><table><tbody><tr><td>1. காடி</td><td>2. எலுமிச்சம் பழச்சாறு</td></tr><tr><td>3. புளிமாங்காய்ச்சாறு</td><td>4. புளியம் பிஞ்சுச்சாறு</td></tr><tr><td>5. புளியிலைச்சாறு</td><td>6. புளிச்சக்கீரைச்சாறு</td></tr><tr><td>7. புளியாரைச்சாறு</td><td>8. தமரத்தங்காய்ச்சாறு</td></tr></tbody></table></div><p>கௌரி பாடாணத்தைப் பட்டுத் துணியில் முடிந்து, ஓட்டிலிட்டு அடுப்பேற்றி, சிறுதீயால் எரித்து, அதற்கு மேல்கண்டவற்றுள் ஏதாவது மூன்று சாறுகளினால் சுருக்குக் கொடுக்க சுத்தியாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span></p><table><tbody><tr><td>1. Vinegar (Kaadi)</td><td>2. Lemon juice</td></tr><tr><td>3. Unripe Mango juice (<i>Mangifera indica</i>)</td><td>4. Tamarind fruit juice</td></tr><tr><td>5. Tamarind leaf juice</td><td>6. Juice of Pulicha Keerai (<i>Hibiscus cannabinus</i>)</td></tr><tr><td>7. Juice of Puliyaarai (<i>Oxalis corniculata</i>)</td><td>8. Unripe fruit juice of Thamarathai (<i>Averrhoa carambola</i>)</td></tr></tbody></table><p>Bundle the Gowri paadaanam in a silk cloth and burn it by adding small quantity of any three of the above juices periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்தைச் சிறுநீரில் மூன்று நாள் ஊறப்போட்டு எடுத்துச் சுத்த ஜலத்தில் அலம்பி உலர்த்த சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Gowri paadaanam in urine for 3 days and rinse it off with clean water to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>  பசும்பால் அல்லது சாணிப்பால், சுண்ணாம்பு நீர், மிளகுக் கியாழம் இந்த நான்கில் எதையாவது சட்டியிலிட்டு வெள்ளைக் கௌரியைத் தோலாயந்திரமாகக் கட்டி அடுப்பேற்றி ஒரு நாழிகை  எரித்து எடுத்துப் பிறகு பன்றிப் பாலில் கிழிகட்டி அவித்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Take cow’s milk or cow dung juice or lime stone solution or decoction of Pepper (<i>Piper nigrum</i>) in a pot and burn the Gowri paadaanam in this liquid by hanging it as Tholayandhiram for 24 minutes (1 Naazhigai). Then boil it in pig’s milk as Tholayandhiram to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்தைச் சாணத்தில் கழுவி எடுக்க சுத்தியாகும் அல்லது நெருப்பில் பொரிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Rinse the Gowri paadaanam with cow dung juice to get the purified form. (Or) Exsiccate it to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்தைப் பொடியாக்கி கரண்டியிலிட்டு நெய்விட்டு ஏழு கொதி வரும் வரை எரித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Take the Gowri paadaanam powder and ghee in a ladle and heat it to effervesce for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>கௌரி பாடாணத்தை எலுமிச்சம் பழச்சாறு வார்த்து, அரைத்துக் கொள்ளவும். அதனைத் தோலாயந்திரமாகக் கட்டி கற்சுண்ணாம்பு கரைத்த நீரில் மூன்று மணி நேரம் எரித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>Grind the Gowri paadaanam with lemon juice and bundle this in a cloth. Burn it as Tholayandhiram by hanging it into lime stone solution for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எருக்கம் பாலை நான்கு நாட்கள் கௌரி பாடாணத்தில் விட்டு அரைக்க கௌரி பாடாணம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Gowri paadaanam with latex of Erukku (<i>Calotropis gigantea</i>) for 4 days to get the purified form. </p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்தைப் பொடி செய்து, கரண்டியில் போட்டு தாய்ப்பால் விட்டு, அது சுண்டும் வரை எரிக்க கௌரி பாடாணம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Take the Gowri paadaanam powder and breast milk in a ladle and heat it till milk gets reduced.</p><p class="nubi">Sarakku Suththi Seimuraigal  </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கௌரி பாடாணத்தை நறுக்கி சீலையில் கட்டி, ஐந்து நாட்கள் பசும்பாலில் ஊற வைத்துப் பின்பு அரைக்கீரைச் சாற்றில் ஐந்து நாட்கள் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Gowri paadaanam bundle separately in cow’s milk and juice of Arai Keerai (<i>Amaranthus tristis</i>) for 5 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'mudithaaram': {
		'tn': 'தாளகம் (அரிதாரம்)',
		'en': 'Yellow Orpiment ',
		'nam': '(Thaalagam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தாளகத்தைச் சுண்ணாம்புக்கல்லின் இடையில் வைத்து, பனங்கள் அல்லது கழுதை நீரினால் 10 முறைக்கு குறையாமல் தாளித்து, கழுவி எடுக்க வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Keep the Thaalagam inside the limestone. Pour the Palm toddy or donkey’s urine over the limestone for 10 times and rinse it to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p>2.</p><table><tr><th>நீர்ப்பொருள்</th><th>அளவு</th></tr><tr><td>1. பசு நீர்</td><td>1.3 லிட்டர்</td></tr><tr><td>2. காடி</td><td>1.3 லிட்டர்</td></tr><tr><td>3. சுண்ணநீர்</td><td>1.3 லிட்டர்</td></tr><tr><td>4. பூசணிக்காய் நீர்</td><td>1.3 லிட்டர்</td></tr><tr><td>5. ஆவின் பால்</td><td>1.3 லிட்டர்</td></tr><tr><td>6. அரசம்பட்டைக் குடிநீர்</td><td>1.3 லிட்டர்</td></tr></table><p>35 கிராம் தாளகத்தைப் பணம் போல் வெட்டி, சீலையில் முடிந்து, மேற்சொன்ன நீர்ப்பொருள் ஒவ்வொன்றிலும் தனித்தனியாய் ஊற வைத்துப் பின் தோலாயந்திரமாக நீர் முக்கால் பாகம் சுண்டும் வரை அவிக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p>2.</p><table><tr><th>Liquids</th><th>Quantity</th></tr><tr><td>1. Cow’s urine</td><td>1.3 liter</td></tr><tr><td>2.Vinegar (Kaadi)</td><td>1.3 liter</td></tr><tr><td>3. Limestone water</td><td>1.3 liter</td></tr><tr><td>4. Pumpkin water</td><td>1.3 liter</td></tr><tr><td>5. Cow’s milk</td><td>1.3 liter</td></tr><tr><td>6. Bark decoction of Arasu (<i>Ficus religiosa</i>)</td><td>1.3 liter</td></tr></table><p>Bundle 35 g of Thaalagam pieces, soak it and burn it by hanging it as Tholayandhiram separately in the above tabled liquids until ¾ th of the liquid gets reduced.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தாளகத்தைச் சன்னமாக வெட்டி, இரட்டை மடிப்புச் சீலையில் கட்டிக் கோமூத்திரம், அரிசி கழுவிய நீர், புளித்த காடி இவைகளிலொன்றில் மூன்று நாட்கள் தோலாயந்திரமாய் கட்டி கமலாக்கினி கொண்டு எரித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Thaalagam in two folded cloth and burn it by hanging it as Tholayandhiram by Kamalaakini (Flame like a blossomed Lotus) in cow’s urine or rice washed filtrate or fermented vinegar (Sour Kaadi) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu  </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அமுரி 1.3 லிட்டர், கற்சுண்ணம், குப்பைமேனிச்சாறு, இவை வகைக்கு 325 மி.லி வீதம் எடுத்துக் கலந்து, அதில் தாளகத்தைக் கிழிகட்டி தோலாந்திரமாக எரிக்கவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Thaalagam bundle by hanging it as Tholayandhiram in liquid concoction of human’s urine (1.3 liters), limestone (325 g) and juice of Kuppaimeni (<i>Acalypha indica</i>) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தாளகத்தைச் சிறுதுண்டுகளாகச் செய்து, கற்சுண்ணத்தின் மத்தியில் வைத்து, பனங்கள் விட்டுத் தாளித்துக் குழம்பாக இருக்கும் பதத்தில் கலக்கி, ஒரு சாமம் எரித்தெடுக்க. இங்ஙனமே மும்முறை செய்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Keep the Thaalagam inside limestone, slake it with Palm’s toddy until it attains thick consistency and burn it for 3 hours (1 Saamam). Perform this process thrice to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தாளகத்தைச் நீத்தாத சுண்ணாம்புக்குள் வைத்து கழுதை மூத்திரம் விட்டு ஏழு முறை தாளித்து எடுத்துக் கொள்ள வேண்டும். பின்னர் சுண்ணநீர், கொள்ளுக்கியாழம், தயிர், பூசணிக்காய் நீர், காடி, அகத்திவிரைத் தைலம் இவற்றைக்கூட்டி இரண்டு சாமம் (ஆறு மணி நேரம்) சுருக்குக் கொடுத்து எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Keep the Thaalagam inside limestone and slake it with donkey’s urine for 7 times. Prepare a liquid concoction of limestone water, horse gram’s decoction (<i>Macrotyloma uniflorum</i>), curd, pumpkin water and oil extracted from Agathi seed (<i>Sesbania grandiflora</i>) and burn the Thaalagam by adding small quantity of this liquid concoction periodically (Surukku koduthal process) for 6 hours (2 Saamam) to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பாலில் கழுவ தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Rinse the Thaalagam with milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சதுரக்கள்ளிப்பாலில் நாற்பது நாட்கள் ஊற வைக்கத் தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thaalagam in latex of Sathurakalli (<i>Euphorbia antiquorum</i>) for 40 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சுண்ணாம்பு நீரில் தோலாயந்திரமாகக் கட்டி வேக வைத்தெடுக்க தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Thaalagam by hanging it as Tholayandhiram in limestone water to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்சுண்ணத்திலிட்டுக் கழுதை நீர் விட்டுத் தாளித்து எடுக்கத் தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Place the Thaalagam inside limestone and slake it with donkey’s urine to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>சுண்ணாம்புக்கல்லைக் குழியாகச் செய்து கொண்டு தாளகத்தைத் துணியில் முடிந்து, குழியில் வைத்து, தண்ணீர் விட்டால் வெந்துவிடும். அதை ஆற வைத்து எடுத்துக் கொள்ள தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>Slake the Thaalagam bundle in limestone with water and take it on cooling.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பசு மூத்திரத்தைப் பாத்திரத்தில் ஊற்றி, ஒன்றிரண்டாய் பொடித்த தாளகத்தைத் துணியில் முடிந்து, அதை மூத்திரத்தில் போட்டு மூன்று நாட்கள் இரு விறகால் எரிக்க தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Burn the Thaalagam powder bundle in cow’s urine for 3 days with two fire woods to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தாளகத்தைச் சீலையில் தோலாயந்திரமாகக் கட்டி, கற்றாழைச் சாற்றில் ஒரு நாள், ஆட்டு மூத்திரத்தில் ஒரு நாள், பூசணி நீரில் ஒரு நாள், காடியில் ஒரு நாள் வேகவைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Boil the Thaalagam bundle by hanging it as Tholayandhiram separately in Aloe vera juice, goat’s urine, Pumpkin water and vinegar (Kaadi) for one day to get the purified form. </p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தாளகத்தை வட்டமாக வெட்டி, சீலையை மடித்து அதில் முடிந்து, பசு கோமியத்தில் தோலாயந்திரமாகக் கட்டி எரிக்கவும். பின்னர் காடியில் போட்டு அவித்தெடுத்துக் கொள்ளவும். சுண்ணாம்புத் தண்ணீர், பூசணிக்காய் நீர்,ஆவின் பால், அரசம்பட்டைக்கியாழம் இவற்றிலும் தனித்தனியே அவித்து எடுத்துக் கொள்ள தாளகம் தூய்மையாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Burn the Thaalagam bundle in cow’s urine by hanging it as Tholayandhiram and boil it separately in vinegar (Kaadi), limestone water, pumpkin water, cow’s milk, bark decoction of Arasu (<i>Ficus religiosa</i>) to get the purified form. </p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தாளகத்தைச் சிறு சிறு துண்டுகளாகச் செய்து, அந்தத் துண்டுகளை மொந்தைக் குடுவையிலிட்டு, மேல்மூடும் ஓட்டில் மூன்று துவாரம் செய்து நெருப்பின் மேல் வைத்து, விசிற வேண்டும். அவ்வாறு விசிறும் பொழுது முதலில் கருப்புப் புகை வந்து, பின்பு சிகப்புப் புகை வரும்பொழுது எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Bottle the small pieces of Thaalagam and close it with a lid having 3 holes. Place this near the flame of fire and fan it. On fanning, black smoke appears first follwed by red smoke. Thus Thaalagam gets purified.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சாட்டரணை வேர், குக்கில் விதை, முருங்கை இலை ரசம் இவற்றை அரைத்து தாளகத்துக்குக் கவசம் செய்து இலகு புடமிட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Grind the root of Saattaranai (<i>Trianthema decandra</i>), Kukkil seed (<i>Shorea robusta</i>) and leaf juice of Murungai (<i>Moringa oleifera</i>) into a paste. Coat this paste over Thaalagam and subject it to Lagu pudam to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p>17. தாளகத்தை மடலாக உரித்து, இரட்டை மடிப்பு சீலையில் கட்டி, கோமூத்திரத்திலும் காடியிலும் மூன்று நாள் எரித்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p>17.  Bundle the Thaalagam in two folded cloth and burn it separately in cow’s urine and vinegar (Kaadi) for 3 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p>18. தாளகத்துக்குப் பத்திலொரு பாகம் வெண்காரம் பொரித்து பொடி செய்து, தாளகத்துடன் கலந்து புடவையை நான்காக மடித்து, அதிலே கலந்த தூளை வைத்துக் கட்டி, சட்டியிலே எலுமிச்சம் பழச்சாறு 1.3 லிட்டர் விட்டு, தோலாயந்திரத்தில் மூன்று மணி நேரம் ஊற வைக்கவும். பின்பு மூன்று மணி நேரம் பாகம் செய்து இறக்கி காடியில் ஒரு நாள், பூசணிக்காய்ச்சாற்றில் ஒரு நாள், செம்பை இலைச் சாற்றில் ஒரு நாள், சுண்ணாம்பில் ஒரு நாள், இப்படி எரிக்கவும். தேனிலே மூன்று மணி நேரம் எரிக்க தாளகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p>18.  Bundle the Thaalagam (10 part) and Venkaaram powder (1 part) in a four folded cloth, soak it in 1.3 liters of lemon juice by hanging it as Tholayandhiram for 3 hours and burn it for 3 hours. Then burn this in the following liquids to get the purified form.</p><table><tr><th>Substance</th><th>Quantity</th></tr><tr><td>1. Vinegar (Kaadi)</td><td>1 day</td></tr><tr><td>2. Pumpkin juice</td><td>1 day</td></tr><tr><td>3. Leaf juice of Sembai (<i>Sesbania sesban</i>)</td><td>1 day</td></tr><tr><td>4. Limestone</td><td>1 day</td></tr><tr><td>5. Honey</td><td>3 hours</td></tr></table><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p>19. பூசணிக்காய்ச் சாற்றைப் பானையில் ஊற்றி, பானையின் வாயைக் கட்டவும். தாளகத்தைத் தகடாகத் தட்டி, அதன் மேல் வைத்து மேலே மூடி, சீலை செய்து ஒன்பது மணி நேரம் எரித்தெடுக்க சுத்தியாகும். பின்பு அந்த தாளகத்தை எடுத்து நெருப்பின் மீது வைக்கவும். மீண்டும் அதை எடுத்து பூசணிச்சாறு உள்ள பானையில் தோலாயந்திரமாய்க் கட்டி புடம் போடவும். பின்பு அந்த தாளகத்தை எடுத்துக் கொள்ளுச்சாற்றில் போட்டு எரித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p>19.  Take Pumpkin juice in a pot, cover its mouth with a cloth and place the Thaalagam on the cloth. Close it with a lid, lute it and burn it for 9 hours. Grill it, incinerate it with Pumpkin juice by hanging it as Tholayandhiram and burn it in horse gram juice (<i>Macrotyloma uniflorum</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  }]
	  },
	  'red_orpiment_manosilai': {
		'tn': 'தொட்டிப்பாடாணம்',
		'en': '',
		'nam': 'Thotti paadanam',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தைச் சிறு துண்டுகளாக உடைத்து துணித்துண்டில் முடிந்து நெய்யில் வேக வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the small pieces of Thotti paadaanam in a cloth and boil it in ghee to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தைப் பசுநீரில் ஆறு மணி நேரம் கொதிக்க வைத்துப் பிறகு கற்றாழை நீரிலும், கரிசலாங்கண்ணிச் சாற்றிலும், தண்ணீர்விட்டான் கிழங்குச்சாற்றிலும் மேற்கூறியது போன்றே செய்ய சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Thotti paadaanam for 6 hours separately in cow’s urine, Aloe vera juice, juice of Karisalaanganni (<i>Eclipta prostrata</i>), juice of Thaneervittan (<i>Asparagus racemosus</i>) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தைப் பொடி செய்து, சீலையில் முடிந்து, கோநீரில் தோலாந்திரமாக நான்கு ஜாமமெரிக்க. இங்ஙனமே மும்முறை செய்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Thotti paadaanam powder in a cloth and burn it by hanging it as Tholayandhiram in cow’s urine for 12 hours (4 Saamam). Perform this process thrice to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தை அமுதப்பாலில் ஒரு தடவையும், வெள்ளாட்டுப்பாலில் ஒரு தடவையும், பத்து நாழிகை ஊற வைத்தெடுத்துத் துண்டு துண்டாய் நறுக்கிக் கிழிகட்டி, நெல்லுக்குள் வைத்து, அவித்து எடுத்துக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thotti paadaanam separately in breast milk and goat’s milk for 4 hours (10 Naazhigai). Bundle the small pieces of this Thotti paadaanam and steam it by hanging it as Tholayandhiram in paddy to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தைத் தாய்ப்பாலில் நான்கு மணி நேரமும், வெள்ளாட்டுப்பாலில் நான்கு மணி நேரமும் ஊற வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thotti paadaanam separately in breast milk and goat’s milk for 4 hours to get the purified form. </p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தைப் பொடி செய்து, சீலையில் கட்டி, பசு மூத்திரத்திலே மூன்று நாட்கள் தோலாயந்திரமாக எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Thotti paadaanam powder and boil it in cow’s urine by hanging it as Tholayandhiram for 3 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தை கோமியத்தில் தோலாயந்திரமாகக் கட்டி மூன்று மணி நேரம் வேக வைத்தெடுக்கச் சுத்தியாகும். கற்றாழைச்சாற்றில் வேக வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Thotti paadaanam in cow’s urine by hanging it as Tholayandhiram for 3 hours to get the purified form. It also gets purified on boiling with Aloe vera juice.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தை ஆவின் பாலில் பன்னிரெண்டு மணி நேரம் காய்ச்சிக் கொள்க. பின்னர் நெய்யும் தேனும் சரியளவாய்க் கூட்டி, எட்டு நாள் ஊற வைக்க வேண்டும். பின் கிழிகட்டி தோலாயந்திரமாகக் கட்டி சாணச்சாற்றில் காய்ச்ச தொட்டிப்பாடாணம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Thotti paadaanam in cow’s milk for 12 hours and soak this in mixture of equal amounts of ghee and honey for 8 days. Then boil it in cow dung juice by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தொட்டிப்பாடாணத்தை நறுக்கி கல்வத்திலிட்டு, சுத்தமான நெய்யும் தேனும் சம அளவு கூட்டி, எட்டு நாள் ஊற வைத்துக் கொள்ள வேண்டும். அதனை எடுத்துத் தோலாயந்திரமாகக் கட்டி சாணச்சாற்றில் காய்ச்சிக் கொள்ள தொட்டிப்பாடாணம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thotti paadaanam for 8 days in mixture of equal amounts of ghee and honey. Then burn it in cow dung juice by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  }]
	  },
	  'sulphur_kandhagam': {
		'tn': 'மனோசிலை',
		'en': 'Red Orpiment ',
		'nam': '(Manosilai)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> இஞ்சிச்சாறு, எலுமிச்சம் பழச்சாறு, பசுமோர், இவைகளில் ஒன்றை மனோசிலைக்கு விட்டு, 3 மணி நேரம் நன்றாக அரைத்து, உலர்த்தி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Manosilai in ginger juice or cow’s butter milk for 3 hours and dry it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் மனோசிலையைச் சிறுசிறு துண்டுகளாகச் செய்து 175 கிராம் புளித்த மோரைப் பீங்கான் பாத்திரத்தில் விட்டு, அதில் இந்தத் துண்டுகளைப் போட்டு வெயிலில் வைத்து கிளறிக் கொண்டிருக்க வேண்டும். மாலையில் எடுத்து நீர் விட்டுக் கழுவி, முன்னளவு புளித்த மோர் விட்டு, மறுநாள் வெயிலில் வைத்து, முன்போல செய்யவும். இவ்வாறு மூன்று முறை செய்ய சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Place 35 g of Manosilai pieces in a porcelain vessel containing sour butter milk and keep it in sunlight. Stir it and rinse it off with water at evening. Do this process thrice to get the purified form Manosilai.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> 175 கிராம் கொடிவேலி வேர்ப்பட்டையை 975 மி.லி நீரிலிட்டு, மூன்றில் ஒன்றாகக் காய்ச்சி, அதில் 35 கிராம் மனோசிலைத் துண்டுகளைக் குடிநீரில் படும்படி தோலாயந்திரமாய் நீர் சுண்டும் வரை எரிக்கவும். பிறகு ஒரு பாத்திரத்தில் 70 கிராம் ஆட்டுக்கொழுப்பையிட்டு, அதில் மனோசிலைத் துண்டுகளைத் துணியில் முடிந்து போட்டு, துணி கருகும் வரை வறுத்தெடுத்து, எண்ணெய்ப்பசை நீங்க துணியால் துடைத்துக் கொள்ள வேண்டும். இச்சுத்தி வைத்திய இரசவாத முறைகளுக்குப் பயன்படும்.</p><p><b>குறிப்பு:</b> குடிநீருக்குக் கொடிவேலிவேருக்குப் பதிலாகச் சிகப்பு அல்லது கருப்புக் கொடிவேலி பூவைப் பயன்படுத்தலாம். வெண்கொடிவேலியில் சுத்தி செய்யப் பட்ட மனோசிலை வைத்திய முறைகளுக்கு ஆவதுடன், இரசவாதத்தில் வெள்ளி செய்முறைகளுக்கும் ஆகும் என்று கூறப்பட்டுள்ளது. மனோசிலையைத் தாளக சுத்தி முறைகளில் எவ்வகையிலேனும் சுத்தி செய்து கொள்ளலாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Make decoction (⅓ rd) from 175 g of root bark of Kodiveli (<i>Plumbago sp.</i>) and 975 ml of water. Burn 35 g of Manosilai pieces in this decoction by immersing into it as Tholayandhiram till the water gets evaporated. Fry this Manosilai bundle in goat’s fat (70 g) till the cloth burns completely. Wipe it with a cloth to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p><p><b>Note: Flowers of red and black varieties of Plumbago can also be used for decoction instead of its root. Manosilai which is purified by Venkodiveli (<i>Plumbago zeylanica</i>) can be used in medicine as well as silver preparation in Alchemy. Manosilai can also get purified by the same process as confined to Thaalagam.<b></p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> 2 பலம் மனோசிலையைக் கிழிகட்டி பெண் வெள்ளாட்டு மூத்திரம் 1 ¼ படியில் தோலாந்திரமாய் நீர் சுண்டும் வரை எரித்துக் கழுவி எடுத்துக் கல்வத்திலிட்டு, வெள்ளாட்டுப் பித்துநீர் விட்டு அரைத்து, சிறு வில்லைகளாகச் செய்து, வெயிலில் உலர்த்தி கல்வத்திலிட்டு, முன் போலப் பித்துநீர் விட்டு அரைத்து, உலர்த்திக் கொள்ளவும். இவ்விதம் ஏழு முறை செய்ய சுத்தியாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle 70 g (2 balam) of Manosilai, burn it in 1.63 liters (1¼ Padi) of she-goat’s urine by hanging it as Tholayandhiram till the water gets evaporated and rinse it off. Grind this with goat’s bile juice, make it into small pellets and insolate it. Again grind these pellets with goat’s bile juice and dry it. Perform this process for 7 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மனோசிலையை காடி அல்லது வெள்ளாட்டின் சிறுநீரில் கிழிகட்டி எரித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Manosilai bundle in vinegar (Kaadi) or goat’s urine by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பசுவின் பாலில் மனோசிலை மூழ்கும் வரை ஊற வைக்க மனோசிலை சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Keep the Manosilai immersed in cow’s milk to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அத்தியிலைச்சாறு, சுக்குச்சாறு, கரிசலாங்கண்ணிச்சாறு இவைகளில் ஏழு தரம் நனைத்தெடுக்க மனோசிலை சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Dip the Manosilai separately in leaf juice of Athi (<i>Ficus racemosa</i>), dry ginger juice (Sukku) (<i>Zingiber officinale</i>) and juice of Karisalaanganni (<i>Eclipta prostrata</i>) for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மனோசிலையைப் பொட்டணங்கட்டி ½ லிட்டர் வெள்ளாட்டுக் கோமியத்தில் தோலாயந்திரமாகக் கட்டி எரிக்கவும். பொங்கினால் உருகிப் போகும். பொங்காமல் வேக வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Manosilai bundle in ½ liter of goat’s urine by hanging it as Tholayandhiram to get the purified form.</p><p><b>Note: Boiling is performed without allowing the liquid to effervesce as the effervescence leads to melting of Manosilai.</b></p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மனோசிலையைப் பசுமூத்திரத்திலாவது, காடியிலாவது தோலாயந்திரமாகக் கட்டி ஒன்பது மணி நேரம் எரித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Manosilai by hanging it as Tholayandhiram in cow’s urine or vinegar (Kaadi) for 9 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மெல்லிய சீலை மடித்து அந்தச் சீலையிலே மனோசிலையைப் பொட்டணமாகக் கட்டி, வெள்ளாட்டு மூத்திரத்திலே இருபத்தொரு மணி நேரம் வேக வைத்து, மீண்டும் ஆட்டு மூத்திரத்திலே தோலாயந்திரமாக மூன்று நாட்கள் எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Bundle the Manosilai in the cloth and boil it by hanging it as Tholayandhiram in goat’s urine for 21 hours. Then burn it in goat’s urine as Tholayandhiram for 3 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>மனோசிலையை ஈனாத (கன்றுபோடாத) கிடாரி சாணிக்குள்ளே வைத்துப் பொதிந்து, சீலைமண் செய்து, அனலில் வெதும்பும் புடமாய்ப் போட்டு எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>Stuff the Manosilai into the dung of Heifer, lute it and incinerate it (Anal vethumbum pudam) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  }]
	  },
	  'thotti_paadanam': {
		'tn': 'மிருதார்சிங்கி',
		'en': '',
		'nam': 'Mirutharsingi',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> மிருதார்சிங்கியை வெள்ளாட்டின் நீரில் காய்ச்சி எடுத்துப், பிறகு தாய்ப்பால் அல்லது பசும்பால், வெள்ளாட்டுப்பால் இவைகளில் முறையே 4 மணி நேரம் ஊற வைத்து எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Mirutharsingi in goat’s urine and soak it separately in breast milk or cow’s milk and goat’s milk for 4 hours to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளாட்டு நீரில் மிருதார்சிங்கியை ஒரு நாழிகை (24 நிமிடம்) கொதிக்க வைத்துக் காய வைக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Mirutharsingi in goat’s urine for 24 minutes (1 Naazhigai) and dry it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		  }]
	  },
	  'white_arsenic_vellai_paadaanam': {
		'tn': 'முடிதாரம்',
		'en': '',
		'nam': 'Mudithaaram',
		'data': [{
		  'tn': '<p>முடிதாரத்தை நாலு படி (5.2 லிட்டர்) பனங்கள்ளில் கிழிகட்டி அடுப்பேற்றி எரித்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p>Burn the Mudithaaram in 5.2 liters (4 Padi) of Palm toddy (Panam Kal) by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300  </p>',
		}]
	  },
	  'yellow_orpiment_thaalagam': {
		'tn': 'வெள்ளைப்பாடாணம்',
		'en': 'White Arsenic ',
		'nam': '(Vellai Paadaanam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வெள்ளைப் பாடாணத்தைப் பூசணிக்காய் சாற்றில் 6 மணி நேரம் தோலாயந்திரமாக நீரில் படாமல் எரித்து எடுத்துக் கொள்ளவும் அல்லது கற்சுண்ணாம்புக்குள் புதைத்து பனங்கள்விட்டு ஏழு முறை தாளித்து எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Burn the Vellai paadaanam in pumpkin juice for 6 hours by hanging it as Tholayandhiram without being immersed into it to get the purified form. (Or) Keep the Vellai paadaanam inside the limestone and slake it with Palm toddy for 7 times to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் வெள்ளைப் பாடாணத்தைப் பொடித்து, சற்று தளர்ச்சியாய் முரட்டுத் துணியில் முடிந்து கொண்டு 35 கிராம் மிளகை நீர் விட்டு அரைத்து, 1.3 லிட்டர் சிறுகீரைச் சாற்றில் கரைத்து, மட்பாண்டத்திலிட்டு அதில் பாடாண முடிப்பைக் கிழிகட்டிப் பாண்டத்தின் அடியிற்படாமல் தொங்கவிட்டு, அடுப்பேற்றிச் சிறு தீயாக எரித்து, சாறு சுண்டியவுடன் இறக்கி, நீர் விட்டுப் பாடாணத்தைக் கழுவி எடுத்துக் கொள்ளவும். இவ்வாறு மூன்று முறை செய்ய சுத்தியாகும்.</p><p><b>குறிப்பு: இம்முறையில் நவபாடாணங்களையும் சுத்தி செய்து கொள்ளலாம்.</b></p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle 35 g of Vellai paadaanam powder and burn it in the mixture of 35 g of pepper paste and 1.3 liters of juice of Sirukeerai (<i>Amaranthus tricolor</i>) by hanging it as Tholayandhiram. Allow the liquid to get reduced, rinse it off with water and perform this process thrice to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p><p><b>Note:</b> Navapaadaanam can also get purified by this method.</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span></p><div class="table-responsive"><table><tr><td>1. காடி</td><td>2. எலுமிச்சம் பழச்சாறு</td></tr><tr><td>3. புளிமாங்காய்ச்சாறு</td><td>4. புளியம் பிஞ்சுச்சாறு</td></tr><tr><td>5. புளியிலைச்சாறு</td><td>6. புளிச்சக்கீரைச்சாறு</td></tr><tr><td>7. புளியாரைச்சாறு</td><td>8. தமரத்தங்காய்ச்சாறு</td></tr></table></div><p>வெள்ளைப் பாடாணத்தைப் பட்டுத் துணியில் முடிந்து, ஓட்டிலிட்டு அடுப்பேற்றி சிறுதீயால் எரித்து, அதற்கு மேல்கண்டவற்றுள் ஏதாவது மூன்று சாறுகளினால் சுருக்குக் கொடுக்க சுத்தியாகும்.</p><p><b>குறிப்பு:  இவ்விதமே கௌரி பாடாணத்தையும் சுத்தி செய்யலாம்.</b></p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span></p><div class="table-responsive"><table><tr><td>1. Vinegar (Kaadi)</td><td>2. Lemon juice</td></tr><tr><td>3. Unripe Mango juice (<i>Mangifera indica</i>)</td><td>4. Tamarind fruit juice</td></tr><tr><td>5. Tamarind leaf juice</td><td>6. Juice of Pulicha Keerai (<i>Hibiscus cannabinus</i>)</td></tr><tr><td>7. Juice of Puliyaarai (<i>Oxalis corniculata</i>)</td><td>8. Unripe fruit juice of Thamarathai (<i>Averrhoa carambola</i>)</td></tr></table></div><p>Bundle the Vellai paadaanam in a silk cloth and burn it in earthen ware. Then burn it by adding small quantity of any three of the above juices periodically (Surukku koduthal process) to get the purified form.</p><p><b>Note:</b> This method can also be employed to purify the Gowri paadaanam.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் வெள்ளைப் பாடாணத்திற்கு 70 மி.லி பாகல் சமூலச்சாறு விட்டு வெயிலில் வைக்க வேண்டும். இவ்வாறு பதினைந்து நாட்கள் செய்ய வேண்டும். பிறகு மேற்படி வெள்ளைப் பாடாணத்திற்கு பலாக்கொட்டை குழித்தைலம் 70 மி.லி விட்டுக் கலந்து வெயிலில் வைக்க வேண்டும். இது போல் மேலும் பதினைந்து நாட்கள் செய்ய நல்ல சுத்தியாகும். சுத்தி முறை பிசகில் கொடிய விடமாம். இதனால் பிசகு வந்தால் அதற்கு முறிப்பு, பாகல் இலை ரசமாகும். அதனாலும் முறியாவிடின், மிளகைப் பயன்படுத்த வேண்டும் என்பர்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Mix 35 g of Vellai paadaanam and 70 ml of Paagal Samoola juice (<i>Momordica charantia</i>) and insolate it for 15 days. Repeat this process with Kuzhithailam extracted from seeds of Jack fruit (<i>Artocarpus heterophyllus</i>) to get the purified Vellai paadaanam.</p><p><b>Note:</b> Improper purification of Vellai paadaanam leads to severe adverse effects. Leaf juice of Paagal (<i>Momordica charantia</i>) and Pepper can be used as antidote.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் வெள்ளைப்பாடாணத்தைக் கல்வத்திலிட்டுப் பொடித்து எலுமிச்சம் பழச்சாறு 105 மி.லி விட்டு அரைத்துச் சிறு வில்லைகளாய்ச் செய்து உலர்த்திக் கொள்ள வேண்டும். இவ்வாறு ஏழு முறை செய்யவும். (அரைப்புப் புட சுத்தி)</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind 35 g of Vellai paadaanam powder with 105 ml of lemon juice, make it into small pellets and dry it. Perform this process for 7 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப்பாடாணத்தை வேப்பங்காய்ப்பால், எருக்கம்பால் இவற்றைக் கொண்டு சுருக்குக் கொடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Vellai paadaanam by adding small quantity of latices of unripe Neem fruit (<i>Azadirachta indica</i>) and Erukku (<i>Calotropis gigantea</i>) periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப்பாடாணத்தை வெள்ளெருக்கன் பாலில் ஒரு நாளும், எலுமிச்சம் பழச்சாற்றில் ஒரு நாளும் ஊற வைக்க வேண்டும். அதனைக் காடிவிட்டு கழுவி எடுத்துக் கொண்டு பிறகு மெருகன் கிழங்கைத் துளைத்து, அதற்குள் வெள்ளைப்பாடாணத்தைச் சொருகி, மேற்படி தூளால் மூடி பசுஞ்சாணத்தால் கவசித்துக் காய வைத்து இலகு புடமிட்டெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Vellai paadaanam for one day separately in latex of Vellerukku (<i>Calotropis gigantea</i>) and lemon juice. Rinse it off with vinegar (Kaadi) and stuff it into the rhizome of Merugu (<i>Alocasia macrorrhizos</i>). Daub cow dung over it, dry it and subject it to Lagu pudam to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப் பாடாணத்தைக் கற்சுண்ணாம்புக்குள் புதைத்துப் பனங்கள் விட்டு ஏழு முறை தாளித்து எடுக்க சுத்தியாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Keep the Vellai paadaanam inside the limestone and slake it with Palm toddy for 7 times to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப்பாடாணத்திற்கு அவுரிச்சாற்றையும், வெள்ளெருக்கன் சாற்றையும் கொண்டு தனித்தனியாய் மும்மூன்று சாமம் (27 மணி நேரம்) சுருக்குக் கொடுத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Vellai paadaanam by adding small quantity of Avuri juice (<i>Indigofera tinctoria</i>) and Vellerukku juice (<i>Calotropis gigantea</i>) separately at regular intervals (Surukku koduthal process) for 27 hours to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப்பாடாணத்திற்குக் குட்டிப்பலா குழித்தைலம் கொண்டு சுருக்குக் கொடுத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Vellai paadaanam by adding small quantity of the Kuzhithailam extracted from seed of Kutti Pala (<i>Artocarpus heterophyllus</i>) periodically (Surukku koduthal process) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>உழமண்ணைக் கரைத்துச் சீலையில் நனைத்து ஒரு பலம் பாஷாணத்தின் மேல் தேங்காய் பிரமாணத்திற்குக் கனமாகச் சுற்றி, ஒரு பெரிய பானையில் முக்கால் பாகம் ஜலம் விட்டுத் தோலாந்திரமாக மூன்று ஜாமமெரிக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span>Dip a cloth strip in Fuller\'s Earth sand (Uzhaman) solution and wrap it around 35 g (1 balam) of Vellai paadaanam to a dense of coconut. Burn it as Tholayandhiram by hanging it into water for 9 hours (3 Saamam) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப்பாடாணத்தை சிறுவருடைய அமுரி ஒரு படியில் மிளகு கொஞ்சம் அரைத்துப் போட்டுக் கலக்கி வெள்ளைப்பாடாணத்தைக் கிழிகட்டி அதிற்போட்டு வற்றக் காய்ச்சிய பின் கிழியையெடுத்துக் கழுவி உலர்த்திக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span>  Mix 1.3 liters (1 Padi) of child’s urine and pepper paste together. Burn the Vellai paadaanam in this mixture till the liquid gets evaporated. Rinse it and dry it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சுண்ணாம்புத் தண்ணீர், காடி, எலுமிச்சம் பழச்சாறு, கொம்புப்பாகற்காய், கற்றாழை மடல் இவற்றில் வேக வைத்துக் கழுவிப் போட வெள்ளைப்பாடாணம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Vellai paadaanam in limestone water, vinegar (Kaadi), Lemon juice, fruit juice of Kombu paagal (<i>Momordica charantia</i>) and Aloe vera juice. Rinse it off to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்சுண்ணாம்பைக் கரைத்து அதில் வெள்ளைப்பாடாணத்தைத் தோலாயந்திரமாகக் கட்டி ஆறு மணி நேரம் எரிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Burn the Vellai paadaanam in limestone solution by hanging it as Tholayandhiram for 6 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெள்ளைப் பாடாணத்தைப் பொடி செய்து கிழிகட்டி புது சுண்ணாம்புக்கல் நீற்றி தண்ணீரில் கலக்கி பால் போலே இருக்கிற சுண்ணாம்புத் தண்ணீர் சட்டியிலே வார்த்து கிழிகட்டின வெள்ளைப்பாடாணத்தைப் போட்டு தோலாயந்திரமாய் வைக்க சுத்தியாகும். இதுக்கு முன்னமே இந்த வெள்ளைப்பாடாணக் கட்டியைப் பாங்காய் அரைத்துப் பொதிந்து காடைப்புடம் போட்டுக் கொள்ளவும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span>  Grind the Vellai paadaanam and subject it to Kaadai pudam. Bundle this paadaanam powder and keep it in limestone solution by hanging it as Tholayandhiram to get the purified form. </p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'attuppu_boiled_salt': {
	    'tn': ' அட்டுப்பு ',
	    'en': ' ATTUPPU ',
		'nam': '(BOILED SALT)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> அட்டுப்பு ஒரு பங்கிற்கு நான்கு பங்கு சுத்த நீர் விட்டுக் கரைத்து, வடிகட்டி, சுண்டக் காய்ச்சி வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve one part of Attuppu in four parts of water by volume and filter it. Boil the filtrate untill the maximum of water molecule evaporates and allow it to insolate.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> அட்டுப்பிற்கு நான்கு பங்கு நீர் விட்டெரித்து, நன்றாகக் கொதிக்கும் போது, கோழி முட்டையின் வெண் கருவை ஊற்றப் பொங்கி வரும் அழுக்கை அகப்பையால் வழித்து நீக்கி விட்டுத் தக்க பதத்தில், மறுசட்டியில் சீலை கட்டி அதில் வடித்து, காற்றில்லாத இடத்தில் வைத்து, மறுநாள் அதில் இருக்கும் நீரை வடித்து விட்டு உலர வைக்கவும். இப்படி ஏழு முறை திரும்பத் திரும்பச் செய்யவும்.</p><p><b>குறிப்பு: சிலர் முட்டையின் வெண்கருவுக்குப் பதிலாகப் பழச்சாறு சேர்த்துப் பயன்படுத்துவர்.</b></p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Attuppu with four parts of water by volume.  At boiling consistency, add egg white to it. Then scoop out all the ebullient impurities with ladle. At correct consistency, filter it to a cloth sealed pot and then place it in a non ventilated area. On the next day, liquid is filtered and the precipitate is dried well. This process is repeated for 7 times to detoxify Attuppu.</p><p><b>Note: Lemon juice can be used instead of egg white.</b></p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெடியுப்பு நீர், மழை நீர், பனி நீர், கடல் நீர், வாழைக்கட்டை நீர் போன்ற ஏதாவதொன்றில் அட்டுப்பைக் கரைத்து வடிகட்டிக் காய்ச்சிக் குழம்பு பதத்தில் இறக்கி, வெயிலில் வைத்து உறையச் செய்தும் எடுத்துக் கொள்ளலாம்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Attuppu either in Vediyuppu (Potassium nitrate) water or rain water or dew water or sea water or Vaazhaikattai Neer [Plantain water] and filter it. Then the filtrate is boiled to attain thick consistency (Kuzhambu patham) and insolate until it crystallizes.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  }]
	  },
	  'appalakaaram_sodium_carbonate': {
	    'tn': 'அப்பளகாரம் (உழமண்)',
	    'en': 'APPALAKAARAM ',
		'nam': '(SODIUM CARBONATE)',
		'data': [{
		  'tn': '<p>அப்பளகாரத்திற்கு நான்கு பங்கு ஜலம் விட்டுக் கரைத்து, மறுநாள் வரையில் அசையாமல் வைத்து அதில் தெளிவை வடித்துச் சுண்டக் காய்ச்சி இரவியிலுலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Dissolve the Appalakaram in four parts of water by volume and allow it to remain undisturbed for a day. On the next day, heat the supernatant to attain thick consistency and insolate it.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'indhuppu_rock_salt': {
	    'tn': 'இந்துப்பு',
	    'en': 'INDHUPPU ',
		'nam': '(ROCK SALT)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> இந்துப்பைக் காடியில் 3 நாட்கள் ஊறப்போட்டு சூரியனொளியில் உலர்த்தி எடுக்கச் சுத்தியாகும். </p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Indhuppu in vinegar (Kaadi) for 3 days and insolate it.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> இந்துப்பைக் காடி அல்லது வெள்ளாட்டு நீரில் மூன்று நாழிகை (72 நிமிடங்கள்) மத்தித்து வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.	</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Indhuppu in vinegar (Kaadi) or goat\'s urine for 72 minutes (3 Naazhikai) and insolate it.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> இந்துப்பைக் காடியில் கரைத்து வடிகட்டி சூரியனில் காய வைத்தெடுக்க உறைந்து சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Indhuppu in vinegar (Kaadi) and filter it. Insolate the filtrate until it crystallizes.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> இந்துப்பை ஆட்டு மூத்திரத்திலே போட்டுக் காய்ச்சி எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Indhuppu in goat\'s urine and allow it to dry completely to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> இந்துப்பைப் பொடித்துக் காடியில், பசுவின் கோமியத்தில் நனைத்து வெயிலில் வைக்கச் சுத்தியாகும். </p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the powdered Indhuppu separately in vinegar (Kaadi) and cow\'s urine and insolate this effectively.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சைந்தலவணத்தைக் கோமூத்திரத்திலேயாவது எலுமிச்சம் பழச்சாற்றிலேயாவது நனைத்து வெயிலிலே வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Indhuppu in cow\'s urine or lemon juice and insolate it to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'evatchaaram_potassium_carbonate': {
	    'tn': 'எவட்சாரம்',
	    'en': 'EVATCHAARAM ',
		'nam': '(POTASSIUM CARBONATE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>எவட்சாரத்தை அரிசியின் இரண்டாவது கழுநீரில் ஒரு நாழிகை (24 நிமிடம்) மத்தித்து, வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Churn the Evatchaaram with second rice washed filtrate (Kazhuneer) for 24 minutes and insolate it.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தை சுத்த நீரில் ஒரு நாழிகை (24 நிமிடம்) அரைத்து, சீலையில் முடிகட்டி, கற்சுண்ணநீரில் இருபத்து நான்கு மணி நேரம் எரித்தெடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Evatchaaram with pure water for 24 minutes and make it to a bundle using a piece of cloth. Then burn it in lime stone water (Chunna neer) for 24 hours to get the purified Evatchaaram.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தை வெள்ளாட்டு நீரில் கரைத்து வடித்து வெயிலில் உலர்த்திக் கொள்ளவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Evatchaaram in goat’s urine and filter it. Dry the filtrate in sunlight completely.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தை வெள்ளாட்டு நீரில்  மூன்று நாழிகை (72 நிமிடங்கள்) நன்றாய் அரைத்து வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Evatchaaram with goat\'s urine for 72 minutes (3 Naazhikai) and insolate it to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தை மஞ்சள் சாறும், கழுநீரும் விட்டரைத்து வெயிலில் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Evatchaaram with Turmeric rhizome juice and rice washed filtrate. Insolate it to get purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தை அரிசி கழுவின நீரில் இருபத்து நான்கு நிமிடம் அரைத்து வெயிலில் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Evatchaaram with rice washed filtrate for 24 minutes and insolate it effectively.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தை அரிசி கழுவின நீரில் அல்லது கோமூத்திரத்திலாவது இருபத்து நான்கு நிமிடம் நனைத்து உலர்த்த சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Evatchaaram in rice washed filtrate or cow\'s urine for 24 minutes and dry this completely to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சட்டியில் வரகு இட்டு அதிலே வெள்ளாட்டு நீர் வார்த்து புடவையால் வாய்கட்டி எவட்சாரத்தைச் சிறுக நறுக்கிப் போட்டு உலை மூடி பன்னிரெண்டு மணி நேரம் எரிய விட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Take Varagu (<i>Paspalum scrobiculatum</i>) and goat\'s urine in a vessel and cover the vessel\'s mouth with a cloth. Then place small pieces of Evatchaaram on the cloth and cover it with a lid. This is burnt for 12 hours to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எவட்சாரத்தைச் சிறுக நறுக்கி சாணி கரைத்து அதில் போட்டு பன்னிரெண்டு மணி நேரம் எரிய விட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn small pieces of Evatchaaram in cow dung juice for 12 hours to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'kalluppu': {
	    'tn': 'கல்லுப்பு',
	    'en': '',
		'nam': 'KALLUPPU',
		'data': [{
		  'tn': '<p>கல்லுப்பைக் காடித் தண்ணீரில் பிசறி, பிறகு ஈரத்தைத் துணியால் துடைத்து வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Mix the Kalluppu with vinegar (Kaadi) and wipe the moisture with a cloth. Then insolate it to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}]
	  },
	  'kariyuppu_sodium_chloride': {
	    'tn': 'கறியுப்பு (சோற்றுப்பு/சமுத்திரலவணம்/கடலுப்பு)',
	    'en': 'KARIYUPPU ',
		'nam': '(SODIUM CHLORIDE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கறியுப்பை நீர் (கடல் நீர் அல்லது மழை நீர்) விட்டுக் கரைத்து, வடிகட்டிக் காய்ச்சி குழம்பு பக்குவத்தில் இறக்கி வெயிலில் காய வைத்து எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Kariyuppu in water (Sea water or Rain water) and filter it. Heat the filtrate untill it attains a thick consistency (Kuzhambu padham) and insolate it to get the purified salt.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் (1 பலம்) கறியுப்பிற்கு கீழ்கண்ட சாறுகளை விட்டு வெயிலில் வைத்து உலர்த்திக் கொள்ள சுத்தியாகும்.</p><table><tbody><tr><td>1 – 6 நாட்கள்</td><td>தினம் 210 மி.லி ( 6 பலம்) செங்குவளைச் சமூலச்சாறு விட்டு வெயிலில் வைக்கவும்.</td></tr><tr><td>7, 8 வது நாள்</td><td>சாறு விடாமல் வெயிலில் உலர்த்தவும்.(சாறு சுவறி வறண்டு போகும்)</td></tr><tr><td>9 – 14 வது நாள்</td><td>தினம் 210 மி.லி ( 6 பலம்) கருங்குவளைச் சமூலச்சாறு விட்டு வெயிலில் வைக்கவும்.</td></tr><tr><td>15, 16 வது நாள்</td><td>சாறு விடாமல் வெயிலில் உலர்த்தவும்.</td></tr><tr><td>17 - 22 வது நாள்</td><td>தினம் 210 மி.லி ( 6 பலம்) கழுநீர் விட்டு வெயிலில் வைக்கவும்.</td></tr><tr><td>23, 24 வது நாள்</td><td>கழுநீர் விடாமல் வெயிலில் வைத்து உலர்த்தவும்.</td></tr></tbody></table><p class="nubi">குணபாடம் தாது சீவ வகுப்பு </p>',
			'en': '<p><span class="list-style-v1"></span> To 35 g (1 balam) of Kariyuppu , pour the following juices and insolate it to get the purified salt.</p><table><tr><td>1st - 6th day</td><td>Pour 210 ml (6 balam) of juice of Sengazhuneer (<i>Nymphaea alba</i>) daily and dry it in sunlight.</td></tr><tr><td>7th, 8 th day</td><td>Insolate it without adding juice</td></tr><tr><td>9th - 14th day</td><td>Pour 210 ml (6 balam) of juice of Karunguvalai (<i>Monochoria vaginalis</i>) daily and dry it in sunlight.</td></tr><tr><td>15th ,16th day</td><td>Insolate it without adding  juice</td></tr><tr><td>17th - 22nd day</td><td>Pour 210 ml (6 balam) of rice washed filtrate (Kazhuneer) daily and dry it in sunlight.</td></tr><tr><td>23rd and 24th day</td><td>Insolate it.</td></tr></table><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கறியுப்பை ஏழு பங்கு நீர் அல்லது காடி நீர் விட்டு கரைத்து, வடிகட்டிக் காய்ச்சி, குழம்பு பக்குவத்தில் இறக்கி, இளஞ்சூட்டில்  பழச்சாறு அல்லது மோர் சிறிது விட்டு வெயிலில் காய வைக்க உப்பு உறையும். இவ்வாறு பத்து முறை செய்து கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு </p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Kariyuppu in 7 parts of water or vinegar (Kaadi) by volume and filter it. The filtrate is heated to attain a thick consistency (Kuzhambu patham). At resistable heat, add small amount of Lemon juice or butter milk and insolate until it crystallizes. Perform the same process for 10 times to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கறியுப்பை வாழைக்கட்டை நீர் விட்டுக் கரைத்து, வடிகட்டிக் காய்ச்சி, குழம்பு பக்குவத்தில் இறக்கி, இளஞ்சூட்டில்  பழச்சாறு சிறிது விட்டு வெயிலில் காய வைக்க உப்பு உறைந்து சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு </p>',
			'en': '<p><span class="list-style-v1"></span>  Dissolve the Kariyuppu in Plantain water (Vaazhaikattai neer) and filter it. Boil the filtrate to attain a thick consistency (Kuzhambu patham), add small amount of Lemon juice and insolate until it crystallizes.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கறியுப்பை மோர் விட்டுக் கலக்கிக் கடும் வெயிலில் உலர்த்தி எடுத்துக் கொள்க.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600 </p>',
			'en': '<p><span class="list-style-v1"></span> Mix the Kariyuppu with butter milk and insolate it till it completely dries.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		  }]
	  },
	  'karpooram_camphor': {
	    'tn': 'கற்பூரம் (சூடன்)',
	    'en': 'KARPOORAM ',
		'nam': '(CAMPHOR)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கற்பூரத்தைச் செங்கழுநீர் மலர்ச்சாற்றில் ஒரு நாழிகை (24 நிமிடம்) ஊற வைத்து எடுத்து வெயிலில் உலர்த்தி எடுக்கவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Karpooram in flower juice of Sengazhuneer (<i>Nymphaea alba</i>) for 24 minutes (1 Naazhikai) and dry it under sunlight to get the purified Karpooram.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கற்பூரம் பொடி செய்து பொட்டணங்கட்டி மனிதர் சிறுநீரில் இருபத்தொரு மணி நேரம் வேக வைத்துப் பின்பு பசு மூத்திரத்திலே ஆறு மணி நேரம் வேக வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Karpooram powder is made to a bundle with a cloth. Boil the bundle in human\'s urine for 21 hours and then boil it in cow\'s urine for 6 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்பூரம் பொடி செய்து கரண்டியில் போட்டு பசுவின் நெய் விட்டு ஏழு முறை பொங்கக் காய்ச்ச சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Mix cow\'s ghee and Karpooram powder in a ladle. Heat it until it effervesces and repeat this for 7 times to get the purified Karpooram.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'navatchaaram_ammonium_chloride': {
	    'tn': 'நவச்சாரம்',
	    'en': 'NAVATCHAARAM ',
		'nam': '(AMMONIUM CHLORIDE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நவச்சாரத்தை வெந்நீரில் கரைத்து, சூடாயிருக்கும் போது வடிகட்டி, குளிர ஆறின பின் வாயகன்ற பாத்திரத்தில் விட்டு, வெயிலில் வைக்க உப்பு உறையும். அதைப் புட்டியில் அடைத்துப் பத்திரப்படுத்தவும். இதன் வெகுட்டலைப் போக்கச் சிறிது குன்றிமணி வேரை முடியிட்டுப் புட்டியில் இட்டு வைத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Navatchaaram in hot water and filter it. After heat subsides, pour it in a wide mouthed basin and insolate untill it crystallizes to salt. This should be preserved in a bottle along with the root of <i>Abrus precatorius</i>.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> நவச்சாரத்தை வெள்ளாட்டு நீர் அல்லது அரிசி இரண்டாவது கழுநீரில் அரைத்து, உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Navatchaaram in goat\'s urine or kazhuneer (second rice washed filtrate) and dry this effectively to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>  நவச்சாரத்தைக் கோமூத்திரத்தில் கரைத்து, வடிகட்டிச் சுண்ட எரித்து வெயிலில் உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Navatchaaram in cow\'s urine, filter and burn it untill all the water molecules evaporate. Insolate it to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நவச்சாரத்தைப் பதநீரில் கரைத்து வடிகட்டி எரித்துக் குழம்பு பக்குவத்தில் இறக்கி காய வைத்து எடுக்கலாம்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Navatchaaram in sap of Palm spadix (pathaneer) and it is filtered. Boil the filtrate to attain thick consistency and dry this completely.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'sakthisaaram': {
	    'tn': 'சத்திச்சாரம்',
	    'en': '',
		'nam': 'SAKTHICHAARAM',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தை வெள்ளாட்டு நீரில் கரைத்துத் தெளிவெடுத்துச் சூரிய வெப்பத்தில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Sakthichaaram in goat\'s urine and insolate the supernatant to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தைக் காடியிலாவது கோமூத்திரத்திலாவது மூன்று நாழிகை அரைத்து, சூரிய ஒளியில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Sakthichaaram with cow\'s urine or vinegar (Kaadi) for 72 minutes (3 Naazhigai) and insolate it to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தைக் காடி அல்லது வெள்ளாட்டு நீரில் மூன்று நாள் மத்தித்து வெயிலில் உலர்த்த சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Sakthichaaram in vinegar (Kaadi) or goat\'s urine for 3 days and insolate it completely to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தை வெள்ளாட்டு நீரில் மூன்று நாள் மத்தித்து, இரவியில் உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Sakthichaaram in goat\'s urine for three days and insolate it to get the purified salt.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தைக் காடியில் அல்லது பசுவின் கோமியத்தில் முக்கால் மணி நேரம் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Sakthichaaram in vinegar (kaadi) or cow\'s urine for 45 minutes to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தை எலுமிச்சங்காய் சாற்றில் முக்கால் மணி நேரம் அரைத்து வெயிலில் வைக்க சுத்தியாகும்.	</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Sakthichaaram with juice of unripe lemon for 45 minutes and insolate it effectively to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தை ஆட்டு மூத்திரத்தில் முக்கால் மணி நேரம் அரைத்து சூரிய ஒளியில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Sakthichaaram with goat’s urine for 45 minutes and dry it in sunlight to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தைப் பதநீரில் பிட்டவியலாக அவித்து உலர்த்தி எடுத்துக் கொள்ளவும். (பதநீர் = பனஞ்சாறு)</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Steam heat (Pittaviyal) the Sakthichaaram in sap of Palm spadix (pathaneer). Dry this thoroughly to get the  purified salt.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சத்திச்சாரத்தைக் பசுநீரில் மூன்று நாட்களுக்கு மத்தித்து உலர்த்திக் கொள்ளவும்,</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Sakthichaaram in cow\'s urine for 3 days and insolate it to get the purified salt.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		  }]
	  },
	  'savukkaaram_washing_soda': {
	    'tn': 'சவுக்காரம்',
	    'en': 'SAVUKKAARAM ',
		'nam': '(WASHING SODA)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சவுக்காரத்தைக் கோநீரில் பிட்டவியலாக அவித்து உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Steam heat (Pittaviyal) the Savukkaaram in cow\'s urine .Dry it well to get the purified salt.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சவுக்காரத்தைக் காடிநீர் அல்லது பசுநீரில் மூன்று நாட்கள் வரை நன்கு மத்தித்து எடுத்துக் கொண்டு, பின்னர் உலர்த்திக் கொள்ளவும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Savukkaaram in vinegar (Kaadi) or cow\'s urine for 3 days and dry it effectively.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சவுக்காரத்தைப் பதநீரில் பிட்டவியலாக அவித்து உலர்த்தி எடுத்துக் கொள்ளவும். (பதநீர் = பனஞ்சாறு)</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Steam heat (Pittaviyal) the Savukkaaram in sap of Palm spadix (pathaneer). Dry it effectively to get the purified salt.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  }]
	  },
	  'pachchai_karpooram_borneo_camphor': {
	    'tn': 'பச்சைக்கற்பூரம்',
	    'en': 'PACCHAI KARPOORAM ',
		'nam': '(BORNEO CAMPHOR)',
		'data': [{
		  'tn': '<p>பச்சைக்கற்பூரத்தைச் செங்கழுநீர் மலர்ச் சாற்றில் ஒரு நாழிகை வரை (24 நிமிடங்கள்) ஊற வைத்து எடுத்து, வெயிலில் உலர்த்தவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p>Soak the Pacchai karpooram in flower juice of Sengahuneer (<i>Nymphaea alba</i>) for 24 minutes (1 Naazhigai) and insolate it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		}]
	  },

	  'padikaaram_alum': {
	    'tn': 'படிகாரம்',
	    'en': 'PADIKAARAM ',
		'nam': '(ALUM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> படிகாரத்தை நீரில் கரைத்து, வடிகட்டிக் காய்ச்சி, குழம்பு பக்குவத்தில் இறக்கி குளிரும்படி செய்ய சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Padikaaram in water and heat till it attains a thick consistency. Allow it to cool to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> படிகாரத்தை மண் ஓட்டில் வைத்துப் பொரித்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Exsiccate the Padikaaram in earthen ware to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> படிகாரத்தைப் பொரித்தேனும் அல்லது ஜலத்தில் தோய்த்து ஈரத்தைத் துடைத்தேனும் சேர்த்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Exsiccate the Padikaaram or Soak the Padikaaram in water and wipe its moisture to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> படிகாரத்தை பசும்பாலில் போட்டு மூன்று சாமம் ஊறிய பின் எடுத்துலர்த்திக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Padikaaram in cow\'s milk for 9 hours (3 Saamam) and dry it well to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> ஒரு சட்டியிலே எருமைச்சாணத்தைக் கரைத்து வைத்து படிகாரத்தை அதில் கிழிகட்டி வைத்தெடுத்துப் பின்பு சிறுநீரில் மூன்று நாள் ஊற வைத்தெடுத்துக் காய வைக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Hang the Padikaaram bundle in a pot containing buffalo dung juice. Then soak it in urine for 3 days and insolate it to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> படிகாரத்தைப் பசும்பாலில் ஒன்பது மணி நேரம் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Padikaaram in cow\'s milk for 9 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'pidaalavanam_black_salt': {
	    'tn': 'பிடாலவணம்',
	    'en': 'PIDAALAVANAM ',
		'nam': '(BLACK SALT)',
		'data': [{
		  'tn': '<p>பிடாலவணத்தைப் பசுவின் மோரிலாவது கோசலத்திலாவது ஊறப்போட்டு வெயிலில் வைத்து உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Soak the Pidaalavanam in butter milk or cow\'s urine. Dry it under sunlight to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}]
	  },
	  'pooneeru_fuller_earth': {
	    'tn': 'பூநீறு',
	    'en': 'POONEERU ',
		'nam': '(FULLER’S EARTH)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பூநீறுக்கு 4 பங்கு நீர் (பனி நீர்) விட்டுக் கரைத்துத் தெளிய வைத்து, தெளிவை வாயகன்ற பீங்கானில் வடிகட்டி, வெயிலில் வைக்கவும். நீர் போக உறைந்து உப்பாகும். இவ்வண்ணம் 10 தடவைகள் செய்யவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve Pooneeru in 4 parts of water (Dew water) by volume. Filter the supernatant to a wide mouthed porcelain basin and this must be subjected to insolation until it crystallizes. Perform the same process for 10 times to get the purified Pooneeru.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பூநீறுக்கு எலுமிச்சம் பழச்சாறு விட்டுக் கரைத்து தெளிவை வாங்கி அடுப்பேற்றிக் காய்ச்சி உப்பாக்கிக் கொள்ளவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு </p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Pooneeru in lemon juice and boil the supernatant till it crystallizes to salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நல்ல நீர் விட்டுப் பூநீறைக் கரைத்துத் தெளிவை இறுத்து நீர் சுண்ட வெயிலில் உலர்த்தவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Pooneeru in pure water and insolate the supernatant until all the water molecules evaporate.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பூநீறுக்கு நான்கு பங்கு ஜலம் விட்டு கரைத்து 4 அல்லது 5 மணி நேரம் தெளிய வைத்து ஒரு வாயகன்ற பாத்திரத்தில் விட்டு இரவியில் காய வைக்கவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Pooneeru in 4 parts of water by volume. Keep it aside undisturbed for 4 - 5 hours. Then tranfer the supernatant to a wide mouthed basin and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பூநீறுக்கு சுத்த ஜலம் விட்டுக் கரைத்து, தெளிவை இறுத்துச் சுண்டக் காய்ச்சி இரவியிலுலர்த்திக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Pooneeru in pure water and boil the supernatant until all the water molecules evaporate. Then dry it under sunlight to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பூநீறுக்குப் பனி நீராவது, தண்ணீராவது விட்டுக் கரைத்து அடித்துக் கலக்கி நுரை போக்கி, வடிகட்டி, வெயிலில் உலர்த்தி உறையச் செய்து எடுக்க தூய்மையாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Pooneeru in dew water or water. Beat this mixture well and remove all the froth from it. Filter and insolate it to get a crystalline form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'valaiyaluppu': {
	    'tn': 'வளையலுப்பு',
	    'en': '',
		'nam': 'VALAIYALUPPU',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வளையலுப்பைப் புளித்த காடிநீரில் ஒரு முகூர்த்த காலம் (90 நிமிடம்) ஊற வைத்தெடுத்து சூரிய வெப்பத்தில் உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Valaiyaluppu in vinegar (Kaadi) for 90 minutes and insolate it completely.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வளையலுப்பைக் காடியில் கரைத்துத் தெளிவிறுத்து சூரிய வெப்பத்தில் வைத்து உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Valaiyaluppu in vinegar (Kaadi) and dry the supernatant under sunlight to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வளையலுப்பை புளியிலைச் சாற்றிலே நனைத்து வெயிலில் முக்கால் மணி நேரம் வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Dip the Valaiyaluppu in Tamarind leaf juice and keep it under sunlight for 45 minutes.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வளையலுப்பை மோரிலும், பசுவின் மூத்திரத்திலும் நனைத்து வெயிலில் உலர வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Valaiyaluppu in butter milk and cow\'s urine. Then dry it under sunlight to get the purified salt.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வளையலுப்பைப் பசுவின் கோமியத்தில் மூன்று முறை வறுத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Roast the Valaiyaluppu in cow\'s urine for 3 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'venkaaram_borax': {
	    'tn': 'வெங்காரம்',
	    'en': 'VENKAARAM',
		'nam': '(BORAX)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தை நீர் வற்றும் படி பொரித்து எடுத்துக் கொள்ள வேண்டும். இவ்வாறு பொரித்தெடுத்தது பொரிகாரம் எனப்படும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p><span class="list-style-v1"></span> Exsiccate the Venkaaram in an earthen ware till the water gets evaporated.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தை பழச்சாற்றிலாவது அரிசிக் கழுநீரிலாவது அரைத்து உலர்த்திக் கொண்டால் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Venkaaram with lemon juice or rice washed filtrate and dry it completely.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தைச் சட்டியிலிட்டுப் பொரித்துக் காடியிலாவது பழச்சாற்றிலாவது அரைத்து உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Exsiccate the Venkaaram and grind it with vinegar (Kaadi) or lemon juice. Dry it effectively.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பசுவின் சாணப்பாலில் வெங்காரத்தைக் கழுவி உலர்த்த சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Rinse the Venkaaram in cow dung juice and dry it well.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தைச் சீலையில் முடிந்து எருமைச்சாணத்தில் பொதிந்து வைத்து மூன்று நாட்கள் சென்ற பின் சுத்த நீரில் கழுவி உலர்த்த சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Stuff the Venkaaram bundle in buffalo dung for 3 days, rinse it in clean water and dry this completely.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தைக் கிழிகட்டி, எருமைச் சாணத்தை நீரில் கரைத்து, கொதிக்க வைத்து, அதில் கிழியை அழுத்தி அழுத்தி எடுத்து, சுத்த நீரில் கழுவி சூரிய வெப்பத்தில் உலர்த்த சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the buffalo dung juice and dip the bundled Venkaaram in it. Rinse it with water and insolate it. </p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எருமை மூத்திரத்தில் வெங்காரத்தை மூன்று நாழிகை ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Venkaaram in buffalo\'s urine for 72 minutes (3 Naazhigai) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நொச்சியிலைச் சாற்றிலாவது, பழச்சாற்றிலாவது, காடியிலாவது வெங்காரத்தைத் துவைத்துத் துவைத்து உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Drench the Venkaaram in Notchi leaf juice (<i>Vitex negundo</i>) or lemon juice or vinegar (Kaadi) and dry it effectively.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தைப் பொரித்தேனும் அல்லது ஜலத்தில் தோய்த்து ஈரத்தைத் துடைத்தேனும் சேர்த்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span>  Exiccate the Venkaaram or Soak it in water and wipe out the moisture content.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தைக் காடியிலாவது எலுமிச்சம் பழச்சாற்றிலாவது குழி அம்மியிற்போட்டு அரைத்து வில்லை தட்டிக் காய வைத்துப் பொரித்து எடுத்துக் கொள்ளவும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Venkaaram with vinegar (Kaadi) or lemon juice and make it to a paste. Shape this paste to pellets (villai) and dry it well. Exsiccate the dried pellets.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>வெங்காரத்தைப் பசுவின் பாலில் மூன்று நாட்கள் ஊற வைக்கச் சுத்தியாகும். மீண்டும் வெங்காரத்தைப் பசுவின் பாலிலும், காடியிலும், எலுமிச்சம் பழச்சாற்றிலும் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span>Soak the Venkaaram in cow\'s milk for 3 days. Then rinse it with cow\'s milk, vinegar (Kaadi) and lemon juice and wash it thoroughly.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தை உளுந்து சாற்றிலும், பசுவின் பாலிலும் கழுவினால் சுத்தியாகும். பொரித்துக் கொள்ளவும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Rinse the Venkaaram with black gram\'s juice (<i>Vigna mungo</i>) and cow\'s milk and wash it effectively. Then exsiccate it.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெங்காரத்தை நெருப்பில் கொதிக்க விட்டு எடுக்க சுத்தியாகும். காடியில் எலுமிச்சம் பழச்சாறு விட்டு வெங்காரத்தைப் போட்டு காய்ச்ச சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span>Heat the Venkaaram until it boils (Or) Boil the Venkaaram in liquid concoction of lemon juice and vinegar (Kaadi) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'vediyuppu_potassium_nitrate': {
	    'tn': 'வெடியுப்பு',
	    'en': 'VEDIYUPPU',
		'nam': '(POTASSIUM NITRATE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வெடியுப்பு ஒரு பங்கிற்கு, நான்கு பங்கு தண்ணீர் விட்டு அடுப்பிலேற்றிச் சிறு தீயால் எரித்துக் கொதி கிளம்பும் போது, (1 வீசை) 1400 கிராம் உப்புக்கு நான்கு கோழி முட்டை வெண்கருவைச் சேர்க்க வேண்டும். மேலே அழுக்குத் திரளும். அதனை அகப்பையால் வழித்து நீக்கி உறையும் பதத்தில் மறுசட்டியில் சீலை கட்டி அதில் வடித்துக் காற்றில்லா இடத்தில் வைத்து, மறுநாள் நீரை வடித்துவிட்டு, சூரிய ஒளியில் உப்பை உலர்த்தவும். இவ்வாறு ஏழு முறை செய்யச் சுத்தியாகும்.</p><p><b>குறிப்பு:</b> முட்டை வெண்கருவிற்குப் பதில் பாலுக்குப் புரையிடுவது போல் எலுமிச்சம் பழச்சாற்றையாவது புளித்த மோரையாவது சேர்த்து அழுக்கை நீக்கலாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Mix the Vediyuppu in 4 parts of water by volume and burn this in low flame. At boiling stage, add 4 egg whites and scoop out the impurities on upper surface by ladle. At thick consistency (Uraiyum padham), filter it and keep it in a non-aerated place. On the next day, the liquid part is eliminated and the precipitate is dried under sunlight. The same process is performed for 7 times to get the purified Vediyuppu.</p><p><b>Note: Instead of egg white, lemon juice or sour butter milk can be added to remove impurity. For 1400g of salt, 4 egg whites are added.</b></p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வெடியுப்பு ஒரு பங்கு, கடல் நீர் அல்லது நீர் இரண்டு பங்கு எடுத்து, உப்பை நுண்மையாகப் பொடி செய்து நீரில் கலந்து தெளிவெடுத்து வெண்மையான இருப்புப் பாண்டத்திலிட்டு காய்ச்சி உறையும் பதத்தில் வேறு ஒரு செப்புப் பாண்டத்தில் கொட்டி குளிர்ந்த இடத்தில் ஆற வைக்க உப்பாகும். இதை எடுத்து இதற்கு இரண்டு பங்கு நீர் விட்டு மேற்படியாகவே காய்ச்சி உப்பாக்கவும். இப்படி மொத்தத்தில் ஐந்து முதல் ஏழு முறை செய்ய சுத்தியாகும்.</p><p><b>குறிப்பு: கடல் நீர் அல்லது நீருக்குப் பதில் வாழைக்கட்டை நீர், பனி நீர், மழை நீர் இவற்றில் ஒன்றைப் பயன்படுத்தலாம்.</b></p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the pulverised Vediyuppu in sea water or water. Boil the supernatant in an iron vessel to attain thick consistency (Uraiyum padham).Then transfer it to a copper vessel and allow the heat to subside by placing it in a cool place. Later add 2 volumes of water to it and boil it to attain salt crystals. This procedure is performed for 5-7 times.</p><p><b>Note:</b> To 1 part of Vediyuppu, 2 parts of Sea water or water  are needed. Instead of sea water or water, Vazhaikatti neer or dew water or rain water can be used.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெடியுப்பின் அளவிற்கு நான்கு மடங்கு நீர் விட்டுக் காய்ச்சிக் கொதிக்கும் போது புளிப்பு மோரைச் சிறிது விட்டுக் கலக்க அழுக்கு தள்ளும். அவ்வழுக்கை மேலாகச் சல்லிக் கரண்டியால் அப்புறப்படுத்தி மீண்டும் காய்ச்சும் போது ஒரு துளி ஓலையின் மீது விட உறையும். அப்பக்குவத்தில் கீழிறக்கி ஒரு இரவு ஆறவிடக் கம்பி கம்பிகளாக உறையும். இவைகளை அகல பீங்கான் தட்டுகளிலிட்டு இரவியில் உலர்த்தவும். எடுத்த கம்பிகள் போக மிகுதியுள்ள நீரோடு மறுவலும் நான்கு மடங்கு நீர் விட்டு முன்போலக் காய்ச்சி ஆறவிட்டுக் கம்பிகளாக வரும் உப்புகளை எடுத்து உலர்த்தி முன் உப்போடு கூட்டவும். இப்படி உப்பு கிடைக்கும் வரையில் காய்ச்சிக் காய்ச்சி எடுப்பதே சுத்தி. இங்ஙனம் செய்து ஒருங்கு சேர்ந்த உப்பிற்கு ஒரு தீட்சை முடிந்ததென்பர். இப்படி ஏழு முறை செய்யின் உயர்தரமான சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Vediyuppu in four parts of water by volume. At boiling stage, stir it with adding liitle sour butter milk. Remove the floating impurities by perforated ladle. Heat it again and check it for crytallising by pouring over a palm leaf. At this stage, take it off and allow it to cool for one night to crystallize like long spikes. Take these salt crystals in a wide porcelain plate and insolate it. To the remnant liquid of this salt, add four volumes of water and heat it. On cooling, it is crystallized and this is dried .Then mix it with previously taken salt. The process is repeated till all the salt is obtained. Now the resultant salt has gained one Theetchai (Complete Purification). The highest standard of purified salt is obtained by performing the same procedure for 7 times.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வெடியுப்பைப் பசுவின் கோமியத்தில் அல்லது எலுமிச்சம் பழச்சாற்றில் நனைத்து உலர்த்த சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Drench the Vediyuppu in cow\'s urine or lemon juice and dry it effectively.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },

	  'cinnamon': {
	    'tn': 'கோமேதகம்',
	    'en': 'Cinnamon ',
		'nam': '(Komethakam)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கோமேதகத்தைக் குதிரை நீரில் மூன்று நாட்கள் ஊற வைத்து, பிறகு நிலக்குமிழ் இலைச்சாற்றில் ஒரு நாள் ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Komethakam in horse’s urine for 3 days. Then soak it in Nilakumizh juice (<i>Gmelina asiatica</i>) for 1 day to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கோமேதகத்தை அப்பிரகத் தகட்டின் மீது வைத்து சாராயம், கவுஸ்பான் தீநீர், பன்னீர், காடி இந்நான்கையும் சமபாகம் சேர்த்து, அந்நீரைக் கொண்டு 4 சாமம் (12 மணி நேரம்) சுருக்கிட சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Prepare a liquid concoction by mixing equal amounts of Arrack, Kavusbaan Theeneer, Rose water and Vinegar (Kaadi). Place the Komethakam on a Mica plate and burn it by adding small quantity of this liquid concoction periodically (Surukku koduthal process) for 12 hours (4 Saamam) to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கோமேதகத்தைக் கறுப்புப் பெண் குதிரை நீரிலும், தும்பைப் பூச்சாற்றிலும் தனித்தனியே மூன்று நாள் ஊறப் போட்டெடுக்க அல்லது குதிரை மூத்திரத்திலும், நிலக்குமிழ் வேர்ச் சாற்றிலும் மூன்று நாள் கோமேதகத்தை ஊறப் போட்டெடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Komethakam separately in black mare’s urine and Thumbai flower juice (<i>Leucas aspera</i>) for 3 days (Or) Soak the Komethakam for 3 days separately in horse’s urine and Nilakumizh root extract (<i>Gmelina asiatica</i>) to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'sapphire': {
	    'tn': 'நீலமணி',
	    'en': 'Sapphire ',
		'nam': '(Neelamani)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நீலமணியை கழுதை மூத்திரத்தில் போட்டு ஊற வைத்து, ஒரு நாள் வெயிலில் வைத்துப் பிறகு சுத்த நீரில் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Neelamani in donkey’s urine and dry it under sunlight for 1 day. Then wash it thoroughly with clean water.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> நீலமணியை நெருப்பில் காய்ச்சி, எருக்கம் பாலில் தோய்த்து ஆறிய பின், இவ்விதமே மேலும் மேலும் ஐந்து அல்லது ஆறு முறை செய்யச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Neelamani and dip it in latex of Erukku (<i>Calotropis gigantea</i>) and allow it to cool. This procedure is repeated for 5 or 6 times to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நீலமணியைக் குதிரை மூத்திரத்தில் ஒரு நாள் ஊற வைத்துக் கழுவி வெயிலில் உலர்த்த சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Neelamani in horse’s urine for 24 hours. Then rinse it and dry it under sunlight.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span>நீலமணியைக் கழுதை மூத்திரத்தில் ஒரு நாள் ஊறப் போட்டு மறுநாள் இரவியிலுலர்த்துக அல்லது நிலக்குமிழ் வேரை அரைத்து மூசை செய்து, அதனில் நீலமணியை வைத்து, இரண்டொரு சீலை செய்து, கோழிப்புடமிட்டு எடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Neelamani in donkey’s urine for one day and insolate it on the following day. (Or)   Make a Moosai using Nilakumizh root paste (<i>Gmelina asiatica</i>), place the Neelamani into it and seal it with two layers of lute. Then subject it to Kozhipudam (10 cow dung cakes) to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'coral': {
	    'tn': 'பவழம்',
	    'en': 'Coral',
		'nam': '(Pavazham)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் பவழத்திற்கு 210 மி.லி பேரீச்சங்கள்ளைக் காலையில் விட்டு மாலை வரை வெயிலில் உலர்த்தி, மறுநாள் காலையிலும் புதிதாய் மேற்படி கள்ளை விட்டு வெயிலில் வைக்கவும். இவ்விதம் ஐந்து முறை செய்து, நீர் விட்டுக் கழுவி எடுக்கச் சுத்தியாகும். இதனைப் பற்பம் முதலிய மருந்தாகச் செய்து வழங்கலாம்.</p><p><b>குறிப்பு: "தேரையர் யமக வெண்பா"</b> உரையாசிரியர் இங்ஙனம் கூறியிருப்பினும், இவ்வாறு செய்யின் பவழம் யாவும் கரைந்து விடும். எனவே சம அளவு பேரீச்சங்கள் ஊற்றி வைத்து மறுநாள் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p><span class="list-style-v1"></span> Add 210 ml of Date’s toddy (<i>Phoenix sylvestris</i>) to 35 g of Pavazham. Keep this in sunlight for five days by replacing it with fresh toddy daily. Later wash it in clean water and dry it completely.</p><p>Note: Though this method has been mentioned in “<b>Theraiyar Yamaga Venpa</b>”, Pavazham gets completely dissolved on following this method. So, usage of equal amount of Date\'s toddy to Pavazham and rinsing it on the following day is recommended.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பவழத்தை எலுமிச்சம் பழச்சாற்றில் ஒரு நாள் முழுதும் ஊற வைத்து, மறுநாள் வெந்நீரில் கழுவி எடுத்து உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
			'en': '<p><span class="list-style-v1"></span> Soak small pieces of Pavazham in lemon juice for one day. Then rinse it off with hot water and dry it.</p><p class="nubi">The Siddha Formulary of India</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழத்தை எலுமிச்சம் பழச்சாற்றில் ஒரு நாள் ஊற வைத்து எடுக்கவும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Pavazham in lemon juice for one day to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழப்புற்றைப் பசு மோரில் கிழிகட்டி நான்கு நாழிகை எரிக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p>4. Hang the bundled Pavazham in a vessel containing cow\'s butter milk and burn it for 1½ hours (4 Naazhigai) to get the purified gem.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழத்தைப் பேரீச்சம் கள்ளில் ஊற வைத்து எடுத்துக் கொள்வர்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Pavazham in date’s toddy to get the purified gem.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழப்புற்றைப் பசுவின் பாலில் போட்டு எரித்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Pavazham in cow’s milk to get the purified gem.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'topaz': {
	    'tn': 'புட்பராகம்',
	    'en': 'TOPAZ ',
		'nam': '(PUSHPARAGAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> புட்பராகத்தை வெள்ளாட்டு மூத்திரத்திலிட்டு இரண்டு சாமம் (ஆறு மணி நேரம்) வெயிலில் வைத்து எடுத்து வெந்நீரில் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Immerse the Pushparagam in goat’s urine. Keep this under sunlight for 6 hours (2 Saamam) and wash it in hot water.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> புட்பராகத்தை வெள்ளாட்டு மூத்திரத்திலும், புளியிலைச் சாற்றிலும் ஒவ்வொரு சாமம் ஊற வைத்தெடுக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Pushparagam in goat’s urine and Tamarind leaf juice separately for 3 hours (1 Saamam) to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'maragatham': {
	    'tn': 'மரகதம்',
	    'en': 'EMERALD',
		'nam': '(MARAGATHAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நிலக்குமிழ் வேரை அரைத்து அதற்குள் மரகதத்தை வைத்து உருட்டி, மேல் சீலைமண் செய்து குக்குட (பத்து வறட்டியில்) புடமிட்டெடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Stuff the Maragatham in Nilakumizh root paste (<i>Gmelina asiatica</i>) and it is rolled into a round ball. Lute it and then subject it to Kukkuda pudam (10 cowdung cakes) to get the purified Maragatham.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மரகதத்தை வச்சிர மூசையிலிட்டு, உலையில் வைத்து சூடேறிய பின், குதிரை மூத்திரத்தில் ஏழு முறை தோய்த்து எடுக்கவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Maragatham is put into a strong crucible (Vajra moosai). Heat it in furnace and dip it in horse’s urine for 7 times to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மரகதத்தைச் சிறுபூளைச் சாற்றிலரைத்து வில்லை செய்து உலர வைத்துக் கொண்டு, பின்பு அதன் வேரை அரைத்து மூசை செய்து அதனில் இட்டுச் சீலை செய்து, பத்து எருவில் புடமிடுக. இங்ஙனமே ஏழு புடமிடுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Maragatham with Sirupeelai juice (<i>Aerva lanata</i>). Then make it into pellets (villai) and dry it. Place these pellets into the Moosai which is made of Sirupeelai root paste. Lute it and incinerate (pudam) it with 10 cow dung cakes. This process is done for 7 times to get the purified Maragatham.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'maanikkam': {
	    'tn': 'மாணிக்கம்',
	    'en': 'RUBY ',
		'nam': '(MAANIKKAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> மாணிக்கத்தை குதிரை மூத்திரத்தில் மூன்று நாள் ஊற வைத்து, மூன்று நாள் வெயிலில் காய வைத்துப் பிறகு வெந்நீரில் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Maanikkam in Horse\'s urine for 3 days. Then insolate it for 3 days and rinse it with hot water to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மாணிக்கத்தை உலையிலிட்டு ஊதிச் சூடேற்றி வெள்ளாட்டுப் பாலில் ஆறு முறை தோய்த்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Maanikkam in furnace and dip it in goat’s milk for 6 times to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மாணிக்கத்தை அப்பிரகத் தகட்டின் மீது வைத்து சாராயம், கவுஸ்பான் தீநீர், பன்னீர், காடி இந்நான்கையும் சமபாகம் சேர்த்து, அந்நீரைக் கொண்டு பன்னிரெண்டு மணி நேரம் சுருக்கிட சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Prepare a liquid concoction by mixing equal amounts of Arrack, Kavusbaan Theeneer, Rose water and Vinegar (Kaadi). Place the Maanikkam on a Mica plate and burn it by adding small quantity of this liquid concoction periodically (Surukku koduthal process) for 12 hours (4 Saamam) to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மாணிக்கத்தைக் கறுப்புப் பெண் குதிரை மூத்திரத்தில் ஊறப் போட்டு, மூன்று நாள் சூரிய புடம் வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Maanikkam in black mare’s urine and insolate it for 3 days to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மாணிக்கத்தை ஓட்டிலிட்டுச் சிவக்கக் காய்ச்சி வெள்ளாட்டுப் பாலில் அக்கற்களைத் தள்ளுக. இங்ஙனமே ஏழு முறை காய்ச்சிக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Maanikkam to attain red hot in an earthen ware and drop it in goat’s milk. The same process is done for 7 times to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மாணிக்கத்தை வெள்ளாட்டு மூத்திரத்தில் மூன்று நாட்கள் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Maanikkam in goat’s urine for 3 days to get the purified gem.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'muthu': {
	    'tn': 'முத்து',
	    'en': 'PEARL ',
		'nam': '(MUTHU)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> முத்தை எலுமிச்சம் பழச்சாற்றிலும், காடியிலும் ஒரு நாள் ஊற வைத்து எடுத்து, நீர் விட்டுக் கழுவி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா </p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Muthu separately in lemon juice and vinegar (Kaadi), each for one day. Then wash it with water.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் (1 பலம்) முத்திற்கு, புளித்த பசுவின் தயிர் 105 கிராம் (3 பலம்) விட்டு சூரிய புடம் வைக்க வேண்டும். இவ்விதம் மூன்று நாட்கள் தினமும் பசுவின் தயிர் 105 கிராம் வீதம் விட்டு சூரிய புடம் வைத்து, அதன் பின்பு மேற்படி முத்திற்குத் தயிர் விடாமல் இரண்டு நாள் காய வைத்து உலர்த்த வேண்டும். இவ்விதம் மீண்டும் இரு முறை செய்து உலர்ந்த பின் நன்றாய் உலர்த்திக் கழுவி எடுத்துக் கொள்வதே முத்திற்கு சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Pour  105 g of fermented curd to 35 g of Muthu. Insolate it for 3 days with fresh curd being added on each day. Then  dry it in sunlight without adding curd for next two days. The same process is repeated for two more times. Dry it and rinse it off well.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சங்கம் பழச்சாறு அல்லது பொன்னாம் பழச்சாறு (நெய்க்கொட்டான்) அல்லது புளிக்குழம்பு இவற்றில் யாதேனும் ஒன்றில் முத்தை இரண்டு நாள் ஊற வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Muthu in Sangam fruit juice (<i>Azima tetracantha</i>) or Ponampazha juice (Neikottan) (<i>Sapindus trifoliatus</i>) or Puli Kuzhampu for 2 days to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> முத்தை ஊமத்தங்காய் இரசத்தில் ஒரு நாள் ஊற வைத்து, மறுநாள் சுத்த நீரில் கழுவி, பின்பு புளியிலைச் சாற்றில் ஒரு நாள் ஊற வைத்து, மறுநாள் அதைச் சுத்த நீரில் கழுவி வெயிலில் உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Muthu in unripe fruit juice of Oomathai (<i>Datura metal</i>) for one day. On the next day, wash it in pure water. Soak it again with Tamarind leaf juice for one day. Then rinse it off with pure water and dry it under sunlight</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> முத்தை சங்கம் பழ ரசத்திலேனும், புளியம் பழச்சாற்றிலேனும் மூன்று நாள் ஊற வைத்தெடுக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Muthu in Sangam fruit juice (<i>Azima tetracantha</i>) or tamarind fruit juice for 3 days to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> முத்தை சங்கம்பழச்சாற்றில், பூவந்திப்பழச்சாற்றில், இளநீரில் மூன்று நாட்கள் ஊற வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள் </p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Muthu in Sangam fruit juice (<i>Azima tetracantha</i>), Poovandhi fruit juice (<i>Sapindus trifoliatus</i>) and Tender coconut water separately for 3 days to get the purified gem.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> முத்தை நெய்கொட்டான் பழத்திலாவது, புளியாரைத் தண்ணீரிலாவது இரண்டு நாட்கள் ஊறப் போட்டால் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Muthu for 2 days in Neikottan fruit juice (<i>Sapindus trifoliatus</i>) or puliaarai juice (<i>Oxalis corniculata</i>) to get the purified gem.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> முத்தை 24 மணி நேரம் வரை, பசுவின் தயிரில் ஊற வைத்து, வெயிலில் காய வைத்து, நல்ல தண்ணீரில் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Muthu in cow’s curd for 24 hours. Insolate it and wash it in fresh water.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  }]
	  },
	  'vaiduriyam': {
	    'tn': 'வைடூரியம்',
	    'en': 'CAT\'S EYE ',
		'nam': '(VAIDURIYAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> குதிரை, பசு, கழுதை (தேசி) இவைகளின் நீர்களொன்றில் வைடூரியத்தை ஒரு நாள் ஊற வைத்தெடுத்து, சாம்பல் பூசணிக்காய்ச் சாற்றில் ஒரு நாள் ஊற வைத்து, வெந்நீர் விட்டுக் கழுவி எடுக்கச் சுத்தியாகும்.  </p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Vaiduriyam in urine of cow or horse or donkey for one day. Then soak it in ash-colored pumpkin juice (<i>Cucurbita alba</i>) for one day. Later wash it with hot water to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வைடூரியத்தைக் கறுப்புப் பெண் குதிரை மூத்திரத்திலும் பூசணிக்காய்ச் சாற்றிலும் தனித்தனியே ஒவ்வொரு நாள் ஊற வைத்தெடுக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Vaiduriyam separately in black mare’s urine and pumpkin’s juice, each for one day to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வைடூரியத்தை ஆனை மலத்தில் நனைத்து ஒரு பானையில் கழுதை மூத்திரம் வார்த்து அதில் தோலாயந்திரமாகக் கட்டி மூன்று மணி நேரம் எரியிடச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Dip the Vaiduriyam in elephant’s feces and burn it by hanging it as Tholayanthiram in a pot of donkey’s urine for 3 hours to get the purified gem.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'diamond': {
	    'tn': 'வைரம்',
	    'en': 'DIAMOND',
		'nam': '(VAIRAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வைரத்தைப் பெண் குதிரை நீரில் மூன்று நாள் ஊற வைத்து, வெயிலில் உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Vairam for 3 days in mare’s urine. Then dry it under sunlight to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வைரத்தை எலுமிச்சம் பழத்தினுள் வைத்து அகத்தியிலைச் சாற்றில் வேக வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Stuff the Vairam inside a lemon. Then boil it in Agathi leaf juice (<i>Sesbania grandiflora</i>) to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கண்டங்கத்திரி வேரை இடித்துச் சாறு பிழிந்து அதில் வைரத்தை நன்றாக ஊற வைத்து, கொள்ளு, தினை, அரிசி இவைகளைத் தூள் செய்து காய்ச்சிய கஞ்சியில் மூன்று நாள் தோலாயந்திரமாக பாகம் செய்ய வைரம் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Vairam in juice squeezed from Kandangattari root (<i>Solanum surattense</i>). Later subject it to Tholayanthiram for 3 days in porridge made from powders of horse gram (<i>Macrotyloma uniflorum</i>), Foxtail millet (<i>Setaria italica</i>) and rice to get the purified gem.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> வைரத்தை வெள்ளாட்டு மூத்திரத்தில் போட்டுக் காய்ச்சி எடுக்க அல்லது பிரண்டைச் சாற்றில் வைரத்தை ஊறப் போட்டெடுக்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Vairam in goat’s urine (or) Soak the Vairam in Priandai juice (<i>Cissus quadrangularis</i>) to get the purified gem.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'abrakam_mica': {
	    'tn': 'அப்பிரகம்',
	    'en': 'ABRAKAM ',
		'nam': '(MICA)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> அப்பிரகம் ஒரு பங்கிற்கு, எட்டு பங்கு அகத்திப்பூச் சாறெடுத்துக் கடத்திலிட்டு, அப்பிரகத்தை அச்சாற்றில் மூன்று நாட்கள் ஊற வைத்தெடுத்து, பின்பு முன் போலவே புளித்த கழுநீரிலும், எருக்கம் பூச்சாற்றிலும் மும்மூன்று நாட்கள் ஊற வைத்துக் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Abrakam in 8 parts of flower juice of Agathi (<i>Sesbania grandiflora</i>) by volume for 3 days. Again soak it in rice washed filtrate and flower juice of Erukku (<i>Calotropis gigantea</i>) separately for three days and rinse it off to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> அப்பிரகத்தை 3 நாட்கள் புளிப்பு மோரில் ஊற வைத்து, பொடி செய்து, மறுபடியும் காடி நீரில் 3 நாட்கள் ஊற வைத்து, ஒரு சட்டியின் வாய்க்கு துணி கட்டி, அதன் மீது பொடியை வைத்து, அதற்கு ½  பங்கு நெல் சேர்த்து, நீராகாரம் விட்டு கொஞ்சம் கொஞ்சமாகப் பிசைந்து வடிகட்ட, அப்பிரகப்பொடி நீரோடு கலந்து சட்டியில் இறங்கும். பிறகு அதைத் தெளிய வைத்து நீரை ஊற்றி விட அடியில் வெண்ணெய் போல் தங்கும். அதை எடுத்து உலர்த்திக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Abrakam in butter milk for 3 days and powder it. Again soak it in vinegar (Kaadi) for 3 days. Tie a cloth over the mouth of a pot, place the Abrakam powder and ½ part of paddy on it and filter it by kneading the mixture with fermented rice water (Neeragaram).The fine particles of Abrakam will be settled in the bottom of the pot like butter. Take the creamy portion and dry it to get the purified form. </p><p class="nubi">The Siddha Formulary of India</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அப்பிரகத்தைக் காடியில் ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Abrakam in vinegar (Kaadi) to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> ஒரு பலம் (35 கிராம்) அப்பிரகப் பொடிக்கு, எருக்கு சமூலச்சாறு ஐந்து பலமும் (175 மி.லி), பொடித்து வஸ்திரகாயம் செய்த செங்கல் சிட்டப்பொடி ஒரு பலமும் (35 கிராம்) சேர்ந்த ஆறு பலத்தை (210 கிராம்) விட்டுக் காலை முதல் மாலை வரை வெயிலில் வைக்க வேண்டும். இவ்விதம் பத்து நாட்கள் வரை ஒவ்வொரு நாளும் செய்ய வேண்டும். பிறகு இரண்டு நாட்கள் சாறு விடாமல் உலர்த்தி மீண்டும் முன் போலவே ஒரு முறை செய்து எருக்கின் சாறு 67 பலம் (2.4 லிட்டர்), சிட்டப்பொடி 13 பலம் (455 கிராம்) சேர்ந்த 80 பலத்தை (2,800 கிராம்), அப்பிரகத்துக்குச் சேர்த்து சட்டி கொண்டு மூடி சீலை செய்து ஒரு கஜ சதுரக்குழி தோண்டி, அதில் ஒன்றரை அடி (அரை கஜ) அளவு சாம்பலைக் கொட்டி அதன் மேல் சட்டியை வைத்து அக்குழி நிறைய சாம்பலைக் கொட்டி மூடி விடவும். இருபது நாட்கள் சென்ற பின் எடுக்க வேண்டும். அதன் ஆவியால் வெப்பம் மேலேறி அதிக வேகமுள்ளதாய் இருக்கும். பிறகு கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> To 35 g of Abrakam powder, add 175 ml of Erukku Samoola juice (<i>Calotropis gigantea</i>) and 35 g of cloth sieved brick powder and insolate it for a day. Perform this for 10 days. Then insolate it without adding liquids for next 2 days. Repeat this process for one more time. Take 67 balam (2,345 ml) of Erukku Samoola juice (<i>Calotropis gigantea</i>), 13 balam (455 g) of Brick powder and the processed Abrakam in a pot. Close it with pot and lute it. Then make a pit in the ground of 3 feet depth (1 Kaja Sathuram). Fill half of it with ash, place the luted apparatus in it and finally fill the pit with ash. Take it after 20 days and rinse it off to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அப்பிரகத்தை நன்கு சிவக்கக் காய்ச்சி, பசுவின் நீரில் ஏழு முறை தொடர்ந்து தோய்க்கவும். அதனை மிக நுண்ணியதாகப் பொடித்துச் சொர சொரப்பான நெல்லுடன் சேர்த்து, ஒரு துணியில் முடிச்சுக் கட்டி முடிந்து, காடி நிறைந்துள்ள ஒரு கண்ணாடிப் பாத்திரத்தில் ஊற வைக்கவும். நன்கு ஊறிய பின்னர், முடிச்சை வெளியே எடுத்து, நன்றாக அழுத்திப் பிசைந்து காடியையும், நுண்ணிய அப்பிரகத் துணுக்குகளையும் முடிச்சு வழியே வெளியேற்றி காடியில் விழச் செய்யவும். மீண்டும், மீண்டும் இப்படியே செய்து, அப்பிரகம் முழுவதையும் துணி வழியே வெளியேற்றிக் காடியில் விழச் செய்து, அடியில் படிய விடவும். பின்னர் பாத்திரத்தைச் சாய்த்து, காடியை மட்டும் வெளியேற்றிவிட்டு, மீதமுள்ள அப்பிரகத்தை குளிர்ந்த நீரில் கழுவி உலர்த்தவும். இந்நிலையில் இது வெண்ணெய் போன்று தோற்றமளிக்கும். இதற்கு <b>அப்பிரக வெண்ணெய்</b> அல்லது <b>அப்பிரக நவநீதம்</b> என்று பெயர். ஆயுர்வேதத்தில் இதனை <b>தான்யாப்பிரகம்</b> என்றழைப்பர். அப்பிரகம் மிகவும் எளிதில் மடியாததாகும். எனவே இதனை நன்கு மடியச் செய்வதற்காக அப்பிரகத்தை வெண்ணெய் போலச் செய்து எடுத்துக் கொள்வதையே சுத்தி என்றழைப்பர்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Abrakam and dip it in cow’s urine for 7 times. Powder and bundle it in a cloth with paddy. Soak this in a glassware of vinegar (Kaadi). After it soaks well, squeeze the bundle gently to drop the Abrakam into vinegar (Kaadi). Repeat this process untill all the Abrakam settles down. Then separate the vinegar (Kaadi), rinse the sedimented Abrakam with cold water and dry it. The resultant creamy portion is called as  <b>“Abraka Vennai”</b> or <b>“Abraka Navaneetham”</b> or <b>“Thaanya Abrakam”</b>.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> எருமைச் சாணச்சாற்றில் அப்பிரகத்தைப் போட்டு எரித்துக் கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Abrakam in buffalo dung juice and rinse it off to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> 1.3 லிட்டர் அப்பிரகத்தை 3.9 லிட்டர் பசு நீரில் இட்டுக் காய்ச்ச வேண்டும். பசு நீர் 1.3 லிட்டராகச் சுருங்கிய பின்னர், 2.6 லிட்டர் மீண்டும் பசு நீரை விட்டு பின் வேக வைக்க வேண்டும். சுனை நீரில் கிழிகட்டிச் சேர்த்து புளித்த காடியில் கழுவி எடுத்துக் கொள்ள அப்பிரகம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil 1.3 liters of Abrakam in 3.9 liters of cow’s urine. After the urine gets reduced to 1.3 liters, add 2.6 liters of cow’s urine to it and continue boiling. Add the bundled Abrakam to mountain pond water (Sunai neer) and rinse it off with sour vinegar (Kaadi) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அப்பிரகத்தை ஓட்டில் வைத்துக் காய்ச்சவும். பின் அதை வெள்ளைப்பசுவின் பாலில் தோய்த்து காடியில் முக்கால் மணி நேரம் ஊற வைக்கவும். பின்பு எலுமிச்சம் பழச்சாற்றில் இரண்டு தினம் ஊற வைக்கவும். தானியத்தில் பத்து நாட்கள் ஊற வைத்து, காடி தெளித்திடிக்கவும். பின் இடித்த தூளை புதுத்துணியில் தூவி நெல்லு போட்டு மெத்திட்டு காலாலே தேய்க்க பொடி உதிர்ந்துவிடும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Abrakam in an earthen ware, dip it in white cow\'s milk and soak it in vinegar (Kaadi) for 45 minutes. Then immerse it in lemon juice for 2 days and stuff it into grains for 10 days. Then triturate it by sprinkling vinegar (Kaadi). Spread the powdered Abrakam over the cloth, smash it along with paddy and gently rub it with sole to sieve out the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அப்பிரகத்தை வெண்ணெய் போல செய்து கொள்வதையும் சுத்தி என்பர். அப்பிரகத்தை மூன்று நாள் மோரில் ஊற வைத்தெடுத்து இடித்துப் பொடியாக்கி ஒரு கலத்தின் வாயில் துணி விரித்துக் கட்டி அதில் அப்பிரகப் பொடியைப் போட்டு அதற்கு தக்க அளவு நெல்லையும் போட்டு சோறு வடித்த நீர் சிறிது சிறிதாக விட்டுப் பிசைய அப்பிரகப்பொடியும் வடிநீரும் கலத்தினுள் சேரும். இதைத் தெளிய வைத்து நீரை இறுத்து விட்டு அப்பிரகத்தை எடுத்துக் கொள்ள வேண்டும். இது அப்பிரக வெண்ணெய் அல்லது அப்பிரக நவநீதம் அல்லது தானியாப்பிரகம் என்று சொல்லப்படும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Abrakam in butter milk for 3 days and triturate it. Tie a cloth on mouth of a pot, place the Abrakam and required amount of paddy on it and knead it by adding rice boiled water. On kneading, the blended Abrakam and rice boiled water will be settled in the bottom of the pot like cream. Take the creamy portion and dry it to get the purified form. The resultant creamy portion is called as  “Abraka Vennai” or “Abraka Navaneetham” or “Thaanya Abrakam”.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		  }]
	  },
	  'annabethi_ferrous_sulphate': {
	    'tn': 'அன்னபேதி',
	    'en': 'ANNABEDHI ',
		'nam': '(FERROUS SULPHATE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> அன்னபேதியை நீரில் கரைத்து சிறிதளவு கந்தகத் திராவகம் விட்டு வடிகட்டி உப்பு உறையும் பக்குவத்தில் காய்ச்சிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Annabedhi in water and add a little sulphuric acid to it. Filter it and boil it until the salt crystallizes.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> அன்னபேதியைப் புது ஓட்டிலிட்டுச் சிவக்க வறுத்தெடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Roast the Annabedhi till it attains redness in a new earthen ware to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> அன்னபேதியை நீரில் கரைத்து கந்தகப்புளிப்பு சிறிது விட்டு வடிகட்டிக் காய்ச்சி குழம்பு பக்குவத்தில் இறக்கி உலர விட்டெடுக்கச் சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Annabedhi in water and add a little Diluted Sulphuric acid (Kandhagapulippu) to it. Filter it, heat it to attain thick consistency and dry it effectively.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		  }]
	  },
	  'kabari': {
	    'tn': 'கபரி',
	    'en': '',
		'nam': 'KABARI',
		'data': [{
		  'tn': '<p>கபரியைப் பொடி செய்து சீலையில் முடிந்து நாய் மூத்திரத்தில் ஏழு சாமம் எரித்தெடுக்க  சுத்தியாகும் அல்லது கோநீரில் கபரியை ஊற வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Bundle the powdered Kabari in a cloth and burn this in dog’s urine for 21 hours (7 Saamam) to get the purified form (Or) This bundle can be soaked in cow’s urine to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'kappa_thutham': {
	    'tn': 'கப்பா துத்தம்',
	    'en': '',
		'nam': 'KAPPA THUTHAM',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கப்பா துத்தத்தைப் பொடி செய்து சீலையில் கட்டி அமுரியில் இருபத்தொரு மணி நேரமும், பசுவின் கோமியத்தில் ஆறு மணி நேரமும் தோலாயந்திரமாக எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Kappathutham powder and burn it  in human\'s urine for 21 hours and then in cow\'s urine for 6 hours by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கரண்டியிலே நெய் வார்த்து கப்பாப்பொடியை வைத்து ஏழு முறை பொங்க வைக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Mix the Kappathutham powder and ghee in a ladle. Heat it untill it effervesces and perform it for 7 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'kalnaar_asbestos': {
	    'tn': 'கல்நார்',
	    'en': 'KALNAAR ',
		'nam': '(ASBESTOS)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சிறு சிறு துண்டுகளாக உடைத்த கல்நாரை, பசுவின் நீரில் பத்து நாட்களுக்கு ஊற வைத்துக் கழுவி எடுத்துக் கொள்ளவும். தினமும் புதிய சிறுநீரையே உபயோகிக்க வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak small pieces of Kalnaar in cow\'s urine for 10 days to get the purified form. (Use fresh urine for each day)</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கல்நாரைக் கழுதை நீரில் மூன்று நாழிகை வாட்டிக் கழுவி எடுத்துப் பிறகு வெயிலில் காய வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Kalnaar with donkey’s urine for 72 minutes (3 Naazhikai) and insolate it to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கல்நாரைக் கோங்கிலவம் பட்டைச் சாற்றில் ஒரு சாமம் ஊறப்போட்டு எடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Kalnaar in bark juice of Kongilavam (<i>Cochlospermum religiosum</i>) for 3 hours (1 Saamam) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கல்நாரைக் கழுதை மூத்திரத்தில் மூன்று நாழிகை (72 நிமிடங்கள்) ஊற வைத்துக் கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Kalnaar in donkey’s urine for 72 minutes (3 Naazhikai) and wash it effectively to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  }]
	  },	
	  'kalmatham_erythrite': {
	    'tn': 'கல்மதம்',
	    'en': 'KALMATHAM ',
		'nam': '(ERYTHRITE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கல்மதத்தைச் செங்கழுநீர் கிழங்குச் சாற்றில் இரண்டு நாள் ஊற வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Kalmatham in root tuber juice of Sengazhuneer (<i>Nymphaea alba</i>) for 2 days to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கல்மதத்தைச் சிறுநீரில் போட்டு ஊற வைத்து கழுவி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Kalmatham in urine and rinse it off effectively to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சிறு சிறு துண்டுகளாக உடைத்த கல்மதத்தை, பசு நீரில் பத்து நாட்களுக்கு ஊற வைத்துக் கழுவி எடுத்துக் கொள்ளவும். தினமும் புதிய சிறுநீரையே உபயோகிக்க வேண்டும். சிலர் கோமூத்திரத்திற்குப் பதில், கழுதை மூத்திரத்தைப் பயன்படுத்தியும் சுத்தி செய்வர்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Soak small pieces of Kalmatham in cow\'s urine for 10 days to get the purified form. (Use fresh urine for each day and Donkey\'s urine can be used instead of cow\'s urine in this process)</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  }]
	  },
	  'karchunnambu_lime_stone': {
	    'tn': 'கற்சுண்ணாம்பு',
	    'en': 'KARCHUNNAMBU ',
		'nam': '(LIME STONE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சுட்ட சுண்ணக்கல்லுக்கு இளநீர் அல்லது பசு மோர் விட்டு, தாளித்து, கரைத்து, சீலையில் வடிகட்டிக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Slake the Quick lime (Sutta Sunnaakkal) with tender coconut water or cow\'s butter milk. Then dissolve it and filter it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கற்சுண்ணத்திற்கு நீர் விட்டு தாளித்து எடுத்துச் சலித்துக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Slake the Karchunnambu with water and sieve it well to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்சுண்ணத்தை வேலிப்பருத்திச் சாறுவிட்டுத் தாளித்து எடுக்கலாம்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Slake the Karchunnambu with Veliparuthi juice (<i>Pergularia daemia</i>) to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		  }]
	  },
	  'karpoora_silasathu_foliated_gypsum': {
	    'tn': 'கற்பூர சிலாசத்து',
	    'en': 'KARPOORA SILASATHU ',
		'nam': '(FOLIATED GYPSUM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கற்பூரசிலாசத்தை இளநீர் அல்லது பாலிலிட்டு காய்ச்சி, கழுவி எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Boil the Karpoorasilasathu in tender coconut water or milk and rinse it off thoroughly to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சிலாசத்தை பழச்சாற்றிலிட்டு காய்ச்சி உலர்த்தி பின்பு எருக்கம் பாலில் இரண்டு நாட்கள் ஊற வைத்தெடுத்து கழுவிக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Karpoorasilasathu in lemon juice and dry it. Then soak it in the latex of Erukku (<i>Calotropis gigantea</i>) for 2 days and rinse it off to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்பூர சிலாசத்தைக் கற்றாழைச்சாற்றில் 3 மணி நேரம் ஊற வைத்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Karpoorasilasathu in Aloe vera juice for 3 hours to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்பூர சிலாசத்தைக் கற்றாழைச்சாற்றில் ஒரு சாமம் (3 மணி நேரம்) அரைத்துச் சூரியனில் உலர்த்தி எடுக்க சுத்தியாகும்.</p><p class="nubi"> சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Karpoorasilasathu with Aloe vera juice for 3 hours (1 Saamam) and insolate it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சிறு சிறு துண்டுகளாக உடைத்த கற்பூர சிலாசத்தை பூநீறு கரைத்த தெளிநீரும், சுண்ணாம்புத் தெளிநீரும் சம அளவாகக் கலந்த கலவையில் நான்கு மணி நேரம் கொதிக்க வைத்துக் கழுவி எடுத்து நன்கு உலர்த்த சுத்தியாகும்.</p><p class="nubi"> சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
			'en': '<p><span class="list-style-v1"></span> Equal quantities of supernatants of limestone water and fuller’s earth solution are mixed together.  Boil small pieces of Karpoorasilasathu in this liquid concoction for 4 hours, wash it and dry it effectively to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்பூரசிலாசத்தைப் பால் விட்டுக் காய்ச்சிக் கழுவி எடுக்கச் சுத்தியாகும். இவ்வாறே இளநீர், சுண்ணாம்புத் தெளிநீர் அல்லது பழச்சாற்றில் காய்ச்சி எடுத்துக் கொள்ளலாம்.</p><p class="nubi"> மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Karpoorasilasathu in milk and rinse it off to get the purified form. The same process can be performed with tender coconut water or lime water or lemon juice to purify Karpoorasilasathu.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> கற்பூரசிலையை நொறுக்கித் தூளாக்கி கிழியாகக் கட்டி தோலாயந்திரமாக ஆவின் பாலில் விட்டு, பால் வற்றும் வரை காய்ச்சி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi"> சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the powdered Karpoorasilasthu in a cloth and burn it in cow’s milk by hanging it as Tholayandhiram till all milk gets evaporated.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> தும்பைத் தண்டுத் தண்ணீர் அல்லது செங்கழுநீர்த்தண்டுத் தண்ணீரில் மத்திக்க கற்பூர சிலாசத்து சுத்தியாகும்.</p><p class="nubi"> சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Karpoorasilasathu in sap of Thumbai stem (<i>Leucas aspera</i>) or Sengazhuneer stem (<i>Nymphaea alba</i>) to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'kaavikkal': {
	    'tn': 'காவிக்கல்',
	    'en': 'KAAVIKKAL ',
		'nam': '(RED OCHRE)',
		'data': [{
		  'tn': '<p>காவிக்கல்லை இளநீரில் அரைத்துக் கரைத்து வடித்து தெளிய விட்டு அகலப் பீங்கான் தட்டுகளில் வார்த்து வெயிலில் வைத்து உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p>Grind and dissolve the Kaavikkal in tender coconut water. Filter it, allow it to settle down, take the precipitate in wide porcelain plates and dry it under sunlight to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam  600</p>',
		}]
	  },
	  'krishna_abrakam_black_mica': {
	    'tn': 'கிருஷ்ண அப்பிரகம்',
	    'en': 'KRISHNA ABRAKAM ',
		'nam': '(BLACK MICA)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கிருஷ்ண அப்பிரகத்தை வேண்டிய அளவுக்குக் காடியில் அரைத்துத் தெளிய வைத்து இறுத்து பின்பு கழுநீரில் கழுவி 10க்கு 1 பங்கு கொடிவேலி வேர் சேர்த்து அரைத்துக் குடுவையிலிட்டு வாய்மூடிச் சீலை செய்து புடமிடவும்.	</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Grind the Krishna Abrakam with vinegar (Kaadi) and allow it to precipitate. Wash the precipitate with rice washed filtrate (Kazhuneer). To 10 parts of the processed Krishna Abrakam, add 1 part of root of Kodiveli (<i>Plumbago indica</i>). Grind it, lute it and incinerate it to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கிருஷ்ண அப்பிரகத்தை கஞ்சியிலும் காடியிலும் மூன்று முறை காய்ச்சித் தோய்க்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Heat the Krishna Abrakam and dip it separately in porridge and vinegar (Kaadi) for three times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'komoothira_silasathu': {
	    'tn': 'கோமூத்திர சிலாசத்து',
	    'en': '',
		'nam': 'KOMOOTHIRA SILASATHU',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கோமூத்திர சிலாசத்தை வெந்நீரில் கலந்து அழுத்தமான துணி அல்லது கம்பளியிலிட்டு வடிகட்டி வெயிலில் வைக்கவும். இதன் மேல் கட்டும் ஆடையை வழித்து உலர்த்திக் கொள்ளவும். ஆடை கட்டாதிருக்கும் வரை இதைச் செய்ய வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Komoothira Silasathu in hot water, filter it through a thick cloth or woolen blanket and insolate it. Skim it and dry it. Repeat this process until the upper stratum formation ceases.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கோமூத்திரத்தை  பசு மூத்திரத்தில்  கலந்து அழுத்தமான துணி அல்லது கம்பளியிலிட்டு வடிகட்டி வெயிலில் வைக்கவும். இதன் மேல் கட்டும் ஆடையை வழித்து உலர்த்திக் கொள்ளவும். ஆடை கட்டாதிருக்கும் வரை இதைச் செய்ய வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Komoothira Silasathu in cow’s urine, filter it through a thick cloth or woolen blanket and insolate it. Skim it and repeat this process until the upper stratum formation ceases.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பசும்பால், திரிபலைக் குடிநீர், கரிசாலைச்சாறு இவைகளில் ஏதாவது ஒன்றைக் கோமூத்திர சிலாசத்துக்கு விட்டு, ஒரு நாள் முழுதும் அரைத்து உலர்த்தி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Komoothira Silasathu with cow’s milk or Thiripala decoction or juice of Karisaalai (<i>Eclipta prostrata</i>) for one day and dry it effectively to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  }]
	  },
	  'saathirabedhi': {
	    'tn': 'சாத்திரபேதி',
	    'en': '',
		'nam': 'SAATHIRABETHI',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சாத்திரபேதியை நாரத்தங்காய் சாற்றில் ஊற வைத்து எடுத்துக் கொள்ளவும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Saathirabedhi in unripe fruit juice of Narattai (<i>Citrus aurantifolia</i>) to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> சாத்திரபேதியைச் சீலையில் முடிந்து நெருப்பனலில் சுட்டெடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Saathirabedhi in a cloth and grill it in fire to get the purified form. </p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'thutham': {
	    'tn': 'துத்தம்',
	    'en': '',
		'nam': 'THUTHAM',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> துத்தத்தைப் பொடி செய்து, தனித்தனி முடிச்சு கட்டி ஒரு பானையில் சுண்ணாம்பு நீர் விட்டுத் தோலாந்திரமாக எரிக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Thutham powder and burn it in lime water by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> துத்தத்தை வெளுக்க வறுத்துக் கொள்ள சுத்தியாகும் அல்லது துத்தத்தைத் தயிரிலரைத்து அடை தட்டி, ஓட்டில் வைத்துக் காய்ச்சி எடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Fry the Thutham until it turns white to get the purified form (or) Grind the Thutham with curd and make it into a patty. Heat this patty in an earthen ware to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துத்தத்தைத் தாய்ப்பாலில் பன்னிரெண்டு மணி நேரம் ஊறப்போட சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thutham in breast milk for 12 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துத்தத்தை பசு நீர், காடி, தேன் இவற்றில் விட்டுப் பொங்கக் காய்ச்சி ஊற்றவும். இப்படி இருபத்தொரு முறை செய்ய சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Thutham in cow\'s urine, vinegar (Kaadi) and honey untill it uprushes. Perform this process for 21 times to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துத்தத்தை நொறுக்கி கிழிகட்டி அமுரியில் இருபத்தொரு மணி நேரமும், பசுவின் கோமியத்தில் ஆறு மணி நேரமும் தோலாயந்திரமாய் எரித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Thutham pieces in a cloth and burn it in human\'s urine for 21 hours and then in cow\'s urine for 6 hours by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'thurusu_cupric_sulphate': {
	    'tn': 'துருசு (மயில் துத்தம்)',
	    'en': 'THURUSU ',
		'nam': '(CUPRIC SULPHATE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தேவையான துருசை வெந்நீரில் கரைத்து வடிகட்டி சுண்டக் காய்ச்சி உப்பு கட்டினவுடன் எடுத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Thurusu in hot water, filter it and heat the filtrate till it solidifies.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> துருசைப் பசுவின் நீரில் கரைத்து வடிகட்டி எரித்துக் கழுவி எடுத்து வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Dissolve the Thurusu in cow\'s urine and filter it. Heat the filtrate, rinse it off and dry it under sunlight to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துருசை வெண்மையாகும் படி பொரித்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> Exsiccate the Thurusu untill it turns white to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துருசுக்குத் தேனும் நெய்யும் விட்டரைத்து மூசையிலிட்டுக் காய்ச்சி, பிறகு பால் முறித்து வடிகட்டிய நீரில் மூன்று நாள் ஊற வைத்து, உலர்த்தி எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Thurusu with honey and ghee and heat it in Moosai. Soak it in milk\'s whey for 3 days and dry it effectively to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துருசைப் பொடி செய்து தனித்தனி கிழிகட்டி, ஒரு பானையில் சுண்ணநீர் விட்டுத் தோலாந்திரமாக எரிக்க சுத்தியாகும் அல்லது வெளுக்க வறுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Thurusu powder and burn it in lime water by hanging it as Tholaayandhiram to get the purified form (or) Roast the Thurusu untill it turns white to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துருசைத் தயிரில் அரைத்து அடைதட்டி வரையோடு காய வைத்து அதில் புரட்டி எடுத்துக் கொள்ளவும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Thurusu with curd and make it as a patty. Heat this patty in an earthen ware to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பசு மூத்திரம், எருமை மூத்திரம், வெள்ளாட்டு மூத்திரம் இவற்றில் தோலாயந்திரமாக வைத்து வேக வைக்க மயில் துத்தம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Thurusu (Mayil Thuththam) separately in cow’s urine, buffalo’s urine and goat’s urine by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பசுவின் கோமியத்தில் துருசைக் கழுவி காய வைத்து எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Wash the Thurusu in cow’s urine and dry it completely to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துருசை எலுமிச்சம் பழச்சாற்றில் இரவு பன்னிரெண்டு மணி நேரம் ஊற வைக்க சுத்தியாகும். துருசு கரையும். கரையாத போது எலுமிச்சம் பழச்சாற்றில் மூன்று முறை கழுவி, உலர வைக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thurusu in lemon juice for 12 hours at night to get the purified form. </p><p><b>Note:</b> Usually Thurusu gets dissolved. If it is undissolved, it should be washed in lemon juice for 3 times. Finally dry it thoroughly.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> துருசைத் தயிரில் மூன்று மணி நேரம் ஊற வைத்து எடுக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Thurusu in curd for 3 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'nandukkal_fossil_stone_crab': {
	    'tn': 'நண்டுக்கல்',
	    'en': 'NANDUKKAL ',
		'nam': '(FOSSIL STONE CRAB)',
		'data': [{
		  'tn': '<p>கற்சுண்ணாம்பும் பூநீறும் சேர்த்துத் தெளிவெடுத்த நீரில் நண்டுக்கல்லை விட்டு மூன்று மணி நேரம் (1 சாமம்) எரித்து, நீர் சுண்டிய பின் எடுத்து நீரில் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Dissolve Fuller’s earth and lime stone in water. Burn the Nandukkal in the supernatant of this solution for 3 hours (1 Saamam). After the solution gets reduced, wash it well with water to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}]
	  },
	  'nimilai_pyrite': {
	    'tn': 'நிமிளை',
	    'en': 'NIMILAI ',
		'nam': '(PYRITE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> நிமிளையைப் பசுவின் பாலில் அல்லது முலைப்பாலில் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Nimilai in cow’s milk or breast milk to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> வாழைக்கிழங்கு நீரில் நிமிளையை இட்டு எரித்துக் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p><p><b>குறிப்பு: சாம்பல் மொந்தன் வாழைக்கிழங்கு விசேடமானது - சித்த மருந்து முறையியல், யாழ்ப்பாணம்</b></p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Nimilai in Plantain rhizome sap (<i>Musa paradisiaca</i>) and rinse it off to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p><p><b>Note:</b> It is best to use rhizome sap of ash coloured Stout Plantain (<i>Musa paradisiaca</i>) in this purification process - Siddha Pharmacopoeia, Jaffna.</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நிமிளையைத் தேனில் மத்தித்து, இரட்டை மடிப்பு முரட்டு சீலையில் முடிந்து, கொள்ளுச்சாறு, கோநீர், காடி இம்மூன்றிலும் தனித்தனியே ஒவ்வொரு நாள் கிழிகட்டி எரிக்க சுத்தியாகும். இத்தகைய சுத்தியே எல்லா நிமிளைக்கும் என்றறிக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Nimilai with honey and bundle it in two folded thick cloth. Burn this bundle in horse gram juice (<i>Macrotyloma uniflorum</i>), Cow\'s urine and Vinegar (Kaadi) separately for one day to get the purified form. This purification process is applicable for all types of Nimilai.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நிமிளையை முதலில் ஆடாதோடை இலைச்சாற்றில் தோலாயந்திரமாகக் கட்டி பன்னிரெண்டு மணி நேரம் வேக விடவும். பின்பு அதை எலுமிச்சம் பழச்சாற்றிலும், ஒதியம் பட்டைச் சாற்றிலும் தோலாயந்திரத்தில் எரிக்க சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Nimilai in leaf juice of Adathodai (<i>Justicia adhatoda</i>) for 12 hours by hanging it as Tholayandhiram. Then burn this in lemon juice and bark juice of Odhiyam  (<i>Odina wodier</i>) by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> நிமிளையைச் சிறிதாக இடித்துச் சீலையில் முடிந்து பசு நீர், காடி, வாழைத்தண்டு தண்ணீர் இவை ஒவ்வொன்றிலும் ஆறு மணி நேரம் எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Nimilai pieces and burn it separately in cow\'s urine, vinegar (Kaadi) and Plantain stem sap  (<i>Musa paradisiaca</i>) for 6 hours to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'pachchai_thutham': {
	    'tn': 'பச்சைத்துத்தம்',
	    'en': '',
		'nam': 'PACHCHAI THUTHAM',
		'data': [{
		  'tn': '<p>பச்சைத்துத்தத்தைத் தயிரின் மேல் நிற்கும் தெளிவுத்தண்ணீரில் அரைத்து புது ஓட்டில் சட்டி போலத் தட்டி இரண்டு புறமும் சுடப் பச்சைத்துத்தம் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p>Grind the Pachchai Thutham with curd’s whey and tap this on a new earthen lid to make it as patty. Bake this patty on both sides to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'pachchai_thurusu': {
	    'tn': 'பச்சை துருசு',
	    'en': '',
		'nam': 'PACHCHAI THURUSU',
		'data': [{
		  'tn': '<p>பச்சைத்துருசை பசுங்கோமியத்தில் எரித்துக் கழுவி உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p>Burn the Pachchai Thurusu in cow\'s urine, rinse it off and dry it effectively to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		}]
	  },
	  'padigam_quartz': {
	    'tn': 'படிகம்',
	    'en': 'PADIGAM ',
		'nam': '(QUARTZ)',
		'data': [{
		  'tn': '<p>படிகத்தைப் பச்சைப் பசும்பாலில் 7 நாள் ஊற வைத்தெடுத்துக் கொள்ள சுத்தியாகும். பிரதி தினமும் பழைய பாலை வடித்து விட்டுப் புதிதாக விட்டு வர வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Soak the Padigam in raw cow\'s milk for 7 days to get the purified form. Use fresh milk for each day.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'paal_thutham_white_vitriol': {
	    'tn': 'பால் துத்தம்',
	    'en': 'PAAL THUTHAM ',
		'nam': '(WHITE VITRIOL)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பால் துத்தத்தைப் பொடி செய்து துணியில் முடிந்து சுண்ணாம்பு நீரில் தோலாந்திரமாக எரித்துக் கொள்ளவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p><span class="list-style-v1"></span>  Bundle the powdered Paalthutham in a cloth and burn it in lime water by hanging it as Tholayanthiram to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பால் துத்தத்தை வெளுக்க வறுத்துக் கொள்ள சுத்தியாகும் அல்லது தயிரிலரைத்து அடை தட்டி, ஓட்டில் வைத்துக் காய்ச்சி எடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Roast the Paalthutham until it turns white or Grind the Paalthutham with curd and make it as a patty. Heat this patty in an earthen ware to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பால் துத்தத்தைக் கிழிகட்டி சிறுநீரில் போட்டு ஏழு நாள் ஊற வைத்தெடுத்துப் பசும்பாலில் இரண்டு சாமம் ஊற வைத்து பின்பு உலர்த்தி வைக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Paalthutham and soak it in urine for 7 days. Then soak it in cow\'s milk for 6 hours (2 Saamam) and dry it effectively to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பால் துத்தத்தைச் சிறுபிள்ளை நீரிலும், பசுவின் நீரிலும் ஊற வைத்து உலர்த்தி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Paalthutham separately in child\'s urine and cow\'s urine and dry it well to get the purified form.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பால் துத்தத்தைப் பொடியாக்கி இரட்டை மடிப்புச் சீலையில் முடிந்து கொள்ளவும். பின் சுண்ணாம்புத் தண்ணீரில் தோலாயந்திரமாகக் கட்டி நாற்பத்தெட்டு மணி நேரம் இரு விறகால் எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Bundle the Paalthutham powder in a two folded cloth and hang it into lime stone water as Tholayandhiram. Burn this with two fire woods for 48 hours to get the purified form</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பால் துத்தத்தைப் பசுவின் சிறுநீரிலும், சிறு குழந்தையின் சிறுநீரிலும் கொதிக்க வைத்து எடுத்து கழுவி உலர்த்தவும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Paalthutham separately in cow\'s urine and child\'s urine, rinse it off well and dry it completely to get the purified form.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  }]
	  },
	  'ponnimilai_chalco_pyrite': {
	    'tn': 'பொன்னிமிளை',
	    'en': 'PONNIMILAI ',
		'nam': '(CHALCO PYRITE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பொன்னிமிளையை மூன்று நாள் காடியில் ஊறப்போட்டு எடுத்துப் பின்பு ஒரு படி அபிரேக்கைத் தூள் செய்து பசுவின் கோமியத்தில் போட்டுக் கலக்கி அதில் பொன்னிமிளையைப் போட்டு வேக வைத்தெடுத்துக் காடியில் ஊறப்போட்டு எடுத்துக் காய வைத்துக் கொள்ளச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the Ponnimilai in vinegar (Kaadi) for 3 days. Boil it in the mixture of Mica powder (1 padi) and cow\'s urine. Then soak it in vinegar (Kaadi) and dry it completely to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> நிமிளையைத் தேனில் மத்தித்து, இரட்டை மடிப்பு முரட்டு சீலையில் முடிந்து, கொள்ளுச்சாறு, கோநீர், காடி இம்மூன்றிலும் தனித்தனியே ஒவ்வொரு நாள் கிழிகட்டி எரிக்க சுத்தியாகும். இத்தகைய சுத்தியே எல்லா நிமிளைக்கும் என்றறிக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Churn the Nimilai with honey and bundle it in two folded thick cloth. Burn this bundle in horse gram juice (<i>Macrotyloma uniflorum</i>), Cow\'s urine and Vinegar (Kaadi) separately for one day to get the purified form. This purification process is applicable for all types of Nimilai.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மாட்சிகத்தைத் (பொன்னிமிளை) தேனில் அரைக்கவும். இரட்டை மடிப்பு முரட்டு சீலையில் முடிந்து, அதைப் பாம்பு பொந்திலே வைத்து உருட்டி வளைத்து கொள்ளு குடிநீர், பசு நீர், காடி இவற்றில் தனித்தனியாக பன்னிரெண்டு மணி நேரம் தோலாயந்திரமாகக் கட்டி எரிக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Grind the Ponnimilai with honey and bundle it in two folded thick cloth.  Burn this separately in horse gram decoction (<i>Macrotyloma uniflorum</i>), cow\'s urine and vinegar (Kaadi) for 12 hours by hanging  it as Tholayandhiram to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'madal_thutham_calamine': {
	    'tn': 'மடல் துத்தம்',
	    'en': 'MADAL THUTHAM ',
		'nam': '(CALAMINE)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> மடல் துத்தத்தை எருமைத் தயிரிலாவது அல்லது கற்றாழை சாற்றிலாவது கிழிகட்டி ஊற வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
		  'en': '<p><span class="list-style-v1"></span> Bundle the Madal thutham and soak it in buffalo\'s curd or Aloe vera juice by hanging it as Tholayandhiram to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மடல் துத்தத்தைச் சிறுநீர், குதிரை மூத்திரம், பசு மோர், காடி இவற்றில் முறையே ஒரு நாளைக்கு ஒவ்வொன்றில் வேக வைத்து கழுவச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Madal thutham separately in urine, horse\'s urine, cow\'s butter milk and vinegar (Kaadi) for one day and rinse it off to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> மடல் துத்தத்தை வெண்ணெய் அல்லது தயிர், கற்றாழைச்சாற்றில் ஊற வைத்து எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Madal thutham in butter or curd and Aloe vera juice to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		  }]
	  },
	  'vachira_abrakam': {
	    'tn': 'வச்சிர அப்பிரகம்',
	    'en': '',
		'nam': 'VACHIRA ABRAKAM',
		'data': [{
		  'tn': '<p>வச்சிர அப்பிரகத்தைக் கழுதை மூத்திரத்தில் அல்லது குதிரை மூத்திரத்தில் (3.9 லிட்டர்) மூன்று நாட்கள் ஊற வைத்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
		  'en': '<p>Soak the Vachira Abrakam in 3.9 liters of donkey’s urine or horse’s urine for 3 days to get the purified form.</p><p class="nubi">Sarakku Suththi Seimuraigal</p>',
		}]
	  },
	  'vellai_abrakam_white_mica': {
	    'tn': 'வெள்ளை அப்பிரகம்',
	    'en': 'VELLAI ABRAKAM',
		'nam': '(WHITE MICA)',
		'data': [{
		  'tn': '<p>வெள்ளை அப்பிரகத்தை உலையில் பழுக்கக் காய்ச்சி பாலில் போட்டு ஆறிய பின் இதழ் இதழாகப் பிரித்துச் சிறுகீரைச் சாற்றில் 1 நாள் (எட்டு சாமம்) ஊற வைத்து எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p>Heat the Vellai Abrakam in furnace and put it in milk. On cooling, separate the Abrakam layers and soak it in juice of Sirukeerai (<i>Amaranthus tricolor</i>) for 1 day (8 Saamam) to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		}]
	  },
	  'breast_milk': {
	    'tn': 'அமுதப்பால் (தாய்ப்பால்)',
	    'en': '',
		'nam': 'BREAST MILK',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> தாய்ப்பாலில் சிறிதளவு தும்பை மலரிட்டு வைத்து கால் நாழிகை (6 நிமிடங்கள்) சென்ற பின் வடிகட்டிக் கொள்ளலாம்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Add small amount of Thumbai flowers (<i>Leucas aspera</i>) in the Breast milk and filter it after 6 minutes (Kaal Naazhigai) to get the purified milk.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> நெருப்பனலில் சூடாக்கிய வெள்ளிக்கிண்ணத்தில், தாய்ப்பாலை விட்டு உடனே வடிகட்டிக் கொள்ளலாம்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span>  Pour the Breast milk in a heated Silver bowl and filter it immediately to get the purified milk.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  }]
	  },
	  'goat_milk': {
	    'tn': 'வெள்ளாட்டுப் பால்',
	    'en': '',
		'nam': 'GOAT’S MILK',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> வெள்ளாட்டுப் பாலை 7 முறை முரட்டுத் துணியால் வடிகட்டுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p> Filter the Goat’s milk through a thick cloth for seven times to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'cow_milk': {
	    'tn': 'பசும்பால்',
	    'en': '',
		'nam': 'COW’S MILK',
		'data': [{
		  'tn': '<p>கன்றுக்குட்டி பால் குடித்த பின் அதன் வாய்பட்ட வேகம் தணிய மடியை நீர் விட்டுக் கழுவிக் கறந்து பால் நுரை அடங்கிய பின் வடிகட்டிக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>The udder of cow should be rinsed with lukewarm water before milking it. After milking, allow the foam to subside and then filter it.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'curd': {
	    'tn': 'தயிர்',
	    'en': '',
		'nam': 'CURD',
		'data': [{
		  'tn': '<p>தயிரினின்று தோய்ந்த நீரைப் பிரித்து விலக்கி விட்டு, தயிரை மட்டும் எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Remove the whey from the Curd to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'butter_milk': {
	    'tn': 'மோர்',
	    'en': '',
		'nam': 'BUTTER MILK',
		'data': [{
		  'tn': '<p>மோரில் சிறிது சோற்றுப்பைக் கரைத்துக் கொள்ள மோர் சுத்தியாகும். அதிலுள்ள துவர்ப்பினால் தோஷமில்லை.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Dissolve a little Kariyuppu salt (Sodium chloride) in butter milk to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'butter': {
	    'tn': 'வெண்ணெய்',
	    'en': '',
		'nam': 'BUTTER',
		'data': [{
		  'tn': '<p> வெண்ணெயைத் தூய தண்ணீரில் புளிப்பறப் பிசைந்து பிசைந்து, கழுவி எடுத்து, உருட்டி எடுத்துக் கொள்ள வேண்டும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Knead the butter in pure water to get rid of sourness and then rinse it off to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'ghee': {
	    'tn': 'நெய்',
	    'en': '',
		'nam': 'GHEE',
		'data': [{
		  'tn': '<p>வெண்ணெயைப் பாண்டத்திலிட்டு உருக்கி, அதிலுள்ள நீர் வற்றும் வரை சுண்ட வைத்து எரித்தெடுத்து வடிகட்டிக் பக்குவத்தில் எடுத்து அடுப்பேற்றி அதிலுள்ள ஜலம் சுண்ட, நெய் காந்தாமல் காய்ச்சி வடிகட்டுக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Melt the butter, simmer it until the water evaporates and filter it to get the purified Ghee.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'ambar': {
	    'tn': 'அம்பர்',
	    'en': '',
		'nam': 'AMBAR',
		'data': [{
		  'tn': '<p>இதில் கல், மண், தூசி ஆகியன இருப்பின், அவற்றை எடுத்து நீக்கி விட வேண்டும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p>Exclude the impurites from Ambar to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna </p>',
		}]
	  },
	  'turtle_shell': {
	    'tn': 'ஆமை ஓடு',
	    'en': 'TURTLE SHELL ',
		'nam': '(AAMAI ODU)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பூநீறு, கற்சுண்ணாம்பு சமனெடை சேர்த்து அதற்கு எண்மடங்கு நீர் விட்டு கலக்கிக் கரைசலின் தெளிவெடுத்து, அதில் ஆமை ஓட்டைச் சிறு சிறு துண்டுகளாய் நறுக்கியிட்டு, எண்ணெய்க் கசிவு நீங்கும் வரை எரித்தெடுத்து, சுத்த நீரில் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Make a solution with equal amounts of lime stone and fuller\'s earth by adding 8 parts of water by volume. Add small pieces of turtle shell  to the supernatant of this solution and burn it until all the oily nature of the shells get removed. Take it after rinsing in clean water.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> ஆமை ஓட்டை நெருப்பு அனலில் சுட்டு எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Grill the Turtle shell in fire to get the purified form.</p><p class="nubi">Yagopu Chunna Kaandam 600  </p>',
		  }]
	  },
	  'indhirakoba_poochi': {
	    'tn': 'இந்திரகோபப் பூச்சி',
	    'en': 'INDHIRA KOBA POOCHI ',
		'nam': '(<i class="initial">Mutilla occidentalis</i>)',
		'data': [{
		  'tn': '<p>இந்திரகோபப் பூச்சியில் இருக்கும் தைலப்பசை போகா வண்ணம் படிக பாத்திரத்திலிட்டு உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Dry the Indhira Koba poochi by placing it in glass vessel which prevents the escape of essential oil from it.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		}]
	  },
	  'feathers': {
	    'tn': 'இறகுகள்',
	    'en': '',
		'nam': 'FEATHERS',
		'data': [{
		  'tn': '<p>இறகுகளைச் சிறு துண்டுகளாகக் கத்தரித்து, ஓட்டிலெரித்து அல்லது புடம் போட்டுக் கருக்கிக் கொள்வதே சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Cut the Feathers into small pieces and burn it in earthen vessel (or) char the feathers by incineration to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'bones': {
	    'tn': 'எலும்புகள்',
	    'en': '',
		'nam': 'BONES',
		'data': [{
		  'tn': '<p>பொடி செய்த 35 கிராம் (ஒரு பலம்) எலும்புத் தூளைப் புளித்த பசுவின் மோர் 105 கிராம் (மூன்று பலம்) வீதம் விட்டு சூரிய உதயம் முதல் சூரியன்  மறையும் வரை வெயிலில் வைக்கவும். இவ்விதம் ஒவ்வொரு நாளும் மேற்படி மோர் மும்மூன்று பலம் விட்டுச் சூரிய புடத்தில் ஐந்து நாட்கள் வைக்கவும். அதன் பின்பு மேற்படி மோர் விடாமல் இரண்டு நாட்கள் வெயிலில் வைத்து, ஈரமில்லாமல் நன்றாய் உலர்ந்த பின்பு நீர் விட்டுக் கழுவி உலர்த்திக் கொள்வதே எலும்பின் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>To 35 g (1 balam) of Bone powder, add 105 ml (3 balam) of sour butter milk of cow and insolate it for a day. Perform this process for 5 days with fresh fermented butter milk on each day. Allow it to dry completely for 2 days without adding butter milk. Wash the Bone powder with water and dry well.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'kadal_nurai': {
	    'tn': 'கடல் நுரை',
	    'en': '',
		'nam': 'KADAL NURAI',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கடல் நுரையில் கல், மண், தூசு ஆகியன இருப்பின், அவைகளைப் புடைத்து நீக்கி விடவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Exclude the dust particles from Kadal nurai to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கடல் நுரையினைக் கிளிஞ்சல் சுண்ணத்துடன் தாளித்துக் கழுவி எடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Slake the Kadal nurai in oyster shell lime (Kilinjal Chunnam) and rinse it off with water.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  }]
	  },
	  'deer_musk_kasturi': {
	    'tn': 'கஸ்தூரி',
	    'en': 'DEER MUSK ',
		'nam': '(KASTURI)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கஸ்தூரிக்குச் சுத்தியின்றேனும், இயற்கைச் சரக்கிற்கும் வைப்புச் சரக்கிற்கும் உள்ள வித்தியாசம் அறிந்து சேர்த்தல் நலம்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span>Kasturi should be chosen on examining the difference between real (natural) substance and fake (artificial) substance.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span><b>கஸ்தூரியைக் கண்டறியும் சோதனைகள்:</b></p> <ol><li>கஸ்தூரி சாதாரணமாய் பழுப்புடன் கூடிய கறுப்பு நிறத்தைப் பெற்றிருக்கும்.</li><li>உண்மைக் கஸ்தூரி தொடுதற்கு மிருதுவாயும் நெய்ப்பாயும் இருக்கும்.</li><li>கஸ்தூரியை நீரிலிட கரையாது இருந்தால் உண்மைப்பொருள் என்றும், கரைந்தால் கலப்பென்றும் அறியலாம்.</li><li>உண்மைக் கஸ்தூரியைப் புதைத்து வைத்தெடுத்தாலும் மணம் மாறாது.</li><li>கஸ்தூரியை நெருப்பிலிட உருகிக் குமிழிட்டால் உண்மைச் சரக்கென்றும், உருகாது கரிந்து உருக்குப் போலானால் கலப்பென்றும் அறியலாம்.</li><li>ஒரு நூல் கயிற்றைப் பெருங்காயத்திலிட்டு இழுத்துப் பிறகு கஸ்தூரியிலிட்டு இழுக்கப் பெருங்காயத்தின் மணம் இருந்தால் போலிச் சரக்கென்று தள்ளவும்.</li></ol><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>', 
			'en': '<p><span class="list-style-v1"></span><b>TESTS TO DETECT KASTURI:</b></p><ol><li>The real Kasturi is brownish black in color.</li><li>The real Kasturi is soft and greasy to touch.</li><li>The real Kasturi is insoluble in water.</li><li>The odour does not change even if you burry the real Kasturi.</li><li>The real Kasturi melts and bubbles in fire. If it burns and hardens, then is a fake substance.</li><li>Pull a thread through the Asafoetida and then pull on the Kasturi. If the thread emits the odor of Asafoetida, it indicates the fake Kasturi.</li></ol><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  }]
	  },
	   
	  'common_oyster_shell': {
	    'tn': 'கிளிஞ்சல்',
	    'en': 'COMMON OYSTER SHELL ',
		'nam': '(KILINJAL)',
		'data': [{
			'tn': '<p><span class="list-style-v1"></span>  கீழ்க்கண்ட திரவக்கலவையை ஒரு பாத்திரத்திலிட்டு அதில் 1 வீசை கிளிஞ்சலைப் போட்டு, அப்பாத்திரத்திற்கு வேடுகட்டி வெயிலில் வைத்து எடுக்கவும்.</p><div class="table-responsive"><table><thead><tr><th>நாள்</th><th>ஊற வைக்கும் கலவை</th><th>அளவு</th></tr></thead><tbody><tr><td>1-7 ஆம் நாள்</td><td>தமரத்தைச் சமூலச்சாறு <br /> காடி <br />மோர்</td><td>வகைக்கு 1 படி</td></tr><tr><td>8-14 ஆம் நாள்</td><td>செங்கழுநீர் சமூலச்சாறு<br /> காடி <br />மோர்</td><td>வகைக்கு 1 படி</td></tr><tr><td>15-21 ஆம் நாள்</td><td>மணத்தக்காளி சமூலச்சாறு<br /> காடி <br />மோர்</td><td>வகைக்கு 1 படி</td></tr></tbody></table></div><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak  1.4 kg (1 Veesai) of oyster shell in the following liquid concoctions and close the mouth of vessel with a cloth. Keep it under sunlight to the get purified form.</p><div class="table-responsive"><table><tr><th>DAYS</th><th>SOAKING LIQUID CONCOCTION</th><th>QUANTITY</th></tr><tr><td>1st day– 7th day</td><td>Juice of Thamaraththai (<i>Averrhoa carambola</i>) <br />Vinegar <br />Butter milk</td><td>Each 1.3 liters (1 Padi)</td></tr><tr><td>8th day-14th day</td><td>Juice of Sengazhuneer ( <i>Nymphaea alba</i> ) <br />Vinegar <br />Butter milk</td><td>Each 1.3 liters (1 Padi)</td></tr><tr><td>15th day - 21st day</td><td>Juice of Manathakkali (<i>Solanum nigrum</i>) <br />Vinegar <br />Butter milk</td><td>Each 1.3 liters (1 Padi)</td></tr></table></div><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கிளிஞ்சல்களை உவர்மண் கலந்த நீரில் ஆறு மணி (இரண்டு சாமம்) நேரம் கொதிக்க வைத்துக் கழுவி எடுத்துக் கொள்ளவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Oyster shell in supernatant solution of Fuller\'s earth sand (Uvarman) for 6 hours (2 Saamam). Then rinse it with water</p><p class="nubi">Yagopu Chunna Kaandam 600</p>',
		  }]
	  },
	  'hoofs_kulambugal': {
	    'tn': 'குளம்புகள்',
	    'en': 'HOOFS ',
		'nam': '(KULAMBUGAL)',
		'data': [{
		  'tn': '<p>இராவின 35 கிராம் (1 பலம்) காற்குளம்பு பொடிக்கு, 175 கிராம் (5 பலம்) இளநீர் விட்டு காலை முதல் மாலை வரை வெயிலில் வைக்க வேண்டும். தினமும் 175 கிராம் (5 பலம்) புதிதான இளநீரைத் தொடர்ந்து ஐந்து நாட்கள் விட்டு காலை முதல் மாலை வரை வெயிலில் வைத்தும், பின்பு இரண்டு நாட்கள் இளநீர் விடாமல் வெயிலில் வைத்தும் நீரெல்லாம் சுவறி உலர்ந்த பின்பு கழுவி எடுக்க, காற்குளம்புப் பொடி சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>To 35 g of hoof powder, add 175 ml of tender coconut water and keep it in sunlight. Perform this process for five days with fresh tender coconut water on each day. Later dry it under sunlight for two days untill all the moisture content disappears. Rinse it off and dry.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },

	  'kombarakku_lac': {
	    'tn': 'கொம்பரக்கு',
	    'en': 'KOMBARAKKU',
		'nam': '(LAC)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கொம்பரக்கில் இருக்கும் கட்டை, மரத்தோல், மக்கல், நூலாடல், உழவு போன்றவைகளை நீக்கி விடவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span>Refine the Kombarakku by removing impurities like woods, barks etc.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span>கொம்பரக்கை நல்ல நீரில் போட்டு கொதிக்க வைத்து எரித்து எடுத்துக் கொள்ளவும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p><p><b>குறிப்பு: இவ்வாறு மூன்று முறை எரித்து எடுத்துக் கொள்ள சுத்தியாகும் - சரக்கு சுத்தி செய்முறைகள்</b></p>',
			'en': '<p><span class="list-style-v1"></span>Boil the Kombarakku in pure water to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p><p><b>Note: Perform the above process thrice to purify Kombarakku - Sarakku Suththi Seimuraigal</b></p>',
		  }]
	  },
	  
	  'horns': {
	    'tn': 'கொம்புகள்',
	    'en': '',
		'nam': 'HORNS',
		'data': [{
		  'tn': '<p>சீவின கொம்புத்தூள் 35 கிராமிற்கு (1 பலம்) அகத்தியிலைச் சாறு 105 கிராம் (3 பலம்) விட்டு, சூரிய உதயம் முதல் மறையும் வரை வெயிலில் வைக்கவும். இவ்விதம் மீண்டும் நான்கு நாட்கள், ஒவ்வொரு நாளும் மேற்படி இலைச்சாறு மும்மூன்று பலம் வீதம் விட்டுச் சூரிய புடம் வைத்துப் பின்பு ஆறாம் நாள் முதல் மேற்படி சாறு விடாமல் வெயிலில் வைத்து, ஈரமில்லாமல் நன்றாய் உலர்ந்த பின்பு, நீர் விட்டுக் கழுவி உலர்த்திக் கொள்வதே கொம்புகளின் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>To 35 g of horn powder, add 105 ml of Agathi leaf juice (<i>Sesbania grandiflora</i>) and keep it in sunlight. Repeat the same process for 4 more days with 105 ml of fresh leaf juice on each day. Later dry it in sunlight and rinse it off with water.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'ox_bile_korojanam': {
	    'tn': 'கோரோசனம்',
	    'en': 'OX BILE ',
		'nam': '(KOROJANAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span>கோரோசனத்திற்குச் சுத்தியின்றேனும், இயற்கைச் சரக்கிற்கும் வைப்புச் சரக்கிற்கும் உள்ள வித்தியாசம் அறிந்து சேர்த்தல் நலம்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span>Korojanam should be chosen on examining the difference between real (natural) substance and fake (artificial) substance.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span><b>கோரோசனையைக் கண்டறியும் சோதனைகள்:</b></p><p>ஒரு சிறிய ஊசியைப் பழுக்கக் காய்ச்சி கோரோசனையில் குத்திப் பிடுங்கினால் மஞ்சள் நிறப் புகையுடன் ஊசியின் மேல் மஞ்சள் நிறம் பதியின் நல்ல சரக்கென்றும், ஊசியின் மேல் கறுப்பு நிறம் பதியின் நல்ல சரக்கில்லை என்றும் அறியலாம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span>Pierce the Korojanam with a red hot needle. If it is real Korojanam, pierced part of the needle shows yellow color with yellow smoke. If it is fake Korojanam, the pierced part shows black color.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  }]
	  },
	  'conch_shell_sangu': {
	    'tn': 'சங்கு',
	    'en': 'CONCH SHELL ',
		'nam': '(SANGU)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> உடைத்த சங்குத் துண்டுகளைக் கற்சுண்ணாம்பில் புதைத்துத் தாளித்துக் கழுவி எடுக்கத் தூய்மையாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Refine the Conch shell pieces by slaking it inside the heap of lime stone.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> கற்சுண்ணாம்பும், உவர்மண்ணும் சமனெடை எடுத்து, அதற்கு எண் மடங்கு நீர் சேர்த்துத் தெளிவெடுத்து, அதில் சங்கைப் போட்டு எரித்துக் கழுவி எடுக்க சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Make a solution with equal amounts of Fuller\'s earth and lime stone by adding 8 parts of water by volume. Boil the Conch shell in the supernatant of this solution, rinse and dry it completely.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> ஒரு பலம் (35 கிராம்) சங்கிற்கு ஐந்து பலம் (175 கிராம்) இலைக்கள்ளிச் சாற்றைக் காலையில் விட்டு மாலை வரை வெயிலில் உலர்த்தி மறுநாள் காலையிலும் புதிதாக மேற்படி சாற்றை விட்டு வெயிலில் வைக்கவும். இங்ஙனம் மேலும் மூன்று முறை செய்து நீர் விட்டு கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> To 35 g of Conch shell, add 175 ml of juice of Ilaikkalli (<i>Euphorbia neriifolia</i>) and insolate it. On next day, insolate it with fresh juice of Ilaikkalli (<i>Euphorbia neriifolia</i>) again. Repeat this process for 3 times and rinse it off with water to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சங்கைப் பசு மோரில் 7 நாள் ஊற வைத்தெடுக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Conch shell in butter milk of cow for 7 days to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  }]
	  },
	  'antlers_sirungi': {
	    'tn': 'சிருங்கி (மான் கொம்பு)',
	    'en': 'ANTLERS ',
		'nam': '(SIRUNGI)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> மான் கொம்பைச் சிறு துண்டுகளாக்கி, இரண்டிரண்டாய்ப் பிளந்து, அகத்தியிலைச் சாற்றில் ஒரு நாள் முழுவதும் ஊற வைத்துச் சாற்றை நீக்கிக் கொம்புத் துண்டுகளைக் கழுவி உலர்த்திக் கொள்ளவும். இங்ஙனம் ஏழு முறை செய்ய சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Soak the small pieces of Sirungi in Agathi leaf juice (<i>Sesbania grandiflora</i>) for a day, then rinse and dry it. Perform this process for 7 times to get the purified Sirungi.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மான் கொம்பை சிறு துண்டுகளாக நொறுக்கிக் கோநீரில் மூன்று நாள் ஊற வைக்க சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the small pieces of Sirungi in cow\'s urine for three days to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  }]
	  },
	  'teeth': {
	    'tn': 'தந்த வகை (பற்கள்)',
	    'en': '',
		'nam': 'TEETH',
		'data': [{
		  'tn': '<p>இடித்துத் தூள் செய்த பல்லின் பொடி 35 கிராமில் (1 பலம்) 175 கிராம் (5 பலம்) தாய்ப்பால் விட்டு காலை முதல் மாலை வரை வெயிலில் வைக்க வேண்டும். இவ்விதம் ஐந்து நாட்கள் புதிது புதிதாக தாய்ப்பால் விட்டு காலை முதல் மாலை வரை வெயிலில் வைக்க வேண்டும். பின் இரண்டு நாட்கள் மேற்படி பாலெல்லாம் சுவறுமாறு வெயிலில் வைத்து நன்றாய் உலர்ந்த பின் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Add 175 ml of breast milk to 35 g of Teeth powder and insolate it for 5 days by adding fresh milk on each day. Then allow it to dry for two days untill all the milk evaporates and rinse it with water.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		}]
	  },
	  'honey': {
	    'tn': 'தேன்',
	    'en': '',
		'nam': 'HONEY',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கடைத்தேனில் மெழுகு, தேனீ, புழு, முட்டை, மகரந்தப்பொடி முதலிய மலினங்கள் இருக்குமாகையால் அதனைப் பயன்படுத்தும் முன் நீர் இயந்திரத்தில் வைத்துக் காய்ச்சிச் சூடாயிருக்கும் போதே ஈரக்கம்பளித் துணியிலிட்டு வடிகட்டிக் கொள்ள வேண்டும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p><span class="list-style-v1"></span> Heat the Honey by double boiler method and squeeze it through wet woolen blanket immediately to get rid of impurities like wax, honey bees, worms, pollen grains etc.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> ஓட்டைச் சுட்டுத் தேனில் போட்டு முறித்து உபயோகிப்பது வீட்டு வழக்கம்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Drench the heated earthen tile in Honey to get the purified form.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> ஒரு பாத்திரத்தில் தேனை விட்டு அதனை நீருக்குள் அமிழ்த்தி வைத்து எரித்து வடிகட்டிக் கொள்ளலாம்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Honey by double boiler method and then filter it.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> சூடாக்கிய ஓட்டைத் தேனில் போட்டாவது அனலில் சூடாக்கிய வெட்டுக் கத்தியில் தேனை விட்டு வடியச் செய்தாவது சுரசமாக்கிக் கொள்ளத் தேன் சுத்தியாகும்.</p><p class="nubi">சரக்கு சுத்தி செய்முறைகள்</p>',
			'en': '<p><span class="list-style-v1"></span> Collect the refined Honey by adding heated earthen tile piece to it or by pouring the honey over the red hot knife.</p><p class="nubi">Sarakku Suththi Seimuraigal </p>',
		  }]
	  },
	  'fresh_water_snail': {
	    'tn': 'நத்தை',
	    'en': 'FRESH WATER SNAIL ',
		'nam': '(NATHTHAI)',
		'data': [{
		  'tn': '<p>நத்தையின் ஓட்டை உடைத்து அதன் சதையை நன்றாக நீர் விட்டுக் கழுவி எடுக்கவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p>',
		  'en': '<p>Break the shell of snail and wash its fleshy part effectively.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna</p>',
		}]
	  },
	  'cowry_palagarai': {
	    'tn': 'பலகறை',
	    'en': 'COWRY ',
		'nam': '(PALAGARAI)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பலகறைகளை உடைத்து அவற்றுள் படிந்திருக்கும் மண் முதலிய அழுக்குகளை நீரில் நன்றாகக் கழுவி நீக்கி எலுமிச்சம் பழச்சாற்றிலாவது அரிசிக் காடியிலாவது 24 நிமிடம் ஊற வைத்தெடுத்துக் கழுவிக் கொள்ளத் தூய்மையாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Wash the Cowry with water and then soak it in lemon juice or vinegar (Kaadi) for 24 minutes.  Later rinse it to get the purified form.</p><p class="nubi">The Siddha Formulary of India</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> 35 கிராம் (1 பலம்) பலகறைப் பொடிக்கு 350 கிராம் (10 பலம்) தமரத்தம் பழச்சாற்றைக் காலையில் விட்டு மாலை வரை வெயிலில் வைத்து எடுத்து மறுநாள் காலையிலும் புதிதாக மேற்படிச் சாற்றை விட்டு வெயிலில் வைக்கவும். இவ்வாறு பதினைந்து நாட்கள் செய்தெடுக்கப் பலகறை சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span> To 35 g of Cowry, add 350 ml of fruit juice of Thamaraththai (<i>Averrhoa carambola</i>) and keep it in sunlight. Perform this process for 15 days with fresh juice on each day to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பலகறையை நெருப்பனலில் சுட்டெடுத்துக் கொள்ள தூய்மையாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Grill the Cowry in fire to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  }]
	  },
	  'coral1': {
	    'tn': 'பவழப்புற்று',
	    'en': 'CORAL ',
		'nam': '(PAVAZHAPUTRU)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> 35 கிராம் பவழத்திற்கு 210 கிராம் பேரீச்சங்கள்ளைக் காலையில் விட்டு மாலை வரை வெயிலில் உலர்த்தி, மறுநாள் காலையிலும் புதிதாய் மேற்படி கள்ளை விட்டு வெயிலில் வைக்கவும். இவ்விதம் ஐந்து முறை செய்து, நீர் விட்டுக் கழுவி எடுக்கச் சுத்தியாகும். இதனைப் பற்பம் முதலிய மருந்தாகச் செய்து வழங்கலாம்.</p><p><b>குறிப்பு:</b> தேரையர் யமக வெண்பா உரையாசிரியர் இங்ஙனம் கூறியிருப்பினும், இவ்வாறு செய்யின் பவழம் யாவும் கரைந்து விடும். ஆகையால், சம அளவு பேரீச்சங்கள் ஊற்றி வைத்து மறுநாள் கழுவி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> To 35 g of Coral, pour 210 ml of Date\'s toddy (<i>Phoenix sylvestris</i>) and subject it to insolation. Perform this process for 5 times and then rinse it off with water to get the purified form.</p><p><b>Note:</b> Though this method is mentioned in "Theraiyar Yamaga Venpa", Coral gets completely dissolved on following this method. So use equal amount of Date’s toddy to purify the Coral.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பவழத்தை ஒரு நாள் முழுதும் எலுமிச்சம் பழச்சாற்றில் ஊற வைத்து, மறுநாள் வெந்நீர் விட்டுக் கழுவி எடுத்து வைத்துக் கொள்ளவும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
			'en': '<p><span class="list-style-v1"></span>  Soak the Coral in lemon juice for a day.  Then rinse it off with hot water on next day to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழப்புற்றை பசும் பாலிலிட்டு ஒரு சாமம் (3 மணி நேரம்) கொதிக்க வைத்து எடுத்துக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Boil the Coral in cow’s milk for 3 hours (1 Saamam) to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழப்புற்றை ஆவின் பாலில் 3 மணி நேரம் ஊற வைக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Coral in cow milk for 3 hours and dry it.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பவழப்புற்றைக் கிழிகட்டிப் பசு மோரில் போட்டு அடுப்பேற்றி நான்கு நாழிகை எரித்தெடுக்கச் சுத்தியாகும்.</p><p class="nubi">யாகோபு வைத்தியம் 300</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Coral for 1 hour 36 minutes (4 Naazhigai) by hanging into cow’s butter milk to get the purified form.</p><p class="nubi">Yagopu Vaidhiyam 300 </p>',
		  }]
	  },
	  'punugu': {
	    'tn': 'புனுகு',
	    'en': '',
		'nam': 'PUNUGU',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> புனுகைப் புறங்கையிலிட்டு, ஒரு பிளந்த ஈர்க்கால் தேய்த்து, அதில் கலந்திருக்கும் புனுகுப் பூனையின் உரோமங்களை நீக்கிக் கொள்வதே சுத்தியாகும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span>  Exclude the impurities like hairs from Punugu to get the purified form.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> புனுகை சந்தனக்கல் அல்லது சுத்தமான படிகக்கல்லின் மீது வைத்து சுத்த நீர் விட்டுக் கழுவி வழித்துக் கொள்ளவும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
			'en': '<p><span class="list-style-v1"></span> Wash the Punugu with clean water by placing on sandal wood stone or quartz stone and then collect it.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> புனுகை மெல்லிய தூய துணியினூடாகப் பிழிந்து எடுத்துக் கொள்ளலாம்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Purify the Punugu by squeezing it through thin clean cloth.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> புனுகைத் துளை ஆடித்தட்டில் வைத்து நீர் விட்டு அலம்பி எடுத்துக் கொள்ளலாம்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span> Rinse the Punugu with water by placing it on slotted plate.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum </p>',
		  }]
	  },
	  'earthworm': {
	    'tn': 'பூநாகம்',
	    'en': 'EARTHWORM ',
		'nam': '(POONAAGAM)',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> பூநாகத்தைப் பால் அல்லது மோரில் விட்டால் அதை அருந்தி மண்ணைக் கக்கிவிடும். இதன் பின்பு எடுத்துக் கொள்ள வேண்டும். இவைகளின் மீது சுண்ணாம்பு நீர் தெளிக்க அவை இறந்து விடும்.</p><p class="nubi">சித்தா பார்முலரி ஆப் இந்தியா</p>',
		  'en': '<p><span class="list-style-v1"></span> Put the Earthworm in milk or butter milk and take it after it expels the mud. Then sprinkle lime water on it and dry it.</p><p class="nubi">The Siddha Formulary of India </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> பூநாகத்தைச் சட்டியில் போட்டுப் பசும் பால் விட்டு மூன்று சாமம் (9 மணி நேரம்) வைக்க மண்ணெல்லாம் கக்கிவிடும். பின் ஜலத்தில் அலம்பி எடுத்துக் கொள்ள சுத்தியாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Keep the Earthworm in cow’s milk for 9 hours (3 Saamam) to expel the mud. Then use it after rinsing with water.</p><p class="nubi">Sikitcha Ratna Deepam</p>',
		  },{
			'tn': '<p><span class="list-style-v1"></span> பூநாகத்தைச் சட்டியில் போட்டு, பசும் பால் இட்டு 8 மணி நேரம் வைக்க மண் கக்கி விடும். நீரில் அலம்பி எடுக்கவும்.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
			'en': '<p><span class="list-style-v1"></span> Soak the Earthworm in cow’s milk for 8 hours to expel mud and then wash it with water.</p><p class="nubi">Yagopu Chunna Kaandam 600 </p>',
		  }]
	  },
	  'skull': {
	    'tn': 'மண்டை ஓடு',
	    'en': '',
		'nam': 'SKULL',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> கற்சுண்ணாம்பு, பூநீறு ஆகியவற்றைச் சமனெடை எடுத்து, அதற்கு எண் மடங்கு நல்ல நீரில் கரைத்துக் கிடைத்தத் தெளிநீரில், சிறு சிறு துண்டுகளாக உடைத்த மண்டையோடுகளைப் போட்டு, ஐந்து மணி நேரம் வரை ஊற வைத்து எடுத்துத் தண்ணீரில் கழுவி உலர்த்தவும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
		  'en': '<p><span class="list-style-v1"></span> Make a solution with equal amount of lime stone and fuller\'s earth with 8 parts of water by volume. Soak the Skull in the supernatant of this solution for 5 hours. Then rinse it with water and dry it.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		},{
			'tn': '<p><span class="list-style-v1"></span>ஒவ்வொரு நாளும், புதிய பசுவின் மோரில், நன்குக் கழுவிப் பொடித்த மண்டை ஓடுகளைப் போட்டு, வெயிலில் ஐந்து நாட்கள் வரை காய வைத்து, பின்னர் இரண்டு நாட்கள் மோர் விடாமல் சூரியனில் காய வைத்து, பின்னர் நீர் விட்டுக் கழுவி, உலர்த்தி எடுத்துக் கொள்ள வேண்டும். மண்டை ஓட்டுத் தூளின் எடை ஒரு பங்குக்கு, மூன்று பங்கு புளித்த பசு மோரை தினந்தோறும் விட வேண்டும்.</p><p class="nubi">இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</p>',
			'en': '<p><span class="list-style-v1"></span> Insolate the Skull with cow\'s butter milk for 5 days with fresh butter milk on each day. Keep it in sunlight without adding butter milk for two days and rinse it off with water.</p><p class="nubi">Impcops Siddha Marundhugalin Seimurai</p>',
		  }]
	  },
	  'hair': {
	    'tn': 'மயிர்',
	    'en': '',
		'nam': 'HAIR',
		'data': [{
		  'tn': '<p>நரை ரோமத்தை விலக்கி, மயிரைச் சிகைக்காய் கலந்த நீரில் கொதிக்க வைத்துக் கழுவி உலர்த்திக் கொள்ளத் தூய்மையாகும்.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p>Eliminate the grey hair. Then boil the Hair in Sigaikaai solution (<i>Acacia concinna</i>).  Rinse and dry it to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		}]
	  },
	  'peacock_feather': {
	    'tn': 'மயிலிறகு',
	    'en': '',
		'nam': 'PEACOCK FEATHER',
		'data': [{
		  'tn': '<p>மயிலிறகைச் சட்டியிலிட்டுக் கரியாகும்படி எரித்தெடுத்துக் கொள்க.</p><p class="nubi">யாகோபு சுண்ணக் காண்டம் 600</p>',
		  'en': '<p>Char the Peacock feather to get the purified form.</p><p class="nubi"> Yagopu Chunna Kaandam 600 </p>',
		}]
	  },
	  'egg_shell': {
	    'tn': 'முட்டை ஓடு (அண்ட ஓடு)',
	    'en': '',
		'nam': 'EGG SHELL',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> சோற்றுப்பை நீரில் கரைத்து, ஒரு மணி நேரம் கழித்து, அதன் தெளிவினை மட்டும் இறுத்து எடுத்துக் கொண்டு, அதில் அண்ட ஓடுகளைப் போட்டு ஒரு நாள் ஊற விட்டு, மறுநாள் நன்றாகக் கொதிக்க வைத்து, நீர் சுண்டியவுடன் ஆறவிட்டு, சவ்வு போகக் கழுவி உலர்த்தவும்.</p><p><b>குறிப்பு:</b> முட்டையோடு 1400 கிராமிற்கு, 500 மி.கி கறியுப்பை, 3 லிட்டர் ஆற்று நீரில் வார்க்கவும். இவ்வாறே கோழி, பருந்து, கிளி, காகம், காடை, மயில் முதலிய பறவைகளின் முட்டையோடுகளையும் சுத்தி செய்ய வேண்டும் - சரக்கு சுத்தி செய்முறைகள்.</p>',
		  'en': '<p><span class="list-style-v1"></span> Dissolve the Kariyuppu in water and soak the Egg shells in the supernatant of this solution for one day. Boil it on next day and then wash effectively to eliminate membranous layer in it.</p><p class="nubi">The Siddha Formulary of India</p><p><b>Note:</b> For 1400 g of egg shell, 500 g of kariyuppu and 3 liters of river water are used.The same process can be used to purify Egg shells of any birds. - Sarakku Suththi Seimuraigal </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> முட்டை ஓட்டுடன் பூநீறைக் கூட்டி ஜலம் விட்டு ஒரு சாமம் எரித்து சவ்வை நீக்கி இரவியில் உலர்த்துக.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
			'en': '<p><span class="list-style-v1"></span> Burn the Egg shell in solution of fuller\'s earth for 3 hours (1 Saamam) and remove the membranous layer.  Then dry it in sunlight to get the purified shells.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		  }]
	  },
	  'pearl_oyster_shell_muthu_chippi': {
	    'tn': 'முத்துச்சிப்பி',
	    'en': 'PEARL OYSTER SHELL ',
		'nam': '(MUTHU CHIPPI)',
		'data': [{
		  'tn': '<p>கற்சுண்ணாம்பு, பூநீறு இவ்விரண்டையும் சம எடையாகச் சேர்த்து, அவற்றுக்கு எண்மடங்கு நீர்விட்டுக் கலக்கித் தெளிந்த நீரை எடுத்து, அதில் முத்துச் சிப்பியைச் சேர்த்து மூன்று மணி நேரம் வரை கொதிக்க வைத்து, எண்ணெய்க்கசிவு நீங்கும் வரை எரித்தெடுத்து சுத்த நீரில் கழுவி எடுக்கவும்.</p><p class="nubi">சித்த மருந்து முறையியல் - யாழ்ப்பாணம்</p><p><b>குறிப்பு: இவ்வாறு ஐந்து முறை செய்ய முத்துச்சிப்பி சுத்தியாகும் - இம்ப்காப்ஸ் சித்த மருந்துகளின் செய்முறை</b></p>',
		  'en': '<p>Make a solution with equal amounts of lime stone and fuller\'s earth by adding 8 parts of water by volume. Burn the Pearl oyster shell in the supernatant of this solution for 3 hours until the oil spills out.  Then rinse it off with clean water to get the purified form.</p><p class="nubi">Siddha Pharmacopoeia - Jaffna </p><p><b>Note:</b> Perform this process for 5 times to get purified Pearl oyster shell - Impcops Siddha Marundhugalin Seimurai</p>',
		}]
	  },
	  'wax': {
	    'tn': 'மெழுகு/தேன் மெழுகு',
	    'en': '',
		'nam': 'WAX/BEE WAX',
		'data': [{
		  'tn': '<p><span class="list-style-v1"></span> மெழுகை உருக்கித் தெளிய வைத்து வடிகட்டிக் கொள்க.</p><p class="nubi">சிகிச்சா ரத்ந தீபம்</p>',
		  'en': '<p><span class="list-style-v1"></span> Melt and decant  the wax to get the purified form.</p><p class="nubi">Sikitcha Ratna Deepam </p>',
		},{
			'tn': '<p><span class="list-style-v1"></span> மெழுகைச் சிறு துண்டுகளாக்கி ஒரு கலத்திலிட்டு அதை வெந்நீருக்குள் அமிழ்த்தி உருகச் செய்து துணியினூடாக வடிகட்டி எடுக்கச் சுத்தியாகும்.</p><p class="nubi">மருந்து செய் இயலும் கலையும்</p>',
			'en': '<p><span class="list-style-v1"></span>Melt the small pieces of wax by double boiler method. Then filter it through clean cloth to get pure wax.</p><p class="nubi">Marundhu Sei Iyalum Kalaiyum  </p>',
		  }]
	  },
	  'sfs': {
	    'tn': 'கல்லுப்பு',
	    'en': '',
		'nam': 'KALLUPPU',
		'data': [{
		  'tn': '<p>கல்லுப்பைக் காடித் தண்ணீரில் பிசறி, பிறகு ஈரத்தைத் துணியால் துடைத்து வெயிலில் உலர்த்திக் கொள்ள சுத்தியாகும்.</p><p class="nubi">குணபாடம் தாது சீவ வகுப்பு</p>',
		  'en': '<p>Mix the Kalluppu with vinegar (Kaadi) and wipe the moisture with a cloth. Then insolate it to get the purified salt.</p><p class="nubi">Gunapaadam Thaathu Jeeva Vaguppu</p>',
		}]
	  },


	}

   } 
  },
  created: function() {
	this.renderData(); 
    document.addEventListener('touchstart', this.onTouchStart);
	document.addEventListener('touchend', this.onTouchEnd);
	document.addEventListener('touchmove', this.onTouchMove);	
  },
  methods: {
	img: function(id) {
	  return `img/list-${id}.jpg`;	
	},
	view: function(id) {
	  this.$router.push(`listinner/${id}`).catch(()=>{});
	},
	renderData: function() {
	  let id = this.id;
	  let data = this.list[`${id}`];
	  this.sndataAc = data.data;
	  this.sndata = this.sndataAc;
	  this.title_tn = data.tn;
	  this.title_en = data.en;
	  this.title_nam = data.nam;
	  this.total = 0;
	  for( let x of this.sndata ) {
	    if ( this.language == 'tn' ) {
		  if ( x.tn != '' ) {
		    this.total = this.total + 1;  
		  }
		} else {
		  if ( x.en != '' ) {
			 this.total = this.total + 1;   
		  }
		}
	  } 
	  
	  this.width = `calc(100vw * ${this.total})`; 
	  this.calLeft();
	},
	onTouchStart(event) { 
	  let touchobj = event.changedTouches[0];
	  this.swipedir = 'none'
	  this.dist = 0
	  this.startX = touchobj.pageX
	  this.startY = touchobj.pageY
	  this.startTime = new Date().getTime()
	},
	
	onTouchEnd(event) { 
	  
	  let touchobj = event.changedTouches[0]
	  this.distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
	  this.distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
	  this.elapsedTime = new Date().getTime() - this.startTime // get time elapsed
	  if (this.elapsedTime <= this.allowedTime){ // first condition for awipe met
		if (Math.abs(this.distX) >= this.threshold && Math.abs(this.distY) <= this.restraint){ // 2nd condition for horizontal swipe met
			this.swipedir = (this.distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
		}
		else if (Math.abs(this.distY) >= this.threshold && Math.abs(this.distX) <= this.restraint){ // 2nd condition for vertical swipe met
			this.swipedir = (this.distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
		}
	  } 
	  
	  if ( this.swipedir == 'right' ) {
		this.leftClick(); 
	  } else if ( this.swipedir == 'left' ) { 
	    this.rightClick();
	  }
	},
	onTouchMove(event) {
	  /* if ( this.start ) {
		console.log(event.changedTouches[0]);
		if ( event.changedTouches[0].pageX > 150 ) {
		  this.showmeu = true;
		} else {
		  this.showmeu = false;
		}
	  } */
	},
	rightClick: function() {
	    this.active += 1;
		this.disablerightt = false;
		if ( this.active >= this.total ) {
		  this.active = this.total - 1;
		} 
		this.calLeft();
	},
	leftClick: function() {
		 
	    this.active -= 1;
		if ( this.active < 0 ) {
		  this.active = 0;
		}
		
		this.calLeft();
	},
	calLeft: function() { 
	  this.disablerightt = false;
	  this.disableleft = false;
	  if ( this.active == this.total - 1 ) {
		this.disablerightt = true;
	  }
	  if ( this.active == 0 ) {
		this.disableleft = true;
	  }  
		
	  this.left = `calc(-100vw * ${this.active})`;
	  let w = ((this.active+1)/this.total)*100;
	  this.widthper = `${w}%`; 
	  var con = document.getElementById('con');
	  if ( con != null && con != undefined ) {
	    con.scrollTop = 0;
	  }
	}
  },
  watch: {
    language: function() {
	  this.renderData();
	},
    $route(to, from) {
      this.language = this.$root.language;  
    }
  },
  template: '#listinner'
}); 



Vue.component('about', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#about'
  });

  Vue.component('introduction', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#introduction'
  });

  Vue.component('need', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#need'
  });

  Vue.component('howto', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#howto'
  });

  Vue.component('reference', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#reference'
  });

  Vue.component('acknowledgement', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#acknowledgement'
  })
  
  Vue.component('glossary', {
	data: function() {
	 return {
	  language: this.$root.language
	 } 
	},
	methods: {
	},
	watch: {
	  $route(to, from) {
		this.language = this.$root.language;  
	  }
	},
	template: '#glossary'
  })