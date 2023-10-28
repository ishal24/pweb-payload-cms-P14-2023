<template>
  <div class="landing-page">
    <div class="container">
      <header>
        <h1>Welcome to Our Website!</h1>
        <p>Group 14 represent the results of our work, namely creating a to do list using vue js</p>
      </header>
      <main>
        <section class="features">
          <div class="feature">
            <i class="fas fa-check"></i>
            <h2>About</h2>
            <p>Penjelasan tentang apa yang ada di Website kami</p>
          </div>
          <div class="feature">
            <i class="fas fa-check"></i>
            <h2>The Team</h2>
            <p>Kelompok 14 yang bekerja dibalik website ini</p>
          </div>
          <div class="feature">
            <i class="fas fa-check"></i>
            <h2>To-do List</h2>
            <p>Website yang kami buat</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 PemWeb; Group 14</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Gaya khusus untuk komponen ini */
.landing-page {
  text-align: center;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

header {
  margin-bottom: 40px;
}

header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

header p {
  font-size: 18px;
  color: #666;
}

.features {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.feature {
  flex-basis: 30%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin: 0 5px;
}

.feature i {
  font-size: 24px;
  margin-bottom: 10px;
  color: #007bff;
}

.feature h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

footer {
  margin-top: 40px;
  font-size: 14px;
  color: #777;
}
</style>
