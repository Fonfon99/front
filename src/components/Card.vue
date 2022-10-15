<script>
import Comment from './Comment.vue';
export default {
    name: "Card",
    components: { Comment },
    props: ['email', 'title', 'createdAt', 'url', 'comments', 'id', 'currentUser', 'likesNbr', 'likedBy'],
    data() {
        return {
            admin: import.meta.env.VITE_ADMIN_USER,
            currentComment: "",
            postliked: false,
        };
    },
    mounted() {
        
    },
    methods: {
        likeDislike() { 
            const url = import.meta.env.VITE_POST_URL + "/" + this.id + "/like";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    LikedBy: this.currentUser,
                    likesNbr: this.likesNbr
                })
            })
                .then((response) => {
                    console.log("response", response);
                    if (response.ok)
                        return response.json();
                    throw new Error(response.statusText);
                })
                .then((res) => {
                    console.log("res", (res));
                    if (res.like === true) {
                        this.postliked = true;
                    } else {
                        this.postliked = false;
                    }
                   this.$router.go();
                })
                .catch((err) => {
                    console.error((err));
                });
        },
        
        addComment(e){
            fetch(import.meta.env.VITE_POST_URL + "/" + this.id + "/comments", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    content: this.currentComment,
                    email: this.email,

                })
            })
                .then((response) => {
                    if (response.ok)
                        return response.json();
                    throw new Error(response.statusText);
                })
                .then((res) => {
                    console.log(res);
                    this.$router.go();
                })
                .catch((err) => {
                    console.error((err));
                });
        },
        updatePost(){
            
        },
        deletePost(e){
            fetch(import.meta.env.VITE_POST_URL + "/" + this.id, {
                method: 'DELETE',
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
                    this.$router.go();
                })
                .catch((err) => {
                    console.error((err));
                });
        }
    }
}

</script>
<template>
    <div class="card rounded bg-light mx-auto my-4" style="width: 75%">
        <div class="d-flex mt-2 mb-3">
            <div class="ms-3 me-2 rounded-circle border d-flex justify-content-center align-items-center"
                style="width: 40px; height: 40px" alt="Avatar">
                <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
            </div>
            <div class="d-flex my-auto">
                <span class="mx-1 pt-2" style="color: rgb(120, 124, 126) ; font-size: 8px;">•</span>
                <span class="me-1" style="color: rgb(120, 124, 126);">Posted by</span>
                <div class="me-1" style="color: rgb(120, 124, 126)">{{email}}</div>
                <!-- <span style="color: rgb(120, 124, 126);">{{createdAt}}</span> -->
            </div>
            <div class="ms-auto me-3 my-auto">
            <!-- <i v-if="currentUser === email || currentUser === admin" class="fa-solid fa-pencil" @click.prevent="updatePost"></i> -->
            <i v-if="currentUser === email || currentUser === admin" class="fas fa-times" @click.prevent="deletePost"></i>
            </div>
        </div>
        <div class="ms-4">
            {{title}}
        </div>
        <div class="mt-2 mx-auto" style="width:90%">
            <div class="position-relative" style="max-height: 360px; overflow: hidden;">
                <img v-if="url" class="card-img-bottom" :src=url>
            </div>
        </div>
        <div class="d-flex position-relative mx-3 pb-3 mt-3 ">
            <div class="w-100">
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        comments
                    </button>
                    <div class="position-absolute-fixed d-flex my-1 me-4">
                        <span class="fa-fw">
                        <font-awesome-icon v-if="postliked === false" icon="fa-regular fa-thumbs-up" size="2x" @click="likeDislike()"/>
                        <font-awesome-icon v-if="postliked === true" icon="fa-solid fa-thumbs-up" size="2x" @click="likeDislike()"/>
                        <span class="fa-layers-counter fa-3x">{{likesNbr}}</span>
                    </span>
                    </div>
                </div>
                <div class="collapse" id="collapseExample">
                    <div class="card mt-2">
                        <div v-for="comment in comments">
                        <Comment :email="comment.user.email" :content="comment.content"/>
                        </div>
                        <div class="container-sm rounded border d-flex m bg-white">
                            <div class="p-1">
                                <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center"
                                    style="width: 40px; height: 40px" alt="Avatar">
                                    <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                                </div>
                            </div>
                            <input type="text" name="createPost"
                                class="ps-3 my-1 flex-grow-1 me-4 w-auto rounded border border-1 bg-light"
                                placeholder="Post comment" v-model="currentComment" />
                            <button type="button" class="btn btn-primary my-auto" @click="addComment">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style >
.fa-times:hover {
    cursor: pointer;
    color: red;
    transform: scale(1.2);
}
</style>