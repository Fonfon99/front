<script>
import Comment from './Comment.vue';
export default {
    name: "Card",
    components: { Comment},
    props: ['email', 'title', 'createdAt', 'url', 'comments', 'id', 'currentUser', 'likesNbr'],
    data() {
        return {
            admin: import.meta.env.VITE_ADMIN_USER,
            currentComment: "",
            postliked: false,
            valeur: "#test" + this.id,
            valeur2: "test" + this.id,
        };
    },
    mounted() {
        const url = import.meta.env.VITE_POST_URL + "/" + this.id + "/like";
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
                this.postliked = res.like;
            })
            .catch((err) => {
                console.error((err));
                if (err.message === "Unauthorized") {
                    localStorage.removeItem('token');
                    this.$router.push("/login");
                }
            });

        
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
                    likesNbr: this.likesNbr
                })
            })
                .then((response) => {
                    if (response.ok)
                        return response.json();
                    throw new Error(response.statusText);
                })
                .then((res) => {
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
                    this.$router.go();
                })
                .catch((err) => {
                    console.error((err));
                });
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
        },
        displayImg(e) {
            const ModalImg = document.getElementById("modal-img");
            ModalImg.src = e.target.currentSrc;
            const myModal = new bootstrap.Modal(document.getElementById('ImageModal'));
            myModal.show();
        },
    }
}

</script>
<template>
    <div class="card rounded-4 mx-auto my-4 shadow " style="width: 75%">
        <div class="d-flex mt-2 mb-2">
            <div class="ms-3 me-2 rounded-circle border d-flex justify-content-center align-items-center"
                style="width: 35px; height: 35px" alt="Avatar">
                <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
            </div>
            <div class="d-flex my-auto">
                <small class="me-1" style="color: rgb(120, 124, 126);">Posted by</small>
                <small class="me-1" style="color: rgb(120, 124, 126)">{{email}}</small>
               
            </div>
            <div class="ms-auto me-3 my-auto">
            
            <i v-if="currentUser === email || currentUser === admin" class="fas fa-times" @click.prevent="deletePost"></i>
            </div>
        </div>
        <hr class="mt-1 mb-4">
        <div class="ms-4">
            {{title}}
        </div>

<div class="mt-2" >
    <div class="position-relative"  style="max-height: 360px; overflow: hidden;">
        <img v-if="url" class="post-img card-img rounded-0 overflow-hidden" @click.prevent="displayImg" :src=url>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="ImageModal" tabindex="-1" aria-labelledby="ImageModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img v-if="url" id="modal-img" class="card-img rounded-0 overflow-hidden" :src=url>
      </div>
    </div>
  </div>
</div>
        <div class="d-flex position-relative mx-3 pb-3 mt-4 ">
            <div class="w-100">
                <div class="d-flex justify-content-between">
                    <button class="btn btncom rounded-4" type="button" data-bs-toggle="collapse"
                        :data-bs-target="valeur" aria-expanded="false" aria-controls="collapseExample">
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
            <div class="collapse" :id="valeur2">
                    <div class="card mt-2">
                        <div v-for="comment in comments">
                        <Comment :email="comment.user.email" :content="comment.content"/>
                        </div>
                        <div class="container-sm rounded-4 d-flex m bg-white">
                            <div class="p-1">
                                <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center"
                                    style="width: 40px; height: 40px" alt="Avatar">
                                    <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                                </div>
                            </div>
                            <input type="text" name="createPost"
                                class="ps-3 my-1 flex-grow-1 me-4 w-auto rounded border border-1 bgcoms"
                                placeholder="Post comment" v-model="currentComment" />
                            <button type="button" class="btn btn-primary rounded-4 my-auto" @click="addComment">Post</button>
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
    color: #ff8080;
    transform: scale(1.2);
}
.fa-thumbs-up {
    color: #ffd7d7;
}

.fa-thumbs-up:hover {
    cursor: pointer;
    color: #ff8080;
    transform: scale(1.1);
}
.fa-layers-counter {
    background-color: #ff8080 ;
}

.post-img {
    width: 110% !important;
}
.post-img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.5s;
    filter: blur(1.3px);
}
.btncom {
    background: #ffd7d78c !important;
}
.btncom:hover {
    background: #ffd7d7 !important;
}
.bgcoms {
    background: #ffd7d71c !important;
}

</style>