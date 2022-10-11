<script>
export default {
  name: "Comment",
  props: ["email", "content", "id"],
  methods: {
  }
  
};
</script>
<template>
  <div class="mh-100 " style="background-color: #e7effd;">
    <div class="container text-dark pt-2">
      <div class="row d-flex justify-content-start">
        <div class="col-md-11 col-lg-9 col-xl-5">
          <div class="d-flex flex-start mb-4">
            <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center bg-white"
              style="width: 40px; height: 40px" alt="Avatar">
              <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
            </div>
            <div class="card w-100">
              <div class="card-body p-2">
                <div class="">
                  <h6>{{email}}</h6>
                  <div>
                    {{content}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>