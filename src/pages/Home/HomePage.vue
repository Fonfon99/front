<script>
import Navbar from '../../components/layout/Navbar.vue';
import Card from '../../components/Card.vue';
import PostForm from './PostForm.vue';
export default {
    name: "HomePage",
    components: { Navbar, Card, PostForm },
};
</script>

<template>  
<Navbar />
<PostForm />
<Card/>
<Card/>
<Card/>
</template>

<style scoped>
input {
    cursor: text;
}
</style>
