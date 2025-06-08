/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var storage = window.localStorage; 

const Home = { template: '<div class="flx-d"><main-header></main-header><home></home><menu-com></menu-com></div>' }
const List = { template: '<div class="flx-d"><main-header></main-header><list></list><menu-com></menu-com></div>' }
const ListInner = { template: '<div class="flx-d"><main-header></main-header><listinner></listinner><menu-com></menu-com></div>' }

const About = { template: '<div class="flx-d"><main-header></main-header><about></about><menu-com></menu-com></div>' }
const Introduction = { template: '<div class="flx-d"><main-header></main-header><introduction></introduction><menu-com></menu-com></div>' }
const Need = { template: '<div class="flx-d"><main-header></main-header><need></need><menu-com></menu-com></div>' }
const Howto = { template: '<div class="flx-d"><main-header></main-header><howto></howto><menu-com></menu-com></div>' }
const Reference = { template: '<div class="flx-d"><main-header></main-header><reference></reference><menu-com></menu-com></div>' }
const Acknowledgement = { template: '<div class="flx-d"><main-header></main-header><acknowledgement></acknowledgement><menu-com></menu-com></div>' }
const Glossary = { template: '<div class="flx-d"><main-header></main-header><glossary></glossary><menu-com></menu-com></div>' }


const routes = [  
  { 
    path: '/home', component: Home, name: 'Home'
  },
  { 
    path: '/about', component: About, name: 'About'
  },
  { 
    path: '/introduction', component: Introduction, name: 'Introduction'
  },
  { 
    path: '/need', component: Need, name: 'Need'
  },
  { 
    path: '/howto', component: Howto, name: 'Howto'
  },
  { 
    path: '/reference', component: Reference, name: 'Reference'
  },
  { 
    path: '/glossary', component: Glossary, name: 'Glossary'
  },
  { 
    path: '/acknowledgement', component: Acknowledgement, name: 'Acknowledgement'
  },
  { 
    path: '/list/:id', component: List, name: 'List'
  },
  { 
    path: '/listinner/:id/:path', component: ListInner, name: 'ListInner'
  },
  { path: '*', redirect: { name: 'Home' } },
];
const router = new VueRouter({
  routes, // short for `routes: routes`,
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  } 
});  

   
function loadsite() {
  window.history.scrollRestoration = "manual";
	var vm = new Vue({
	  el: '#app',
	  router,
	  data: function() { 	  
	   return  { 
		  state: storage.getItem('APPSTEP'), 
		  language: storage.getItem('LANGUAGE') || 'tn', 
		  lngActive: false
		}
	  }, 
	  created: function() {
      
		if ( this.state == 'LOADED' ) {
		   this.lngActive = false;
		   return;
		}
		this.lngActive = true;
		storage.setItem('APPSTEP', 'LOADED')
	  },
	  beforeDestroy: function() {
	  },
	  methods: {
		showLng: function() {
		  this.lngActive = true;
		},
		updateLanguage: function (value) {
		  this.language = value;
		  storage.setItem('LANGUAGE', value); 
		  let payload = {
			time: new Date().getTime()
		  };
		  this.$router.push({query: payload}).catch(()=>{});
		  this.lngActive = false;
		},
    } 
    
	}); 
}

var app = {
  // Application Constructor
  initialize: function() { 
     // loadsite();
     document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
     
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() { 
    this.receivedEvent('deviceready');
    let me = this;
    document.addEventListener("backbutton", function(e) {
      
      if ( window.location.hash == "#/home" ) {
        me.exitAppPopup();
      } else {
        history.back();
      }
    });
  }, 
  exitAppPopup: function() {
    let me = this; 
    navigator.notification.confirm(
        "Do you really want to close this app?", 
        function(buttonIndex) { 
          me.ConfirmExit(buttonIndex);
        }, 
        "Confirmation", 
        "Yes,No"
    );  
    //return false;
  },
  ConfirmExit: function(stat) { 
    if(stat == "1"){
      cordova.plugins.exit();
      // navigator.app.exitApp();
    } else{
      return;
    };
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
     // new viewApp();
     loadsite();
  } 
};  
app.initialize(); 