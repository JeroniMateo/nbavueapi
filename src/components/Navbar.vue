<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h2 class="navbar-brand" href="#">NBA</h2>
       

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Players">Players</router-link>
            </li>
              <li class="nav-item">
              <router-link class="nav-link" to="/games">Games</router-link>
            </li><li class="nav-item">
              <router-link class="nav-link" to="/teams">Teams</router-link>
            </li><li class="nav-item">
              <router-link class="nav-link" to="/stats">Stats</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
