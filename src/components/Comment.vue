<script>
export default {
  name: "Comment",
  props: {
      email: {
          type: String,
          required: true,
      },
      content: {
          type: String,
          required: true,
      },
      like: {
          type: Number,
          required: true,
      },
  },
  methods: {
    afficherComment(event) {
      let path;
      if (event.path[3].children[3].matches(".react")) {
        path = event.path[3].children[4];
      } else {
        path = event.path[3].children[3];
      }
      if (path.matches(".disp")) {
        path.classList.remove("disp");
      } else {
        path.classList.add("disp");
      }
    },
  }
  // data() {
  //     return {
  //         showReply: false,
  //         reply: "",
  //         error: "",
  //     };
  // },
  // methods: {
  //     toggleReply() {
  //         this.showReply = !this.showReply;
  //     },
  //     async replyComment() {
  //         try {
  //             await this.$store.dispatch("replyComment", {
  //                 commentId: this.comment.id,
  //                 reply: this.reply,
  //             });
  //             this.reply = "";
  //             this.showReply = false;
  //         } catch (error) {
  //             this.error = error.message;
  //         }
  //     },
  // },
};
</script>
<template>
  <section class="gradient-custom">
    <div class="container my-2 py-2">
      <div class="row d-flex w-auto">
        <div class="col-md-12 col-lg-10 col-xl-8 w-100">
          <div class="row">
            <div class="col">
              <div class="d-flex flex-start">
                <img class="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="40"
                  height="40" />
                <div class="flex-grow-1 flex-shrink-1">
                  <div>
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="mb-1">
                        {{email}} <span class="small">- 2 hours ago</span>
                      </p>
                      <a href="#!"><i class="fas fa-reply fa-xs"></i><span class="small"> reply</span></a>
                    </div>
                    <p class="small mb-0">
                      {{content}}
                    </p>
                  </div>

                  <div class="d-flex flex-start mt-4">
                    <a class="me-3" href="#">
                      <img class="rounded-circle shadow-1-strong"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp" alt="avatar" width="40"
                        height="40" />
                    </a>
                    <div class="flex-grow-1 flex-shrink-1">
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-1">
                            Simona Disa <span class="small">- 3 hours ago</span>
                          </p>
                        </div>
                        <p class="small mb-0">
                          letters, as opposed to using 'Content here, content here',
                          making it look like readable English.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-start mt-4">
                    <a class="me-3" href="#">
                      <img class="rounded-circle shadow-1-strong"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="40"
                        height="40" />
                    </a>
                    <div class="flex-grow-1 flex-shrink-1">
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-1">
                            John Smith <span class="small">- 4 hours ago</span>
                          </p>
                        </div>
                        <p class="small mb-0">
                          the majority have suffered alteration in some form, by
                          injected humour, or randomised words.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-start mt-4">
                <img class="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp" alt="avatar" width="40"
                  height="40" />
                <div class="flex-grow-1 flex-shrink-1">
                  <div>
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="mb-1">
                        Natalie Smith <span class="small">- 2 hours ago</span>
                      </p>
                      <a href="#!"><i class="fas fa-reply fa-xs"></i><span class="small"> reply</span></a>
                    </div>
                    <p class="small mb-0">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32 and
                      1.10.33.
                    </p>
                  </div>

                  <div class="d-flex flex-start mt-4">
                    <a class="me-3" href="#">
                      <img class="rounded-circle shadow-1-strong"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="40"
                        height="40" />
                    </a>
                    <div class="flex-grow-1 flex-shrink-1">
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-1">
                            Lisa Cudrow <span class="small">- 4 hours ago</span>
                          </p>
                        </div>
                        <p class="small mb-0">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                          scelerisque ante sollicitudin commodo. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-start mt-4">
                    <a class="me-3" href="#">
                      <img class="rounded-circle shadow-1-strong"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(29).webp" alt="avatar" width="40"
                        height="40" />
                    </a>
                    <div class="flex-grow-1 flex-shrink-1">
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-1">
                            Maggie McLoan <span class="small">- 5 hours ago</span>
                          </p>
                        </div>
                        <p class="small mb-0">
                          a Latin professor at Hampden-Sydney College in Virginia,
                          looked up one of the more obscure Latin words, consectetur
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-start mt-4">
                    <a class="me-3" href="#">
                      <img class="rounded-circle shadow-1-strong"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="40"
                        height="40" />
                    </a>
                    <div class="flex-grow-1 flex-shrink-1">
                      <div>
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="mb-1">
                            John Smith <span class="small">- 6 hours ago</span>
                          </p>
                        </div>
                        <p class="small mb-0">
                          Autem, totam debitis suscipit saepe sapiente magnam officiis
                          quaerat necessitatibus odio assumenda, perferendis quae iusto
                          labore laboriosam minima numquam impedit quam dolorem!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
</style>