<template>
  <div class="home">
    <!-- Drawer (Sidebar) -->
    <div
        class="drawer"
        :class="{ 'drawer-open': isDrawerOpen }"
    >
      <div class="drawer-header">
        <h3>Brand</h3>
      </div>
      <div class="drawer-content">
        <!-- Use n-menu component -->
        <n-menu
            :options="menuOptions"
            @update:value="handleMenuSelect"
        />
      </div>
    </div>

    <!-- Collapsed Drawer (Mini Version) -->
    <div
        v-if="!isDrawerOpen"
        class="collapsed-drawer"
        @click="toggleDrawer"
    >
      <n-icon :component="AlignJustified" size="24" />
    </div>

    <!-- Main Content -->
    <div
        class="content"
        :style="{ marginLeft: isDrawerOpen ? `${drawerWidth}px` : '0' }"
    >
      <h1>The content should be here</h1>

      <!-- Test Content Based on Selected Menu Item -->
      <div v-if="selectedKey === 'sound-fragments'">
        <h2>Sound Fragments</h2>
        <p>This is the content for Sound Fragments.</p>
      </div>

      <div v-if="selectedKey === 'track-queue'">
        <h2>Track Queue</h2>
        <p>This is the content for Track Queue.</p>
      </div>

      <div v-if="!selectedKey">
        <p>Please select a menu item to view content.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue'
import {NIcon, NMenu} from 'naive-ui'
import {AlignJustified, List, Music} from '@vicons/tabler' // Example icons

export default {
  setup() {
    const isDrawerOpen = ref(true) // Default open on desktop
    const drawerWidth = ref(300) // Width of the drawer
    const selectedKey = ref(null) // Track the selected menu item

    // Check screen size and update drawer state
    const checkScreenSize = () => {
       // Adjust breakpoint as needed
      isDrawerOpen.value = window.innerWidth > 768 // Keep drawer open on desktop
    }

    // Toggle drawer open/close
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value
    }

    // Menu options
    const menuOptions = [
      {
        label: 'Sound Fragments',
        key: 'sound-fragments',
        icon: Music // Use the imported icon component
      },
      {
        label: 'Track Queue',
        key: 'track-queue',
        icon: List // Use the imported icon component
      }
    ]

    // Handle menu item selection
    const handleMenuSelect = (key) => {
      console.log('Selected menu item:', key)
      selectedKey.value = key // Update the selected key
      if (window.innerWidth <= 768) {
        isDrawerOpen.value = false // Close the drawer on mobile after selection
      }
    }

    // Add event listener for screen resize
    onMounted(() => {
      checkScreenSize() // Initial check
      window.addEventListener('resize', checkScreenSize)
    })

    // Remove event listener on unmount
    onUnmounted(() => {
      window.removeEventListener('resize', checkScreenSize)
    })

    return {
      isDrawerOpen,
      drawerWidth,
      selectedKey,
      menuOptions,
      toggleDrawer,
      handleMenuSelect,
      AlignJustified
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
}

/* Drawer (Sidebar) */
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #f8f8f8;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.drawer.drawer-open {
  transform: translateX(0);
}

.drawer-header {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.drawer-content {
  padding: 16px;
}

/* Collapsed Drawer (Mini Version) */
.collapsed-drawer {
  position: fixed;
  top: 20px;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  border-radius: 0 8px 8px 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.collapsed-drawer:hover {
  background-color: #e0e0e0;
}

/* Main Content */
.content {
  padding: 20px;
  transition: margin-left 0.3s ease; /* Smooth transition for margin */
}
</style>