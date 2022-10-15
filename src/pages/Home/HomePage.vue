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
                'Accept': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
        })
            .then((response) => {
                if (response.ok)
                    return response.json();
                throw new Error(response.statusText);
            })
            .then((res) => {
                const {email, posts} = res
                this.posts = posts
                this.currentUser = email
                console.log("this.post", (this.posts));
            })
            .catch((err) => {
                console.error((err));
            });
    },
    data() {
        return {
            posts: [],
            currentUser: "",
        }
    }
};
</script>

<template>
    <Navbar />
    <PostForm />
    <div v-if="posts.length === 0">
        No posts yet, create one!
        </div>
    <div v-for="post in posts">
        <Card :currentUser="currentUser" :createdAt="post.createdAt" :email="post.user.email" :title="post.title" :url="post.url" :comments="post.comments" :id="post.id" :likesNbr="post.likesNbr" :likedBy="post.likedBy"/>
    </div>
</template>

<style scoped>
input {
    cursor: text;
}
</style>
