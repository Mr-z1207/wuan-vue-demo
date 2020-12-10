<template>
  <div id="nav">
    <router-link :to="{ path: '/'}" replace>Home</router-link> |
    <router-link :to="{ path: '/toDoList'}" replace>ToDoList</router-link>
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
