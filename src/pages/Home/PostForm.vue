<script>
    export default {
        name: "PostForm",
        // data() {
        //     return {
        //         title: "",
        //         body: "",
        //         error: "",
        //     };
        // },
        // methods: {
        //     createPost() {
        //         this.$store.dispatch("createPost", {
        //             title: this.title,
        //             body: this.body,
        //         });
        //     },
        // },
    };
</script>
<template>
    <div class="wall mt-4 d-block">
        <div class="container-sm rounded border d-flex m bg-white w-75">
            <div class="p-1">
                <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center" style="width: 40px; height: 40px" alt="Avatar">
                    <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                </div>
            </div>
            <input type="text" name="createPost" class="ps-3 my-1 flex-grow-1 me-3 w-auto rounded border border-1 bg-light"
                placeholder="Create Post" />
            <button class="btn btn-light my-auto">
                <font-awesome-icon icon="fa-solid fa-image"/>
            </button>
            
            <button type="button" class="btn btn-primary my-auto ms-3">Post</button>
        </div>
        <hr class="dropdown-divider mt-4 mx-auto border w-75 justify-content-center"/>
    </div>
</template>
<style>
    
</style>