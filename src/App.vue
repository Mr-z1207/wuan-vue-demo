<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/toDoList">ToDoList</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  text-align: center;
  color: #55aaff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #55aaff;

    &.router-link-exact-active {
      color: #00007f;
    }
  }
}
</style>
