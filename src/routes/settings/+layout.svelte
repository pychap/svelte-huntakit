<!-- <script>
  export let data;
</script> -->

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <slot />
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/settings">Main settings</a></li>
      <li><a href="/settings/appearance">Appearance settings</a></li>
      <li><a href="/settings/profile">Profile settings</a></li>
    </ul>
  
  </div>
</div>
