import Vue from 'vue'
import app from './component/test.vue'
import navbar from './component/nav.vue'
import banner from './component/carousel.vue'

 Vue.component('navbar',navbar);
 Vue.component('banner',banner);



 new Vue({ 
	el: '#navBar',
	data : {
		logos:'http://www.macauo2o.com/resources/content-images/logo.jpg' ,
		navItems: [
          { name: 'Indexsssss' , isActive : true,link :'index.html'},
          { name: 'Service' ,  isActive : false,link : 'index.html'},
          { name: 'Product' ,  isActive : false,link : 'index.html'},
          { name: 'About Us' ,  isActive : false, link : 'index.html'},
          { name: 'Contact Us' ,  isActive : false, link : 'index.html'}
          ]
	}
 });



 new Vue({ 
	el: '#banner',
	data: {
        logo: 'http://www.macauo2o.com/resources/content-images/logo.jpg',
         items: [
          { isActive : true,banner :'http://file.macauo2o.com/advertise/e890a57f2b4b47ef9c19640be3ca791c.jpg' , tips:'First'},
          { isActive : false,banner :'http://file.macauo2o.com/advertise/d026381122f249ef89fef8feac7c1851.jpg' , tips:'Second'},
          { isActive : false,banner :'http://file.macauo2o.com/advertise/d1db41ed8c284c28b14e84573886998d.jpg' , tips:'Third'}
         
          ]
      }

 });


