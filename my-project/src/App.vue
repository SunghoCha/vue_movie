<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GitHub</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <section id="title">
    <div class="contatiner">
      <div class="detail row">
        <figure class="col-md-6">
          <img src="./assets/images/title.png" alt="">
        </figure>
        <div class="text col-md-6">
          <h2>Hello,<br>I'm ?</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#title {

  .container {
    $navbar_height: 56px; // navbar 높이값
    height: 100vh;
    padding: $navbar_height;

    .row {
      height: 100%;
      flex-direction: row-reverse;
    }
  }

  figure {
    img {
      width: 100%;
    }
    display: grid;
    place-items: center;
  }

  .text {
    h2 {
      font-size: 4em;
    }

    display: grid;
    place-items: center;
  }
}</style>
