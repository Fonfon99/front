<script>
    export default {
        name: "PostForm",
        data() {
            return {
                title: "",
                email: "",
                url: null,
            };
        },
        methods: {
            addImage(e) {
                this.url = e.target.files[0];
            },
            submitPost() {
                const url = import.meta.env.VITE_POST_URL;
                const formData = new FormData();
                
                formData.append("title", this.title);  
                formData.append("email", this.email);
                formData.append("url", this.url); 
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem("token")
                    },
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok)
                            return response.json();
                        throw new Error(response.statusText);
                    })
                    .then((response) => {
                        this.$router.go();
                    })
                    .catch((err) => {
                        console.error((err));
                    });
            }
        }
    };
</script>
<template>
    <div class="wall mt-5 pt-5">
        <div class="container-sm shadow-sm rounded-4 border d-flex m bg-white w-75 p-2">
            <div class="p-1 d-flex flex-grow-1">
                <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center" style="width: 35px; height: 35px" alt="Avatar">
                    <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                </div>
                <input type="text" name="createPost" class="ps-3 flex-grow-1 w-auto rounded border border-1 bgtext"
                    placeholder="Create Post" v-model="title"/>
            </div>
            <div class="post-form d-flex ms-auto">
                <label class="btn btnimg d-flex justify-content-center m-auto bg-light" for="customFile">
                    <font-awesome-icon icon="fa-solid fa-image fa-lg"></font-awesome-icon>
                </label>
                <input type="file" class="form-control" id="customFile" @change="addImage"/>
                <span v-if="url" class="m-auto">{{url.name}}</span>
                <button type="button" class="btn btnpost rounded-4 my-auto mx-1" @click.prevent="submitPost">Post</button>
           </div>
        </div>
        <hr class="dropdown-divider mt-4 mx-auto border w-75 justify-content-center"/>
    </div>
</template>
<style scoped>
@media (max-width: 575.98px) {
    .container-sm {
        display: flex;
        flex-direction: column ;
        align-items: center;
    }
    .p-1 {
        width: 100%;
    }
    .post-form {
        width: 100% !important;
        margin-left: 0 !important;
        justify-content: space-between !important;
        padding-bottom: 5px !important;
    }
}
#customFile {
    display: none;
}
label {
    width: 2rem;
}
.btnpost{
    background: #ffd7d78c !important;
}
.btnpost:hover{
    background: #ffd7d7 !important;
}
.btnimg:hover {
    background: #ffd7d7 !important;
}
.btnimg{
    background: #ffd7d78c !important;
}
.bgtext {
    background: #ffd7d71c!important;
}
</style>