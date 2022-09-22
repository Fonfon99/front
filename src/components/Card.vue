<script>
    export default {
        name: "Card",
        
    };
</script>
<template>
<div class="card rounded bg-light mx-auto mt-4" style="width: 95%">
    <div class="d-flex mt-2 mb-3">
        <div class="mx-2">
            <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
        </div>
        <div class="d-flex align-item-center">
            <span class="mx-1 pt-2" style="color: rgb(120, 124, 126) ; font-size: 8px;">•</span>
            <span class="me-1" style="color: rgb(120, 124, 126);">Posted by</span>
            <div class="me-1" style="color: rgb(120, 124, 126)">username</div>
            <span class="_2VF2J19pUIMSLJFky-7PEI" style="color: rgb(120, 124, 126);">15 hours ago</span>
        </div>
    </div>
    <div class="_2FCtq-QzlfuN-SwVMUZMM3 _3wiKjmhpIpoTE2r5KCm2o6 t3_xklvh2">
        <div class="_2SdHzo12ISmrC8H86TgSCp _3wqmjmv3tb_k-PROt7qFZe " style="--posttitletextcolor:#222222;">
            <h3 class="_eYtD2XCVieq6emjKBH3m">Title or comments</h3>
        </div>
    </div>
    <div class="mt-2">
        <div class="position-relative" style="max-height: 360px; overflow: hidden;">
            <img class="card-img-bottom" src="https://picsum.photos/300/200">
            <div class="pb-auto" style="padding-bottom:35%"></div>
        </div>
    </div>
    <div class="d-flex position-relative my-2 mx-2">
        <a class="d-flex" href="">
            <font-awesome-layers full-width class="fa-2x">
                <font-awesome-icon icon="fa-regular fa-comment-dots" />
                <font-awesome-layers-text counter value="1" position="top-right" />
            </font-awesome-layers>
            <div class="ms-2 pt-1">Add comment</div>
        </a> 
        <div class="position-absolute bottom-0 end-0">
            <font-awesome-icon icon="fa-regular fa-thumbs-up" size="2x"></font-awesome-icon>
        </div>
    </div>
</div>
</template>

<style></style>