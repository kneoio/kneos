<template>
  <div class="app">
    <n-space vertical size="large">
      <!-- Header -->
      <n-card>
        <n-space justify="center" align="center">
          <n-avatar :size="80" src="/logo.png" />
        </n-space>
      </n-card>

      <!-- Hero -->
      <n-card class="hero-card">
        <div style="text-align: center; padding: 40px 0;">
          <n-h1 style="font-size: 3rem; margin-bottom: 20px;">
            Enterprise IT Solutions
            <br><span style="color: #fbbf24;">Built from Scratch</span>
          </n-h1>
          <n-p style="font-size: 1.2rem; margin-bottom: 30px; opacity: 0.8;">
            Transform your business with custom enterprise applications. Our powerful team delivers cutting-edge IT solutions.
          </n-p>
          <n-space justify="center" size="large">
            <n-button type="warning" size="large">Start Project</n-button>
            <n-button secondary size="large">View Portfolio</n-button>
          </n-space>
        </div>
      </n-card>

      <!-- Services -->
      <n-card>
        <n-h2 style="text-align: center; margin-bottom: 30px;">Our Services</n-h2>
        <n-grid cols="1 s:1 m:3" responsive="screen" :x-gap="20" :y-gap="20">
          <n-grid-item v-for="service in services" :key="service.title">
            <n-card hoverable style="height: 100%;">
              <template #header>
                <n-space align="center">
                  <n-text style="font-size: 2rem;">{{ service.icon }}</n-text>
                  <n-text strong>{{ service.title }}</n-text>
                </n-space>
              </template>
              <n-p>{{ service.description }}</n-p>
              <n-ul>
                <n-li v-for="feature in service.features" :key="feature">{{ feature }}</n-li>
              </n-ul>
            </n-card>
          </n-grid-item>
        </n-grid>
      </n-card>

      <!-- About -->
      <n-card>
        <div style="text-align: center;">
          <n-h2 style="margin-bottom: 20px;">Powerful Team, Proven Results</n-h2>
          <n-p style="font-size: 1.1rem; margin-bottom: 30px; color: #6b7280;">
            At kneo.io, we combine deep technical expertise with business acumen to deliver enterprise solutions.
          </n-p>
          <n-grid cols="3" responsive="screen" :x-gap="20">
            <n-grid-item v-for="stat in stats" :key="stat.number">
              <n-statistic :value="stat.number" style="text-align: center;">
                <template #label>
                  <n-text>{{ stat.label }}</n-text>
                </template>
              </n-statistic>
            </n-grid-item>
          </n-grid>
        </div>
      </n-card>


      <!-- Footer -->
      <n-card>
        <n-space justify="center" align="center">
          <n-avatar :size="60" src="/logo.png" />
          <n-text style="opacity: 0.7;">© 2024 All rights reserved</n-text>
        </n-space>
      </n-card>
    </n-space>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const services = ref([
      {
        title: 'Custom Software',
        description: 'Build scalable enterprise applications tailored to your business needs.',
        icon: '💻',
        features: ['Full-stack web apps', 'Mobile development', 'API integration', 'Legacy modernization']
      },
      {
        title: 'Cloud Solutions',
        description: 'Migrate and optimize your infrastructure for the cloud.',
        icon: '☁️',
        features: ['AWS, Azure, GCP', 'Microservices', 'DevOps & CI/CD', 'Cloud security']
      },
      {
        title: 'Data & Analytics',
        description: 'Transform your data into actionable business insights.',
        icon: '📊',
        features: ['Data warehouses', 'BI dashboards', 'Machine learning', 'Real-time analytics']
      }
    ])

    const stats = ref([
      { number: '50+', label: 'Projects Delivered' },
      { number: '15+', label: 'Expert Developers' },
      { number: '99%', label: 'Client Satisfaction' }
    ])

    return {
      services,
      stats
    }
  }
}
</script>

<style scoped>
.app {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Goldman', sans-serif;
}

.hero-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact-card {
  background: #1f2937;
  color: white;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Goldman', sans-serif;
  font-weight: bold;
}

@media (max-width: 768px) {
  .app {
    padding: 10px;
  }
}
</style>