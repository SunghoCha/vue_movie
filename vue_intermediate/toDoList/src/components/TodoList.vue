<template>
 <ul>
    <li v-for="(item, index) in Items" :key="index">
        <span>{{ item }}</span>
        <button @click="removeTodo(item, index)">삭제</button>
    </li>
 </ul>
</template>

<script>
    export default {
        props: ['Items'],
        setup(props, context) {
            const removeTodo = (item, index) => {
                context.emit('remove', item, index)
            }

            return { removeTodo }
        }
    }
</script>

<style lang="scss" scoped>

</style>