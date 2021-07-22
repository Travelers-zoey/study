<template>
  <div>
    <MyComponent>
      <template v-slot:default="user">
        <slot>{{user.user.firstName + user.user.lastName}}</slot>
      </template>
      <template v-slot:footer>
        <slot>,2021遇见更好的自己</slot>
      </template>      
    </MyComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import MyComponent from '@/components/MyComponent'

export default {
  name: 'Home',
  components: {
    MyComponent
  }
}
</script>
