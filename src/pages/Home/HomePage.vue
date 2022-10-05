<script>
import Navbar from '../../components/layout/Navbar.vue';
import Card from '../../components/Card.vue';
import PostForm from './PostForm.vue';

export default {
    name: "HomePage",
    components: { Navbar, Card, PostForm },
    beforeCreate() {
        const token = localStorage.getItem("token");
        if (!token) {
            this.$router.push("/login");
        }
    },
    mounted() {
        const url = import.meta.env.VITE_POST_URL;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
        })
            .then((response) => {
                if (response.ok)
                    return response.json();
                throw new Error(response.statusText);
            })
            .then((res) => {
                this.posts = res;
                console.log("this.post", (this.posts));
            })
            .catch((err) => {
                console.error((err));
            });
    },
    data() {
        return {
            posts: []
        }
    }
};
</script>

<template>
    <Navbar />
    <PostForm />
    <div v-for="post in posts">
        <Card :email="post.email" :title="post.title" :url="post.url" :comments="post.comments"/>
    </div>
</template>

<style scoped>
input {
    cursor: text;
}
</style>
