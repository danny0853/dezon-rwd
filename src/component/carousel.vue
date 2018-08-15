<template>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<!-- 轮播（Carousel）指标 -->
	<ol class="carousel-indicators" >
		<li v-for="(value, index)  of items" data-target="#myCarousel" :data-slide-to="index" :class="{active:value.isActive}"></li>
	</ol>   
	<!-- 轮播（Carousel）项目 -->
	<div class="carousel-inner" >
    	<div v-for="item in items" class="carousel-item" :class="{active:item.isActive}" >
            <img :src="item.banner" :alt="item.tips">
        </div>
    </div>
	<!-- 轮播（Carousel）导航 -->
	<a class="left carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="right carousel-control-next" href="#myCarousel" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div> 
</template>


<script>

/* usage 

data: {
        logo: 'http://www.macauo2o.com/resources/content-images/logo.jpg',
         items: [
          { isActive : true,banner :'http://file.macauo2o.com/advertise/e890a57f2b4b47ef9c19640be3ca791c.jpg' , tips:'First'},
          { isActive : false,banner :'http://file.macauo2o.com/advertise/d026381122f249ef89fef8feac7c1851.jpg' , tips:'Second'},
          { isActive : false,banner :'http://file.macauo2o.com/advertise/d1db41ed8c284c28b14e84573886998d.jpg' , tips:'Third'}
         
          ]
      }


*/

export default{
	props : ['logo','items']
  }
</script>