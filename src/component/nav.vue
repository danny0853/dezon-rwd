<template >

<nav class="navbar navbar-expand-md bg-dark navbar-dark " role="navigation">
  <a class="navbar-brand"  href="#" > 
  		<img alt="Brand" style= "width: 60px; " 
  		class="rounded mx-auto d-block " :src="logo"  >
  </a> 
  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>   
  <div class="navbar-collapse collapse" id="collapsibleNavbar">
    <ul class=" navbar-nav "  v-for="item in items">
          <li class="nav-item " v-bind:class= "{active : item.isActive }" ><a :href="item.link" class="nav-link" >{{ item.name }}</a></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default{

   props: ['logo','items']
  }
</script>
