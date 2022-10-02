<script>
    import Comment from './Comment.vue';
    export default {
    name: "Card",
    components: { Comment }
};
</script>
<template>
<div class="card rounded bg-light mx-auto mt-4" style="width: 75%">
    <div class="d-flex mt-2 mb-3">
        <div class="ms-3 me-2 rounded-circle border d-flex justify-content-center align-items-center" style="width: 40px; height: 40px" alt="Avatar">
            <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
        </div>
        <div class="d-flex my-auto">
            <span class="mx-1 pt-2" style="color: rgb(120, 124, 126) ; font-size: 8px;">•</span>
            <span class="me-1" style="color: rgb(120, 124, 126);">Posted by</span>
            <div class="me-1" style="color: rgb(120, 124, 126)">username</div>
            <span style="color: rgb(120, 124, 126);">15 hours ago</span>
        </div>
    </div>
        <div class="ms-2">
            <h3>Title or comments</h3>
        </div>
    <div class="mt-2 mx-auto" style="width:90%">
        <div class="position-relative" style="max-height: 360px; overflow: hidden;">
            <img class="card-img-bottom" src="https://picsum.photos/300/200">
            <div class="pb-auto" style="padding-bottom:35%"></div>
        </div>
    </div>
    <div class="d-flex position-relative mx-3 pb-3 mt-3">
        <div class="accordion w-75" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <font-awesome-layers full-width class="fa-2x">
                <font-awesome-icon icon="fa-regular fa-comment-dots" />
                <font-awesome-layers-text counter value="1" position="top-right" />
            </font-awesome-layers>
            <div class="ms-2 pt-1">Add comment</div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <Comment />
        <div class="container-sm rounded border d-flex m bg-white">
            <div class="p-1">
                <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center" style="width: 40px; height: 40px" alt="Avatar">
                    <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                </div>
            </div>
            <input type="text" name="createPost" class="ps-3 my-1 flex-grow-1 me-4 w-auto rounded border border-1 bg-light"
                placeholder="Post comment" />
            <button type="button" class="btn btn-primary my-auto">Post</button>
        </div>
      </div>
    </div>
  </div>
</div>
        <div class="position-absolute-fixed d-flex justify-content-between my-auto ms-5">
            <font-awesome-icon icon="fa-regular fa-thumbs-up" size="2x"></font-awesome-icon>
        </div>
    </div>
</div>


</template>

<style></style>